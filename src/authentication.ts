import { AuthError              } from './utils'       ;
import { AuthHeader             } from './utils'       ;
import { PDB                    } from './utils'       ;
import { LoginOptions           } from './utils'       ;
import { LoginResponse          } from './utils'       ;
import { BasicResponse          } from './utils'       ;
import { SessionResponse        } from './utils'       ;
import { doFetch                } from './utils'       ;
import { getBasicAuthHeadersFor } from './utils'       ;
import { getBasicAuthHeaders    } from './utils'       ;
import { debuglog, debugerr     } from './utils'       ;
import { debuglogemph           } from './utils'       ;
import { assign, toPromise      } from 'pouchdb-utils' ;
import { Headers                } from 'pouchdb-fetch' ;

const logIn = async function(username:string, password:string, opts:LoginOptions):Promise<LoginResponse> {
  try {
    debuglogemph(`PouchDB.logIn(): Called for '${username}'`);
    let db:PDB = this;
    let options:any = opts != undefined ? opts : {};
    if(['http', 'https'].indexOf(db.type()) === -1) {
      // return callback(new AuthError('this plugin only works for the http/https adapter'));
      let err:Error = new Error("pouchdb-authentication plugin only works for the http/https adapter");
      throw err;
    }
  
    if(!username) {
      // return callback(new AuthError('you must provide a username'));
      let err:Error = new Error("you must provide a username");
      throw err;
    } else if (!password) {
      // return callback(new AuthError('you must provide a password'));
      let err:Error = new Error("you must provide a password");
      throw err;
    }
  
    let url:string = '/_session';
    let headers:Headers = getBasicAuthHeadersFor(username, password);
    headers.append('Content-Type', 'application/json');
    let ajaxOpts:any = assign({
      method: 'POST',
      // headers: assign({'Content-Type': 'application/json'}, getBasicAuthHeaders(db)),
      headers: headers,
      body: {name: username, password: password},
    }, options.ajax || {});

    let res:LoginResponse = await doFetch(db, url, ajaxOpts);
    if(db && db.__opts) {
      if(db.__opts.auth) {
        db.__opts.auth.username = username;
        db.__opts.auth.password = password;
      } else {
        let auth:AuthHeader = {
          username: username,
          password: password,
        };
        db.__opts.auth = auth;
      }
    }
    return res;
  } catch(err) {
    throw err;
  }
};

const logOut = async function(opts:LoginOptions):Promise<BasicResponse> {
  try {
    debuglogemph(`PouchDB.logOut(): Called`);
    let db:PDB = this;
    let options:any = opts != undefined ? opts : {};
    let url:string = '/_session';
    let ajaxOpts:any = assign({
      method: 'DELETE',
      headers: getBasicAuthHeaders(db),
    }, options.ajax || {});
  
    let res:BasicResponse = await doFetch(db, url, ajaxOpts);
    if(db && db.__opts && db.__opts.auth) {
      delete db.__opts.auth;
    }
    return res;
  } catch(err) {
    try {
      debuglog(`======> PouchDB.logOut(): Caught error trying to log out`);
      debugerr(err);
      debuglog(`======> PouchDB.logOut(): Retrying without authentication …`);
      let db:PDB = this;
      let options:any = opts != undefined ? opts : {};
      let url:string = '/_session';
      let noAuthAjaxOpts:any = assign({
        method: 'DELETE',
        // headers: getBasicAuthHeaders(db),
      }, options.ajax || {});
      delete noAuthAjaxOpts.headers;
      let res:BasicResponse = await doFetch(db, url, noAuthAjaxOpts);
      if(db && db.__opts && db.__opts.auth) {
        delete db.__opts.auth;
      }
      debuglog(`======> PouchDB.logOut(): Successfully logged out after retrying without authentication headers.`);
      return res;
    } catch(err) {
      throw err;
    }
  }
};

const getSession = async function ():Promise<SessionResponse> {
  try {
    debuglogemph(`PouchDB.getSession(): Called`);
    let db:PDB = this;
    let url:string = '/_session';
    let ajaxOpts:any = {
      method: 'GET',
      headers: getBasicAuthHeaders(db),
    };
    let res:SessionResponse = await doFetch(db, url, ajaxOpts);
    return res;
  } catch(err) {
    throw err;
  }
};

export { logIn, logOut, getSession };
