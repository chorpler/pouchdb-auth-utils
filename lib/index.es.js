import * as PouchDB from 'pouchdb-core';
import { emit } from 'pouchdb-core';
import fetch from 'node-fetch';
import fetchCookie from 'fetch-cookie';
import { btoa } from 'pouchdb-binary-utils';
import { Headers } from 'pouchdb-fetch';
import { assign, parseUri, clone } from 'pouchdb-utils';
export { parseUri } from 'pouchdb-utils';
import Url from 'url-parse';
export { default as Url } from 'url-parse';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) { if (b.hasOwnProperty(p)) { d[p] = b[p]; } } };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) { throw t[1]; } return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) { throw new TypeError("Generator is already executing."); }
        while (_) { try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) { return t; }
            if (y = 0, t) { op = [op[0] & 2, t.value]; }
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) { _.ops.pop(); }
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; } }
        if (op[0] & 5) { throw op[1]; } return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) { return m.call(o); }
    return {
        next: function () {
            if (o && i >= o.length) { o = void 0; }
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) { return o; }
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) { ar.push(r.value); }
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) { m.call(i); }
        }
        finally { if (e) { throw e.error; } }
    }
    return ar;
}

function __spread() {
    var arguments$1 = arguments;

    for (var ar = [], i = 0; i < arguments.length; i++)
        { ar = ar.concat(__read(arguments$1[i])); }
    return ar;
}

var AuthError = /** @class */ (function (_super) {
    __extends(AuthError, _super);
    // public error?:string = "";
    // public 
    function AuthError(msg) {
        var arguments$1 = arguments;

        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments$1[_i];
        }
        var _this = _super.call(this, msg) || this;
        _this.status = 400;
        _this.name = "authentication_error";
        // public message:string = "";
        _this.error = true;
        _this.taken = false;
        _this.reason = "";
        var self = _this;
        if (msg) {
            _this.message = msg;
        }
        if (typeof Error !== 'undefined' && typeof Error.captureStackTrace === 'function') {
            // Error.captureStackTrace(this, AuthError);
            // Error.captureStackTrace(this);
            Error.captureStackTrace(self, AuthError);
            // Error.captureStackTrace(self, self.constructor);
        }
        if (!_this.reason) {
            _this.reason = _this.message;
        }
        _this.toJSON = function () {
            // debuglog(`AuthError.toJSON() called`);
            var out = Object.assign({}, _this);
            out.message = _this.message + "";
            // console.log(`AuthError.toJSON() called. Returning:`, out);
            return out;
        };
        _this.toJson = function () {
            return _this.toJSON();
        };
        return _this;
    }
    return AuthError;
}(Error));

// import { Url                   } from 'url-parse'            ;
// import { URL as wURL           } from 'whatwg-url'           ;
// import * as Urlp from 'url-parse';
// import URLParse = require('url-parse');
var g = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {};
// const Url = URLParse && typeof URLParse.default !== 'undefined' ? URLParse.default : URLParse && typeof URLParse.location !== 'undefined' ? URLParse : fakeUrl;
var nodeFetch = fetch;
// const nodeFetch = pFetch;
var nFetch = nodeFetch;
var cFetch = fetchCookie(nodeFetch);
var mode = typeof window !== 'undefined' ? 'browser' : 'node';
var fet = typeof g['fetch'] === 'function' ? g['fetch'] : cFetch;
var debuglog = function () {
    var arguments$1 = arguments;

    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments$1[_i];
    }
    // if(window && (window.PouchDB && window.PouchDB.debug && typeof window.PouchDB.debug.enabled === 'function' && window.PouchDB.debug.enabled('pouchdb:authentication'))) {
    // if(window && window.PouchDB && typeof window.PouchDB.emit === 'function' && window.pouchdbauthenticationplugindebug) {
    //   window.PouchDB.emit('debug', ['authentication', ...args]);
    //   console.log(...args);
    // }
    var g;
    if (typeof window !== 'undefined') {
        g = window;
    }
    else if (typeof global !== 'undefined') {
        g = global;
    }
    if (!g) {
        return;
    }
    if (typeof PouchDB !== 'undefined' && typeof emit === 'function') {
        emit('debug', __spread(['authentication'], args));
    }
    if (g && g['pouchdbauthenticationplugindebug'] === true && typeof console !== 'undefined' && typeof console.log === 'function') {
        console.log.apply(console, __spread(args));
    }
};
var debugloggroup = function (label) {
    var g;
    if (typeof window !== 'undefined') {
        g = window;
    }
    else if (typeof global !== 'undefined') {
        g = global;
    }
    if (!g) {
        return;
    }
    if (g && g['pouchdbauthenticationplugindebug'] === true && typeof console !== 'undefined' && typeof console.groupCollapsed === 'function') {
        console.groupCollapsed(label);
    }
};
var debugloggroupend = function () {
    var g;
    if (typeof window !== 'undefined') {
        g = window;
    }
    else if (typeof global !== 'undefined') {
        g = global;
    }
    if (!g) {
        return;
    }
    if (g && g['pouchdbauthenticationplugindebug'] === true && typeof console !== 'undefined' && typeof console.groupEnd === 'function') {
        console.groupEnd();
    }
};
var debuglogemph = function (msg) {
    // if(window && (window.PouchDB && window.PouchDB.debug && typeof window.PouchDB.debug.enabled === 'function' && window.PouchDB.debug.enabled('pouchdb:authentication'))) {
    // if(window && window.PouchDB && typeof window.PouchDB.emit === 'function' && window.pouchdbauthenticationplugindebug) {
    //   window.PouchDB.emit('debug', ['authentication', ...args]);
    //   console.log(...args);
    // }
    var g;
    if (typeof window !== 'undefined') {
        g = window;
    }
    else if (typeof global !== 'undefined') {
        g = global;
    }
    if (!g) {
        return;
    }
    if (g && g['pouchdbauthenticationplugindebug'] === true) {
        var es = "background-color:red; color:white;";
        if (typeof PouchDB !== 'undefined' && typeof emit === 'function') {
            emit('debug', ['authentication', msg]);
        }
        if (typeof console !== 'undefined' && typeof console.log === 'function') {
            if (g.chrome) {
                console.log("%c" + msg, es);
            }
            else {
                console.log(msg);
            }
        }
    }
};
var debugerr = function () {
    var arguments$1 = arguments;

    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments$1[_i];
    }
    var e_1, _a;
    // if(window && (window.PouchDB && window.PouchDB.debug && typeof window.PouchDB.debug.enabled === 'function' && window.PouchDB.debug.enabled('pouchdb:authentication'))) {
    // if(window && window.PouchDB && typeof window.PouchDB.emit === 'function' && window.pouchdbauthenticationplugindebug) {
    //   window.PouchDB.emit('debug', ['authentication', ...args]);
    //   console.error(...args);
    // }
    var g;
    if (typeof window !== 'undefined') {
        g = window;
    }
    else if (typeof global !== 'undefined') {
        g = global;
    }
    if (!g) {
        return;
    }
    var errs, strError, jsonError = {};
    if (g && (g.pouchdbauthenticationplugindebug || (typeof PouchDB !== 'undefined' && typeof emit === 'function'))) {
        errs = __spread(args);
        try {
            for (var errs_1 = __values(errs), errs_1_1 = errs_1.next(); !errs_1_1.done; errs_1_1 = errs_1.next()) {
                var err = errs_1_1.value;
                if (err instanceof AuthError) {
                    jsonError = err.toJSON();
                    strError = JSON.stringify(jsonError);
                    break;
                }
                else if (err instanceof Error) {
                    strError = JSON.stringify(err);
                    jsonError = JSON.parse(strError);
                    if (strError === '{}') {
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
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (errs_1_1 && !errs_1_1.done && (_a = errs_1.return)) { _a.call(errs_1); }
            }
            finally { if (e_1) { throw e_1.error; } }
        }
    }
    if (typeof PouchDB !== 'undefined' && typeof emit === 'function') {
        emit('debug', __spread(['authentication', "ERROR"], args));
        emit('debug', ['authentication', "STRERROR", strError]);
    }
    if (g && g['pouchdbauthenticationplugindebug'] === true && typeof console !== 'undefined' && typeof console.log === 'function' && typeof console.error === 'function') {
        var errcss = "font-weight: bold; background-color: rgba(255, 0, 0, 0.25);";
        if (errs[0]) {
            if (errs[0] instanceof AuthError) {
                console.log("%cPDBAUTH AUTHERROR:", errcss, jsonError);
                console.error(errs[0]);
            }
            else if (errs[0] instanceof Error) {
                console.log("%cPDBAUTH ERROR: ", errcss, jsonError);
                console.error(errs[0]);
            }
            else {
                console.error("%cPDBAUTH ERROR 1?: ", errcss, strError);
            }
        }
        else {
            console.error("%cPDBAUTH ERROR 2?: ", errcss, strError);
        }
    }
};
// let err = [...args] || [{}];
var getBaseUrl = function (db) {
    // Use PouchDB.defaults' prefix, if any
    var fullName;
    var dbname = db.name;
    // let type:string = db.type();
    var prefix = db && db.__opts && typeof db.__opts.prefix === 'string' ? db.__opts.prefix : '';
    if (prefix) {
        fullName = prefix + (prefix.endsWith('/') ? '' : '/') + dbname;
    }
    else {
        fullName = dbname;
    }
    // let uri:ParsedURI = parseUri(fullName);
    var p = new Url(fullName);
    var path = p.pathname;
    var normalizedPath = path.endsWith('/') ? path.slice(0, -1) : path;
    // Compute parent path for databases not hosted on domain root (see #215)
    var parentPath = normalizedPath.split('/').slice(0, -1).join('/');
    // let port:string = p.port ? ":" + p.port : "";
    var baseUrl = "" + p.origin + parentPath;
    // let path:string = uri.path;
    // let normalizedPath:string = path.endsWith('/') ? path.substr(0, -1) : path;
    // let parentPath:string = normalizedPath.split('/').slice(0, -1).join('/');
    // let portString:string = uri.port ? `:${uri.port}` : '';
    // let baseURL:string = `${uri.protocol}://${uri.host}${portString}${parentPath}`;
    // // let baseURL:string = uri.protocol + '://' + uri.host + (uri.port ? ':' + uri.port : '') + parentPath;
    // console.log(`getBaseUrl(): Base URL is '${baseURL}'`);
    debuglog("getBaseUrl(): Base URL is '" + baseUrl + "'");
    return baseUrl;
};
var getDatabaseUrl = function (db) {
    var fullName;
    var dbname = db.name;
    // let type:string = db.type();
    var prefix = db && db.__opts && typeof db.__opts.prefix === 'string' ? db.__opts.prefix : '';
    if (prefix) {
        fullName = prefix + (prefix.endsWith('/') ? '' : '/') + dbname;
    }
    else {
        fullName = dbname;
    }
    debuglog("getDatabaseUrl(): Database URL is '" + fullName + "'");
    return fullName;
};
var getRelativeComplexUrl = function (db, url) {
    var dbBaseURL = getDatabaseUrl(db);
    var complexBaseUrl = makeBaseUrl(dbBaseURL, url);
    var dbname = db && db.name ? db.name : "UNKNOWN_POUCHDB_NAME";
    debuglog("getRelativeComplexUrl(): Relative complex URL for database '" + dbname + "' and URL '" + url + "' is '" + complexBaseUrl + "'");
    return complexBaseUrl;
};
var getComplexBaseUrl = function (db, url) {
    var dbBaseURL = getDatabaseUrl(db);
    var complexBaseUrl = makeBaseUrl(dbBaseURL, url);
    var dbname = db && db.name ? db.name : "UNKNOWN_POUCHDB_NAME";
    debuglog("getComplexBaseUrl(): Complex base URL for database '" + dbname + "' and URL '" + url + "' is '" + complexBaseUrl + "'");
    return complexBaseUrl;
};
var makeBaseUrl = function (baseURL, newURL) {
    // let newuri : ParsedURI = parseUri(newURL);
    // let puri   : ParsedURI = parseUri(baseURL);
    var outurl = "";
    baseURL = baseURL.slice(-1) === '/' ? baseURL.slice(0, -1) : baseURL;
    var baseuri = new Url(baseURL);
    var puri = new Url(newURL, baseURL);
    var relativePath = puri.pathname + puri.query;
    // let outurl:string = getURLWithoutSearchParams(baseURL);
    // outurl = outurl.slice(-1) === '/' ? outurl.slice(0,-1) : outurl;
    // let dir1:string = puri.directory + puri.file;
    var dir1 = baseuri.pathname;
    var dirs = dir1.split('/');
    var len = dirs.length;
    var last = len - 1;
    var count = dirs[last] === "" ? len - 2 : len - 1;
    for (var i = 0; i < count; i++) {
        outurl += "../";
    }
    var addedpath = relativePath.slice(0, 1) === '/' ? relativePath.slice(1) : relativePath;
    var newfile = addedpath;
    outurl += newfile;
    outurl = outurl.slice(0, 1) === '/' ? outurl.slice(1) : outurl;
    debuglog("makeBaseUrl(): Complicated base URL from '" + baseURL + "' and '" + newURL + "' is '" + outurl + "'");
    return outurl;
};
function getURLWithoutSearchParams(url) {
    var uri = parseUri(url);
    var cleanURL = uri.protocol + "://" + uri.authority + uri.directory + uri.file;
    return cleanURL;
}
function getBasicAuthTokenFor(username, password) {
    var authString = username + ":" + password;
    var token = btoa(decodeURIComponent(encodeURIComponent(authString)));
    return token;
}
function getBasicAuthStringFor(username, password) {
    var token = getBasicAuthTokenFor(username, password);
    var authString = "Basic " + token;
    return authString;
}
function getBasicAuthHeadersFor(username, password) {
    var authString = getBasicAuthStringFor(username, password);
    var headers = new Headers();
    headers.set('Authorization', authString);
    return headers;
}
var getBasicAuthHeaders = function (db) {
    var auth;
    if (!db) {
        return new Headers();
    }
    if (db.__opts && db.__opts.auth) {
        auth = db.__opts.auth;
    }
    else {
        var uri = parseUri(db.name);
        if (uri.user || uri.password) {
            auth = {
                username: uri.user,
                password: uri.password,
            };
        }
    }
    if (!auth) {
        return new Headers();
    }
    return getBasicAuthHeadersFor(auth.username, auth.password);
    // let str:string = auth.username + ':' + auth.password;
    // let token:string = btoa(decodeURIComponent(encodeURIComponent(str)));
    // let headers:Headers = new Headers();
    // headers.set('Authorization', 'Basic ' + token);
    // return headers;
};
function getFullFetchURL(db, url) {
    var base = getBaseUrl(db);
    var queryURL = url.startsWith("/") ? url : "/" + url;
    // let p:ParsedURI = parseUri(fullURL);
    var p = new Url(queryURL, base);
    // let port:string = p.port ? ":" + p.port : "";
    // let fetchURL:string = `${p.protocol}://${p.host}${port}${p.path}`;
    var fetchURL = p.href;
    return fetchURL;
}
function doFetch(db, url, opts, forceDBFetch) {
    return __awaiter(this, void 0, void 0, function () {
        var e_2, _a, e_3, _b, dbname, groupLabel, full, newurl, baseURL, res, RESERVED_KEYS, RESERVED_KEYS_1, RESERVED_KEYS_1_1, key, dbURL, fullURL, fetchURL, authString, headers, g_1, relativeURL, css, newHeaders, headers, headers_1, headers_1_1, entry, key, value, nFetchOpts, hdrs, jsonRes, ok, content, msg, status_1, err, err_1;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 10, , 11]);
                    opts = assign(opts || {});
                    dbname = getDatabaseUrl(db);
                    groupLabel = "doFetch() called for DB '" + dbname + "' and URL '" + url + "' and options:";
                    debuglog(groupLabel, opts);
                    // debugloggroup(groupLabel);
                    // debuglog(`doFetch(): Full DB is:`, db);
                    // debuglog(`doFetch(): Called with url '${url}'`);
                    debuglog("doFetch(): Called with opts:", opts);
                    full = true;
                    newurl = void 0;
                    baseURL = void 0;
                    res = void 0;
                    RESERVED_KEYS = [
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
                        '/favicon.ico' ];
                    try {
                        // if(RESERVED_KEYS.indexOf(url) > -1) {
                        //   baseURL = getBaseUrl(db);
                        // } else {
                        //   baseURL = db.name;
                        // }
                        for (RESERVED_KEYS_1 = __values(RESERVED_KEYS), RESERVED_KEYS_1_1 = RESERVED_KEYS_1.next(); !RESERVED_KEYS_1_1.done; RESERVED_KEYS_1_1 = RESERVED_KEYS_1.next()) {
                            key = RESERVED_KEYS_1_1.value;
                            if (url.includes(key)) {
                                // if(url.startsWith(key)) {
                                full = false;
                            }
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (RESERVED_KEYS_1_1 && !RESERVED_KEYS_1_1.done && (_a = RESERVED_KEYS_1.return)) { _a.call(RESERVED_KEYS_1); }
                        }
                        finally { if (e_2) { throw e_2.error; } }
                    }
                    if (full) {
                        // baseURL = db.name;
                        baseURL = getDatabaseUrl(db);
                    }
                    else {
                        baseURL = url;
                        // baseURL = getBaseUrl(db);
                        // baseURL = getComplexBaseUrl(db, url);
                    }
                    dbURL = new Url(dbname);
                    fullURL = new Url(baseURL, dbname);
                    fetchURL = getFullFetchURL(db, baseURL);
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
                    if (opts.body && typeof opts.body !== 'string') {
                        opts.body = JSON.stringify(opts.body);
                        // opts.body = JSON.stringify(opts.body);
                    }
                    if (dbURL.username) {
                        authString = getBasicAuthStringFor(dbURL.username, dbURL.password);
                        headers = new Headers(opts.headers);
                        headers.set("Authorization", authString);
                        opts.headers = headers;
                        // newurl = fullURL.origin + fullURL.pathname + fullURL.search;
                    }
                    g_1 = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : null;
                    if (!(forceDBFetch || (g_1 && g_1.forceDBFetch === true))) { return [3 /*break*/, 2]; }
                    relativeURL = getRelativeComplexUrl(db, url);
                    css = "border: 5px dotted green; background-color: rgba(0, 255, 255, 0.3); padding: 5px;";
                    debuglog("%cdoFetch(): FORCIBLY PouchDB.fetch'ing from url '" + relativeURL + "' with options:", css, opts);
                    return [4 /*yield*/, db.fetch(relativeURL, opts)];
                case 1:
                    res = _c.sent();
                    return [3 /*break*/, 8];
                case 2:
                    if (!full) { return [3 /*break*/, 4]; }
                    // let res:Response = await db.fetch(newurl, opts);
                    debuglog("doFetch(): PouchDB.fetch'ing from url '" + url + "' with options:", opts);
                    return [4 /*yield*/, db.fetch(url, opts)];
                case 3:
                    res = _c.sent();
                    return [3 /*break*/, 8];
                case 4:
                    if (!(mode === 'node')) { return [3 /*break*/, 6]; }
                    newHeaders = {};
                    headers = opts && opts.headers && opts.headers.entries ? opts.headers.entries() : [];
                    try {
                        for (headers_1 = __values(headers), headers_1_1 = headers_1.next(); !headers_1_1.done; headers_1_1 = headers_1.next()) {
                            entry = headers_1_1.value;
                            key = entry[0];
                            value = entry[1];
                            // newHeaders.push([key, value]);
                            newHeaders[key] = value;
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (headers_1_1 && !headers_1_1.done && (_b = headers_1.return)) { _b.call(headers_1); }
                        }
                        finally { if (e_3) { throw e_3.error; } }
                    }
                    nFetchOpts = assign({}, opts);
                    hdrs = new Headers(newHeaders);
                    // let hdrs:Headers = new nHeaders(newHeaders);
                    // nFetchOpts.headers = newHeaders;
                    nFetchOpts.headers = hdrs;
                    // res = await nFetch(newurl, opts);
                    debuglog("doFetch(): Node-Fetch'ing from url '" + newurl + "' with options:", nFetchOpts);
                    return [4 /*yield*/, fet(newurl, nFetchOpts)];
                case 5:
                    res = _c.sent();
                    return [3 /*break*/, 8];
                case 6:
                    debuglog("doFetch(): Global-Fetch'ing from url '" + newurl + "' with options:", opts);
                    return [4 /*yield*/, fet(newurl, opts)];
                case 7:
                    res = _c.sent();
                    _c.label = 8;
                case 8:
                    if (fet !== nFetch) {
                        debuglog("doFetch(): Response is: ", res);
                    }
                    else {
                        jsonRes = {
                            url: res.url,
                            ok: res.ok,
                            status: res.status,
                            statusText: res.statusText,
                        };
                        debuglog("doFetch(): Response is: ", jsonRes);
                    }
                    ok = res.ok;
                    return [4 /*yield*/, res.json()];
                case 9:
                    content = _c.sent();
                    // if(ok) {
                    //   callback(null, content);
                    // } else {
                    //   content.name = content.error;
                    //   callback(content);
                    // }
                    // return res;
                    if (ok) {
                        return [2 /*return*/, content];
                    }
                    else {
                        msg = res && typeof res.statusText === 'string' ? res.statusText : "unknown_error";
                        status_1 = res && typeof res.status === 'number' ? res.status : 0;
                        err = new AuthError(msg);
                        err.status = status_1;
                        if (content) {
                            if (typeof content.error === 'string') {
                                err.name = content.error;
                                err.error = content.error;
                            }
                            if (typeof content.reason === 'string') {
                                err.reason = content.reason;
                            }
                        }
                        //  else if(msg === 'unknown_error') {
                        //   err.name = msg;
                        // }
                        // content.name = content.error;
                        throw err;
                    }
                    return [3 /*break*/, 11];
                case 10:
                    err_1 = _c.sent();
                    // console.log(`doFetch(): Fetch error:\n`, err);
                    if (err_1 && err_1.name === 'unknown_error') {
                        err_1.message = (err_1.message + ' ' || '') +
                            'Unknown error!  Did you remember to enable CORS?';
                    }
                    debuglog("doFetch(): Error during fetch!");
                    debugerr(err_1);
                    // callback(err);
                    throw err_1;
                case 11: return [2 /*return*/];
            }
        });
    });
}

// import { toPromise              } from 'pouchdb-utils' ;
var getConfigUrl = function (db, nodeName) {
    return (nodeName ? '/_node/' + nodeName : '') + '/_config';
};
var getMembership = function (opts) {
    return __awaiter(this, void 0, void 0, function () {
        var db, options, url, ajaxOpts, res, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    db = this;
                    options = opts != undefined ? opts : {};
                    url = '/_membership';
                    ajaxOpts = assign({
                        method: 'GET',
                        headers: getBasicAuthHeaders(db),
                    }, options.ajax || {});
                    return [4 /*yield*/, doFetch(db, url, ajaxOpts)];
                case 1:
                    res = _a.sent();
                    // console.log(`getMembership(): DB membership is:\n`, res);
                    return [2 /*return*/, res];
                case 2:
                    err_1 = _a.sent();
                    throw err_1;
                case 3: return [2 /*return*/];
            }
        });
    });
};
var signUpAdmin = function (username, password, opts) {
    return __awaiter(this, void 0, void 0, function () {
        var db, options, err, err, err, membership, nodeName, err_2, configUrl, url, ajaxOpts, res, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 6, , 7]);
                    debuglogemph("PouchDB.signUpAdmin(): Called for '" + username + "'");
                    db = this;
                    options = opts != undefined ? opts : {};
                    if (['http', 'https'].indexOf(db.type()) === -1) {
                        err = new AuthError('This plugin only works for the http/https adapter. So you should use new PouchDB("http://mysite.com:5984/mydb") instead.');
                        throw err;
                    }
                    else if (!username) {
                        err = new AuthError('You must provide a username');
                        throw err;
                    }
                    else if (!password) {
                        err = new AuthError('You must provide a password');
                        throw err;
                    }
                    membership = void 0;
                    nodeName = void 0;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, db.getMembership(options)];
                case 2:
                    membership = _a.sent();
                    // This is a CouchDB 2.x server
                    nodeName = membership.all_nodes[0];
                    return [3 /*break*/, 4];
                case 3:
                    err_2 = _a.sent();
                    if (err_2.error && err_2.error === 'illegal_database_name') {
                        throw err_2;
                    }
                    else {
                        // This could be a CouchDB 1.x server
                        nodeName = undefined;
                    }
                    return [3 /*break*/, 4];
                case 4:
                    configUrl = getConfigUrl(db, nodeName);
                    url = (options.configUrl || configUrl) + '/admins/' + encodeURIComponent(username);
                    ajaxOpts = assign({
                        method: 'PUT',
                        processData: false,
                        headers: getBasicAuthHeaders(db),
                        // headers: headers,
                        body: '"' + password + '"',
                    }, options.ajax || {});
                    return [4 /*yield*/, doFetch(db, url, ajaxOpts)];
                case 5:
                    res = _a.sent();
                    return [2 /*return*/, res];
                case 6:
                    err_3 = _a.sent();
                    throw err_3;
                case 7: return [2 /*return*/];
            }
        });
    });
};
var deleteAdmin = function (username, opts) {
    return __awaiter(this, void 0, void 0, function () {
        var db, options, err, err, membership, nodeName, err_4, configUrl, url, headers, ajaxOpts, noAuthAjaxOpts, res, fetchErr_1, err_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 9, , 10]);
                    debuglogemph("PouchDB.deleteAdmin(): Called for '" + username + "'");
                    db = this;
                    options = opts != undefined ? opts : {};
                    if (['http', 'https'].indexOf(db.type()) === -1) {
                        err = new AuthError('This plugin only works for the http/https adapter. So you should use new PouchDB("http://mysite.com:5984/mydb") instead.');
                        throw err;
                    }
                    else if (!username) {
                        err = new AuthError('You must provide a username');
                        throw err;
                    }
                    membership = void 0;
                    nodeName = void 0;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, db.getMembership(options)];
                case 2:
                    membership = _a.sent();
                    // This is a CouchDB 2.x server
                    nodeName = membership.all_nodes[0];
                    return [3 /*break*/, 4];
                case 3:
                    err_4 = _a.sent();
                    if (err_4.error && err_4.error === 'illegal_database_name') {
                        throw err_4;
                    }
                    else {
                        // This could be a CouchDB 1.x server
                        nodeName = undefined;
                    }
                    return [3 /*break*/, 4];
                case 4:
                    configUrl = getConfigUrl(db, nodeName);
                    url = (options.configUrl || configUrl) + '/admins/' + encodeURIComponent(username);
                    headers = getBasicAuthHeaders(db);
                    ajaxOpts = assign({
                        method: 'DELETE',
                        processData: false,
                        headers: headers,
                    }, options.ajax || {});
                    noAuthAjaxOpts = assign({}, ajaxOpts);
                    delete noAuthAjaxOpts.headers;
                    res = void 0;
                    _a.label = 5;
                case 5:
                    _a.trys.push([5, 7, , 8]);
                    return [4 /*yield*/, doFetch(db, url, ajaxOpts)];
                case 6:
                    res = _a.sent();
                    return [2 /*return*/, res];
                case 7:
                    fetchErr_1 = _a.sent();
                    debuglogemph("deleteAdmin(): Error deleting administ");
                    return [3 /*break*/, 8];
                case 8: return [2 /*return*/, res];
                case 9:
                    err_5 = _a.sent();
                    throw err_5;
                case 10: return [2 /*return*/];
            }
        });
    });
};

var logIn = function (username, password, opts) {
    return __awaiter(this, void 0, void 0, function () {
        var db, options, err, err, err, url, headers, ajaxOpts, res, auth, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    debuglogemph("PouchDB.logIn(): Called for '" + username + "'");
                    db = this;
                    options = opts != undefined ? opts : {};
                    if (['http', 'https'].indexOf(db.type()) === -1) {
                        err = new Error("pouchdb-authentication plugin only works for the http/https adapter");
                        throw err;
                    }
                    if (!username) {
                        err = new Error("you must provide a username");
                        throw err;
                    }
                    else if (!password) {
                        err = new Error("you must provide a password");
                        throw err;
                    }
                    url = '/_session';
                    headers = getBasicAuthHeadersFor(username, password);
                    headers.append('Content-Type', 'application/json');
                    ajaxOpts = assign({
                        method: 'POST',
                        // headers: assign({'Content-Type': 'application/json'}, getBasicAuthHeaders(db)),
                        headers: headers,
                        body: { name: username, password: password },
                    }, options.ajax || {});
                    return [4 /*yield*/, doFetch(db, url, ajaxOpts)];
                case 1:
                    res = _a.sent();
                    if (db && db.__opts) {
                        if (db.__opts.auth) {
                            db.__opts.auth.username = username;
                            db.__opts.auth.password = password;
                        }
                        else {
                            auth = {
                                username: username,
                                password: password,
                            };
                            db.__opts.auth = auth;
                        }
                    }
                    return [2 /*return*/, res];
                case 2:
                    err_1 = _a.sent();
                    throw err_1;
                case 3: return [2 /*return*/];
            }
        });
    });
};
var logOut = function (opts) {
    return __awaiter(this, void 0, void 0, function () {
        var db, options, url, ajaxOpts, res, err_2, db, options, url, noAuthAjaxOpts, res, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 7]);
                    debuglogemph("PouchDB.logOut(): Called");
                    db = this;
                    options = opts != undefined ? opts : {};
                    url = '/_session';
                    ajaxOpts = assign({
                        method: 'DELETE',
                        headers: getBasicAuthHeaders(db),
                    }, options.ajax || {});
                    return [4 /*yield*/, doFetch(db, url, ajaxOpts)];
                case 1:
                    res = _a.sent();
                    if (db && db.__opts && db.__opts.auth) {
                        delete db.__opts.auth;
                    }
                    return [2 /*return*/, res];
                case 2:
                    err_2 = _a.sent();
                    _a.label = 3;
                case 3:
                    _a.trys.push([3, 5, , 6]);
                    debuglog("======> PouchDB.logOut(): Caught error trying to log out");
                    debugerr(err_2);
                    debuglog("======> PouchDB.logOut(): Retrying without authentication \u2026");
                    db = this;
                    options = opts != undefined ? opts : {};
                    url = '/_session';
                    noAuthAjaxOpts = assign({
                        method: 'DELETE',
                    }, options.ajax || {});
                    delete noAuthAjaxOpts.headers;
                    return [4 /*yield*/, doFetch(db, url, noAuthAjaxOpts)];
                case 4:
                    res = _a.sent();
                    if (db && db.__opts && db.__opts.auth) {
                        delete db.__opts.auth;
                    }
                    debuglog("======> PouchDB.logOut(): Successfully logged out after retrying without authentication headers.");
                    return [2 /*return*/, res];
                case 5:
                    err_3 = _a.sent();
                    throw err_3;
                case 6: return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
};
var getSession = function () {
    return __awaiter(this, void 0, void 0, function () {
        var db, url, ajaxOpts, res, err_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    debuglogemph("PouchDB.getSession(): Called");
                    db = this;
                    url = '/_session';
                    ajaxOpts = {
                        method: 'GET',
                        headers: getBasicAuthHeaders(db),
                    };
                    return [4 /*yield*/, doFetch(db, url, ajaxOpts)];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/, res];
                case 2:
                    err_4 = _a.sent();
                    throw err_4;
                case 3: return [2 /*return*/];
            }
        });
    });
};

// import * as PouchDB from 'pouchdb-core';
var getUsersDatabaseUrl = function () {
    var db = this;
    var userDBURL = getBaseUrl(db) + '/_users';
    // console.log(`getUsersDatabaseUrl(): URL and DB is:\n`, userDBURL);
    // console.log(`getUsersDatabaseUrl(): DB is:`, db);
    return userDBURL;
};
var hasRole = function (username, role, opts) {
    return __awaiter(this, void 0, void 0, function () {
        var db, userdoc, roles, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    db = this;
                    debuglogemph("PouchDB.hasRole(): Called for user '" + username + "'");
                    return [4 /*yield*/, db.getUser(username, opts)];
                case 1:
                    userdoc = _a.sent();
                    roles = userdoc.roles || [];
                    if (roles.indexOf(role) > -1) {
                        return [2 /*return*/, true];
                    }
                    return [2 /*return*/, false];
                case 2:
                    err_1 = _a.sent();
                    throw err_1;
                case 3: return [2 /*return*/];
            }
        });
    });
};
var getRoles = function (username, opts) {
    return __awaiter(this, void 0, void 0, function () {
        var db, userdoc, roles, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    db = this;
                    debuglogemph("PouchDB.getRoles(): Called for user '" + username + "'");
                    return [4 /*yield*/, db.getUser(username, opts)];
                case 1:
                    userdoc = _a.sent();
                    roles = userdoc.roles || [];
                    return [2 /*return*/, roles];
                case 2:
                    err_2 = _a.sent();
                    throw err_2;
                case 3: return [2 /*return*/];
            }
        });
    });
};
var addRoles = function (username, roles, opts) {
    return __awaiter(this, void 0, void 0, function () {
        var e_1, _a, db, userdoc, newRoles, rolesToAdd, rolesToAdd_1, rolesToAdd_1_1, role, res, err_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    db = this;
                    debuglogemph("PouchDB.addRoles(): Called for user '" + username + "' and role '" + roles + "'");
                    return [4 /*yield*/, db.getUser(username, opts)];
                case 1:
                    userdoc = _b.sent();
                    newRoles = userdoc.roles || [];
                    rolesToAdd = Array.isArray(roles) ? roles : typeof roles === 'string' ? [roles] : [];
                    rolesToAdd = rolesToAdd.filter(function (a) {
                        return typeof a === 'string';
                    });
                    try {
                        for (rolesToAdd_1 = __values(rolesToAdd), rolesToAdd_1_1 = rolesToAdd_1.next(); !rolesToAdd_1_1.done; rolesToAdd_1_1 = rolesToAdd_1.next()) {
                            role = rolesToAdd_1_1.value;
                            if (newRoles.indexOf(role) > -1) {
                                /* This role already exists for this user */
                                continue;
                            }
                            else {
                                newRoles.push(role);
                            }
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (rolesToAdd_1_1 && !rolesToAdd_1_1.done && (_a = rolesToAdd_1.return)) { _a.call(rolesToAdd_1); }
                        }
                        finally { if (e_1) { throw e_1.error; } }
                    }
                    newRoles.sort();
                    userdoc.roles = newRoles;
                    return [4 /*yield*/, updateUser(db, userdoc, opts)];
                case 2:
                    res = _b.sent();
                    return [2 /*return*/, res];
                case 3:
                    err_3 = _b.sent();
                    throw err_3;
                case 4: return [2 /*return*/];
            }
        });
    });
};
var deleteRoles = function (username, roles, opts) {
    return __awaiter(this, void 0, void 0, function () {
        var db, userdoc, existingRoles, rolesToDelete_1, filteredExistingRoles, res, err_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    db = this;
                    debuglogemph("PouchDB.deleteRoles(): Called for user '" + username + "' and role '" + roles + "'");
                    return [4 /*yield*/, db.getUser(username, opts)];
                case 1:
                    userdoc = _a.sent();
                    existingRoles = userdoc.roles || [];
                    rolesToDelete_1 = Array.isArray(roles) ? roles : typeof roles === 'string' ? [roles] : [];
                    filteredExistingRoles = existingRoles.filter(function (a) {
                        if (rolesToDelete_1.indexOf(a) > -1) {
                            return false;
                        }
                        else {
                            return true;
                        }
                    });
                    userdoc.roles = filteredExistingRoles;
                    return [4 /*yield*/, updateUser(db, userdoc, opts)];
                case 2:
                    res = _a.sent();
                    return [2 /*return*/, res];
                case 3:
                    err_4 = _a.sent();
                    throw err_4;
                case 4: return [2 /*return*/];
            }
        });
    });
};
var updateUser = function (db, user, opts) {
    return __awaiter(this, void 0, void 0, function () {
        var id, options, reservedWords, key, err, url, ajaxOpts, res, err_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    id = user && typeof user._id === 'string' ? user._id : "UNKNOWN_USER";
                    debuglogemph("PouchDB.updateUser(): Called for '" + id + "'");
                    options = opts != undefined ? opts : {};
                    reservedWords = [
                        '_id',
                        '_rev',
                        'name',
                        'type',
                        'roles',
                        'password',
                        'password_scheme',
                        'iterations',
                        'derived_key',
                        'salt' ];
                    if (options.metadata) {
                        for (key in options.metadata) {
                            if (options.metadata.hasOwnProperty(key) && reservedWords.indexOf(key) !== -1) {
                                err = new AuthError('cannot use reserved word in metadata: "' + key + '"');
                                throw err;
                            }
                        }
                        user = assign(user, options.metadata);
                    }
                    if (options.roles) {
                        user = assign(user, { roles: options.roles });
                    }
                    url = '/_users/' + encodeURIComponent(user._id);
                    ajaxOpts = assign({
                        method: 'PUT',
                        body: user,
                        headers: getBasicAuthHeaders(db),
                    }, options.ajax || {});
                    return [4 /*yield*/, doFetch(db, url, ajaxOpts)];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/, res];
                case 2:
                    err_5 = _a.sent();
                    throw err_5;
                case 3: return [2 /*return*/];
            }
        });
    });
};
var signUp = function (username, password, opts) {
    return __awaiter(this, void 0, void 0, function () {
        var db, options, err, err, err, userId, user, res, err_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    debuglogemph("PouchDB.signUp(): Called for '" + username + "'");
                    db = this;
                    options = opts != undefined ? opts : {};
                    if (['http', 'https'].indexOf(db.type()) === -1) {
                        err = new AuthError('This plugin only works for the http/https adapter. So you should use new PouchDB("http://mysite.com:5984/mydb") instead.');
                        throw err;
                    }
                    else if (!username) {
                        err = new AuthError('You must provide a username');
                        throw err;
                    }
                    else if (!password) {
                        err = new AuthError('You must provide a password');
                        throw err;
                    }
                    userId = 'org.couchdb.user:' + username;
                    user = {
                        name: username,
                        password: password,
                        roles: [],
                        type: 'user',
                        _id: userId,
                    };
                    return [4 /*yield*/, updateUser(db, user, options)];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/, res];
                case 2:
                    err_6 = _a.sent();
                    throw err_6;
                case 3: return [2 /*return*/];
            }
        });
    });
};
var getUser = function (username, opts) {
    return __awaiter(this, void 0, void 0, function () {
        var db, options, err, url, ajaxOpts, res, err_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    debuglogemph("PouchDB.getUser(): Called for '" + username + "'");
                    db = this;
                    options = opts != undefined ? opts : {};
                    if (!username) {
                        err = new AuthError('you must provide a username');
                        throw err;
                    }
                    url = '/_users/' + encodeURIComponent('org.couchdb.user:' + username);
                    ajaxOpts = assign({
                        method: 'GET',
                        headers: getBasicAuthHeaders(db),
                    }, options.ajax || {});
                    return [4 /*yield*/, doFetch(db, url, ajaxOpts)];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/, res];
                case 2:
                    err_7 = _a.sent();
                    throw err_7;
                case 3: return [2 /*return*/];
            }
        });
    });
};
var putUser = function (username, opts) {
    return __awaiter(this, void 0, void 0, function () {
        var db, options, err, err, user, res, err_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    debuglogemph("PouchDB.putUser(): Called for '" + username + "'");
                    db = this;
                    options = opts != undefined ? opts : {};
                    if (['http', 'https'].indexOf(db.type()) === -1) {
                        err = new AuthError('This plugin only works for the http/https adapter. So you should use new PouchDB("http://mysite.com:5984/mydb") instead.');
                        throw err;
                    }
                    else if (!username) {
                        err = new AuthError('You must provide a username');
                        throw err;
                    }
                    return [4 /*yield*/, db.getUser(username, options)];
                case 1:
                    user = _a.sent();
                    return [4 /*yield*/, updateUser(db, user, options)];
                case 2:
                    res = _a.sent();
                    return [2 /*return*/, res];
                case 3:
                    err_8 = _a.sent();
                    throw err_8;
                case 4: return [2 /*return*/];
            }
        });
    });
};
var deleteUser = function (username, opts) {
    return __awaiter(this, void 0, void 0, function () {
        var db, options, err, err, user, url, ajaxOpts, res, err_9;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    debuglogemph("PouchDB.deleteUser(): Called for '" + username + "'");
                    db = this;
                    options = opts != undefined ? opts : {};
                    if (['http', 'https'].indexOf(db.type()) === -1) {
                        err = new AuthError('This plugin only works for the http/https adapter. So you should use new PouchDB("http://mysite.com:5984/mydb") instead.');
                        throw err;
                    }
                    else if (!username) {
                        err = new AuthError('You must provide a username');
                        throw err;
                    }
                    return [4 /*yield*/, db.getUser(username, options)];
                case 1:
                    user = _a.sent();
                    url = '/_users/' + encodeURIComponent(user._id) + '?rev=' + user._rev;
                    ajaxOpts = assign({
                        method: 'DELETE',
                        headers: getBasicAuthHeaders(db),
                    }, options.ajax || {});
                    return [4 /*yield*/, doFetch(db, url, ajaxOpts)];
                case 2:
                    res = _a.sent();
                    return [2 /*return*/, res];
                case 3:
                    err_9 = _a.sent();
                    throw err_9;
                case 4: return [2 /*return*/];
            }
        });
    });
};
var changePassword = function (username, password, opts) {
    return __awaiter(this, void 0, void 0, function () {
        var db, options, err, err, err, user, url, ajaxOpts, res, err_10;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    debuglogemph("PouchDB.changePassword(): Called for '" + username + "'");
                    db = this;
                    options = opts != undefined ? opts : {};
                    if (['http', 'https'].indexOf(db.type()) === -1) {
                        err = new AuthError('This plugin only works for the http/https adapter. So you should use new PouchDB("http://mysite.com:5984/mydb") instead.');
                        throw err;
                    }
                    else if (!username) {
                        err = new AuthError('You must provide a username');
                        throw err;
                    }
                    else if (!password) {
                        err = new AuthError('You must provide a password');
                        throw err;
                    }
                    return [4 /*yield*/, db.getUser(username, options)];
                case 1:
                    user = _a.sent();
                    user.password = password;
                    url = '/_users/' + encodeURIComponent(user._id);
                    ajaxOpts = assign({
                        method: 'PUT',
                        headers: getBasicAuthHeaders(db),
                        body: user,
                    }, options.ajax || {});
                    return [4 /*yield*/, doFetch(db, url, ajaxOpts)];
                case 2:
                    res = _a.sent();
                    return [2 /*return*/, res];
                case 3:
                    err_10 = _a.sent();
                    throw err_10;
                case 4: return [2 /*return*/];
            }
        });
    });
};
var changeUsername = function (oldUsername, newUsername, opts) {
    return __awaiter(this, void 0, void 0, function () {
        var db_1, options, USERNAME_PREFIX, fetch_1, updateUser_1, err, err, err, res, err, err_11, user, newUser, res, err_12, err_13;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 11, , 12]);
                    debuglogemph("PouchDB.changeUsername(): Called for '" + oldUsername + "' => '" + newUsername + "'");
                    db_1 = this;
                    options = opts != undefined ? opts : {};
                    USERNAME_PREFIX = 'org.couchdb.user:';
                    fetch_1 = function (url, opts) {
                        return __awaiter(this, void 0, void 0, function () {
                            var options_1, res, err_14;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        options_1 = opts != undefined ? opts : {};
                                        return [4 /*yield*/, doFetch(db_1, url, options_1)];
                                    case 1:
                                        res = _a.sent();
                                        return [2 /*return*/, res];
                                    case 2:
                                        err_14 = _a.sent();
                                        throw err_14;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        });
                    };
                    updateUser_1 = function (user, opts) {
                        return __awaiter(this, void 0, void 0, function () {
                            var options_2, url, updateOpts, res, err_15;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        options_2 = opts != undefined ? opts : {};
                                        url = '/_users/' + encodeURIComponent(user._id);
                                        updateOpts = assign({
                                            method: 'PUT',
                                            headers: getBasicAuthHeaders(db_1),
                                            body: user,
                                        }, options_2.ajax || {});
                                        return [4 /*yield*/, fetch_1(url, updateOpts)];
                                    case 1:
                                        res = _a.sent();
                                        return [2 /*return*/, res];
                                    case 2:
                                        err_15 = _a.sent();
                                        throw err_15;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        });
                    };
                    options.ajax = options.ajax || {};
                    if (['http', 'https'].indexOf(db_1.type()) === -1) {
                        err = new AuthError('This plugin only works for the http/https adapter. So you should use new PouchDB("http://mysite.com:5984/mydb") instead.');
                        throw err;
                    }
                    if (!newUsername) {
                        err = new AuthError('You must provide a new username');
                        throw err;
                    }
                    if (!oldUsername) {
                        err = new AuthError('You must provide a username to rename');
                        throw err;
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 10]);
                    return [4 /*yield*/, db_1.getUser(newUsername, options)];
                case 2:
                    res = _a.sent();
                    err = new AuthError('user already exists');
                    err.taken = true;
                    throw err;
                case 3:
                    err_11 = _a.sent();
                    _a.label = 4;
                case 4:
                    _a.trys.push([4, 8, , 9]);
                    return [4 /*yield*/, db_1.getUser(oldUsername, options)];
                case 5:
                    user = _a.sent();
                    newUser = clone(user);
                    delete newUser._rev;
                    newUser._id = USERNAME_PREFIX + newUsername;
                    newUser.name = newUsername;
                    newUser.roles = options.roles || user.roles || [];
                    return [4 /*yield*/, updateUser_1(newUser, options)];
                case 6:
                    res = _a.sent();
                    user._deleted = true;
                    return [4 /*yield*/, updateUser_1(user, options)];
                case 7:
                    res = _a.sent();
                    return [2 /*return*/, res];
                case 8:
                    err_12 = _a.sent();
                    throw err_12;
                case 9: return [3 /*break*/, 10];
                case 10: return [3 /*break*/, 12];
                case 11:
                    err_13 = _a.sent();
                    throw err_13;
                case 12: return [2 /*return*/];
            }
        });
    });
};

var PouchDBAuthPlugin = {
    login: logIn,
    logIn: logIn,
    logout: logOut,
    logOut: logOut,
    getSession: getSession,
    getMembership: getMembership,
    signUpAdmin: signUpAdmin,
    deleteAdmin: deleteAdmin,
    getUsersDatabaseUrl: getUsersDatabaseUrl,
    signup: signUp,
    signUp: signUp,
    getUser: getUser,
    putUser: putUser,
    deleteUser: deleteUser,
    changePassword: changePassword,
    changeUsername: changeUsername,
    getRoles: getRoles,
    addRoles: addRoles,
    deleteRoles: deleteRoles,
    hasRole: hasRole,
};
var plugin = PouchDBAuthPlugin;
// let var plugin:any = {};
// plugin.login = logIn;
// plugin.logIn = logIn;
// plugin.logout = logOut;
// plugin.logOut = logOut;
// plugin.getSession = getSession;
// plugin.getMembership = getMembership;
// plugin.signUpAdmin = signUpAdmin;
// plugin.deleteAdmin = deleteAdmin;
// plugin.getUsersDatabaseUrl = getUsersDatabaseUrl;
// plugin.signup = signUp;
// plugin.signUp = signUp;
// plugin.getUser = getUser;
// plugin.putUser = putUser;
// plugin.deleteUser = deleteUser;
// plugin.changePassword = changePassword;
// plugin.changeUsername = changeUsername;
// export class PouchDBPlugin {
//   public login = logIn;
//   public logIn = logIn;
//   public logout = logOut;
//   public logOut = logOut;
//   public getSession = getSession;
//   public getMembership = getMembership;
//   public signUpAdmin = signUpAdmin;
//   public deleteAdmin = deleteAdmin;
//   public getUsersDatabaseUrl = getUsersDatabaseUrl;
//   public signup = signUp;
//   public signUp = signUp;
//   public getUser = getUser;
//   public putUser = putUser;
//   public deleteUser = deleteUser;
//   public changePassword = changePassword;
//   public changeUsername = changeUsername;
//   constructor() {
//   }
// }
// // let plugin:any = PouchDBPlugin;
// let plugin:PouchDBPlugin = new PouchDBPlugin();
// if(typeof window !== 'undefined' && window.PouchDB) {
//   window.PouchDB.plugin(PouchDBAuthPlugin);
// }
// export default plugin;
// export plugin;

// export default PouchDBAuthPlugin;

export default plugin;
export { getConfigUrl, getMembership, deleteAdmin, signUpAdmin, logIn, logOut, getSession, getUsersDatabaseUrl, signUp, getUser, putUser, deleteUser, changePassword, changeUsername, getRoles, addRoles, deleteRoles, hasRole, mode, fet, nFetch, debuglog, debuglogemph, debugloggroup, debugloggroupend, debugerr, AuthError, doFetch, getBasicAuthHeadersFor, getBasicAuthHeaders, getBaseUrl, getComplexBaseUrl, getRelativeComplexUrl, makeBaseUrl, getURLWithoutSearchParams, getFullFetchURL };
//# sourceMappingURL=index.es.js.map
