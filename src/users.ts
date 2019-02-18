import { AuthError           } from './utils'       ;
import { PDB                 } from './utils'       ;
import { PouchDBUserDoc      } from './utils'       ;
import { PutUserOptions      } from './utils'       ;
import { BasicResponse       } from './utils'       ;
import { LoginOptions        } from './utils'       ;
import { doFetch             } from './utils'       ;
import { getBasicAuthHeaders } from './utils'       ;
import { getBaseUrl          } from './utils'       ;
import { debuglog, debugerr  } from './utils'       ;
import { debuglogemph        } from './utils'       ;
import { assign              } from 'pouchdb-utils' ;
import { clone               } from 'pouchdb-utils' ;
import { toPromise           } from 'pouchdb-utils' ;

// import * as PouchDB from 'pouchdb-core';

const getUsersDatabaseUrl = function():string {
  let db:PDB = this;
  let userDBURL:string = getBaseUrl(db) + '/_users';
  // console.log(`getUsersDatabaseUrl(): URL and DB is:\n`, userDBURL);
  // console.log(`getUsersDatabaseUrl(): DB is:`, db);
  return userDBURL;
};

const hasRole = async function(username:string, role:string, opts?:PutUserOptions):Promise<boolean> {
  try {
    let db:PDB = this;
    debuglogemph(`PouchDB.hasRole(): Called for user '${username}'`);
    let userdoc:PouchDBUserDoc = await db.getUser(username, opts);
    let roles:string[] = userdoc.roles || [];
    if(roles.indexOf(role) > -1) {
      return true;
    }
    return false;
  } catch(err) {
    throw err;
  }
};

const getRoles = async function(username:string, opts?:PutUserOptions):Promise<string[]> {
  try {
    let db:PDB = this;
    debuglogemph(`PouchDB.getRoles(): Called for user '${username}'`);
    let userdoc:PouchDBUserDoc = await db.getUser(username, opts);
    let roles:string[] = userdoc.roles || [];
    return roles;
  } catch(err) {
    throw err;
  }
};

const addRoles = async function(username:string, roles:string|string[], opts?:PutUserOptions):Promise<BasicResponse> {
  try {
    let db:PDB = this;
    debuglogemph(`PouchDB.addRoles(): Called for user '${username}' and role '${roles}'`);
    let userdoc:PouchDBUserDoc = await db.getUser(username, opts);
    let newRoles:string[] = userdoc.roles || [];
    let rolesToAdd:string[] = Array.isArray(roles) ? roles : typeof roles === 'string' ? [roles] : [];
    rolesToAdd = rolesToAdd.filter((a:string) => {
      return typeof a === 'string';
    });
    for(let role of rolesToAdd) {
      if(newRoles.indexOf(role) > -1) {
        /* This role already exists for this user */
        continue;
      } else {
        newRoles.push(role);
      }
    }
    newRoles.sort();
    userdoc.roles = newRoles;
    let res:BasicResponse = await updateUser(db, userdoc, opts);
    return res;
  } catch(err) {
    throw err;
  }
};

const deleteRoles = async function(username:string, roles:string|string[], opts?:PutUserOptions):Promise<BasicResponse> {
  try {
    let db:PDB = this;
    debuglogemph(`PouchDB.deleteRoles(): Called for user '${username}' and role '${roles}'`);
    let userdoc:PouchDBUserDoc = await db.getUser(username, opts);
    let existingRoles:string[] = userdoc.roles || [];
    let rolesToDelete:string[] = Array.isArray(roles) ? roles : typeof roles === 'string' ? [roles] : [];
    let filteredExistingRoles:string[] = existingRoles.filter((a:string) => {
      if(rolesToDelete.indexOf(a) > -1) {
        return false;
      } else {
        return true;
      }
    });
    userdoc.roles = filteredExistingRoles;
    let res:BasicResponse = await updateUser(db, userdoc, opts);
    return res;
  } catch(err) {
    throw err;
  }
};

const updateUser = async function(db:PDB, user:PouchDBUserDoc, opts:PutUserOptions):Promise<BasicResponse> {
  try {
    let id:string = user && typeof user._id === 'string' ? user._id : "UNKNOWN_USER";
    debuglogemph(`PouchDB.updateUser(): Called for '${id}'`);
    let options:any = opts != undefined ? opts : {};
    let reservedWords:string[] = [
      '_id',
      '_rev',
      'name',
      'type',
      'roles',
      'password',
      'password_scheme',
      'iterations',
      'derived_key',
      'salt',
    ];
  
    if(options.metadata) {
      for(let key in options.metadata) {
        if(options.metadata.hasOwnProperty(key) && reservedWords.indexOf(key) !== -1) {
          let err:AuthError = new AuthError('cannot use reserved word in metadata: "' + key + '"');
          throw err;
        }
      }
      user = assign(user, options.metadata);
    }
  
    if(options.roles) {
      user = assign(user, {roles: options.roles});
    }
  
    let url:string = '/_users/' + encodeURIComponent(user._id);
    let ajaxOpts:any = assign({
      method: 'PUT',
      body: user,
      headers: getBasicAuthHeaders(db),
    }, options.ajax || {});
  
    let res:BasicResponse = await doFetch(db, url, ajaxOpts);
    return res;
  } catch(err) {
    throw err;
  }
};

const signUp = async function (username:string, password:string, opts:PutUserOptions):Promise<BasicResponse> {
  try {
    debuglogemph(`PouchDB.signUp(): Called for '${username}'`);
    let db:PDB = this;
    let options:any = opts != undefined ? opts : {};
    if(['http', 'https'].indexOf(db.type()) === -1) {
      let err:AuthError = new AuthError('This plugin only works for the http/https adapter. So you should use new PouchDB("http://mysite.com:5984/mydb") instead.');
      throw err;
    } else if (!username) {
      let err:AuthError = new AuthError('You must provide a username');
      throw err;
    } else if (!password) {
      let err:AuthError = new AuthError('You must provide a password');
      throw err;
    }
  
    let userId:string = 'org.couchdb.user:' + username;
    let user:PouchDBUserDoc = {
      name: username,
      password: password,
      roles: [],
      type: 'user',
      _id: userId,
    };
  
    let res:BasicResponse = await updateUser(db, user, options);
    return res;
  } catch(err) {
    throw err;
  }
};

const getUser = async function(username:string, opts:LoginOptions):Promise<PouchDBUserDoc> {
  try {
    debuglogemph(`PouchDB.getUser(): Called for '${username}'`);
    let db:PDB = this;
    let options:any = opts != undefined ? opts : {};
    if(!username) {
      let err:AuthError = new AuthError('you must provide a username');
      throw err;
    }
  
    let url:string = '/_users/' + encodeURIComponent('org.couchdb.user:' + username);
    let ajaxOpts:any = assign({
      method: 'GET',
      headers: getBasicAuthHeaders(db),
    }, options.ajax || {});
  
    let res:PouchDBUserDoc = await doFetch(db, url, ajaxOpts);
    return res;
  } catch(err) {
    throw err;
  }
};

const putUser = async function (username:string, opts:PutUserOptions):Promise<BasicResponse> {
  try {
    debuglogemph(`PouchDB.putUser(): Called for '${username}'`);
    let db:PDB = this;
    let options:any = opts != undefined ? opts : {};
    if(['http', 'https'].indexOf(db.type()) === -1) {
      let err:AuthError = new AuthError('This plugin only works for the http/https adapter. So you should use new PouchDB("http://mysite.com:5984/mydb") instead.');
      throw err;
    } else if(!username) {
      let err:AuthError = new AuthError('You must provide a username');
      throw err;
    }
  
    let user:PouchDBUserDoc = await db.getUser(username, options);
    let res:BasicResponse = await updateUser(db, user, options);
    return res;
  } catch(err) {
    throw err;
  }
};

const deleteUser = async function(username:string, opts:LoginOptions):Promise<BasicResponse> {
  try {
    debuglogemph(`PouchDB.deleteUser(): Called for '${username}'`);
    let db:PDB = this;
    let options:any = opts != undefined ? opts : {};
    if (['http', 'https'].indexOf(db.type()) === -1) {
      let err:AuthError = new AuthError('This plugin only works for the http/https adapter. So you should use new PouchDB("http://mysite.com:5984/mydb") instead.');
      throw err;
    } else if(!username) {
      let err:AuthError = new AuthError('You must provide a username');
      throw err;
    }
  
    let user:PouchDBUserDoc = await db.getUser(username, options);
    let url:string = '/_users/' + encodeURIComponent(user._id) + '?rev=' + user._rev;
    let ajaxOpts:any = assign({
      method: 'DELETE',
      headers: getBasicAuthHeaders(db),
    }, options.ajax || {});
    let res:BasicResponse = await doFetch(db, url, ajaxOpts);
    return res;
  } catch(err) {
    throw err;
  }
};

const changePassword = async function(username:string, password:string, opts:LoginOptions):Promise<BasicResponse> {
  try {
    debuglogemph(`PouchDB.changePassword(): Called for '${username}'`);
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

    let user:PouchDBUserDoc = await db.getUser(username, options);
    user.password = password;
    let url:string = '/_users/' + encodeURIComponent(user._id);
    let ajaxOpts:any = assign({
      method: 'PUT',
      headers: getBasicAuthHeaders(db),
      body: user,
    }, options.ajax || {});
    let res:BasicResponse = await doFetch(db, url, ajaxOpts);
    return res;
  } catch(err) {
    throw err;
  }
};

const changeUsername = async function(oldUsername:string, newUsername:string, opts:PutUserOptions):Promise<BasicResponse> {
  try {
    debuglogemph(`PouchDB.changeUsername(): Called for '${oldUsername}' => '${newUsername}'`);
    let db:PDB = this;
    let options:any = opts != undefined ? opts : {};
    let USERNAME_PREFIX:string = 'org.couchdb.user:';
    const fetch = async function(url:string, opts:LoginOptions):Promise<BasicResponse> {
      try {
        let options:any = opts != undefined ? opts : {};
        let res:BasicResponse = await doFetch(db, url, options);
        return res; 
      } catch(err) {
        throw err;
      }
    };
    const updateUser = async function(user:PouchDBUserDoc, opts:LoginOptions):Promise<BasicResponse> {
      try {
        let options:any = opts != undefined ? opts : {};
        let url:string = '/_users/' + encodeURIComponent(user._id);
        let updateOpts:any = assign({
          method: 'PUT',
          headers: getBasicAuthHeaders(db),
          body: user,
        }, options.ajax || {});
    
        let res:BasicResponse = await fetch(url, updateOpts);
        return res;
      } catch(err) {
        throw err;
      }
    };
    options.ajax = options.ajax || {};
    if(['http', 'https'].indexOf(db.type()) === -1) {
      let err:AuthError = new AuthError('This plugin only works for the http/https adapter. So you should use new PouchDB("http://mysite.com:5984/mydb") instead.');
      throw err;
    }
    if(!newUsername) {
      let err:AuthError = new AuthError('You must provide a new username');
      throw err;
    }
    if(!oldUsername) {
      let err:AuthError = new AuthError('You must provide a username to rename');
      throw err;
    }
    try {
      let res:PouchDBUserDoc = await db.getUser(newUsername, options);
      let err:AuthError = new AuthError('user already exists');
      err.taken = true;
      throw err;
    } catch(err) {
      try {
        let user:PouchDBUserDoc = await db.getUser(oldUsername, options);
        let newUser:PouchDBUserDoc = clone(user);
        delete newUser._rev;
        newUser._id = USERNAME_PREFIX + newUsername;
        newUser.name = newUsername;
        newUser.roles = options.roles || user.roles || [];
        let res:BasicResponse = await updateUser(newUser, options);
        user._deleted = true;
        res = await updateUser(user, options);
        return res;
      } catch(err) {
        throw err;
      }
    }
  } catch(err) {
    throw err;
  }
};

export {
  getUsersDatabaseUrl,
  signUp,
  getUser,
  putUser,
  deleteUser,
  changePassword,
  changeUsername,
  getRoles,
  addRoles,
  deleteRoles,
  hasRole,
};
