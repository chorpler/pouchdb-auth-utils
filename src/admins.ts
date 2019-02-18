import { AuthError              } from './utils'       ;
import { PDB                    } from './utils'       ;
import { PouchDBUserDoc         } from './utils'       ;
import { PutUserOptions         } from './utils'       ;
import { BasicResponse          } from './utils'       ;
import { LoginOptions           } from './utils'       ;
import { CouchNodeMembership    } from './utils'       ;
import { doFetch                } from './utils'       ;
import { getBasicAuthHeaders    } from './utils'       ;
import { getBasicAuthHeadersFor } from './utils'       ;
import { debuglog, debugerr     } from './utils'       ;
import { debuglogemph           } from './utils'       ;
import { Headers                } from 'pouchdb-fetch' ;
// import { getBaseUrl             } from './utils'       ;
import { assign                 } from 'pouchdb-utils' ;
// import { toPromise              } from 'pouchdb-utils' ;

const getConfigUrl = function(db:PDB, nodeName?:string):string {
  return (nodeName ? '/_node/' + nodeName : '') + '/_config';
}

const getMembership = async function(opts:LoginOptions):Promise<CouchNodeMembership> {
  try {
    let db:PDB = this;
    let options:any = opts != undefined ? opts : {};
    // let serverURL:string = getBaseUrl(db);
    // let url:string = serverURL + '/_membership';
    let url:string = '/_membership';
    let ajaxOpts:any = assign({
      method: 'GET',
      headers: getBasicAuthHeaders(db),
    }, options.ajax || {});
    // console.log(`getMembership(): Fetching DB membership from URL '${url}'`);
    let res:CouchNodeMembership = await doFetch(db, url, ajaxOpts);
    // console.log(`getMembership(): DB membership is:\n`, res);
    return res;
  } catch(err) {
    throw err;
  }
};

const signUpAdmin = async function(username:string, password:string, opts:LoginOptions):Promise<BasicResponse> {
  try {
    debuglogemph(`PouchDB.signUpAdmin(): Called for '${username}'`);
    let db:PDB = this;
    let options:any = opts != undefined ? opts : {};
    if(['http', 'https'].indexOf(db.type()) === -1) {
      let err:AuthError = new AuthError('This plugin only works for the http/https adapter. So you should use new PouchDB("http://mysite.com:5984/mydb") instead.');
      throw err;
    } else if(!username) {
      let err:AuthError = new AuthError('You must provide a username');
      throw err;
    } else if(!password) {
      let err:AuthError = new AuthError('You must provide a password');
      throw err;
    }

    let membership:CouchNodeMembership;
    let nodeName:string;
    try {
      membership = await db.getMembership(options);
      // This is a CouchDB 2.x server
      nodeName = membership.all_nodes[0];
    } catch(err) {
      if(err.error && err.error === 'illegal_database_name') {
        throw err;
      } else {
        // This could be a CouchDB 1.x server
        nodeName = undefined;
      }
    }
    let configUrl:string = getConfigUrl(db, nodeName);
    // let headers:Headers = getBasicAuthHeadersFor(username, password);
    let url:string = (options.configUrl || configUrl) + '/admins/' + encodeURIComponent(username);
    let ajaxOpts:any = assign({
      method: 'PUT',
      processData: false,
      headers: getBasicAuthHeaders(db),
      // headers: headers,
      body: '"' + password + '"',
    }, options.ajax || {});
    let res:BasicResponse = await doFetch(db, url, ajaxOpts);
    return res;
  } catch(err) {
    throw err;
  }
};

const deleteAdmin = async function(username:string, opts:LoginOptions):Promise<BasicResponse> {
  try {
    debuglogemph(`PouchDB.deleteAdmin(): Called for '${username}'`);
    let db:PDB = this;
    let options:any = opts != undefined ? opts : {};
    if(['http', 'https'].indexOf(db.type()) === -1) {
      let err:AuthError = new AuthError('This plugin only works for the http/https adapter. So you should use new PouchDB("http://mysite.com:5984/mydb") instead.');
      throw err;
    } else if(!username) {
      let err:AuthError = new AuthError('You must provide a username');
      throw err;
    }
  
    let membership:CouchNodeMembership;
    let nodeName:string;
    try {
      membership = await db.getMembership(options);
      // This is a CouchDB 2.x server
      nodeName = membership.all_nodes[0];
    } catch(err) {
      if(err.error && err.error === 'illegal_database_name') {
        throw err;
      } else {
        // This could be a CouchDB 1.x server
        nodeName = undefined;
      }
    }
    let configUrl:string = getConfigUrl(db, nodeName);
    let url:string = (options.configUrl || configUrl) + '/admins/' + encodeURIComponent(username);
    let headers:Headers = getBasicAuthHeaders(db);
    let ajaxOpts:any = assign({
      method: 'DELETE',
      processData: false,
      headers: headers,
    }, options.ajax || {});
    let noAuthAjaxOpts:any = assign({}, ajaxOpts);
    delete noAuthAjaxOpts.headers;
    let res:BasicResponse;
    try {
      res = await doFetch(db, url, ajaxOpts);
      return res;
    } catch(fetchErr) {
      debuglogemph(`deleteAdmin(): Error deleting administ`)
    }
    return res;
  } catch(err) {
    throw err;
  }
};

export { getConfigUrl, getMembership, deleteAdmin, signUpAdmin };