import   * as PouchDB            from "pouchdb-core"         ;
import { Response as nResponse } from "node-fetch"           ;
import { RequestInit           } from "node-fetch"           ;
import fetch                     from "node-fetch"           ;
// import { Headers as nHeaders   } from "node-fetch"           ;
import   fetchCookie             from 'fetch-cookie'         ;
// import   * as tough              from 'tough-cookie'         ;
import { btoa                  } from "pouchdb-binary-utils" ;
// import { fetch as pFetch       } from 'pouchdb-fetch'        ;
import { fetch as pFetch       } from 'pouchdb'        ;
import { Headers               } from "pouchdb-fetch"        ;
import { assign, parseUri      } from "pouchdb-utils"        ;
import { AuthError             } from './AuthError'          ;
// import * as URLParse from 'url-parse';
// import URLParse = require('url-parse');
// import URLParse = require('url-parse');
import * as URLParse from 'url-parse';
import   Url           from 'url-parse'            ;
// import { Url                   } from 'url-parse'            ;

// import { URL as wURL           } from 'whatwg-url'           ;

// import * as Urlp from 'url-parse';
// import URLParse = require('url-parse');

const g = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {};
// var Cookie = tough.Cookie;
// type ParsedURL = Url.ParsedURL;
// const Url = (URLParse.default);
// const Url = URLParse;

type ParsedURL = URLParse.ParsedURL;
const emptyFunc = function(...args):any {};
const fakeUrl = {
  new: emptyFunc,
  // (address: string, parser?: boolean | URLParse.QueryParser): URLParse.ParsedURL;
  // (address: string, location?: string | object, parser?: boolean | URLParse.QueryParser): URLParse.ParsedURL;

  extractProtocol: emptyFunc,
  location: emptyFunc,
  qs: {
      parse: emptyFunc,
      stringify: emptyFunc,
  },
};
// const Url = URLParse && typeof URLParse.default !== 'undefined' ? URLParse.default : URLParse && typeof URLParse.location !== 'undefined' ? URLParse : fakeUrl;


const nodeFetch = fetch;
// const nodeFetch = pFetch;
const nFetch = nodeFetch;
const cFetch:Fetch = fetchCookie(nodeFetch);
const mode = typeof window !== 'undefined' ? 'browser' : 'node';

const StaticPouch:any = PouchDB;

const fet = typeof g['fetch'] === 'function' ? g['fetch'] : cFetch;
// const fet = typeof g['fetch'] === 'function' ? g['fetch'] : nFetch;
// const URL = typeof g['URL'] === 'function' ? g['URL'] : wURL;

interface ParsedURI {
  anchor     : string;
  authority  : string;
  directory  : string;
  file       : string;
  host       : string;
  password  ?: string;
  path       : string;
  port       : string;
  protocol   : string;
  query     ?: string;
  queryKey  ?: any   ;
  relative   : string;
  source     : string;
  user      ?: string;
  userInfo  ?: string;
}

interface AuthHeader {
  username?:string;
  password?:string;
}

interface PDBOpts {
  adapter?:string;
  skip_setup?:boolean;
  auth?:AuthHeader;
  prefix?:string;
  deterministic_revs?:boolean;
  name?:string;
}

interface UserContext {
  name: string;
  roles?: string[];
}

interface User extends UserContext {
}

interface PouchDBUserDoc extends User {
  _id?:string;
  _rev?:string;
  [propName:string]:any;
}

interface LoginResponse extends PouchDB.Core.BasicResponse, UserContext {
}

interface SessionResponse extends PouchDB.Core.BasicResponse {
  info: {
    authenticated: string;
    authentication_db: string;
    authentication_handlers: string[];
  };
  userCtx: UserContext;
}

interface PutUserOptions extends PouchDB.Core.Options {
  metadata?: any;
  roles?: string[];
}

interface CouchNodeMembership {
  all_nodes:string[];
  cluster_nodes:string[];
}

interface Database<Content extends {} = {}> extends PouchDB.Static {
    /**
     * Log in an existing user.
     * Throws an error if the user doesn't exist yet, the password is wrong, the HTTP server is unreachable, or a meteor struck your computer.
     */
  logIn(username: string, password: string, options?: PouchDB.Core.Options): Promise<LoginResponse>;

  /**
   * Logs out whichever user is currently logged in.
   * If nobody's logged in, it does nothing and just returns `{"ok" : true}`.
   */
  logOut(): Promise<PouchDB.Core.BasicResponse>;

  /**
   * Returns information about the CouchDB node membership of the server for the current database.
   */
  getMembership(options?:LoginOptions):Promise<CouchNodeMembership>;

  /**
   * Returns information about the current session.
   * In other words, this tells you which user is currently logged in.
   */
  getSession(): Promise<SessionResponse>;

  /**
   * Sign up a new user who doesn't exist yet.
   * Throws an error if the user already exists or if the username is invalid, or if some network error occurred.
   * CouchDB has some limitations on user names (e.g. they cannot contain the character `:`).
   */
  signUp(username: string, password: string, options?: PutUserOptions): Promise<PouchDB.Core.Response>;

  /**
   * Returns the user document associated with a username.
   * (CouchDB, in a pleasing show of consistency, stores users as JSON documents in the special `_users` database.)
   * This is the primary way to get metadata about a user.
   */
  getUser(username: string, options?: PouchDB.Core.Options):Promise<PouchDB.Core.Document<Content & User> & PouchDB.Core.GetMeta>;
  // getUser(username: string, options?: PouchDB.Core.Options):Promise<PouchDBUserDoc>;

  /**
   * Update the metadata of a user.
   */
  putUser(username: string, options?: PutUserOptions): Promise<PouchDB.Core.Response>;

  /**
   * Delete a user.
   */
  deleteUser(username: string, options?: PouchDB.Core.Options): Promise<PouchDB.Core.Response>;

  /**
   * Set new `password` for user `username`.
   */
  changePassword(username: string, password: string, options?: PouchDB.Core.Options): Promise<PouchDB.Core.Response>;

  /**
   * Renames `oldUsername` to `newUsername`.
   */
  changeUsername(oldUsername: string, newUsername: string, options?: PouchDB.Core.Options): Promise<PouchDB.Core.Response>;

  /**
   * Test if user `username` has role `role`.
   */
  hasRole(username: string, role: string, options?: PutUserOptions): Promise<boolean>;

  /**
   * Add roles `roles` to user `username`. `roles` can be a single string or an array of strings.
   * If any of the provided roles already exist for the user, they will not be duplicated.
   */
  addRoles(username: string, roles: string[], options?: PutUserOptions): Promise<PouchDB.Core.Response>;
  addRoles(username: string, roles: string, options?: PutUserOptions): Promise<PouchDB.Core.Response>;

  /**
   * Delete roles `roles` from user `username`. `roles` can be a single string or an array of strings.
   * If any of the provided roles do not exist for the user, they will be ignored (will not cause an error)
   */
  deleteRoles(username: string, roles: string[], options?: PutUserOptions): Promise<PouchDB.Core.Response>;
  deleteRoles(username: string, roles: string, options?: PutUserOptions): Promise<PouchDB.Core.Response>;

  /**
   * Sign up a new admin.
   */
  signUpAdmin(username: string, password: string, options?: PutUserOptions): Promise<string>;

  /**
   * Delete an admin.
   */
  deleteAdmin(username: string, options?: PouchDB.Core.Options): Promise<string>;
}

type PouchDatabase = Database<any>;

interface PDB extends PouchDatabase {
  __opts:PDBOpts;
  prefix?:string;
  type():string;
}

declare const window:any;

const debuglog = function(...args) {
  // if(window && (window.PouchDB && window.PouchDB.debug && typeof window.PouchDB.debug.enabled === 'function' && window.PouchDB.debug.enabled('pouchdb:authentication'))) {
  // if(window && window.PouchDB && typeof window.PouchDB.emit === 'function' && window.pouchdbauthenticationplugindebug) {
  //   window.PouchDB.emit('debug', ['authentication', ...args]);
  //   console.log(...args);
  // }
  let g;
  if(typeof window !== 'undefined') {
    g = window;
  } else if(typeof global !== 'undefined') {
    g = global;
  }
  if(!g) {
    return;
  }
  if(typeof PouchDB !== 'undefined' && typeof PouchDB.emit === 'function') {
    PouchDB.emit('debug', ['authentication', ...args]);
  }
  if(g && g['pouchdbauthenticationplugindebug'] === true && typeof console !== 'undefined' && typeof console.log === 'function') {
    console.log(...args);
  }
}

const debugloggroup = function(label) {
  let g;
  if(typeof window !== 'undefined') {
    g = window;
  } else if(typeof global !== 'undefined') {
    g = global;
  }
  if(!g) {
    return;
  }
  if(g && g['pouchdbauthenticationplugindebug'] === true && typeof console !== 'undefined' && typeof console.groupCollapsed === 'function') {
    console.groupCollapsed(label);
  }
}

const debugloggroupend = function() {
  let g;
  if(typeof window !== 'undefined') {
    g = window;
  } else if(typeof global !== 'undefined') {
    g = global;
  }
  if(!g) {
    return;
  }
  if(g && g['pouchdbauthenticationplugindebug'] === true && typeof console !== 'undefined' && typeof console.groupEnd === 'function') {
    console.groupEnd();
  }
}

const debuglogemph = function(msg) {
  // if(window && (window.PouchDB && window.PouchDB.debug && typeof window.PouchDB.debug.enabled === 'function' && window.PouchDB.debug.enabled('pouchdb:authentication'))) {
  // if(window && window.PouchDB && typeof window.PouchDB.emit === 'function' && window.pouchdbauthenticationplugindebug) {
  //   window.PouchDB.emit('debug', ['authentication', ...args]);
  //   console.log(...args);
  // }
  let g;
  if(typeof window !== 'undefined') {
    g = window;
  } else if(typeof global !== 'undefined') {
    g = global;
  }
  if(!g) {
    return;
  }
  if(g && g['pouchdbauthenticationplugindebug'] === true) {
    const es:string = "background-color:red; color:white;";
    if(typeof PouchDB !== 'undefined' && typeof PouchDB.emit === 'function') {
      PouchDB.emit('debug', ['authentication', msg]);
    }
    if(typeof console !== 'undefined' && typeof console.log === 'function') {
      if(g.chrome) {
        console.log("%c" + msg, es);
      } else {
        console.log(msg);
      }
    }
  }
}

const debugerr = function(...args) {
  // if(window && (window.PouchDB && window.PouchDB.debug && typeof window.PouchDB.debug.enabled === 'function' && window.PouchDB.debug.enabled('pouchdb:authentication'))) {
  // if(window && window.PouchDB && typeof window.PouchDB.emit === 'function' && window.pouchdbauthenticationplugindebug) {
  //   window.PouchDB.emit('debug', ['authentication', ...args]);
  //   console.error(...args);
  // }
  let g;
  if(typeof window !== 'undefined') {
    g = window;
  } else if(typeof global !== 'undefined') {
    g = global;
  }
  if(!g) {
    return;
  }
  let errs, strError, jsonError = {};
  if(g && (g.pouchdbauthenticationplugindebug || (typeof PouchDB !== 'undefined' && typeof PouchDB.emit === 'function'))) {
    errs = [...args];
    for(let err of errs) {
      if(err instanceof AuthError) {
        jsonError = err.toJSON();
        strError = JSON.stringify(jsonError);
        break;
      } else if(err instanceof Error) {
        strError = JSON.stringify(err);
        jsonError = JSON.parse(strError);
        if(strError === '{}') {
          jsonError = {
            message: err.message || "unknown_error_message",
            name: err.name || "unknown_error_name",
            stack: err.stack || "unknown_error_stack",
          };
          strError = JSON.stringify(jsonError);
        }
        // else {

        // }
        break;
      }
    }
  }
  if(typeof PouchDB !== 'undefined' && typeof PouchDB.emit === 'function') {
    PouchDB.emit('debug', ['authentication', "ERROR", ...args]);
    PouchDB.emit('debug', ['authentication', "STRERROR", strError]);
  }
  if(g && g['pouchdbauthenticationplugindebug'] === true && typeof console !== 'undefined' && typeof console.log === 'function' && typeof console.error === 'function') {
    const errcss:string = "font-weight: bold; background-color: rgba(255, 0, 0, 0.25);";
    if(errs[0]) {
      if(errs[0] instanceof AuthError) {
        console.log("%cPDBAUTH AUTHERROR:", errcss, jsonError);
        console.error(errs[0]);
      } else if(errs[0] instanceof Error) {
        console.log("%cPDBAUTH ERROR: ", errcss, jsonError);
        console.error(errs[0]);
      } else {
        console.error("%cPDBAUTH ERROR 1?: ", errcss, strError);
      }
    } else {
      console.error("%cPDBAUTH ERROR 2?: ", errcss, strError);
    }
  }
}
  // let err = [...args] || [{}];

const getBaseUrl = function(db:PDB):string {
  // Use PouchDB.defaults' prefix, if any
  let fullName:string;
  let dbname:string = db.name;
  // let type:string = db.type();
  let prefix:string = db && db.__opts && typeof db.__opts.prefix === 'string' ? db.__opts.prefix : '';
  if(prefix) {
    fullName = prefix + (prefix.endsWith('/') ? '' : '/') + dbname;
  } else {
    fullName = dbname;
  }

  // let uri:ParsedURI = parseUri(fullName);
  let p:ParsedURL = new Url(fullName);
  let path:string = p.pathname;
  let normalizedPath:string = path.endsWith('/') ? path.slice(0, -1) : path;
  // Compute parent path for databases not hosted on domain root (see #215)
  let parentPath:string = normalizedPath.split('/').slice(0,-1).join('/');
  // let port:string = p.port ? ":" + p.port : "";
  let baseUrl:string = `${p.origin}${parentPath}`;

  // let path:string = uri.path;
  // let normalizedPath:string = path.endsWith('/') ? path.substr(0, -1) : path;
  // let parentPath:string = normalizedPath.split('/').slice(0, -1).join('/');
  // let portString:string = uri.port ? `:${uri.port}` : '';
  // let baseURL:string = `${uri.protocol}://${uri.host}${portString}${parentPath}`;
  // // let baseURL:string = uri.protocol + '://' + uri.host + (uri.port ? ':' + uri.port : '') + parentPath;
  
  // console.log(`getBaseUrl(): Base URL is '${baseURL}'`);
  debuglog(`getBaseUrl(): Base URL is '${baseUrl}'`);
  return baseUrl;
}

const getDatabaseUrl = function(db:PDB):string {
  let fullName:string;
  let dbname:string = db.name;
  // let type:string = db.type();
  let prefix:string = db && db.__opts && typeof db.__opts.prefix === 'string' ? db.__opts.prefix : '';
  if(prefix) {
    fullName = prefix + (prefix.endsWith('/') ? '' : '/') + dbname;
  } else {
    fullName = dbname;
  }
  debuglog(`getDatabaseUrl(): Database URL is '${fullName}'`);
  return fullName;
}

const getRelativeComplexUrl = function(db:PDB, url:string):string {
  let dbBaseURL:string = getDatabaseUrl(db);
  let complexBaseUrl:string = makeBaseUrl(dbBaseURL, url);
  let dbname:string = db && db.name ? db.name : "UNKNOWN_POUCHDB_NAME";
  debuglog(`getRelativeComplexUrl(): Relative complex URL for database '${dbname}' and URL '${url}' is '${complexBaseUrl}'`);
  return complexBaseUrl;
}

const getComplexBaseUrl = function(db:PDB, url:string):string {
  let dbBaseURL:string = getDatabaseUrl(db);
  let complexBaseUrl:string = makeBaseUrl(dbBaseURL, url);
  let dbname:string = db && db.name ? db.name : "UNKNOWN_POUCHDB_NAME";
  debuglog(`getComplexBaseUrl(): Complex base URL for database '${dbname}' and URL '${url}' is '${complexBaseUrl}'`);
  return complexBaseUrl;
}

const makeBaseUrl = function(baseURL:string, newURL:string):string {
  // let newuri : ParsedURI = parseUri(newURL);
  // let puri   : ParsedURI = parseUri(baseURL);
  let outurl:string = "";
  baseURL = baseURL.slice(-1) === '/' ? baseURL.slice(0,-1) : baseURL;
  let baseuri:ParsedURL = new Url(baseURL);
  let puri:ParsedURL = new Url(newURL, baseURL);
  let relativePath:string = puri.pathname + puri.query;
  // let outurl:string = getURLWithoutSearchParams(baseURL);
  // outurl = outurl.slice(-1) === '/' ? outurl.slice(0,-1) : outurl;
  // let dir1:string = puri.directory + puri.file;
  let dir1:string = baseuri.pathname;
  let dirs:string[] = dir1.split('/');
  let len   : number = dirs.length;
  let last  : number = len - 1;
  let count : number = dirs[last] === "" ? len - 2 : len - 1;
  for (let i = 0; i < count; i++) {
    outurl += "../";
  }
  let addedpath:string = relativePath.slice(0,1) === '/' ? relativePath.slice(1) : relativePath;
  let newfile:string = addedpath;
  outurl += newfile;
  outurl = outurl.slice(0,1) === '/' ? outurl.slice(1) : outurl;
  debuglog(`makeBaseUrl(): Complicated base URL from '${baseURL}' and '${newURL}' is '${outurl}'`);
  return outurl;
}

function getURLWithoutSearchParams(url:string):string {
  let uri:ParsedURI = parseUri(url);
  let cleanURL:string = uri.protocol + "://" + uri.authority + uri.directory + uri.file;
  return cleanURL;
}

function getBasicAuthTokenFor(username:string, password:string):string {
  let authString:string = username + ":" + password;
  let token:string = btoa(decodeURIComponent(encodeURIComponent(authString)));
  return token;
}

function getBasicAuthStringFor(username:string, password:string):string {
  let token:string = getBasicAuthTokenFor(username, password);
  let authString:string = "Basic " + token;
  return authString;
}

function getBasicAuthHeadersFor(username:string, password:string):Headers {
  let authString:string = getBasicAuthStringFor(username, password);
  let headers:Headers = new Headers();
  headers.set('Authorization', authString);
  return headers;
}

const getBasicAuthHeaders = function(db?:PDB):Headers {
  let auth:AuthHeader;
  if(!db) {
    return new Headers();
  }
  if(db.__opts && db.__opts.auth) {
    auth = db.__opts.auth;
  } else {
    let uri:any = parseUri(db.name);
    if(uri.user || uri.password) {
      auth = {
        username: uri.user,
        password: uri.password,
      };
    }
  }

  if(!auth) {
    return new Headers();
  }

  return getBasicAuthHeadersFor(auth.username, auth.password);
  // let str:string = auth.username + ':' + auth.password;
  // let token:string = btoa(decodeURIComponent(encodeURIComponent(str)));

  // let headers:Headers = new Headers();
  // headers.set('Authorization', 'Basic ' + token);

  // return headers;
}

function getFullFetchURL(db:PDB, url:string):string {
  let base:string = getBaseUrl(db);
  let queryURL:string = url.startsWith("/") ? url : "/" + url;
  let fullURL:string = base + queryURL;
  // let p:ParsedURI = parseUri(fullURL);
  let p:ParsedURL = new Url(queryURL, base);
  // let port:string = p.port ? ":" + p.port : "";
  // let fetchURL:string = `${p.protocol}://${p.host}${port}${p.path}`;
  let fetchURL = p.href;
  return fetchURL;
}

async function doFetch(db:PDB, url:string, opts:any, forceDBFetch?:boolean):Promise<any> {
  try {
    opts = assign(opts || {});
    // let dbname = db && typeof db.fetch === 'function' 
    let dbname:string = getDatabaseUrl(db);
    // let groupLabel:string = `doFetch() called for DB '${dbname}' and URL '${url}' …`;
    let groupLabel:string = `doFetch() called for DB '${dbname}' and URL '${url}' and options:`;
    debuglog(groupLabel, opts);
    // debugloggroup(groupLabel);
    // debuglog(`doFetch(): Full DB is:`, db);
    // debuglog(`doFetch(): Called with url '${url}'`);
    debuglog(`doFetch(): Called with opts:`, opts);
    // debugloggroupend();
    let full:boolean = true;
    let newurl:string;
    let baseURL:string;
    let res:Response;
    let RESERVED_KEYS:string[] = [
      '/_config',
      '/_users',
      '/_session',
      '/_active_tasks',
      '/_all_dbs',
      '/_dbs_info',
      '/_cluster_setup',
      '/_db_updates',
      '/_membership',
      '/_replicate',
      '/_scheduler',
      '/_node',
      '/_utils',
      '/_up',
      '/_uuids',
      '/favicon.ico',
    ];

    // if(RESERVED_KEYS.indexOf(url) > -1) {
    //   baseURL = getBaseUrl(db);
    // } else {
    //   baseURL = db.name;
    // }
    for(let key of RESERVED_KEYS) {
      if(url.includes(key)) {
      // if(url.startsWith(key)) {
        full = false;
      }
    }
    if(full) {
      // baseURL = db.name;
      baseURL = getDatabaseUrl(db);
    } else {
      baseURL = url;
      // baseURL = getBaseUrl(db);
      // baseURL = getComplexBaseUrl(db, url);
    }
    // newurl = baseURL;

    // let fullURL = new URL(baseURL, dbname);
    // newurl = fullURL.href;
    let dbURL:ParsedURL = new Url(dbname);
    let fullURL:ParsedURL = new Url(baseURL, dbname);
    let fetchURL:string = getFullFetchURL(db, baseURL);
    newurl = fetchURL;
    


    // if(url[0] === "/") {
    //   newurl = baseURL + url;
    // } else {
    //   newurl = baseURL + "/" + url;
    // }


    // if(url[0] === '/') {
    //   newurl = ".." + url;
    // }

    // let dbname:string = db.name;
    // newurl = url;
    // console.log(`doFetch(): DB is: `, db);
    
    if(opts.body && typeof opts.body !== 'string') {
      opts.body = JSON.stringify(opts.body);
      // opts.body = JSON.stringify(opts.body);
    }
    if(dbURL.username) {
      let authString:Headers = getBasicAuthStringFor(dbURL.username, dbURL.password);
      let headers:Headers = new Headers(opts.headers);
      headers.set("Authorization", authString);
      opts.headers = headers;
      // newurl = fullURL.origin + fullURL.pathname + fullURL.search;
    }
    
    // console.log(`doFetch(): DB is '${dbname}'`);
    // console.log(`doFetch(): URL is: `, url);
    // console.log(`doFetch(): opts is: `, opts);
    let g:any = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : null;
    if(forceDBFetch || (g && g.forceDBFetch === true)) {
      let relativeURL:string = getRelativeComplexUrl(db, url);
      let css:string = "border: 5px dotted green; background-color: rgba(0, 255, 255, 0.3); padding: 5px;";
      debuglog(`%cdoFetch(): FORCIBLY PouchDB.fetch'ing from url '${relativeURL}' with options:`, css, opts);
      res = await db.fetch(relativeURL, opts);
    } else if(full) {
      // let res:Response = await db.fetch(newurl, opts);
      debuglog(`doFetch(): PouchDB.fetch'ing from url '${url}' with options:`, opts);
      res = await db.fetch(url, opts);
    } else {
      // res = await fetch(newurl, opts);
      // res = await wFetch(newurl, opts);
      // res = await pFetch(newurl, opts);
      // res = await db.fetch(newurl, opts);
      // let newHeaders:string[][] = [];
      
      if(mode === 'node') {
        let newHeaders:any = {};
        let headers = opts && opts.headers && opts.headers.entries ? opts.headers.entries() : [];
        for(let entry of headers) {
          let key:string = entry[0];
          let value:string = entry[1];
          // newHeaders.push([key, value]);
          newHeaders[key] = value;
        }
  
        let nFetchOpts:RequestInit = assign({}, opts);
        let hdrs:Headers = new Headers(newHeaders);
        // let hdrs:Headers = new nHeaders(newHeaders);
        // nFetchOpts.headers = newHeaders;
        nFetchOpts.headers = hdrs;
        // res = await nFetch(newurl, opts);
        debuglog(`doFetch(): Node-Fetch'ing from url '${newurl}' with options:`, nFetchOpts);
        res = await fet(newurl, nFetchOpts);
        // res = await pFetch(newurl, nFetchOpts);
      } else {
        debuglog(`doFetch(): Global-Fetch'ing from url '${newurl}' with options:`, opts);
        res = await fet(newurl, opts);
      }

    }
    if(fet !== nFetch) {
      debuglog(`doFetch(): Response is: `, res);
    } else {
      let jsonRes = {
        url: res.url,
        ok: res.ok,
        status: res.status,
        statusText: res.statusText,
      };
      debuglog(`doFetch(): Response is: `, jsonRes);
    }
    // let res:Response = await db.fetch(newurl, opts);
    // let res:Response = await StaticPouch.fetch(newurl, opts);
    let ok:boolean = res.ok;
    // console.log(`doFetch(): Fetch result:\n`, res);
    let content:any = await res.json();
    // if(ok) {
    //   callback(null, content);
    // } else {
    //   content.name = content.error;
    //   callback(content);
    // }
    // return res;
    if(ok) {
      return content;
    } else {
      // let text:string = "fetch result not ok";
      // let errText:string = content && typeof content.error === 'string' ? content.error : content && typeof content.message === 'string' ? content.message : typeof content === 'string' ? content : "unknown_error";
      // let finalErrorText:string =  `${text}: '${errText}'`;
      // let err:Error = new Error(finalErrorText);
      // let err:Error = new Error(errText);
      // throw err;
      let msg:string = res && typeof res.statusText === 'string' ? res.statusText : "unknown_error";
      let status:number = res && typeof res.status === 'number' ? res.status : 0;
      let err:AuthError = new AuthError(msg);
      err.status = status;
      if(content) {
        if(typeof content.error === 'string') {
          err.name = content.error;
          err.error = content.error;
        }
        if(typeof content.reason === 'string') {
          err.reason = content.reason;
        }
      }
      //  else if(msg === 'unknown_error') {
      //   err.name = msg;
      // }
      // content.name = content.error;
      throw err;
    }
  } catch(err) {
    // console.log(`doFetch(): Fetch error:\n`, err);
    if(err && err.name === 'unknown_error') {
      err.message = (err.message + ' ' || '') +
          'Unknown error!  Did you remember to enable CORS?';
    }
    debuglog(`doFetch(): Error during fetch!`);
    debugerr(err);
    // callback(err);
    throw err;
  }
}


// function AuthError(message:string):void {
//   this.status = 400;
//   this.name = 'authentication_error';
//   this.message = message;
//   this.error = true;
//   try {
//     Error.captureStackTrace(this, AuthError);
//   } catch (e) {}
// }

// inherits(AuthError, Error);
type LoginOptions = PouchDB.Core.Options;
type BasicResponse = PouchDB.Core.BasicResponse;
export {
  mode,
  fet,
  nFetch,
  debuglog,
  debuglogemph,
  debugloggroup,
  debugloggroupend,
  debugerr,
  AuthError,
  doFetch,
  getBasicAuthHeadersFor,
  getBasicAuthHeaders,
  getBaseUrl,
  AuthHeader,
  PDBOpts,
  UserContext,
  User,
  PDB,
  PouchDBUserDoc,
  LoginOptions,
  LoginResponse,
  BasicResponse,
  SessionResponse,
  PutUserOptions,
  CouchNodeMembership,
  parseUri,
  getComplexBaseUrl,
  getRelativeComplexUrl,
  makeBaseUrl,
  getURLWithoutSearchParams,
  getFullFetchURL,
  Url,
  ParsedURL,
};
