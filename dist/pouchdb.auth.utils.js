(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.PouchAuthUtils = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){(function (){
'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, '__esModule', {
  value: true
});

var PouchDB = require(34);

var fetch = require(8);

var fetchCookie = require(11);

var pouchdbBinaryUtils = require(30);

var pouchdbFetch = require(36);

var pouchdbUtils = require(40);

var Url = require(58);

function _interopDefaultLegacy(e) {
  return e && _typeof(e) === 'object' && 'default' in e ? e : {
    'default': e
  };
}

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);

  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function get() {
            return e[k];
          }
        });
      }
    });
  }

  n["default"] = e;
  return Object.freeze(n);
}

var PouchDB__namespace = /*#__PURE__*/_interopNamespace(PouchDB);

var fetch__default = /*#__PURE__*/_interopDefaultLegacy(fetch);

var fetchCookie__default = /*#__PURE__*/_interopDefaultLegacy(fetchCookie);

var Url__default = /*#__PURE__*/_interopDefaultLegacy(Url);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

/* global Reflect, Promise */


var _extendStatics = function extendStatics(d, b) {
  _extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) {
      if (b.hasOwnProperty(p)) {
        d[p] = b[p];
      }
    }
  };

  return _extendStatics(d, b);
};

function __extends(d, b) {
  _extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) {
        throw t[1];
      }

      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) {
      throw new TypeError("Generator is already executing.");
    }

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) {
          return t;
        }

        if (y = 0, t) {
          op = [op[0] & 2, t.value];
        }

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) {
              _.ops.pop();
            }

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) {
      throw op[1];
    }

    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;

  if (m) {
    return m.call(o);
  }

  if (o && typeof o.length === "number") {
    return {
      next: function next() {
        if (o && i >= o.length) {
          o = void 0;
        }

        return {
          value: o && o[i++],
          done: !o
        };
      }
    };
  }

  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];

  if (!m) {
    return o;
  }

  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) {
        m.call(i);
      }
    } finally {
      if (e) {
        throw e.error;
      }
    }
  }

  return ar;
}

function __spread() {
  var arguments$1 = arguments;

  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments$1[i]));
  }

  return ar;
}

var AuthError =
/** @class */
function (_super) {
  __extends(AuthError, _super); // public error?:string = "";
  // public 


  function AuthError(msg) {
    var arguments$1 = arguments;
    var params = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      params[_i - 1] = arguments$1[_i];
    }

    var _this = _super.call(this, msg) || this;

    _this.status = 400;
    _this.name = "authentication_error"; // public message:string = "";

    _this.error = true;
    _this.taken = false;
    _this.reason = "";
    var self = _this;

    if (msg) {
      _this.message = msg;
    }

    if (typeof Error !== 'undefined' && typeof Error['captureStackTrace'] === 'function') {
      // Error.captureStackTrace(this, AuthError);
      // Error.captureStackTrace(this);
      Error['captureStackTrace'](self, AuthError); // Error.captureStackTrace(self, self.constructor);
    }

    if (!_this.reason) {
      _this.reason = _this.message;
    }

    _this.toJSON = function () {
      // debuglog(`AuthError.toJSON() called`);
      var out = Object.assign({}, _this);
      out.message = _this.message + ""; // console.log(`AuthError.toJSON() called. Returning:`, out);

      return out;
    };

    _this.toJson = function () {
      return _this.toJSON();
    };

    return _this;
  }

  return AuthError;
}(Error);

var g = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {}; // const Url = URLParse && typeof URLParse.default !== 'undefined' ? URLParse.default : URLParse && typeof URLParse.location !== 'undefined' ? URLParse : fakeUrl;

var nodeFetch = fetch__default["default"]; // const nodeFetch = pFetch;

var nFetch = nodeFetch;
var cFetch = fetchCookie__default["default"](nodeFetch);
var mode = typeof window !== 'undefined' ? 'browser' : 'node';
var fet = typeof g['fetch'] === 'function' ? g['fetch'] : cFetch;

var debuglog = function debuglog() {
  var arguments$1 = arguments;
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments$1[_i];
  } // if(window && (window.PouchDB && window.PouchDB.debug && typeof window.PouchDB.debug.enabled === 'function' && window.PouchDB.debug.enabled('pouchdb:authentication'))) {
  // if(window && window.PouchDB && typeof window.PouchDB.emit === 'function' && window.pouchdbauthenticationplugindebug) {
  //   window.PouchDB.emit('debug', ['authentication', ...args]);
  //   console.log(...args);
  // }


  var g;

  if (typeof window !== 'undefined') {
    g = window;
  } else if (typeof global !== 'undefined') {
    g = global;
  }

  if (!g) {
    return;
  }

  if (typeof PouchDB__namespace !== 'undefined' && typeof PouchDB__namespace.emit === 'function') {
    PouchDB__namespace.emit('debug', __spread(['authentication'], args));
  }

  if (g && g['pouchdbauthenticationplugindebug'] === true && typeof console !== 'undefined' && typeof console.log === 'function') {
    console.log.apply(console, __spread(args));
  }
};

var debugloggroup = function debugloggroup(label) {
  var g;

  if (typeof window !== 'undefined') {
    g = window;
  } else if (typeof global !== 'undefined') {
    g = global;
  }

  if (!g) {
    return;
  }

  if (g && g['pouchdbauthenticationplugindebug'] === true && typeof console !== 'undefined' && typeof console.groupCollapsed === 'function') {
    console.groupCollapsed(label);
  }
};

var debugloggroupend = function debugloggroupend() {
  var g;

  if (typeof window !== 'undefined') {
    g = window;
  } else if (typeof global !== 'undefined') {
    g = global;
  }

  if (!g) {
    return;
  }

  if (g && g['pouchdbauthenticationplugindebug'] === true && typeof console !== 'undefined' && typeof console.groupEnd === 'function') {
    console.groupEnd();
  }
};

var debuglogemph = function debuglogemph(msg) {
  // if(window && (window.PouchDB && window.PouchDB.debug && typeof window.PouchDB.debug.enabled === 'function' && window.PouchDB.debug.enabled('pouchdb:authentication'))) {
  // if(window && window.PouchDB && typeof window.PouchDB.emit === 'function' && window.pouchdbauthenticationplugindebug) {
  //   window.PouchDB.emit('debug', ['authentication', ...args]);
  //   console.log(...args);
  // }
  var g;

  if (typeof window !== 'undefined') {
    g = window;
  } else if (typeof global !== 'undefined') {
    g = global;
  }

  if (!g) {
    return;
  }

  if (g && g['pouchdbauthenticationplugindebug'] === true) {
    var es = "background-color:red; color:white;";

    if (typeof PouchDB__namespace !== 'undefined' && typeof PouchDB__namespace.emit === 'function') {
      PouchDB__namespace.emit('debug', ['authentication', msg]);
    }

    if (typeof console !== 'undefined' && typeof console.log === 'function') {
      if (g.chrome) {
        console.log("%c" + msg, es);
      } else {
        console.log(msg);
      }
    }
  }
};

var debugerr = function debugerr() {
  var arguments$1 = arguments;

  var e_1, _a;

  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments$1[_i];
  } // if(window && (window.PouchDB && window.PouchDB.debug && typeof window.PouchDB.debug.enabled === 'function' && window.PouchDB.debug.enabled('pouchdb:authentication'))) {
  // if(window && window.PouchDB && typeof window.PouchDB.emit === 'function' && window.pouchdbauthenticationplugindebug) {
  //   window.PouchDB.emit('debug', ['authentication', ...args]);
  //   console.error(...args);
  // }


  var g;

  if (typeof window !== 'undefined') {
    g = window;
  } else if (typeof global !== 'undefined') {
    g = global;
  }

  if (!g) {
    return;
  }

  var errs,
      strError,
      jsonError = {};

  if (g && (g.pouchdbauthenticationplugindebug || typeof PouchDB__namespace !== 'undefined' && typeof PouchDB__namespace.emit === 'function')) {
    errs = __spread(args);

    try {
      for (var errs_1 = __values(errs), errs_1_1 = errs_1.next(); !errs_1_1.done; errs_1_1 = errs_1.next()) {
        var err = errs_1_1.value;

        if (err instanceof AuthError) {
          jsonError = err.toJSON();
          strError = JSON.stringify(jsonError);
          break;
        } else if (err instanceof Error) {
          strError = JSON.stringify(err);
          jsonError = JSON.parse(strError);

          if (strError === '{}') {
            jsonError = {
              message: err.message || "unknown_error_message",
              name: err.name || "unknown_error_name",
              stack: err.stack || "unknown_error_stack"
            };
            strError = JSON.stringify(jsonError);
          } // else {
          // }


          break;
        }
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (errs_1_1 && !errs_1_1.done && (_a = errs_1["return"])) {
          _a.call(errs_1);
        }
      } finally {
        if (e_1) {
          throw e_1.error;
        }
      }
    }
  }

  if (typeof PouchDB__namespace !== 'undefined' && typeof PouchDB__namespace.emit === 'function') {
    PouchDB__namespace.emit('debug', __spread(['authentication', "ERROR"], args));
    PouchDB__namespace.emit('debug', ['authentication', "STRERROR", strError]);
  }

  if (g && g['pouchdbauthenticationplugindebug'] === true && typeof console !== 'undefined' && typeof console.log === 'function' && typeof console.error === 'function') {
    var errcss = "font-weight: bold; background-color: rgba(255, 0, 0, 0.25);";

    if (errs[0]) {
      if (errs[0] instanceof AuthError) {
        console.log("%cPDBAUTH AUTHERROR:", errcss, jsonError);
        console.error(errs[0]);
      } else if (errs[0] instanceof Error) {
        console.log("%cPDBAUTH ERROR: ", errcss, jsonError);
        console.error(errs[0]);
      } else {
        console.error("%cPDBAUTH ERROR 1?: ", errcss, strError);
      }
    } else {
      console.error("%cPDBAUTH ERROR 2?: ", errcss, strError);
    }
  }
}; // let err = [...args] || [{}];


var getBaseUrl = function getBaseUrl(db) {
  // Use PouchDB.defaults' prefix, if any
  var fullName;
  var dbname = db.name; // let type:string = db.type();

  var prefix = db && db.__opts && typeof db.__opts.prefix === 'string' ? db.__opts.prefix : '';

  if (prefix) {
    fullName = prefix + (prefix.endsWith('/') ? '' : '/') + dbname;
  } else {
    fullName = dbname;
  } // let uri:ParsedURI = parseUri(fullName);


  var p = new Url__default["default"](fullName);
  var path = p.pathname;
  var normalizedPath = path.endsWith('/') ? path.slice(0, -1) : path; // Compute parent path for databases not hosted on domain root (see #215)

  var parentPath = normalizedPath.split('/').slice(0, -1).join('/'); // let port:string = p.port ? ":" + p.port : "";

  var baseUrl = "" + p.origin + parentPath; // let path:string = uri.path;
  // let normalizedPath:string = path.endsWith('/') ? path.substr(0, -1) : path;
  // let parentPath:string = normalizedPath.split('/').slice(0, -1).join('/');
  // let portString:string = uri.port ? `:${uri.port}` : '';
  // let baseURL:string = `${uri.protocol}://${uri.host}${portString}${parentPath}`;
  // // let baseURL:string = uri.protocol + '://' + uri.host + (uri.port ? ':' + uri.port : '') + parentPath;
  // console.log(`getBaseUrl(): Base URL is '${baseURL}'`);

  debuglog("getBaseUrl(): Base URL is '" + baseUrl + "'");
  return baseUrl;
};

var getDatabaseUrl = function getDatabaseUrl(db) {
  var fullName;
  var dbname = db.name; // let type:string = db.type();

  var prefix = db && db.__opts && typeof db.__opts.prefix === 'string' ? db.__opts.prefix : '';

  if (prefix) {
    fullName = prefix + (prefix.endsWith('/') ? '' : '/') + dbname;
  } else {
    fullName = dbname;
  }

  debuglog("getDatabaseUrl(): Database URL is '" + fullName + "'");
  return fullName;
};

var getRelativeComplexUrl = function getRelativeComplexUrl(db, url) {
  var dbBaseURL = getDatabaseUrl(db);
  var complexBaseUrl = makeBaseUrl(dbBaseURL, url);
  var dbname = db && db.name ? db.name : "UNKNOWN_POUCHDB_NAME";
  debuglog("getRelativeComplexUrl(): Relative complex URL for database '" + dbname + "' and URL '" + url + "' is '" + complexBaseUrl + "'");
  return complexBaseUrl;
};

var getComplexBaseUrl = function getComplexBaseUrl(db, url) {
  var dbBaseURL = getDatabaseUrl(db);
  var complexBaseUrl = makeBaseUrl(dbBaseURL, url);
  var dbname = db && db.name ? db.name : "UNKNOWN_POUCHDB_NAME";
  debuglog("getComplexBaseUrl(): Complex base URL for database '" + dbname + "' and URL '" + url + "' is '" + complexBaseUrl + "'");
  return complexBaseUrl;
};

var makeBaseUrl = function makeBaseUrl(baseURL, newURL) {
  // let newuri : ParsedURI = parseUri(newURL);
  // let puri   : ParsedURI = parseUri(baseURL);
  var outurl = "";
  baseURL = baseURL.slice(-1) === '/' ? baseURL.slice(0, -1) : baseURL;
  var baseuri = new Url__default["default"](baseURL);
  var puri = new Url__default["default"](newURL, baseURL);
  var relativePath = puri.pathname + puri.query; // let outurl:string = getURLWithoutSearchParams(baseURL);
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
  var uri = new Url__default["default"](url); // let port:string = uri.port ? ":" + uri.port : "";

  var auth = uri.username ? uri.username + ":" + uri.password + "@" : "";
  var cleanURL = uri.protocol + "://" + auth + uri.host + "/" + uri.pathname;
  return cleanURL;
}

function getBasicAuthTokenFor(username, password) {
  var authString = username + ":" + password;
  var token = pouchdbBinaryUtils.btoa(decodeURIComponent(encodeURIComponent(authString)));
  return token;
}

function getBasicAuthStringFor(username, password) {
  var token = getBasicAuthTokenFor(username, password);
  var authString = "Basic " + token;
  return authString;
}

function getBasicAuthHeadersFor(username, password) {
  var authString = getBasicAuthStringFor(username, password);
  var headers = new pouchdbFetch.Headers();
  headers.set('Authorization', authString);
  return headers;
}

var getBasicAuthHeaders = function getBasicAuthHeaders(db) {
  var auth;

  if (!db) {
    return new pouchdbFetch.Headers();
  }

  if (db.__opts && db.__opts.auth) {
    auth = db.__opts.auth;
  } else {
    var uri = pouchdbUtils.parseUri(db.name);

    if (uri.user || uri.password) {
      auth = {
        username: uri.user,
        password: uri.password
      };
    }
  }

  if (!auth) {
    return new pouchdbFetch.Headers();
  }

  return getBasicAuthHeadersFor(auth.username, auth.password); // let str:string = auth.username + ':' + auth.password;
  // let token:string = btoa(decodeURIComponent(encodeURIComponent(str)));
  // let headers:Headers = new Headers();
  // headers.set('Authorization', 'Basic ' + token);
  // return headers;
};

function getFullFetchURL(db, url) {
  var base = getBaseUrl(db);
  var queryURL = url.startsWith("/") ? url : "/" + url; // let p:ParsedURI = parseUri(fullURL);

  var p = new Url__default["default"](queryURL, base); // let port:string = p.port ? ":" + p.port : "";
  // let fetchURL:string = `${p.protocol}://${p.host}${port}${p.path}`;

  var fetchURL = p.href;
  return fetchURL;
}

function doFetch(db, url, opts, forceDBFetch) {
  return __awaiter(this, void 0, void 0, function () {
    var dbname, groupLabel, full, newurl, baseURL, res, RESERVED_KEYS, RESERVED_KEYS_1, RESERVED_KEYS_1_1, key, dbURL, fetchURL, authString, headers, g_1, relativeURL, css, newHeaders, headers, headers_1, headers_1_1, entry, key, value, nFetchOpts, hdrs, jsonRes, ok, content, msg, status_1, err, err_1;

    var e_2, _a, e_3, _b;

    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          _c.trys.push([0, 10,, 11]);

          opts = pouchdbUtils.assign(opts || {});
          dbname = getDatabaseUrl(db);
          groupLabel = "doFetch() called for DB '" + dbname + "' and URL '" + url + "' and options:";
          debuglog(groupLabel, opts); // debugloggroup(groupLabel);
          // debuglog(`doFetch(): Full DB is:`, db);
          // debuglog(`doFetch(): Called with url '${url}'`);

          debuglog("doFetch(): Called with opts:", opts);
          full = true;
          newurl = void 0;
          baseURL = void 0;
          res = void 0;
          RESERVED_KEYS = ['/_config', '/_users', '/_session', '/_active_tasks', '/_all_dbs', '/_dbs_info', '/_cluster_setup', '/_db_updates', '/_membership', '/_replicate', '/_scheduler', '/_node', '/_utils', '/_up', '/_uuids', '/favicon.ico'];

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
          } catch (e_2_1) {
            e_2 = {
              error: e_2_1
            };
          } finally {
            try {
              if (RESERVED_KEYS_1_1 && !RESERVED_KEYS_1_1.done && (_a = RESERVED_KEYS_1["return"])) {
                _a.call(RESERVED_KEYS_1);
              }
            } finally {
              if (e_2) {
                throw e_2.error;
              }
            }
          }

          if (full) {
            // baseURL = db.name;
            baseURL = getDatabaseUrl(db);
          } else {
            baseURL = url; // baseURL = getBaseUrl(db);
            // baseURL = getComplexBaseUrl(db, url);
          }

          dbURL = new Url__default["default"](dbname);
          new Url__default["default"](baseURL, dbname);
          fetchURL = getFullFetchURL(db, baseURL);
          newurl = fetchURL; // if(url[0] === "/") {
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
            opts.body = JSON.stringify(opts.body); // opts.body = JSON.stringify(opts.body);
          }

          if (dbURL.username) {
            authString = getBasicAuthStringFor(dbURL.username, dbURL.password);
            headers = new pouchdbFetch.Headers(opts.headers);
            headers.set("Authorization", authString);
            opts.headers = headers; // newurl = fullURL.origin + fullURL.pathname + fullURL.search;
          }

          g_1 = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : null;

          if (!(forceDBFetch || g_1 && g_1.forceDBFetch === true)) {
            return [3
            /*break*/
            , 2];
          }

          relativeURL = getRelativeComplexUrl(db, url);
          css = "border: 5px dotted green; background-color: rgba(0, 255, 255, 0.3); padding: 5px;";
          debuglog("%cdoFetch(): FORCIBLY PouchDB.fetch'ing from url '" + relativeURL + "' with options:", css, opts);
          return [4
          /*yield*/
          , db.fetch(relativeURL, opts)];

        case 1:
          res = _c.sent();
          return [3
          /*break*/
          , 8];

        case 2:
          if (!full) {
            return [3
            /*break*/
            , 4];
          } // let res:Response = await db.fetch(newurl, opts);


          debuglog("doFetch(): PouchDB.fetch'ing from url '" + url + "' with options:", opts);
          return [4
          /*yield*/
          , db.fetch(url, opts)];

        case 3:
          res = _c.sent();
          return [3
          /*break*/
          , 8];

        case 4:
          if (!(mode === 'node')) {
            return [3
            /*break*/
            , 6];
          }

          newHeaders = {};
          headers = opts && opts.headers && opts.headers.entries ? opts.headers.entries() : [];

          try {
            for (headers_1 = __values(headers), headers_1_1 = headers_1.next(); !headers_1_1.done; headers_1_1 = headers_1.next()) {
              entry = headers_1_1.value;
              key = entry[0];
              value = entry[1]; // newHeaders.push([key, value]);

              newHeaders[key] = value;
            }
          } catch (e_3_1) {
            e_3 = {
              error: e_3_1
            };
          } finally {
            try {
              if (headers_1_1 && !headers_1_1.done && (_b = headers_1["return"])) {
                _b.call(headers_1);
              }
            } finally {
              if (e_3) {
                throw e_3.error;
              }
            }
          }

          nFetchOpts = pouchdbUtils.assign({}, opts);
          hdrs = new pouchdbFetch.Headers(newHeaders); // let hdrs:Headers = new nHeaders(newHeaders);
          // nFetchOpts.headers = newHeaders;

          nFetchOpts.headers = hdrs; // res = await nFetch(newurl, opts);

          debuglog("doFetch(): Cross-Fetch'ing from url '" + newurl + "' with options:", nFetchOpts);
          return [4
          /*yield*/
          , fet(newurl, nFetchOpts)];

        case 5:
          res = _c.sent();
          return [3
          /*break*/
          , 8];

        case 6:
          debuglog("doFetch(): Global-Fetch'ing from url '" + newurl + "' with options:", opts);
          return [4
          /*yield*/
          , fet(newurl, opts)];

        case 7:
          res = _c.sent();
          _c.label = 8;

        case 8:
          if (fet !== nFetch) {
            debuglog("doFetch(): Response is: ", res);
          } else {
            jsonRes = {
              url: res.url,
              ok: res.ok,
              status: res.status,
              statusText: res.statusText
            };
            debuglog("doFetch(): Response is: ", jsonRes);
          }

          ok = res.ok;
          return [4
          /*yield*/
          , res.json()];

        case 9:
          content = _c.sent(); // if(ok) {
          //   callback(null, content);
          // } else {
          //   content.name = content.error;
          //   callback(content);
          // }
          // return res;

          if (ok) {
            return [2
            /*return*/
            , content];
          } else {
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
            } //  else if(msg === 'unknown_error') {
            //   err.name = msg;
            // }
            // content.name = content.error;


            throw err;
          }

        case 10:
          err_1 = _c.sent(); // console.log(`doFetch(): Fetch error:\n`, err);

          if (err_1 && err_1.name === 'unknown_error') {
            err_1.message = (err_1.message + ' ' || '') + 'Unknown error!  Did you remember to enable CORS?';
          }

          debuglog("doFetch(): Error during fetch!");
          debugerr(err_1); // callback(err);

          throw err_1;

        case 11:
          return [2
          /*return*/
          ];
      }
    });
  });
}

var getConfigUrl = function getConfigUrl(db, nodeName) {
  return (nodeName ? '/_node/' + nodeName : '') + '/_config';
};

var getMembership = function getMembership(opts) {
  return __awaiter(this, void 0, void 0, function () {
    var db, options, url, ajaxOpts, res, err_1;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 2,, 3]);

          db = this;
          options = opts != undefined ? opts : {};
          url = '/_membership';
          ajaxOpts = pouchdbUtils.assign({
            method: 'GET',
            headers: getBasicAuthHeaders(db)
          }, options.ajax || {});
          return [4
          /*yield*/
          , doFetch(db, url, ajaxOpts)];

        case 1:
          res = _a.sent(); // console.log(`getMembership(): DB membership is:\n`, res);

          return [2
          /*return*/
          , res];

        case 2:
          err_1 = _a.sent();
          throw err_1;

        case 3:
          return [2
          /*return*/
          ];
      }
    });
  });
};

var signUpAdmin = function signUpAdmin(username, password, opts) {
  return __awaiter(this, void 0, void 0, function () {
    var db, options, err, err, err, membership, nodeName, err_2, configUrl, url, ajaxOpts, res, err_3;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 6,, 7]);

          debuglogemph("PouchDB.signUpAdmin(): Called for '" + username + "'");
          db = this;
          options = opts != undefined ? opts : {};

          if (['http', 'https'].indexOf(db.type()) === -1) {
            err = new AuthError('This plugin only works for the http/https adapter. So you should use new PouchDB("http://mysite.com:5984/mydb") instead.');
            throw err;
          } else if (!username) {
            err = new AuthError('You must provide a username');
            throw err;
          } else if (!password) {
            err = new AuthError('You must provide a password');
            throw err;
          }

          membership = void 0;
          nodeName = void 0;
          _a.label = 1;

        case 1:
          _a.trys.push([1, 3,, 4]);

          return [4
          /*yield*/
          , db.getMembership(options)];

        case 2:
          membership = _a.sent(); // This is a CouchDB 2.x server

          nodeName = membership.all_nodes[0];
          return [3
          /*break*/
          , 4];

        case 3:
          err_2 = _a.sent();

          if (err_2.error && err_2.error === 'illegal_database_name') {
            throw err_2;
          } else {
            // This could be a CouchDB 1.x server
            nodeName = undefined;
          }

          return [3
          /*break*/
          , 4];

        case 4:
          configUrl = getConfigUrl(db, nodeName);
          url = (options.configUrl || configUrl) + '/admins/' + encodeURIComponent(username);
          ajaxOpts = pouchdbUtils.assign({
            method: 'PUT',
            processData: false,
            headers: getBasicAuthHeaders(db),
            // headers: headers,
            body: '"' + password + '"'
          }, options.ajax || {});
          return [4
          /*yield*/
          , doFetch(db, url, ajaxOpts)];

        case 5:
          res = _a.sent();
          return [2
          /*return*/
          , res];

        case 6:
          err_3 = _a.sent();
          throw err_3;

        case 7:
          return [2
          /*return*/
          ];
      }
    });
  });
};

var deleteAdmin = function deleteAdmin(username, opts) {
  return __awaiter(this, void 0, void 0, function () {
    var db, options, err, err, membership, nodeName, err_4, configUrl, url, headers, ajaxOpts, noAuthAjaxOpts, res, err_5;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 9,, 10]);

          debuglogemph("PouchDB.deleteAdmin(): Called for '" + username + "'");
          db = this;
          options = opts != undefined ? opts : {};

          if (['http', 'https'].indexOf(db.type()) === -1) {
            err = new AuthError('This plugin only works for the http/https adapter. So you should use new PouchDB("http://mysite.com:5984/mydb") instead.');
            throw err;
          } else if (!username) {
            err = new AuthError('You must provide a username');
            throw err;
          }

          membership = void 0;
          nodeName = void 0;
          _a.label = 1;

        case 1:
          _a.trys.push([1, 3,, 4]);

          return [4
          /*yield*/
          , db.getMembership(options)];

        case 2:
          membership = _a.sent(); // This is a CouchDB 2.x server

          nodeName = membership.all_nodes[0];
          return [3
          /*break*/
          , 4];

        case 3:
          err_4 = _a.sent();

          if (err_4.error && err_4.error === 'illegal_database_name') {
            throw err_4;
          } else {
            // This could be a CouchDB 1.x server
            nodeName = undefined;
          }

          return [3
          /*break*/
          , 4];

        case 4:
          configUrl = getConfigUrl(db, nodeName);
          url = (options.configUrl || configUrl) + '/admins/' + encodeURIComponent(username);
          headers = getBasicAuthHeaders(db);
          ajaxOpts = pouchdbUtils.assign({
            method: 'DELETE',
            processData: false,
            headers: headers
          }, options.ajax || {});
          noAuthAjaxOpts = pouchdbUtils.assign({}, ajaxOpts);
          delete noAuthAjaxOpts.headers;
          res = void 0;
          _a.label = 5;

        case 5:
          _a.trys.push([5, 7,, 8]);

          return [4
          /*yield*/
          , doFetch(db, url, ajaxOpts)];

        case 6:
          res = _a.sent();
          return [2
          /*return*/
          , res];

        case 7:
          _a.sent();

          debuglogemph("deleteAdmin(): Error deleting administ");
          return [3
          /*break*/
          , 8];

        case 8:
          return [2
          /*return*/
          , res];

        case 9:
          err_5 = _a.sent();
          throw err_5;

        case 10:
          return [2
          /*return*/
          ];
      }
    });
  });
};

var logIn = function logIn(username, password, opts) {
  return __awaiter(this, void 0, void 0, function () {
    var db, options, err, err, err, url, headers, ajaxOpts, res, auth, err_1;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 2,, 3]);

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
          } else if (!password) {
            err = new Error("you must provide a password");
            throw err;
          }

          url = '/_session';
          headers = getBasicAuthHeadersFor(username, password);
          headers.append('Content-Type', 'application/json');
          ajaxOpts = pouchdbUtils.assign({
            method: 'POST',
            // headers: assign({'Content-Type': 'application/json'}, getBasicAuthHeaders(db)),
            headers: headers,
            body: {
              name: username,
              password: password
            }
          }, options.ajax || {});
          return [4
          /*yield*/
          , doFetch(db, url, ajaxOpts)];

        case 1:
          res = _a.sent();

          if (db && db.__opts) {
            if (db.__opts.auth) {
              db.__opts.auth.username = username;
              db.__opts.auth.password = password;
            } else {
              auth = {
                username: username,
                password: password
              };
              db.__opts.auth = auth;
            }
          }

          return [2
          /*return*/
          , res];

        case 2:
          err_1 = _a.sent();
          throw err_1;

        case 3:
          return [2
          /*return*/
          ];
      }
    });
  });
};

var logOut = function logOut(opts) {
  return __awaiter(this, void 0, void 0, function () {
    var db, options, url, ajaxOpts, res, err_2, db, options, url, noAuthAjaxOpts, res, err_3;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 2,, 7]);

          debuglogemph("PouchDB.logOut(): Called");
          db = this;
          options = opts != undefined ? opts : {};
          url = '/_session';
          ajaxOpts = pouchdbUtils.assign({
            method: 'DELETE',
            headers: getBasicAuthHeaders(db)
          }, options.ajax || {});
          return [4
          /*yield*/
          , doFetch(db, url, ajaxOpts)];

        case 1:
          res = _a.sent();

          if (db && db.__opts && db.__opts.auth) {
            delete db.__opts.auth;
          }

          return [2
          /*return*/
          , res];

        case 2:
          err_2 = _a.sent();
          _a.label = 3;

        case 3:
          _a.trys.push([3, 5,, 6]);

          debuglog("======> PouchDB.logOut(): Caught error trying to log out");
          debugerr(err_2);
          debuglog("======> PouchDB.logOut(): Retrying without authentication \u2026");
          db = this;
          options = opts != undefined ? opts : {};
          url = '/_session';
          noAuthAjaxOpts = pouchdbUtils.assign({
            method: 'DELETE'
          }, options.ajax || {});
          delete noAuthAjaxOpts.headers;
          return [4
          /*yield*/
          , doFetch(db, url, noAuthAjaxOpts)];

        case 4:
          res = _a.sent();

          if (db && db.__opts && db.__opts.auth) {
            delete db.__opts.auth;
          }

          debuglog("======> PouchDB.logOut(): Successfully logged out after retrying without authentication headers.");
          return [2
          /*return*/
          , res];

        case 5:
          err_3 = _a.sent();
          throw err_3;

        case 6:
          return [3
          /*break*/
          , 7];

        case 7:
          return [2
          /*return*/
          ];
      }
    });
  });
};

var getSession = function getSession() {
  return __awaiter(this, void 0, void 0, function () {
    var db, url, ajaxOpts, res, err_4;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 2,, 3]);

          debuglogemph("PouchDB.getSession(): Called");
          db = this;
          url = '/_session';
          ajaxOpts = {
            method: 'GET',
            headers: getBasicAuthHeaders(db)
          };
          return [4
          /*yield*/
          , doFetch(db, url, ajaxOpts)];

        case 1:
          res = _a.sent();
          return [2
          /*return*/
          , res];

        case 2:
          err_4 = _a.sent();
          throw err_4;

        case 3:
          return [2
          /*return*/
          ];
      }
    });
  });
}; // import * as PouchDB from 'pouchdb-core';


var getUsersDatabaseUrl = function getUsersDatabaseUrl() {
  var db = this;
  var userDBURL = getBaseUrl(db) + '/_users'; // console.log(`getUsersDatabaseUrl(): URL and DB is:\n`, userDBURL);
  // console.log(`getUsersDatabaseUrl(): DB is:`, db);

  return userDBURL;
};

var hasRole = function hasRole(username, role, opts) {
  return __awaiter(this, void 0, void 0, function () {
    var db, userdoc, roles, err_1;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 2,, 3]);

          db = this;
          debuglogemph("PouchDB.hasRole(): Called for user '" + username + "'");
          return [4
          /*yield*/
          , db.getUser(username, opts)];

        case 1:
          userdoc = _a.sent();
          roles = userdoc.roles || [];

          if (roles.indexOf(role) > -1) {
            return [2
            /*return*/
            , true];
          }

          return [2
          /*return*/
          , false];

        case 2:
          err_1 = _a.sent();
          throw err_1;

        case 3:
          return [2
          /*return*/
          ];
      }
    });
  });
};

var getRoles = function getRoles(username, opts) {
  return __awaiter(this, void 0, void 0, function () {
    var db, userdoc, roles, err_2;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 2,, 3]);

          db = this;
          debuglogemph("PouchDB.getRoles(): Called for user '" + username + "'");
          return [4
          /*yield*/
          , db.getUser(username, opts)];

        case 1:
          userdoc = _a.sent();
          roles = userdoc.roles || [];
          return [2
          /*return*/
          , roles];

        case 2:
          err_2 = _a.sent();
          throw err_2;

        case 3:
          return [2
          /*return*/
          ];
      }
    });
  });
};

var addRoles = function addRoles(username, roles, opts) {
  return __awaiter(this, void 0, void 0, function () {
    var db, userdoc, newRoles, rolesToAdd, rolesToAdd_1, rolesToAdd_1_1, role, res, err_3;

    var e_1, _a;

    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          _b.trys.push([0, 3,, 4]);

          db = this;
          debuglogemph("PouchDB.addRoles(): Called for user '" + username + "' and role '" + roles + "'");
          return [4
          /*yield*/
          , db.getUser(username, opts)];

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
              } else {
                newRoles.push(role);
              }
            }
          } catch (e_1_1) {
            e_1 = {
              error: e_1_1
            };
          } finally {
            try {
              if (rolesToAdd_1_1 && !rolesToAdd_1_1.done && (_a = rolesToAdd_1["return"])) {
                _a.call(rolesToAdd_1);
              }
            } finally {
              if (e_1) {
                throw e_1.error;
              }
            }
          }

          newRoles.sort();
          userdoc.roles = newRoles;
          return [4
          /*yield*/
          , updateUser(db, userdoc, opts)];

        case 2:
          res = _b.sent();
          return [2
          /*return*/
          , res];

        case 3:
          err_3 = _b.sent();
          throw err_3;

        case 4:
          return [2
          /*return*/
          ];
      }
    });
  });
};

var deleteRoles = function deleteRoles(username, roles, opts) {
  return __awaiter(this, void 0, void 0, function () {
    var db, userdoc, existingRoles, rolesToDelete_1, filteredExistingRoles, res, err_4;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 3,, 4]);

          db = this;
          debuglogemph("PouchDB.deleteRoles(): Called for user '" + username + "' and role '" + roles + "'");
          return [4
          /*yield*/
          , db.getUser(username, opts)];

        case 1:
          userdoc = _a.sent();
          existingRoles = userdoc.roles || [];
          rolesToDelete_1 = Array.isArray(roles) ? roles : typeof roles === 'string' ? [roles] : [];
          filteredExistingRoles = existingRoles.filter(function (a) {
            if (rolesToDelete_1.indexOf(a) > -1) {
              return false;
            } else {
              return true;
            }
          });
          userdoc.roles = filteredExistingRoles;
          return [4
          /*yield*/
          , updateUser(db, userdoc, opts)];

        case 2:
          res = _a.sent();
          return [2
          /*return*/
          , res];

        case 3:
          err_4 = _a.sent();
          throw err_4;

        case 4:
          return [2
          /*return*/
          ];
      }
    });
  });
};

var updateUser = function updateUser(db, user, opts) {
  return __awaiter(this, void 0, void 0, function () {
    var id, options, reservedWords, key, err, url, ajaxOpts, res, err_5;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 2,, 3]);

          id = user && typeof user._id === 'string' ? user._id : "UNKNOWN_USER";
          debuglogemph("PouchDB.updateUser(): Called for '" + id + "'");
          options = opts != undefined ? opts : {};
          reservedWords = ['_id', '_rev', 'name', 'type', 'roles', 'password', 'password_scheme', 'iterations', 'derived_key', 'salt'];

          if (options.metadata) {
            for (key in options.metadata) {
              if (options.metadata.hasOwnProperty(key) && reservedWords.indexOf(key) !== -1) {
                err = new AuthError('cannot use reserved word in metadata: "' + key + '"');
                throw err;
              }
            }

            user = pouchdbUtils.assign(user, options.metadata);
          }

          if (options.roles) {
            user = pouchdbUtils.assign(user, {
              roles: options.roles
            });
          }

          url = '/_users/' + encodeURIComponent(user._id);
          ajaxOpts = pouchdbUtils.assign({
            method: 'PUT',
            body: user,
            headers: getBasicAuthHeaders(db)
          }, options.ajax || {});
          return [4
          /*yield*/
          , doFetch(db, url, ajaxOpts)];

        case 1:
          res = _a.sent();
          return [2
          /*return*/
          , res];

        case 2:
          err_5 = _a.sent();
          throw err_5;

        case 3:
          return [2
          /*return*/
          ];
      }
    });
  });
};

var signUp = function signUp(username, password, opts) {
  return __awaiter(this, void 0, void 0, function () {
    var db, options, err, err, err, userId, user, res, err_6;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 2,, 3]);

          debuglogemph("PouchDB.signUp(): Called for '" + username + "'");
          db = this;
          options = opts != undefined ? opts : {};

          if (['http', 'https'].indexOf(db.type()) === -1) {
            err = new AuthError('This plugin only works for the http/https adapter. So you should use new PouchDB("http://mysite.com:5984/mydb") instead.');
            throw err;
          } else if (!username) {
            err = new AuthError('You must provide a username');
            throw err;
          } else if (!password) {
            err = new AuthError('You must provide a password');
            throw err;
          }

          userId = 'org.couchdb.user:' + username;
          user = {
            name: username,
            password: password,
            roles: [],
            type: 'user',
            _id: userId
          };
          return [4
          /*yield*/
          , updateUser(db, user, options)];

        case 1:
          res = _a.sent();
          return [2
          /*return*/
          , res];

        case 2:
          err_6 = _a.sent();
          throw err_6;

        case 3:
          return [2
          /*return*/
          ];
      }
    });
  });
};

var getUser = function getUser(username, opts) {
  return __awaiter(this, void 0, void 0, function () {
    var db, options, err, url, ajaxOpts, res, err_7;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 2,, 3]);

          debuglogemph("PouchDB.getUser(): Called for '" + username + "'");
          db = this;
          options = opts != undefined ? opts : {};

          if (!username) {
            err = new AuthError('you must provide a username');
            throw err;
          }

          url = '/_users/' + encodeURIComponent('org.couchdb.user:' + username);
          ajaxOpts = pouchdbUtils.assign({
            method: 'GET',
            headers: getBasicAuthHeaders(db)
          }, options.ajax || {});
          return [4
          /*yield*/
          , doFetch(db, url, ajaxOpts)];

        case 1:
          res = _a.sent();
          return [2
          /*return*/
          , res];

        case 2:
          err_7 = _a.sent();
          throw err_7;

        case 3:
          return [2
          /*return*/
          ];
      }
    });
  });
};

var putUser = function putUser(username, opts) {
  return __awaiter(this, void 0, void 0, function () {
    var db, options, err, err, user, res, err_8;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 3,, 4]);

          debuglogemph("PouchDB.putUser(): Called for '" + username + "'");
          db = this;
          options = opts != undefined ? opts : {};

          if (['http', 'https'].indexOf(db.type()) === -1) {
            err = new AuthError('This plugin only works for the http/https adapter. So you should use new PouchDB("http://mysite.com:5984/mydb") instead.');
            throw err;
          } else if (!username) {
            err = new AuthError('You must provide a username');
            throw err;
          }

          return [4
          /*yield*/
          , db.getUser(username, options)];

        case 1:
          user = _a.sent();
          return [4
          /*yield*/
          , updateUser(db, user, options)];

        case 2:
          res = _a.sent();
          return [2
          /*return*/
          , res];

        case 3:
          err_8 = _a.sent();
          throw err_8;

        case 4:
          return [2
          /*return*/
          ];
      }
    });
  });
};

var deleteUser = function deleteUser(username, opts) {
  return __awaiter(this, void 0, void 0, function () {
    var db, options, err, err, user, url, ajaxOpts, res, err_9;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 3,, 4]);

          debuglogemph("PouchDB.deleteUser(): Called for '" + username + "'");
          db = this;
          options = opts != undefined ? opts : {};

          if (['http', 'https'].indexOf(db.type()) === -1) {
            err = new AuthError('This plugin only works for the http/https adapter. So you should use new PouchDB("http://mysite.com:5984/mydb") instead.');
            throw err;
          } else if (!username) {
            err = new AuthError('You must provide a username');
            throw err;
          }

          return [4
          /*yield*/
          , db.getUser(username, options)];

        case 1:
          user = _a.sent();
          url = '/_users/' + encodeURIComponent(user._id) + '?rev=' + user._rev;
          ajaxOpts = pouchdbUtils.assign({
            method: 'DELETE',
            headers: getBasicAuthHeaders(db)
          }, options.ajax || {});
          return [4
          /*yield*/
          , doFetch(db, url, ajaxOpts)];

        case 2:
          res = _a.sent();
          return [2
          /*return*/
          , res];

        case 3:
          err_9 = _a.sent();
          throw err_9;

        case 4:
          return [2
          /*return*/
          ];
      }
    });
  });
};

var changePassword = function changePassword(username, password, opts) {
  return __awaiter(this, void 0, void 0, function () {
    var db, options, err, err, err, user, url, ajaxOpts, res, err_10;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 3,, 4]);

          debuglogemph("PouchDB.changePassword(): Called for '" + username + "'");
          db = this;
          options = opts != undefined ? opts : {};

          if (['http', 'https'].indexOf(db.type()) === -1) {
            err = new AuthError('This plugin only works for the http/https adapter. So you should use new PouchDB("http://mysite.com:5984/mydb") instead.');
            throw err;
          } else if (!username) {
            err = new AuthError('You must provide a username');
            throw err;
          } else if (!password) {
            err = new AuthError('You must provide a password');
            throw err;
          }

          return [4
          /*yield*/
          , db.getUser(username, options)];

        case 1:
          user = _a.sent();
          user.password = password;
          url = '/_users/' + encodeURIComponent(user._id);
          ajaxOpts = pouchdbUtils.assign({
            method: 'PUT',
            headers: getBasicAuthHeaders(db),
            body: user
          }, options.ajax || {});
          return [4
          /*yield*/
          , doFetch(db, url, ajaxOpts)];

        case 2:
          res = _a.sent();
          return [2
          /*return*/
          , res];

        case 3:
          err_10 = _a.sent();
          throw err_10;

        case 4:
          return [2
          /*return*/
          ];
      }
    });
  });
};

var changeUsername = function changeUsername(oldUsername, newUsername, opts) {
  return __awaiter(this, void 0, void 0, function () {
    var db_1, options, USERNAME_PREFIX, fetch_1, updateUser_1, err, err, err, res, err, user, newUser, res, err_12, err_13;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 11,, 12]);

          debuglogemph("PouchDB.changeUsername(): Called for '" + oldUsername + "' => '" + newUsername + "'");
          db_1 = this;
          options = opts != undefined ? opts : {};
          USERNAME_PREFIX = 'org.couchdb.user:';

          fetch_1 = function fetch_1(url, opts) {
            return __awaiter(this, void 0, void 0, function () {
              var options_1, res, err_14;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    _a.trys.push([0, 2,, 3]);

                    options_1 = opts != undefined ? opts : {};
                    return [4
                    /*yield*/
                    , doFetch(db_1, url, options_1)];

                  case 1:
                    res = _a.sent();
                    return [2
                    /*return*/
                    , res];

                  case 2:
                    err_14 = _a.sent();
                    throw err_14;

                  case 3:
                    return [2
                    /*return*/
                    ];
                }
              });
            });
          };

          updateUser_1 = function updateUser_1(user, opts) {
            return __awaiter(this, void 0, void 0, function () {
              var options_2, url, updateOpts, res, err_15;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    _a.trys.push([0, 2,, 3]);

                    options_2 = opts != undefined ? opts : {};
                    url = '/_users/' + encodeURIComponent(user._id);
                    updateOpts = pouchdbUtils.assign({
                      method: 'PUT',
                      headers: getBasicAuthHeaders(db_1),
                      body: user
                    }, options_2.ajax || {});
                    return [4
                    /*yield*/
                    , fetch_1(url, updateOpts)];

                  case 1:
                    res = _a.sent();
                    return [2
                    /*return*/
                    , res];

                  case 2:
                    err_15 = _a.sent();
                    throw err_15;

                  case 3:
                    return [2
                    /*return*/
                    ];
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
          _a.trys.push([1, 3,, 10]);

          return [4
          /*yield*/
          , db_1.getUser(newUsername, options)];

        case 2:
          res = _a.sent();
          err = new AuthError('user already exists');
          err.taken = true;
          throw err;

        case 3:
          _a.sent();

          _a.label = 4;

        case 4:
          _a.trys.push([4, 8,, 9]);

          return [4
          /*yield*/
          , db_1.getUser(oldUsername, options)];

        case 5:
          user = _a.sent();
          newUser = pouchdbUtils.clone(user);
          delete newUser._rev;
          newUser._id = USERNAME_PREFIX + newUsername;
          newUser.name = newUsername;
          newUser.roles = options.roles || user.roles || [];
          return [4
          /*yield*/
          , updateUser_1(newUser, options)];

        case 6:
          res = _a.sent();
          user._deleted = true;
          return [4
          /*yield*/
          , updateUser_1(user, options)];

        case 7:
          res = _a.sent();
          return [2
          /*return*/
          , res];

        case 8:
          err_12 = _a.sent();
          throw err_12;

        case 9:
          return [3
          /*break*/
          , 10];

        case 10:
          return [3
          /*break*/
          , 12];

        case 11:
          err_13 = _a.sent();
          throw err_13;

        case 12:
          return [2
          /*return*/
          ];
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
  hasRole: hasRole
};
var plugin = PouchDBAuthPlugin; // let var plugin:any = {};
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

Object.defineProperty(exports, 'parseUri', {
  enumerable: true,
  get: function get() {
    return pouchdbUtils.parseUri;
  }
});
Object.defineProperty(exports, 'Url', {
  enumerable: true,
  get: function get() {
    return Url__default["default"];
  }
});
exports.AuthError = AuthError;
exports.addRoles = addRoles;
exports.changePassword = changePassword;
exports.changeUsername = changeUsername;
exports.debugerr = debugerr;
exports.debuglog = debuglog;
exports.debuglogemph = debuglogemph;
exports.debugloggroup = debugloggroup;
exports.debugloggroupend = debugloggroupend;
exports["default"] = plugin;
exports.deleteAdmin = deleteAdmin;
exports.deleteRoles = deleteRoles;
exports.deleteUser = deleteUser;
exports.doFetch = doFetch;
exports.fet = fet;
exports.getBaseUrl = getBaseUrl;
exports.getBasicAuthHeaders = getBasicAuthHeaders;
exports.getBasicAuthHeadersFor = getBasicAuthHeadersFor;
exports.getComplexBaseUrl = getComplexBaseUrl;
exports.getConfigUrl = getConfigUrl;
exports.getFullFetchURL = getFullFetchURL;
exports.getMembership = getMembership;
exports.getRelativeComplexUrl = getRelativeComplexUrl;
exports.getRoles = getRoles;
exports.getSession = getSession;
exports.getURLWithoutSearchParams = getURLWithoutSearchParams;
exports.getUser = getUser;
exports.getUsersDatabaseUrl = getUsersDatabaseUrl;
exports.hasRole = hasRole;
exports.logIn = logIn;
exports.logOut = logOut;
exports.makeBaseUrl = makeBaseUrl;
exports.mode = mode;
exports.nFetch = nFetch;
exports.putUser = putUser;
exports.signUp = signUp;
exports.signUpAdmin = signUpAdmin;

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"11":11,"30":30,"34":34,"36":36,"40":40,"58":58,"8":8}],2:[function(require,module,exports){
'use strict';

module.exports = argsArray;

function argsArray(fun) {
  return function () {
    var len = arguments.length;

    if (len) {
      var args = [];
      var i = -1;

      while (++i < len) {
        args[i] = arguments[i];
      }

      return fun.call(this, args);
    } else {
      return fun.call(this, []);
    }
  };
}

},{}],3:[function(require,module,exports){
(function (global){(function (){
'use strict';

var possibleNames = ['BigInt64Array', 'BigUint64Array', 'Float32Array', 'Float64Array', 'Int16Array', 'Int32Array', 'Int8Array', 'Uint16Array', 'Uint32Array', 'Uint8Array', 'Uint8ClampedArray'];
var g = typeof globalThis === 'undefined' ? global : globalThis;

module.exports = function availableTypedArrays() {
  var out = [];

  for (var i = 0; i < possibleNames.length; i++) {
    if (typeof g[possibleNames[i]] === 'function') {
      out[out.length] = possibleNames[i];
    }
  }

  return out;
};

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],4:[function(require,module,exports){
"use strict";

},{}],5:[function(require,module,exports){
(function (global){(function (){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! https://mths.be/punycode v1.4.1 by @mathias */
;

(function (root) {
  /** Detect free variables */
  var freeExports = (typeof exports === "undefined" ? "undefined" : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;
  var freeModule = (typeof module === "undefined" ? "undefined" : _typeof(module)) == 'object' && module && !module.nodeType && module;
  var freeGlobal = (typeof global === "undefined" ? "undefined" : _typeof(global)) == 'object' && global;

  if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal) {
    root = freeGlobal;
  }
  /**
   * The `punycode` object.
   * @name punycode
   * @type Object
   */


  var punycode,

  /** Highest positive signed 32-bit float value */
  maxInt = 2147483647,
      // aka. 0x7FFFFFFF or 2^31-1

  /** Bootstring parameters */
  base = 36,
      tMin = 1,
      tMax = 26,
      skew = 38,
      damp = 700,
      initialBias = 72,
      initialN = 128,
      // 0x80
  delimiter = '-',
      // '\x2D'

  /** Regular expressions */
  regexPunycode = /^xn--/,
      regexNonASCII = /[^\x20-\x7E]/,
      // unprintable ASCII chars + non-ASCII chars
  regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g,
      // RFC 3490 separators

  /** Error messages */
  errors = {
    'overflow': 'Overflow: input needs wider integers to process',
    'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
    'invalid-input': 'Invalid input'
  },

  /** Convenience shortcuts */
  baseMinusTMin = base - tMin,
      floor = Math.floor,
      stringFromCharCode = String.fromCharCode,

  /** Temporary variable */
  key;
  /*--------------------------------------------------------------------------*/

  /**
   * A generic error utility function.
   * @private
   * @param {String} type The error type.
   * @returns {Error} Throws a `RangeError` with the applicable error message.
   */

  function error(type) {
    throw new RangeError(errors[type]);
  }
  /**
   * A generic `Array#map` utility function.
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} callback The function that gets called for every array
   * item.
   * @returns {Array} A new array of values returned by the callback function.
   */


  function map(array, fn) {
    var length = array.length;
    var result = [];

    while (length--) {
      result[length] = fn(array[length]);
    }

    return result;
  }
  /**
   * A simple `Array#map`-like wrapper to work with domain name strings or email
   * addresses.
   * @private
   * @param {String} domain The domain name or email address.
   * @param {Function} callback The function that gets called for every
   * character.
   * @returns {Array} A new string of characters returned by the callback
   * function.
   */


  function mapDomain(string, fn) {
    var parts = string.split('@');
    var result = '';

    if (parts.length > 1) {
      // In email addresses, only the domain name should be punycoded. Leave
      // the local part (i.e. everything up to `@`) intact.
      result = parts[0] + '@';
      string = parts[1];
    } // Avoid `split(regex)` for IE8 compatibility. See #17.


    string = string.replace(regexSeparators, '\x2E');
    var labels = string.split('.');
    var encoded = map(labels, fn).join('.');
    return result + encoded;
  }
  /**
   * Creates an array containing the numeric code points of each Unicode
   * character in the string. While JavaScript uses UCS-2 internally,
   * this function will convert a pair of surrogate halves (each of which
   * UCS-2 exposes as separate characters) into a single code point,
   * matching UTF-16.
   * @see `punycode.ucs2.encode`
   * @see <https://mathiasbynens.be/notes/javascript-encoding>
   * @memberOf punycode.ucs2
   * @name decode
   * @param {String} string The Unicode input string (UCS-2).
   * @returns {Array} The new array of code points.
   */


  function ucs2decode(string) {
    var output = [],
        counter = 0,
        length = string.length,
        value,
        extra;

    while (counter < length) {
      value = string.charCodeAt(counter++);

      if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
        // high surrogate, and there is a next character
        extra = string.charCodeAt(counter++);

        if ((extra & 0xFC00) == 0xDC00) {
          // low surrogate
          output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
        } else {
          // unmatched surrogate; only append this code unit, in case the next
          // code unit is the high surrogate of a surrogate pair
          output.push(value);
          counter--;
        }
      } else {
        output.push(value);
      }
    }

    return output;
  }
  /**
   * Creates a string based on an array of numeric code points.
   * @see `punycode.ucs2.decode`
   * @memberOf punycode.ucs2
   * @name encode
   * @param {Array} codePoints The array of numeric code points.
   * @returns {String} The new Unicode string (UCS-2).
   */


  function ucs2encode(array) {
    return map(array, function (value) {
      var output = '';

      if (value > 0xFFFF) {
        value -= 0x10000;
        output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
        value = 0xDC00 | value & 0x3FF;
      }

      output += stringFromCharCode(value);
      return output;
    }).join('');
  }
  /**
   * Converts a basic code point into a digit/integer.
   * @see `digitToBasic()`
   * @private
   * @param {Number} codePoint The basic numeric code point value.
   * @returns {Number} The numeric value of a basic code point (for use in
   * representing integers) in the range `0` to `base - 1`, or `base` if
   * the code point does not represent a value.
   */


  function basicToDigit(codePoint) {
    if (codePoint - 48 < 10) {
      return codePoint - 22;
    }

    if (codePoint - 65 < 26) {
      return codePoint - 65;
    }

    if (codePoint - 97 < 26) {
      return codePoint - 97;
    }

    return base;
  }
  /**
   * Converts a digit/integer into a basic code point.
   * @see `basicToDigit()`
   * @private
   * @param {Number} digit The numeric value of a basic code point.
   * @returns {Number} The basic code point whose value (when used for
   * representing integers) is `digit`, which needs to be in the range
   * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
   * used; else, the lowercase form is used. The behavior is undefined
   * if `flag` is non-zero and `digit` has no uppercase form.
   */


  function digitToBasic(digit, flag) {
    //  0..25 map to ASCII a..z or A..Z
    // 26..35 map to ASCII 0..9
    return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
  }
  /**
   * Bias adaptation function as per section 3.4 of RFC 3492.
   * https://tools.ietf.org/html/rfc3492#section-3.4
   * @private
   */


  function adapt(delta, numPoints, firstTime) {
    var k = 0;
    delta = firstTime ? floor(delta / damp) : delta >> 1;
    delta += floor(delta / numPoints);

    for (; delta > baseMinusTMin * tMax >> 1; k += base) {
      delta = floor(delta / baseMinusTMin);
    }

    return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
  }
  /**
   * Converts a Punycode string of ASCII-only symbols to a string of Unicode
   * symbols.
   * @memberOf punycode
   * @param {String} input The Punycode string of ASCII-only symbols.
   * @returns {String} The resulting string of Unicode symbols.
   */


  function decode(input) {
    // Don't use UCS-2
    var output = [],
        inputLength = input.length,
        out,
        i = 0,
        n = initialN,
        bias = initialBias,
        basic,
        j,
        index,
        oldi,
        w,
        k,
        digit,
        t,

    /** Cached calculation results */
    baseMinusT; // Handle the basic code points: let `basic` be the number of input code
    // points before the last delimiter, or `0` if there is none, then copy
    // the first basic code points to the output.

    basic = input.lastIndexOf(delimiter);

    if (basic < 0) {
      basic = 0;
    }

    for (j = 0; j < basic; ++j) {
      // if it's not a basic code point
      if (input.charCodeAt(j) >= 0x80) {
        error('not-basic');
      }

      output.push(input.charCodeAt(j));
    } // Main decoding loop: start just after the last delimiter if any basic code
    // points were copied; start at the beginning otherwise.


    for (index = basic > 0 ? basic + 1 : 0; index < inputLength;) {
      // `index` is the index of the next character to be consumed.
      // Decode a generalized variable-length integer into `delta`,
      // which gets added to `i`. The overflow checking is easier
      // if we increase `i` as we go, then subtract off its starting
      // value at the end to obtain `delta`.
      for (oldi = i, w = 1, k = base;; k += base) {
        if (index >= inputLength) {
          error('invalid-input');
        }

        digit = basicToDigit(input.charCodeAt(index++));

        if (digit >= base || digit > floor((maxInt - i) / w)) {
          error('overflow');
        }

        i += digit * w;
        t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;

        if (digit < t) {
          break;
        }

        baseMinusT = base - t;

        if (w > floor(maxInt / baseMinusT)) {
          error('overflow');
        }

        w *= baseMinusT;
      }

      out = output.length + 1;
      bias = adapt(i - oldi, out, oldi == 0); // `i` was supposed to wrap around from `out` to `0`,
      // incrementing `n` each time, so we'll fix that now:

      if (floor(i / out) > maxInt - n) {
        error('overflow');
      }

      n += floor(i / out);
      i %= out; // Insert `n` at position `i` of the output

      output.splice(i++, 0, n);
    }

    return ucs2encode(output);
  }
  /**
   * Converts a string of Unicode symbols (e.g. a domain name label) to a
   * Punycode string of ASCII-only symbols.
   * @memberOf punycode
   * @param {String} input The string of Unicode symbols.
   * @returns {String} The resulting Punycode string of ASCII-only symbols.
   */


  function encode(input) {
    var n,
        delta,
        handledCPCount,
        basicLength,
        bias,
        j,
        m,
        q,
        k,
        t,
        currentValue,
        output = [],

    /** `inputLength` will hold the number of code points in `input`. */
    inputLength,

    /** Cached calculation results */
    handledCPCountPlusOne,
        baseMinusT,
        qMinusT; // Convert the input in UCS-2 to Unicode

    input = ucs2decode(input); // Cache the length

    inputLength = input.length; // Initialize the state

    n = initialN;
    delta = 0;
    bias = initialBias; // Handle the basic code points

    for (j = 0; j < inputLength; ++j) {
      currentValue = input[j];

      if (currentValue < 0x80) {
        output.push(stringFromCharCode(currentValue));
      }
    }

    handledCPCount = basicLength = output.length; // `handledCPCount` is the number of code points that have been handled;
    // `basicLength` is the number of basic code points.
    // Finish the basic string - if it is not empty - with a delimiter

    if (basicLength) {
      output.push(delimiter);
    } // Main encoding loop:


    while (handledCPCount < inputLength) {
      // All non-basic code points < n have been handled already. Find the next
      // larger one:
      for (m = maxInt, j = 0; j < inputLength; ++j) {
        currentValue = input[j];

        if (currentValue >= n && currentValue < m) {
          m = currentValue;
        }
      } // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
      // but guard against overflow


      handledCPCountPlusOne = handledCPCount + 1;

      if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
        error('overflow');
      }

      delta += (m - n) * handledCPCountPlusOne;
      n = m;

      for (j = 0; j < inputLength; ++j) {
        currentValue = input[j];

        if (currentValue < n && ++delta > maxInt) {
          error('overflow');
        }

        if (currentValue == n) {
          // Represent delta as a generalized variable-length integer
          for (q = delta, k = base;; k += base) {
            t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;

            if (q < t) {
              break;
            }

            qMinusT = q - t;
            baseMinusT = base - t;
            output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
            q = floor(qMinusT / baseMinusT);
          }

          output.push(stringFromCharCode(digitToBasic(q, 0)));
          bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
          delta = 0;
          ++handledCPCount;
        }
      }

      ++delta;
      ++n;
    }

    return output.join('');
  }
  /**
   * Converts a Punycode string representing a domain name or an email address
   * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
   * it doesn't matter if you call it on a string that has already been
   * converted to Unicode.
   * @memberOf punycode
   * @param {String} input The Punycoded domain name or email address to
   * convert to Unicode.
   * @returns {String} The Unicode representation of the given Punycode
   * string.
   */


  function toUnicode(input) {
    return mapDomain(input, function (string) {
      return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
    });
  }
  /**
   * Converts a Unicode string representing a domain name or an email address to
   * Punycode. Only the non-ASCII parts of the domain name will be converted,
   * i.e. it doesn't matter if you call it with a domain that's already in
   * ASCII.
   * @memberOf punycode
   * @param {String} input The domain name or email address to convert, as a
   * Unicode string.
   * @returns {String} The Punycode representation of the given domain name or
   * email address.
   */


  function toASCII(input) {
    return mapDomain(input, function (string) {
      return regexNonASCII.test(string) ? 'xn--' + encode(string) : string;
    });
  }
  /*--------------------------------------------------------------------------*/

  /** Define the public API */


  punycode = {
    /**
     * A string representing the current Punycode.js version number.
     * @memberOf punycode
     * @type String
     */
    'version': '1.4.1',

    /**
     * An object of methods to convert from JavaScript's internal character
     * representation (UCS-2) to Unicode code points, and back.
     * @see <https://mathiasbynens.be/notes/javascript-encoding>
     * @memberOf punycode
     * @type Object
     */
    'ucs2': {
      'decode': ucs2decode,
      'encode': ucs2encode
    },
    'decode': decode,
    'encode': encode,
    'toASCII': toASCII,
    'toUnicode': toUnicode
  };
  /** Expose `punycode` */
  // Some AMD build optimizers, like r.js, check for specific condition patterns
  // like the following:

  if (typeof define == 'function' && _typeof(define.amd) == 'object' && define.amd) {
    define('punycode', function () {
      return punycode;
    });
  } else if (freeExports && freeModule) {
    if (module.exports == freeExports) {
      // in Node.js, io.js, or RingoJS v0.8.0+
      freeModule.exports = punycode;
    } else {
      // in Narwhal or RingoJS v0.7.0-
      for (key in punycode) {
        punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
      }
    }
  } else {
    // in Rhino or a web browser
    root.punycode = punycode;
  }
})(void 0);

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],6:[function(require,module,exports){
'use strict';

var GetIntrinsic = require(15);

var callBind = require(7);

var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));

module.exports = function callBoundIntrinsic(name, allowMissing) {
  var intrinsic = GetIntrinsic(name, !!allowMissing);

  if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
    return callBind(intrinsic);
  }

  return intrinsic;
};

},{"15":15,"7":7}],7:[function(require,module,exports){
'use strict';

var bind = require(14);

var GetIntrinsic = require(15);

var $apply = GetIntrinsic('%Function.prototype.apply%');
var $call = GetIntrinsic('%Function.prototype.call%');
var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);
var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);
var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);
var $max = GetIntrinsic('%Math.max%');

if ($defineProperty) {
  try {
    $defineProperty({}, 'a', {
      value: 1
    });
  } catch (e) {
    // IE 8 has a broken defineProperty
    $defineProperty = null;
  }
}

module.exports = function callBind(originalFunction) {
  var func = $reflectApply(bind, $call, arguments);

  if ($gOPD && $defineProperty) {
    var desc = $gOPD(func, 'length');

    if (desc.configurable) {
      // original length, plus the receiver, minus any additional arguments (after the receiver)
      $defineProperty(func, 'length', {
        value: 1 + $max(0, originalFunction.length - (arguments.length - 1))
      });
    }
  }

  return func;
};

var applyBind = function applyBind() {
  return $reflectApply(bind, $apply, arguments);
};

if ($defineProperty) {
  $defineProperty(module.exports, 'apply', {
    value: applyBind
  });
} else {
  module.exports.apply = applyBind;
}

},{"14":14,"15":15}],8:[function(require,module,exports){
"use strict";

var global = typeof self !== 'undefined' ? self : void 0;

var __self__ = function () {
  function F() {
    this.fetch = false;
    this.DOMException = global.DOMException;
  }

  F.prototype = global;
  return new F();
}();

(function (self) {
  var irrelevant = function (exports) {
    var support = {
      searchParams: 'URLSearchParams' in self,
      iterable: 'Symbol' in self && 'iterator' in Symbol,
      blob: 'FileReader' in self && 'Blob' in self && function () {
        try {
          new Blob();
          return true;
        } catch (e) {
          return false;
        }
      }(),
      formData: 'FormData' in self,
      arrayBuffer: 'ArrayBuffer' in self
    };

    function isDataView(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj);
    }

    if (support.arrayBuffer) {
      var viewClasses = ['[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]'];

      var isArrayBufferView = ArrayBuffer.isView || function (obj) {
        return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
      };
    }

    function normalizeName(name) {
      if (typeof name !== 'string') {
        name = String(name);
      }

      if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
        throw new TypeError('Invalid character in header field name');
      }

      return name.toLowerCase();
    }

    function normalizeValue(value) {
      if (typeof value !== 'string') {
        value = String(value);
      }

      return value;
    } // Build a destructive iterator for the value list


    function iteratorFor(items) {
      var iterator = {
        next: function next() {
          var value = items.shift();
          return {
            done: value === undefined,
            value: value
          };
        }
      };

      if (support.iterable) {
        iterator[Symbol.iterator] = function () {
          return iterator;
        };
      }

      return iterator;
    }

    function Headers(headers) {
      this.map = {};

      if (headers instanceof Headers) {
        headers.forEach(function (value, name) {
          this.append(name, value);
        }, this);
      } else if (Array.isArray(headers)) {
        headers.forEach(function (header) {
          this.append(header[0], header[1]);
        }, this);
      } else if (headers) {
        Object.getOwnPropertyNames(headers).forEach(function (name) {
          this.append(name, headers[name]);
        }, this);
      }
    }

    Headers.prototype.append = function (name, value) {
      name = normalizeName(name);
      value = normalizeValue(value);
      var oldValue = this.map[name];
      this.map[name] = oldValue ? oldValue + ', ' + value : value;
    };

    Headers.prototype['delete'] = function (name) {
      delete this.map[normalizeName(name)];
    };

    Headers.prototype.get = function (name) {
      name = normalizeName(name);
      return this.has(name) ? this.map[name] : null;
    };

    Headers.prototype.has = function (name) {
      return this.map.hasOwnProperty(normalizeName(name));
    };

    Headers.prototype.set = function (name, value) {
      this.map[normalizeName(name)] = normalizeValue(value);
    };

    Headers.prototype.forEach = function (callback, thisArg) {
      for (var name in this.map) {
        if (this.map.hasOwnProperty(name)) {
          callback.call(thisArg, this.map[name], name, this);
        }
      }
    };

    Headers.prototype.keys = function () {
      var items = [];
      this.forEach(function (value, name) {
        items.push(name);
      });
      return iteratorFor(items);
    };

    Headers.prototype.values = function () {
      var items = [];
      this.forEach(function (value) {
        items.push(value);
      });
      return iteratorFor(items);
    };

    Headers.prototype.entries = function () {
      var items = [];
      this.forEach(function (value, name) {
        items.push([name, value]);
      });
      return iteratorFor(items);
    };

    if (support.iterable) {
      Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
    }

    function consumed(body) {
      if (body.bodyUsed) {
        return Promise.reject(new TypeError('Already read'));
      }

      body.bodyUsed = true;
    }

    function fileReaderReady(reader) {
      return new Promise(function (resolve, reject) {
        reader.onload = function () {
          resolve(reader.result);
        };

        reader.onerror = function () {
          reject(reader.error);
        };
      });
    }

    function readBlobAsArrayBuffer(blob) {
      var reader = new FileReader();
      var promise = fileReaderReady(reader);
      reader.readAsArrayBuffer(blob);
      return promise;
    }

    function readBlobAsText(blob) {
      var reader = new FileReader();
      var promise = fileReaderReady(reader);
      reader.readAsText(blob);
      return promise;
    }

    function readArrayBufferAsText(buf) {
      var view = new Uint8Array(buf);
      var chars = new Array(view.length);

      for (var i = 0; i < view.length; i++) {
        chars[i] = String.fromCharCode(view[i]);
      }

      return chars.join('');
    }

    function bufferClone(buf) {
      if (buf.slice) {
        return buf.slice(0);
      } else {
        var view = new Uint8Array(buf.byteLength);
        view.set(new Uint8Array(buf));
        return view.buffer;
      }
    }

    function Body() {
      this.bodyUsed = false;

      this._initBody = function (body) {
        this._bodyInit = body;

        if (!body) {
          this._bodyText = '';
        } else if (typeof body === 'string') {
          this._bodyText = body;
        } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
          this._bodyBlob = body;
        } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
          this._bodyFormData = body;
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this._bodyText = body.toString();
        } else if (support.arrayBuffer && support.blob && isDataView(body)) {
          this._bodyArrayBuffer = bufferClone(body.buffer); // IE 10-11 can't handle a DataView body.

          this._bodyInit = new Blob([this._bodyArrayBuffer]);
        } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
          this._bodyArrayBuffer = bufferClone(body);
        } else {
          this._bodyText = body = Object.prototype.toString.call(body);
        }

        if (!this.headers.get('content-type')) {
          if (typeof body === 'string') {
            this.headers.set('content-type', 'text/plain;charset=UTF-8');
          } else if (this._bodyBlob && this._bodyBlob.type) {
            this.headers.set('content-type', this._bodyBlob.type);
          } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
            this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
          }
        }
      };

      if (support.blob) {
        this.blob = function () {
          var rejected = consumed(this);

          if (rejected) {
            return rejected;
          }

          if (this._bodyBlob) {
            return Promise.resolve(this._bodyBlob);
          } else if (this._bodyArrayBuffer) {
            return Promise.resolve(new Blob([this._bodyArrayBuffer]));
          } else if (this._bodyFormData) {
            throw new Error('could not read FormData body as blob');
          } else {
            return Promise.resolve(new Blob([this._bodyText]));
          }
        };

        this.arrayBuffer = function () {
          if (this._bodyArrayBuffer) {
            return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
          } else {
            return this.blob().then(readBlobAsArrayBuffer);
          }
        };
      }

      this.text = function () {
        var rejected = consumed(this);

        if (rejected) {
          return rejected;
        }

        if (this._bodyBlob) {
          return readBlobAsText(this._bodyBlob);
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as text');
        } else {
          return Promise.resolve(this._bodyText);
        }
      };

      if (support.formData) {
        this.formData = function () {
          return this.text().then(decode);
        };
      }

      this.json = function () {
        return this.text().then(JSON.parse);
      };

      return this;
    } // HTTP methods whose capitalization should be normalized


    var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

    function normalizeMethod(method) {
      var upcased = method.toUpperCase();
      return methods.indexOf(upcased) > -1 ? upcased : method;
    }

    function Request(input, options) {
      options = options || {};
      var body = options.body;

      if (input instanceof Request) {
        if (input.bodyUsed) {
          throw new TypeError('Already read');
        }

        this.url = input.url;
        this.credentials = input.credentials;

        if (!options.headers) {
          this.headers = new Headers(input.headers);
        }

        this.method = input.method;
        this.mode = input.mode;
        this.signal = input.signal;

        if (!body && input._bodyInit != null) {
          body = input._bodyInit;
          input.bodyUsed = true;
        }
      } else {
        this.url = String(input);
      }

      this.credentials = options.credentials || this.credentials || 'same-origin';

      if (options.headers || !this.headers) {
        this.headers = new Headers(options.headers);
      }

      this.method = normalizeMethod(options.method || this.method || 'GET');
      this.mode = options.mode || this.mode || null;
      this.signal = options.signal || this.signal;
      this.referrer = null;

      if ((this.method === 'GET' || this.method === 'HEAD') && body) {
        throw new TypeError('Body not allowed for GET or HEAD requests');
      }

      this._initBody(body);
    }

    Request.prototype.clone = function () {
      return new Request(this, {
        body: this._bodyInit
      });
    };

    function decode(body) {
      var form = new FormData();
      body.trim().split('&').forEach(function (bytes) {
        if (bytes) {
          var split = bytes.split('=');
          var name = split.shift().replace(/\+/g, ' ');
          var value = split.join('=').replace(/\+/g, ' ');
          form.append(decodeURIComponent(name), decodeURIComponent(value));
        }
      });
      return form;
    }

    function parseHeaders(rawHeaders) {
      var headers = new Headers(); // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
      // https://tools.ietf.org/html/rfc7230#section-3.2

      var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
      preProcessedHeaders.split(/\r?\n/).forEach(function (line) {
        var parts = line.split(':');
        var key = parts.shift().trim();

        if (key) {
          var value = parts.join(':').trim();
          headers.append(key, value);
        }
      });
      return headers;
    }

    Body.call(Request.prototype);

    function Response(bodyInit, options) {
      if (!options) {
        options = {};
      }

      this.type = 'default';
      this.status = options.status === undefined ? 200 : options.status;
      this.ok = this.status >= 200 && this.status < 300;
      this.statusText = 'statusText' in options ? options.statusText : 'OK';
      this.headers = new Headers(options.headers);
      this.url = options.url || '';

      this._initBody(bodyInit);
    }

    Body.call(Response.prototype);

    Response.prototype.clone = function () {
      return new Response(this._bodyInit, {
        status: this.status,
        statusText: this.statusText,
        headers: new Headers(this.headers),
        url: this.url
      });
    };

    Response.error = function () {
      var response = new Response(null, {
        status: 0,
        statusText: ''
      });
      response.type = 'error';
      return response;
    };

    var redirectStatuses = [301, 302, 303, 307, 308];

    Response.redirect = function (url, status) {
      if (redirectStatuses.indexOf(status) === -1) {
        throw new RangeError('Invalid status code');
      }

      return new Response(null, {
        status: status,
        headers: {
          location: url
        }
      });
    };

    exports.DOMException = self.DOMException;

    try {
      new exports.DOMException();
    } catch (err) {
      exports.DOMException = function (message, name) {
        this.message = message;
        this.name = name;
        var error = Error(message);
        this.stack = error.stack;
      };

      exports.DOMException.prototype = Object.create(Error.prototype);
      exports.DOMException.prototype.constructor = exports.DOMException;
    }

    function fetch(input, init) {
      return new Promise(function (resolve, reject) {
        var request = new Request(input, init);

        if (request.signal && request.signal.aborted) {
          return reject(new exports.DOMException('Aborted', 'AbortError'));
        }

        var xhr = new XMLHttpRequest();

        function abortXhr() {
          xhr.abort();
        }

        xhr.onload = function () {
          var options = {
            status: xhr.status,
            statusText: xhr.statusText,
            headers: parseHeaders(xhr.getAllResponseHeaders() || '')
          };
          options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
          var body = 'response' in xhr ? xhr.response : xhr.responseText;
          resolve(new Response(body, options));
        };

        xhr.onerror = function () {
          reject(new TypeError('Network request failed'));
        };

        xhr.ontimeout = function () {
          reject(new TypeError('Network request failed'));
        };

        xhr.onabort = function () {
          reject(new exports.DOMException('Aborted', 'AbortError'));
        };

        xhr.open(request.method, request.url, true);

        if (request.credentials === 'include') {
          xhr.withCredentials = true;
        } else if (request.credentials === 'omit') {
          xhr.withCredentials = false;
        }

        if ('responseType' in xhr && support.blob) {
          xhr.responseType = 'blob';
        }

        request.headers.forEach(function (value, name) {
          xhr.setRequestHeader(name, value);
        });

        if (request.signal) {
          request.signal.addEventListener('abort', abortXhr);

          xhr.onreadystatechange = function () {
            // DONE (success or failure)
            if (xhr.readyState === 4) {
              request.signal.removeEventListener('abort', abortXhr);
            }
          };
        }

        xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
      });
    }

    fetch.polyfill = true;

    if (!self.fetch) {
      self.fetch = fetch;
      self.Headers = Headers;
      self.Request = Request;
      self.Response = Response;
    }

    exports.Headers = Headers;
    exports.Request = Request;
    exports.Response = Response;
    exports.fetch = fetch;
    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    return exports;
  }({});
})(__self__);

__self__.fetch.ponyfill = true; // Remove "polyfill" property added by whatwg-fetch

delete __self__.fetch.polyfill; // Choose between native implementation (global) or custom implementation (__self__)
// var ctx = global.fetch ? global : __self__;

var ctx = __self__; // this line disable service worker support temporarily

exports = ctx.fetch; // To enable: import fetch from 'cross-fetch'

exports["default"] = ctx.fetch; // For TypeScript consumers without esModuleInterop.

exports.fetch = ctx.fetch; // To enable: import {fetch} from 'cross-fetch'

exports.Headers = ctx.Headers;
exports.Request = ctx.Request;
exports.Response = ctx.Response;
module.exports = exports;

},{}],9:[function(require,module,exports){
'use strict';

var GetIntrinsic = require(15);

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);

if ($gOPD) {
  try {
    $gOPD([], 'length');
  } catch (e) {
    // IE 8 has a broken gOPD
    $gOPD = null;
  }
}

module.exports = $gOPD;

},{"15":15}],10:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var R = (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === 'object' ? Reflect : null;
var ReflectApply = R && typeof R.apply === 'function' ? R.apply : function ReflectApply(target, receiver, args) {
  return Function.prototype.apply.call(target, receiver, args);
};
var ReflectOwnKeys;

if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys;
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
};

function EventEmitter() {
  EventEmitter.init.call(this);
}

module.exports = EventEmitter;
module.exports.once = once; // Backwards-compat with node 0.10.x

EventEmitter.EventEmitter = EventEmitter;
EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined; // By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.

var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + _typeof(listener));
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function get() {
    return defaultMaxListeners;
  },
  set: function set(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }

    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function () {
  if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
}; // Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.


EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }

  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined) return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];

  for (var i = 1; i < arguments.length; i++) {
    args.push(arguments[i]);
  }

  var doError = type === 'error';
  var events = this._events;
  if (events !== undefined) doError = doError && events.error === undefined;else if (!doError) return false; // If there is no 'error' event listener then throw.

  if (doError) {
    var er;
    if (args.length > 0) er = args[0];

    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    } // At least give some kind of context to the user


    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];
  if (handler === undefined) return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);

    for (var i = 0; i < len; ++i) {
      ReflectApply(listeners[i], this, args);
    }
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;
  checkListener(listener);
  events = target._events;

  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type, listener.listener ? listener.listener : listener); // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object

      events = target._events;
    }

    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] = prepend ? [listener, existing] : [existing, listener]; // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    } // Check for listener leak


    m = _getMaxListeners(target);

    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true; // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax

      var w = new Error('Possible EventEmitter memory leak detected. ' + existing.length + ' ' + String(type) + ' listeners ' + 'added. Use emitter.setMaxListeners() to ' + 'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener = function prependListener(type, listener) {
  return _addListener(this, type, listener, true);
};

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0) return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = {
    fired: false,
    wrapFn: undefined,
    target: target,
    type: type,
    listener: listener
  };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
  checkListener(listener);
  this.prependListener(type, _onceWrap(this, type, listener));
  return this;
}; // Emits a 'removeListener' event if and only if the listener was removed.


EventEmitter.prototype.removeListener = function removeListener(type, listener) {
  var list, events, position, i, originalListener;
  checkListener(listener);
  events = this._events;
  if (events === undefined) return this;
  list = events[type];
  if (list === undefined) return this;

  if (list === listener || list.listener === listener) {
    if (--this._eventsCount === 0) this._events = Object.create(null);else {
      delete events[type];
      if (events.removeListener) this.emit('removeListener', type, list.listener || listener);
    }
  } else if (typeof list !== 'function') {
    position = -1;

    for (i = list.length - 1; i >= 0; i--) {
      if (list[i] === listener || list[i].listener === listener) {
        originalListener = list[i].listener;
        position = i;
        break;
      }
    }

    if (position < 0) return this;
    if (position === 0) list.shift();else {
      spliceOne(list, position);
    }
    if (list.length === 1) events[type] = list[0];
    if (events.removeListener !== undefined) this.emit('removeListener', type, originalListener || listener);
  }

  return this;
};

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
  var listeners, events, i;
  events = this._events;
  if (events === undefined) return this; // not listening for removeListener, no need to emit

  if (events.removeListener === undefined) {
    if (arguments.length === 0) {
      this._events = Object.create(null);
      this._eventsCount = 0;
    } else if (events[type] !== undefined) {
      if (--this._eventsCount === 0) this._events = Object.create(null);else delete events[type];
    }

    return this;
  } // emit removeListener for all listeners on all events


  if (arguments.length === 0) {
    var keys = Object.keys(events);
    var key;

    for (i = 0; i < keys.length; ++i) {
      key = keys[i];
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }

    this.removeAllListeners('removeListener');
    this._events = Object.create(null);
    this._eventsCount = 0;
    return this;
  }

  listeners = events[type];

  if (typeof listeners === 'function') {
    this.removeListener(type, listeners);
  } else if (listeners !== undefined) {
    // LIFO order
    for (i = listeners.length - 1; i >= 0; i--) {
      this.removeListener(type, listeners[i]);
    }
  }

  return this;
};

function _listeners(target, type, unwrap) {
  var events = target._events;
  if (events === undefined) return [];
  var evlistener = events[type];
  if (evlistener === undefined) return [];
  if (typeof evlistener === 'function') return unwrap ? [evlistener.listener || evlistener] : [evlistener];
  return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function (emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;

function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);

  for (var i = 0; i < n; ++i) {
    copy[i] = arr[i];
  }

  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++) {
    list[index] = list[index + 1];
  }

  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);

  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }

  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }

      resolve([].slice.call(arguments));
    }

    ;
    eventTargetAgnosticAddListener(emitter, name, resolver, {
      once: true
    });

    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, {
        once: true
      });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }

      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + _typeof(emitter));
  }
}

},{}],11:[function(require,module,exports){
"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require(63),
    promisify = _require.promisify;

var tough = require(50);

module.exports = function fetchCookieDecorator(fetch, jar) {
  var ignoreError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  fetch = fetch || window.fetch;
  jar = jar || new tough.CookieJar();
  var getCookieString = promisify(jar.getCookieString.bind(jar));
  var setCookie = promisify(jar.setCookie.bind(jar));

  function fetchCookie(_x, _x2) {
    return _fetchCookie.apply(this, arguments);
  }

  function _fetchCookie() {
    _fetchCookie = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url, opts) {
      var cookie, res, cookies, headers;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              opts = opts || {}; // Prepare request

              _context.next = 3;
              return getCookieString(typeof url === 'string' ? url : url.url);

            case 3:
              cookie = _context.sent;

              if (cookie) {
                if (url.headers && typeof url.headers.append === 'function') {
                  url.headers.append('cookie', cookie);
                } else if (opts.headers && typeof opts.headers.append === 'function') {
                  opts.headers.append('cookie', cookie);
                } else {
                  opts.headers = Object.assign(opts.headers || {}, cookie ? {
                    cookie: cookie
                  } : {});
                }
              } // Actual request


              _context.next = 7;
              return fetch(url, opts);

            case 7:
              res = _context.sent;
              // Get cookie header
              cookies = [];

              if (res.headers.getAll) {
                // node-fetch v1
                cookies = res.headers.getAll('set-cookie'); // console.warn("You are using a fetch version that supports 'Headers.getAll' which is deprecated!")
                // console.warn("In the future 'fetch-cookie-v2' may discontinue supporting that fetch implementation.")
                // console.warn('Details: https://developer.mozilla.org/en-US/docs/Web/API/Headers/getAll')
              } else {
                // node-fetch v2
                headers = res.headers.raw();

                if (headers['set-cookie'] !== undefined) {
                  cookies = headers['set-cookie'];
                }
              } // Store all present cookies


              _context.next = 12;
              return Promise.all(cookies.map(function (cookie) {
                return setCookie(cookie, res.url, {
                  ignoreError: ignoreError
                });
              }));

            case 12:
              return _context.abrupt("return", res);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _fetchCookie.apply(this, arguments);
  }

  fetchCookie.toughCookie = tough;
  return fetchCookie;
};

module.exports.toughCookie = tough;

},{"50":50,"63":63}],12:[function(require,module,exports){
"use strict";

var hasOwn = Object.prototype.hasOwnProperty;
var toString = Object.prototype.toString;

module.exports = function forEach(obj, fn, ctx) {
  if (toString.call(fn) !== '[object Function]') {
    throw new TypeError('iterator must be a function');
  }

  var l = obj.length;

  if (l === +l) {
    for (var i = 0; i < l; i++) {
      fn.call(ctx, obj[i], i, obj);
    }
  } else {
    for (var k in obj) {
      if (hasOwn.call(obj, k)) {
        fn.call(ctx, obj[k], k, obj);
      }
    }
  }
};

},{}],13:[function(require,module,exports){
'use strict';
/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
  var target = this;

  if (typeof target !== 'function' || toStr.call(target) !== funcType) {
    throw new TypeError(ERROR_MESSAGE + target);
  }

  var args = slice.call(arguments, 1);
  var bound;

  var binder = function binder() {
    if (this instanceof bound) {
      var result = target.apply(this, args.concat(slice.call(arguments)));

      if (Object(result) === result) {
        return result;
      }

      return this;
    } else {
      return target.apply(that, args.concat(slice.call(arguments)));
    }
  };

  var boundLength = Math.max(0, target.length - args.length);
  var boundArgs = [];

  for (var i = 0; i < boundLength; i++) {
    boundArgs.push('$' + i);
  }

  bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

  if (target.prototype) {
    var Empty = function Empty() {};

    Empty.prototype = target.prototype;
    bound.prototype = new Empty();
    Empty.prototype = null;
  }

  return bound;
};

},{}],14:[function(require,module,exports){
'use strict';

var implementation = require(13);

module.exports = Function.prototype.bind || implementation;

},{"13":13}],15:[function(require,module,exports){
'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var undefined;
var $SyntaxError = SyntaxError;
var $Function = Function;
var $TypeError = TypeError; // eslint-disable-next-line consistent-return

var getEvalledConstructor = function getEvalledConstructor(expressionSyntax) {
  try {
    return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
  } catch (e) {}
};

var $gOPD = Object.getOwnPropertyDescriptor;

if ($gOPD) {
  try {
    $gOPD({}, '');
  } catch (e) {
    $gOPD = null; // this is IE 8, which has a broken gOPD
  }
}

var throwTypeError = function throwTypeError() {
  throw new $TypeError();
};

var ThrowTypeError = $gOPD ? function () {
  try {
    // eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
    arguments.callee; // IE 8 does not throw here

    return throwTypeError;
  } catch (calleeThrows) {
    try {
      // IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
      return $gOPD(arguments, 'callee').get;
    } catch (gOPDthrows) {
      return throwTypeError;
    }
  }
}() : throwTypeError;

var hasSymbols = require(16)();

var getProto = Object.getPrototypeOf || function (x) {
  return x.__proto__;
}; // eslint-disable-line no-proto


var needsEval = {};
var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);
var INTRINSICS = {
  '%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
  '%Array%': Array,
  '%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
  '%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
  '%AsyncFromSyncIteratorPrototype%': undefined,
  '%AsyncFunction%': needsEval,
  '%AsyncGenerator%': needsEval,
  '%AsyncGeneratorFunction%': needsEval,
  '%AsyncIteratorPrototype%': needsEval,
  '%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
  '%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
  '%Boolean%': Boolean,
  '%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
  '%Date%': Date,
  '%decodeURI%': decodeURI,
  '%decodeURIComponent%': decodeURIComponent,
  '%encodeURI%': encodeURI,
  '%encodeURIComponent%': encodeURIComponent,
  '%Error%': Error,
  '%eval%': eval,
  // eslint-disable-line no-eval
  '%EvalError%': EvalError,
  '%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
  '%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
  '%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
  '%Function%': $Function,
  '%GeneratorFunction%': needsEval,
  '%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
  '%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
  '%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
  '%isFinite%': isFinite,
  '%isNaN%': isNaN,
  '%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
  '%JSON%': (typeof JSON === "undefined" ? "undefined" : _typeof(JSON)) === 'object' ? JSON : undefined,
  '%Map%': typeof Map === 'undefined' ? undefined : Map,
  '%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
  '%Math%': Math,
  '%Number%': Number,
  '%Object%': Object,
  '%parseFloat%': parseFloat,
  '%parseInt%': parseInt,
  '%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
  '%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
  '%RangeError%': RangeError,
  '%ReferenceError%': ReferenceError,
  '%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
  '%RegExp%': RegExp,
  '%Set%': typeof Set === 'undefined' ? undefined : Set,
  '%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
  '%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
  '%String%': String,
  '%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
  '%Symbol%': hasSymbols ? Symbol : undefined,
  '%SyntaxError%': $SyntaxError,
  '%ThrowTypeError%': ThrowTypeError,
  '%TypedArray%': TypedArray,
  '%TypeError%': $TypeError,
  '%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
  '%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
  '%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
  '%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
  '%URIError%': URIError,
  '%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
  '%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
  '%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet
};

var doEval = function doEval(name) {
  var value;

  if (name === '%AsyncFunction%') {
    value = getEvalledConstructor('async function () {}');
  } else if (name === '%GeneratorFunction%') {
    value = getEvalledConstructor('function* () {}');
  } else if (name === '%AsyncGeneratorFunction%') {
    value = getEvalledConstructor('async function* () {}');
  } else if (name === '%AsyncGenerator%') {
    var fn = doEval('%AsyncGeneratorFunction%');

    if (fn) {
      value = fn.prototype;
    }
  } else if (name === '%AsyncIteratorPrototype%') {
    var gen = doEval('%AsyncGenerator%');

    if (gen) {
      value = getProto(gen.prototype);
    }
  }

  INTRINSICS[name] = value;
  return value;
};

var LEGACY_ALIASES = {
  '%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
  '%ArrayPrototype%': ['Array', 'prototype'],
  '%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
  '%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
  '%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
  '%ArrayProto_values%': ['Array', 'prototype', 'values'],
  '%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
  '%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
  '%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
  '%BooleanPrototype%': ['Boolean', 'prototype'],
  '%DataViewPrototype%': ['DataView', 'prototype'],
  '%DatePrototype%': ['Date', 'prototype'],
  '%ErrorPrototype%': ['Error', 'prototype'],
  '%EvalErrorPrototype%': ['EvalError', 'prototype'],
  '%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
  '%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
  '%FunctionPrototype%': ['Function', 'prototype'],
  '%Generator%': ['GeneratorFunction', 'prototype'],
  '%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
  '%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
  '%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
  '%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
  '%JSONParse%': ['JSON', 'parse'],
  '%JSONStringify%': ['JSON', 'stringify'],
  '%MapPrototype%': ['Map', 'prototype'],
  '%NumberPrototype%': ['Number', 'prototype'],
  '%ObjectPrototype%': ['Object', 'prototype'],
  '%ObjProto_toString%': ['Object', 'prototype', 'toString'],
  '%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
  '%PromisePrototype%': ['Promise', 'prototype'],
  '%PromiseProto_then%': ['Promise', 'prototype', 'then'],
  '%Promise_all%': ['Promise', 'all'],
  '%Promise_reject%': ['Promise', 'reject'],
  '%Promise_resolve%': ['Promise', 'resolve'],
  '%RangeErrorPrototype%': ['RangeError', 'prototype'],
  '%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
  '%RegExpPrototype%': ['RegExp', 'prototype'],
  '%SetPrototype%': ['Set', 'prototype'],
  '%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
  '%StringPrototype%': ['String', 'prototype'],
  '%SymbolPrototype%': ['Symbol', 'prototype'],
  '%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
  '%TypedArrayPrototype%': ['TypedArray', 'prototype'],
  '%TypeErrorPrototype%': ['TypeError', 'prototype'],
  '%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
  '%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
  '%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
  '%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
  '%URIErrorPrototype%': ['URIError', 'prototype'],
  '%WeakMapPrototype%': ['WeakMap', 'prototype'],
  '%WeakSetPrototype%': ['WeakSet', 'prototype']
};

var bind = require(14);

var hasOwn = require(19);

var $concat = bind.call(Function.call, Array.prototype.concat);
var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
var $replace = bind.call(Function.call, String.prototype.replace);
var $strSlice = bind.call(Function.call, String.prototype.slice);
/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */

var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g;
/** Used to match backslashes in property paths. */

var stringToPath = function stringToPath(string) {
  var first = $strSlice(string, 0, 1);
  var last = $strSlice(string, -1);

  if (first === '%' && last !== '%') {
    throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
  } else if (last === '%' && first !== '%') {
    throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
  }

  var result = [];
  $replace(string, rePropName, function (match, number, quote, subString) {
    result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
  });
  return result;
};
/* end adaptation */


var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
  var intrinsicName = name;
  var alias;

  if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
    alias = LEGACY_ALIASES[intrinsicName];
    intrinsicName = '%' + alias[0] + '%';
  }

  if (hasOwn(INTRINSICS, intrinsicName)) {
    var value = INTRINSICS[intrinsicName];

    if (value === needsEval) {
      value = doEval(intrinsicName);
    }

    if (typeof value === 'undefined' && !allowMissing) {
      throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
    }

    return {
      alias: alias,
      name: intrinsicName,
      value: value
    };
  }

  throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};

module.exports = function GetIntrinsic(name, allowMissing) {
  if (typeof name !== 'string' || name.length === 0) {
    throw new $TypeError('intrinsic name must be a non-empty string');
  }

  if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
    throw new $TypeError('"allowMissing" argument must be a boolean');
  }

  var parts = stringToPath(name);
  var intrinsicBaseName = parts.length > 0 ? parts[0] : '';
  var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
  var intrinsicRealName = intrinsic.name;
  var value = intrinsic.value;
  var skipFurtherCaching = false;
  var alias = intrinsic.alias;

  if (alias) {
    intrinsicBaseName = alias[0];
    $spliceApply(parts, $concat([0, 1], alias));
  }

  for (var i = 1, isOwn = true; i < parts.length; i += 1) {
    var part = parts[i];
    var first = $strSlice(part, 0, 1);
    var last = $strSlice(part, -1);

    if ((first === '"' || first === "'" || first === '`' || last === '"' || last === "'" || last === '`') && first !== last) {
      throw new $SyntaxError('property names with quotes must have matching quotes');
    }

    if (part === 'constructor' || !isOwn) {
      skipFurtherCaching = true;
    }

    intrinsicBaseName += '.' + part;
    intrinsicRealName = '%' + intrinsicBaseName + '%';

    if (hasOwn(INTRINSICS, intrinsicRealName)) {
      value = INTRINSICS[intrinsicRealName];
    } else if (value != null) {
      if (!(part in value)) {
        if (!allowMissing) {
          throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
        }

        return void undefined;
      }

      if ($gOPD && i + 1 >= parts.length) {
        var desc = $gOPD(value, part);
        isOwn = !!desc; // By convention, when a data property is converted to an accessor
        // property to emulate a data property that does not suffer from
        // the override mistake, that accessor's getter is marked with
        // an `originalValue` property. Here, when we detect this, we
        // uphold the illusion by pretending to see that original data
        // property, i.e., returning the value rather than the getter
        // itself.

        if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
          value = desc.get;
        } else {
          value = value[part];
        }
      } else {
        isOwn = hasOwn(value, part);
        value = value[part];
      }

      if (isOwn && !skipFurtherCaching) {
        INTRINSICS[intrinsicRealName] = value;
      }
    }
  }

  return value;
};

},{"14":14,"16":16,"19":19}],16:[function(require,module,exports){
'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var origSymbol = typeof Symbol !== 'undefined' && Symbol;

var hasSymbolSham = require(17);

module.exports = function hasNativeSymbols() {
  if (typeof origSymbol !== 'function') {
    return false;
  }

  if (typeof Symbol !== 'function') {
    return false;
  }

  if (_typeof(origSymbol('foo')) !== 'symbol') {
    return false;
  }

  if (_typeof(Symbol('bar')) !== 'symbol') {
    return false;
  }

  return hasSymbolSham();
};

},{"17":17}],17:[function(require,module,exports){
'use strict';
/* eslint complexity: [2, 18], max-statements: [2, 33] */

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = function hasSymbols() {
  if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') {
    return false;
  }

  if (_typeof(Symbol.iterator) === 'symbol') {
    return true;
  }

  var obj = {};
  var sym = Symbol('test');
  var symObj = Object(sym);

  if (typeof sym === 'string') {
    return false;
  }

  if (Object.prototype.toString.call(sym) !== '[object Symbol]') {
    return false;
  }

  if (Object.prototype.toString.call(symObj) !== '[object Symbol]') {
    return false;
  } // temp disabled per https://github.com/ljharb/object.assign/issues/17
  // if (sym instanceof Symbol) { return false; }
  // temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
  // if (!(symObj instanceof Symbol)) { return false; }
  // if (typeof Symbol.prototype.toString !== 'function') { return false; }
  // if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }


  var symVal = 42;
  obj[sym] = symVal;

  for (sym in obj) {
    return false;
  } // eslint-disable-line no-restricted-syntax, no-unreachable-loop


  if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) {
    return false;
  }

  if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) {
    return false;
  }

  var syms = Object.getOwnPropertySymbols(obj);

  if (syms.length !== 1 || syms[0] !== sym) {
    return false;
  }

  if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
    return false;
  }

  if (typeof Object.getOwnPropertyDescriptor === 'function') {
    var descriptor = Object.getOwnPropertyDescriptor(obj, sym);

    if (descriptor.value !== symVal || descriptor.enumerable !== true) {
      return false;
    }
  }

  return true;
};

},{}],18:[function(require,module,exports){
'use strict';

var hasSymbols = require(17);

module.exports = function hasToStringTagShams() {
  return hasSymbols() && !!Symbol.toStringTag;
};

},{"17":17}],19:[function(require,module,exports){
'use strict';

var bind = require(14);

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);

},{"14":14}],20:[function(require,module,exports){
'use strict';

var types = [require(4), require(23), require(22), require(21), require(24), require(25)];
var draining;
var currentQueue;
var queueIndex = -1;
var queue = [];
var scheduled = false;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    nextTick();
  }
} //named nextTick for less confusing stack traces


function nextTick() {
  if (draining) {
    return;
  }

  scheduled = false;
  draining = true;
  var len = queue.length;
  var timeout = setTimeout(cleanUpNextTick);

  while (len) {
    currentQueue = queue;
    queue = [];

    while (currentQueue && ++queueIndex < len) {
      currentQueue[queueIndex].run();
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  queueIndex = -1;
  draining = false;
  clearTimeout(timeout);
}

var scheduleDrain;
var i = -1;
var len = types.length;

while (++i < len) {
  if (types[i] && types[i].test && types[i].test()) {
    scheduleDrain = types[i].install(nextTick);
    break;
  }
} // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  var fun = this.fun;
  var array = this.array;

  switch (array.length) {
    case 0:
      return fun();

    case 1:
      return fun(array[0]);

    case 2:
      return fun(array[0], array[1]);

    case 3:
      return fun(array[0], array[1], array[2]);

    default:
      return fun.apply(null, array);
  }
};

module.exports = immediate;

function immediate(task) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(task, args));

  if (!scheduled && !draining) {
    scheduled = true;
    scheduleDrain();
  }
}

},{"21":21,"22":22,"23":23,"24":24,"25":25,"4":4}],21:[function(require,module,exports){
(function (global){(function (){
'use strict';

exports.test = function () {
  if (global.setImmediate) {
    // we can only get here in IE10
    // which doesn't handel postMessage well
    return false;
  }

  return typeof global.MessageChannel !== 'undefined';
};

exports.install = function (func) {
  var channel = new global.MessageChannel();
  channel.port1.onmessage = func;
  return function () {
    channel.port2.postMessage(0);
  };
};

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],22:[function(require,module,exports){
(function (global){(function (){
'use strict'; //based off rsvp https://github.com/tildeio/rsvp.js
//license https://github.com/tildeio/rsvp.js/blob/master/LICENSE
//https://github.com/tildeio/rsvp.js/blob/master/lib/rsvp/asap.js

var Mutation = global.MutationObserver || global.WebKitMutationObserver;

exports.test = function () {
  return Mutation;
};

exports.install = function (handle) {
  var called = 0;
  var observer = new Mutation(handle);
  var element = global.document.createTextNode('');
  observer.observe(element, {
    characterData: true
  });
  return function () {
    element.data = called = ++called % 2;
  };
};

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],23:[function(require,module,exports){
(function (global){(function (){
'use strict';

exports.test = function () {
  return typeof global.queueMicrotask === 'function';
};

exports.install = function (func) {
  return function () {
    global.queueMicrotask(func);
  };
};

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],24:[function(require,module,exports){
(function (global){(function (){
'use strict';

exports.test = function () {
  return 'document' in global && 'onreadystatechange' in global.document.createElement('script');
};

exports.install = function (handle) {
  return function () {
    // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
    // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
    var scriptEl = global.document.createElement('script');

    scriptEl.onreadystatechange = function () {
      handle();
      scriptEl.onreadystatechange = null;
      scriptEl.parentNode.removeChild(scriptEl);
      scriptEl = null;
    };

    global.document.documentElement.appendChild(scriptEl);
    return handle;
  };
};

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],25:[function(require,module,exports){
'use strict';

exports.test = function () {
  return true;
};

exports.install = function (t) {
  return function () {
    setTimeout(t, 0);
  };
};

},{}],26:[function(require,module,exports){
"use strict";

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor;
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
    }
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor;

      var TempCtor = function TempCtor() {};

      TempCtor.prototype = superCtor.prototype;
      ctor.prototype = new TempCtor();
      ctor.prototype.constructor = ctor;
    }
  };
}

},{}],27:[function(require,module,exports){
'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var hasToStringTag = require(18)();

var callBound = require(6);

var $toString = callBound('Object.prototype.toString');

var isStandardArguments = function isArguments(value) {
  if (hasToStringTag && value && _typeof(value) === 'object' && Symbol.toStringTag in value) {
    return false;
  }

  return $toString(value) === '[object Arguments]';
};

var isLegacyArguments = function isArguments(value) {
  if (isStandardArguments(value)) {
    return true;
  }

  return value !== null && _typeof(value) === 'object' && typeof value.length === 'number' && value.length >= 0 && $toString(value) !== '[object Array]' && $toString(value.callee) === '[object Function]';
};

var supportsStandardArguments = function () {
  return isStandardArguments(arguments);
}();

isStandardArguments.isLegacyArguments = isLegacyArguments; // for tests

module.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;

},{"18":18,"6":6}],28:[function(require,module,exports){
'use strict';

var toStr = Object.prototype.toString;
var fnToStr = Function.prototype.toString;
var isFnRegex = /^\s*(?:function)?\*/;

var hasToStringTag = require(18)();

var getProto = Object.getPrototypeOf;

var getGeneratorFunc = function getGeneratorFunc() {
  // eslint-disable-line consistent-return
  if (!hasToStringTag) {
    return false;
  }

  try {
    return Function('return function*() {}')();
  } catch (e) {}
};

var GeneratorFunction;

module.exports = function isGeneratorFunction(fn) {
  if (typeof fn !== 'function') {
    return false;
  }

  if (isFnRegex.test(fnToStr.call(fn))) {
    return true;
  }

  if (!hasToStringTag) {
    var str = toStr.call(fn);
    return str === '[object GeneratorFunction]';
  }

  if (!getProto) {
    return false;
  }

  if (typeof GeneratorFunction === 'undefined') {
    var generatorFunc = getGeneratorFunc();
    GeneratorFunction = generatorFunc ? getProto(generatorFunc) : false;
  }

  return getProto(fn) === GeneratorFunction;
};

},{"18":18}],29:[function(require,module,exports){
(function (global){(function (){
'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var forEach = require(12);

var availableTypedArrays = require(3);

var callBound = require(6);

var $toString = callBound('Object.prototype.toString');

var hasToStringTag = require(18)();

var g = typeof globalThis === 'undefined' ? global : globalThis;
var typedArrays = availableTypedArrays();

var $indexOf = callBound('Array.prototype.indexOf', true) || function indexOf(array, value) {
  for (var i = 0; i < array.length; i += 1) {
    if (array[i] === value) {
      return i;
    }
  }

  return -1;
};

var $slice = callBound('String.prototype.slice');
var toStrTags = {};

var gOPD = require(9);

var getPrototypeOf = Object.getPrototypeOf; // require('getprototypeof');

if (hasToStringTag && gOPD && getPrototypeOf) {
  forEach(typedArrays, function (typedArray) {
    var arr = new g[typedArray]();

    if (Symbol.toStringTag in arr) {
      var proto = getPrototypeOf(arr);
      var descriptor = gOPD(proto, Symbol.toStringTag);

      if (!descriptor) {
        var superProto = getPrototypeOf(proto);
        descriptor = gOPD(superProto, Symbol.toStringTag);
      }

      toStrTags[typedArray] = descriptor.get;
    }
  });
}

var tryTypedArrays = function tryAllTypedArrays(value) {
  var anyTrue = false;
  forEach(toStrTags, function (getter, typedArray) {
    if (!anyTrue) {
      try {
        anyTrue = getter.call(value) === typedArray;
      } catch (e) {
        /**/
      }
    }
  });
  return anyTrue;
};

module.exports = function isTypedArray(value) {
  if (!value || _typeof(value) !== 'object') {
    return false;
  }

  if (!hasToStringTag || !(Symbol.toStringTag in value)) {
    var tag = $slice($toString(value), 8, -1);
    return $indexOf(typedArrays, tag) > -1;
  }

  if (!gOPD) {
    return false;
  }

  return tryTypedArrays(value);
};

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"12":12,"18":18,"3":3,"6":6,"9":9}],30:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var thisAtob = function thisAtob(str) {
  return atob(str);
};

var thisBtoa = function thisBtoa(str) {
  return btoa(str);
}; // Abstracts constructing a Blob object, so it also works in older
// browsers that don't support the native Blob constructor (e.g.
// old QtWebKit versions, Android < 4.4).


function createBlob(parts, properties) {
  /* global BlobBuilder,MSBlobBuilder,MozBlobBuilder,WebKitBlobBuilder */
  parts = parts || [];
  properties = properties || {};

  try {
    return new Blob(parts, properties);
  } catch (e) {
    if (e.name !== "TypeError") {
      throw e;
    }

    var Builder = typeof BlobBuilder !== 'undefined' ? BlobBuilder : typeof MSBlobBuilder !== 'undefined' ? MSBlobBuilder : typeof MozBlobBuilder !== 'undefined' ? MozBlobBuilder : WebKitBlobBuilder;
    var builder = new Builder();

    for (var i = 0; i < parts.length; i += 1) {
      builder.append(parts[i]);
    }

    return builder.getBlob(properties.type);
  }
} // From http://stackoverflow.com/questions/14967647/ (continues on next line)
// encode-decode-image-with-base64-breaks-image (2013-04-21)


function binaryStringToArrayBuffer(bin) {
  var length = bin.length;
  var buf = new ArrayBuffer(length);
  var arr = new Uint8Array(buf);

  for (var i = 0; i < length; i++) {
    arr[i] = bin.charCodeAt(i);
  }

  return buf;
}

function binStringToBluffer(binString, type) {
  return createBlob([binaryStringToArrayBuffer(binString)], {
    type: type
  });
}

function b64ToBluffer(b64, type) {
  return binStringToBluffer(thisAtob(b64), type);
} //Can't find original post, but this is close
//http://stackoverflow.com/questions/6965107/ (continues on next line)
//converting-between-strings-and-arraybuffers


function arrayBufferToBinaryString(buffer) {
  var binary = '';
  var bytes = new Uint8Array(buffer);
  var length = bytes.byteLength;

  for (var i = 0; i < length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }

  return binary;
} // shim for browsers that don't support it


function readAsBinaryString(blob, callback) {
  var reader = new FileReader();
  var hasBinaryString = typeof reader.readAsBinaryString === 'function';

  reader.onloadend = function (e) {
    var result = e.target.result || '';

    if (hasBinaryString) {
      return callback(result);
    }

    callback(arrayBufferToBinaryString(result));
  };

  if (hasBinaryString) {
    reader.readAsBinaryString(blob);
  } else {
    reader.readAsArrayBuffer(blob);
  }
}

function blobToBinaryString(blobOrBuffer, callback) {
  readAsBinaryString(blobOrBuffer, function (bin) {
    callback(bin);
  });
}

function blobToBase64(blobOrBuffer, callback) {
  blobToBinaryString(blobOrBuffer, function (base64) {
    callback(thisBtoa(base64));
  });
} // simplified API. universal browser support is assumed


function readAsArrayBuffer(blob, callback) {
  var reader = new FileReader();

  reader.onloadend = function (e) {
    var result = e.target.result || new ArrayBuffer(0);
    callback(result);
  };

  reader.readAsArrayBuffer(blob);
} // this is not used in the browser


function typedBuffer() {}

exports.atob = thisAtob;
exports.btoa = thisBtoa;
exports.base64StringToBlobOrBuffer = b64ToBluffer;
exports.binaryStringToArrayBuffer = binaryStringToArrayBuffer;
exports.binaryStringToBlobOrBuffer = binStringToBluffer;
exports.blob = createBlob;
exports.blobOrBufferToBase64 = blobToBase64;
exports.blobOrBufferToBinaryString = blobToBinaryString;
exports.readAsArrayBuffer = readAsArrayBuffer;
exports.readAsBinaryString = readAsBinaryString;
exports.typedBuffer = typedBuffer;

},{}],31:[function(require,module,exports){
'use strict';

var pouchdbErrors = require(35);

var pouchdbSelectorCore = require(39);

var pouchdbUtils = require(40);

function evalFilter(input) {
  return pouchdbUtils.scopeEval('"use strict";\nreturn ' + input + ';', {});
}

function evalView(input) {
  var code = ['return function(doc) {', '  "use strict";', '  var emitted = false;', '  var emit = function (a, b) {', '    emitted = true;', '  };', '  var view = ' + input + ';', '  view(doc);', '  if (emitted) {', '    return true;', '  }', '};'].join('\n');
  return pouchdbUtils.scopeEval(code, {});
}

function validate(opts, callback) {
  if (opts.selector) {
    if (opts.filter && opts.filter !== '_selector') {
      var filterName = typeof opts.filter === 'string' ? opts.filter : 'function';
      return callback(new Error('selector invalid for filter "' + filterName + '"'));
    }
  }

  callback();
}

function normalize(opts) {
  if (opts.view && !opts.filter) {
    opts.filter = '_view';
  }

  if (opts.selector && !opts.filter) {
    opts.filter = '_selector';
  }

  if (opts.filter && typeof opts.filter === 'string') {
    if (opts.filter === '_view') {
      opts.view = pouchdbUtils.normalizeDdocFunctionName(opts.view);
    } else {
      opts.filter = pouchdbUtils.normalizeDdocFunctionName(opts.filter);
    }
  }
}

function shouldFilter(changesHandler, opts) {
  return opts.filter && typeof opts.filter === 'string' && !opts.doc_ids && !pouchdbUtils.isRemote(changesHandler.db);
}

function filter(changesHandler, opts) {
  var callback = opts.complete;

  if (opts.filter === '_view') {
    if (!opts.view || typeof opts.view !== 'string') {
      var err = pouchdbErrors.createError(pouchdbErrors.BAD_REQUEST, '`view` filter parameter not found or invalid.');
      return callback(err);
    } // fetch a view from a design doc, make it behave like a filter


    var viewName = pouchdbUtils.parseDdocFunctionName(opts.view);
    changesHandler.db.get('_design/' + viewName[0], function (err, ddoc) {
      /* istanbul ignore if */
      if (changesHandler.isCancelled) {
        return callback(null, {
          status: 'cancelled'
        });
      }
      /* istanbul ignore next */


      if (err) {
        return callback(pouchdbErrors.generateErrorFromResponse(err));
      }

      var mapFun = ddoc && ddoc.views && ddoc.views[viewName[1]] && ddoc.views[viewName[1]].map;

      if (!mapFun) {
        return callback(pouchdbErrors.createError(pouchdbErrors.MISSING_DOC, ddoc.views ? 'missing json key: ' + viewName[1] : 'missing json key: views'));
      }

      opts.filter = evalView(mapFun);
      changesHandler.doChanges(opts);
    });
  } else if (opts.selector) {
    opts.filter = function (doc) {
      return pouchdbSelectorCore.matchesSelector(doc, opts.selector);
    };

    changesHandler.doChanges(opts);
  } else {
    // fetch a filter from a design doc
    var filterName = pouchdbUtils.parseDdocFunctionName(opts.filter);
    changesHandler.db.get('_design/' + filterName[0], function (err, ddoc) {
      /* istanbul ignore if */
      if (changesHandler.isCancelled) {
        return callback(null, {
          status: 'cancelled'
        });
      }
      /* istanbul ignore next */


      if (err) {
        return callback(pouchdbErrors.generateErrorFromResponse(err));
      }

      var filterFun = ddoc && ddoc.filters && ddoc.filters[filterName[1]];

      if (!filterFun) {
        return callback(pouchdbErrors.createError(pouchdbErrors.MISSING_DOC, ddoc && ddoc.filters ? 'missing json key: ' + filterName[1] : 'missing json key: filters'));
      }

      opts.filter = evalFilter(filterFun);
      changesHandler.doChanges(opts);
    });
  }
}

function applyChangesFilterPlugin(PouchDB) {
  PouchDB._changesFilterPlugin = {
    validate: validate,
    normalize: normalize,
    shouldFilter: shouldFilter,
    filter: filter
  };
}

module.exports = applyChangesFilterPlugin;

},{"35":35,"39":39,"40":40}],32:[function(require,module,exports){
'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, '__esModule', {
  value: true
});

function pad(str, padWith, upToLength) {
  var padding = '';
  var targetLength = upToLength - str.length;
  /* istanbul ignore next */

  while (padding.length < targetLength) {
    padding += padWith;
  }

  return padding;
}

function padLeft(str, padWith, upToLength) {
  var padding = pad(str, padWith, upToLength);
  return padding + str;
}

var MIN_MAGNITUDE = -324; // verified by -Number.MIN_VALUE

var MAGNITUDE_DIGITS = 3; // ditto

var SEP = ''; // set to '_' for easier debugging 

function collate(a, b) {
  if (a === b) {
    return 0;
  }

  a = normalizeKey(a);
  b = normalizeKey(b);
  var ai = collationIndex(a);
  var bi = collationIndex(b);

  if (ai - bi !== 0) {
    return ai - bi;
  }

  switch (_typeof(a)) {
    case 'number':
      return a - b;

    case 'boolean':
      return a < b ? -1 : 1;

    case 'string':
      return stringCollate(a, b);
  }

  return Array.isArray(a) ? arrayCollate(a, b) : objectCollate(a, b);
} // couch considers null/NaN/Infinity/-Infinity === undefined,
// for the purposes of mapreduce indexes. also, dates get stringified.


function normalizeKey(key) {
  switch (_typeof(key)) {
    case 'undefined':
      return null;

    case 'number':
      if (key === Infinity || key === -Infinity || isNaN(key)) {
        return null;
      }

      return key;

    case 'object':
      var origKey = key;

      if (Array.isArray(key)) {
        var len = key.length;
        key = new Array(len);

        for (var i = 0; i < len; i++) {
          key[i] = normalizeKey(origKey[i]);
        }
        /* istanbul ignore next */

      } else if (key instanceof Date) {
        return key.toJSON();
      } else if (key !== null) {
        // generic object
        key = {};

        for (var k in origKey) {
          if (origKey.hasOwnProperty(k)) {
            var val = origKey[k];

            if (typeof val !== 'undefined') {
              key[k] = normalizeKey(val);
            }
          }
        }
      }

  }

  return key;
}

function indexify(key) {
  if (key !== null) {
    switch (_typeof(key)) {
      case 'boolean':
        return key ? 1 : 0;

      case 'number':
        return numToIndexableString(key);

      case 'string':
        // We've to be sure that key does not contain \u0000
        // Do order-preserving replacements:
        // 0 -> 1, 1
        // 1 -> 1, 2
        // 2 -> 2, 2

        /* eslint-disable no-control-regex */
        return key.replace(/\u0002/g, "\x02\x02").replace(/\u0001/g, "\x01\x02").replace(/\u0000/g, "\x01\x01");

      /* eslint-enable no-control-regex */

      case 'object':
        var isArray = Array.isArray(key);
        var arr = isArray ? key : Object.keys(key);
        var i = -1;
        var len = arr.length;
        var result = '';

        if (isArray) {
          while (++i < len) {
            result += toIndexableString(arr[i]);
          }
        } else {
          while (++i < len) {
            var objKey = arr[i];
            result += toIndexableString(objKey) + toIndexableString(key[objKey]);
          }
        }

        return result;
    }
  }

  return '';
} // convert the given key to a string that would be appropriate
// for lexical sorting, e.g. within a database, where the
// sorting is the same given by the collate() function.


function toIndexableString(key) {
  var zero = "\0";
  key = normalizeKey(key);
  return collationIndex(key) + SEP + indexify(key) + zero;
}

function parseNumber(str, i) {
  var originalIdx = i;
  var num;
  var zero = str[i] === '1';

  if (zero) {
    num = 0;
    i++;
  } else {
    var neg = str[i] === '0';
    i++;
    var numAsString = '';
    var magAsString = str.substring(i, i + MAGNITUDE_DIGITS);
    var magnitude = parseInt(magAsString, 10) + MIN_MAGNITUDE;
    /* istanbul ignore next */

    if (neg) {
      magnitude = -magnitude;
    }

    i += MAGNITUDE_DIGITS;

    while (true) {
      var ch = str[i];

      if (ch === "\0") {
        break;
      } else {
        numAsString += ch;
      }

      i++;
    }

    numAsString = numAsString.split('.');

    if (numAsString.length === 1) {
      num = parseInt(numAsString, 10);
    } else {
      /* istanbul ignore next */
      num = parseFloat(numAsString[0] + '.' + numAsString[1]);
    }
    /* istanbul ignore next */


    if (neg) {
      num = num - 10;
    }
    /* istanbul ignore next */


    if (magnitude !== 0) {
      // parseFloat is more reliable than pow due to rounding errors
      // e.g. Number.MAX_VALUE would return Infinity if we did
      // num * Math.pow(10, magnitude);
      num = parseFloat(num + 'e' + magnitude);
    }
  }

  return {
    num: num,
    length: i - originalIdx
  };
} // move up the stack while parsing
// this function moved outside of parseIndexableString for performance


function pop(stack, metaStack) {
  var obj = stack.pop();

  if (metaStack.length) {
    var lastMetaElement = metaStack[metaStack.length - 1];

    if (obj === lastMetaElement.element) {
      // popping a meta-element, e.g. an object whose value is another object
      metaStack.pop();
      lastMetaElement = metaStack[metaStack.length - 1];
    }

    var element = lastMetaElement.element;
    var lastElementIndex = lastMetaElement.index;

    if (Array.isArray(element)) {
      element.push(obj);
    } else if (lastElementIndex === stack.length - 2) {
      // obj with key+value
      var key = stack.pop();
      element[key] = obj;
    } else {
      stack.push(obj); // obj with key only
    }
  }
}

function parseIndexableString(str) {
  var stack = [];
  var metaStack = []; // stack for arrays and objects

  var i = 0;
  /*eslint no-constant-condition: ["error", { "checkLoops": false }]*/

  while (true) {
    var collationIndex = str[i++];

    if (collationIndex === "\0") {
      if (stack.length === 1) {
        return stack.pop();
      } else {
        pop(stack, metaStack);
        continue;
      }
    }

    switch (collationIndex) {
      case '1':
        stack.push(null);
        break;

      case '2':
        stack.push(str[i] === '1');
        i++;
        break;

      case '3':
        var parsedNum = parseNumber(str, i);
        stack.push(parsedNum.num);
        i += parsedNum.length;
        break;

      case '4':
        var parsedStr = '';
        /*eslint no-constant-condition: ["error", { "checkLoops": false }]*/

        while (true) {
          var ch = str[i];

          if (ch === "\0") {
            break;
          }

          parsedStr += ch;
          i++;
        } // perform the reverse of the order-preserving replacement
        // algorithm (see above)

        /* eslint-disable no-control-regex */


        parsedStr = parsedStr.replace(/\u0001\u0001/g, "\0").replace(/\u0001\u0002/g, "\x01").replace(/\u0002\u0002/g, "\x02");
        /* eslint-enable no-control-regex */

        stack.push(parsedStr);
        break;

      case '5':
        var arrayElement = {
          element: [],
          index: stack.length
        };
        stack.push(arrayElement.element);
        metaStack.push(arrayElement);
        break;

      case '6':
        var objElement = {
          element: {},
          index: stack.length
        };
        stack.push(objElement.element);
        metaStack.push(objElement);
        break;

      /* istanbul ignore next */

      default:
        throw new Error('bad collationIndex or unexpectedly reached end of input: ' + collationIndex);
    }
  }
}

function arrayCollate(a, b) {
  var len = Math.min(a.length, b.length);

  for (var i = 0; i < len; i++) {
    var sort = collate(a[i], b[i]);

    if (sort !== 0) {
      return sort;
    }
  }

  return a.length === b.length ? 0 : a.length > b.length ? 1 : -1;
}

function stringCollate(a, b) {
  // See: https://github.com/daleharvey/pouchdb/issues/40
  // This is incompatible with the CouchDB implementation, but its the
  // best we can do for now
  return a === b ? 0 : a > b ? 1 : -1;
}

function objectCollate(a, b) {
  var ak = Object.keys(a),
      bk = Object.keys(b);
  var len = Math.min(ak.length, bk.length);

  for (var i = 0; i < len; i++) {
    // First sort the keys
    var sort = collate(ak[i], bk[i]);

    if (sort !== 0) {
      return sort;
    } // if the keys are equal sort the values


    sort = collate(a[ak[i]], b[bk[i]]);

    if (sort !== 0) {
      return sort;
    }
  }

  return ak.length === bk.length ? 0 : ak.length > bk.length ? 1 : -1;
} // The collation is defined by erlangs ordered terms
// the atoms null, true, false come first, then numbers, strings,
// arrays, then objects
// null/undefined/NaN/Infinity/-Infinity are all considered null


function collationIndex(x) {
  var id = ['boolean', 'number', 'string', 'object'];
  var idx = id.indexOf(_typeof(x)); //false if -1 otherwise true, but fast!!!!1

  if (~idx) {
    if (x === null) {
      return 1;
    }

    if (Array.isArray(x)) {
      return 5;
    }

    return idx < 3 ? idx + 2 : idx + 3;
  }
  /* istanbul ignore next */


  if (Array.isArray(x)) {
    return 5;
  }
} // conversion:
// x yyy zz...zz
// x = 0 for negative, 1 for 0, 2 for positive
// y = exponent (for negative numbers negated) moved so that it's >= 0
// z = mantisse


function numToIndexableString(num) {
  if (num === 0) {
    return '1';
  } // convert number to exponential format for easier and
  // more succinct string sorting


  var expFormat = num.toExponential().split(/e\+?/);
  var magnitude = parseInt(expFormat[1], 10);
  var neg = num < 0;
  var result = neg ? '0' : '2'; // first sort by magnitude
  // it's easier if all magnitudes are positive

  var magForComparison = (neg ? -magnitude : magnitude) - MIN_MAGNITUDE;
  var magString = padLeft(magForComparison.toString(), '0', MAGNITUDE_DIGITS);
  result += SEP + magString; // then sort by the factor

  var factor = Math.abs(parseFloat(expFormat[0])); // [1..10)

  /* istanbul ignore next */

  if (neg) {
    // for negative reverse ordering
    factor = 10 - factor;
  }

  var factorStr = factor.toFixed(20); // strip zeros from the end

  factorStr = factorStr.replace(/\.?0+$/, '');
  result += SEP + factorStr;
  return result;
}

exports.collate = collate;
exports.normalizeKey = normalizeKey;
exports.toIndexableString = toIndexableString;
exports.parseIndexableString = parseIndexableString;

},{}],33:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function mangle(key) {
  return '$' + key;
}

function unmangle(key) {
  return key.substring(1);
}

function Map$1() {
  this._store = {};
}

Map$1.prototype.get = function (key) {
  var mangled = mangle(key);
  return this._store[mangled];
};

Map$1.prototype.set = function (key, value) {
  var mangled = mangle(key);
  this._store[mangled] = value;
  return true;
};

Map$1.prototype.has = function (key) {
  var mangled = mangle(key);
  return mangled in this._store;
};

Map$1.prototype["delete"] = function (key) {
  var mangled = mangle(key);
  var res = (mangled in this._store);
  delete this._store[mangled];
  return res;
};

Map$1.prototype.forEach = function (cb) {
  var keys = Object.keys(this._store);

  for (var i = 0, len = keys.length; i < len; i++) {
    var key = keys[i];
    var value = this._store[key];
    key = unmangle(key);
    cb(value, key);
  }
};

Object.defineProperty(Map$1.prototype, 'size', {
  get: function get() {
    return Object.keys(this._store).length;
  }
});

function Set$1(array) {
  this._store = new Map$1(); // init with an array

  if (array && Array.isArray(array)) {
    for (var i = 0, len = array.length; i < len; i++) {
      this.add(array[i]);
    }
  }
}

Set$1.prototype.add = function (key) {
  return this._store.set(key, true);
};

Set$1.prototype.has = function (key) {
  return this._store.has(key);
};

Set$1.prototype.forEach = function (cb) {
  this._store.forEach(function (value, key) {
    cb(key);
  });
};

Object.defineProperty(Set$1.prototype, 'size', {
  get: function get() {
    return this._store.size;
  }
});
/* global Map,Set,Symbol */
// Based on https://kangax.github.io/compat-table/es6/ we can sniff out
// incomplete Map/Set implementations which would otherwise cause our tests to fail.
// Notably they fail in IE11 and iOS 8.4, which this prevents.

function supportsMapAndSet() {
  if (typeof Symbol === 'undefined' || typeof Map === 'undefined' || typeof Set === 'undefined') {
    return false;
  }

  var prop = Object.getOwnPropertyDescriptor(Map, Symbol.species);
  return prop && 'get' in prop && Map[Symbol.species] === Map;
} // based on https://github.com/montagejs/collections


{
  if (supportsMapAndSet()) {
    // prefer built-in Map/Set
    exports.Set = Set;
    exports.Map = Map;
  } else {
    // fall back to our polyfill
    exports.Set = Set$1;
    exports.Map = Map$1;
  }
}

},{}],34:[function(require,module,exports){
'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _interopDefault(ex) {
  return ex && _typeof(ex) === 'object' && 'default' in ex ? ex['default'] : ex;
}

var pouchdbCollections = require(33);

var getArguments = _interopDefault(require(2));

var pouchdbMerge = require(38);

var pouchdbErrors = require(35);

var pouchdbUtils = require(40);

var inherits = _interopDefault(require(26));

var EE = _interopDefault(require(10));

var pouchdbFetch = require(36);

var pouchChangesFilter = _interopDefault(require(31));

inherits(Changes, EE);

function tryCatchInChangeListener(self, change, pending, lastSeq) {
  // isolate try/catches to avoid V8 deoptimizations
  try {
    self.emit('change', change, pending, lastSeq);
  } catch (e) {
    pouchdbUtils.guardedConsole('error', 'Error in .on("change", function):', e);
  }
}

function Changes(db, opts, callback) {
  EE.call(this);
  var self = this;
  this.db = db;
  opts = opts ? pouchdbUtils.clone(opts) : {};
  var complete = opts.complete = pouchdbUtils.once(function (err, resp) {
    if (err) {
      if (pouchdbUtils.listenerCount(self, 'error') > 0) {
        self.emit('error', err);
      }
    } else {
      self.emit('complete', resp);
    }

    self.removeAllListeners();
    db.removeListener('destroyed', onDestroy);
  });

  if (callback) {
    self.on('complete', function (resp) {
      callback(null, resp);
    });
    self.on('error', callback);
  }

  function onDestroy() {
    self.cancel();
  }

  db.once('destroyed', onDestroy);

  opts.onChange = function (change, pending, lastSeq) {
    /* istanbul ignore if */
    if (self.isCancelled) {
      return;
    }

    tryCatchInChangeListener(self, change, pending, lastSeq);
  };

  var promise = new Promise(function (fulfill, reject) {
    opts.complete = function (err, res) {
      if (err) {
        reject(err);
      } else {
        fulfill(res);
      }
    };
  });
  self.once('cancel', function () {
    db.removeListener('destroyed', onDestroy);
    opts.complete(null, {
      status: 'cancelled'
    });
  });
  this.then = promise.then.bind(promise);
  this['catch'] = promise['catch'].bind(promise);
  this.then(function (result) {
    complete(null, result);
  }, complete);

  if (!db.taskqueue.isReady) {
    db.taskqueue.addTask(function (failed) {
      if (failed) {
        opts.complete(failed);
      } else if (self.isCancelled) {
        self.emit('cancel');
      } else {
        self.validateChanges(opts);
      }
    });
  } else {
    self.validateChanges(opts);
  }
}

Changes.prototype.cancel = function () {
  this.isCancelled = true;

  if (this.db.taskqueue.isReady) {
    this.emit('cancel');
  }
};

function processChange(doc, metadata, opts) {
  var changeList = [{
    rev: doc._rev
  }];

  if (opts.style === 'all_docs') {
    changeList = pouchdbMerge.collectLeaves(metadata.rev_tree).map(function (x) {
      return {
        rev: x.rev
      };
    });
  }

  var change = {
    id: metadata.id,
    changes: changeList,
    doc: doc
  };

  if (pouchdbMerge.isDeleted(metadata, doc._rev)) {
    change.deleted = true;
  }

  if (opts.conflicts) {
    change.doc._conflicts = pouchdbMerge.collectConflicts(metadata);

    if (!change.doc._conflicts.length) {
      delete change.doc._conflicts;
    }
  }

  return change;
}

Changes.prototype.validateChanges = function (opts) {
  var callback = opts.complete;
  var self = this;
  /* istanbul ignore else */

  if (PouchDB._changesFilterPlugin) {
    PouchDB._changesFilterPlugin.validate(opts, function (err) {
      if (err) {
        return callback(err);
      }

      self.doChanges(opts);
    });
  } else {
    self.doChanges(opts);
  }
};

Changes.prototype.doChanges = function (opts) {
  var self = this;
  var callback = opts.complete;
  opts = pouchdbUtils.clone(opts);

  if ('live' in opts && !('continuous' in opts)) {
    opts.continuous = opts.live;
  }

  opts.processChange = processChange;

  if (opts.since === 'latest') {
    opts.since = 'now';
  }

  if (!opts.since) {
    opts.since = 0;
  }

  if (opts.since === 'now') {
    this.db.info().then(function (info) {
      /* istanbul ignore if */
      if (self.isCancelled) {
        callback(null, {
          status: 'cancelled'
        });
        return;
      }

      opts.since = info.update_seq;
      self.doChanges(opts);
    }, callback);
    return;
  }
  /* istanbul ignore else */


  if (PouchDB._changesFilterPlugin) {
    PouchDB._changesFilterPlugin.normalize(opts);

    if (PouchDB._changesFilterPlugin.shouldFilter(this, opts)) {
      return PouchDB._changesFilterPlugin.filter(this, opts);
    }
  } else {
    ['doc_ids', 'filter', 'selector', 'view'].forEach(function (key) {
      if (key in opts) {
        pouchdbUtils.guardedConsole('warn', 'The "' + key + '" option was passed in to changes/replicate, ' + 'but pouchdb-changes-filter plugin is not installed, so it ' + 'was ignored. Please install the plugin to enable filtering.');
      }
    });
  }

  if (!('descending' in opts)) {
    opts.descending = false;
  } // 0 and 1 should return 1 document


  opts.limit = opts.limit === 0 ? 1 : opts.limit;
  opts.complete = callback;

  var newPromise = this.db._changes(opts);
  /* istanbul ignore else */


  if (newPromise && typeof newPromise.cancel === 'function') {
    var cancel = self.cancel;
    self.cancel = getArguments(function (args) {
      newPromise.cancel();
      cancel.apply(this, args);
    });
  }
};
/*
 * A generic pouch adapter
 */


function compare(left, right) {
  return left < right ? -1 : left > right ? 1 : 0;
} // Wrapper for functions that call the bulkdocs api with a single doc,
// if the first result is an error, return an error


function yankError(callback, docId) {
  return function (err, results) {
    if (err || results[0] && results[0].error) {
      err = err || results[0];
      err.docId = docId;
      callback(err);
    } else {
      callback(null, results.length ? results[0] : results);
    }
  };
} // clean docs given to us by the user


function cleanDocs(docs) {
  for (var i = 0; i < docs.length; i++) {
    var doc = docs[i];

    if (doc._deleted) {
      delete doc._attachments; // ignore atts for deleted docs
    } else if (doc._attachments) {
      // filter out extraneous keys from _attachments
      var atts = Object.keys(doc._attachments);

      for (var j = 0; j < atts.length; j++) {
        var att = atts[j];
        doc._attachments[att] = pouchdbUtils.pick(doc._attachments[att], ['data', 'digest', 'content_type', 'length', 'revpos', 'stub']);
      }
    }
  }
} // compare two docs, first by _id then by _rev


function compareByIdThenRev(a, b) {
  var idCompare = compare(a._id, b._id);

  if (idCompare !== 0) {
    return idCompare;
  }

  var aStart = a._revisions ? a._revisions.start : 0;
  var bStart = b._revisions ? b._revisions.start : 0;
  return compare(aStart, bStart);
} // for every node in a revision tree computes its distance from the closest
// leaf


function computeHeight(revs) {
  var height = {};
  var edges = [];
  pouchdbMerge.traverseRevTree(revs, function (isLeaf, pos, id, prnt) {
    var rev = pos + "-" + id;

    if (isLeaf) {
      height[rev] = 0;
    }

    if (prnt !== undefined) {
      edges.push({
        from: prnt,
        to: rev
      });
    }

    return rev;
  });
  edges.reverse();
  edges.forEach(function (edge) {
    if (height[edge.from] === undefined) {
      height[edge.from] = 1 + height[edge.to];
    } else {
      height[edge.from] = Math.min(height[edge.from], 1 + height[edge.to]);
    }
  });
  return height;
}

function allDocsKeysParse(opts) {
  var keys = 'limit' in opts ? opts.keys.slice(opts.skip, opts.limit + opts.skip) : opts.skip > 0 ? opts.keys.slice(opts.skip) : opts.keys;
  opts.keys = keys;
  opts.skip = 0;
  delete opts.limit;

  if (opts.descending) {
    keys.reverse();
    opts.descending = false;
  }
} // all compaction is done in a queue, to avoid attaching
// too many listeners at once


function doNextCompaction(self) {
  var task = self._compactionQueue[0];
  var opts = task.opts;
  var callback = task.callback;
  self.get('_local/compaction')["catch"](function () {
    return false;
  }).then(function (doc) {
    if (doc && doc.last_seq) {
      opts.last_seq = doc.last_seq;
    }

    self._compact(opts, function (err, res) {
      /* istanbul ignore if */
      if (err) {
        callback(err);
      } else {
        callback(null, res);
      }

      pouchdbUtils.nextTick(function () {
        self._compactionQueue.shift();

        if (self._compactionQueue.length) {
          doNextCompaction(self);
        }
      });
    });
  });
}

function attachmentNameError(name) {
  if (name.charAt(0) === '_') {
    return name + ' is not a valid attachment name, attachment ' + 'names cannot start with \'_\'';
  }

  return false;
}

inherits(AbstractPouchDB, EE);

function AbstractPouchDB() {
  EE.call(this); // re-bind prototyped methods

  for (var p in AbstractPouchDB.prototype) {
    if (typeof this[p] === 'function') {
      this[p] = this[p].bind(this);
    }
  }
}

AbstractPouchDB.prototype.post = pouchdbUtils.adapterFun('post', function (doc, opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }

  if (_typeof(doc) !== 'object' || Array.isArray(doc)) {
    return callback(pouchdbErrors.createError(pouchdbErrors.NOT_AN_OBJECT));
  }

  this.bulkDocs({
    docs: [doc]
  }, opts, yankError(callback, doc._id));
});
AbstractPouchDB.prototype.put = pouchdbUtils.adapterFun('put', function (doc, opts, cb) {
  if (typeof opts === 'function') {
    cb = opts;
    opts = {};
  }

  if (_typeof(doc) !== 'object' || Array.isArray(doc)) {
    return cb(pouchdbErrors.createError(pouchdbErrors.NOT_AN_OBJECT));
  }

  pouchdbUtils.invalidIdError(doc._id);

  if (pouchdbMerge.isLocalId(doc._id) && typeof this._putLocal === 'function') {
    if (doc._deleted) {
      return this._removeLocal(doc, cb);
    } else {
      return this._putLocal(doc, cb);
    }
  }

  var self = this;

  if (opts.force && doc._rev) {
    transformForceOptionToNewEditsOption();
    putDoc(function (err) {
      var result = err ? null : {
        ok: true,
        id: doc._id,
        rev: doc._rev
      };
      cb(err, result);
    });
  } else {
    putDoc(cb);
  }

  function transformForceOptionToNewEditsOption() {
    var parts = doc._rev.split('-');

    var oldRevId = parts[1];
    var oldRevNum = parseInt(parts[0], 10);
    var newRevNum = oldRevNum + 1;
    var newRevId = pouchdbUtils.rev();
    doc._revisions = {
      start: newRevNum,
      ids: [newRevId, oldRevId]
    };
    doc._rev = newRevNum + '-' + newRevId;
    opts.new_edits = false;
  }

  function putDoc(next) {
    if (typeof self._put === 'function' && opts.new_edits !== false) {
      self._put(doc, opts, next);
    } else {
      self.bulkDocs({
        docs: [doc]
      }, opts, yankError(next, doc._id));
    }
  }
});
AbstractPouchDB.prototype.putAttachment = pouchdbUtils.adapterFun('putAttachment', function (docId, attachmentId, rev, blob, type) {
  var api = this;

  if (typeof type === 'function') {
    type = blob;
    blob = rev;
    rev = null;
  } // Lets fix in https://github.com/pouchdb/pouchdb/issues/3267

  /* istanbul ignore if */


  if (typeof type === 'undefined') {
    type = blob;
    blob = rev;
    rev = null;
  }

  if (!type) {
    pouchdbUtils.guardedConsole('warn', 'Attachment', attachmentId, 'on document', docId, 'is missing content_type');
  }

  function createAttachment(doc) {
    var prevrevpos = '_rev' in doc ? parseInt(doc._rev, 10) : 0;
    doc._attachments = doc._attachments || {};
    doc._attachments[attachmentId] = {
      content_type: type,
      data: blob,
      revpos: ++prevrevpos
    };
    return api.put(doc);
  }

  return api.get(docId).then(function (doc) {
    if (doc._rev !== rev) {
      throw pouchdbErrors.createError(pouchdbErrors.REV_CONFLICT);
    }

    return createAttachment(doc);
  }, function (err) {
    // create new doc

    /* istanbul ignore else */
    if (err.reason === pouchdbErrors.MISSING_DOC.message) {
      return createAttachment({
        _id: docId
      });
    } else {
      throw err;
    }
  });
});
AbstractPouchDB.prototype.removeAttachment = pouchdbUtils.adapterFun('removeAttachment', function (docId, attachmentId, rev, callback) {
  var self = this;
  self.get(docId, function (err, obj) {
    /* istanbul ignore if */
    if (err) {
      callback(err);
      return;
    }

    if (obj._rev !== rev) {
      callback(pouchdbErrors.createError(pouchdbErrors.REV_CONFLICT));
      return;
    }
    /* istanbul ignore if */


    if (!obj._attachments) {
      return callback();
    }

    delete obj._attachments[attachmentId];

    if (Object.keys(obj._attachments).length === 0) {
      delete obj._attachments;
    }

    self.put(obj, callback);
  });
});
AbstractPouchDB.prototype.remove = pouchdbUtils.adapterFun('remove', function (docOrId, optsOrRev, opts, callback) {
  var doc;

  if (typeof optsOrRev === 'string') {
    // id, rev, opts, callback style
    doc = {
      _id: docOrId,
      _rev: optsOrRev
    };

    if (typeof opts === 'function') {
      callback = opts;
      opts = {};
    }
  } else {
    // doc, opts, callback style
    doc = docOrId;

    if (typeof optsOrRev === 'function') {
      callback = optsOrRev;
      opts = {};
    } else {
      callback = opts;
      opts = optsOrRev;
    }
  }

  opts = opts || {};
  opts.was_delete = true;
  var newDoc = {
    _id: doc._id,
    _rev: doc._rev || opts.rev
  };
  newDoc._deleted = true;

  if (pouchdbMerge.isLocalId(newDoc._id) && typeof this._removeLocal === 'function') {
    return this._removeLocal(doc, callback);
  }

  this.bulkDocs({
    docs: [newDoc]
  }, opts, yankError(callback, newDoc._id));
});
AbstractPouchDB.prototype.revsDiff = pouchdbUtils.adapterFun('revsDiff', function (req, opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }

  var ids = Object.keys(req);

  if (!ids.length) {
    return callback(null, {});
  }

  var count = 0;
  var missing = new pouchdbCollections.Map();

  function addToMissing(id, revId) {
    if (!missing.has(id)) {
      missing.set(id, {
        missing: []
      });
    }

    missing.get(id).missing.push(revId);
  }

  function processDoc(id, rev_tree) {
    // Is this fast enough? Maybe we should switch to a set simulated by a map
    var missingForId = req[id].slice(0);
    pouchdbMerge.traverseRevTree(rev_tree, function (isLeaf, pos, revHash, ctx, opts) {
      var rev = pos + '-' + revHash;
      var idx = missingForId.indexOf(rev);

      if (idx === -1) {
        return;
      }

      missingForId.splice(idx, 1);
      /* istanbul ignore if */

      if (opts.status !== 'available') {
        addToMissing(id, rev);
      }
    }); // Traversing the tree is synchronous, so now `missingForId` contains
    // revisions that were not found in the tree

    missingForId.forEach(function (rev) {
      addToMissing(id, rev);
    });
  }

  ids.map(function (id) {
    this._getRevisionTree(id, function (err, rev_tree) {
      if (err && err.status === 404 && err.message === 'missing') {
        missing.set(id, {
          missing: req[id]
        });
      } else if (err) {
        /* istanbul ignore next */
        return callback(err);
      } else {
        processDoc(id, rev_tree);
      }

      if (++count === ids.length) {
        // convert LazyMap to object
        var missingObj = {};
        missing.forEach(function (value, key) {
          missingObj[key] = value;
        });
        return callback(null, missingObj);
      }
    });
  }, this);
}); // _bulk_get API for faster replication, as described in
// https://github.com/apache/couchdb-chttpd/pull/33
// At the "abstract" level, it will just run multiple get()s in
// parallel, because this isn't much of a performance cost
// for local databases (except the cost of multiple transactions, which is
// small). The http adapter overrides this in order
// to do a more efficient single HTTP request.

AbstractPouchDB.prototype.bulkGet = pouchdbUtils.adapterFun('bulkGet', function (opts, callback) {
  pouchdbUtils.bulkGetShim(this, opts, callback);
}); // compact one document and fire callback
// by compacting we mean removing all revisions which
// are further from the leaf in revision tree than max_height

AbstractPouchDB.prototype.compactDocument = pouchdbUtils.adapterFun('compactDocument', function (docId, maxHeight, callback) {
  var self = this;

  this._getRevisionTree(docId, function (err, revTree) {
    /* istanbul ignore if */
    if (err) {
      return callback(err);
    }

    var height = computeHeight(revTree);
    var candidates = [];
    var revs = [];
    Object.keys(height).forEach(function (rev) {
      if (height[rev] > maxHeight) {
        candidates.push(rev);
      }
    });
    pouchdbMerge.traverseRevTree(revTree, function (isLeaf, pos, revHash, ctx, opts) {
      var rev = pos + '-' + revHash;

      if (opts.status === 'available' && candidates.indexOf(rev) !== -1) {
        revs.push(rev);
      }
    });

    self._doCompaction(docId, revs, callback);
  });
}); // compact the whole database using single document
// compaction

AbstractPouchDB.prototype.compact = pouchdbUtils.adapterFun('compact', function (opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }

  var self = this;
  opts = opts || {};
  self._compactionQueue = self._compactionQueue || [];

  self._compactionQueue.push({
    opts: opts,
    callback: callback
  });

  if (self._compactionQueue.length === 1) {
    doNextCompaction(self);
  }
});

AbstractPouchDB.prototype._compact = function (opts, callback) {
  var self = this;
  var changesOpts = {
    return_docs: false,
    last_seq: opts.last_seq || 0
  };
  var promises = [];

  function onChange(row) {
    promises.push(self.compactDocument(row.id, 0));
  }

  function onComplete(resp) {
    var lastSeq = resp.last_seq;
    Promise.all(promises).then(function () {
      return pouchdbUtils.upsert(self, '_local/compaction', function deltaFunc(doc) {
        if (!doc.last_seq || doc.last_seq < lastSeq) {
          doc.last_seq = lastSeq;
          return doc;
        }

        return false; // somebody else got here first, don't update
      });
    }).then(function () {
      callback(null, {
        ok: true
      });
    })["catch"](callback);
  }

  self.changes(changesOpts).on('change', onChange).on('complete', onComplete).on('error', callback);
};
/* Begin api wrappers. Specific functionality to storage belongs in the
   _[method] */


AbstractPouchDB.prototype.get = pouchdbUtils.adapterFun('get', function (id, opts, cb) {
  if (typeof opts === 'function') {
    cb = opts;
    opts = {};
  }

  if (typeof id !== 'string') {
    return cb(pouchdbErrors.createError(pouchdbErrors.INVALID_ID));
  }

  if (pouchdbMerge.isLocalId(id) && typeof this._getLocal === 'function') {
    return this._getLocal(id, cb);
  }

  var leaves = [],
      self = this;

  function finishOpenRevs() {
    var result = [];
    var count = leaves.length;
    /* istanbul ignore if */

    if (!count) {
      return cb(null, result);
    } // order with open_revs is unspecified


    leaves.forEach(function (leaf) {
      self.get(id, {
        rev: leaf,
        revs: opts.revs,
        latest: opts.latest,
        attachments: opts.attachments,
        binary: opts.binary
      }, function (err, doc) {
        if (!err) {
          // using latest=true can produce duplicates
          var existing;

          for (var i = 0, l = result.length; i < l; i++) {
            if (result[i].ok && result[i].ok._rev === doc._rev) {
              existing = true;
              break;
            }
          }

          if (!existing) {
            result.push({
              ok: doc
            });
          }
        } else {
          result.push({
            missing: leaf
          });
        }

        count--;

        if (!count) {
          cb(null, result);
        }
      });
    });
  }

  if (opts.open_revs) {
    if (opts.open_revs === "all") {
      this._getRevisionTree(id, function (err, rev_tree) {
        /* istanbul ignore if */
        if (err) {
          return cb(err);
        }

        leaves = pouchdbMerge.collectLeaves(rev_tree).map(function (leaf) {
          return leaf.rev;
        });
        finishOpenRevs();
      });
    } else {
      if (Array.isArray(opts.open_revs)) {
        leaves = opts.open_revs;

        for (var i = 0; i < leaves.length; i++) {
          var l = leaves[i]; // looks like it's the only thing couchdb checks

          if (!(typeof l === "string" && /^\d+-/.test(l))) {
            return cb(pouchdbErrors.createError(pouchdbErrors.INVALID_REV));
          }
        }

        finishOpenRevs();
      } else {
        return cb(pouchdbErrors.createError(pouchdbErrors.UNKNOWN_ERROR, 'function_clause'));
      }
    }

    return; // open_revs does not like other options
  }

  return this._get(id, opts, function (err, result) {
    if (err) {
      err.docId = id;
      return cb(err);
    }

    var doc = result.doc;
    var metadata = result.metadata;
    var ctx = result.ctx;

    if (opts.conflicts) {
      var conflicts = pouchdbMerge.collectConflicts(metadata);

      if (conflicts.length) {
        doc._conflicts = conflicts;
      }
    }

    if (pouchdbMerge.isDeleted(metadata, doc._rev)) {
      doc._deleted = true;
    }

    if (opts.revs || opts.revs_info) {
      var splittedRev = doc._rev.split('-');

      var revNo = parseInt(splittedRev[0], 10);
      var revHash = splittedRev[1];
      var paths = pouchdbMerge.rootToLeaf(metadata.rev_tree);
      var path = null;

      for (var i = 0; i < paths.length; i++) {
        var currentPath = paths[i];
        var hashIndex = currentPath.ids.map(function (x) {
          return x.id;
        }).indexOf(revHash);
        var hashFoundAtRevPos = hashIndex === revNo - 1;

        if (hashFoundAtRevPos || !path && hashIndex !== -1) {
          path = currentPath;
        }
      }
      /* istanbul ignore if */


      if (!path) {
        err = new Error('invalid rev tree');
        err.docId = id;
        return cb(err);
      }

      var indexOfRev = path.ids.map(function (x) {
        return x.id;
      }).indexOf(doc._rev.split('-')[1]) + 1;
      var howMany = path.ids.length - indexOfRev;
      path.ids.splice(indexOfRev, howMany);
      path.ids.reverse();

      if (opts.revs) {
        doc._revisions = {
          start: path.pos + path.ids.length - 1,
          ids: path.ids.map(function (rev) {
            return rev.id;
          })
        };
      }

      if (opts.revs_info) {
        var pos = path.pos + path.ids.length;
        doc._revs_info = path.ids.map(function (rev) {
          pos--;
          return {
            rev: pos + '-' + rev.id,
            status: rev.opts.status
          };
        });
      }
    }

    if (opts.attachments && doc._attachments) {
      var attachments = doc._attachments;
      var count = Object.keys(attachments).length;

      if (count === 0) {
        return cb(null, doc);
      }

      Object.keys(attachments).forEach(function (key) {
        this._getAttachment(doc._id, key, attachments[key], {
          // Previously the revision handling was done in adapter.js
          // getAttachment, however since idb-next doesnt we need to
          // pass the rev through
          rev: doc._rev,
          binary: opts.binary,
          ctx: ctx
        }, function (err, data) {
          var att = doc._attachments[key];
          att.data = data;
          delete att.stub;
          delete att.length;

          if (! --count) {
            cb(null, doc);
          }
        });
      }, self);
    } else {
      if (doc._attachments) {
        for (var key in doc._attachments) {
          /* istanbul ignore else */
          if (doc._attachments.hasOwnProperty(key)) {
            doc._attachments[key].stub = true;
          }
        }
      }

      cb(null, doc);
    }
  });
}); // TODO: I dont like this, it forces an extra read for every
// attachment read and enforces a confusing api between
// adapter.js and the adapter implementation

AbstractPouchDB.prototype.getAttachment = pouchdbUtils.adapterFun('getAttachment', function (docId, attachmentId, opts, callback) {
  var self = this;

  if (opts instanceof Function) {
    callback = opts;
    opts = {};
  }

  this._get(docId, opts, function (err, res) {
    if (err) {
      return callback(err);
    }

    if (res.doc._attachments && res.doc._attachments[attachmentId]) {
      opts.ctx = res.ctx;
      opts.binary = true;

      self._getAttachment(docId, attachmentId, res.doc._attachments[attachmentId], opts, callback);
    } else {
      return callback(pouchdbErrors.createError(pouchdbErrors.MISSING_DOC));
    }
  });
});
AbstractPouchDB.prototype.allDocs = pouchdbUtils.adapterFun('allDocs', function (opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }

  opts.skip = typeof opts.skip !== 'undefined' ? opts.skip : 0;

  if (opts.start_key) {
    opts.startkey = opts.start_key;
  }

  if (opts.end_key) {
    opts.endkey = opts.end_key;
  }

  if ('keys' in opts) {
    if (!Array.isArray(opts.keys)) {
      return callback(new TypeError('options.keys must be an array'));
    }

    var incompatibleOpt = ['startkey', 'endkey', 'key'].filter(function (incompatibleOpt) {
      return incompatibleOpt in opts;
    })[0];

    if (incompatibleOpt) {
      callback(pouchdbErrors.createError(pouchdbErrors.QUERY_PARSE_ERROR, 'Query parameter `' + incompatibleOpt + '` is not compatible with multi-get'));
      return;
    }

    if (!pouchdbUtils.isRemote(this)) {
      allDocsKeysParse(opts);

      if (opts.keys.length === 0) {
        return this._allDocs({
          limit: 0
        }, callback);
      }
    }
  }

  return this._allDocs(opts, callback);
});

AbstractPouchDB.prototype.changes = function (opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }

  opts = opts || {}; // By default set return_docs to false if the caller has opts.live = true,
  // this will prevent us from collecting the set of changes indefinitely
  // resulting in growing memory

  opts.return_docs = 'return_docs' in opts ? opts.return_docs : !opts.live;
  return new Changes(this, opts, callback);
};

AbstractPouchDB.prototype.close = pouchdbUtils.adapterFun('close', function (callback) {
  this._closed = true;
  this.emit('closed');
  return this._close(callback);
});
AbstractPouchDB.prototype.info = pouchdbUtils.adapterFun('info', function (callback) {
  var self = this;

  this._info(function (err, info) {
    if (err) {
      return callback(err);
    } // assume we know better than the adapter, unless it informs us


    info.db_name = info.db_name || self.name;
    info.auto_compaction = !!(self.auto_compaction && !pouchdbUtils.isRemote(self));
    info.adapter = self.adapter;
    callback(null, info);
  });
});
AbstractPouchDB.prototype.id = pouchdbUtils.adapterFun('id', function (callback) {
  return this._id(callback);
});
/* istanbul ignore next */

AbstractPouchDB.prototype.type = function () {
  return typeof this._type === 'function' ? this._type() : this.adapter;
};

AbstractPouchDB.prototype.bulkDocs = pouchdbUtils.adapterFun('bulkDocs', function (req, opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }

  opts = opts || {};

  if (Array.isArray(req)) {
    req = {
      docs: req
    };
  }

  if (!req || !req.docs || !Array.isArray(req.docs)) {
    return callback(pouchdbErrors.createError(pouchdbErrors.MISSING_BULK_DOCS));
  }

  for (var i = 0; i < req.docs.length; ++i) {
    if (_typeof(req.docs[i]) !== 'object' || Array.isArray(req.docs[i])) {
      return callback(pouchdbErrors.createError(pouchdbErrors.NOT_AN_OBJECT));
    }
  }

  var attachmentError;
  req.docs.forEach(function (doc) {
    if (doc._attachments) {
      Object.keys(doc._attachments).forEach(function (name) {
        attachmentError = attachmentError || attachmentNameError(name);

        if (!doc._attachments[name].content_type) {
          pouchdbUtils.guardedConsole('warn', 'Attachment', name, 'on document', doc._id, 'is missing content_type');
        }
      });
    }
  });

  if (attachmentError) {
    return callback(pouchdbErrors.createError(pouchdbErrors.BAD_REQUEST, attachmentError));
  }

  if (!('new_edits' in opts)) {
    if ('new_edits' in req) {
      opts.new_edits = req.new_edits;
    } else {
      opts.new_edits = true;
    }
  }

  var adapter = this;

  if (!opts.new_edits && !pouchdbUtils.isRemote(adapter)) {
    // ensure revisions of the same doc are sorted, so that
    // the local adapter processes them correctly (#2935)
    req.docs.sort(compareByIdThenRev);
  }

  cleanDocs(req.docs); // in the case of conflicts, we want to return the _ids to the user
  // however, the underlying adapter may destroy the docs array, so
  // create a copy here

  var ids = req.docs.map(function (doc) {
    return doc._id;
  });
  return this._bulkDocs(req, opts, function (err, res) {
    if (err) {
      return callback(err);
    }

    if (!opts.new_edits) {
      // this is what couch does when new_edits is false
      res = res.filter(function (x) {
        return x.error;
      });
    } // add ids for error/conflict responses (not required for CouchDB)


    if (!pouchdbUtils.isRemote(adapter)) {
      for (var i = 0, l = res.length; i < l; i++) {
        res[i].id = res[i].id || ids[i];
      }
    }

    callback(null, res);
  });
});
AbstractPouchDB.prototype.registerDependentDatabase = pouchdbUtils.adapterFun('registerDependentDatabase', function (dependentDb, callback) {
  var depDB = new this.constructor(dependentDb, this.__opts);

  function diffFun(doc) {
    doc.dependentDbs = doc.dependentDbs || {};

    if (doc.dependentDbs[dependentDb]) {
      return false; // no update required
    }

    doc.dependentDbs[dependentDb] = true;
    return doc;
  }

  pouchdbUtils.upsert(this, '_local/_pouch_dependentDbs', diffFun).then(function () {
    callback(null, {
      db: depDB
    });
  })["catch"](callback);
});
AbstractPouchDB.prototype.destroy = pouchdbUtils.adapterFun('destroy', function (opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }

  var self = this;
  var usePrefix = 'use_prefix' in self ? self.use_prefix : true;

  function destroyDb() {
    // call destroy method of the particular adaptor
    self._destroy(opts, function (err, resp) {
      if (err) {
        return callback(err);
      }

      self._destroyed = true;
      self.emit('destroyed');
      callback(null, resp || {
        'ok': true
      });
    });
  }

  if (pouchdbUtils.isRemote(self)) {
    // no need to check for dependent DBs if it's a remote DB
    return destroyDb();
  }

  self.get('_local/_pouch_dependentDbs', function (err, localDoc) {
    if (err) {
      /* istanbul ignore if */
      if (err.status !== 404) {
        return callback(err);
      } else {
        // no dependencies
        return destroyDb();
      }
    }

    var dependentDbs = localDoc.dependentDbs;
    var PouchDB = self.constructor;
    var deletedMap = Object.keys(dependentDbs).map(function (name) {
      // use_prefix is only false in the browser

      /* istanbul ignore next */
      var trueName = usePrefix ? name.replace(new RegExp('^' + PouchDB.prefix), '') : name;
      return new PouchDB(trueName, self.__opts).destroy();
    });
    Promise.all(deletedMap).then(destroyDb, callback);
  });
});

function TaskQueue() {
  this.isReady = false;
  this.failed = false;
  this.queue = [];
}

TaskQueue.prototype.execute = function () {
  var fun;

  if (this.failed) {
    while (fun = this.queue.shift()) {
      fun(this.failed);
    }
  } else {
    while (fun = this.queue.shift()) {
      fun();
    }
  }
};

TaskQueue.prototype.fail = function (err) {
  this.failed = err;
  this.execute();
};

TaskQueue.prototype.ready = function (db) {
  this.isReady = true;
  this.db = db;
  this.execute();
};

TaskQueue.prototype.addTask = function (fun) {
  this.queue.push(fun);

  if (this.failed) {
    this.execute();
  }
};

function parseAdapter(name, opts) {
  var match = name.match(/([a-z-]*):\/\/(.*)/);

  if (match) {
    // the http adapter expects the fully qualified name
    return {
      name: /https?/.test(match[1]) ? match[1] + '://' + match[2] : match[2],
      adapter: match[1]
    };
  }

  var adapters = PouchDB.adapters;
  var preferredAdapters = PouchDB.preferredAdapters;
  var prefix = PouchDB.prefix;
  var adapterName = opts.adapter;

  if (!adapterName) {
    // automatically determine adapter
    for (var i = 0; i < preferredAdapters.length; ++i) {
      adapterName = preferredAdapters[i]; // check for browsers that have been upgraded from websql-only to websql+idb

      /* istanbul ignore if */

      if (adapterName === 'idb' && 'websql' in adapters && pouchdbUtils.hasLocalStorage() && localStorage['_pouch__websqldb_' + prefix + name]) {
        // log it, because this can be confusing during development
        pouchdbUtils.guardedConsole('log', 'PouchDB is downgrading "' + name + '" to WebSQL to' + ' avoid data loss, because it was already opened with WebSQL.');
        continue; // keep using websql to avoid user data loss
      }

      break;
    }
  }

  var adapter = adapters[adapterName]; // if adapter is invalid, then an error will be thrown later

  var usePrefix = adapter && 'use_prefix' in adapter ? adapter.use_prefix : true;
  return {
    name: usePrefix ? prefix + name : name,
    adapter: adapterName
  };
} // OK, so here's the deal. Consider this code:
//     var db1 = new PouchDB('foo');
//     var db2 = new PouchDB('foo');
//     db1.destroy();
// ^ these two both need to emit 'destroyed' events,
// as well as the PouchDB constructor itself.
// So we have one db object (whichever one got destroy() called on it)
// responsible for emitting the initial event, which then gets emitted
// by the constructor, which then broadcasts it to any other dbs
// that may have been created with the same name.


function prepareForDestruction(self) {
  function onDestroyed(from_constructor) {
    self.removeListener('closed', onClosed);

    if (!from_constructor) {
      self.constructor.emit('destroyed', self.name);
    }
  }

  function onClosed() {
    self.removeListener('destroyed', onDestroyed);
    self.constructor.emit('unref', self);
  }

  self.once('destroyed', onDestroyed);
  self.once('closed', onClosed);
  self.constructor.emit('ref', self);
}

inherits(PouchDB, AbstractPouchDB);

function PouchDB(name, opts) {
  // In Node our test suite only tests this for PouchAlt unfortunately

  /* istanbul ignore if */
  if (!(this instanceof PouchDB)) {
    return new PouchDB(name, opts);
  }

  var self = this;
  opts = opts || {};

  if (name && _typeof(name) === 'object') {
    opts = name;
    name = opts.name;
    delete opts.name;
  }

  if (opts.deterministic_revs === undefined) {
    opts.deterministic_revs = true;
  }

  this.__opts = opts = pouchdbUtils.clone(opts);
  self.auto_compaction = opts.auto_compaction;
  self.prefix = PouchDB.prefix;

  if (typeof name !== 'string') {
    throw new Error('Missing/invalid DB name');
  }

  var prefixedName = (opts.prefix || '') + name;
  var backend = parseAdapter(prefixedName, opts);
  opts.name = backend.name;
  opts.adapter = opts.adapter || backend.adapter;
  self.name = name;
  self._adapter = opts.adapter;
  PouchDB.emit('debug', ['adapter', 'Picked adapter: ', opts.adapter]);

  if (!PouchDB.adapters[opts.adapter] || !PouchDB.adapters[opts.adapter].valid()) {
    throw new Error('Invalid Adapter: ' + opts.adapter);
  }

  AbstractPouchDB.call(self);
  self.taskqueue = new TaskQueue();
  self.adapter = opts.adapter;
  PouchDB.adapters[opts.adapter].call(self, opts, function (err) {
    if (err) {
      return self.taskqueue.fail(err);
    }

    prepareForDestruction(self);
    self.emit('created', self);
    PouchDB.emit('created', self.name);
    self.taskqueue.ready(self);
  });
}

PouchDB.adapters = {};
PouchDB.preferredAdapters = [];
PouchDB.prefix = '_pouch_';
var eventEmitter = new EE();

function setUpEventEmitter(Pouch) {
  Object.keys(EE.prototype).forEach(function (key) {
    if (typeof EE.prototype[key] === 'function') {
      Pouch[key] = eventEmitter[key].bind(eventEmitter);
    }
  }); // these are created in constructor.js, and allow us to notify each DB with
  // the same name that it was destroyed, via the constructor object

  var destructListeners = Pouch._destructionListeners = new pouchdbCollections.Map();
  Pouch.on('ref', function onConstructorRef(db) {
    if (!destructListeners.has(db.name)) {
      destructListeners.set(db.name, []);
    }

    destructListeners.get(db.name).push(db);
  });
  Pouch.on('unref', function onConstructorUnref(db) {
    if (!destructListeners.has(db.name)) {
      return;
    }

    var dbList = destructListeners.get(db.name);
    var pos = dbList.indexOf(db);

    if (pos < 0) {
      /* istanbul ignore next */
      return;
    }

    dbList.splice(pos, 1);

    if (dbList.length > 1) {
      /* istanbul ignore next */
      destructListeners.set(db.name, dbList);
    } else {
      destructListeners["delete"](db.name);
    }
  });
  Pouch.on('destroyed', function onConstructorDestroyed(name) {
    if (!destructListeners.has(name)) {
      return;
    }

    var dbList = destructListeners.get(name);
    destructListeners["delete"](name);
    dbList.forEach(function (db) {
      db.emit('destroyed', true);
    });
  });
}

setUpEventEmitter(PouchDB);

PouchDB.adapter = function (id, obj, addToPreferredAdapters) {
  /* istanbul ignore else */
  if (obj.valid()) {
    PouchDB.adapters[id] = obj;

    if (addToPreferredAdapters) {
      PouchDB.preferredAdapters.push(id);
    }
  }
};

PouchDB.plugin = function (obj) {
  if (typeof obj === 'function') {
    // function style for plugins
    obj(PouchDB);
  } else if (_typeof(obj) !== 'object' || Object.keys(obj).length === 0) {
    throw new Error('Invalid plugin: got "' + obj + '", expected an object or a function');
  } else {
    Object.keys(obj).forEach(function (id) {
      // object style for plugins
      PouchDB.prototype[id] = obj[id];
    });
  }

  if (this.__defaults) {
    PouchDB.__defaults = pouchdbUtils.assign({}, this.__defaults);
  }

  return PouchDB;
};

PouchDB.defaults = function (defaultOpts) {
  function PouchAlt(name, opts) {
    if (!(this instanceof PouchAlt)) {
      return new PouchAlt(name, opts);
    }

    opts = opts || {};

    if (name && _typeof(name) === 'object') {
      opts = name;
      name = opts.name;
      delete opts.name;
    }

    opts = pouchdbUtils.assign({}, PouchAlt.__defaults, opts);
    PouchDB.call(this, name, opts);
  }

  inherits(PouchAlt, PouchDB);
  PouchAlt.preferredAdapters = PouchDB.preferredAdapters.slice();
  Object.keys(PouchDB).forEach(function (key) {
    if (!(key in PouchAlt)) {
      PouchAlt[key] = PouchDB[key];
    }
  }); // make default options transitive
  // https://github.com/pouchdb/pouchdb/issues/5922

  PouchAlt.__defaults = pouchdbUtils.assign({}, this.__defaults, defaultOpts);
  return PouchAlt;
};

PouchDB.fetch = function (url, opts) {
  return pouchdbFetch.fetch(url, opts);
}; // managed automatically by set-version.js


var version = "7.2.2"; // TODO: remove from pouchdb-core (breaking)

PouchDB.plugin(pouchChangesFilter);
PouchDB.version = version;
module.exports = PouchDB;

},{"10":10,"2":2,"26":26,"31":31,"33":33,"35":35,"36":36,"38":38,"40":40}],35:[function(require,module,exports){
'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopDefault(ex) {
  return ex && _typeof(ex) === 'object' && 'default' in ex ? ex['default'] : ex;
}

var inherits = _interopDefault(require(26));

inherits(PouchError, Error);

function PouchError(status, error, reason) {
  Error.call(this, reason);
  this.status = status;
  this.name = error;
  this.message = reason;
  this.error = true;
}

PouchError.prototype.toString = function () {
  return JSON.stringify({
    status: this.status,
    name: this.name,
    message: this.message,
    reason: this.reason
  });
};

var UNAUTHORIZED = new PouchError(401, 'unauthorized', "Name or password is incorrect.");
var MISSING_BULK_DOCS = new PouchError(400, 'bad_request', "Missing JSON list of 'docs'");
var MISSING_DOC = new PouchError(404, 'not_found', 'missing');
var REV_CONFLICT = new PouchError(409, 'conflict', 'Document update conflict');
var INVALID_ID = new PouchError(400, 'bad_request', '_id field must contain a string');
var MISSING_ID = new PouchError(412, 'missing_id', '_id is required for puts');
var RESERVED_ID = new PouchError(400, 'bad_request', 'Only reserved document ids may start with underscore.');
var NOT_OPEN = new PouchError(412, 'precondition_failed', 'Database not open');
var UNKNOWN_ERROR = new PouchError(500, 'unknown_error', 'Database encountered an unknown error');
var BAD_ARG = new PouchError(500, 'badarg', 'Some query argument is invalid');
var INVALID_REQUEST = new PouchError(400, 'invalid_request', 'Request was invalid');
var QUERY_PARSE_ERROR = new PouchError(400, 'query_parse_error', 'Some query parameter is invalid');
var DOC_VALIDATION = new PouchError(500, 'doc_validation', 'Bad special document member');
var BAD_REQUEST = new PouchError(400, 'bad_request', 'Something wrong with the request');
var NOT_AN_OBJECT = new PouchError(400, 'bad_request', 'Document must be a JSON object');
var DB_MISSING = new PouchError(404, 'not_found', 'Database not found');
var IDB_ERROR = new PouchError(500, 'indexed_db_went_bad', 'unknown');
var WSQ_ERROR = new PouchError(500, 'web_sql_went_bad', 'unknown');
var LDB_ERROR = new PouchError(500, 'levelDB_went_went_bad', 'unknown');
var FORBIDDEN = new PouchError(403, 'forbidden', 'Forbidden by design doc validate_doc_update function');
var INVALID_REV = new PouchError(400, 'bad_request', 'Invalid rev format');
var FILE_EXISTS = new PouchError(412, 'file_exists', 'The database could not be created, the file already exists.');
var MISSING_STUB = new PouchError(412, 'missing_stub', 'A pre-existing attachment stub wasn\'t found');
var INVALID_URL = new PouchError(413, 'invalid_url', 'Provided URL is invalid');

function createError(error, reason) {
  function CustomPouchError(reason) {
    // inherit error properties from our parent error manually
    // so as to allow proper JSON parsing.

    /* jshint ignore:start */
    var names = Object.getOwnPropertyNames(error);

    for (var i = 0, len = names.length; i < len; i++) {
      if (typeof error[names[i]] !== 'function') {
        this[names[i]] = error[names[i]];
      }
    }
    /* jshint ignore:end */


    if (reason !== undefined) {
      this.reason = reason;
    }
  }

  CustomPouchError.prototype = PouchError.prototype;
  return new CustomPouchError(reason);
}

function generateErrorFromResponse(err) {
  if (_typeof(err) !== 'object') {
    var data = err;
    err = UNKNOWN_ERROR;
    err.data = data;
  }

  if ('error' in err && err.error === 'conflict') {
    err.name = 'conflict';
    err.status = 409;
  }

  if (!('name' in err)) {
    err.name = err.error || 'unknown';
  }

  if (!('status' in err)) {
    err.status = 500;
  }

  if (!('message' in err)) {
    err.message = err.message || err.reason;
  }

  return err;
}

exports.UNAUTHORIZED = UNAUTHORIZED;
exports.MISSING_BULK_DOCS = MISSING_BULK_DOCS;
exports.MISSING_DOC = MISSING_DOC;
exports.REV_CONFLICT = REV_CONFLICT;
exports.INVALID_ID = INVALID_ID;
exports.MISSING_ID = MISSING_ID;
exports.RESERVED_ID = RESERVED_ID;
exports.NOT_OPEN = NOT_OPEN;
exports.UNKNOWN_ERROR = UNKNOWN_ERROR;
exports.BAD_ARG = BAD_ARG;
exports.INVALID_REQUEST = INVALID_REQUEST;
exports.QUERY_PARSE_ERROR = QUERY_PARSE_ERROR;
exports.DOC_VALIDATION = DOC_VALIDATION;
exports.BAD_REQUEST = BAD_REQUEST;
exports.NOT_AN_OBJECT = NOT_AN_OBJECT;
exports.DB_MISSING = DB_MISSING;
exports.WSQ_ERROR = WSQ_ERROR;
exports.LDB_ERROR = LDB_ERROR;
exports.FORBIDDEN = FORBIDDEN;
exports.INVALID_REV = INVALID_REV;
exports.FILE_EXISTS = FILE_EXISTS;
exports.MISSING_STUB = MISSING_STUB;
exports.IDB_ERROR = IDB_ERROR;
exports.INVALID_URL = INVALID_URL;
exports.createError = createError;
exports.generateErrorFromResponse = generateErrorFromResponse;

},{"26":26}],36:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
}); // AbortController was introduced quite a while after fetch and
// isnt required for PouchDB to function so polyfill if needed

var a = typeof AbortController !== 'undefined' ? AbortController : function () {
  return {
    abort: function abort() {}
  };
};
var f = fetch;
var h = Headers;
exports.fetch = f;
exports.Headers = h;
exports.AbortController = a;

},{}],37:[function(require,module,exports){
'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopDefault(ex) {
  return ex && _typeof(ex) === 'object' && 'default' in ex ? ex['default'] : ex;
}

var pouchdbBinaryUtils = require(30);

var Md5 = _interopDefault(require(49));

var setImmediateShim = self.setImmediate || self.setTimeout;
var MD5_CHUNK_SIZE = 32768;

function rawToBase64(raw) {
  return pouchdbBinaryUtils.btoa(raw);
}

function sliceBlob(blob, start, end) {
  if (blob.webkitSlice) {
    return blob.webkitSlice(start, end);
  }

  return blob.slice(start, end);
}

function appendBlob(buffer, blob, start, end, callback) {
  if (start > 0 || end < blob.size) {
    // only slice blob if we really need to
    blob = sliceBlob(blob, start, end);
  }

  pouchdbBinaryUtils.readAsArrayBuffer(blob, function (arrayBuffer) {
    buffer.append(arrayBuffer);
    callback();
  });
}

function appendString(buffer, string, start, end, callback) {
  if (start > 0 || end < string.length) {
    // only create a substring if we really need to
    string = string.substring(start, end);
  }

  buffer.appendBinary(string);
  callback();
}

function binaryMd5(data, callback) {
  var inputIsString = typeof data === 'string';
  var len = inputIsString ? data.length : data.size;
  var chunkSize = Math.min(MD5_CHUNK_SIZE, len);
  var chunks = Math.ceil(len / chunkSize);
  var currentChunk = 0;
  var buffer = inputIsString ? new Md5() : new Md5.ArrayBuffer();
  var append = inputIsString ? appendString : appendBlob;

  function next() {
    setImmediateShim(loadNextChunk);
  }

  function done() {
    var raw = buffer.end(true);
    var base64 = rawToBase64(raw);
    callback(base64);
    buffer.destroy();
  }

  function loadNextChunk() {
    var start = currentChunk * chunkSize;
    var end = start + chunkSize;
    currentChunk++;

    if (currentChunk < chunks) {
      append(buffer, data, start, end, next);
    } else {
      append(buffer, data, start, end, done);
    }
  }

  loadNextChunk();
}

function stringMd5(string) {
  return Md5.hash(string);
}

exports.binaryMd5 = binaryMd5;
exports.stringMd5 = stringMd5;

},{"30":30,"49":49}],38:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
}); // We fetch all leafs of the revision tree, and sort them based on tree length
// and whether they were deleted, undeleted documents with the longest revision
// tree (most edits) win
// The final sort algorithm is slightly documented in a sidebar here:
// http://guide.couchdb.org/draft/conflicts.html

function winningRev(metadata) {
  var winningId;
  var winningPos;
  var winningDeleted;
  var toVisit = metadata.rev_tree.slice();
  var node;

  while (node = toVisit.pop()) {
    var tree = node.ids;
    var branches = tree[2];
    var pos = node.pos;

    if (branches.length) {
      // non-leaf
      for (var i = 0, len = branches.length; i < len; i++) {
        toVisit.push({
          pos: pos + 1,
          ids: branches[i]
        });
      }

      continue;
    }

    var deleted = !!tree[1].deleted;
    var id = tree[0]; // sort by deleted, then pos, then id

    if (!winningId || (winningDeleted !== deleted ? winningDeleted : winningPos !== pos ? winningPos < pos : winningId < id)) {
      winningId = id;
      winningPos = pos;
      winningDeleted = deleted;
    }
  }

  return winningPos + '-' + winningId;
} // Pretty much all below can be combined into a higher order function to
// traverse revisions
// The return value from the callback will be passed as context to all
// children of that node


function traverseRevTree(revs, callback) {
  var toVisit = revs.slice();
  var node;

  while (node = toVisit.pop()) {
    var pos = node.pos;
    var tree = node.ids;
    var branches = tree[2];
    var newCtx = callback(branches.length === 0, pos, tree[0], node.ctx, tree[1]);

    for (var i = 0, len = branches.length; i < len; i++) {
      toVisit.push({
        pos: pos + 1,
        ids: branches[i],
        ctx: newCtx
      });
    }
  }
}

function sortByPos(a, b) {
  return a.pos - b.pos;
}

function collectLeaves(revs) {
  var leaves = [];
  traverseRevTree(revs, function (isLeaf, pos, id, acc, opts) {
    if (isLeaf) {
      leaves.push({
        rev: pos + "-" + id,
        pos: pos,
        opts: opts
      });
    }
  });
  leaves.sort(sortByPos).reverse();

  for (var i = 0, len = leaves.length; i < len; i++) {
    delete leaves[i].pos;
  }

  return leaves;
} // returns revs of all conflicts that is leaves such that
// 1. are not deleted and
// 2. are different than winning revision


function collectConflicts(metadata) {
  var win = winningRev(metadata);
  var leaves = collectLeaves(metadata.rev_tree);
  var conflicts = [];

  for (var i = 0, len = leaves.length; i < len; i++) {
    var leaf = leaves[i];

    if (leaf.rev !== win && !leaf.opts.deleted) {
      conflicts.push(leaf.rev);
    }
  }

  return conflicts;
} // compact a tree by marking its non-leafs as missing,
// and return a list of revs to delete


function compactTree(metadata) {
  var revs = [];
  traverseRevTree(metadata.rev_tree, function (isLeaf, pos, revHash, ctx, opts) {
    if (opts.status === 'available' && !isLeaf) {
      revs.push(pos + '-' + revHash);
      opts.status = 'missing';
    }
  });
  return revs;
} // build up a list of all the paths to the leafs in this revision tree


function rootToLeaf(revs) {
  var paths = [];
  var toVisit = revs.slice();
  var node;

  while (node = toVisit.pop()) {
    var pos = node.pos;
    var tree = node.ids;
    var id = tree[0];
    var opts = tree[1];
    var branches = tree[2];
    var isLeaf = branches.length === 0;
    var history = node.history ? node.history.slice() : [];
    history.push({
      id: id,
      opts: opts
    });

    if (isLeaf) {
      paths.push({
        pos: pos + 1 - history.length,
        ids: history
      });
    }

    for (var i = 0, len = branches.length; i < len; i++) {
      toVisit.push({
        pos: pos + 1,
        ids: branches[i],
        history: history
      });
    }
  }

  return paths.reverse();
} // for a better overview of what this is doing, read:


function sortByPos$1(a, b) {
  return a.pos - b.pos;
} // classic binary search


function binarySearch(arr, item, comparator) {
  var low = 0;
  var high = arr.length;
  var mid;

  while (low < high) {
    mid = low + high >>> 1;

    if (comparator(arr[mid], item) < 0) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  return low;
} // assuming the arr is sorted, insert the item in the proper place


function insertSorted(arr, item, comparator) {
  var idx = binarySearch(arr, item, comparator);
  arr.splice(idx, 0, item);
} // Turn a path as a flat array into a tree with a single branch.
// If any should be stemmed from the beginning of the array, that's passed
// in as the second argument


function pathToTree(path, numStemmed) {
  var root;
  var leaf;

  for (var i = numStemmed, len = path.length; i < len; i++) {
    var node = path[i];
    var currentLeaf = [node.id, node.opts, []];

    if (leaf) {
      leaf[2].push(currentLeaf);
      leaf = currentLeaf;
    } else {
      root = leaf = currentLeaf;
    }
  }

  return root;
} // compare the IDs of two trees


function compareTree(a, b) {
  return a[0] < b[0] ? -1 : 1;
} // Merge two trees together
// The roots of tree1 and tree2 must be the same revision


function mergeTree(in_tree1, in_tree2) {
  var queue = [{
    tree1: in_tree1,
    tree2: in_tree2
  }];
  var conflicts = false;

  while (queue.length > 0) {
    var item = queue.pop();
    var tree1 = item.tree1;
    var tree2 = item.tree2;

    if (tree1[1].status || tree2[1].status) {
      tree1[1].status = tree1[1].status === 'available' || tree2[1].status === 'available' ? 'available' : 'missing';
    }

    for (var i = 0; i < tree2[2].length; i++) {
      if (!tree1[2][0]) {
        conflicts = 'new_leaf';
        tree1[2][0] = tree2[2][i];
        continue;
      }

      var merged = false;

      for (var j = 0; j < tree1[2].length; j++) {
        if (tree1[2][j][0] === tree2[2][i][0]) {
          queue.push({
            tree1: tree1[2][j],
            tree2: tree2[2][i]
          });
          merged = true;
        }
      }

      if (!merged) {
        conflicts = 'new_branch';
        insertSorted(tree1[2], tree2[2][i], compareTree);
      }
    }
  }

  return {
    conflicts: conflicts,
    tree: in_tree1
  };
}

function doMerge(tree, path, dontExpand) {
  var restree = [];
  var conflicts = false;
  var merged = false;
  var res;

  if (!tree.length) {
    return {
      tree: [path],
      conflicts: 'new_leaf'
    };
  }

  for (var i = 0, len = tree.length; i < len; i++) {
    var branch = tree[i];

    if (branch.pos === path.pos && branch.ids[0] === path.ids[0]) {
      // Paths start at the same position and have the same root, so they need
      // merged
      res = mergeTree(branch.ids, path.ids);
      restree.push({
        pos: branch.pos,
        ids: res.tree
      });
      conflicts = conflicts || res.conflicts;
      merged = true;
    } else if (dontExpand !== true) {
      // The paths start at a different position, take the earliest path and
      // traverse up until it as at the same point from root as the path we
      // want to merge.  If the keys match we return the longer path with the
      // other merged After stemming we dont want to expand the trees
      var t1 = branch.pos < path.pos ? branch : path;
      var t2 = branch.pos < path.pos ? path : branch;
      var diff = t2.pos - t1.pos;
      var candidateParents = [];
      var trees = [];
      trees.push({
        ids: t1.ids,
        diff: diff,
        parent: null,
        parentIdx: null
      });

      while (trees.length > 0) {
        var item = trees.pop();

        if (item.diff === 0) {
          if (item.ids[0] === t2.ids[0]) {
            candidateParents.push(item);
          }

          continue;
        }

        var elements = item.ids[2];

        for (var j = 0, elementsLen = elements.length; j < elementsLen; j++) {
          trees.push({
            ids: elements[j],
            diff: item.diff - 1,
            parent: item.ids,
            parentIdx: j
          });
        }
      }

      var el = candidateParents[0];

      if (!el) {
        restree.push(branch);
      } else {
        res = mergeTree(el.ids, t2.ids);
        el.parent[2][el.parentIdx] = res.tree;
        restree.push({
          pos: t1.pos,
          ids: t1.ids
        });
        conflicts = conflicts || res.conflicts;
        merged = true;
      }
    } else {
      restree.push(branch);
    }
  } // We didnt find


  if (!merged) {
    restree.push(path);
  }

  restree.sort(sortByPos$1);
  return {
    tree: restree,
    conflicts: conflicts || 'internal_node'
  };
} // To ensure we dont grow the revision tree infinitely, we stem old revisions


function stem(tree, depth) {
  // First we break out the tree into a complete list of root to leaf paths
  var paths = rootToLeaf(tree);
  var stemmedRevs;
  var result;

  for (var i = 0, len = paths.length; i < len; i++) {
    // Then for each path, we cut off the start of the path based on the
    // `depth` to stem to, and generate a new set of flat trees
    var path = paths[i];
    var stemmed = path.ids;
    var node;

    if (stemmed.length > depth) {
      // only do the stemming work if we actually need to stem
      if (!stemmedRevs) {
        stemmedRevs = {}; // avoid allocating this object unnecessarily
      }

      var numStemmed = stemmed.length - depth;
      node = {
        pos: path.pos + numStemmed,
        ids: pathToTree(stemmed, numStemmed)
      };

      for (var s = 0; s < numStemmed; s++) {
        var rev = path.pos + s + '-' + stemmed[s].id;
        stemmedRevs[rev] = true;
      }
    } else {
      // no need to actually stem
      node = {
        pos: path.pos,
        ids: pathToTree(stemmed, 0)
      };
    } // Then we remerge all those flat trees together, ensuring that we dont
    // connect trees that would go beyond the depth limit


    if (result) {
      result = doMerge(result, node, true).tree;
    } else {
      result = [node];
    }
  } // this is memory-heavy per Chrome profiler, avoid unless we actually stemmed


  if (stemmedRevs) {
    traverseRevTree(result, function (isLeaf, pos, revHash) {
      // some revisions may have been removed in a branch but not in another
      delete stemmedRevs[pos + '-' + revHash];
    });
  }

  return {
    tree: result,
    revs: stemmedRevs ? Object.keys(stemmedRevs) : []
  };
}

function merge(tree, path, depth) {
  var newTree = doMerge(tree, path);
  var stemmed = stem(newTree.tree, depth);
  return {
    tree: stemmed.tree,
    stemmedRevs: stemmed.revs,
    conflicts: newTree.conflicts
  };
} // return true if a rev exists in the rev tree, false otherwise


function revExists(revs, rev) {
  var toVisit = revs.slice();
  var splitRev = rev.split('-');
  var targetPos = parseInt(splitRev[0], 10);
  var targetId = splitRev[1];
  var node;

  while (node = toVisit.pop()) {
    if (node.pos === targetPos && node.ids[0] === targetId) {
      return true;
    }

    var branches = node.ids[2];

    for (var i = 0, len = branches.length; i < len; i++) {
      toVisit.push({
        pos: node.pos + 1,
        ids: branches[i]
      });
    }
  }

  return false;
}

function getTrees(node) {
  return node.ids;
} // check if a specific revision of a doc has been deleted
//  - metadata: the metadata object from the doc store
//  - rev: (optional) the revision to check. defaults to winning revision


function isDeleted(metadata, rev) {
  if (!rev) {
    rev = winningRev(metadata);
  }

  var id = rev.substring(rev.indexOf('-') + 1);
  var toVisit = metadata.rev_tree.map(getTrees);
  var tree;

  while (tree = toVisit.pop()) {
    if (tree[0] === id) {
      return !!tree[1].deleted;
    }

    toVisit = toVisit.concat(tree[2]);
  }
}

function isLocalId(id) {
  return /^_local/.test(id);
} // returns the current leaf node for a given revision


function latest(rev, metadata) {
  var toVisit = metadata.rev_tree.slice();
  var node;

  while (node = toVisit.pop()) {
    var pos = node.pos;
    var tree = node.ids;
    var id = tree[0];
    var opts = tree[1];
    var branches = tree[2];
    var isLeaf = branches.length === 0;
    var history = node.history ? node.history.slice() : [];
    history.push({
      id: id,
      pos: pos,
      opts: opts
    });

    if (isLeaf) {
      for (var i = 0, len = history.length; i < len; i++) {
        var historyNode = history[i];
        var historyRev = historyNode.pos + '-' + historyNode.id;

        if (historyRev === rev) {
          // return the rev of this leaf
          return pos + '-' + id;
        }
      }
    }

    for (var j = 0, l = branches.length; j < l; j++) {
      toVisit.push({
        pos: pos + 1,
        ids: branches[j],
        history: history
      });
    }
  }
  /* istanbul ignore next */


  throw new Error('Unable to resolve latest revision for id ' + metadata.id + ', rev ' + rev);
}

exports.collectConflicts = collectConflicts;
exports.collectLeaves = collectLeaves;
exports.compactTree = compactTree;
exports.isDeleted = isDeleted;
exports.isLocalId = isLocalId;
exports.merge = merge;
exports.revExists = revExists;
exports.rootToLeaf = rootToLeaf;
exports.traverseRevTree = traverseRevTree;
exports.winningRev = winningRev;
exports.latest = latest;

},{}],39:[function(require,module,exports){
'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, '__esModule', {
  value: true
});

var pouchdbUtils = require(40);

var pouchdbCollate = require(32); // this would just be "return doc[field]", but fields
// can be "deep" due to dot notation


function getFieldFromDoc(doc, parsedField) {
  var value = doc;

  for (var i = 0, len = parsedField.length; i < len; i++) {
    var key = parsedField[i];
    value = value[key];

    if (!value) {
      break;
    }
  }

  return value;
}

function setFieldInDoc(doc, parsedField, value) {
  for (var i = 0, len = parsedField.length; i < len - 1; i++) {
    var elem = parsedField[i];
    doc = doc[elem] = doc[elem] || {};
  }

  doc[parsedField[len - 1]] = value;
}

function compare(left, right) {
  return left < right ? -1 : left > right ? 1 : 0;
} // Converts a string in dot notation to an array of its components, with backslash escaping


function parseField(fieldName) {
  // fields may be deep (e.g. "foo.bar.baz"), so parse
  var fields = [];
  var current = '';

  for (var i = 0, len = fieldName.length; i < len; i++) {
    var ch = fieldName[i];

    if (ch === '.') {
      if (i > 0 && fieldName[i - 1] === '\\') {
        // escaped delimiter
        current = current.substring(0, current.length - 1) + '.';
      } else {
        // not escaped, so delimiter
        fields.push(current);
        current = '';
      }
    } else {
      // normal character
      current += ch;
    }
  }

  fields.push(current);
  return fields;
}

var combinationFields = ['$or', '$nor', '$not'];

function isCombinationalField(field) {
  return combinationFields.indexOf(field) > -1;
}

function getKey(obj) {
  return Object.keys(obj)[0];
}

function getValue(obj) {
  return obj[getKey(obj)];
} // flatten an array of selectors joined by an $and operator


function mergeAndedSelectors(selectors) {
  // sort to ensure that e.g. if the user specified
  // $and: [{$gt: 'a'}, {$gt: 'b'}], then it's collapsed into
  // just {$gt: 'b'}
  var res = {};
  selectors.forEach(function (selector) {
    Object.keys(selector).forEach(function (field) {
      var matcher = selector[field];

      if (_typeof(matcher) !== 'object') {
        matcher = {
          $eq: matcher
        };
      }

      if (isCombinationalField(field)) {
        if (matcher instanceof Array) {
          res[field] = matcher.map(function (m) {
            return mergeAndedSelectors([m]);
          });
        } else {
          res[field] = mergeAndedSelectors([matcher]);
        }
      } else {
        var fieldMatchers = res[field] = res[field] || {};
        Object.keys(matcher).forEach(function (operator) {
          var value = matcher[operator];

          if (operator === '$gt' || operator === '$gte') {
            return mergeGtGte(operator, value, fieldMatchers);
          } else if (operator === '$lt' || operator === '$lte') {
            return mergeLtLte(operator, value, fieldMatchers);
          } else if (operator === '$ne') {
            return mergeNe(value, fieldMatchers);
          } else if (operator === '$eq') {
            return mergeEq(value, fieldMatchers);
          }

          fieldMatchers[operator] = value;
        });
      }
    });
  });
  return res;
} // collapse logically equivalent gt/gte values


function mergeGtGte(operator, value, fieldMatchers) {
  if (typeof fieldMatchers.$eq !== 'undefined') {
    return; // do nothing
  }

  if (typeof fieldMatchers.$gte !== 'undefined') {
    if (operator === '$gte') {
      if (value > fieldMatchers.$gte) {
        // more specificity
        fieldMatchers.$gte = value;
      }
    } else {
      // operator === '$gt'
      if (value >= fieldMatchers.$gte) {
        // more specificity
        delete fieldMatchers.$gte;
        fieldMatchers.$gt = value;
      }
    }
  } else if (typeof fieldMatchers.$gt !== 'undefined') {
    if (operator === '$gte') {
      if (value > fieldMatchers.$gt) {
        // more specificity
        delete fieldMatchers.$gt;
        fieldMatchers.$gte = value;
      }
    } else {
      // operator === '$gt'
      if (value > fieldMatchers.$gt) {
        // more specificity
        fieldMatchers.$gt = value;
      }
    }
  } else {
    fieldMatchers[operator] = value;
  }
} // collapse logically equivalent lt/lte values


function mergeLtLte(operator, value, fieldMatchers) {
  if (typeof fieldMatchers.$eq !== 'undefined') {
    return; // do nothing
  }

  if (typeof fieldMatchers.$lte !== 'undefined') {
    if (operator === '$lte') {
      if (value < fieldMatchers.$lte) {
        // more specificity
        fieldMatchers.$lte = value;
      }
    } else {
      // operator === '$gt'
      if (value <= fieldMatchers.$lte) {
        // more specificity
        delete fieldMatchers.$lte;
        fieldMatchers.$lt = value;
      }
    }
  } else if (typeof fieldMatchers.$lt !== 'undefined') {
    if (operator === '$lte') {
      if (value < fieldMatchers.$lt) {
        // more specificity
        delete fieldMatchers.$lt;
        fieldMatchers.$lte = value;
      }
    } else {
      // operator === '$gt'
      if (value < fieldMatchers.$lt) {
        // more specificity
        fieldMatchers.$lt = value;
      }
    }
  } else {
    fieldMatchers[operator] = value;
  }
} // combine $ne values into one array


function mergeNe(value, fieldMatchers) {
  if ('$ne' in fieldMatchers) {
    // there are many things this could "not" be
    fieldMatchers.$ne.push(value);
  } else {
    // doesn't exist yet
    fieldMatchers.$ne = [value];
  }
} // add $eq into the mix


function mergeEq(value, fieldMatchers) {
  // these all have less specificity than the $eq
  // TODO: check for user errors here
  delete fieldMatchers.$gt;
  delete fieldMatchers.$gte;
  delete fieldMatchers.$lt;
  delete fieldMatchers.$lte;
  delete fieldMatchers.$ne;
  fieldMatchers.$eq = value;
} //#7458: execute function mergeAndedSelectors on nested $and


function mergeAndedSelectorsNested(obj) {
  for (var prop in obj) {
    if (Array.isArray(obj)) {
      for (var i in obj) {
        if (obj[i]['$and']) {
          obj[i] = mergeAndedSelectors(obj[i]['$and']);
        }
      }
    }

    var value = obj[prop];

    if (_typeof(value) === 'object') {
      mergeAndedSelectorsNested(value); // <- recursive call
    }
  }

  return obj;
} //#7458: determine id $and is present in selector (at any level)


function isAndInSelector(obj, isAnd) {
  for (var prop in obj) {
    if (prop === '$and') {
      isAnd = true;
    }

    var value = obj[prop];

    if (_typeof(value) === 'object') {
      isAnd = isAndInSelector(value, isAnd); // <- recursive call
    }
  }

  return isAnd;
} //
// normalize the selector
//


function massageSelector(input) {
  var result = pouchdbUtils.clone(input);
  var wasAnded = false; //#7458: if $and is present in selector (at any level) merge nested $and

  if (isAndInSelector(result, false)) {
    result = mergeAndedSelectorsNested(result);

    if ('$and' in result) {
      result = mergeAndedSelectors(result['$and']);
    }

    wasAnded = true;
  }

  ['$or', '$nor'].forEach(function (orOrNor) {
    if (orOrNor in result) {
      // message each individual selector
      // e.g. {foo: 'bar'} becomes {foo: {$eq: 'bar'}}
      result[orOrNor].forEach(function (subSelector) {
        var fields = Object.keys(subSelector);

        for (var i = 0; i < fields.length; i++) {
          var field = fields[i];
          var matcher = subSelector[field];

          if (_typeof(matcher) !== 'object' || matcher === null) {
            subSelector[field] = {
              $eq: matcher
            };
          }
        }
      });
    }
  });

  if ('$not' in result) {
    //This feels a little like forcing, but it will work for now,
    //I would like to come back to this and make the merging of selectors a little more generic
    result['$not'] = mergeAndedSelectors([result['$not']]);
  }

  var fields = Object.keys(result);

  for (var i = 0; i < fields.length; i++) {
    var field = fields[i];
    var matcher = result[field];

    if (_typeof(matcher) !== 'object' || matcher === null) {
      matcher = {
        $eq: matcher
      };
    } else if ('$ne' in matcher && !wasAnded) {
      // I put these in an array, since there may be more than one
      // but in the "mergeAnded" operation, I already take care of that
      matcher.$ne = [matcher.$ne];
    }

    result[field] = matcher;
  }

  return result;
} // create a comparator based on the sort object


function createFieldSorter(sort) {
  function getFieldValuesAsArray(doc) {
    return sort.map(function (sorting) {
      var fieldName = getKey(sorting);
      var parsedField = parseField(fieldName);
      var docFieldValue = getFieldFromDoc(doc, parsedField);
      return docFieldValue;
    });
  }

  return function (aRow, bRow) {
    var aFieldValues = getFieldValuesAsArray(aRow.doc);
    var bFieldValues = getFieldValuesAsArray(bRow.doc);
    var collation = pouchdbCollate.collate(aFieldValues, bFieldValues);

    if (collation !== 0) {
      return collation;
    } // this is what mango seems to do


    return compare(aRow.doc._id, bRow.doc._id);
  };
}

function filterInMemoryFields(rows, requestDef, inMemoryFields) {
  rows = rows.filter(function (row) {
    return rowFilter(row.doc, requestDef.selector, inMemoryFields);
  });

  if (requestDef.sort) {
    // in-memory sort
    var fieldSorter = createFieldSorter(requestDef.sort);
    rows = rows.sort(fieldSorter);

    if (typeof requestDef.sort[0] !== 'string' && getValue(requestDef.sort[0]) === 'desc') {
      rows = rows.reverse();
    }
  }

  if ('limit' in requestDef || 'skip' in requestDef) {
    // have to do the limit in-memory
    var skip = requestDef.skip || 0;
    var limit = ('limit' in requestDef ? requestDef.limit : rows.length) + skip;
    rows = rows.slice(skip, limit);
  }

  return rows;
}

function rowFilter(doc, selector, inMemoryFields) {
  return inMemoryFields.every(function (field) {
    var matcher = selector[field];
    var parsedField = parseField(field);
    var docFieldValue = getFieldFromDoc(doc, parsedField);

    if (isCombinationalField(field)) {
      return matchCominationalSelector(field, matcher, doc);
    }

    return matchSelector(matcher, doc, parsedField, docFieldValue);
  });
}

function matchSelector(matcher, doc, parsedField, docFieldValue) {
  if (!matcher) {
    // no filtering necessary; this field is just needed for sorting
    return true;
  } // is matcher an object, if so continue recursion


  if (_typeof(matcher) === 'object') {
    return Object.keys(matcher).every(function (userOperator) {
      var userValue = matcher[userOperator];
      return match(userOperator, doc, userValue, parsedField, docFieldValue);
    });
  } // no more depth, No need to recurse further


  return matcher === docFieldValue;
}

function matchCominationalSelector(field, matcher, doc) {
  if (field === '$or') {
    return matcher.some(function (orMatchers) {
      return rowFilter(doc, orMatchers, Object.keys(orMatchers));
    });
  }

  if (field === '$not') {
    return !rowFilter(doc, matcher, Object.keys(matcher));
  } //`$nor`


  return !matcher.find(function (orMatchers) {
    return rowFilter(doc, orMatchers, Object.keys(orMatchers));
  });
}

function match(userOperator, doc, userValue, parsedField, docFieldValue) {
  if (!matchers[userOperator]) {
    throw new Error('unknown operator "' + userOperator + '" - should be one of $eq, $lte, $lt, $gt, $gte, $exists, $ne, $in, ' + '$nin, $size, $mod, $regex, $elemMatch, $type, $allMatch or $all');
  }

  return matchers[userOperator](doc, userValue, parsedField, docFieldValue);
}

function fieldExists(docFieldValue) {
  return typeof docFieldValue !== 'undefined' && docFieldValue !== null;
}

function fieldIsNotUndefined(docFieldValue) {
  return typeof docFieldValue !== 'undefined';
}

function modField(docFieldValue, userValue) {
  var divisor = userValue[0];
  var mod = userValue[1];

  if (divisor === 0) {
    throw new Error('Bad divisor, cannot divide by zero');
  }

  if (parseInt(divisor, 10) !== divisor) {
    throw new Error('Divisor is not an integer');
  }

  if (parseInt(mod, 10) !== mod) {
    throw new Error('Modulus is not an integer');
  }

  if (parseInt(docFieldValue, 10) !== docFieldValue) {
    return false;
  }

  return docFieldValue % divisor === mod;
}

function arrayContainsValue(docFieldValue, userValue) {
  return userValue.some(function (val) {
    if (docFieldValue instanceof Array) {
      return docFieldValue.indexOf(val) > -1;
    }

    return docFieldValue === val;
  });
}

function arrayContainsAllValues(docFieldValue, userValue) {
  return userValue.every(function (val) {
    return docFieldValue.indexOf(val) > -1;
  });
}

function arraySize(docFieldValue, userValue) {
  return docFieldValue.length === userValue;
}

function regexMatch(docFieldValue, userValue) {
  var re = new RegExp(userValue);
  return re.test(docFieldValue);
}

function typeMatch(docFieldValue, userValue) {
  switch (userValue) {
    case 'null':
      return docFieldValue === null;

    case 'boolean':
      return typeof docFieldValue === 'boolean';

    case 'number':
      return typeof docFieldValue === 'number';

    case 'string':
      return typeof docFieldValue === 'string';

    case 'array':
      return docFieldValue instanceof Array;

    case 'object':
      return {}.toString.call(docFieldValue) === '[object Object]';
  }

  throw new Error(userValue + ' not supported as a type.' + 'Please use one of object, string, array, number, boolean or null.');
}

var matchers = {
  '$elemMatch': function $elemMatch(doc, userValue, parsedField, docFieldValue) {
    if (!Array.isArray(docFieldValue)) {
      return false;
    }

    if (docFieldValue.length === 0) {
      return false;
    }

    if (_typeof(docFieldValue[0]) === 'object') {
      return docFieldValue.some(function (val) {
        return rowFilter(val, userValue, Object.keys(userValue));
      });
    }

    return docFieldValue.some(function (val) {
      return matchSelector(userValue, doc, parsedField, val);
    });
  },
  '$allMatch': function $allMatch(doc, userValue, parsedField, docFieldValue) {
    if (!Array.isArray(docFieldValue)) {
      return false;
    }
    /* istanbul ignore next */


    if (docFieldValue.length === 0) {
      return false;
    }

    if (_typeof(docFieldValue[0]) === 'object') {
      return docFieldValue.every(function (val) {
        return rowFilter(val, userValue, Object.keys(userValue));
      });
    }

    return docFieldValue.every(function (val) {
      return matchSelector(userValue, doc, parsedField, val);
    });
  },
  '$eq': function $eq(doc, userValue, parsedField, docFieldValue) {
    return fieldIsNotUndefined(docFieldValue) && pouchdbCollate.collate(docFieldValue, userValue) === 0;
  },
  '$gte': function $gte(doc, userValue, parsedField, docFieldValue) {
    return fieldIsNotUndefined(docFieldValue) && pouchdbCollate.collate(docFieldValue, userValue) >= 0;
  },
  '$gt': function $gt(doc, userValue, parsedField, docFieldValue) {
    return fieldIsNotUndefined(docFieldValue) && pouchdbCollate.collate(docFieldValue, userValue) > 0;
  },
  '$lte': function $lte(doc, userValue, parsedField, docFieldValue) {
    return fieldIsNotUndefined(docFieldValue) && pouchdbCollate.collate(docFieldValue, userValue) <= 0;
  },
  '$lt': function $lt(doc, userValue, parsedField, docFieldValue) {
    return fieldIsNotUndefined(docFieldValue) && pouchdbCollate.collate(docFieldValue, userValue) < 0;
  },
  '$exists': function $exists(doc, userValue, parsedField, docFieldValue) {
    //a field that is null is still considered to exist
    if (userValue) {
      return fieldIsNotUndefined(docFieldValue);
    }

    return !fieldIsNotUndefined(docFieldValue);
  },
  '$mod': function $mod(doc, userValue, parsedField, docFieldValue) {
    return fieldExists(docFieldValue) && modField(docFieldValue, userValue);
  },
  '$ne': function $ne(doc, userValue, parsedField, docFieldValue) {
    return userValue.every(function (neValue) {
      return pouchdbCollate.collate(docFieldValue, neValue) !== 0;
    });
  },
  '$in': function $in(doc, userValue, parsedField, docFieldValue) {
    return fieldExists(docFieldValue) && arrayContainsValue(docFieldValue, userValue);
  },
  '$nin': function $nin(doc, userValue, parsedField, docFieldValue) {
    return fieldExists(docFieldValue) && !arrayContainsValue(docFieldValue, userValue);
  },
  '$size': function $size(doc, userValue, parsedField, docFieldValue) {
    return fieldExists(docFieldValue) && arraySize(docFieldValue, userValue);
  },
  '$all': function $all(doc, userValue, parsedField, docFieldValue) {
    return Array.isArray(docFieldValue) && arrayContainsAllValues(docFieldValue, userValue);
  },
  '$regex': function $regex(doc, userValue, parsedField, docFieldValue) {
    return fieldExists(docFieldValue) && regexMatch(docFieldValue, userValue);
  },
  '$type': function $type(doc, userValue, parsedField, docFieldValue) {
    return typeMatch(docFieldValue, userValue);
  }
}; // return true if the given doc matches the supplied selector

function matchesSelector(doc, selector) {
  /* istanbul ignore if */
  if (_typeof(selector) !== 'object') {
    // match the CouchDB error message
    throw new Error('Selector error: expected a JSON object');
  }

  selector = massageSelector(selector);
  var row = {
    'doc': doc
  };
  var rowsMatched = filterInMemoryFields([row], {
    'selector': selector
  }, Object.keys(selector));
  return rowsMatched && rowsMatched.length === 1;
}

exports.massageSelector = massageSelector;
exports.matchesSelector = matchesSelector;
exports.filterInMemoryFields = filterInMemoryFields;
exports.createFieldSorter = createFieldSorter;
exports.rowFilter = rowFilter;
exports.isCombinationalField = isCombinationalField;
exports.getKey = getKey;
exports.getValue = getValue;
exports.getFieldFromDoc = getFieldFromDoc;
exports.setFieldInDoc = setFieldInDoc;
exports.compare = compare;
exports.parseField = parseField;

},{"32":32,"40":40}],40:[function(require,module,exports){
'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopDefault(ex) {
  return ex && _typeof(ex) === 'object' && 'default' in ex ? ex['default'] : ex;
}

var getArguments = _interopDefault(require(2));

var pouchdbCollections = require(33);

var inherits = _interopDefault(require(26));

var immediate = _interopDefault(require(20));

var pouchdbErrors = require(35);

var EventEmitter = _interopDefault(require(10));

var uuid = require(65);

var pouchdbMd5 = require(37);

function isBinaryObject(object) {
  return typeof ArrayBuffer !== 'undefined' && object instanceof ArrayBuffer || typeof Blob !== 'undefined' && object instanceof Blob;
}

function cloneArrayBuffer(buff) {
  if (typeof buff.slice === 'function') {
    return buff.slice(0);
  } // IE10-11 slice() polyfill


  var target = new ArrayBuffer(buff.byteLength);
  var targetArray = new Uint8Array(target);
  var sourceArray = new Uint8Array(buff);
  targetArray.set(sourceArray);
  return target;
}

function cloneBinaryObject(object) {
  if (object instanceof ArrayBuffer) {
    return cloneArrayBuffer(object);
  }

  var size = object.size;
  var type = object.type; // Blob

  if (typeof object.slice === 'function') {
    return object.slice(0, size, type);
  } // PhantomJS slice() replacement


  return object.webkitSlice(0, size, type);
} // most of this is borrowed from lodash.isPlainObject:
// https://github.com/fis-components/lodash.isplainobject/
// blob/29c358140a74f252aeb08c9eb28bef86f2217d4a/index.js


var funcToString = Function.prototype.toString;
var objectCtorString = funcToString.call(Object);

function isPlainObject(value) {
  var proto = Object.getPrototypeOf(value);
  /* istanbul ignore if */

  if (proto === null) {
    // not sure when this happens, but I guess it can
    return true;
  }

  var Ctor = proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}

function clone(object) {
  var newObject;
  var i;
  var len;

  if (!object || _typeof(object) !== 'object') {
    return object;
  }

  if (Array.isArray(object)) {
    newObject = [];

    for (i = 0, len = object.length; i < len; i++) {
      newObject[i] = clone(object[i]);
    }

    return newObject;
  } // special case: to avoid inconsistencies between IndexedDB
  // and other backends, we automatically stringify Dates


  if (object instanceof Date) {
    return object.toISOString();
  }

  if (isBinaryObject(object)) {
    return cloneBinaryObject(object);
  }

  if (!isPlainObject(object)) {
    return object; // don't clone objects like Workers
  }

  newObject = {};

  for (i in object) {
    /* istanbul ignore else */
    if (Object.prototype.hasOwnProperty.call(object, i)) {
      var value = clone(object[i]);

      if (typeof value !== 'undefined') {
        newObject[i] = value;
      }
    }
  }

  return newObject;
}

function once(fun) {
  var called = false;
  return getArguments(function (args) {
    /* istanbul ignore if */
    if (called) {
      // this is a smoke test and should never actually happen
      throw new Error('once called more than once');
    } else {
      called = true;
      fun.apply(this, args);
    }
  });
}

function toPromise(func) {
  //create the function we will be returning
  return getArguments(function (args) {
    // Clone arguments
    args = clone(args);
    var self = this; // if the last argument is a function, assume its a callback

    var usedCB = typeof args[args.length - 1] === 'function' ? args.pop() : false;
    var promise = new Promise(function (fulfill, reject) {
      var resp;

      try {
        var callback = once(function (err, mesg) {
          if (err) {
            reject(err);
          } else {
            fulfill(mesg);
          }
        }); // create a callback for this invocation
        // apply the function in the orig context

        args.push(callback);
        resp = func.apply(self, args);

        if (resp && typeof resp.then === 'function') {
          fulfill(resp);
        }
      } catch (e) {
        reject(e);
      }
    }); // if there is a callback, call it back

    if (usedCB) {
      promise.then(function (result) {
        usedCB(null, result);
      }, usedCB);
    }

    return promise;
  });
}

function logApiCall(self, name, args) {
  /* istanbul ignore if */
  if (self.constructor.listeners('debug').length) {
    var logArgs = ['api', self.name, name];

    for (var i = 0; i < args.length - 1; i++) {
      logArgs.push(args[i]);
    }

    self.constructor.emit('debug', logArgs); // override the callback itself to log the response

    var origCallback = args[args.length - 1];

    args[args.length - 1] = function (err, res) {
      var responseArgs = ['api', self.name, name];
      responseArgs = responseArgs.concat(err ? ['error', err] : ['success', res]);
      self.constructor.emit('debug', responseArgs);
      origCallback(err, res);
    };
  }
}

function adapterFun(name, callback) {
  return toPromise(getArguments(function (args) {
    if (this._closed) {
      return Promise.reject(new Error('database is closed'));
    }

    if (this._destroyed) {
      return Promise.reject(new Error('database is destroyed'));
    }

    var self = this;
    logApiCall(self, name, args);

    if (!this.taskqueue.isReady) {
      return new Promise(function (fulfill, reject) {
        self.taskqueue.addTask(function (failed) {
          if (failed) {
            reject(failed);
          } else {
            fulfill(self[name].apply(self, args));
          }
        });
      });
    }

    return callback.apply(this, args);
  }));
} // like underscore/lodash _.pick()


function pick(obj, arr) {
  var res = {};

  for (var i = 0, len = arr.length; i < len; i++) {
    var prop = arr[i];

    if (prop in obj) {
      res[prop] = obj[prop];
    }
  }

  return res;
} // Most browsers throttle concurrent requests at 6, so it's silly
// to shim _bulk_get by trying to launch potentially hundreds of requests
// and then letting the majority time out. We can handle this ourselves.


var MAX_NUM_CONCURRENT_REQUESTS = 6;

function identityFunction(x) {
  return x;
}

function formatResultForOpenRevsGet(result) {
  return [{
    ok: result
  }];
} // shim for P/CouchDB adapters that don't directly implement _bulk_get


function bulkGet(db, opts, callback) {
  var requests = opts.docs; // consolidate into one request per doc if possible

  var requestsById = new pouchdbCollections.Map();
  requests.forEach(function (request) {
    if (requestsById.has(request.id)) {
      requestsById.get(request.id).push(request);
    } else {
      requestsById.set(request.id, [request]);
    }
  });
  var numDocs = requestsById.size;
  var numDone = 0;
  var perDocResults = new Array(numDocs);

  function collapseResultsAndFinish() {
    var results = [];
    perDocResults.forEach(function (res) {
      res.docs.forEach(function (info) {
        results.push({
          id: res.id,
          docs: [info]
        });
      });
    });
    callback(null, {
      results: results
    });
  }

  function checkDone() {
    if (++numDone === numDocs) {
      collapseResultsAndFinish();
    }
  }

  function gotResult(docIndex, id, docs) {
    perDocResults[docIndex] = {
      id: id,
      docs: docs
    };
    checkDone();
  }

  var allRequests = [];
  requestsById.forEach(function (value, key) {
    allRequests.push(key);
  });
  var i = 0;

  function nextBatch() {
    if (i >= allRequests.length) {
      return;
    }

    var upTo = Math.min(i + MAX_NUM_CONCURRENT_REQUESTS, allRequests.length);
    var batch = allRequests.slice(i, upTo);
    processBatch(batch, i);
    i += batch.length;
  }

  function processBatch(batch, offset) {
    batch.forEach(function (docId, j) {
      var docIdx = offset + j;
      var docRequests = requestsById.get(docId); // just use the first request as the "template"
      // TODO: The _bulk_get API allows for more subtle use cases than this,
      // but for now it is unlikely that there will be a mix of different
      // "atts_since" or "attachments" in the same request, since it's just
      // replicate.js that is using this for the moment.
      // Also, atts_since is aspirational, since we don't support it yet.

      var docOpts = pick(docRequests[0], ['atts_since', 'attachments']);
      docOpts.open_revs = docRequests.map(function (request) {
        // rev is optional, open_revs disallowed
        return request.rev;
      }); // remove falsey / undefined revisions

      docOpts.open_revs = docOpts.open_revs.filter(identityFunction);
      var formatResult = identityFunction;

      if (docOpts.open_revs.length === 0) {
        delete docOpts.open_revs; // when fetching only the "winning" leaf,
        // transform the result so it looks like an open_revs
        // request

        formatResult = formatResultForOpenRevsGet;
      } // globally-supplied options


      ['revs', 'attachments', 'binary', 'ajax', 'latest'].forEach(function (param) {
        if (param in opts) {
          docOpts[param] = opts[param];
        }
      });
      db.get(docId, docOpts, function (err, res) {
        var result;
        /* istanbul ignore if */

        if (err) {
          result = [{
            error: err
          }];
        } else {
          result = formatResult(res);
        }

        gotResult(docIdx, docId, result);
        nextBatch();
      });
    });
  }

  nextBatch();
}

var hasLocal;

try {
  localStorage.setItem('_pouch_check_localstorage', 1);
  hasLocal = !!localStorage.getItem('_pouch_check_localstorage');
} catch (e) {
  hasLocal = false;
}

function hasLocalStorage() {
  return hasLocal;
} // Custom nextTick() shim for browsers. In node, this will just be process.nextTick(). We


inherits(Changes, EventEmitter);
/* istanbul ignore next */

function attachBrowserEvents(self) {
  if (hasLocalStorage()) {
    addEventListener("storage", function (e) {
      self.emit(e.key);
    });
  }
}

function Changes() {
  EventEmitter.call(this);
  this._listeners = {};
  attachBrowserEvents(this);
}

Changes.prototype.addListener = function (dbName, id, db, opts) {
  /* istanbul ignore if */
  if (this._listeners[id]) {
    return;
  }

  var self = this;
  var inprogress = false;

  function eventFunction() {
    /* istanbul ignore if */
    if (!self._listeners[id]) {
      return;
    }

    if (inprogress) {
      inprogress = 'waiting';
      return;
    }

    inprogress = true;
    var changesOpts = pick(opts, ['style', 'include_docs', 'attachments', 'conflicts', 'filter', 'doc_ids', 'view', 'since', 'query_params', 'binary', 'return_docs']);
    /* istanbul ignore next */

    function onError() {
      inprogress = false;
    }

    db.changes(changesOpts).on('change', function (c) {
      if (c.seq > opts.since && !opts.cancelled) {
        opts.since = c.seq;
        opts.onChange(c);
      }
    }).on('complete', function () {
      if (inprogress === 'waiting') {
        immediate(eventFunction);
      }

      inprogress = false;
    }).on('error', onError);
  }

  this._listeners[id] = eventFunction;
  this.on(dbName, eventFunction);
};

Changes.prototype.removeListener = function (dbName, id) {
  /* istanbul ignore if */
  if (!(id in this._listeners)) {
    return;
  }

  EventEmitter.prototype.removeListener.call(this, dbName, this._listeners[id]);
  delete this._listeners[id];
};
/* istanbul ignore next */


Changes.prototype.notifyLocalWindows = function (dbName) {
  //do a useless change on a storage thing
  //in order to get other windows's listeners to activate
  if (hasLocalStorage()) {
    localStorage[dbName] = localStorage[dbName] === "a" ? "b" : "a";
  }
};

Changes.prototype.notify = function (dbName) {
  this.emit(dbName);
  this.notifyLocalWindows(dbName);
};

function guardedConsole(method) {
  /* istanbul ignore else */
  if (typeof console !== 'undefined' && typeof console[method] === 'function') {
    var args = Array.prototype.slice.call(arguments, 1);
    console[method].apply(console, args);
  }
}

function randomNumber(min, max) {
  var maxTimeout = 600000; // Hard-coded default of 10 minutes

  min = parseInt(min, 10) || 0;
  max = parseInt(max, 10);

  if (max !== max || max <= min) {
    max = (min || 1) << 1; //doubling
  } else {
    max = max + 1;
  } // In order to not exceed maxTimeout, pick a random value between half of maxTimeout and maxTimeout


  if (max > maxTimeout) {
    min = maxTimeout >> 1; // divide by two

    max = maxTimeout;
  }

  var ratio = Math.random();
  var range = max - min;
  return ~~(range * ratio + min); // ~~ coerces to an int, but fast.
}

function defaultBackOff(min) {
  var max = 0;

  if (!min) {
    max = 2000;
  }

  return randomNumber(min, max);
} // designed to give info to browser users, who are disturbed
// when they see http errors in the console


function explainError(status, str) {
  guardedConsole('info', 'The above ' + status + ' is totally normal. ' + str);
}

var assign;
{
  if (typeof Object.assign === 'function') {
    assign = Object.assign;
  } else {
    // lite Object.assign polyfill based on
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
    assign = function assign(target) {
      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource != null) {
          // Skip over if undefined or null
          for (var nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }

      return to;
    };
  }
}
var assign$1 = assign;

function tryFilter(filter, doc, req) {
  try {
    return !filter(doc, req);
  } catch (err) {
    var msg = 'Filter function threw: ' + err.toString();
    return pouchdbErrors.createError(pouchdbErrors.BAD_REQUEST, msg);
  }
}

function filterChange(opts) {
  var req = {};
  var hasFilter = opts.filter && typeof opts.filter === 'function';
  req.query = opts.query_params;
  return function filter(change) {
    if (!change.doc) {
      // CSG sends events on the changes feed that don't have documents,
      // this hack makes a whole lot of existing code robust.
      change.doc = {};
    }

    var filterReturn = hasFilter && tryFilter(opts.filter, change.doc, req);

    if (_typeof(filterReturn) === 'object') {
      return filterReturn;
    }

    if (filterReturn) {
      return false;
    }

    if (!opts.include_docs) {
      delete change.doc;
    } else if (!opts.attachments) {
      for (var att in change.doc._attachments) {
        /* istanbul ignore else */
        if (change.doc._attachments.hasOwnProperty(att)) {
          change.doc._attachments[att].stub = true;
        }
      }
    }

    return true;
  };
}

function flatten(arrs) {
  var res = [];

  for (var i = 0, len = arrs.length; i < len; i++) {
    res = res.concat(arrs[i]);
  }

  return res;
} // shim for Function.prototype.name,
// for browsers that don't support it like IE

/* istanbul ignore next */


function f() {}

var hasName = f.name;
var res; // We dont run coverage in IE

/* istanbul ignore else */

if (hasName) {
  res = function res(fun) {
    return fun.name;
  };
} else {
  res = function res(fun) {
    var match = fun.toString().match(/^\s*function\s*(?:(\S+)\s*)?\(/);

    if (match && match[1]) {
      return match[1];
    } else {
      return '';
    }
  };
}

var res$1 = res; // Determine id an ID is valid
//   - invalid IDs begin with an underescore that does not begin '_design' or
//     '_local'
//   - any other string value is a valid id
// Returns the specific error object for each case

function invalidIdError(id) {
  var err;

  if (!id) {
    err = pouchdbErrors.createError(pouchdbErrors.MISSING_ID);
  } else if (typeof id !== 'string') {
    err = pouchdbErrors.createError(pouchdbErrors.INVALID_ID);
  } else if (/^_/.test(id) && !/^_(design|local)/.test(id)) {
    err = pouchdbErrors.createError(pouchdbErrors.RESERVED_ID);
  }

  if (err) {
    throw err;
  }
} // Checks if a PouchDB object is "remote" or not. This is


function isRemote(db) {
  if (typeof db._remote === 'boolean') {
    return db._remote;
  }
  /* istanbul ignore next */


  if (typeof db.type === 'function') {
    guardedConsole('warn', 'db.type() is deprecated and will be removed in ' + 'a future version of PouchDB');
    return db.type() === 'http';
  }
  /* istanbul ignore next */


  return false;
}

function listenerCount(ee, type) {
  return 'listenerCount' in ee ? ee.listenerCount(type) : EventEmitter.listenerCount(ee, type);
}

function parseDesignDocFunctionName(s) {
  if (!s) {
    return null;
  }

  var parts = s.split('/');

  if (parts.length === 2) {
    return parts;
  }

  if (parts.length === 1) {
    return [s, s];
  }

  return null;
}

function normalizeDesignDocFunctionName(s) {
  var normalized = parseDesignDocFunctionName(s);
  return normalized ? normalized.join('/') : null;
} // originally parseUri 1.2.2, now patched by us
// (c) Steven Levithan <stevenlevithan.com>
// MIT License


var keys = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
var qName = "queryKey";
var qParser = /(?:^|&)([^&=]*)=?([^&]*)/g; // use the "loose" parser

/* eslint maxlen: 0, no-useless-escape: 0 */

var parser = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

function parseUri(str) {
  var m = parser.exec(str);
  var uri = {};
  var i = 14;

  while (i--) {
    var key = keys[i];
    var value = m[i] || "";
    var encoded = ['user', 'password'].indexOf(key) !== -1;
    uri[key] = encoded ? decodeURIComponent(value) : value;
  }

  uri[qName] = {};
  uri[keys[12]].replace(qParser, function ($0, $1, $2) {
    if ($1) {
      uri[qName][$1] = $2;
    }
  });
  return uri;
} // Based on https://github.com/alexdavid/scope-eval v0.0.3
// (source: https://unpkg.com/scope-eval@0.0.3/scope_eval.js)
// This is basically just a wrapper around new Function()


function scopeEval(source, scope) {
  var keys = [];
  var values = [];

  for (var key in scope) {
    if (scope.hasOwnProperty(key)) {
      keys.push(key);
      values.push(scope[key]);
    }
  }

  keys.push(source);
  return Function.apply(null, keys).apply(null, values);
} // this is essentially the "update sugar" function from daleharvey/pouchdb#1388
// the diffFun tells us what delta to apply to the doc.  it either returns
// the doc, or false if it doesn't need to do an update after all


function upsert(db, docId, diffFun) {
  return new Promise(function (fulfill, reject) {
    db.get(docId, function (err, doc) {
      if (err) {
        /* istanbul ignore next */
        if (err.status !== 404) {
          return reject(err);
        }

        doc = {};
      } // the user might change the _rev, so save it for posterity


      var docRev = doc._rev;
      var newDoc = diffFun(doc);

      if (!newDoc) {
        // if the diffFun returns falsy, we short-circuit as
        // an optimization
        return fulfill({
          updated: false,
          rev: docRev
        });
      } // users aren't allowed to modify these values,
      // so reset them here


      newDoc._id = docId;
      newDoc._rev = docRev;
      fulfill(tryAndPut(db, newDoc, diffFun));
    });
  });
}

function tryAndPut(db, doc, diffFun) {
  return db.put(doc).then(function (res) {
    return {
      updated: true,
      rev: res.rev
    };
  }, function (err) {
    /* istanbul ignore next */
    if (err.status !== 409) {
      throw err;
    }

    return upsert(db, doc._id, diffFun);
  });
}

function rev(doc, deterministic_revs) {
  var clonedDoc = clone(doc);

  if (!deterministic_revs) {
    return uuid.v4().replace(/-/g, '').toLowerCase();
  }

  delete clonedDoc._rev_tree;
  return pouchdbMd5.stringMd5(JSON.stringify(clonedDoc));
}

var uuid$1 = uuid.v4; // mimic old import, only v4 is ever used elsewhere

exports.adapterFun = adapterFun;
exports.assign = assign$1;
exports.bulkGetShim = bulkGet;
exports.changesHandler = Changes;
exports.clone = clone;
exports.defaultBackOff = defaultBackOff;
exports.explainError = explainError;
exports.filterChange = filterChange;
exports.flatten = flatten;
exports.functionName = res$1;
exports.guardedConsole = guardedConsole;
exports.hasLocalStorage = hasLocalStorage;
exports.invalidIdError = invalidIdError;
exports.isRemote = isRemote;
exports.listenerCount = listenerCount;
exports.nextTick = immediate;
exports.normalizeDdocFunctionName = normalizeDesignDocFunctionName;
exports.once = once;
exports.parseDdocFunctionName = parseDesignDocFunctionName;
exports.parseUri = parseUri;
exports.pick = pick;
exports.rev = rev;
exports.scopeEval = scopeEval;
exports.toPromise = toPromise;
exports.upsert = upsert;
exports.uuid = uuid$1;

},{"10":10,"2":2,"20":20,"26":26,"33":33,"35":35,"37":37,"65":65}],41:[function(require,module,exports){
"use strict";

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

},{}],42:[function(require,module,exports){
module.exports=[
"ac",
"com.ac",
"edu.ac",
"gov.ac",
"net.ac",
"mil.ac",
"org.ac",
"ad",
"nom.ad",
"ae",
"co.ae",
"net.ae",
"org.ae",
"sch.ae",
"ac.ae",
"gov.ae",
"mil.ae",
"aero",
"accident-investigation.aero",
"accident-prevention.aero",
"aerobatic.aero",
"aeroclub.aero",
"aerodrome.aero",
"agents.aero",
"aircraft.aero",
"airline.aero",
"airport.aero",
"air-surveillance.aero",
"airtraffic.aero",
"air-traffic-control.aero",
"ambulance.aero",
"amusement.aero",
"association.aero",
"author.aero",
"ballooning.aero",
"broker.aero",
"caa.aero",
"cargo.aero",
"catering.aero",
"certification.aero",
"championship.aero",
"charter.aero",
"civilaviation.aero",
"club.aero",
"conference.aero",
"consultant.aero",
"consulting.aero",
"control.aero",
"council.aero",
"crew.aero",
"design.aero",
"dgca.aero",
"educator.aero",
"emergency.aero",
"engine.aero",
"engineer.aero",
"entertainment.aero",
"equipment.aero",
"exchange.aero",
"express.aero",
"federation.aero",
"flight.aero",
"freight.aero",
"fuel.aero",
"gliding.aero",
"government.aero",
"groundhandling.aero",
"group.aero",
"hanggliding.aero",
"homebuilt.aero",
"insurance.aero",
"journal.aero",
"journalist.aero",
"leasing.aero",
"logistics.aero",
"magazine.aero",
"maintenance.aero",
"media.aero",
"microlight.aero",
"modelling.aero",
"navigation.aero",
"parachuting.aero",
"paragliding.aero",
"passenger-association.aero",
"pilot.aero",
"press.aero",
"production.aero",
"recreation.aero",
"repbody.aero",
"res.aero",
"research.aero",
"rotorcraft.aero",
"safety.aero",
"scientist.aero",
"services.aero",
"show.aero",
"skydiving.aero",
"software.aero",
"student.aero",
"trader.aero",
"trading.aero",
"trainer.aero",
"union.aero",
"workinggroup.aero",
"works.aero",
"af",
"gov.af",
"com.af",
"org.af",
"net.af",
"edu.af",
"ag",
"com.ag",
"org.ag",
"net.ag",
"co.ag",
"nom.ag",
"ai",
"off.ai",
"com.ai",
"net.ai",
"org.ai",
"al",
"com.al",
"edu.al",
"gov.al",
"mil.al",
"net.al",
"org.al",
"am",
"co.am",
"com.am",
"commune.am",
"net.am",
"org.am",
"ao",
"ed.ao",
"gv.ao",
"og.ao",
"co.ao",
"pb.ao",
"it.ao",
"aq",
"ar",
"com.ar",
"edu.ar",
"gob.ar",
"gov.ar",
"int.ar",
"mil.ar",
"musica.ar",
"net.ar",
"org.ar",
"tur.ar",
"arpa",
"e164.arpa",
"in-addr.arpa",
"ip6.arpa",
"iris.arpa",
"uri.arpa",
"urn.arpa",
"as",
"gov.as",
"asia",
"at",
"ac.at",
"co.at",
"gv.at",
"or.at",
"au",
"com.au",
"net.au",
"org.au",
"edu.au",
"gov.au",
"asn.au",
"id.au",
"info.au",
"conf.au",
"oz.au",
"act.au",
"nsw.au",
"nt.au",
"qld.au",
"sa.au",
"tas.au",
"vic.au",
"wa.au",
"act.edu.au",
"catholic.edu.au",
"nsw.edu.au",
"nt.edu.au",
"qld.edu.au",
"sa.edu.au",
"tas.edu.au",
"vic.edu.au",
"wa.edu.au",
"qld.gov.au",
"sa.gov.au",
"tas.gov.au",
"vic.gov.au",
"wa.gov.au",
"education.tas.edu.au",
"schools.nsw.edu.au",
"aw",
"com.aw",
"ax",
"az",
"com.az",
"net.az",
"int.az",
"gov.az",
"org.az",
"edu.az",
"info.az",
"pp.az",
"mil.az",
"name.az",
"pro.az",
"biz.az",
"ba",
"com.ba",
"edu.ba",
"gov.ba",
"mil.ba",
"net.ba",
"org.ba",
"bb",
"biz.bb",
"co.bb",
"com.bb",
"edu.bb",
"gov.bb",
"info.bb",
"net.bb",
"org.bb",
"store.bb",
"tv.bb",
"*.bd",
"be",
"ac.be",
"bf",
"gov.bf",
"bg",
"a.bg",
"b.bg",
"c.bg",
"d.bg",
"e.bg",
"f.bg",
"g.bg",
"h.bg",
"i.bg",
"j.bg",
"k.bg",
"l.bg",
"m.bg",
"n.bg",
"o.bg",
"p.bg",
"q.bg",
"r.bg",
"s.bg",
"t.bg",
"u.bg",
"v.bg",
"w.bg",
"x.bg",
"y.bg",
"z.bg",
"0.bg",
"1.bg",
"2.bg",
"3.bg",
"4.bg",
"5.bg",
"6.bg",
"7.bg",
"8.bg",
"9.bg",
"bh",
"com.bh",
"edu.bh",
"net.bh",
"org.bh",
"gov.bh",
"bi",
"co.bi",
"com.bi",
"edu.bi",
"or.bi",
"org.bi",
"biz",
"bj",
"asso.bj",
"barreau.bj",
"gouv.bj",
"bm",
"com.bm",
"edu.bm",
"gov.bm",
"net.bm",
"org.bm",
"bn",
"com.bn",
"edu.bn",
"gov.bn",
"net.bn",
"org.bn",
"bo",
"com.bo",
"edu.bo",
"gob.bo",
"int.bo",
"org.bo",
"net.bo",
"mil.bo",
"tv.bo",
"web.bo",
"academia.bo",
"agro.bo",
"arte.bo",
"blog.bo",
"bolivia.bo",
"ciencia.bo",
"cooperativa.bo",
"democracia.bo",
"deporte.bo",
"ecologia.bo",
"economia.bo",
"empresa.bo",
"indigena.bo",
"industria.bo",
"info.bo",
"medicina.bo",
"movimiento.bo",
"musica.bo",
"natural.bo",
"nombre.bo",
"noticias.bo",
"patria.bo",
"politica.bo",
"profesional.bo",
"plurinacional.bo",
"pueblo.bo",
"revista.bo",
"salud.bo",
"tecnologia.bo",
"tksat.bo",
"transporte.bo",
"wiki.bo",
"br",
"9guacu.br",
"abc.br",
"adm.br",
"adv.br",
"agr.br",
"aju.br",
"am.br",
"anani.br",
"aparecida.br",
"arq.br",
"art.br",
"ato.br",
"b.br",
"barueri.br",
"belem.br",
"bhz.br",
"bio.br",
"blog.br",
"bmd.br",
"boavista.br",
"bsb.br",
"campinagrande.br",
"campinas.br",
"caxias.br",
"cim.br",
"cng.br",
"cnt.br",
"com.br",
"contagem.br",
"coop.br",
"cri.br",
"cuiaba.br",
"curitiba.br",
"def.br",
"ecn.br",
"eco.br",
"edu.br",
"emp.br",
"eng.br",
"esp.br",
"etc.br",
"eti.br",
"far.br",
"feira.br",
"flog.br",
"floripa.br",
"fm.br",
"fnd.br",
"fortal.br",
"fot.br",
"foz.br",
"fst.br",
"g12.br",
"ggf.br",
"goiania.br",
"gov.br",
"ac.gov.br",
"al.gov.br",
"am.gov.br",
"ap.gov.br",
"ba.gov.br",
"ce.gov.br",
"df.gov.br",
"es.gov.br",
"go.gov.br",
"ma.gov.br",
"mg.gov.br",
"ms.gov.br",
"mt.gov.br",
"pa.gov.br",
"pb.gov.br",
"pe.gov.br",
"pi.gov.br",
"pr.gov.br",
"rj.gov.br",
"rn.gov.br",
"ro.gov.br",
"rr.gov.br",
"rs.gov.br",
"sc.gov.br",
"se.gov.br",
"sp.gov.br",
"to.gov.br",
"gru.br",
"imb.br",
"ind.br",
"inf.br",
"jab.br",
"jampa.br",
"jdf.br",
"joinville.br",
"jor.br",
"jus.br",
"leg.br",
"lel.br",
"londrina.br",
"macapa.br",
"maceio.br",
"manaus.br",
"maringa.br",
"mat.br",
"med.br",
"mil.br",
"morena.br",
"mp.br",
"mus.br",
"natal.br",
"net.br",
"niteroi.br",
"*.nom.br",
"not.br",
"ntr.br",
"odo.br",
"ong.br",
"org.br",
"osasco.br",
"palmas.br",
"poa.br",
"ppg.br",
"pro.br",
"psc.br",
"psi.br",
"pvh.br",
"qsl.br",
"radio.br",
"rec.br",
"recife.br",
"ribeirao.br",
"rio.br",
"riobranco.br",
"riopreto.br",
"salvador.br",
"sampa.br",
"santamaria.br",
"santoandre.br",
"saobernardo.br",
"saogonca.br",
"sjc.br",
"slg.br",
"slz.br",
"sorocaba.br",
"srv.br",
"taxi.br",
"tc.br",
"teo.br",
"the.br",
"tmp.br",
"trd.br",
"tur.br",
"tv.br",
"udi.br",
"vet.br",
"vix.br",
"vlog.br",
"wiki.br",
"zlg.br",
"bs",
"com.bs",
"net.bs",
"org.bs",
"edu.bs",
"gov.bs",
"bt",
"com.bt",
"edu.bt",
"gov.bt",
"net.bt",
"org.bt",
"bv",
"bw",
"co.bw",
"org.bw",
"by",
"gov.by",
"mil.by",
"com.by",
"of.by",
"bz",
"com.bz",
"net.bz",
"org.bz",
"edu.bz",
"gov.bz",
"ca",
"ab.ca",
"bc.ca",
"mb.ca",
"nb.ca",
"nf.ca",
"nl.ca",
"ns.ca",
"nt.ca",
"nu.ca",
"on.ca",
"pe.ca",
"qc.ca",
"sk.ca",
"yk.ca",
"gc.ca",
"cat",
"cc",
"cd",
"gov.cd",
"cf",
"cg",
"ch",
"ci",
"org.ci",
"or.ci",
"com.ci",
"co.ci",
"edu.ci",
"ed.ci",
"ac.ci",
"net.ci",
"go.ci",
"asso.ci",
"aéroport.ci",
"int.ci",
"presse.ci",
"md.ci",
"gouv.ci",
"*.ck",
"!www.ck",
"cl",
"aprendemas.cl",
"co.cl",
"gob.cl",
"gov.cl",
"mil.cl",
"cm",
"co.cm",
"com.cm",
"gov.cm",
"net.cm",
"cn",
"ac.cn",
"com.cn",
"edu.cn",
"gov.cn",
"net.cn",
"org.cn",
"mil.cn",
"公司.cn",
"网络.cn",
"網絡.cn",
"ah.cn",
"bj.cn",
"cq.cn",
"fj.cn",
"gd.cn",
"gs.cn",
"gz.cn",
"gx.cn",
"ha.cn",
"hb.cn",
"he.cn",
"hi.cn",
"hl.cn",
"hn.cn",
"jl.cn",
"js.cn",
"jx.cn",
"ln.cn",
"nm.cn",
"nx.cn",
"qh.cn",
"sc.cn",
"sd.cn",
"sh.cn",
"sn.cn",
"sx.cn",
"tj.cn",
"xj.cn",
"xz.cn",
"yn.cn",
"zj.cn",
"hk.cn",
"mo.cn",
"tw.cn",
"co",
"arts.co",
"com.co",
"edu.co",
"firm.co",
"gov.co",
"info.co",
"int.co",
"mil.co",
"net.co",
"nom.co",
"org.co",
"rec.co",
"web.co",
"com",
"coop",
"cr",
"ac.cr",
"co.cr",
"ed.cr",
"fi.cr",
"go.cr",
"or.cr",
"sa.cr",
"cu",
"com.cu",
"edu.cu",
"org.cu",
"net.cu",
"gov.cu",
"inf.cu",
"cv",
"cw",
"com.cw",
"edu.cw",
"net.cw",
"org.cw",
"cx",
"gov.cx",
"cy",
"ac.cy",
"biz.cy",
"com.cy",
"ekloges.cy",
"gov.cy",
"ltd.cy",
"name.cy",
"net.cy",
"org.cy",
"parliament.cy",
"press.cy",
"pro.cy",
"tm.cy",
"cz",
"de",
"dj",
"dk",
"dm",
"com.dm",
"net.dm",
"org.dm",
"edu.dm",
"gov.dm",
"do",
"art.do",
"com.do",
"edu.do",
"gob.do",
"gov.do",
"mil.do",
"net.do",
"org.do",
"sld.do",
"web.do",
"dz",
"com.dz",
"org.dz",
"net.dz",
"gov.dz",
"edu.dz",
"asso.dz",
"pol.dz",
"art.dz",
"ec",
"com.ec",
"info.ec",
"net.ec",
"fin.ec",
"k12.ec",
"med.ec",
"pro.ec",
"org.ec",
"edu.ec",
"gov.ec",
"gob.ec",
"mil.ec",
"edu",
"ee",
"edu.ee",
"gov.ee",
"riik.ee",
"lib.ee",
"med.ee",
"com.ee",
"pri.ee",
"aip.ee",
"org.ee",
"fie.ee",
"eg",
"com.eg",
"edu.eg",
"eun.eg",
"gov.eg",
"mil.eg",
"name.eg",
"net.eg",
"org.eg",
"sci.eg",
"*.er",
"es",
"com.es",
"nom.es",
"org.es",
"gob.es",
"edu.es",
"et",
"com.et",
"gov.et",
"org.et",
"edu.et",
"biz.et",
"name.et",
"info.et",
"net.et",
"eu",
"fi",
"aland.fi",
"fj",
"ac.fj",
"biz.fj",
"com.fj",
"gov.fj",
"info.fj",
"mil.fj",
"name.fj",
"net.fj",
"org.fj",
"pro.fj",
"*.fk",
"fm",
"fo",
"fr",
"asso.fr",
"com.fr",
"gouv.fr",
"nom.fr",
"prd.fr",
"tm.fr",
"aeroport.fr",
"avocat.fr",
"avoues.fr",
"cci.fr",
"chambagri.fr",
"chirurgiens-dentistes.fr",
"experts-comptables.fr",
"geometre-expert.fr",
"greta.fr",
"huissier-justice.fr",
"medecin.fr",
"notaires.fr",
"pharmacien.fr",
"port.fr",
"veterinaire.fr",
"ga",
"gb",
"gd",
"ge",
"com.ge",
"edu.ge",
"gov.ge",
"org.ge",
"mil.ge",
"net.ge",
"pvt.ge",
"gf",
"gg",
"co.gg",
"net.gg",
"org.gg",
"gh",
"com.gh",
"edu.gh",
"gov.gh",
"org.gh",
"mil.gh",
"gi",
"com.gi",
"ltd.gi",
"gov.gi",
"mod.gi",
"edu.gi",
"org.gi",
"gl",
"co.gl",
"com.gl",
"edu.gl",
"net.gl",
"org.gl",
"gm",
"gn",
"ac.gn",
"com.gn",
"edu.gn",
"gov.gn",
"org.gn",
"net.gn",
"gov",
"gp",
"com.gp",
"net.gp",
"mobi.gp",
"edu.gp",
"org.gp",
"asso.gp",
"gq",
"gr",
"com.gr",
"edu.gr",
"net.gr",
"org.gr",
"gov.gr",
"gs",
"gt",
"com.gt",
"edu.gt",
"gob.gt",
"ind.gt",
"mil.gt",
"net.gt",
"org.gt",
"gu",
"com.gu",
"edu.gu",
"gov.gu",
"guam.gu",
"info.gu",
"net.gu",
"org.gu",
"web.gu",
"gw",
"gy",
"co.gy",
"com.gy",
"edu.gy",
"gov.gy",
"net.gy",
"org.gy",
"hk",
"com.hk",
"edu.hk",
"gov.hk",
"idv.hk",
"net.hk",
"org.hk",
"公司.hk",
"教育.hk",
"敎育.hk",
"政府.hk",
"個人.hk",
"个人.hk",
"箇人.hk",
"網络.hk",
"网络.hk",
"组織.hk",
"網絡.hk",
"网絡.hk",
"组织.hk",
"組織.hk",
"組织.hk",
"hm",
"hn",
"com.hn",
"edu.hn",
"org.hn",
"net.hn",
"mil.hn",
"gob.hn",
"hr",
"iz.hr",
"from.hr",
"name.hr",
"com.hr",
"ht",
"com.ht",
"shop.ht",
"firm.ht",
"info.ht",
"adult.ht",
"net.ht",
"pro.ht",
"org.ht",
"med.ht",
"art.ht",
"coop.ht",
"pol.ht",
"asso.ht",
"edu.ht",
"rel.ht",
"gouv.ht",
"perso.ht",
"hu",
"co.hu",
"info.hu",
"org.hu",
"priv.hu",
"sport.hu",
"tm.hu",
"2000.hu",
"agrar.hu",
"bolt.hu",
"casino.hu",
"city.hu",
"erotica.hu",
"erotika.hu",
"film.hu",
"forum.hu",
"games.hu",
"hotel.hu",
"ingatlan.hu",
"jogasz.hu",
"konyvelo.hu",
"lakas.hu",
"media.hu",
"news.hu",
"reklam.hu",
"sex.hu",
"shop.hu",
"suli.hu",
"szex.hu",
"tozsde.hu",
"utazas.hu",
"video.hu",
"id",
"ac.id",
"biz.id",
"co.id",
"desa.id",
"go.id",
"mil.id",
"my.id",
"net.id",
"or.id",
"ponpes.id",
"sch.id",
"web.id",
"ie",
"gov.ie",
"il",
"ac.il",
"co.il",
"gov.il",
"idf.il",
"k12.il",
"muni.il",
"net.il",
"org.il",
"im",
"ac.im",
"co.im",
"com.im",
"ltd.co.im",
"net.im",
"org.im",
"plc.co.im",
"tt.im",
"tv.im",
"in",
"co.in",
"firm.in",
"net.in",
"org.in",
"gen.in",
"ind.in",
"nic.in",
"ac.in",
"edu.in",
"res.in",
"gov.in",
"mil.in",
"info",
"int",
"eu.int",
"io",
"com.io",
"iq",
"gov.iq",
"edu.iq",
"mil.iq",
"com.iq",
"org.iq",
"net.iq",
"ir",
"ac.ir",
"co.ir",
"gov.ir",
"id.ir",
"net.ir",
"org.ir",
"sch.ir",
"ایران.ir",
"ايران.ir",
"is",
"net.is",
"com.is",
"edu.is",
"gov.is",
"org.is",
"int.is",
"it",
"gov.it",
"edu.it",
"abr.it",
"abruzzo.it",
"aosta-valley.it",
"aostavalley.it",
"bas.it",
"basilicata.it",
"cal.it",
"calabria.it",
"cam.it",
"campania.it",
"emilia-romagna.it",
"emiliaromagna.it",
"emr.it",
"friuli-v-giulia.it",
"friuli-ve-giulia.it",
"friuli-vegiulia.it",
"friuli-venezia-giulia.it",
"friuli-veneziagiulia.it",
"friuli-vgiulia.it",
"friuliv-giulia.it",
"friulive-giulia.it",
"friulivegiulia.it",
"friulivenezia-giulia.it",
"friuliveneziagiulia.it",
"friulivgiulia.it",
"fvg.it",
"laz.it",
"lazio.it",
"lig.it",
"liguria.it",
"lom.it",
"lombardia.it",
"lombardy.it",
"lucania.it",
"mar.it",
"marche.it",
"mol.it",
"molise.it",
"piedmont.it",
"piemonte.it",
"pmn.it",
"pug.it",
"puglia.it",
"sar.it",
"sardegna.it",
"sardinia.it",
"sic.it",
"sicilia.it",
"sicily.it",
"taa.it",
"tos.it",
"toscana.it",
"trentin-sud-tirol.it",
"trentin-süd-tirol.it",
"trentin-sudtirol.it",
"trentin-südtirol.it",
"trentin-sued-tirol.it",
"trentin-suedtirol.it",
"trentino-a-adige.it",
"trentino-aadige.it",
"trentino-alto-adige.it",
"trentino-altoadige.it",
"trentino-s-tirol.it",
"trentino-stirol.it",
"trentino-sud-tirol.it",
"trentino-süd-tirol.it",
"trentino-sudtirol.it",
"trentino-südtirol.it",
"trentino-sued-tirol.it",
"trentino-suedtirol.it",
"trentino.it",
"trentinoa-adige.it",
"trentinoaadige.it",
"trentinoalto-adige.it",
"trentinoaltoadige.it",
"trentinos-tirol.it",
"trentinostirol.it",
"trentinosud-tirol.it",
"trentinosüd-tirol.it",
"trentinosudtirol.it",
"trentinosüdtirol.it",
"trentinosued-tirol.it",
"trentinosuedtirol.it",
"trentinsud-tirol.it",
"trentinsüd-tirol.it",
"trentinsudtirol.it",
"trentinsüdtirol.it",
"trentinsued-tirol.it",
"trentinsuedtirol.it",
"tuscany.it",
"umb.it",
"umbria.it",
"val-d-aosta.it",
"val-daosta.it",
"vald-aosta.it",
"valdaosta.it",
"valle-aosta.it",
"valle-d-aosta.it",
"valle-daosta.it",
"valleaosta.it",
"valled-aosta.it",
"valledaosta.it",
"vallee-aoste.it",
"vallée-aoste.it",
"vallee-d-aoste.it",
"vallée-d-aoste.it",
"valleeaoste.it",
"valléeaoste.it",
"valleedaoste.it",
"valléedaoste.it",
"vao.it",
"vda.it",
"ven.it",
"veneto.it",
"ag.it",
"agrigento.it",
"al.it",
"alessandria.it",
"alto-adige.it",
"altoadige.it",
"an.it",
"ancona.it",
"andria-barletta-trani.it",
"andria-trani-barletta.it",
"andriabarlettatrani.it",
"andriatranibarletta.it",
"ao.it",
"aosta.it",
"aoste.it",
"ap.it",
"aq.it",
"aquila.it",
"ar.it",
"arezzo.it",
"ascoli-piceno.it",
"ascolipiceno.it",
"asti.it",
"at.it",
"av.it",
"avellino.it",
"ba.it",
"balsan-sudtirol.it",
"balsan-südtirol.it",
"balsan-suedtirol.it",
"balsan.it",
"bari.it",
"barletta-trani-andria.it",
"barlettatraniandria.it",
"belluno.it",
"benevento.it",
"bergamo.it",
"bg.it",
"bi.it",
"biella.it",
"bl.it",
"bn.it",
"bo.it",
"bologna.it",
"bolzano-altoadige.it",
"bolzano.it",
"bozen-sudtirol.it",
"bozen-südtirol.it",
"bozen-suedtirol.it",
"bozen.it",
"br.it",
"brescia.it",
"brindisi.it",
"bs.it",
"bt.it",
"bulsan-sudtirol.it",
"bulsan-südtirol.it",
"bulsan-suedtirol.it",
"bulsan.it",
"bz.it",
"ca.it",
"cagliari.it",
"caltanissetta.it",
"campidano-medio.it",
"campidanomedio.it",
"campobasso.it",
"carbonia-iglesias.it",
"carboniaiglesias.it",
"carrara-massa.it",
"carraramassa.it",
"caserta.it",
"catania.it",
"catanzaro.it",
"cb.it",
"ce.it",
"cesena-forli.it",
"cesena-forlì.it",
"cesenaforli.it",
"cesenaforlì.it",
"ch.it",
"chieti.it",
"ci.it",
"cl.it",
"cn.it",
"co.it",
"como.it",
"cosenza.it",
"cr.it",
"cremona.it",
"crotone.it",
"cs.it",
"ct.it",
"cuneo.it",
"cz.it",
"dell-ogliastra.it",
"dellogliastra.it",
"en.it",
"enna.it",
"fc.it",
"fe.it",
"fermo.it",
"ferrara.it",
"fg.it",
"fi.it",
"firenze.it",
"florence.it",
"fm.it",
"foggia.it",
"forli-cesena.it",
"forlì-cesena.it",
"forlicesena.it",
"forlìcesena.it",
"fr.it",
"frosinone.it",
"ge.it",
"genoa.it",
"genova.it",
"go.it",
"gorizia.it",
"gr.it",
"grosseto.it",
"iglesias-carbonia.it",
"iglesiascarbonia.it",
"im.it",
"imperia.it",
"is.it",
"isernia.it",
"kr.it",
"la-spezia.it",
"laquila.it",
"laspezia.it",
"latina.it",
"lc.it",
"le.it",
"lecce.it",
"lecco.it",
"li.it",
"livorno.it",
"lo.it",
"lodi.it",
"lt.it",
"lu.it",
"lucca.it",
"macerata.it",
"mantova.it",
"massa-carrara.it",
"massacarrara.it",
"matera.it",
"mb.it",
"mc.it",
"me.it",
"medio-campidano.it",
"mediocampidano.it",
"messina.it",
"mi.it",
"milan.it",
"milano.it",
"mn.it",
"mo.it",
"modena.it",
"monza-brianza.it",
"monza-e-della-brianza.it",
"monza.it",
"monzabrianza.it",
"monzaebrianza.it",
"monzaedellabrianza.it",
"ms.it",
"mt.it",
"na.it",
"naples.it",
"napoli.it",
"no.it",
"novara.it",
"nu.it",
"nuoro.it",
"og.it",
"ogliastra.it",
"olbia-tempio.it",
"olbiatempio.it",
"or.it",
"oristano.it",
"ot.it",
"pa.it",
"padova.it",
"padua.it",
"palermo.it",
"parma.it",
"pavia.it",
"pc.it",
"pd.it",
"pe.it",
"perugia.it",
"pesaro-urbino.it",
"pesarourbino.it",
"pescara.it",
"pg.it",
"pi.it",
"piacenza.it",
"pisa.it",
"pistoia.it",
"pn.it",
"po.it",
"pordenone.it",
"potenza.it",
"pr.it",
"prato.it",
"pt.it",
"pu.it",
"pv.it",
"pz.it",
"ra.it",
"ragusa.it",
"ravenna.it",
"rc.it",
"re.it",
"reggio-calabria.it",
"reggio-emilia.it",
"reggiocalabria.it",
"reggioemilia.it",
"rg.it",
"ri.it",
"rieti.it",
"rimini.it",
"rm.it",
"rn.it",
"ro.it",
"roma.it",
"rome.it",
"rovigo.it",
"sa.it",
"salerno.it",
"sassari.it",
"savona.it",
"si.it",
"siena.it",
"siracusa.it",
"so.it",
"sondrio.it",
"sp.it",
"sr.it",
"ss.it",
"suedtirol.it",
"südtirol.it",
"sv.it",
"ta.it",
"taranto.it",
"te.it",
"tempio-olbia.it",
"tempioolbia.it",
"teramo.it",
"terni.it",
"tn.it",
"to.it",
"torino.it",
"tp.it",
"tr.it",
"trani-andria-barletta.it",
"trani-barletta-andria.it",
"traniandriabarletta.it",
"tranibarlettaandria.it",
"trapani.it",
"trento.it",
"treviso.it",
"trieste.it",
"ts.it",
"turin.it",
"tv.it",
"ud.it",
"udine.it",
"urbino-pesaro.it",
"urbinopesaro.it",
"va.it",
"varese.it",
"vb.it",
"vc.it",
"ve.it",
"venezia.it",
"venice.it",
"verbania.it",
"vercelli.it",
"verona.it",
"vi.it",
"vibo-valentia.it",
"vibovalentia.it",
"vicenza.it",
"viterbo.it",
"vr.it",
"vs.it",
"vt.it",
"vv.it",
"je",
"co.je",
"net.je",
"org.je",
"*.jm",
"jo",
"com.jo",
"org.jo",
"net.jo",
"edu.jo",
"sch.jo",
"gov.jo",
"mil.jo",
"name.jo",
"jobs",
"jp",
"ac.jp",
"ad.jp",
"co.jp",
"ed.jp",
"go.jp",
"gr.jp",
"lg.jp",
"ne.jp",
"or.jp",
"aichi.jp",
"akita.jp",
"aomori.jp",
"chiba.jp",
"ehime.jp",
"fukui.jp",
"fukuoka.jp",
"fukushima.jp",
"gifu.jp",
"gunma.jp",
"hiroshima.jp",
"hokkaido.jp",
"hyogo.jp",
"ibaraki.jp",
"ishikawa.jp",
"iwate.jp",
"kagawa.jp",
"kagoshima.jp",
"kanagawa.jp",
"kochi.jp",
"kumamoto.jp",
"kyoto.jp",
"mie.jp",
"miyagi.jp",
"miyazaki.jp",
"nagano.jp",
"nagasaki.jp",
"nara.jp",
"niigata.jp",
"oita.jp",
"okayama.jp",
"okinawa.jp",
"osaka.jp",
"saga.jp",
"saitama.jp",
"shiga.jp",
"shimane.jp",
"shizuoka.jp",
"tochigi.jp",
"tokushima.jp",
"tokyo.jp",
"tottori.jp",
"toyama.jp",
"wakayama.jp",
"yamagata.jp",
"yamaguchi.jp",
"yamanashi.jp",
"栃木.jp",
"愛知.jp",
"愛媛.jp",
"兵庫.jp",
"熊本.jp",
"茨城.jp",
"北海道.jp",
"千葉.jp",
"和歌山.jp",
"長崎.jp",
"長野.jp",
"新潟.jp",
"青森.jp",
"静岡.jp",
"東京.jp",
"石川.jp",
"埼玉.jp",
"三重.jp",
"京都.jp",
"佐賀.jp",
"大分.jp",
"大阪.jp",
"奈良.jp",
"宮城.jp",
"宮崎.jp",
"富山.jp",
"山口.jp",
"山形.jp",
"山梨.jp",
"岩手.jp",
"岐阜.jp",
"岡山.jp",
"島根.jp",
"広島.jp",
"徳島.jp",
"沖縄.jp",
"滋賀.jp",
"神奈川.jp",
"福井.jp",
"福岡.jp",
"福島.jp",
"秋田.jp",
"群馬.jp",
"香川.jp",
"高知.jp",
"鳥取.jp",
"鹿児島.jp",
"*.kawasaki.jp",
"*.kitakyushu.jp",
"*.kobe.jp",
"*.nagoya.jp",
"*.sapporo.jp",
"*.sendai.jp",
"*.yokohama.jp",
"!city.kawasaki.jp",
"!city.kitakyushu.jp",
"!city.kobe.jp",
"!city.nagoya.jp",
"!city.sapporo.jp",
"!city.sendai.jp",
"!city.yokohama.jp",
"aisai.aichi.jp",
"ama.aichi.jp",
"anjo.aichi.jp",
"asuke.aichi.jp",
"chiryu.aichi.jp",
"chita.aichi.jp",
"fuso.aichi.jp",
"gamagori.aichi.jp",
"handa.aichi.jp",
"hazu.aichi.jp",
"hekinan.aichi.jp",
"higashiura.aichi.jp",
"ichinomiya.aichi.jp",
"inazawa.aichi.jp",
"inuyama.aichi.jp",
"isshiki.aichi.jp",
"iwakura.aichi.jp",
"kanie.aichi.jp",
"kariya.aichi.jp",
"kasugai.aichi.jp",
"kira.aichi.jp",
"kiyosu.aichi.jp",
"komaki.aichi.jp",
"konan.aichi.jp",
"kota.aichi.jp",
"mihama.aichi.jp",
"miyoshi.aichi.jp",
"nishio.aichi.jp",
"nisshin.aichi.jp",
"obu.aichi.jp",
"oguchi.aichi.jp",
"oharu.aichi.jp",
"okazaki.aichi.jp",
"owariasahi.aichi.jp",
"seto.aichi.jp",
"shikatsu.aichi.jp",
"shinshiro.aichi.jp",
"shitara.aichi.jp",
"tahara.aichi.jp",
"takahama.aichi.jp",
"tobishima.aichi.jp",
"toei.aichi.jp",
"togo.aichi.jp",
"tokai.aichi.jp",
"tokoname.aichi.jp",
"toyoake.aichi.jp",
"toyohashi.aichi.jp",
"toyokawa.aichi.jp",
"toyone.aichi.jp",
"toyota.aichi.jp",
"tsushima.aichi.jp",
"yatomi.aichi.jp",
"akita.akita.jp",
"daisen.akita.jp",
"fujisato.akita.jp",
"gojome.akita.jp",
"hachirogata.akita.jp",
"happou.akita.jp",
"higashinaruse.akita.jp",
"honjo.akita.jp",
"honjyo.akita.jp",
"ikawa.akita.jp",
"kamikoani.akita.jp",
"kamioka.akita.jp",
"katagami.akita.jp",
"kazuno.akita.jp",
"kitaakita.akita.jp",
"kosaka.akita.jp",
"kyowa.akita.jp",
"misato.akita.jp",
"mitane.akita.jp",
"moriyoshi.akita.jp",
"nikaho.akita.jp",
"noshiro.akita.jp",
"odate.akita.jp",
"oga.akita.jp",
"ogata.akita.jp",
"semboku.akita.jp",
"yokote.akita.jp",
"yurihonjo.akita.jp",
"aomori.aomori.jp",
"gonohe.aomori.jp",
"hachinohe.aomori.jp",
"hashikami.aomori.jp",
"hiranai.aomori.jp",
"hirosaki.aomori.jp",
"itayanagi.aomori.jp",
"kuroishi.aomori.jp",
"misawa.aomori.jp",
"mutsu.aomori.jp",
"nakadomari.aomori.jp",
"noheji.aomori.jp",
"oirase.aomori.jp",
"owani.aomori.jp",
"rokunohe.aomori.jp",
"sannohe.aomori.jp",
"shichinohe.aomori.jp",
"shingo.aomori.jp",
"takko.aomori.jp",
"towada.aomori.jp",
"tsugaru.aomori.jp",
"tsuruta.aomori.jp",
"abiko.chiba.jp",
"asahi.chiba.jp",
"chonan.chiba.jp",
"chosei.chiba.jp",
"choshi.chiba.jp",
"chuo.chiba.jp",
"funabashi.chiba.jp",
"futtsu.chiba.jp",
"hanamigawa.chiba.jp",
"ichihara.chiba.jp",
"ichikawa.chiba.jp",
"ichinomiya.chiba.jp",
"inzai.chiba.jp",
"isumi.chiba.jp",
"kamagaya.chiba.jp",
"kamogawa.chiba.jp",
"kashiwa.chiba.jp",
"katori.chiba.jp",
"katsuura.chiba.jp",
"kimitsu.chiba.jp",
"kisarazu.chiba.jp",
"kozaki.chiba.jp",
"kujukuri.chiba.jp",
"kyonan.chiba.jp",
"matsudo.chiba.jp",
"midori.chiba.jp",
"mihama.chiba.jp",
"minamiboso.chiba.jp",
"mobara.chiba.jp",
"mutsuzawa.chiba.jp",
"nagara.chiba.jp",
"nagareyama.chiba.jp",
"narashino.chiba.jp",
"narita.chiba.jp",
"noda.chiba.jp",
"oamishirasato.chiba.jp",
"omigawa.chiba.jp",
"onjuku.chiba.jp",
"otaki.chiba.jp",
"sakae.chiba.jp",
"sakura.chiba.jp",
"shimofusa.chiba.jp",
"shirako.chiba.jp",
"shiroi.chiba.jp",
"shisui.chiba.jp",
"sodegaura.chiba.jp",
"sosa.chiba.jp",
"tako.chiba.jp",
"tateyama.chiba.jp",
"togane.chiba.jp",
"tohnosho.chiba.jp",
"tomisato.chiba.jp",
"urayasu.chiba.jp",
"yachimata.chiba.jp",
"yachiyo.chiba.jp",
"yokaichiba.chiba.jp",
"yokoshibahikari.chiba.jp",
"yotsukaido.chiba.jp",
"ainan.ehime.jp",
"honai.ehime.jp",
"ikata.ehime.jp",
"imabari.ehime.jp",
"iyo.ehime.jp",
"kamijima.ehime.jp",
"kihoku.ehime.jp",
"kumakogen.ehime.jp",
"masaki.ehime.jp",
"matsuno.ehime.jp",
"matsuyama.ehime.jp",
"namikata.ehime.jp",
"niihama.ehime.jp",
"ozu.ehime.jp",
"saijo.ehime.jp",
"seiyo.ehime.jp",
"shikokuchuo.ehime.jp",
"tobe.ehime.jp",
"toon.ehime.jp",
"uchiko.ehime.jp",
"uwajima.ehime.jp",
"yawatahama.ehime.jp",
"echizen.fukui.jp",
"eiheiji.fukui.jp",
"fukui.fukui.jp",
"ikeda.fukui.jp",
"katsuyama.fukui.jp",
"mihama.fukui.jp",
"minamiechizen.fukui.jp",
"obama.fukui.jp",
"ohi.fukui.jp",
"ono.fukui.jp",
"sabae.fukui.jp",
"sakai.fukui.jp",
"takahama.fukui.jp",
"tsuruga.fukui.jp",
"wakasa.fukui.jp",
"ashiya.fukuoka.jp",
"buzen.fukuoka.jp",
"chikugo.fukuoka.jp",
"chikuho.fukuoka.jp",
"chikujo.fukuoka.jp",
"chikushino.fukuoka.jp",
"chikuzen.fukuoka.jp",
"chuo.fukuoka.jp",
"dazaifu.fukuoka.jp",
"fukuchi.fukuoka.jp",
"hakata.fukuoka.jp",
"higashi.fukuoka.jp",
"hirokawa.fukuoka.jp",
"hisayama.fukuoka.jp",
"iizuka.fukuoka.jp",
"inatsuki.fukuoka.jp",
"kaho.fukuoka.jp",
"kasuga.fukuoka.jp",
"kasuya.fukuoka.jp",
"kawara.fukuoka.jp",
"keisen.fukuoka.jp",
"koga.fukuoka.jp",
"kurate.fukuoka.jp",
"kurogi.fukuoka.jp",
"kurume.fukuoka.jp",
"minami.fukuoka.jp",
"miyako.fukuoka.jp",
"miyama.fukuoka.jp",
"miyawaka.fukuoka.jp",
"mizumaki.fukuoka.jp",
"munakata.fukuoka.jp",
"nakagawa.fukuoka.jp",
"nakama.fukuoka.jp",
"nishi.fukuoka.jp",
"nogata.fukuoka.jp",
"ogori.fukuoka.jp",
"okagaki.fukuoka.jp",
"okawa.fukuoka.jp",
"oki.fukuoka.jp",
"omuta.fukuoka.jp",
"onga.fukuoka.jp",
"onojo.fukuoka.jp",
"oto.fukuoka.jp",
"saigawa.fukuoka.jp",
"sasaguri.fukuoka.jp",
"shingu.fukuoka.jp",
"shinyoshitomi.fukuoka.jp",
"shonai.fukuoka.jp",
"soeda.fukuoka.jp",
"sue.fukuoka.jp",
"tachiarai.fukuoka.jp",
"tagawa.fukuoka.jp",
"takata.fukuoka.jp",
"toho.fukuoka.jp",
"toyotsu.fukuoka.jp",
"tsuiki.fukuoka.jp",
"ukiha.fukuoka.jp",
"umi.fukuoka.jp",
"usui.fukuoka.jp",
"yamada.fukuoka.jp",
"yame.fukuoka.jp",
"yanagawa.fukuoka.jp",
"yukuhashi.fukuoka.jp",
"aizubange.fukushima.jp",
"aizumisato.fukushima.jp",
"aizuwakamatsu.fukushima.jp",
"asakawa.fukushima.jp",
"bandai.fukushima.jp",
"date.fukushima.jp",
"fukushima.fukushima.jp",
"furudono.fukushima.jp",
"futaba.fukushima.jp",
"hanawa.fukushima.jp",
"higashi.fukushima.jp",
"hirata.fukushima.jp",
"hirono.fukushima.jp",
"iitate.fukushima.jp",
"inawashiro.fukushima.jp",
"ishikawa.fukushima.jp",
"iwaki.fukushima.jp",
"izumizaki.fukushima.jp",
"kagamiishi.fukushima.jp",
"kaneyama.fukushima.jp",
"kawamata.fukushima.jp",
"kitakata.fukushima.jp",
"kitashiobara.fukushima.jp",
"koori.fukushima.jp",
"koriyama.fukushima.jp",
"kunimi.fukushima.jp",
"miharu.fukushima.jp",
"mishima.fukushima.jp",
"namie.fukushima.jp",
"nango.fukushima.jp",
"nishiaizu.fukushima.jp",
"nishigo.fukushima.jp",
"okuma.fukushima.jp",
"omotego.fukushima.jp",
"ono.fukushima.jp",
"otama.fukushima.jp",
"samegawa.fukushima.jp",
"shimogo.fukushima.jp",
"shirakawa.fukushima.jp",
"showa.fukushima.jp",
"soma.fukushima.jp",
"sukagawa.fukushima.jp",
"taishin.fukushima.jp",
"tamakawa.fukushima.jp",
"tanagura.fukushima.jp",
"tenei.fukushima.jp",
"yabuki.fukushima.jp",
"yamato.fukushima.jp",
"yamatsuri.fukushima.jp",
"yanaizu.fukushima.jp",
"yugawa.fukushima.jp",
"anpachi.gifu.jp",
"ena.gifu.jp",
"gifu.gifu.jp",
"ginan.gifu.jp",
"godo.gifu.jp",
"gujo.gifu.jp",
"hashima.gifu.jp",
"hichiso.gifu.jp",
"hida.gifu.jp",
"higashishirakawa.gifu.jp",
"ibigawa.gifu.jp",
"ikeda.gifu.jp",
"kakamigahara.gifu.jp",
"kani.gifu.jp",
"kasahara.gifu.jp",
"kasamatsu.gifu.jp",
"kawaue.gifu.jp",
"kitagata.gifu.jp",
"mino.gifu.jp",
"minokamo.gifu.jp",
"mitake.gifu.jp",
"mizunami.gifu.jp",
"motosu.gifu.jp",
"nakatsugawa.gifu.jp",
"ogaki.gifu.jp",
"sakahogi.gifu.jp",
"seki.gifu.jp",
"sekigahara.gifu.jp",
"shirakawa.gifu.jp",
"tajimi.gifu.jp",
"takayama.gifu.jp",
"tarui.gifu.jp",
"toki.gifu.jp",
"tomika.gifu.jp",
"wanouchi.gifu.jp",
"yamagata.gifu.jp",
"yaotsu.gifu.jp",
"yoro.gifu.jp",
"annaka.gunma.jp",
"chiyoda.gunma.jp",
"fujioka.gunma.jp",
"higashiagatsuma.gunma.jp",
"isesaki.gunma.jp",
"itakura.gunma.jp",
"kanna.gunma.jp",
"kanra.gunma.jp",
"katashina.gunma.jp",
"kawaba.gunma.jp",
"kiryu.gunma.jp",
"kusatsu.gunma.jp",
"maebashi.gunma.jp",
"meiwa.gunma.jp",
"midori.gunma.jp",
"minakami.gunma.jp",
"naganohara.gunma.jp",
"nakanojo.gunma.jp",
"nanmoku.gunma.jp",
"numata.gunma.jp",
"oizumi.gunma.jp",
"ora.gunma.jp",
"ota.gunma.jp",
"shibukawa.gunma.jp",
"shimonita.gunma.jp",
"shinto.gunma.jp",
"showa.gunma.jp",
"takasaki.gunma.jp",
"takayama.gunma.jp",
"tamamura.gunma.jp",
"tatebayashi.gunma.jp",
"tomioka.gunma.jp",
"tsukiyono.gunma.jp",
"tsumagoi.gunma.jp",
"ueno.gunma.jp",
"yoshioka.gunma.jp",
"asaminami.hiroshima.jp",
"daiwa.hiroshima.jp",
"etajima.hiroshima.jp",
"fuchu.hiroshima.jp",
"fukuyama.hiroshima.jp",
"hatsukaichi.hiroshima.jp",
"higashihiroshima.hiroshima.jp",
"hongo.hiroshima.jp",
"jinsekikogen.hiroshima.jp",
"kaita.hiroshima.jp",
"kui.hiroshima.jp",
"kumano.hiroshima.jp",
"kure.hiroshima.jp",
"mihara.hiroshima.jp",
"miyoshi.hiroshima.jp",
"naka.hiroshima.jp",
"onomichi.hiroshima.jp",
"osakikamijima.hiroshima.jp",
"otake.hiroshima.jp",
"saka.hiroshima.jp",
"sera.hiroshima.jp",
"seranishi.hiroshima.jp",
"shinichi.hiroshima.jp",
"shobara.hiroshima.jp",
"takehara.hiroshima.jp",
"abashiri.hokkaido.jp",
"abira.hokkaido.jp",
"aibetsu.hokkaido.jp",
"akabira.hokkaido.jp",
"akkeshi.hokkaido.jp",
"asahikawa.hokkaido.jp",
"ashibetsu.hokkaido.jp",
"ashoro.hokkaido.jp",
"assabu.hokkaido.jp",
"atsuma.hokkaido.jp",
"bibai.hokkaido.jp",
"biei.hokkaido.jp",
"bifuka.hokkaido.jp",
"bihoro.hokkaido.jp",
"biratori.hokkaido.jp",
"chippubetsu.hokkaido.jp",
"chitose.hokkaido.jp",
"date.hokkaido.jp",
"ebetsu.hokkaido.jp",
"embetsu.hokkaido.jp",
"eniwa.hokkaido.jp",
"erimo.hokkaido.jp",
"esan.hokkaido.jp",
"esashi.hokkaido.jp",
"fukagawa.hokkaido.jp",
"fukushima.hokkaido.jp",
"furano.hokkaido.jp",
"furubira.hokkaido.jp",
"haboro.hokkaido.jp",
"hakodate.hokkaido.jp",
"hamatonbetsu.hokkaido.jp",
"hidaka.hokkaido.jp",
"higashikagura.hokkaido.jp",
"higashikawa.hokkaido.jp",
"hiroo.hokkaido.jp",
"hokuryu.hokkaido.jp",
"hokuto.hokkaido.jp",
"honbetsu.hokkaido.jp",
"horokanai.hokkaido.jp",
"horonobe.hokkaido.jp",
"ikeda.hokkaido.jp",
"imakane.hokkaido.jp",
"ishikari.hokkaido.jp",
"iwamizawa.hokkaido.jp",
"iwanai.hokkaido.jp",
"kamifurano.hokkaido.jp",
"kamikawa.hokkaido.jp",
"kamishihoro.hokkaido.jp",
"kamisunagawa.hokkaido.jp",
"kamoenai.hokkaido.jp",
"kayabe.hokkaido.jp",
"kembuchi.hokkaido.jp",
"kikonai.hokkaido.jp",
"kimobetsu.hokkaido.jp",
"kitahiroshima.hokkaido.jp",
"kitami.hokkaido.jp",
"kiyosato.hokkaido.jp",
"koshimizu.hokkaido.jp",
"kunneppu.hokkaido.jp",
"kuriyama.hokkaido.jp",
"kuromatsunai.hokkaido.jp",
"kushiro.hokkaido.jp",
"kutchan.hokkaido.jp",
"kyowa.hokkaido.jp",
"mashike.hokkaido.jp",
"matsumae.hokkaido.jp",
"mikasa.hokkaido.jp",
"minamifurano.hokkaido.jp",
"mombetsu.hokkaido.jp",
"moseushi.hokkaido.jp",
"mukawa.hokkaido.jp",
"muroran.hokkaido.jp",
"naie.hokkaido.jp",
"nakagawa.hokkaido.jp",
"nakasatsunai.hokkaido.jp",
"nakatombetsu.hokkaido.jp",
"nanae.hokkaido.jp",
"nanporo.hokkaido.jp",
"nayoro.hokkaido.jp",
"nemuro.hokkaido.jp",
"niikappu.hokkaido.jp",
"niki.hokkaido.jp",
"nishiokoppe.hokkaido.jp",
"noboribetsu.hokkaido.jp",
"numata.hokkaido.jp",
"obihiro.hokkaido.jp",
"obira.hokkaido.jp",
"oketo.hokkaido.jp",
"okoppe.hokkaido.jp",
"otaru.hokkaido.jp",
"otobe.hokkaido.jp",
"otofuke.hokkaido.jp",
"otoineppu.hokkaido.jp",
"oumu.hokkaido.jp",
"ozora.hokkaido.jp",
"pippu.hokkaido.jp",
"rankoshi.hokkaido.jp",
"rebun.hokkaido.jp",
"rikubetsu.hokkaido.jp",
"rishiri.hokkaido.jp",
"rishirifuji.hokkaido.jp",
"saroma.hokkaido.jp",
"sarufutsu.hokkaido.jp",
"shakotan.hokkaido.jp",
"shari.hokkaido.jp",
"shibecha.hokkaido.jp",
"shibetsu.hokkaido.jp",
"shikabe.hokkaido.jp",
"shikaoi.hokkaido.jp",
"shimamaki.hokkaido.jp",
"shimizu.hokkaido.jp",
"shimokawa.hokkaido.jp",
"shinshinotsu.hokkaido.jp",
"shintoku.hokkaido.jp",
"shiranuka.hokkaido.jp",
"shiraoi.hokkaido.jp",
"shiriuchi.hokkaido.jp",
"sobetsu.hokkaido.jp",
"sunagawa.hokkaido.jp",
"taiki.hokkaido.jp",
"takasu.hokkaido.jp",
"takikawa.hokkaido.jp",
"takinoue.hokkaido.jp",
"teshikaga.hokkaido.jp",
"tobetsu.hokkaido.jp",
"tohma.hokkaido.jp",
"tomakomai.hokkaido.jp",
"tomari.hokkaido.jp",
"toya.hokkaido.jp",
"toyako.hokkaido.jp",
"toyotomi.hokkaido.jp",
"toyoura.hokkaido.jp",
"tsubetsu.hokkaido.jp",
"tsukigata.hokkaido.jp",
"urakawa.hokkaido.jp",
"urausu.hokkaido.jp",
"uryu.hokkaido.jp",
"utashinai.hokkaido.jp",
"wakkanai.hokkaido.jp",
"wassamu.hokkaido.jp",
"yakumo.hokkaido.jp",
"yoichi.hokkaido.jp",
"aioi.hyogo.jp",
"akashi.hyogo.jp",
"ako.hyogo.jp",
"amagasaki.hyogo.jp",
"aogaki.hyogo.jp",
"asago.hyogo.jp",
"ashiya.hyogo.jp",
"awaji.hyogo.jp",
"fukusaki.hyogo.jp",
"goshiki.hyogo.jp",
"harima.hyogo.jp",
"himeji.hyogo.jp",
"ichikawa.hyogo.jp",
"inagawa.hyogo.jp",
"itami.hyogo.jp",
"kakogawa.hyogo.jp",
"kamigori.hyogo.jp",
"kamikawa.hyogo.jp",
"kasai.hyogo.jp",
"kasuga.hyogo.jp",
"kawanishi.hyogo.jp",
"miki.hyogo.jp",
"minamiawaji.hyogo.jp",
"nishinomiya.hyogo.jp",
"nishiwaki.hyogo.jp",
"ono.hyogo.jp",
"sanda.hyogo.jp",
"sannan.hyogo.jp",
"sasayama.hyogo.jp",
"sayo.hyogo.jp",
"shingu.hyogo.jp",
"shinonsen.hyogo.jp",
"shiso.hyogo.jp",
"sumoto.hyogo.jp",
"taishi.hyogo.jp",
"taka.hyogo.jp",
"takarazuka.hyogo.jp",
"takasago.hyogo.jp",
"takino.hyogo.jp",
"tamba.hyogo.jp",
"tatsuno.hyogo.jp",
"toyooka.hyogo.jp",
"yabu.hyogo.jp",
"yashiro.hyogo.jp",
"yoka.hyogo.jp",
"yokawa.hyogo.jp",
"ami.ibaraki.jp",
"asahi.ibaraki.jp",
"bando.ibaraki.jp",
"chikusei.ibaraki.jp",
"daigo.ibaraki.jp",
"fujishiro.ibaraki.jp",
"hitachi.ibaraki.jp",
"hitachinaka.ibaraki.jp",
"hitachiomiya.ibaraki.jp",
"hitachiota.ibaraki.jp",
"ibaraki.ibaraki.jp",
"ina.ibaraki.jp",
"inashiki.ibaraki.jp",
"itako.ibaraki.jp",
"iwama.ibaraki.jp",
"joso.ibaraki.jp",
"kamisu.ibaraki.jp",
"kasama.ibaraki.jp",
"kashima.ibaraki.jp",
"kasumigaura.ibaraki.jp",
"koga.ibaraki.jp",
"miho.ibaraki.jp",
"mito.ibaraki.jp",
"moriya.ibaraki.jp",
"naka.ibaraki.jp",
"namegata.ibaraki.jp",
"oarai.ibaraki.jp",
"ogawa.ibaraki.jp",
"omitama.ibaraki.jp",
"ryugasaki.ibaraki.jp",
"sakai.ibaraki.jp",
"sakuragawa.ibaraki.jp",
"shimodate.ibaraki.jp",
"shimotsuma.ibaraki.jp",
"shirosato.ibaraki.jp",
"sowa.ibaraki.jp",
"suifu.ibaraki.jp",
"takahagi.ibaraki.jp",
"tamatsukuri.ibaraki.jp",
"tokai.ibaraki.jp",
"tomobe.ibaraki.jp",
"tone.ibaraki.jp",
"toride.ibaraki.jp",
"tsuchiura.ibaraki.jp",
"tsukuba.ibaraki.jp",
"uchihara.ibaraki.jp",
"ushiku.ibaraki.jp",
"yachiyo.ibaraki.jp",
"yamagata.ibaraki.jp",
"yawara.ibaraki.jp",
"yuki.ibaraki.jp",
"anamizu.ishikawa.jp",
"hakui.ishikawa.jp",
"hakusan.ishikawa.jp",
"kaga.ishikawa.jp",
"kahoku.ishikawa.jp",
"kanazawa.ishikawa.jp",
"kawakita.ishikawa.jp",
"komatsu.ishikawa.jp",
"nakanoto.ishikawa.jp",
"nanao.ishikawa.jp",
"nomi.ishikawa.jp",
"nonoichi.ishikawa.jp",
"noto.ishikawa.jp",
"shika.ishikawa.jp",
"suzu.ishikawa.jp",
"tsubata.ishikawa.jp",
"tsurugi.ishikawa.jp",
"uchinada.ishikawa.jp",
"wajima.ishikawa.jp",
"fudai.iwate.jp",
"fujisawa.iwate.jp",
"hanamaki.iwate.jp",
"hiraizumi.iwate.jp",
"hirono.iwate.jp",
"ichinohe.iwate.jp",
"ichinoseki.iwate.jp",
"iwaizumi.iwate.jp",
"iwate.iwate.jp",
"joboji.iwate.jp",
"kamaishi.iwate.jp",
"kanegasaki.iwate.jp",
"karumai.iwate.jp",
"kawai.iwate.jp",
"kitakami.iwate.jp",
"kuji.iwate.jp",
"kunohe.iwate.jp",
"kuzumaki.iwate.jp",
"miyako.iwate.jp",
"mizusawa.iwate.jp",
"morioka.iwate.jp",
"ninohe.iwate.jp",
"noda.iwate.jp",
"ofunato.iwate.jp",
"oshu.iwate.jp",
"otsuchi.iwate.jp",
"rikuzentakata.iwate.jp",
"shiwa.iwate.jp",
"shizukuishi.iwate.jp",
"sumita.iwate.jp",
"tanohata.iwate.jp",
"tono.iwate.jp",
"yahaba.iwate.jp",
"yamada.iwate.jp",
"ayagawa.kagawa.jp",
"higashikagawa.kagawa.jp",
"kanonji.kagawa.jp",
"kotohira.kagawa.jp",
"manno.kagawa.jp",
"marugame.kagawa.jp",
"mitoyo.kagawa.jp",
"naoshima.kagawa.jp",
"sanuki.kagawa.jp",
"tadotsu.kagawa.jp",
"takamatsu.kagawa.jp",
"tonosho.kagawa.jp",
"uchinomi.kagawa.jp",
"utazu.kagawa.jp",
"zentsuji.kagawa.jp",
"akune.kagoshima.jp",
"amami.kagoshima.jp",
"hioki.kagoshima.jp",
"isa.kagoshima.jp",
"isen.kagoshima.jp",
"izumi.kagoshima.jp",
"kagoshima.kagoshima.jp",
"kanoya.kagoshima.jp",
"kawanabe.kagoshima.jp",
"kinko.kagoshima.jp",
"kouyama.kagoshima.jp",
"makurazaki.kagoshima.jp",
"matsumoto.kagoshima.jp",
"minamitane.kagoshima.jp",
"nakatane.kagoshima.jp",
"nishinoomote.kagoshima.jp",
"satsumasendai.kagoshima.jp",
"soo.kagoshima.jp",
"tarumizu.kagoshima.jp",
"yusui.kagoshima.jp",
"aikawa.kanagawa.jp",
"atsugi.kanagawa.jp",
"ayase.kanagawa.jp",
"chigasaki.kanagawa.jp",
"ebina.kanagawa.jp",
"fujisawa.kanagawa.jp",
"hadano.kanagawa.jp",
"hakone.kanagawa.jp",
"hiratsuka.kanagawa.jp",
"isehara.kanagawa.jp",
"kaisei.kanagawa.jp",
"kamakura.kanagawa.jp",
"kiyokawa.kanagawa.jp",
"matsuda.kanagawa.jp",
"minamiashigara.kanagawa.jp",
"miura.kanagawa.jp",
"nakai.kanagawa.jp",
"ninomiya.kanagawa.jp",
"odawara.kanagawa.jp",
"oi.kanagawa.jp",
"oiso.kanagawa.jp",
"sagamihara.kanagawa.jp",
"samukawa.kanagawa.jp",
"tsukui.kanagawa.jp",
"yamakita.kanagawa.jp",
"yamato.kanagawa.jp",
"yokosuka.kanagawa.jp",
"yugawara.kanagawa.jp",
"zama.kanagawa.jp",
"zushi.kanagawa.jp",
"aki.kochi.jp",
"geisei.kochi.jp",
"hidaka.kochi.jp",
"higashitsuno.kochi.jp",
"ino.kochi.jp",
"kagami.kochi.jp",
"kami.kochi.jp",
"kitagawa.kochi.jp",
"kochi.kochi.jp",
"mihara.kochi.jp",
"motoyama.kochi.jp",
"muroto.kochi.jp",
"nahari.kochi.jp",
"nakamura.kochi.jp",
"nankoku.kochi.jp",
"nishitosa.kochi.jp",
"niyodogawa.kochi.jp",
"ochi.kochi.jp",
"okawa.kochi.jp",
"otoyo.kochi.jp",
"otsuki.kochi.jp",
"sakawa.kochi.jp",
"sukumo.kochi.jp",
"susaki.kochi.jp",
"tosa.kochi.jp",
"tosashimizu.kochi.jp",
"toyo.kochi.jp",
"tsuno.kochi.jp",
"umaji.kochi.jp",
"yasuda.kochi.jp",
"yusuhara.kochi.jp",
"amakusa.kumamoto.jp",
"arao.kumamoto.jp",
"aso.kumamoto.jp",
"choyo.kumamoto.jp",
"gyokuto.kumamoto.jp",
"kamiamakusa.kumamoto.jp",
"kikuchi.kumamoto.jp",
"kumamoto.kumamoto.jp",
"mashiki.kumamoto.jp",
"mifune.kumamoto.jp",
"minamata.kumamoto.jp",
"minamioguni.kumamoto.jp",
"nagasu.kumamoto.jp",
"nishihara.kumamoto.jp",
"oguni.kumamoto.jp",
"ozu.kumamoto.jp",
"sumoto.kumamoto.jp",
"takamori.kumamoto.jp",
"uki.kumamoto.jp",
"uto.kumamoto.jp",
"yamaga.kumamoto.jp",
"yamato.kumamoto.jp",
"yatsushiro.kumamoto.jp",
"ayabe.kyoto.jp",
"fukuchiyama.kyoto.jp",
"higashiyama.kyoto.jp",
"ide.kyoto.jp",
"ine.kyoto.jp",
"joyo.kyoto.jp",
"kameoka.kyoto.jp",
"kamo.kyoto.jp",
"kita.kyoto.jp",
"kizu.kyoto.jp",
"kumiyama.kyoto.jp",
"kyotamba.kyoto.jp",
"kyotanabe.kyoto.jp",
"kyotango.kyoto.jp",
"maizuru.kyoto.jp",
"minami.kyoto.jp",
"minamiyamashiro.kyoto.jp",
"miyazu.kyoto.jp",
"muko.kyoto.jp",
"nagaokakyo.kyoto.jp",
"nakagyo.kyoto.jp",
"nantan.kyoto.jp",
"oyamazaki.kyoto.jp",
"sakyo.kyoto.jp",
"seika.kyoto.jp",
"tanabe.kyoto.jp",
"uji.kyoto.jp",
"ujitawara.kyoto.jp",
"wazuka.kyoto.jp",
"yamashina.kyoto.jp",
"yawata.kyoto.jp",
"asahi.mie.jp",
"inabe.mie.jp",
"ise.mie.jp",
"kameyama.mie.jp",
"kawagoe.mie.jp",
"kiho.mie.jp",
"kisosaki.mie.jp",
"kiwa.mie.jp",
"komono.mie.jp",
"kumano.mie.jp",
"kuwana.mie.jp",
"matsusaka.mie.jp",
"meiwa.mie.jp",
"mihama.mie.jp",
"minamiise.mie.jp",
"misugi.mie.jp",
"miyama.mie.jp",
"nabari.mie.jp",
"shima.mie.jp",
"suzuka.mie.jp",
"tado.mie.jp",
"taiki.mie.jp",
"taki.mie.jp",
"tamaki.mie.jp",
"toba.mie.jp",
"tsu.mie.jp",
"udono.mie.jp",
"ureshino.mie.jp",
"watarai.mie.jp",
"yokkaichi.mie.jp",
"furukawa.miyagi.jp",
"higashimatsushima.miyagi.jp",
"ishinomaki.miyagi.jp",
"iwanuma.miyagi.jp",
"kakuda.miyagi.jp",
"kami.miyagi.jp",
"kawasaki.miyagi.jp",
"marumori.miyagi.jp",
"matsushima.miyagi.jp",
"minamisanriku.miyagi.jp",
"misato.miyagi.jp",
"murata.miyagi.jp",
"natori.miyagi.jp",
"ogawara.miyagi.jp",
"ohira.miyagi.jp",
"onagawa.miyagi.jp",
"osaki.miyagi.jp",
"rifu.miyagi.jp",
"semine.miyagi.jp",
"shibata.miyagi.jp",
"shichikashuku.miyagi.jp",
"shikama.miyagi.jp",
"shiogama.miyagi.jp",
"shiroishi.miyagi.jp",
"tagajo.miyagi.jp",
"taiwa.miyagi.jp",
"tome.miyagi.jp",
"tomiya.miyagi.jp",
"wakuya.miyagi.jp",
"watari.miyagi.jp",
"yamamoto.miyagi.jp",
"zao.miyagi.jp",
"aya.miyazaki.jp",
"ebino.miyazaki.jp",
"gokase.miyazaki.jp",
"hyuga.miyazaki.jp",
"kadogawa.miyazaki.jp",
"kawaminami.miyazaki.jp",
"kijo.miyazaki.jp",
"kitagawa.miyazaki.jp",
"kitakata.miyazaki.jp",
"kitaura.miyazaki.jp",
"kobayashi.miyazaki.jp",
"kunitomi.miyazaki.jp",
"kushima.miyazaki.jp",
"mimata.miyazaki.jp",
"miyakonojo.miyazaki.jp",
"miyazaki.miyazaki.jp",
"morotsuka.miyazaki.jp",
"nichinan.miyazaki.jp",
"nishimera.miyazaki.jp",
"nobeoka.miyazaki.jp",
"saito.miyazaki.jp",
"shiiba.miyazaki.jp",
"shintomi.miyazaki.jp",
"takaharu.miyazaki.jp",
"takanabe.miyazaki.jp",
"takazaki.miyazaki.jp",
"tsuno.miyazaki.jp",
"achi.nagano.jp",
"agematsu.nagano.jp",
"anan.nagano.jp",
"aoki.nagano.jp",
"asahi.nagano.jp",
"azumino.nagano.jp",
"chikuhoku.nagano.jp",
"chikuma.nagano.jp",
"chino.nagano.jp",
"fujimi.nagano.jp",
"hakuba.nagano.jp",
"hara.nagano.jp",
"hiraya.nagano.jp",
"iida.nagano.jp",
"iijima.nagano.jp",
"iiyama.nagano.jp",
"iizuna.nagano.jp",
"ikeda.nagano.jp",
"ikusaka.nagano.jp",
"ina.nagano.jp",
"karuizawa.nagano.jp",
"kawakami.nagano.jp",
"kiso.nagano.jp",
"kisofukushima.nagano.jp",
"kitaaiki.nagano.jp",
"komagane.nagano.jp",
"komoro.nagano.jp",
"matsukawa.nagano.jp",
"matsumoto.nagano.jp",
"miasa.nagano.jp",
"minamiaiki.nagano.jp",
"minamimaki.nagano.jp",
"minamiminowa.nagano.jp",
"minowa.nagano.jp",
"miyada.nagano.jp",
"miyota.nagano.jp",
"mochizuki.nagano.jp",
"nagano.nagano.jp",
"nagawa.nagano.jp",
"nagiso.nagano.jp",
"nakagawa.nagano.jp",
"nakano.nagano.jp",
"nozawaonsen.nagano.jp",
"obuse.nagano.jp",
"ogawa.nagano.jp",
"okaya.nagano.jp",
"omachi.nagano.jp",
"omi.nagano.jp",
"ookuwa.nagano.jp",
"ooshika.nagano.jp",
"otaki.nagano.jp",
"otari.nagano.jp",
"sakae.nagano.jp",
"sakaki.nagano.jp",
"saku.nagano.jp",
"sakuho.nagano.jp",
"shimosuwa.nagano.jp",
"shinanomachi.nagano.jp",
"shiojiri.nagano.jp",
"suwa.nagano.jp",
"suzaka.nagano.jp",
"takagi.nagano.jp",
"takamori.nagano.jp",
"takayama.nagano.jp",
"tateshina.nagano.jp",
"tatsuno.nagano.jp",
"togakushi.nagano.jp",
"togura.nagano.jp",
"tomi.nagano.jp",
"ueda.nagano.jp",
"wada.nagano.jp",
"yamagata.nagano.jp",
"yamanouchi.nagano.jp",
"yasaka.nagano.jp",
"yasuoka.nagano.jp",
"chijiwa.nagasaki.jp",
"futsu.nagasaki.jp",
"goto.nagasaki.jp",
"hasami.nagasaki.jp",
"hirado.nagasaki.jp",
"iki.nagasaki.jp",
"isahaya.nagasaki.jp",
"kawatana.nagasaki.jp",
"kuchinotsu.nagasaki.jp",
"matsuura.nagasaki.jp",
"nagasaki.nagasaki.jp",
"obama.nagasaki.jp",
"omura.nagasaki.jp",
"oseto.nagasaki.jp",
"saikai.nagasaki.jp",
"sasebo.nagasaki.jp",
"seihi.nagasaki.jp",
"shimabara.nagasaki.jp",
"shinkamigoto.nagasaki.jp",
"togitsu.nagasaki.jp",
"tsushima.nagasaki.jp",
"unzen.nagasaki.jp",
"ando.nara.jp",
"gose.nara.jp",
"heguri.nara.jp",
"higashiyoshino.nara.jp",
"ikaruga.nara.jp",
"ikoma.nara.jp",
"kamikitayama.nara.jp",
"kanmaki.nara.jp",
"kashiba.nara.jp",
"kashihara.nara.jp",
"katsuragi.nara.jp",
"kawai.nara.jp",
"kawakami.nara.jp",
"kawanishi.nara.jp",
"koryo.nara.jp",
"kurotaki.nara.jp",
"mitsue.nara.jp",
"miyake.nara.jp",
"nara.nara.jp",
"nosegawa.nara.jp",
"oji.nara.jp",
"ouda.nara.jp",
"oyodo.nara.jp",
"sakurai.nara.jp",
"sango.nara.jp",
"shimoichi.nara.jp",
"shimokitayama.nara.jp",
"shinjo.nara.jp",
"soni.nara.jp",
"takatori.nara.jp",
"tawaramoto.nara.jp",
"tenkawa.nara.jp",
"tenri.nara.jp",
"uda.nara.jp",
"yamatokoriyama.nara.jp",
"yamatotakada.nara.jp",
"yamazoe.nara.jp",
"yoshino.nara.jp",
"aga.niigata.jp",
"agano.niigata.jp",
"gosen.niigata.jp",
"itoigawa.niigata.jp",
"izumozaki.niigata.jp",
"joetsu.niigata.jp",
"kamo.niigata.jp",
"kariwa.niigata.jp",
"kashiwazaki.niigata.jp",
"minamiuonuma.niigata.jp",
"mitsuke.niigata.jp",
"muika.niigata.jp",
"murakami.niigata.jp",
"myoko.niigata.jp",
"nagaoka.niigata.jp",
"niigata.niigata.jp",
"ojiya.niigata.jp",
"omi.niigata.jp",
"sado.niigata.jp",
"sanjo.niigata.jp",
"seiro.niigata.jp",
"seirou.niigata.jp",
"sekikawa.niigata.jp",
"shibata.niigata.jp",
"tagami.niigata.jp",
"tainai.niigata.jp",
"tochio.niigata.jp",
"tokamachi.niigata.jp",
"tsubame.niigata.jp",
"tsunan.niigata.jp",
"uonuma.niigata.jp",
"yahiko.niigata.jp",
"yoita.niigata.jp",
"yuzawa.niigata.jp",
"beppu.oita.jp",
"bungoono.oita.jp",
"bungotakada.oita.jp",
"hasama.oita.jp",
"hiji.oita.jp",
"himeshima.oita.jp",
"hita.oita.jp",
"kamitsue.oita.jp",
"kokonoe.oita.jp",
"kuju.oita.jp",
"kunisaki.oita.jp",
"kusu.oita.jp",
"oita.oita.jp",
"saiki.oita.jp",
"taketa.oita.jp",
"tsukumi.oita.jp",
"usa.oita.jp",
"usuki.oita.jp",
"yufu.oita.jp",
"akaiwa.okayama.jp",
"asakuchi.okayama.jp",
"bizen.okayama.jp",
"hayashima.okayama.jp",
"ibara.okayama.jp",
"kagamino.okayama.jp",
"kasaoka.okayama.jp",
"kibichuo.okayama.jp",
"kumenan.okayama.jp",
"kurashiki.okayama.jp",
"maniwa.okayama.jp",
"misaki.okayama.jp",
"nagi.okayama.jp",
"niimi.okayama.jp",
"nishiawakura.okayama.jp",
"okayama.okayama.jp",
"satosho.okayama.jp",
"setouchi.okayama.jp",
"shinjo.okayama.jp",
"shoo.okayama.jp",
"soja.okayama.jp",
"takahashi.okayama.jp",
"tamano.okayama.jp",
"tsuyama.okayama.jp",
"wake.okayama.jp",
"yakage.okayama.jp",
"aguni.okinawa.jp",
"ginowan.okinawa.jp",
"ginoza.okinawa.jp",
"gushikami.okinawa.jp",
"haebaru.okinawa.jp",
"higashi.okinawa.jp",
"hirara.okinawa.jp",
"iheya.okinawa.jp",
"ishigaki.okinawa.jp",
"ishikawa.okinawa.jp",
"itoman.okinawa.jp",
"izena.okinawa.jp",
"kadena.okinawa.jp",
"kin.okinawa.jp",
"kitadaito.okinawa.jp",
"kitanakagusuku.okinawa.jp",
"kumejima.okinawa.jp",
"kunigami.okinawa.jp",
"minamidaito.okinawa.jp",
"motobu.okinawa.jp",
"nago.okinawa.jp",
"naha.okinawa.jp",
"nakagusuku.okinawa.jp",
"nakijin.okinawa.jp",
"nanjo.okinawa.jp",
"nishihara.okinawa.jp",
"ogimi.okinawa.jp",
"okinawa.okinawa.jp",
"onna.okinawa.jp",
"shimoji.okinawa.jp",
"taketomi.okinawa.jp",
"tarama.okinawa.jp",
"tokashiki.okinawa.jp",
"tomigusuku.okinawa.jp",
"tonaki.okinawa.jp",
"urasoe.okinawa.jp",
"uruma.okinawa.jp",
"yaese.okinawa.jp",
"yomitan.okinawa.jp",
"yonabaru.okinawa.jp",
"yonaguni.okinawa.jp",
"zamami.okinawa.jp",
"abeno.osaka.jp",
"chihayaakasaka.osaka.jp",
"chuo.osaka.jp",
"daito.osaka.jp",
"fujiidera.osaka.jp",
"habikino.osaka.jp",
"hannan.osaka.jp",
"higashiosaka.osaka.jp",
"higashisumiyoshi.osaka.jp",
"higashiyodogawa.osaka.jp",
"hirakata.osaka.jp",
"ibaraki.osaka.jp",
"ikeda.osaka.jp",
"izumi.osaka.jp",
"izumiotsu.osaka.jp",
"izumisano.osaka.jp",
"kadoma.osaka.jp",
"kaizuka.osaka.jp",
"kanan.osaka.jp",
"kashiwara.osaka.jp",
"katano.osaka.jp",
"kawachinagano.osaka.jp",
"kishiwada.osaka.jp",
"kita.osaka.jp",
"kumatori.osaka.jp",
"matsubara.osaka.jp",
"minato.osaka.jp",
"minoh.osaka.jp",
"misaki.osaka.jp",
"moriguchi.osaka.jp",
"neyagawa.osaka.jp",
"nishi.osaka.jp",
"nose.osaka.jp",
"osakasayama.osaka.jp",
"sakai.osaka.jp",
"sayama.osaka.jp",
"sennan.osaka.jp",
"settsu.osaka.jp",
"shijonawate.osaka.jp",
"shimamoto.osaka.jp",
"suita.osaka.jp",
"tadaoka.osaka.jp",
"taishi.osaka.jp",
"tajiri.osaka.jp",
"takaishi.osaka.jp",
"takatsuki.osaka.jp",
"tondabayashi.osaka.jp",
"toyonaka.osaka.jp",
"toyono.osaka.jp",
"yao.osaka.jp",
"ariake.saga.jp",
"arita.saga.jp",
"fukudomi.saga.jp",
"genkai.saga.jp",
"hamatama.saga.jp",
"hizen.saga.jp",
"imari.saga.jp",
"kamimine.saga.jp",
"kanzaki.saga.jp",
"karatsu.saga.jp",
"kashima.saga.jp",
"kitagata.saga.jp",
"kitahata.saga.jp",
"kiyama.saga.jp",
"kouhoku.saga.jp",
"kyuragi.saga.jp",
"nishiarita.saga.jp",
"ogi.saga.jp",
"omachi.saga.jp",
"ouchi.saga.jp",
"saga.saga.jp",
"shiroishi.saga.jp",
"taku.saga.jp",
"tara.saga.jp",
"tosu.saga.jp",
"yoshinogari.saga.jp",
"arakawa.saitama.jp",
"asaka.saitama.jp",
"chichibu.saitama.jp",
"fujimi.saitama.jp",
"fujimino.saitama.jp",
"fukaya.saitama.jp",
"hanno.saitama.jp",
"hanyu.saitama.jp",
"hasuda.saitama.jp",
"hatogaya.saitama.jp",
"hatoyama.saitama.jp",
"hidaka.saitama.jp",
"higashichichibu.saitama.jp",
"higashimatsuyama.saitama.jp",
"honjo.saitama.jp",
"ina.saitama.jp",
"iruma.saitama.jp",
"iwatsuki.saitama.jp",
"kamiizumi.saitama.jp",
"kamikawa.saitama.jp",
"kamisato.saitama.jp",
"kasukabe.saitama.jp",
"kawagoe.saitama.jp",
"kawaguchi.saitama.jp",
"kawajima.saitama.jp",
"kazo.saitama.jp",
"kitamoto.saitama.jp",
"koshigaya.saitama.jp",
"kounosu.saitama.jp",
"kuki.saitama.jp",
"kumagaya.saitama.jp",
"matsubushi.saitama.jp",
"minano.saitama.jp",
"misato.saitama.jp",
"miyashiro.saitama.jp",
"miyoshi.saitama.jp",
"moroyama.saitama.jp",
"nagatoro.saitama.jp",
"namegawa.saitama.jp",
"niiza.saitama.jp",
"ogano.saitama.jp",
"ogawa.saitama.jp",
"ogose.saitama.jp",
"okegawa.saitama.jp",
"omiya.saitama.jp",
"otaki.saitama.jp",
"ranzan.saitama.jp",
"ryokami.saitama.jp",
"saitama.saitama.jp",
"sakado.saitama.jp",
"satte.saitama.jp",
"sayama.saitama.jp",
"shiki.saitama.jp",
"shiraoka.saitama.jp",
"soka.saitama.jp",
"sugito.saitama.jp",
"toda.saitama.jp",
"tokigawa.saitama.jp",
"tokorozawa.saitama.jp",
"tsurugashima.saitama.jp",
"urawa.saitama.jp",
"warabi.saitama.jp",
"yashio.saitama.jp",
"yokoze.saitama.jp",
"yono.saitama.jp",
"yorii.saitama.jp",
"yoshida.saitama.jp",
"yoshikawa.saitama.jp",
"yoshimi.saitama.jp",
"aisho.shiga.jp",
"gamo.shiga.jp",
"higashiomi.shiga.jp",
"hikone.shiga.jp",
"koka.shiga.jp",
"konan.shiga.jp",
"kosei.shiga.jp",
"koto.shiga.jp",
"kusatsu.shiga.jp",
"maibara.shiga.jp",
"moriyama.shiga.jp",
"nagahama.shiga.jp",
"nishiazai.shiga.jp",
"notogawa.shiga.jp",
"omihachiman.shiga.jp",
"otsu.shiga.jp",
"ritto.shiga.jp",
"ryuoh.shiga.jp",
"takashima.shiga.jp",
"takatsuki.shiga.jp",
"torahime.shiga.jp",
"toyosato.shiga.jp",
"yasu.shiga.jp",
"akagi.shimane.jp",
"ama.shimane.jp",
"gotsu.shimane.jp",
"hamada.shimane.jp",
"higashiizumo.shimane.jp",
"hikawa.shimane.jp",
"hikimi.shimane.jp",
"izumo.shimane.jp",
"kakinoki.shimane.jp",
"masuda.shimane.jp",
"matsue.shimane.jp",
"misato.shimane.jp",
"nishinoshima.shimane.jp",
"ohda.shimane.jp",
"okinoshima.shimane.jp",
"okuizumo.shimane.jp",
"shimane.shimane.jp",
"tamayu.shimane.jp",
"tsuwano.shimane.jp",
"unnan.shimane.jp",
"yakumo.shimane.jp",
"yasugi.shimane.jp",
"yatsuka.shimane.jp",
"arai.shizuoka.jp",
"atami.shizuoka.jp",
"fuji.shizuoka.jp",
"fujieda.shizuoka.jp",
"fujikawa.shizuoka.jp",
"fujinomiya.shizuoka.jp",
"fukuroi.shizuoka.jp",
"gotemba.shizuoka.jp",
"haibara.shizuoka.jp",
"hamamatsu.shizuoka.jp",
"higashiizu.shizuoka.jp",
"ito.shizuoka.jp",
"iwata.shizuoka.jp",
"izu.shizuoka.jp",
"izunokuni.shizuoka.jp",
"kakegawa.shizuoka.jp",
"kannami.shizuoka.jp",
"kawanehon.shizuoka.jp",
"kawazu.shizuoka.jp",
"kikugawa.shizuoka.jp",
"kosai.shizuoka.jp",
"makinohara.shizuoka.jp",
"matsuzaki.shizuoka.jp",
"minamiizu.shizuoka.jp",
"mishima.shizuoka.jp",
"morimachi.shizuoka.jp",
"nishiizu.shizuoka.jp",
"numazu.shizuoka.jp",
"omaezaki.shizuoka.jp",
"shimada.shizuoka.jp",
"shimizu.shizuoka.jp",
"shimoda.shizuoka.jp",
"shizuoka.shizuoka.jp",
"susono.shizuoka.jp",
"yaizu.shizuoka.jp",
"yoshida.shizuoka.jp",
"ashikaga.tochigi.jp",
"bato.tochigi.jp",
"haga.tochigi.jp",
"ichikai.tochigi.jp",
"iwafune.tochigi.jp",
"kaminokawa.tochigi.jp",
"kanuma.tochigi.jp",
"karasuyama.tochigi.jp",
"kuroiso.tochigi.jp",
"mashiko.tochigi.jp",
"mibu.tochigi.jp",
"moka.tochigi.jp",
"motegi.tochigi.jp",
"nasu.tochigi.jp",
"nasushiobara.tochigi.jp",
"nikko.tochigi.jp",
"nishikata.tochigi.jp",
"nogi.tochigi.jp",
"ohira.tochigi.jp",
"ohtawara.tochigi.jp",
"oyama.tochigi.jp",
"sakura.tochigi.jp",
"sano.tochigi.jp",
"shimotsuke.tochigi.jp",
"shioya.tochigi.jp",
"takanezawa.tochigi.jp",
"tochigi.tochigi.jp",
"tsuga.tochigi.jp",
"ujiie.tochigi.jp",
"utsunomiya.tochigi.jp",
"yaita.tochigi.jp",
"aizumi.tokushima.jp",
"anan.tokushima.jp",
"ichiba.tokushima.jp",
"itano.tokushima.jp",
"kainan.tokushima.jp",
"komatsushima.tokushima.jp",
"matsushige.tokushima.jp",
"mima.tokushima.jp",
"minami.tokushima.jp",
"miyoshi.tokushima.jp",
"mugi.tokushima.jp",
"nakagawa.tokushima.jp",
"naruto.tokushima.jp",
"sanagochi.tokushima.jp",
"shishikui.tokushima.jp",
"tokushima.tokushima.jp",
"wajiki.tokushima.jp",
"adachi.tokyo.jp",
"akiruno.tokyo.jp",
"akishima.tokyo.jp",
"aogashima.tokyo.jp",
"arakawa.tokyo.jp",
"bunkyo.tokyo.jp",
"chiyoda.tokyo.jp",
"chofu.tokyo.jp",
"chuo.tokyo.jp",
"edogawa.tokyo.jp",
"fuchu.tokyo.jp",
"fussa.tokyo.jp",
"hachijo.tokyo.jp",
"hachioji.tokyo.jp",
"hamura.tokyo.jp",
"higashikurume.tokyo.jp",
"higashimurayama.tokyo.jp",
"higashiyamato.tokyo.jp",
"hino.tokyo.jp",
"hinode.tokyo.jp",
"hinohara.tokyo.jp",
"inagi.tokyo.jp",
"itabashi.tokyo.jp",
"katsushika.tokyo.jp",
"kita.tokyo.jp",
"kiyose.tokyo.jp",
"kodaira.tokyo.jp",
"koganei.tokyo.jp",
"kokubunji.tokyo.jp",
"komae.tokyo.jp",
"koto.tokyo.jp",
"kouzushima.tokyo.jp",
"kunitachi.tokyo.jp",
"machida.tokyo.jp",
"meguro.tokyo.jp",
"minato.tokyo.jp",
"mitaka.tokyo.jp",
"mizuho.tokyo.jp",
"musashimurayama.tokyo.jp",
"musashino.tokyo.jp",
"nakano.tokyo.jp",
"nerima.tokyo.jp",
"ogasawara.tokyo.jp",
"okutama.tokyo.jp",
"ome.tokyo.jp",
"oshima.tokyo.jp",
"ota.tokyo.jp",
"setagaya.tokyo.jp",
"shibuya.tokyo.jp",
"shinagawa.tokyo.jp",
"shinjuku.tokyo.jp",
"suginami.tokyo.jp",
"sumida.tokyo.jp",
"tachikawa.tokyo.jp",
"taito.tokyo.jp",
"tama.tokyo.jp",
"toshima.tokyo.jp",
"chizu.tottori.jp",
"hino.tottori.jp",
"kawahara.tottori.jp",
"koge.tottori.jp",
"kotoura.tottori.jp",
"misasa.tottori.jp",
"nanbu.tottori.jp",
"nichinan.tottori.jp",
"sakaiminato.tottori.jp",
"tottori.tottori.jp",
"wakasa.tottori.jp",
"yazu.tottori.jp",
"yonago.tottori.jp",
"asahi.toyama.jp",
"fuchu.toyama.jp",
"fukumitsu.toyama.jp",
"funahashi.toyama.jp",
"himi.toyama.jp",
"imizu.toyama.jp",
"inami.toyama.jp",
"johana.toyama.jp",
"kamiichi.toyama.jp",
"kurobe.toyama.jp",
"nakaniikawa.toyama.jp",
"namerikawa.toyama.jp",
"nanto.toyama.jp",
"nyuzen.toyama.jp",
"oyabe.toyama.jp",
"taira.toyama.jp",
"takaoka.toyama.jp",
"tateyama.toyama.jp",
"toga.toyama.jp",
"tonami.toyama.jp",
"toyama.toyama.jp",
"unazuki.toyama.jp",
"uozu.toyama.jp",
"yamada.toyama.jp",
"arida.wakayama.jp",
"aridagawa.wakayama.jp",
"gobo.wakayama.jp",
"hashimoto.wakayama.jp",
"hidaka.wakayama.jp",
"hirogawa.wakayama.jp",
"inami.wakayama.jp",
"iwade.wakayama.jp",
"kainan.wakayama.jp",
"kamitonda.wakayama.jp",
"katsuragi.wakayama.jp",
"kimino.wakayama.jp",
"kinokawa.wakayama.jp",
"kitayama.wakayama.jp",
"koya.wakayama.jp",
"koza.wakayama.jp",
"kozagawa.wakayama.jp",
"kudoyama.wakayama.jp",
"kushimoto.wakayama.jp",
"mihama.wakayama.jp",
"misato.wakayama.jp",
"nachikatsuura.wakayama.jp",
"shingu.wakayama.jp",
"shirahama.wakayama.jp",
"taiji.wakayama.jp",
"tanabe.wakayama.jp",
"wakayama.wakayama.jp",
"yuasa.wakayama.jp",
"yura.wakayama.jp",
"asahi.yamagata.jp",
"funagata.yamagata.jp",
"higashine.yamagata.jp",
"iide.yamagata.jp",
"kahoku.yamagata.jp",
"kaminoyama.yamagata.jp",
"kaneyama.yamagata.jp",
"kawanishi.yamagata.jp",
"mamurogawa.yamagata.jp",
"mikawa.yamagata.jp",
"murayama.yamagata.jp",
"nagai.yamagata.jp",
"nakayama.yamagata.jp",
"nanyo.yamagata.jp",
"nishikawa.yamagata.jp",
"obanazawa.yamagata.jp",
"oe.yamagata.jp",
"oguni.yamagata.jp",
"ohkura.yamagata.jp",
"oishida.yamagata.jp",
"sagae.yamagata.jp",
"sakata.yamagata.jp",
"sakegawa.yamagata.jp",
"shinjo.yamagata.jp",
"shirataka.yamagata.jp",
"shonai.yamagata.jp",
"takahata.yamagata.jp",
"tendo.yamagata.jp",
"tozawa.yamagata.jp",
"tsuruoka.yamagata.jp",
"yamagata.yamagata.jp",
"yamanobe.yamagata.jp",
"yonezawa.yamagata.jp",
"yuza.yamagata.jp",
"abu.yamaguchi.jp",
"hagi.yamaguchi.jp",
"hikari.yamaguchi.jp",
"hofu.yamaguchi.jp",
"iwakuni.yamaguchi.jp",
"kudamatsu.yamaguchi.jp",
"mitou.yamaguchi.jp",
"nagato.yamaguchi.jp",
"oshima.yamaguchi.jp",
"shimonoseki.yamaguchi.jp",
"shunan.yamaguchi.jp",
"tabuse.yamaguchi.jp",
"tokuyama.yamaguchi.jp",
"toyota.yamaguchi.jp",
"ube.yamaguchi.jp",
"yuu.yamaguchi.jp",
"chuo.yamanashi.jp",
"doshi.yamanashi.jp",
"fuefuki.yamanashi.jp",
"fujikawa.yamanashi.jp",
"fujikawaguchiko.yamanashi.jp",
"fujiyoshida.yamanashi.jp",
"hayakawa.yamanashi.jp",
"hokuto.yamanashi.jp",
"ichikawamisato.yamanashi.jp",
"kai.yamanashi.jp",
"kofu.yamanashi.jp",
"koshu.yamanashi.jp",
"kosuge.yamanashi.jp",
"minami-alps.yamanashi.jp",
"minobu.yamanashi.jp",
"nakamichi.yamanashi.jp",
"nanbu.yamanashi.jp",
"narusawa.yamanashi.jp",
"nirasaki.yamanashi.jp",
"nishikatsura.yamanashi.jp",
"oshino.yamanashi.jp",
"otsuki.yamanashi.jp",
"showa.yamanashi.jp",
"tabayama.yamanashi.jp",
"tsuru.yamanashi.jp",
"uenohara.yamanashi.jp",
"yamanakako.yamanashi.jp",
"yamanashi.yamanashi.jp",
"ke",
"ac.ke",
"co.ke",
"go.ke",
"info.ke",
"me.ke",
"mobi.ke",
"ne.ke",
"or.ke",
"sc.ke",
"kg",
"org.kg",
"net.kg",
"com.kg",
"edu.kg",
"gov.kg",
"mil.kg",
"*.kh",
"ki",
"edu.ki",
"biz.ki",
"net.ki",
"org.ki",
"gov.ki",
"info.ki",
"com.ki",
"km",
"org.km",
"nom.km",
"gov.km",
"prd.km",
"tm.km",
"edu.km",
"mil.km",
"ass.km",
"com.km",
"coop.km",
"asso.km",
"presse.km",
"medecin.km",
"notaires.km",
"pharmaciens.km",
"veterinaire.km",
"gouv.km",
"kn",
"net.kn",
"org.kn",
"edu.kn",
"gov.kn",
"kp",
"com.kp",
"edu.kp",
"gov.kp",
"org.kp",
"rep.kp",
"tra.kp",
"kr",
"ac.kr",
"co.kr",
"es.kr",
"go.kr",
"hs.kr",
"kg.kr",
"mil.kr",
"ms.kr",
"ne.kr",
"or.kr",
"pe.kr",
"re.kr",
"sc.kr",
"busan.kr",
"chungbuk.kr",
"chungnam.kr",
"daegu.kr",
"daejeon.kr",
"gangwon.kr",
"gwangju.kr",
"gyeongbuk.kr",
"gyeonggi.kr",
"gyeongnam.kr",
"incheon.kr",
"jeju.kr",
"jeonbuk.kr",
"jeonnam.kr",
"seoul.kr",
"ulsan.kr",
"kw",
"com.kw",
"edu.kw",
"emb.kw",
"gov.kw",
"ind.kw",
"net.kw",
"org.kw",
"ky",
"edu.ky",
"gov.ky",
"com.ky",
"org.ky",
"net.ky",
"kz",
"org.kz",
"edu.kz",
"net.kz",
"gov.kz",
"mil.kz",
"com.kz",
"la",
"int.la",
"net.la",
"info.la",
"edu.la",
"gov.la",
"per.la",
"com.la",
"org.la",
"lb",
"com.lb",
"edu.lb",
"gov.lb",
"net.lb",
"org.lb",
"lc",
"com.lc",
"net.lc",
"co.lc",
"org.lc",
"edu.lc",
"gov.lc",
"li",
"lk",
"gov.lk",
"sch.lk",
"net.lk",
"int.lk",
"com.lk",
"org.lk",
"edu.lk",
"ngo.lk",
"soc.lk",
"web.lk",
"ltd.lk",
"assn.lk",
"grp.lk",
"hotel.lk",
"ac.lk",
"lr",
"com.lr",
"edu.lr",
"gov.lr",
"org.lr",
"net.lr",
"ls",
"ac.ls",
"biz.ls",
"co.ls",
"edu.ls",
"gov.ls",
"info.ls",
"net.ls",
"org.ls",
"sc.ls",
"lt",
"gov.lt",
"lu",
"lv",
"com.lv",
"edu.lv",
"gov.lv",
"org.lv",
"mil.lv",
"id.lv",
"net.lv",
"asn.lv",
"conf.lv",
"ly",
"com.ly",
"net.ly",
"gov.ly",
"plc.ly",
"edu.ly",
"sch.ly",
"med.ly",
"org.ly",
"id.ly",
"ma",
"co.ma",
"net.ma",
"gov.ma",
"org.ma",
"ac.ma",
"press.ma",
"mc",
"tm.mc",
"asso.mc",
"md",
"me",
"co.me",
"net.me",
"org.me",
"edu.me",
"ac.me",
"gov.me",
"its.me",
"priv.me",
"mg",
"org.mg",
"nom.mg",
"gov.mg",
"prd.mg",
"tm.mg",
"edu.mg",
"mil.mg",
"com.mg",
"co.mg",
"mh",
"mil",
"mk",
"com.mk",
"org.mk",
"net.mk",
"edu.mk",
"gov.mk",
"inf.mk",
"name.mk",
"ml",
"com.ml",
"edu.ml",
"gouv.ml",
"gov.ml",
"net.ml",
"org.ml",
"presse.ml",
"*.mm",
"mn",
"gov.mn",
"edu.mn",
"org.mn",
"mo",
"com.mo",
"net.mo",
"org.mo",
"edu.mo",
"gov.mo",
"mobi",
"mp",
"mq",
"mr",
"gov.mr",
"ms",
"com.ms",
"edu.ms",
"gov.ms",
"net.ms",
"org.ms",
"mt",
"com.mt",
"edu.mt",
"net.mt",
"org.mt",
"mu",
"com.mu",
"net.mu",
"org.mu",
"gov.mu",
"ac.mu",
"co.mu",
"or.mu",
"museum",
"academy.museum",
"agriculture.museum",
"air.museum",
"airguard.museum",
"alabama.museum",
"alaska.museum",
"amber.museum",
"ambulance.museum",
"american.museum",
"americana.museum",
"americanantiques.museum",
"americanart.museum",
"amsterdam.museum",
"and.museum",
"annefrank.museum",
"anthro.museum",
"anthropology.museum",
"antiques.museum",
"aquarium.museum",
"arboretum.museum",
"archaeological.museum",
"archaeology.museum",
"architecture.museum",
"art.museum",
"artanddesign.museum",
"artcenter.museum",
"artdeco.museum",
"arteducation.museum",
"artgallery.museum",
"arts.museum",
"artsandcrafts.museum",
"asmatart.museum",
"assassination.museum",
"assisi.museum",
"association.museum",
"astronomy.museum",
"atlanta.museum",
"austin.museum",
"australia.museum",
"automotive.museum",
"aviation.museum",
"axis.museum",
"badajoz.museum",
"baghdad.museum",
"bahn.museum",
"bale.museum",
"baltimore.museum",
"barcelona.museum",
"baseball.museum",
"basel.museum",
"baths.museum",
"bauern.museum",
"beauxarts.museum",
"beeldengeluid.museum",
"bellevue.museum",
"bergbau.museum",
"berkeley.museum",
"berlin.museum",
"bern.museum",
"bible.museum",
"bilbao.museum",
"bill.museum",
"birdart.museum",
"birthplace.museum",
"bonn.museum",
"boston.museum",
"botanical.museum",
"botanicalgarden.museum",
"botanicgarden.museum",
"botany.museum",
"brandywinevalley.museum",
"brasil.museum",
"bristol.museum",
"british.museum",
"britishcolumbia.museum",
"broadcast.museum",
"brunel.museum",
"brussel.museum",
"brussels.museum",
"bruxelles.museum",
"building.museum",
"burghof.museum",
"bus.museum",
"bushey.museum",
"cadaques.museum",
"california.museum",
"cambridge.museum",
"can.museum",
"canada.museum",
"capebreton.museum",
"carrier.museum",
"cartoonart.museum",
"casadelamoneda.museum",
"castle.museum",
"castres.museum",
"celtic.museum",
"center.museum",
"chattanooga.museum",
"cheltenham.museum",
"chesapeakebay.museum",
"chicago.museum",
"children.museum",
"childrens.museum",
"childrensgarden.museum",
"chiropractic.museum",
"chocolate.museum",
"christiansburg.museum",
"cincinnati.museum",
"cinema.museum",
"circus.museum",
"civilisation.museum",
"civilization.museum",
"civilwar.museum",
"clinton.museum",
"clock.museum",
"coal.museum",
"coastaldefence.museum",
"cody.museum",
"coldwar.museum",
"collection.museum",
"colonialwilliamsburg.museum",
"coloradoplateau.museum",
"columbia.museum",
"columbus.museum",
"communication.museum",
"communications.museum",
"community.museum",
"computer.museum",
"computerhistory.museum",
"comunicações.museum",
"contemporary.museum",
"contemporaryart.museum",
"convent.museum",
"copenhagen.museum",
"corporation.museum",
"correios-e-telecomunicações.museum",
"corvette.museum",
"costume.museum",
"countryestate.museum",
"county.museum",
"crafts.museum",
"cranbrook.museum",
"creation.museum",
"cultural.museum",
"culturalcenter.museum",
"culture.museum",
"cyber.museum",
"cymru.museum",
"dali.museum",
"dallas.museum",
"database.museum",
"ddr.museum",
"decorativearts.museum",
"delaware.museum",
"delmenhorst.museum",
"denmark.museum",
"depot.museum",
"design.museum",
"detroit.museum",
"dinosaur.museum",
"discovery.museum",
"dolls.museum",
"donostia.museum",
"durham.museum",
"eastafrica.museum",
"eastcoast.museum",
"education.museum",
"educational.museum",
"egyptian.museum",
"eisenbahn.museum",
"elburg.museum",
"elvendrell.museum",
"embroidery.museum",
"encyclopedic.museum",
"england.museum",
"entomology.museum",
"environment.museum",
"environmentalconservation.museum",
"epilepsy.museum",
"essex.museum",
"estate.museum",
"ethnology.museum",
"exeter.museum",
"exhibition.museum",
"family.museum",
"farm.museum",
"farmequipment.museum",
"farmers.museum",
"farmstead.museum",
"field.museum",
"figueres.museum",
"filatelia.museum",
"film.museum",
"fineart.museum",
"finearts.museum",
"finland.museum",
"flanders.museum",
"florida.museum",
"force.museum",
"fortmissoula.museum",
"fortworth.museum",
"foundation.museum",
"francaise.museum",
"frankfurt.museum",
"franziskaner.museum",
"freemasonry.museum",
"freiburg.museum",
"fribourg.museum",
"frog.museum",
"fundacio.museum",
"furniture.museum",
"gallery.museum",
"garden.museum",
"gateway.museum",
"geelvinck.museum",
"gemological.museum",
"geology.museum",
"georgia.museum",
"giessen.museum",
"glas.museum",
"glass.museum",
"gorge.museum",
"grandrapids.museum",
"graz.museum",
"guernsey.museum",
"halloffame.museum",
"hamburg.museum",
"handson.museum",
"harvestcelebration.museum",
"hawaii.museum",
"health.museum",
"heimatunduhren.museum",
"hellas.museum",
"helsinki.museum",
"hembygdsforbund.museum",
"heritage.museum",
"histoire.museum",
"historical.museum",
"historicalsociety.museum",
"historichouses.museum",
"historisch.museum",
"historisches.museum",
"history.museum",
"historyofscience.museum",
"horology.museum",
"house.museum",
"humanities.museum",
"illustration.museum",
"imageandsound.museum",
"indian.museum",
"indiana.museum",
"indianapolis.museum",
"indianmarket.museum",
"intelligence.museum",
"interactive.museum",
"iraq.museum",
"iron.museum",
"isleofman.museum",
"jamison.museum",
"jefferson.museum",
"jerusalem.museum",
"jewelry.museum",
"jewish.museum",
"jewishart.museum",
"jfk.museum",
"journalism.museum",
"judaica.museum",
"judygarland.museum",
"juedisches.museum",
"juif.museum",
"karate.museum",
"karikatur.museum",
"kids.museum",
"koebenhavn.museum",
"koeln.museum",
"kunst.museum",
"kunstsammlung.museum",
"kunstunddesign.museum",
"labor.museum",
"labour.museum",
"lajolla.museum",
"lancashire.museum",
"landes.museum",
"lans.museum",
"läns.museum",
"larsson.museum",
"lewismiller.museum",
"lincoln.museum",
"linz.museum",
"living.museum",
"livinghistory.museum",
"localhistory.museum",
"london.museum",
"losangeles.museum",
"louvre.museum",
"loyalist.museum",
"lucerne.museum",
"luxembourg.museum",
"luzern.museum",
"mad.museum",
"madrid.museum",
"mallorca.museum",
"manchester.museum",
"mansion.museum",
"mansions.museum",
"manx.museum",
"marburg.museum",
"maritime.museum",
"maritimo.museum",
"maryland.museum",
"marylhurst.museum",
"media.museum",
"medical.museum",
"medizinhistorisches.museum",
"meeres.museum",
"memorial.museum",
"mesaverde.museum",
"michigan.museum",
"midatlantic.museum",
"military.museum",
"mill.museum",
"miners.museum",
"mining.museum",
"minnesota.museum",
"missile.museum",
"missoula.museum",
"modern.museum",
"moma.museum",
"money.museum",
"monmouth.museum",
"monticello.museum",
"montreal.museum",
"moscow.museum",
"motorcycle.museum",
"muenchen.museum",
"muenster.museum",
"mulhouse.museum",
"muncie.museum",
"museet.museum",
"museumcenter.museum",
"museumvereniging.museum",
"music.museum",
"national.museum",
"nationalfirearms.museum",
"nationalheritage.museum",
"nativeamerican.museum",
"naturalhistory.museum",
"naturalhistorymuseum.museum",
"naturalsciences.museum",
"nature.museum",
"naturhistorisches.museum",
"natuurwetenschappen.museum",
"naumburg.museum",
"naval.museum",
"nebraska.museum",
"neues.museum",
"newhampshire.museum",
"newjersey.museum",
"newmexico.museum",
"newport.museum",
"newspaper.museum",
"newyork.museum",
"niepce.museum",
"norfolk.museum",
"north.museum",
"nrw.museum",
"nyc.museum",
"nyny.museum",
"oceanographic.museum",
"oceanographique.museum",
"omaha.museum",
"online.museum",
"ontario.museum",
"openair.museum",
"oregon.museum",
"oregontrail.museum",
"otago.museum",
"oxford.museum",
"pacific.museum",
"paderborn.museum",
"palace.museum",
"paleo.museum",
"palmsprings.museum",
"panama.museum",
"paris.museum",
"pasadena.museum",
"pharmacy.museum",
"philadelphia.museum",
"philadelphiaarea.museum",
"philately.museum",
"phoenix.museum",
"photography.museum",
"pilots.museum",
"pittsburgh.museum",
"planetarium.museum",
"plantation.museum",
"plants.museum",
"plaza.museum",
"portal.museum",
"portland.museum",
"portlligat.museum",
"posts-and-telecommunications.museum",
"preservation.museum",
"presidio.museum",
"press.museum",
"project.museum",
"public.museum",
"pubol.museum",
"quebec.museum",
"railroad.museum",
"railway.museum",
"research.museum",
"resistance.museum",
"riodejaneiro.museum",
"rochester.museum",
"rockart.museum",
"roma.museum",
"russia.museum",
"saintlouis.museum",
"salem.museum",
"salvadordali.museum",
"salzburg.museum",
"sandiego.museum",
"sanfrancisco.museum",
"santabarbara.museum",
"santacruz.museum",
"santafe.museum",
"saskatchewan.museum",
"satx.museum",
"savannahga.museum",
"schlesisches.museum",
"schoenbrunn.museum",
"schokoladen.museum",
"school.museum",
"schweiz.museum",
"science.museum",
"scienceandhistory.museum",
"scienceandindustry.museum",
"sciencecenter.museum",
"sciencecenters.museum",
"science-fiction.museum",
"sciencehistory.museum",
"sciences.museum",
"sciencesnaturelles.museum",
"scotland.museum",
"seaport.museum",
"settlement.museum",
"settlers.museum",
"shell.museum",
"sherbrooke.museum",
"sibenik.museum",
"silk.museum",
"ski.museum",
"skole.museum",
"society.museum",
"sologne.museum",
"soundandvision.museum",
"southcarolina.museum",
"southwest.museum",
"space.museum",
"spy.museum",
"square.museum",
"stadt.museum",
"stalbans.museum",
"starnberg.museum",
"state.museum",
"stateofdelaware.museum",
"station.museum",
"steam.museum",
"steiermark.museum",
"stjohn.museum",
"stockholm.museum",
"stpetersburg.museum",
"stuttgart.museum",
"suisse.museum",
"surgeonshall.museum",
"surrey.museum",
"svizzera.museum",
"sweden.museum",
"sydney.museum",
"tank.museum",
"tcm.museum",
"technology.museum",
"telekommunikation.museum",
"television.museum",
"texas.museum",
"textile.museum",
"theater.museum",
"time.museum",
"timekeeping.museum",
"topology.museum",
"torino.museum",
"touch.museum",
"town.museum",
"transport.museum",
"tree.museum",
"trolley.museum",
"trust.museum",
"trustee.museum",
"uhren.museum",
"ulm.museum",
"undersea.museum",
"university.museum",
"usa.museum",
"usantiques.museum",
"usarts.museum",
"uscountryestate.museum",
"usculture.museum",
"usdecorativearts.museum",
"usgarden.museum",
"ushistory.museum",
"ushuaia.museum",
"uslivinghistory.museum",
"utah.museum",
"uvic.museum",
"valley.museum",
"vantaa.museum",
"versailles.museum",
"viking.museum",
"village.museum",
"virginia.museum",
"virtual.museum",
"virtuel.museum",
"vlaanderen.museum",
"volkenkunde.museum",
"wales.museum",
"wallonie.museum",
"war.museum",
"washingtondc.museum",
"watchandclock.museum",
"watch-and-clock.museum",
"western.museum",
"westfalen.museum",
"whaling.museum",
"wildlife.museum",
"williamsburg.museum",
"windmill.museum",
"workshop.museum",
"york.museum",
"yorkshire.museum",
"yosemite.museum",
"youth.museum",
"zoological.museum",
"zoology.museum",
"ירושלים.museum",
"иком.museum",
"mv",
"aero.mv",
"biz.mv",
"com.mv",
"coop.mv",
"edu.mv",
"gov.mv",
"info.mv",
"int.mv",
"mil.mv",
"museum.mv",
"name.mv",
"net.mv",
"org.mv",
"pro.mv",
"mw",
"ac.mw",
"biz.mw",
"co.mw",
"com.mw",
"coop.mw",
"edu.mw",
"gov.mw",
"int.mw",
"museum.mw",
"net.mw",
"org.mw",
"mx",
"com.mx",
"org.mx",
"gob.mx",
"edu.mx",
"net.mx",
"my",
"com.my",
"net.my",
"org.my",
"gov.my",
"edu.my",
"mil.my",
"name.my",
"mz",
"ac.mz",
"adv.mz",
"co.mz",
"edu.mz",
"gov.mz",
"mil.mz",
"net.mz",
"org.mz",
"na",
"info.na",
"pro.na",
"name.na",
"school.na",
"or.na",
"dr.na",
"us.na",
"mx.na",
"ca.na",
"in.na",
"cc.na",
"tv.na",
"ws.na",
"mobi.na",
"co.na",
"com.na",
"org.na",
"name",
"nc",
"asso.nc",
"nom.nc",
"ne",
"net",
"nf",
"com.nf",
"net.nf",
"per.nf",
"rec.nf",
"web.nf",
"arts.nf",
"firm.nf",
"info.nf",
"other.nf",
"store.nf",
"ng",
"com.ng",
"edu.ng",
"gov.ng",
"i.ng",
"mil.ng",
"mobi.ng",
"name.ng",
"net.ng",
"org.ng",
"sch.ng",
"ni",
"ac.ni",
"biz.ni",
"co.ni",
"com.ni",
"edu.ni",
"gob.ni",
"in.ni",
"info.ni",
"int.ni",
"mil.ni",
"net.ni",
"nom.ni",
"org.ni",
"web.ni",
"nl",
"no",
"fhs.no",
"vgs.no",
"fylkesbibl.no",
"folkebibl.no",
"museum.no",
"idrett.no",
"priv.no",
"mil.no",
"stat.no",
"dep.no",
"kommune.no",
"herad.no",
"aa.no",
"ah.no",
"bu.no",
"fm.no",
"hl.no",
"hm.no",
"jan-mayen.no",
"mr.no",
"nl.no",
"nt.no",
"of.no",
"ol.no",
"oslo.no",
"rl.no",
"sf.no",
"st.no",
"svalbard.no",
"tm.no",
"tr.no",
"va.no",
"vf.no",
"gs.aa.no",
"gs.ah.no",
"gs.bu.no",
"gs.fm.no",
"gs.hl.no",
"gs.hm.no",
"gs.jan-mayen.no",
"gs.mr.no",
"gs.nl.no",
"gs.nt.no",
"gs.of.no",
"gs.ol.no",
"gs.oslo.no",
"gs.rl.no",
"gs.sf.no",
"gs.st.no",
"gs.svalbard.no",
"gs.tm.no",
"gs.tr.no",
"gs.va.no",
"gs.vf.no",
"akrehamn.no",
"åkrehamn.no",
"algard.no",
"ålgård.no",
"arna.no",
"brumunddal.no",
"bryne.no",
"bronnoysund.no",
"brønnøysund.no",
"drobak.no",
"drøbak.no",
"egersund.no",
"fetsund.no",
"floro.no",
"florø.no",
"fredrikstad.no",
"hokksund.no",
"honefoss.no",
"hønefoss.no",
"jessheim.no",
"jorpeland.no",
"jørpeland.no",
"kirkenes.no",
"kopervik.no",
"krokstadelva.no",
"langevag.no",
"langevåg.no",
"leirvik.no",
"mjondalen.no",
"mjøndalen.no",
"mo-i-rana.no",
"mosjoen.no",
"mosjøen.no",
"nesoddtangen.no",
"orkanger.no",
"osoyro.no",
"osøyro.no",
"raholt.no",
"råholt.no",
"sandnessjoen.no",
"sandnessjøen.no",
"skedsmokorset.no",
"slattum.no",
"spjelkavik.no",
"stathelle.no",
"stavern.no",
"stjordalshalsen.no",
"stjørdalshalsen.no",
"tananger.no",
"tranby.no",
"vossevangen.no",
"afjord.no",
"åfjord.no",
"agdenes.no",
"al.no",
"ål.no",
"alesund.no",
"ålesund.no",
"alstahaug.no",
"alta.no",
"áltá.no",
"alaheadju.no",
"álaheadju.no",
"alvdal.no",
"amli.no",
"åmli.no",
"amot.no",
"åmot.no",
"andebu.no",
"andoy.no",
"andøy.no",
"andasuolo.no",
"ardal.no",
"årdal.no",
"aremark.no",
"arendal.no",
"ås.no",
"aseral.no",
"åseral.no",
"asker.no",
"askim.no",
"askvoll.no",
"askoy.no",
"askøy.no",
"asnes.no",
"åsnes.no",
"audnedaln.no",
"aukra.no",
"aure.no",
"aurland.no",
"aurskog-holand.no",
"aurskog-høland.no",
"austevoll.no",
"austrheim.no",
"averoy.no",
"averøy.no",
"balestrand.no",
"ballangen.no",
"balat.no",
"bálát.no",
"balsfjord.no",
"bahccavuotna.no",
"báhccavuotna.no",
"bamble.no",
"bardu.no",
"beardu.no",
"beiarn.no",
"bajddar.no",
"bájddar.no",
"baidar.no",
"báidár.no",
"berg.no",
"bergen.no",
"berlevag.no",
"berlevåg.no",
"bearalvahki.no",
"bearalváhki.no",
"bindal.no",
"birkenes.no",
"bjarkoy.no",
"bjarkøy.no",
"bjerkreim.no",
"bjugn.no",
"bodo.no",
"bodø.no",
"badaddja.no",
"bådåddjå.no",
"budejju.no",
"bokn.no",
"bremanger.no",
"bronnoy.no",
"brønnøy.no",
"bygland.no",
"bykle.no",
"barum.no",
"bærum.no",
"bo.telemark.no",
"bø.telemark.no",
"bo.nordland.no",
"bø.nordland.no",
"bievat.no",
"bievát.no",
"bomlo.no",
"bømlo.no",
"batsfjord.no",
"båtsfjord.no",
"bahcavuotna.no",
"báhcavuotna.no",
"dovre.no",
"drammen.no",
"drangedal.no",
"dyroy.no",
"dyrøy.no",
"donna.no",
"dønna.no",
"eid.no",
"eidfjord.no",
"eidsberg.no",
"eidskog.no",
"eidsvoll.no",
"eigersund.no",
"elverum.no",
"enebakk.no",
"engerdal.no",
"etne.no",
"etnedal.no",
"evenes.no",
"evenassi.no",
"evenášši.no",
"evje-og-hornnes.no",
"farsund.no",
"fauske.no",
"fuossko.no",
"fuoisku.no",
"fedje.no",
"fet.no",
"finnoy.no",
"finnøy.no",
"fitjar.no",
"fjaler.no",
"fjell.no",
"flakstad.no",
"flatanger.no",
"flekkefjord.no",
"flesberg.no",
"flora.no",
"fla.no",
"flå.no",
"folldal.no",
"forsand.no",
"fosnes.no",
"frei.no",
"frogn.no",
"froland.no",
"frosta.no",
"frana.no",
"fræna.no",
"froya.no",
"frøya.no",
"fusa.no",
"fyresdal.no",
"forde.no",
"førde.no",
"gamvik.no",
"gangaviika.no",
"gáŋgaviika.no",
"gaular.no",
"gausdal.no",
"gildeskal.no",
"gildeskål.no",
"giske.no",
"gjemnes.no",
"gjerdrum.no",
"gjerstad.no",
"gjesdal.no",
"gjovik.no",
"gjøvik.no",
"gloppen.no",
"gol.no",
"gran.no",
"grane.no",
"granvin.no",
"gratangen.no",
"grimstad.no",
"grong.no",
"kraanghke.no",
"kråanghke.no",
"grue.no",
"gulen.no",
"hadsel.no",
"halden.no",
"halsa.no",
"hamar.no",
"hamaroy.no",
"habmer.no",
"hábmer.no",
"hapmir.no",
"hápmir.no",
"hammerfest.no",
"hammarfeasta.no",
"hámmárfeasta.no",
"haram.no",
"hareid.no",
"harstad.no",
"hasvik.no",
"aknoluokta.no",
"ákŋoluokta.no",
"hattfjelldal.no",
"aarborte.no",
"haugesund.no",
"hemne.no",
"hemnes.no",
"hemsedal.no",
"heroy.more-og-romsdal.no",
"herøy.møre-og-romsdal.no",
"heroy.nordland.no",
"herøy.nordland.no",
"hitra.no",
"hjartdal.no",
"hjelmeland.no",
"hobol.no",
"hobøl.no",
"hof.no",
"hol.no",
"hole.no",
"holmestrand.no",
"holtalen.no",
"holtålen.no",
"hornindal.no",
"horten.no",
"hurdal.no",
"hurum.no",
"hvaler.no",
"hyllestad.no",
"hagebostad.no",
"hægebostad.no",
"hoyanger.no",
"høyanger.no",
"hoylandet.no",
"høylandet.no",
"ha.no",
"hå.no",
"ibestad.no",
"inderoy.no",
"inderøy.no",
"iveland.no",
"jevnaker.no",
"jondal.no",
"jolster.no",
"jølster.no",
"karasjok.no",
"karasjohka.no",
"kárášjohka.no",
"karlsoy.no",
"galsa.no",
"gálsá.no",
"karmoy.no",
"karmøy.no",
"kautokeino.no",
"guovdageaidnu.no",
"klepp.no",
"klabu.no",
"klæbu.no",
"kongsberg.no",
"kongsvinger.no",
"kragero.no",
"kragerø.no",
"kristiansand.no",
"kristiansund.no",
"krodsherad.no",
"krødsherad.no",
"kvalsund.no",
"rahkkeravju.no",
"ráhkkerávju.no",
"kvam.no",
"kvinesdal.no",
"kvinnherad.no",
"kviteseid.no",
"kvitsoy.no",
"kvitsøy.no",
"kvafjord.no",
"kvæfjord.no",
"giehtavuoatna.no",
"kvanangen.no",
"kvænangen.no",
"navuotna.no",
"návuotna.no",
"kafjord.no",
"kåfjord.no",
"gaivuotna.no",
"gáivuotna.no",
"larvik.no",
"lavangen.no",
"lavagis.no",
"loabat.no",
"loabát.no",
"lebesby.no",
"davvesiida.no",
"leikanger.no",
"leirfjord.no",
"leka.no",
"leksvik.no",
"lenvik.no",
"leangaviika.no",
"leaŋgaviika.no",
"lesja.no",
"levanger.no",
"lier.no",
"lierne.no",
"lillehammer.no",
"lillesand.no",
"lindesnes.no",
"lindas.no",
"lindås.no",
"lom.no",
"loppa.no",
"lahppi.no",
"láhppi.no",
"lund.no",
"lunner.no",
"luroy.no",
"lurøy.no",
"luster.no",
"lyngdal.no",
"lyngen.no",
"ivgu.no",
"lardal.no",
"lerdal.no",
"lærdal.no",
"lodingen.no",
"lødingen.no",
"lorenskog.no",
"lørenskog.no",
"loten.no",
"løten.no",
"malvik.no",
"masoy.no",
"måsøy.no",
"muosat.no",
"muosát.no",
"mandal.no",
"marker.no",
"marnardal.no",
"masfjorden.no",
"meland.no",
"meldal.no",
"melhus.no",
"meloy.no",
"meløy.no",
"meraker.no",
"meråker.no",
"moareke.no",
"moåreke.no",
"midsund.no",
"midtre-gauldal.no",
"modalen.no",
"modum.no",
"molde.no",
"moskenes.no",
"moss.no",
"mosvik.no",
"malselv.no",
"målselv.no",
"malatvuopmi.no",
"málatvuopmi.no",
"namdalseid.no",
"aejrie.no",
"namsos.no",
"namsskogan.no",
"naamesjevuemie.no",
"nååmesjevuemie.no",
"laakesvuemie.no",
"nannestad.no",
"narvik.no",
"narviika.no",
"naustdal.no",
"nedre-eiker.no",
"nes.akershus.no",
"nes.buskerud.no",
"nesna.no",
"nesodden.no",
"nesseby.no",
"unjarga.no",
"unjárga.no",
"nesset.no",
"nissedal.no",
"nittedal.no",
"nord-aurdal.no",
"nord-fron.no",
"nord-odal.no",
"norddal.no",
"nordkapp.no",
"davvenjarga.no",
"davvenjárga.no",
"nordre-land.no",
"nordreisa.no",
"raisa.no",
"ráisa.no",
"nore-og-uvdal.no",
"notodden.no",
"naroy.no",
"nærøy.no",
"notteroy.no",
"nøtterøy.no",
"odda.no",
"oksnes.no",
"øksnes.no",
"oppdal.no",
"oppegard.no",
"oppegård.no",
"orkdal.no",
"orland.no",
"ørland.no",
"orskog.no",
"ørskog.no",
"orsta.no",
"ørsta.no",
"os.hedmark.no",
"os.hordaland.no",
"osen.no",
"osteroy.no",
"osterøy.no",
"ostre-toten.no",
"østre-toten.no",
"overhalla.no",
"ovre-eiker.no",
"øvre-eiker.no",
"oyer.no",
"øyer.no",
"oygarden.no",
"øygarden.no",
"oystre-slidre.no",
"øystre-slidre.no",
"porsanger.no",
"porsangu.no",
"porsáŋgu.no",
"porsgrunn.no",
"radoy.no",
"radøy.no",
"rakkestad.no",
"rana.no",
"ruovat.no",
"randaberg.no",
"rauma.no",
"rendalen.no",
"rennebu.no",
"rennesoy.no",
"rennesøy.no",
"rindal.no",
"ringebu.no",
"ringerike.no",
"ringsaker.no",
"rissa.no",
"risor.no",
"risør.no",
"roan.no",
"rollag.no",
"rygge.no",
"ralingen.no",
"rælingen.no",
"rodoy.no",
"rødøy.no",
"romskog.no",
"rømskog.no",
"roros.no",
"røros.no",
"rost.no",
"røst.no",
"royken.no",
"røyken.no",
"royrvik.no",
"røyrvik.no",
"rade.no",
"råde.no",
"salangen.no",
"siellak.no",
"saltdal.no",
"salat.no",
"sálát.no",
"sálat.no",
"samnanger.no",
"sande.more-og-romsdal.no",
"sande.møre-og-romsdal.no",
"sande.vestfold.no",
"sandefjord.no",
"sandnes.no",
"sandoy.no",
"sandøy.no",
"sarpsborg.no",
"sauda.no",
"sauherad.no",
"sel.no",
"selbu.no",
"selje.no",
"seljord.no",
"sigdal.no",
"siljan.no",
"sirdal.no",
"skaun.no",
"skedsmo.no",
"ski.no",
"skien.no",
"skiptvet.no",
"skjervoy.no",
"skjervøy.no",
"skierva.no",
"skiervá.no",
"skjak.no",
"skjåk.no",
"skodje.no",
"skanland.no",
"skånland.no",
"skanit.no",
"skánit.no",
"smola.no",
"smøla.no",
"snillfjord.no",
"snasa.no",
"snåsa.no",
"snoasa.no",
"snaase.no",
"snåase.no",
"sogndal.no",
"sokndal.no",
"sola.no",
"solund.no",
"songdalen.no",
"sortland.no",
"spydeberg.no",
"stange.no",
"stavanger.no",
"steigen.no",
"steinkjer.no",
"stjordal.no",
"stjørdal.no",
"stokke.no",
"stor-elvdal.no",
"stord.no",
"stordal.no",
"storfjord.no",
"omasvuotna.no",
"strand.no",
"stranda.no",
"stryn.no",
"sula.no",
"suldal.no",
"sund.no",
"sunndal.no",
"surnadal.no",
"sveio.no",
"svelvik.no",
"sykkylven.no",
"sogne.no",
"søgne.no",
"somna.no",
"sømna.no",
"sondre-land.no",
"søndre-land.no",
"sor-aurdal.no",
"sør-aurdal.no",
"sor-fron.no",
"sør-fron.no",
"sor-odal.no",
"sør-odal.no",
"sor-varanger.no",
"sør-varanger.no",
"matta-varjjat.no",
"mátta-várjjat.no",
"sorfold.no",
"sørfold.no",
"sorreisa.no",
"sørreisa.no",
"sorum.no",
"sørum.no",
"tana.no",
"deatnu.no",
"time.no",
"tingvoll.no",
"tinn.no",
"tjeldsund.no",
"dielddanuorri.no",
"tjome.no",
"tjøme.no",
"tokke.no",
"tolga.no",
"torsken.no",
"tranoy.no",
"tranøy.no",
"tromso.no",
"tromsø.no",
"tromsa.no",
"romsa.no",
"trondheim.no",
"troandin.no",
"trysil.no",
"trana.no",
"træna.no",
"trogstad.no",
"trøgstad.no",
"tvedestrand.no",
"tydal.no",
"tynset.no",
"tysfjord.no",
"divtasvuodna.no",
"divttasvuotna.no",
"tysnes.no",
"tysvar.no",
"tysvær.no",
"tonsberg.no",
"tønsberg.no",
"ullensaker.no",
"ullensvang.no",
"ulvik.no",
"utsira.no",
"vadso.no",
"vadsø.no",
"cahcesuolo.no",
"čáhcesuolo.no",
"vaksdal.no",
"valle.no",
"vang.no",
"vanylven.no",
"vardo.no",
"vardø.no",
"varggat.no",
"várggát.no",
"vefsn.no",
"vaapste.no",
"vega.no",
"vegarshei.no",
"vegårshei.no",
"vennesla.no",
"verdal.no",
"verran.no",
"vestby.no",
"vestnes.no",
"vestre-slidre.no",
"vestre-toten.no",
"vestvagoy.no",
"vestvågøy.no",
"vevelstad.no",
"vik.no",
"vikna.no",
"vindafjord.no",
"volda.no",
"voss.no",
"varoy.no",
"værøy.no",
"vagan.no",
"vågan.no",
"voagat.no",
"vagsoy.no",
"vågsøy.no",
"vaga.no",
"vågå.no",
"valer.ostfold.no",
"våler.østfold.no",
"valer.hedmark.no",
"våler.hedmark.no",
"*.np",
"nr",
"biz.nr",
"info.nr",
"gov.nr",
"edu.nr",
"org.nr",
"net.nr",
"com.nr",
"nu",
"nz",
"ac.nz",
"co.nz",
"cri.nz",
"geek.nz",
"gen.nz",
"govt.nz",
"health.nz",
"iwi.nz",
"kiwi.nz",
"maori.nz",
"mil.nz",
"māori.nz",
"net.nz",
"org.nz",
"parliament.nz",
"school.nz",
"om",
"co.om",
"com.om",
"edu.om",
"gov.om",
"med.om",
"museum.om",
"net.om",
"org.om",
"pro.om",
"onion",
"org",
"pa",
"ac.pa",
"gob.pa",
"com.pa",
"org.pa",
"sld.pa",
"edu.pa",
"net.pa",
"ing.pa",
"abo.pa",
"med.pa",
"nom.pa",
"pe",
"edu.pe",
"gob.pe",
"nom.pe",
"mil.pe",
"org.pe",
"com.pe",
"net.pe",
"pf",
"com.pf",
"org.pf",
"edu.pf",
"*.pg",
"ph",
"com.ph",
"net.ph",
"org.ph",
"gov.ph",
"edu.ph",
"ngo.ph",
"mil.ph",
"i.ph",
"pk",
"com.pk",
"net.pk",
"edu.pk",
"org.pk",
"fam.pk",
"biz.pk",
"web.pk",
"gov.pk",
"gob.pk",
"gok.pk",
"gon.pk",
"gop.pk",
"gos.pk",
"info.pk",
"pl",
"com.pl",
"net.pl",
"org.pl",
"aid.pl",
"agro.pl",
"atm.pl",
"auto.pl",
"biz.pl",
"edu.pl",
"gmina.pl",
"gsm.pl",
"info.pl",
"mail.pl",
"miasta.pl",
"media.pl",
"mil.pl",
"nieruchomosci.pl",
"nom.pl",
"pc.pl",
"powiat.pl",
"priv.pl",
"realestate.pl",
"rel.pl",
"sex.pl",
"shop.pl",
"sklep.pl",
"sos.pl",
"szkola.pl",
"targi.pl",
"tm.pl",
"tourism.pl",
"travel.pl",
"turystyka.pl",
"gov.pl",
"ap.gov.pl",
"ic.gov.pl",
"is.gov.pl",
"us.gov.pl",
"kmpsp.gov.pl",
"kppsp.gov.pl",
"kwpsp.gov.pl",
"psp.gov.pl",
"wskr.gov.pl",
"kwp.gov.pl",
"mw.gov.pl",
"ug.gov.pl",
"um.gov.pl",
"umig.gov.pl",
"ugim.gov.pl",
"upow.gov.pl",
"uw.gov.pl",
"starostwo.gov.pl",
"pa.gov.pl",
"po.gov.pl",
"psse.gov.pl",
"pup.gov.pl",
"rzgw.gov.pl",
"sa.gov.pl",
"so.gov.pl",
"sr.gov.pl",
"wsa.gov.pl",
"sko.gov.pl",
"uzs.gov.pl",
"wiih.gov.pl",
"winb.gov.pl",
"pinb.gov.pl",
"wios.gov.pl",
"witd.gov.pl",
"wzmiuw.gov.pl",
"piw.gov.pl",
"wiw.gov.pl",
"griw.gov.pl",
"wif.gov.pl",
"oum.gov.pl",
"sdn.gov.pl",
"zp.gov.pl",
"uppo.gov.pl",
"mup.gov.pl",
"wuoz.gov.pl",
"konsulat.gov.pl",
"oirm.gov.pl",
"augustow.pl",
"babia-gora.pl",
"bedzin.pl",
"beskidy.pl",
"bialowieza.pl",
"bialystok.pl",
"bielawa.pl",
"bieszczady.pl",
"boleslawiec.pl",
"bydgoszcz.pl",
"bytom.pl",
"cieszyn.pl",
"czeladz.pl",
"czest.pl",
"dlugoleka.pl",
"elblag.pl",
"elk.pl",
"glogow.pl",
"gniezno.pl",
"gorlice.pl",
"grajewo.pl",
"ilawa.pl",
"jaworzno.pl",
"jelenia-gora.pl",
"jgora.pl",
"kalisz.pl",
"kazimierz-dolny.pl",
"karpacz.pl",
"kartuzy.pl",
"kaszuby.pl",
"katowice.pl",
"kepno.pl",
"ketrzyn.pl",
"klodzko.pl",
"kobierzyce.pl",
"kolobrzeg.pl",
"konin.pl",
"konskowola.pl",
"kutno.pl",
"lapy.pl",
"lebork.pl",
"legnica.pl",
"lezajsk.pl",
"limanowa.pl",
"lomza.pl",
"lowicz.pl",
"lubin.pl",
"lukow.pl",
"malbork.pl",
"malopolska.pl",
"mazowsze.pl",
"mazury.pl",
"mielec.pl",
"mielno.pl",
"mragowo.pl",
"naklo.pl",
"nowaruda.pl",
"nysa.pl",
"olawa.pl",
"olecko.pl",
"olkusz.pl",
"olsztyn.pl",
"opoczno.pl",
"opole.pl",
"ostroda.pl",
"ostroleka.pl",
"ostrowiec.pl",
"ostrowwlkp.pl",
"pila.pl",
"pisz.pl",
"podhale.pl",
"podlasie.pl",
"polkowice.pl",
"pomorze.pl",
"pomorskie.pl",
"prochowice.pl",
"pruszkow.pl",
"przeworsk.pl",
"pulawy.pl",
"radom.pl",
"rawa-maz.pl",
"rybnik.pl",
"rzeszow.pl",
"sanok.pl",
"sejny.pl",
"slask.pl",
"slupsk.pl",
"sosnowiec.pl",
"stalowa-wola.pl",
"skoczow.pl",
"starachowice.pl",
"stargard.pl",
"suwalki.pl",
"swidnica.pl",
"swiebodzin.pl",
"swinoujscie.pl",
"szczecin.pl",
"szczytno.pl",
"tarnobrzeg.pl",
"tgory.pl",
"turek.pl",
"tychy.pl",
"ustka.pl",
"walbrzych.pl",
"warmia.pl",
"warszawa.pl",
"waw.pl",
"wegrow.pl",
"wielun.pl",
"wlocl.pl",
"wloclawek.pl",
"wodzislaw.pl",
"wolomin.pl",
"wroclaw.pl",
"zachpomor.pl",
"zagan.pl",
"zarow.pl",
"zgora.pl",
"zgorzelec.pl",
"pm",
"pn",
"gov.pn",
"co.pn",
"org.pn",
"edu.pn",
"net.pn",
"post",
"pr",
"com.pr",
"net.pr",
"org.pr",
"gov.pr",
"edu.pr",
"isla.pr",
"pro.pr",
"biz.pr",
"info.pr",
"name.pr",
"est.pr",
"prof.pr",
"ac.pr",
"pro",
"aaa.pro",
"aca.pro",
"acct.pro",
"avocat.pro",
"bar.pro",
"cpa.pro",
"eng.pro",
"jur.pro",
"law.pro",
"med.pro",
"recht.pro",
"ps",
"edu.ps",
"gov.ps",
"sec.ps",
"plo.ps",
"com.ps",
"org.ps",
"net.ps",
"pt",
"net.pt",
"gov.pt",
"org.pt",
"edu.pt",
"int.pt",
"publ.pt",
"com.pt",
"nome.pt",
"pw",
"co.pw",
"ne.pw",
"or.pw",
"ed.pw",
"go.pw",
"belau.pw",
"py",
"com.py",
"coop.py",
"edu.py",
"gov.py",
"mil.py",
"net.py",
"org.py",
"qa",
"com.qa",
"edu.qa",
"gov.qa",
"mil.qa",
"name.qa",
"net.qa",
"org.qa",
"sch.qa",
"re",
"asso.re",
"com.re",
"nom.re",
"ro",
"arts.ro",
"com.ro",
"firm.ro",
"info.ro",
"nom.ro",
"nt.ro",
"org.ro",
"rec.ro",
"store.ro",
"tm.ro",
"www.ro",
"rs",
"ac.rs",
"co.rs",
"edu.rs",
"gov.rs",
"in.rs",
"org.rs",
"ru",
"rw",
"ac.rw",
"co.rw",
"coop.rw",
"gov.rw",
"mil.rw",
"net.rw",
"org.rw",
"sa",
"com.sa",
"net.sa",
"org.sa",
"gov.sa",
"med.sa",
"pub.sa",
"edu.sa",
"sch.sa",
"sb",
"com.sb",
"edu.sb",
"gov.sb",
"net.sb",
"org.sb",
"sc",
"com.sc",
"gov.sc",
"net.sc",
"org.sc",
"edu.sc",
"sd",
"com.sd",
"net.sd",
"org.sd",
"edu.sd",
"med.sd",
"tv.sd",
"gov.sd",
"info.sd",
"se",
"a.se",
"ac.se",
"b.se",
"bd.se",
"brand.se",
"c.se",
"d.se",
"e.se",
"f.se",
"fh.se",
"fhsk.se",
"fhv.se",
"g.se",
"h.se",
"i.se",
"k.se",
"komforb.se",
"kommunalforbund.se",
"komvux.se",
"l.se",
"lanbib.se",
"m.se",
"n.se",
"naturbruksgymn.se",
"o.se",
"org.se",
"p.se",
"parti.se",
"pp.se",
"press.se",
"r.se",
"s.se",
"t.se",
"tm.se",
"u.se",
"w.se",
"x.se",
"y.se",
"z.se",
"sg",
"com.sg",
"net.sg",
"org.sg",
"gov.sg",
"edu.sg",
"per.sg",
"sh",
"com.sh",
"net.sh",
"gov.sh",
"org.sh",
"mil.sh",
"si",
"sj",
"sk",
"sl",
"com.sl",
"net.sl",
"edu.sl",
"gov.sl",
"org.sl",
"sm",
"sn",
"art.sn",
"com.sn",
"edu.sn",
"gouv.sn",
"org.sn",
"perso.sn",
"univ.sn",
"so",
"com.so",
"edu.so",
"gov.so",
"me.so",
"net.so",
"org.so",
"sr",
"ss",
"biz.ss",
"com.ss",
"edu.ss",
"gov.ss",
"net.ss",
"org.ss",
"st",
"co.st",
"com.st",
"consulado.st",
"edu.st",
"embaixada.st",
"gov.st",
"mil.st",
"net.st",
"org.st",
"principe.st",
"saotome.st",
"store.st",
"su",
"sv",
"com.sv",
"edu.sv",
"gob.sv",
"org.sv",
"red.sv",
"sx",
"gov.sx",
"sy",
"edu.sy",
"gov.sy",
"net.sy",
"mil.sy",
"com.sy",
"org.sy",
"sz",
"co.sz",
"ac.sz",
"org.sz",
"tc",
"td",
"tel",
"tf",
"tg",
"th",
"ac.th",
"co.th",
"go.th",
"in.th",
"mi.th",
"net.th",
"or.th",
"tj",
"ac.tj",
"biz.tj",
"co.tj",
"com.tj",
"edu.tj",
"go.tj",
"gov.tj",
"int.tj",
"mil.tj",
"name.tj",
"net.tj",
"nic.tj",
"org.tj",
"test.tj",
"web.tj",
"tk",
"tl",
"gov.tl",
"tm",
"com.tm",
"co.tm",
"org.tm",
"net.tm",
"nom.tm",
"gov.tm",
"mil.tm",
"edu.tm",
"tn",
"com.tn",
"ens.tn",
"fin.tn",
"gov.tn",
"ind.tn",
"intl.tn",
"nat.tn",
"net.tn",
"org.tn",
"info.tn",
"perso.tn",
"tourism.tn",
"edunet.tn",
"rnrt.tn",
"rns.tn",
"rnu.tn",
"mincom.tn",
"agrinet.tn",
"defense.tn",
"turen.tn",
"to",
"com.to",
"gov.to",
"net.to",
"org.to",
"edu.to",
"mil.to",
"tr",
"av.tr",
"bbs.tr",
"bel.tr",
"biz.tr",
"com.tr",
"dr.tr",
"edu.tr",
"gen.tr",
"gov.tr",
"info.tr",
"mil.tr",
"k12.tr",
"kep.tr",
"name.tr",
"net.tr",
"org.tr",
"pol.tr",
"tel.tr",
"tsk.tr",
"tv.tr",
"web.tr",
"nc.tr",
"gov.nc.tr",
"tt",
"co.tt",
"com.tt",
"org.tt",
"net.tt",
"biz.tt",
"info.tt",
"pro.tt",
"int.tt",
"coop.tt",
"jobs.tt",
"mobi.tt",
"travel.tt",
"museum.tt",
"aero.tt",
"name.tt",
"gov.tt",
"edu.tt",
"tv",
"tw",
"edu.tw",
"gov.tw",
"mil.tw",
"com.tw",
"net.tw",
"org.tw",
"idv.tw",
"game.tw",
"ebiz.tw",
"club.tw",
"網路.tw",
"組織.tw",
"商業.tw",
"tz",
"ac.tz",
"co.tz",
"go.tz",
"hotel.tz",
"info.tz",
"me.tz",
"mil.tz",
"mobi.tz",
"ne.tz",
"or.tz",
"sc.tz",
"tv.tz",
"ua",
"com.ua",
"edu.ua",
"gov.ua",
"in.ua",
"net.ua",
"org.ua",
"cherkassy.ua",
"cherkasy.ua",
"chernigov.ua",
"chernihiv.ua",
"chernivtsi.ua",
"chernovtsy.ua",
"ck.ua",
"cn.ua",
"cr.ua",
"crimea.ua",
"cv.ua",
"dn.ua",
"dnepropetrovsk.ua",
"dnipropetrovsk.ua",
"dominic.ua",
"donetsk.ua",
"dp.ua",
"if.ua",
"ivano-frankivsk.ua",
"kh.ua",
"kharkiv.ua",
"kharkov.ua",
"kherson.ua",
"khmelnitskiy.ua",
"khmelnytskyi.ua",
"kiev.ua",
"kirovograd.ua",
"km.ua",
"kr.ua",
"krym.ua",
"ks.ua",
"kv.ua",
"kyiv.ua",
"lg.ua",
"lt.ua",
"lugansk.ua",
"lutsk.ua",
"lv.ua",
"lviv.ua",
"mk.ua",
"mykolaiv.ua",
"nikolaev.ua",
"od.ua",
"odesa.ua",
"odessa.ua",
"pl.ua",
"poltava.ua",
"rivne.ua",
"rovno.ua",
"rv.ua",
"sb.ua",
"sebastopol.ua",
"sevastopol.ua",
"sm.ua",
"sumy.ua",
"te.ua",
"ternopil.ua",
"uz.ua",
"uzhgorod.ua",
"vinnica.ua",
"vinnytsia.ua",
"vn.ua",
"volyn.ua",
"yalta.ua",
"zaporizhzhe.ua",
"zaporizhzhia.ua",
"zhitomir.ua",
"zhytomyr.ua",
"zp.ua",
"zt.ua",
"ug",
"co.ug",
"or.ug",
"ac.ug",
"sc.ug",
"go.ug",
"ne.ug",
"com.ug",
"org.ug",
"uk",
"ac.uk",
"co.uk",
"gov.uk",
"ltd.uk",
"me.uk",
"net.uk",
"nhs.uk",
"org.uk",
"plc.uk",
"police.uk",
"*.sch.uk",
"us",
"dni.us",
"fed.us",
"isa.us",
"kids.us",
"nsn.us",
"ak.us",
"al.us",
"ar.us",
"as.us",
"az.us",
"ca.us",
"co.us",
"ct.us",
"dc.us",
"de.us",
"fl.us",
"ga.us",
"gu.us",
"hi.us",
"ia.us",
"id.us",
"il.us",
"in.us",
"ks.us",
"ky.us",
"la.us",
"ma.us",
"md.us",
"me.us",
"mi.us",
"mn.us",
"mo.us",
"ms.us",
"mt.us",
"nc.us",
"nd.us",
"ne.us",
"nh.us",
"nj.us",
"nm.us",
"nv.us",
"ny.us",
"oh.us",
"ok.us",
"or.us",
"pa.us",
"pr.us",
"ri.us",
"sc.us",
"sd.us",
"tn.us",
"tx.us",
"ut.us",
"vi.us",
"vt.us",
"va.us",
"wa.us",
"wi.us",
"wv.us",
"wy.us",
"k12.ak.us",
"k12.al.us",
"k12.ar.us",
"k12.as.us",
"k12.az.us",
"k12.ca.us",
"k12.co.us",
"k12.ct.us",
"k12.dc.us",
"k12.de.us",
"k12.fl.us",
"k12.ga.us",
"k12.gu.us",
"k12.ia.us",
"k12.id.us",
"k12.il.us",
"k12.in.us",
"k12.ks.us",
"k12.ky.us",
"k12.la.us",
"k12.ma.us",
"k12.md.us",
"k12.me.us",
"k12.mi.us",
"k12.mn.us",
"k12.mo.us",
"k12.ms.us",
"k12.mt.us",
"k12.nc.us",
"k12.ne.us",
"k12.nh.us",
"k12.nj.us",
"k12.nm.us",
"k12.nv.us",
"k12.ny.us",
"k12.oh.us",
"k12.ok.us",
"k12.or.us",
"k12.pa.us",
"k12.pr.us",
"k12.ri.us",
"k12.sc.us",
"k12.tn.us",
"k12.tx.us",
"k12.ut.us",
"k12.vi.us",
"k12.vt.us",
"k12.va.us",
"k12.wa.us",
"k12.wi.us",
"k12.wy.us",
"cc.ak.us",
"cc.al.us",
"cc.ar.us",
"cc.as.us",
"cc.az.us",
"cc.ca.us",
"cc.co.us",
"cc.ct.us",
"cc.dc.us",
"cc.de.us",
"cc.fl.us",
"cc.ga.us",
"cc.gu.us",
"cc.hi.us",
"cc.ia.us",
"cc.id.us",
"cc.il.us",
"cc.in.us",
"cc.ks.us",
"cc.ky.us",
"cc.la.us",
"cc.ma.us",
"cc.md.us",
"cc.me.us",
"cc.mi.us",
"cc.mn.us",
"cc.mo.us",
"cc.ms.us",
"cc.mt.us",
"cc.nc.us",
"cc.nd.us",
"cc.ne.us",
"cc.nh.us",
"cc.nj.us",
"cc.nm.us",
"cc.nv.us",
"cc.ny.us",
"cc.oh.us",
"cc.ok.us",
"cc.or.us",
"cc.pa.us",
"cc.pr.us",
"cc.ri.us",
"cc.sc.us",
"cc.sd.us",
"cc.tn.us",
"cc.tx.us",
"cc.ut.us",
"cc.vi.us",
"cc.vt.us",
"cc.va.us",
"cc.wa.us",
"cc.wi.us",
"cc.wv.us",
"cc.wy.us",
"lib.ak.us",
"lib.al.us",
"lib.ar.us",
"lib.as.us",
"lib.az.us",
"lib.ca.us",
"lib.co.us",
"lib.ct.us",
"lib.dc.us",
"lib.fl.us",
"lib.ga.us",
"lib.gu.us",
"lib.hi.us",
"lib.ia.us",
"lib.id.us",
"lib.il.us",
"lib.in.us",
"lib.ks.us",
"lib.ky.us",
"lib.la.us",
"lib.ma.us",
"lib.md.us",
"lib.me.us",
"lib.mi.us",
"lib.mn.us",
"lib.mo.us",
"lib.ms.us",
"lib.mt.us",
"lib.nc.us",
"lib.nd.us",
"lib.ne.us",
"lib.nh.us",
"lib.nj.us",
"lib.nm.us",
"lib.nv.us",
"lib.ny.us",
"lib.oh.us",
"lib.ok.us",
"lib.or.us",
"lib.pa.us",
"lib.pr.us",
"lib.ri.us",
"lib.sc.us",
"lib.sd.us",
"lib.tn.us",
"lib.tx.us",
"lib.ut.us",
"lib.vi.us",
"lib.vt.us",
"lib.va.us",
"lib.wa.us",
"lib.wi.us",
"lib.wy.us",
"pvt.k12.ma.us",
"chtr.k12.ma.us",
"paroch.k12.ma.us",
"ann-arbor.mi.us",
"cog.mi.us",
"dst.mi.us",
"eaton.mi.us",
"gen.mi.us",
"mus.mi.us",
"tec.mi.us",
"washtenaw.mi.us",
"uy",
"com.uy",
"edu.uy",
"gub.uy",
"mil.uy",
"net.uy",
"org.uy",
"uz",
"co.uz",
"com.uz",
"net.uz",
"org.uz",
"va",
"vc",
"com.vc",
"net.vc",
"org.vc",
"gov.vc",
"mil.vc",
"edu.vc",
"ve",
"arts.ve",
"co.ve",
"com.ve",
"e12.ve",
"edu.ve",
"firm.ve",
"gob.ve",
"gov.ve",
"info.ve",
"int.ve",
"mil.ve",
"net.ve",
"org.ve",
"rec.ve",
"store.ve",
"tec.ve",
"web.ve",
"vg",
"vi",
"co.vi",
"com.vi",
"k12.vi",
"net.vi",
"org.vi",
"vn",
"com.vn",
"net.vn",
"org.vn",
"edu.vn",
"gov.vn",
"int.vn",
"ac.vn",
"biz.vn",
"info.vn",
"name.vn",
"pro.vn",
"health.vn",
"vu",
"com.vu",
"edu.vu",
"net.vu",
"org.vu",
"wf",
"ws",
"com.ws",
"net.ws",
"org.ws",
"gov.ws",
"edu.ws",
"yt",
"امارات",
"հայ",
"বাংলা",
"бг",
"бел",
"中国",
"中國",
"الجزائر",
"مصر",
"ею",
"ευ",
"موريتانيا",
"გე",
"ελ",
"香港",
"公司.香港",
"教育.香港",
"政府.香港",
"個人.香港",
"網絡.香港",
"組織.香港",
"ಭಾರತ",
"ଭାରତ",
"ভাৰত",
"भारतम्",
"भारोत",
"ڀارت",
"ഭാരതം",
"भारत",
"بارت",
"بھارت",
"భారత్",
"ભારત",
"ਭਾਰਤ",
"ভারত",
"இந்தியா",
"ایران",
"ايران",
"عراق",
"الاردن",
"한국",
"қаз",
"ලංකා",
"இலங்கை",
"المغرب",
"мкд",
"мон",
"澳門",
"澳门",
"مليسيا",
"عمان",
"پاکستان",
"پاكستان",
"فلسطين",
"срб",
"пр.срб",
"орг.срб",
"обр.срб",
"од.срб",
"упр.срб",
"ак.срб",
"рф",
"قطر",
"السعودية",
"السعودیة",
"السعودیۃ",
"السعوديه",
"سودان",
"新加坡",
"சிங்கப்பூர்",
"سورية",
"سوريا",
"ไทย",
"ศึกษา.ไทย",
"ธุรกิจ.ไทย",
"รัฐบาล.ไทย",
"ทหาร.ไทย",
"เน็ต.ไทย",
"องค์กร.ไทย",
"تونس",
"台灣",
"台湾",
"臺灣",
"укр",
"اليمن",
"xxx",
"*.ye",
"ac.za",
"agric.za",
"alt.za",
"co.za",
"edu.za",
"gov.za",
"grondar.za",
"law.za",
"mil.za",
"net.za",
"ngo.za",
"nic.za",
"nis.za",
"nom.za",
"org.za",
"school.za",
"tm.za",
"web.za",
"zm",
"ac.zm",
"biz.zm",
"co.zm",
"com.zm",
"edu.zm",
"gov.zm",
"info.zm",
"mil.zm",
"net.zm",
"org.zm",
"sch.zm",
"zw",
"ac.zw",
"co.zw",
"gov.zw",
"mil.zw",
"org.zw",
"aaa",
"aarp",
"abarth",
"abb",
"abbott",
"abbvie",
"abc",
"able",
"abogado",
"abudhabi",
"academy",
"accenture",
"accountant",
"accountants",
"aco",
"actor",
"adac",
"ads",
"adult",
"aeg",
"aetna",
"afamilycompany",
"afl",
"africa",
"agakhan",
"agency",
"aig",
"aigo",
"airbus",
"airforce",
"airtel",
"akdn",
"alfaromeo",
"alibaba",
"alipay",
"allfinanz",
"allstate",
"ally",
"alsace",
"alstom",
"amazon",
"americanexpress",
"americanfamily",
"amex",
"amfam",
"amica",
"amsterdam",
"analytics",
"android",
"anquan",
"anz",
"aol",
"apartments",
"app",
"apple",
"aquarelle",
"arab",
"aramco",
"archi",
"army",
"art",
"arte",
"asda",
"associates",
"athleta",
"attorney",
"auction",
"audi",
"audible",
"audio",
"auspost",
"author",
"auto",
"autos",
"avianca",
"aws",
"axa",
"azure",
"baby",
"baidu",
"banamex",
"bananarepublic",
"band",
"bank",
"bar",
"barcelona",
"barclaycard",
"barclays",
"barefoot",
"bargains",
"baseball",
"basketball",
"bauhaus",
"bayern",
"bbc",
"bbt",
"bbva",
"bcg",
"bcn",
"beats",
"beauty",
"beer",
"bentley",
"berlin",
"best",
"bestbuy",
"bet",
"bharti",
"bible",
"bid",
"bike",
"bing",
"bingo",
"bio",
"black",
"blackfriday",
"blockbuster",
"blog",
"bloomberg",
"blue",
"bms",
"bmw",
"bnpparibas",
"boats",
"boehringer",
"bofa",
"bom",
"bond",
"boo",
"book",
"booking",
"bosch",
"bostik",
"boston",
"bot",
"boutique",
"box",
"bradesco",
"bridgestone",
"broadway",
"broker",
"brother",
"brussels",
"budapest",
"bugatti",
"build",
"builders",
"business",
"buy",
"buzz",
"bzh",
"cab",
"cafe",
"cal",
"call",
"calvinklein",
"cam",
"camera",
"camp",
"cancerresearch",
"canon",
"capetown",
"capital",
"capitalone",
"car",
"caravan",
"cards",
"care",
"career",
"careers",
"cars",
"casa",
"case",
"caseih",
"cash",
"casino",
"catering",
"catholic",
"cba",
"cbn",
"cbre",
"cbs",
"ceb",
"center",
"ceo",
"cern",
"cfa",
"cfd",
"chanel",
"channel",
"charity",
"chase",
"chat",
"cheap",
"chintai",
"christmas",
"chrome",
"church",
"cipriani",
"circle",
"cisco",
"citadel",
"citi",
"citic",
"city",
"cityeats",
"claims",
"cleaning",
"click",
"clinic",
"clinique",
"clothing",
"cloud",
"club",
"clubmed",
"coach",
"codes",
"coffee",
"college",
"cologne",
"comcast",
"commbank",
"community",
"company",
"compare",
"computer",
"comsec",
"condos",
"construction",
"consulting",
"contact",
"contractors",
"cooking",
"cookingchannel",
"cool",
"corsica",
"country",
"coupon",
"coupons",
"courses",
"cpa",
"credit",
"creditcard",
"creditunion",
"cricket",
"crown",
"crs",
"cruise",
"cruises",
"csc",
"cuisinella",
"cymru",
"cyou",
"dabur",
"dad",
"dance",
"data",
"date",
"dating",
"datsun",
"day",
"dclk",
"dds",
"deal",
"dealer",
"deals",
"degree",
"delivery",
"dell",
"deloitte",
"delta",
"democrat",
"dental",
"dentist",
"desi",
"design",
"dev",
"dhl",
"diamonds",
"diet",
"digital",
"direct",
"directory",
"discount",
"discover",
"dish",
"diy",
"dnp",
"docs",
"doctor",
"dog",
"domains",
"dot",
"download",
"drive",
"dtv",
"dubai",
"duck",
"dunlop",
"dupont",
"durban",
"dvag",
"dvr",
"earth",
"eat",
"eco",
"edeka",
"education",
"email",
"emerck",
"energy",
"engineer",
"engineering",
"enterprises",
"epson",
"equipment",
"ericsson",
"erni",
"esq",
"estate",
"esurance",
"etisalat",
"eurovision",
"eus",
"events",
"exchange",
"expert",
"exposed",
"express",
"extraspace",
"fage",
"fail",
"fairwinds",
"faith",
"family",
"fan",
"fans",
"farm",
"farmers",
"fashion",
"fast",
"fedex",
"feedback",
"ferrari",
"ferrero",
"fiat",
"fidelity",
"fido",
"film",
"final",
"finance",
"financial",
"fire",
"firestone",
"firmdale",
"fish",
"fishing",
"fit",
"fitness",
"flickr",
"flights",
"flir",
"florist",
"flowers",
"fly",
"foo",
"food",
"foodnetwork",
"football",
"ford",
"forex",
"forsale",
"forum",
"foundation",
"fox",
"free",
"fresenius",
"frl",
"frogans",
"frontdoor",
"frontier",
"ftr",
"fujitsu",
"fujixerox",
"fun",
"fund",
"furniture",
"futbol",
"fyi",
"gal",
"gallery",
"gallo",
"gallup",
"game",
"games",
"gap",
"garden",
"gay",
"gbiz",
"gdn",
"gea",
"gent",
"genting",
"george",
"ggee",
"gift",
"gifts",
"gives",
"giving",
"glade",
"glass",
"gle",
"global",
"globo",
"gmail",
"gmbh",
"gmo",
"gmx",
"godaddy",
"gold",
"goldpoint",
"golf",
"goo",
"goodyear",
"goog",
"google",
"gop",
"got",
"grainger",
"graphics",
"gratis",
"green",
"gripe",
"grocery",
"group",
"guardian",
"gucci",
"guge",
"guide",
"guitars",
"guru",
"hair",
"hamburg",
"hangout",
"haus",
"hbo",
"hdfc",
"hdfcbank",
"health",
"healthcare",
"help",
"helsinki",
"here",
"hermes",
"hgtv",
"hiphop",
"hisamitsu",
"hitachi",
"hiv",
"hkt",
"hockey",
"holdings",
"holiday",
"homedepot",
"homegoods",
"homes",
"homesense",
"honda",
"horse",
"hospital",
"host",
"hosting",
"hot",
"hoteles",
"hotels",
"hotmail",
"house",
"how",
"hsbc",
"hughes",
"hyatt",
"hyundai",
"ibm",
"icbc",
"ice",
"icu",
"ieee",
"ifm",
"ikano",
"imamat",
"imdb",
"immo",
"immobilien",
"inc",
"industries",
"infiniti",
"ing",
"ink",
"institute",
"insurance",
"insure",
"intel",
"international",
"intuit",
"investments",
"ipiranga",
"irish",
"ismaili",
"ist",
"istanbul",
"itau",
"itv",
"iveco",
"jaguar",
"java",
"jcb",
"jcp",
"jeep",
"jetzt",
"jewelry",
"jio",
"jll",
"jmp",
"jnj",
"joburg",
"jot",
"joy",
"jpmorgan",
"jprs",
"juegos",
"juniper",
"kaufen",
"kddi",
"kerryhotels",
"kerrylogistics",
"kerryproperties",
"kfh",
"kia",
"kim",
"kinder",
"kindle",
"kitchen",
"kiwi",
"koeln",
"komatsu",
"kosher",
"kpmg",
"kpn",
"krd",
"kred",
"kuokgroup",
"kyoto",
"lacaixa",
"lamborghini",
"lamer",
"lancaster",
"lancia",
"land",
"landrover",
"lanxess",
"lasalle",
"lat",
"latino",
"latrobe",
"law",
"lawyer",
"lds",
"lease",
"leclerc",
"lefrak",
"legal",
"lego",
"lexus",
"lgbt",
"lidl",
"life",
"lifeinsurance",
"lifestyle",
"lighting",
"like",
"lilly",
"limited",
"limo",
"lincoln",
"linde",
"link",
"lipsy",
"live",
"living",
"lixil",
"llc",
"llp",
"loan",
"loans",
"locker",
"locus",
"loft",
"lol",
"london",
"lotte",
"lotto",
"love",
"lpl",
"lplfinancial",
"ltd",
"ltda",
"lundbeck",
"lupin",
"luxe",
"luxury",
"macys",
"madrid",
"maif",
"maison",
"makeup",
"man",
"management",
"mango",
"map",
"market",
"marketing",
"markets",
"marriott",
"marshalls",
"maserati",
"mattel",
"mba",
"mckinsey",
"med",
"media",
"meet",
"melbourne",
"meme",
"memorial",
"men",
"menu",
"merckmsd",
"metlife",
"miami",
"microsoft",
"mini",
"mint",
"mit",
"mitsubishi",
"mlb",
"mls",
"mma",
"mobile",
"moda",
"moe",
"moi",
"mom",
"monash",
"money",
"monster",
"mormon",
"mortgage",
"moscow",
"moto",
"motorcycles",
"mov",
"movie",
"msd",
"mtn",
"mtr",
"mutual",
"nab",
"nadex",
"nagoya",
"nationwide",
"natura",
"navy",
"nba",
"nec",
"netbank",
"netflix",
"network",
"neustar",
"new",
"newholland",
"news",
"next",
"nextdirect",
"nexus",
"nfl",
"ngo",
"nhk",
"nico",
"nike",
"nikon",
"ninja",
"nissan",
"nissay",
"nokia",
"northwesternmutual",
"norton",
"now",
"nowruz",
"nowtv",
"nra",
"nrw",
"ntt",
"nyc",
"obi",
"observer",
"off",
"office",
"okinawa",
"olayan",
"olayangroup",
"oldnavy",
"ollo",
"omega",
"one",
"ong",
"onl",
"online",
"onyourside",
"ooo",
"open",
"oracle",
"orange",
"organic",
"origins",
"osaka",
"otsuka",
"ott",
"ovh",
"page",
"panasonic",
"paris",
"pars",
"partners",
"parts",
"party",
"passagens",
"pay",
"pccw",
"pet",
"pfizer",
"pharmacy",
"phd",
"philips",
"phone",
"photo",
"photography",
"photos",
"physio",
"pics",
"pictet",
"pictures",
"pid",
"pin",
"ping",
"pink",
"pioneer",
"pizza",
"place",
"play",
"playstation",
"plumbing",
"plus",
"pnc",
"pohl",
"poker",
"politie",
"porn",
"pramerica",
"praxi",
"press",
"prime",
"prod",
"productions",
"prof",
"progressive",
"promo",
"properties",
"property",
"protection",
"pru",
"prudential",
"pub",
"pwc",
"qpon",
"quebec",
"quest",
"qvc",
"racing",
"radio",
"raid",
"read",
"realestate",
"realtor",
"realty",
"recipes",
"red",
"redstone",
"redumbrella",
"rehab",
"reise",
"reisen",
"reit",
"reliance",
"ren",
"rent",
"rentals",
"repair",
"report",
"republican",
"rest",
"restaurant",
"review",
"reviews",
"rexroth",
"rich",
"richardli",
"ricoh",
"rightathome",
"ril",
"rio",
"rip",
"rmit",
"rocher",
"rocks",
"rodeo",
"rogers",
"room",
"rsvp",
"rugby",
"ruhr",
"run",
"rwe",
"ryukyu",
"saarland",
"safe",
"safety",
"sakura",
"sale",
"salon",
"samsclub",
"samsung",
"sandvik",
"sandvikcoromant",
"sanofi",
"sap",
"sarl",
"sas",
"save",
"saxo",
"sbi",
"sbs",
"sca",
"scb",
"schaeffler",
"schmidt",
"scholarships",
"school",
"schule",
"schwarz",
"science",
"scjohnson",
"scor",
"scot",
"search",
"seat",
"secure",
"security",
"seek",
"select",
"sener",
"services",
"ses",
"seven",
"sew",
"sex",
"sexy",
"sfr",
"shangrila",
"sharp",
"shaw",
"shell",
"shia",
"shiksha",
"shoes",
"shop",
"shopping",
"shouji",
"show",
"showtime",
"shriram",
"silk",
"sina",
"singles",
"site",
"ski",
"skin",
"sky",
"skype",
"sling",
"smart",
"smile",
"sncf",
"soccer",
"social",
"softbank",
"software",
"sohu",
"solar",
"solutions",
"song",
"sony",
"soy",
"spa",
"space",
"sport",
"spot",
"spreadbetting",
"srl",
"stada",
"staples",
"star",
"statebank",
"statefarm",
"stc",
"stcgroup",
"stockholm",
"storage",
"store",
"stream",
"studio",
"study",
"style",
"sucks",
"supplies",
"supply",
"support",
"surf",
"surgery",
"suzuki",
"swatch",
"swiftcover",
"swiss",
"sydney",
"symantec",
"systems",
"tab",
"taipei",
"talk",
"taobao",
"target",
"tatamotors",
"tatar",
"tattoo",
"tax",
"taxi",
"tci",
"tdk",
"team",
"tech",
"technology",
"temasek",
"tennis",
"teva",
"thd",
"theater",
"theatre",
"tiaa",
"tickets",
"tienda",
"tiffany",
"tips",
"tires",
"tirol",
"tjmaxx",
"tjx",
"tkmaxx",
"tmall",
"today",
"tokyo",
"tools",
"top",
"toray",
"toshiba",
"total",
"tours",
"town",
"toyota",
"toys",
"trade",
"trading",
"training",
"travel",
"travelchannel",
"travelers",
"travelersinsurance",
"trust",
"trv",
"tube",
"tui",
"tunes",
"tushu",
"tvs",
"ubank",
"ubs",
"unicom",
"university",
"uno",
"uol",
"ups",
"vacations",
"vana",
"vanguard",
"vegas",
"ventures",
"verisign",
"versicherung",
"vet",
"viajes",
"video",
"vig",
"viking",
"villas",
"vin",
"vip",
"virgin",
"visa",
"vision",
"viva",
"vivo",
"vlaanderen",
"vodka",
"volkswagen",
"volvo",
"vote",
"voting",
"voto",
"voyage",
"vuelos",
"wales",
"walmart",
"walter",
"wang",
"wanggou",
"watch",
"watches",
"weather",
"weatherchannel",
"webcam",
"weber",
"website",
"wed",
"wedding",
"weibo",
"weir",
"whoswho",
"wien",
"wiki",
"williamhill",
"win",
"windows",
"wine",
"winners",
"wme",
"wolterskluwer",
"woodside",
"work",
"works",
"world",
"wow",
"wtc",
"wtf",
"xbox",
"xerox",
"xfinity",
"xihuan",
"xin",
"कॉम",
"セール",
"佛山",
"慈善",
"集团",
"在线",
"大众汽车",
"点看",
"คอม",
"八卦",
"موقع",
"公益",
"公司",
"香格里拉",
"网站",
"移动",
"我爱你",
"москва",
"католик",
"онлайн",
"сайт",
"联通",
"קום",
"时尚",
"微博",
"淡马锡",
"ファッション",
"орг",
"नेट",
"ストア",
"アマゾン",
"삼성",
"商标",
"商店",
"商城",
"дети",
"ポイント",
"新闻",
"工行",
"家電",
"كوم",
"中文网",
"中信",
"娱乐",
"谷歌",
"電訊盈科",
"购物",
"クラウド",
"通販",
"网店",
"संगठन",
"餐厅",
"网络",
"ком",
"亚马逊",
"诺基亚",
"食品",
"飞利浦",
"手表",
"手机",
"ارامكو",
"العليان",
"اتصالات",
"بازار",
"ابوظبي",
"كاثوليك",
"همراه",
"닷컴",
"政府",
"شبكة",
"بيتك",
"عرب",
"机构",
"组织机构",
"健康",
"招聘",
"рус",
"珠宝",
"大拿",
"みんな",
"グーグル",
"世界",
"書籍",
"网址",
"닷넷",
"コム",
"天主教",
"游戏",
"vermögensberater",
"vermögensberatung",
"企业",
"信息",
"嘉里大酒店",
"嘉里",
"广东",
"政务",
"xyz",
"yachts",
"yahoo",
"yamaxun",
"yandex",
"yodobashi",
"yoga",
"yokohama",
"you",
"youtube",
"yun",
"zappos",
"zara",
"zero",
"zip",
"zone",
"zuerich",
"cc.ua",
"inf.ua",
"ltd.ua",
"adobeaemcloud.com",
"adobeaemcloud.net",
"*.dev.adobeaemcloud.com",
"beep.pl",
"barsy.ca",
"*.compute.estate",
"*.alces.network",
"altervista.org",
"alwaysdata.net",
"cloudfront.net",
"*.compute.amazonaws.com",
"*.compute-1.amazonaws.com",
"*.compute.amazonaws.com.cn",
"us-east-1.amazonaws.com",
"cn-north-1.eb.amazonaws.com.cn",
"cn-northwest-1.eb.amazonaws.com.cn",
"elasticbeanstalk.com",
"ap-northeast-1.elasticbeanstalk.com",
"ap-northeast-2.elasticbeanstalk.com",
"ap-northeast-3.elasticbeanstalk.com",
"ap-south-1.elasticbeanstalk.com",
"ap-southeast-1.elasticbeanstalk.com",
"ap-southeast-2.elasticbeanstalk.com",
"ca-central-1.elasticbeanstalk.com",
"eu-central-1.elasticbeanstalk.com",
"eu-west-1.elasticbeanstalk.com",
"eu-west-2.elasticbeanstalk.com",
"eu-west-3.elasticbeanstalk.com",
"sa-east-1.elasticbeanstalk.com",
"us-east-1.elasticbeanstalk.com",
"us-east-2.elasticbeanstalk.com",
"us-gov-west-1.elasticbeanstalk.com",
"us-west-1.elasticbeanstalk.com",
"us-west-2.elasticbeanstalk.com",
"*.elb.amazonaws.com",
"*.elb.amazonaws.com.cn",
"s3.amazonaws.com",
"s3-ap-northeast-1.amazonaws.com",
"s3-ap-northeast-2.amazonaws.com",
"s3-ap-south-1.amazonaws.com",
"s3-ap-southeast-1.amazonaws.com",
"s3-ap-southeast-2.amazonaws.com",
"s3-ca-central-1.amazonaws.com",
"s3-eu-central-1.amazonaws.com",
"s3-eu-west-1.amazonaws.com",
"s3-eu-west-2.amazonaws.com",
"s3-eu-west-3.amazonaws.com",
"s3-external-1.amazonaws.com",
"s3-fips-us-gov-west-1.amazonaws.com",
"s3-sa-east-1.amazonaws.com",
"s3-us-gov-west-1.amazonaws.com",
"s3-us-east-2.amazonaws.com",
"s3-us-west-1.amazonaws.com",
"s3-us-west-2.amazonaws.com",
"s3.ap-northeast-2.amazonaws.com",
"s3.ap-south-1.amazonaws.com",
"s3.cn-north-1.amazonaws.com.cn",
"s3.ca-central-1.amazonaws.com",
"s3.eu-central-1.amazonaws.com",
"s3.eu-west-2.amazonaws.com",
"s3.eu-west-3.amazonaws.com",
"s3.us-east-2.amazonaws.com",
"s3.dualstack.ap-northeast-1.amazonaws.com",
"s3.dualstack.ap-northeast-2.amazonaws.com",
"s3.dualstack.ap-south-1.amazonaws.com",
"s3.dualstack.ap-southeast-1.amazonaws.com",
"s3.dualstack.ap-southeast-2.amazonaws.com",
"s3.dualstack.ca-central-1.amazonaws.com",
"s3.dualstack.eu-central-1.amazonaws.com",
"s3.dualstack.eu-west-1.amazonaws.com",
"s3.dualstack.eu-west-2.amazonaws.com",
"s3.dualstack.eu-west-3.amazonaws.com",
"s3.dualstack.sa-east-1.amazonaws.com",
"s3.dualstack.us-east-1.amazonaws.com",
"s3.dualstack.us-east-2.amazonaws.com",
"s3-website-us-east-1.amazonaws.com",
"s3-website-us-west-1.amazonaws.com",
"s3-website-us-west-2.amazonaws.com",
"s3-website-ap-northeast-1.amazonaws.com",
"s3-website-ap-southeast-1.amazonaws.com",
"s3-website-ap-southeast-2.amazonaws.com",
"s3-website-eu-west-1.amazonaws.com",
"s3-website-sa-east-1.amazonaws.com",
"s3-website.ap-northeast-2.amazonaws.com",
"s3-website.ap-south-1.amazonaws.com",
"s3-website.ca-central-1.amazonaws.com",
"s3-website.eu-central-1.amazonaws.com",
"s3-website.eu-west-2.amazonaws.com",
"s3-website.eu-west-3.amazonaws.com",
"s3-website.us-east-2.amazonaws.com",
"amsw.nl",
"t3l3p0rt.net",
"tele.amune.org",
"apigee.io",
"on-aptible.com",
"user.aseinet.ne.jp",
"gv.vc",
"d.gv.vc",
"user.party.eus",
"pimienta.org",
"poivron.org",
"potager.org",
"sweetpepper.org",
"myasustor.com",
"myfritz.net",
"*.awdev.ca",
"*.advisor.ws",
"b-data.io",
"backplaneapp.io",
"balena-devices.com",
"app.banzaicloud.io",
"betainabox.com",
"bnr.la",
"blackbaudcdn.net",
"boomla.net",
"boxfuse.io",
"square7.ch",
"bplaced.com",
"bplaced.de",
"square7.de",
"bplaced.net",
"square7.net",
"browsersafetymark.io",
"uk0.bigv.io",
"dh.bytemark.co.uk",
"vm.bytemark.co.uk",
"mycd.eu",
"carrd.co",
"crd.co",
"uwu.ai",
"ae.org",
"ar.com",
"br.com",
"cn.com",
"com.de",
"com.se",
"de.com",
"eu.com",
"gb.com",
"gb.net",
"hu.com",
"hu.net",
"jp.net",
"jpn.com",
"kr.com",
"mex.com",
"no.com",
"qc.com",
"ru.com",
"sa.com",
"se.net",
"uk.com",
"uk.net",
"us.com",
"uy.com",
"za.bz",
"za.com",
"africa.com",
"gr.com",
"in.net",
"us.org",
"co.com",
"c.la",
"certmgr.org",
"xenapponazure.com",
"discourse.group",
"discourse.team",
"virtueeldomein.nl",
"cleverapps.io",
"*.lcl.dev",
"*.stg.dev",
"c66.me",
"cloud66.ws",
"cloud66.zone",
"jdevcloud.com",
"wpdevcloud.com",
"cloudaccess.host",
"freesite.host",
"cloudaccess.net",
"cloudcontrolled.com",
"cloudcontrolapp.com",
"cloudera.site",
"trycloudflare.com",
"workers.dev",
"wnext.app",
"co.ca",
"*.otap.co",
"co.cz",
"c.cdn77.org",
"cdn77-ssl.net",
"r.cdn77.net",
"rsc.cdn77.org",
"ssl.origin.cdn77-secure.org",
"cloudns.asia",
"cloudns.biz",
"cloudns.club",
"cloudns.cc",
"cloudns.eu",
"cloudns.in",
"cloudns.info",
"cloudns.org",
"cloudns.pro",
"cloudns.pw",
"cloudns.us",
"cloudeity.net",
"cnpy.gdn",
"co.nl",
"co.no",
"webhosting.be",
"hosting-cluster.nl",
"ac.ru",
"edu.ru",
"gov.ru",
"int.ru",
"mil.ru",
"test.ru",
"dyn.cosidns.de",
"dynamisches-dns.de",
"dnsupdater.de",
"internet-dns.de",
"l-o-g-i-n.de",
"dynamic-dns.info",
"feste-ip.net",
"knx-server.net",
"static-access.net",
"realm.cz",
"*.cryptonomic.net",
"cupcake.is",
"*.customer-oci.com",
"*.oci.customer-oci.com",
"*.ocp.customer-oci.com",
"*.ocs.customer-oci.com",
"cyon.link",
"cyon.site",
"daplie.me",
"localhost.daplie.me",
"dattolocal.com",
"dattorelay.com",
"dattoweb.com",
"mydatto.com",
"dattolocal.net",
"mydatto.net",
"biz.dk",
"co.dk",
"firm.dk",
"reg.dk",
"store.dk",
"*.dapps.earth",
"*.bzz.dapps.earth",
"builtwithdark.com",
"edgestack.me",
"debian.net",
"dedyn.io",
"dnshome.de",
"online.th",
"shop.th",
"drayddns.com",
"dreamhosters.com",
"mydrobo.com",
"drud.io",
"drud.us",
"duckdns.org",
"dy.fi",
"tunk.org",
"dyndns-at-home.com",
"dyndns-at-work.com",
"dyndns-blog.com",
"dyndns-free.com",
"dyndns-home.com",
"dyndns-ip.com",
"dyndns-mail.com",
"dyndns-office.com",
"dyndns-pics.com",
"dyndns-remote.com",
"dyndns-server.com",
"dyndns-web.com",
"dyndns-wiki.com",
"dyndns-work.com",
"dyndns.biz",
"dyndns.info",
"dyndns.org",
"dyndns.tv",
"at-band-camp.net",
"ath.cx",
"barrel-of-knowledge.info",
"barrell-of-knowledge.info",
"better-than.tv",
"blogdns.com",
"blogdns.net",
"blogdns.org",
"blogsite.org",
"boldlygoingnowhere.org",
"broke-it.net",
"buyshouses.net",
"cechire.com",
"dnsalias.com",
"dnsalias.net",
"dnsalias.org",
"dnsdojo.com",
"dnsdojo.net",
"dnsdojo.org",
"does-it.net",
"doesntexist.com",
"doesntexist.org",
"dontexist.com",
"dontexist.net",
"dontexist.org",
"doomdns.com",
"doomdns.org",
"dvrdns.org",
"dyn-o-saur.com",
"dynalias.com",
"dynalias.net",
"dynalias.org",
"dynathome.net",
"dyndns.ws",
"endofinternet.net",
"endofinternet.org",
"endoftheinternet.org",
"est-a-la-maison.com",
"est-a-la-masion.com",
"est-le-patron.com",
"est-mon-blogueur.com",
"for-better.biz",
"for-more.biz",
"for-our.info",
"for-some.biz",
"for-the.biz",
"forgot.her.name",
"forgot.his.name",
"from-ak.com",
"from-al.com",
"from-ar.com",
"from-az.net",
"from-ca.com",
"from-co.net",
"from-ct.com",
"from-dc.com",
"from-de.com",
"from-fl.com",
"from-ga.com",
"from-hi.com",
"from-ia.com",
"from-id.com",
"from-il.com",
"from-in.com",
"from-ks.com",
"from-ky.com",
"from-la.net",
"from-ma.com",
"from-md.com",
"from-me.org",
"from-mi.com",
"from-mn.com",
"from-mo.com",
"from-ms.com",
"from-mt.com",
"from-nc.com",
"from-nd.com",
"from-ne.com",
"from-nh.com",
"from-nj.com",
"from-nm.com",
"from-nv.com",
"from-ny.net",
"from-oh.com",
"from-ok.com",
"from-or.com",
"from-pa.com",
"from-pr.com",
"from-ri.com",
"from-sc.com",
"from-sd.com",
"from-tn.com",
"from-tx.com",
"from-ut.com",
"from-va.com",
"from-vt.com",
"from-wa.com",
"from-wi.com",
"from-wv.com",
"from-wy.com",
"ftpaccess.cc",
"fuettertdasnetz.de",
"game-host.org",
"game-server.cc",
"getmyip.com",
"gets-it.net",
"go.dyndns.org",
"gotdns.com",
"gotdns.org",
"groks-the.info",
"groks-this.info",
"ham-radio-op.net",
"here-for-more.info",
"hobby-site.com",
"hobby-site.org",
"home.dyndns.org",
"homedns.org",
"homeftp.net",
"homeftp.org",
"homeip.net",
"homelinux.com",
"homelinux.net",
"homelinux.org",
"homeunix.com",
"homeunix.net",
"homeunix.org",
"iamallama.com",
"in-the-band.net",
"is-a-anarchist.com",
"is-a-blogger.com",
"is-a-bookkeeper.com",
"is-a-bruinsfan.org",
"is-a-bulls-fan.com",
"is-a-candidate.org",
"is-a-caterer.com",
"is-a-celticsfan.org",
"is-a-chef.com",
"is-a-chef.net",
"is-a-chef.org",
"is-a-conservative.com",
"is-a-cpa.com",
"is-a-cubicle-slave.com",
"is-a-democrat.com",
"is-a-designer.com",
"is-a-doctor.com",
"is-a-financialadvisor.com",
"is-a-geek.com",
"is-a-geek.net",
"is-a-geek.org",
"is-a-green.com",
"is-a-guru.com",
"is-a-hard-worker.com",
"is-a-hunter.com",
"is-a-knight.org",
"is-a-landscaper.com",
"is-a-lawyer.com",
"is-a-liberal.com",
"is-a-libertarian.com",
"is-a-linux-user.org",
"is-a-llama.com",
"is-a-musician.com",
"is-a-nascarfan.com",
"is-a-nurse.com",
"is-a-painter.com",
"is-a-patsfan.org",
"is-a-personaltrainer.com",
"is-a-photographer.com",
"is-a-player.com",
"is-a-republican.com",
"is-a-rockstar.com",
"is-a-socialist.com",
"is-a-soxfan.org",
"is-a-student.com",
"is-a-teacher.com",
"is-a-techie.com",
"is-a-therapist.com",
"is-an-accountant.com",
"is-an-actor.com",
"is-an-actress.com",
"is-an-anarchist.com",
"is-an-artist.com",
"is-an-engineer.com",
"is-an-entertainer.com",
"is-by.us",
"is-certified.com",
"is-found.org",
"is-gone.com",
"is-into-anime.com",
"is-into-cars.com",
"is-into-cartoons.com",
"is-into-games.com",
"is-leet.com",
"is-lost.org",
"is-not-certified.com",
"is-saved.org",
"is-slick.com",
"is-uberleet.com",
"is-very-bad.org",
"is-very-evil.org",
"is-very-good.org",
"is-very-nice.org",
"is-very-sweet.org",
"is-with-theband.com",
"isa-geek.com",
"isa-geek.net",
"isa-geek.org",
"isa-hockeynut.com",
"issmarterthanyou.com",
"isteingeek.de",
"istmein.de",
"kicks-ass.net",
"kicks-ass.org",
"knowsitall.info",
"land-4-sale.us",
"lebtimnetz.de",
"leitungsen.de",
"likes-pie.com",
"likescandy.com",
"merseine.nu",
"mine.nu",
"misconfused.org",
"mypets.ws",
"myphotos.cc",
"neat-url.com",
"office-on-the.net",
"on-the-web.tv",
"podzone.net",
"podzone.org",
"readmyblog.org",
"saves-the-whales.com",
"scrapper-site.net",
"scrapping.cc",
"selfip.biz",
"selfip.com",
"selfip.info",
"selfip.net",
"selfip.org",
"sells-for-less.com",
"sells-for-u.com",
"sells-it.net",
"sellsyourhome.org",
"servebbs.com",
"servebbs.net",
"servebbs.org",
"serveftp.net",
"serveftp.org",
"servegame.org",
"shacknet.nu",
"simple-url.com",
"space-to-rent.com",
"stuff-4-sale.org",
"stuff-4-sale.us",
"teaches-yoga.com",
"thruhere.net",
"traeumtgerade.de",
"webhop.biz",
"webhop.info",
"webhop.net",
"webhop.org",
"worse-than.tv",
"writesthisblog.com",
"ddnss.de",
"dyn.ddnss.de",
"dyndns.ddnss.de",
"dyndns1.de",
"dyn-ip24.de",
"home-webserver.de",
"dyn.home-webserver.de",
"myhome-server.de",
"ddnss.org",
"definima.net",
"definima.io",
"bci.dnstrace.pro",
"ddnsfree.com",
"ddnsgeek.com",
"giize.com",
"gleeze.com",
"kozow.com",
"loseyourip.com",
"ooguy.com",
"theworkpc.com",
"casacam.net",
"dynu.net",
"accesscam.org",
"camdvr.org",
"freeddns.org",
"mywire.org",
"webredirect.org",
"myddns.rocks",
"blogsite.xyz",
"dynv6.net",
"e4.cz",
"en-root.fr",
"mytuleap.com",
"onred.one",
"staging.onred.one",
"enonic.io",
"customer.enonic.io",
"eu.org",
"al.eu.org",
"asso.eu.org",
"at.eu.org",
"au.eu.org",
"be.eu.org",
"bg.eu.org",
"ca.eu.org",
"cd.eu.org",
"ch.eu.org",
"cn.eu.org",
"cy.eu.org",
"cz.eu.org",
"de.eu.org",
"dk.eu.org",
"edu.eu.org",
"ee.eu.org",
"es.eu.org",
"fi.eu.org",
"fr.eu.org",
"gr.eu.org",
"hr.eu.org",
"hu.eu.org",
"ie.eu.org",
"il.eu.org",
"in.eu.org",
"int.eu.org",
"is.eu.org",
"it.eu.org",
"jp.eu.org",
"kr.eu.org",
"lt.eu.org",
"lu.eu.org",
"lv.eu.org",
"mc.eu.org",
"me.eu.org",
"mk.eu.org",
"mt.eu.org",
"my.eu.org",
"net.eu.org",
"ng.eu.org",
"nl.eu.org",
"no.eu.org",
"nz.eu.org",
"paris.eu.org",
"pl.eu.org",
"pt.eu.org",
"q-a.eu.org",
"ro.eu.org",
"ru.eu.org",
"se.eu.org",
"si.eu.org",
"sk.eu.org",
"tr.eu.org",
"uk.eu.org",
"us.eu.org",
"eu-1.evennode.com",
"eu-2.evennode.com",
"eu-3.evennode.com",
"eu-4.evennode.com",
"us-1.evennode.com",
"us-2.evennode.com",
"us-3.evennode.com",
"us-4.evennode.com",
"twmail.cc",
"twmail.net",
"twmail.org",
"mymailer.com.tw",
"url.tw",
"apps.fbsbx.com",
"ru.net",
"adygeya.ru",
"bashkiria.ru",
"bir.ru",
"cbg.ru",
"com.ru",
"dagestan.ru",
"grozny.ru",
"kalmykia.ru",
"kustanai.ru",
"marine.ru",
"mordovia.ru",
"msk.ru",
"mytis.ru",
"nalchik.ru",
"nov.ru",
"pyatigorsk.ru",
"spb.ru",
"vladikavkaz.ru",
"vladimir.ru",
"abkhazia.su",
"adygeya.su",
"aktyubinsk.su",
"arkhangelsk.su",
"armenia.su",
"ashgabad.su",
"azerbaijan.su",
"balashov.su",
"bashkiria.su",
"bryansk.su",
"bukhara.su",
"chimkent.su",
"dagestan.su",
"east-kazakhstan.su",
"exnet.su",
"georgia.su",
"grozny.su",
"ivanovo.su",
"jambyl.su",
"kalmykia.su",
"kaluga.su",
"karacol.su",
"karaganda.su",
"karelia.su",
"khakassia.su",
"krasnodar.su",
"kurgan.su",
"kustanai.su",
"lenug.su",
"mangyshlak.su",
"mordovia.su",
"msk.su",
"murmansk.su",
"nalchik.su",
"navoi.su",
"north-kazakhstan.su",
"nov.su",
"obninsk.su",
"penza.su",
"pokrovsk.su",
"sochi.su",
"spb.su",
"tashkent.su",
"termez.su",
"togliatti.su",
"troitsk.su",
"tselinograd.su",
"tula.su",
"tuva.su",
"vladikavkaz.su",
"vladimir.su",
"vologda.su",
"channelsdvr.net",
"u.channelsdvr.net",
"fastly-terrarium.com",
"fastlylb.net",
"map.fastlylb.net",
"freetls.fastly.net",
"map.fastly.net",
"a.prod.fastly.net",
"global.prod.fastly.net",
"a.ssl.fastly.net",
"b.ssl.fastly.net",
"global.ssl.fastly.net",
"fastpanel.direct",
"fastvps-server.com",
"fhapp.xyz",
"fedorainfracloud.org",
"fedorapeople.org",
"cloud.fedoraproject.org",
"app.os.fedoraproject.org",
"app.os.stg.fedoraproject.org",
"mydobiss.com",
"filegear.me",
"filegear-au.me",
"filegear-de.me",
"filegear-gb.me",
"filegear-ie.me",
"filegear-jp.me",
"filegear-sg.me",
"firebaseapp.com",
"flynnhub.com",
"flynnhosting.net",
"0e.vc",
"freebox-os.com",
"freeboxos.com",
"fbx-os.fr",
"fbxos.fr",
"freebox-os.fr",
"freeboxos.fr",
"freedesktop.org",
"*.futurecms.at",
"*.ex.futurecms.at",
"*.in.futurecms.at",
"futurehosting.at",
"futuremailing.at",
"*.ex.ortsinfo.at",
"*.kunden.ortsinfo.at",
"*.statics.cloud",
"service.gov.uk",
"gehirn.ne.jp",
"usercontent.jp",
"gentapps.com",
"lab.ms",
"github.io",
"githubusercontent.com",
"gitlab.io",
"glitch.me",
"lolipop.io",
"cloudapps.digital",
"london.cloudapps.digital",
"homeoffice.gov.uk",
"ro.im",
"shop.ro",
"goip.de",
"run.app",
"a.run.app",
"web.app",
"*.0emm.com",
"appspot.com",
"*.r.appspot.com",
"blogspot.ae",
"blogspot.al",
"blogspot.am",
"blogspot.ba",
"blogspot.be",
"blogspot.bg",
"blogspot.bj",
"blogspot.ca",
"blogspot.cf",
"blogspot.ch",
"blogspot.cl",
"blogspot.co.at",
"blogspot.co.id",
"blogspot.co.il",
"blogspot.co.ke",
"blogspot.co.nz",
"blogspot.co.uk",
"blogspot.co.za",
"blogspot.com",
"blogspot.com.ar",
"blogspot.com.au",
"blogspot.com.br",
"blogspot.com.by",
"blogspot.com.co",
"blogspot.com.cy",
"blogspot.com.ee",
"blogspot.com.eg",
"blogspot.com.es",
"blogspot.com.mt",
"blogspot.com.ng",
"blogspot.com.tr",
"blogspot.com.uy",
"blogspot.cv",
"blogspot.cz",
"blogspot.de",
"blogspot.dk",
"blogspot.fi",
"blogspot.fr",
"blogspot.gr",
"blogspot.hk",
"blogspot.hr",
"blogspot.hu",
"blogspot.ie",
"blogspot.in",
"blogspot.is",
"blogspot.it",
"blogspot.jp",
"blogspot.kr",
"blogspot.li",
"blogspot.lt",
"blogspot.lu",
"blogspot.md",
"blogspot.mk",
"blogspot.mr",
"blogspot.mx",
"blogspot.my",
"blogspot.nl",
"blogspot.no",
"blogspot.pe",
"blogspot.pt",
"blogspot.qa",
"blogspot.re",
"blogspot.ro",
"blogspot.rs",
"blogspot.ru",
"blogspot.se",
"blogspot.sg",
"blogspot.si",
"blogspot.sk",
"blogspot.sn",
"blogspot.td",
"blogspot.tw",
"blogspot.ug",
"blogspot.vn",
"cloudfunctions.net",
"cloud.goog",
"codespot.com",
"googleapis.com",
"googlecode.com",
"pagespeedmobilizer.com",
"publishproxy.com",
"withgoogle.com",
"withyoutube.com",
"awsmppl.com",
"fin.ci",
"free.hr",
"caa.li",
"ua.rs",
"conf.se",
"hs.zone",
"hs.run",
"hashbang.sh",
"hasura.app",
"hasura-app.io",
"hepforge.org",
"herokuapp.com",
"herokussl.com",
"myravendb.com",
"ravendb.community",
"ravendb.me",
"development.run",
"ravendb.run",
"bpl.biz",
"orx.biz",
"ng.city",
"biz.gl",
"ng.ink",
"col.ng",
"firm.ng",
"gen.ng",
"ltd.ng",
"ngo.ng",
"ng.school",
"sch.so",
"häkkinen.fi",
"*.moonscale.io",
"moonscale.net",
"iki.fi",
"dyn-berlin.de",
"in-berlin.de",
"in-brb.de",
"in-butter.de",
"in-dsl.de",
"in-dsl.net",
"in-dsl.org",
"in-vpn.de",
"in-vpn.net",
"in-vpn.org",
"biz.at",
"info.at",
"info.cx",
"ac.leg.br",
"al.leg.br",
"am.leg.br",
"ap.leg.br",
"ba.leg.br",
"ce.leg.br",
"df.leg.br",
"es.leg.br",
"go.leg.br",
"ma.leg.br",
"mg.leg.br",
"ms.leg.br",
"mt.leg.br",
"pa.leg.br",
"pb.leg.br",
"pe.leg.br",
"pi.leg.br",
"pr.leg.br",
"rj.leg.br",
"rn.leg.br",
"ro.leg.br",
"rr.leg.br",
"rs.leg.br",
"sc.leg.br",
"se.leg.br",
"sp.leg.br",
"to.leg.br",
"pixolino.com",
"ipifony.net",
"mein-iserv.de",
"test-iserv.de",
"iserv.dev",
"iobb.net",
"myjino.ru",
"*.hosting.myjino.ru",
"*.landing.myjino.ru",
"*.spectrum.myjino.ru",
"*.vps.myjino.ru",
"*.triton.zone",
"*.cns.joyent.com",
"js.org",
"kaas.gg",
"khplay.nl",
"keymachine.de",
"kinghost.net",
"uni5.net",
"knightpoint.systems",
"oya.to",
"co.krd",
"edu.krd",
"git-repos.de",
"lcube-server.de",
"svn-repos.de",
"leadpages.co",
"lpages.co",
"lpusercontent.com",
"lelux.site",
"co.business",
"co.education",
"co.events",
"co.financial",
"co.network",
"co.place",
"co.technology",
"app.lmpm.com",
"linkitools.space",
"linkyard.cloud",
"linkyard-cloud.ch",
"members.linode.com",
"nodebalancer.linode.com",
"we.bs",
"loginline.app",
"loginline.dev",
"loginline.io",
"loginline.services",
"loginline.site",
"krasnik.pl",
"leczna.pl",
"lubartow.pl",
"lublin.pl",
"poniatowa.pl",
"swidnik.pl",
"uklugs.org",
"glug.org.uk",
"lug.org.uk",
"lugs.org.uk",
"barsy.bg",
"barsy.co.uk",
"barsyonline.co.uk",
"barsycenter.com",
"barsyonline.com",
"barsy.club",
"barsy.de",
"barsy.eu",
"barsy.in",
"barsy.info",
"barsy.io",
"barsy.me",
"barsy.menu",
"barsy.mobi",
"barsy.net",
"barsy.online",
"barsy.org",
"barsy.pro",
"barsy.pub",
"barsy.shop",
"barsy.site",
"barsy.support",
"barsy.uk",
"*.magentosite.cloud",
"mayfirst.info",
"mayfirst.org",
"hb.cldmail.ru",
"miniserver.com",
"memset.net",
"cloud.metacentrum.cz",
"custom.metacentrum.cz",
"flt.cloud.muni.cz",
"usr.cloud.muni.cz",
"meteorapp.com",
"eu.meteorapp.com",
"co.pl",
"azurecontainer.io",
"azurewebsites.net",
"azure-mobile.net",
"cloudapp.net",
"mozilla-iot.org",
"bmoattachments.org",
"net.ru",
"org.ru",
"pp.ru",
"ui.nabu.casa",
"pony.club",
"of.fashion",
"on.fashion",
"of.football",
"in.london",
"of.london",
"for.men",
"and.mom",
"for.mom",
"for.one",
"for.sale",
"of.work",
"to.work",
"nctu.me",
"bitballoon.com",
"netlify.com",
"4u.com",
"ngrok.io",
"nh-serv.co.uk",
"nfshost.com",
"dnsking.ch",
"mypi.co",
"n4t.co",
"001www.com",
"ddnslive.com",
"myiphost.com",
"forumz.info",
"16-b.it",
"32-b.it",
"64-b.it",
"soundcast.me",
"tcp4.me",
"dnsup.net",
"hicam.net",
"now-dns.net",
"ownip.net",
"vpndns.net",
"dynserv.org",
"now-dns.org",
"x443.pw",
"now-dns.top",
"ntdll.top",
"freeddns.us",
"crafting.xyz",
"zapto.xyz",
"nsupdate.info",
"nerdpol.ovh",
"blogsyte.com",
"brasilia.me",
"cable-modem.org",
"ciscofreak.com",
"collegefan.org",
"couchpotatofries.org",
"damnserver.com",
"ddns.me",
"ditchyourip.com",
"dnsfor.me",
"dnsiskinky.com",
"dvrcam.info",
"dynns.com",
"eating-organic.net",
"fantasyleague.cc",
"geekgalaxy.com",
"golffan.us",
"health-carereform.com",
"homesecuritymac.com",
"homesecuritypc.com",
"hopto.me",
"ilovecollege.info",
"loginto.me",
"mlbfan.org",
"mmafan.biz",
"myactivedirectory.com",
"mydissent.net",
"myeffect.net",
"mymediapc.net",
"mypsx.net",
"mysecuritycamera.com",
"mysecuritycamera.net",
"mysecuritycamera.org",
"net-freaks.com",
"nflfan.org",
"nhlfan.net",
"no-ip.ca",
"no-ip.co.uk",
"no-ip.net",
"noip.us",
"onthewifi.com",
"pgafan.net",
"point2this.com",
"pointto.us",
"privatizehealthinsurance.net",
"quicksytes.com",
"read-books.org",
"securitytactics.com",
"serveexchange.com",
"servehumour.com",
"servep2p.com",
"servesarcasm.com",
"stufftoread.com",
"ufcfan.org",
"unusualperson.com",
"workisboring.com",
"3utilities.com",
"bounceme.net",
"ddns.net",
"ddnsking.com",
"gotdns.ch",
"hopto.org",
"myftp.biz",
"myftp.org",
"myvnc.com",
"no-ip.biz",
"no-ip.info",
"no-ip.org",
"noip.me",
"redirectme.net",
"servebeer.com",
"serveblog.net",
"servecounterstrike.com",
"serveftp.com",
"servegame.com",
"servehalflife.com",
"servehttp.com",
"serveirc.com",
"serveminecraft.net",
"servemp3.com",
"servepics.com",
"servequake.com",
"sytes.net",
"webhop.me",
"zapto.org",
"stage.nodeart.io",
"nodum.co",
"nodum.io",
"pcloud.host",
"nyc.mn",
"nom.ae",
"nom.af",
"nom.ai",
"nom.al",
"nym.by",
"nom.bz",
"nym.bz",
"nom.cl",
"nym.ec",
"nom.gd",
"nom.ge",
"nom.gl",
"nym.gr",
"nom.gt",
"nym.gy",
"nym.hk",
"nom.hn",
"nym.ie",
"nom.im",
"nom.ke",
"nym.kz",
"nym.la",
"nym.lc",
"nom.li",
"nym.li",
"nym.lt",
"nym.lu",
"nom.lv",
"nym.me",
"nom.mk",
"nym.mn",
"nym.mx",
"nom.nu",
"nym.nz",
"nym.pe",
"nym.pt",
"nom.pw",
"nom.qa",
"nym.ro",
"nom.rs",
"nom.si",
"nym.sk",
"nom.st",
"nym.su",
"nym.sx",
"nom.tj",
"nym.tw",
"nom.ug",
"nom.uy",
"nom.vc",
"nom.vg",
"static.observableusercontent.com",
"cya.gg",
"cloudycluster.net",
"nid.io",
"opencraft.hosting",
"operaunite.com",
"skygearapp.com",
"outsystemscloud.com",
"ownprovider.com",
"own.pm",
"ox.rs",
"oy.lc",
"pgfog.com",
"pagefrontapp.com",
"art.pl",
"gliwice.pl",
"krakow.pl",
"poznan.pl",
"wroc.pl",
"zakopane.pl",
"pantheonsite.io",
"gotpantheon.com",
"mypep.link",
"perspecta.cloud",
"on-web.fr",
"*.platform.sh",
"*.platformsh.site",
"dyn53.io",
"co.bn",
"xen.prgmr.com",
"priv.at",
"prvcy.page",
"*.dweb.link",
"protonet.io",
"chirurgiens-dentistes-en-france.fr",
"byen.site",
"pubtls.org",
"qualifioapp.com",
"qbuser.com",
"instantcloud.cn",
"ras.ru",
"qa2.com",
"qcx.io",
"*.sys.qcx.io",
"dev-myqnapcloud.com",
"alpha-myqnapcloud.com",
"myqnapcloud.com",
"*.quipelements.com",
"vapor.cloud",
"vaporcloud.io",
"rackmaze.com",
"rackmaze.net",
"*.on-k3s.io",
"*.on-rancher.cloud",
"*.on-rio.io",
"readthedocs.io",
"rhcloud.com",
"app.render.com",
"onrender.com",
"repl.co",
"repl.run",
"resindevice.io",
"devices.resinstaging.io",
"hzc.io",
"wellbeingzone.eu",
"ptplus.fit",
"wellbeingzone.co.uk",
"git-pages.rit.edu",
"sandcats.io",
"logoip.de",
"logoip.com",
"schokokeks.net",
"gov.scot",
"scrysec.com",
"firewall-gateway.com",
"firewall-gateway.de",
"my-gateway.de",
"my-router.de",
"spdns.de",
"spdns.eu",
"firewall-gateway.net",
"my-firewall.org",
"myfirewall.org",
"spdns.org",
"senseering.net",
"biz.ua",
"co.ua",
"pp.ua",
"shiftedit.io",
"myshopblocks.com",
"shopitsite.com",
"mo-siemens.io",
"1kapp.com",
"appchizi.com",
"applinzi.com",
"sinaapp.com",
"vipsinaapp.com",
"siteleaf.net",
"bounty-full.com",
"alpha.bounty-full.com",
"beta.bounty-full.com",
"stackhero-network.com",
"static.land",
"dev.static.land",
"sites.static.land",
"apps.lair.io",
"*.stolos.io",
"spacekit.io",
"customer.speedpartner.de",
"api.stdlib.com",
"storj.farm",
"utwente.io",
"soc.srcf.net",
"user.srcf.net",
"temp-dns.com",
"applicationcloud.io",
"scapp.io",
"*.s5y.io",
"*.sensiosite.cloud",
"syncloud.it",
"diskstation.me",
"dscloud.biz",
"dscloud.me",
"dscloud.mobi",
"dsmynas.com",
"dsmynas.net",
"dsmynas.org",
"familyds.com",
"familyds.net",
"familyds.org",
"i234.me",
"myds.me",
"synology.me",
"vpnplus.to",
"direct.quickconnect.to",
"taifun-dns.de",
"gda.pl",
"gdansk.pl",
"gdynia.pl",
"med.pl",
"sopot.pl",
"edugit.org",
"telebit.app",
"telebit.io",
"*.telebit.xyz",
"gwiddle.co.uk",
"thingdustdata.com",
"cust.dev.thingdust.io",
"cust.disrec.thingdust.io",
"cust.prod.thingdust.io",
"cust.testing.thingdust.io",
"arvo.network",
"azimuth.network",
"bloxcms.com",
"townnews-staging.com",
"12hp.at",
"2ix.at",
"4lima.at",
"lima-city.at",
"12hp.ch",
"2ix.ch",
"4lima.ch",
"lima-city.ch",
"trafficplex.cloud",
"de.cool",
"12hp.de",
"2ix.de",
"4lima.de",
"lima-city.de",
"1337.pictures",
"clan.rip",
"lima-city.rocks",
"webspace.rocks",
"lima.zone",
"*.transurl.be",
"*.transurl.eu",
"*.transurl.nl",
"tuxfamily.org",
"dd-dns.de",
"diskstation.eu",
"diskstation.org",
"dray-dns.de",
"draydns.de",
"dyn-vpn.de",
"dynvpn.de",
"mein-vigor.de",
"my-vigor.de",
"my-wan.de",
"syno-ds.de",
"synology-diskstation.de",
"synology-ds.de",
"uber.space",
"*.uberspace.de",
"hk.com",
"hk.org",
"ltd.hk",
"inc.hk",
"virtualuser.de",
"virtual-user.de",
"urown.cloud",
"dnsupdate.info",
"lib.de.us",
"2038.io",
"router.management",
"v-info.info",
"voorloper.cloud",
"v.ua",
"wafflecell.com",
"*.webhare.dev",
"wedeploy.io",
"wedeploy.me",
"wedeploy.sh",
"remotewd.com",
"wmflabs.org",
"myforum.community",
"community-pro.de",
"diskussionsbereich.de",
"community-pro.net",
"meinforum.net",
"half.host",
"xnbay.com",
"u2.xnbay.com",
"u2-local.xnbay.com",
"cistron.nl",
"demon.nl",
"xs4all.space",
"yandexcloud.net",
"storage.yandexcloud.net",
"website.yandexcloud.net",
"official.academy",
"yolasite.com",
"ybo.faith",
"yombo.me",
"homelink.one",
"ybo.party",
"ybo.review",
"ybo.science",
"ybo.trade",
"nohost.me",
"noho.st",
"za.net",
"za.org",
"now.sh",
"bss.design",
"basicserver.io",
"virtualserver.io",
"enterprisecloud.nu"
]
},{}],43:[function(require,module,exports){
/*eslint no-var:0, prefer-arrow-callback: 0, object-shorthand: 0 */
'use strict';

var Punycode = require(5);

var internals = {}; //
// Read rules from file.
//

internals.rules = require(42).map(function (rule) {
  return {
    rule: rule,
    suffix: rule.replace(/^(\*\.|\!)/, ''),
    punySuffix: -1,
    wildcard: rule.charAt(0) === '*',
    exception: rule.charAt(0) === '!'
  };
}); //
// Check is given string ends with `suffix`.
//

internals.endsWith = function (str, suffix) {
  return str.indexOf(suffix, str.length - suffix.length) !== -1;
}; //
// Find rule for a given domain.
//


internals.findRule = function (domain) {
  var punyDomain = Punycode.toASCII(domain);
  return internals.rules.reduce(function (memo, rule) {
    if (rule.punySuffix === -1) {
      rule.punySuffix = Punycode.toASCII(rule.suffix);
    }

    if (!internals.endsWith(punyDomain, '.' + rule.punySuffix) && punyDomain !== rule.punySuffix) {
      return memo;
    } // This has been commented out as it never seems to run. This is because
    // sub tlds always appear after their parents and we never find a shorter
    // match.
    //if (memo) {
    //  var memoSuffix = Punycode.toASCII(memo.suffix);
    //  if (memoSuffix.length >= punySuffix.length) {
    //    return memo;
    //  }
    //}


    return rule;
  }, null);
}; //
// Error codes and messages.
//


exports.errorCodes = {
  DOMAIN_TOO_SHORT: 'Domain name too short.',
  DOMAIN_TOO_LONG: 'Domain name too long. It should be no more than 255 chars.',
  LABEL_STARTS_WITH_DASH: 'Domain name label can not start with a dash.',
  LABEL_ENDS_WITH_DASH: 'Domain name label can not end with a dash.',
  LABEL_TOO_LONG: 'Domain name label should be at most 63 chars long.',
  LABEL_TOO_SHORT: 'Domain name label should be at least 1 character long.',
  LABEL_INVALID_CHARS: 'Domain name label can only contain alphanumeric characters or dashes.'
}; //
// Validate domain name and throw if not valid.
//
// From wikipedia:
//
// Hostnames are composed of series of labels concatenated with dots, as are all
// domain names. Each label must be between 1 and 63 characters long, and the
// entire hostname (including the delimiting dots) has a maximum of 255 chars.
//
// Allowed chars:
//
// * `a-z`
// * `0-9`
// * `-` but not as a starting or ending character
// * `.` as a separator for the textual portions of a domain name
//
// * http://en.wikipedia.org/wiki/Domain_name
// * http://en.wikipedia.org/wiki/Hostname
//

internals.validate = function (input) {
  // Before we can validate we need to take care of IDNs with unicode chars.
  var ascii = Punycode.toASCII(input);

  if (ascii.length < 1) {
    return 'DOMAIN_TOO_SHORT';
  }

  if (ascii.length > 255) {
    return 'DOMAIN_TOO_LONG';
  } // Check each part's length and allowed chars.


  var labels = ascii.split('.');
  var label;

  for (var i = 0; i < labels.length; ++i) {
    label = labels[i];

    if (!label.length) {
      return 'LABEL_TOO_SHORT';
    }

    if (label.length > 63) {
      return 'LABEL_TOO_LONG';
    }

    if (label.charAt(0) === '-') {
      return 'LABEL_STARTS_WITH_DASH';
    }

    if (label.charAt(label.length - 1) === '-') {
      return 'LABEL_ENDS_WITH_DASH';
    }

    if (!/^[a-z0-9\-]+$/.test(label)) {
      return 'LABEL_INVALID_CHARS';
    }
  }
}; //
// Public API
//
//
// Parse domain.
//


exports.parse = function (input) {
  if (typeof input !== 'string') {
    throw new TypeError('Domain name must be a string.');
  } // Force domain to lowercase.


  var domain = input.slice(0).toLowerCase(); // Handle FQDN.
  // TODO: Simply remove trailing dot?

  if (domain.charAt(domain.length - 1) === '.') {
    domain = domain.slice(0, domain.length - 1);
  } // Validate and sanitise input.


  var error = internals.validate(domain);

  if (error) {
    return {
      input: input,
      error: {
        message: exports.errorCodes[error],
        code: error
      }
    };
  }

  var parsed = {
    input: input,
    tld: null,
    sld: null,
    domain: null,
    subdomain: null,
    listed: false
  };
  var domainParts = domain.split('.'); // Non-Internet TLD

  if (domainParts[domainParts.length - 1] === 'local') {
    return parsed;
  }

  var handlePunycode = function handlePunycode() {
    if (!/xn--/.test(domain)) {
      return parsed;
    }

    if (parsed.domain) {
      parsed.domain = Punycode.toASCII(parsed.domain);
    }

    if (parsed.subdomain) {
      parsed.subdomain = Punycode.toASCII(parsed.subdomain);
    }

    return parsed;
  };

  var rule = internals.findRule(domain); // Unlisted tld.

  if (!rule) {
    if (domainParts.length < 2) {
      return parsed;
    }

    parsed.tld = domainParts.pop();
    parsed.sld = domainParts.pop();
    parsed.domain = [parsed.sld, parsed.tld].join('.');

    if (domainParts.length) {
      parsed.subdomain = domainParts.pop();
    }

    return handlePunycode();
  } // At this point we know the public suffix is listed.


  parsed.listed = true;
  var tldParts = rule.suffix.split('.');
  var privateParts = domainParts.slice(0, domainParts.length - tldParts.length);

  if (rule.exception) {
    privateParts.push(tldParts.shift());
  }

  parsed.tld = tldParts.join('.');

  if (!privateParts.length) {
    return handlePunycode();
  }

  if (rule.wildcard) {
    tldParts.unshift(privateParts.pop());
    parsed.tld = tldParts.join('.');
  }

  if (!privateParts.length) {
    return handlePunycode();
  }

  parsed.sld = privateParts.pop();
  parsed.domain = [parsed.sld, parsed.tld].join('.');

  if (privateParts.length) {
    parsed.subdomain = privateParts.join('.');
  }

  return handlePunycode();
}; //
// Get domain.
//


exports.get = function (domain) {
  if (!domain) {
    return null;
  }

  return exports.parse(domain).domain || null;
}; //
// Check whether domain belongs to a known public suffix.
//


exports.isValid = function (domain) {
  var parsed = exports.parse(domain);
  return Boolean(parsed.domain && parsed.listed);
};

},{"42":42,"5":5}],44:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
'use strict'; // If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function (qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);
  var maxKeys = 1000;

  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length; // maxKeys <= 0 means that we should not limit keys count

  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr,
        vstr,
        k,
        v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

},{}],45:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var stringifyPrimitive = function stringifyPrimitive(v) {
  switch (_typeof(v)) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function (obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';

  if (obj === null) {
    obj = undefined;
  }

  if (_typeof(obj) === 'object') {
    return map(objectKeys(obj), function (k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;

      if (isArray(obj[k])) {
        return map(obj[k], function (v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);
  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map(xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];

  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }

  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }

  return res;
};

},{}],46:[function(require,module,exports){
'use strict';

exports.decode = exports.parse = require(44);
exports.encode = exports.stringify = require(45);

},{"44":44,"45":45}],47:[function(require,module,exports){
'use strict';

var has = Object.prototype.hasOwnProperty,
    undef;
/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String|Null} The decoded string.
 * @api private
 */

function decode(input) {
  try {
    return decodeURIComponent(input.replace(/\+/g, ' '));
  } catch (e) {
    return null;
  }
}
/**
 * Attempts to encode a given input.
 *
 * @param {String} input The string that needs to be encoded.
 * @returns {String|Null} The encoded string.
 * @api private
 */


function encode(input) {
  try {
    return encodeURIComponent(input);
  } catch (e) {
    return null;
  }
}
/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */


function querystring(query) {
  var parser = /([^=?#&]+)=?([^&]*)/g,
      result = {},
      part;

  while (part = parser.exec(query)) {
    var key = decode(part[1]),
        value = decode(part[2]); //
    // Prevent overriding of existing properties. This ensures that build-in
    // methods like `toString` or __proto__ are not overriden by malicious
    // querystrings.
    //
    // In the case if failed decoding, we want to omit the key/value pairs
    // from the result.
    //

    if (key === null || value === null || key in result) continue;
    result[key] = value;
  }

  return result;
}
/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */


function querystringify(obj, prefix) {
  prefix = prefix || '';
  var pairs = [],
      value,
      key; //
  // Optionally prefix with a '?' if needed
  //

  if ('string' !== typeof prefix) prefix = '?';

  for (key in obj) {
    if (has.call(obj, key)) {
      value = obj[key]; //
      // Edge cases where we actually want to encode the value to an empty
      // string instead of the stringified value.
      //

      if (!value && (value === null || value === undef || isNaN(value))) {
        value = '';
      }

      key = encode(key);
      value = encode(value); //
      // If we failed to encode the strings, we should bail out as we don't
      // want to add invalid strings to the query.
      //

      if (key === null || value === null) continue;
      pairs.push(key + '=' + value);
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
} //
// Expose the module.
//


exports.stringify = querystringify;
exports.parse = querystring;

},{}],48:[function(require,module,exports){
'use strict';
/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */

module.exports = function required(port, protocol) {
  protocol = protocol.split(':')[0];
  port = +port;
  if (!port) return false;

  switch (protocol) {
    case 'http':
    case 'ws':
      return port !== 80;

    case 'https':
    case 'wss':
      return port !== 443;

    case 'ftp':
      return port !== 21;

    case 'gopher':
      return port !== 70;

    case 'file':
      return false;
  }

  return port !== 0;
};

},{}],49:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (factory) {
  if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object') {
    // Node/CommonJS
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define(factory);
  } else {
    // Browser globals (with support for web workers)
    var glob;

    try {
      glob = window;
    } catch (e) {
      glob = self;
    }

    glob.SparkMD5 = factory();
  }
})(function (undefined) {
  'use strict';
  /*
   * Fastest md5 implementation around (JKM md5).
   * Credits: Joseph Myers
   *
   * @see http://www.myersdaily.org/joseph/javascript/md5-text.html
   * @see http://jsperf.com/md5-shootout/7
   */

  /* this function is much faster,
    so if possible we use it. Some IEs
    are the only ones I know of that
    need the idiotic second function,
    generated by an if clause.  */

  var add32 = function add32(a, b) {
    return a + b & 0xFFFFFFFF;
  },
      hex_chr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

  function cmn(q, a, b, x, s, t) {
    a = add32(add32(a, q), add32(x, t));
    return add32(a << s | a >>> 32 - s, b);
  }

  function md5cycle(x, k) {
    var a = x[0],
        b = x[1],
        c = x[2],
        d = x[3];
    a += (b & c | ~b & d) + k[0] - 680876936 | 0;
    a = (a << 7 | a >>> 25) + b | 0;
    d += (a & b | ~a & c) + k[1] - 389564586 | 0;
    d = (d << 12 | d >>> 20) + a | 0;
    c += (d & a | ~d & b) + k[2] + 606105819 | 0;
    c = (c << 17 | c >>> 15) + d | 0;
    b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
    b = (b << 22 | b >>> 10) + c | 0;
    a += (b & c | ~b & d) + k[4] - 176418897 | 0;
    a = (a << 7 | a >>> 25) + b | 0;
    d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
    d = (d << 12 | d >>> 20) + a | 0;
    c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
    c = (c << 17 | c >>> 15) + d | 0;
    b += (c & d | ~c & a) + k[7] - 45705983 | 0;
    b = (b << 22 | b >>> 10) + c | 0;
    a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
    a = (a << 7 | a >>> 25) + b | 0;
    d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
    d = (d << 12 | d >>> 20) + a | 0;
    c += (d & a | ~d & b) + k[10] - 42063 | 0;
    c = (c << 17 | c >>> 15) + d | 0;
    b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
    b = (b << 22 | b >>> 10) + c | 0;
    a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
    a = (a << 7 | a >>> 25) + b | 0;
    d += (a & b | ~a & c) + k[13] - 40341101 | 0;
    d = (d << 12 | d >>> 20) + a | 0;
    c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
    c = (c << 17 | c >>> 15) + d | 0;
    b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
    b = (b << 22 | b >>> 10) + c | 0;
    a += (b & d | c & ~d) + k[1] - 165796510 | 0;
    a = (a << 5 | a >>> 27) + b | 0;
    d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
    d = (d << 9 | d >>> 23) + a | 0;
    c += (d & b | a & ~b) + k[11] + 643717713 | 0;
    c = (c << 14 | c >>> 18) + d | 0;
    b += (c & a | d & ~a) + k[0] - 373897302 | 0;
    b = (b << 20 | b >>> 12) + c | 0;
    a += (b & d | c & ~d) + k[5] - 701558691 | 0;
    a = (a << 5 | a >>> 27) + b | 0;
    d += (a & c | b & ~c) + k[10] + 38016083 | 0;
    d = (d << 9 | d >>> 23) + a | 0;
    c += (d & b | a & ~b) + k[15] - 660478335 | 0;
    c = (c << 14 | c >>> 18) + d | 0;
    b += (c & a | d & ~a) + k[4] - 405537848 | 0;
    b = (b << 20 | b >>> 12) + c | 0;
    a += (b & d | c & ~d) + k[9] + 568446438 | 0;
    a = (a << 5 | a >>> 27) + b | 0;
    d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
    d = (d << 9 | d >>> 23) + a | 0;
    c += (d & b | a & ~b) + k[3] - 187363961 | 0;
    c = (c << 14 | c >>> 18) + d | 0;
    b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
    b = (b << 20 | b >>> 12) + c | 0;
    a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
    a = (a << 5 | a >>> 27) + b | 0;
    d += (a & c | b & ~c) + k[2] - 51403784 | 0;
    d = (d << 9 | d >>> 23) + a | 0;
    c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
    c = (c << 14 | c >>> 18) + d | 0;
    b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
    b = (b << 20 | b >>> 12) + c | 0;
    a += (b ^ c ^ d) + k[5] - 378558 | 0;
    a = (a << 4 | a >>> 28) + b | 0;
    d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
    d = (d << 11 | d >>> 21) + a | 0;
    c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
    c = (c << 16 | c >>> 16) + d | 0;
    b += (c ^ d ^ a) + k[14] - 35309556 | 0;
    b = (b << 23 | b >>> 9) + c | 0;
    a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
    a = (a << 4 | a >>> 28) + b | 0;
    d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
    d = (d << 11 | d >>> 21) + a | 0;
    c += (d ^ a ^ b) + k[7] - 155497632 | 0;
    c = (c << 16 | c >>> 16) + d | 0;
    b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
    b = (b << 23 | b >>> 9) + c | 0;
    a += (b ^ c ^ d) + k[13] + 681279174 | 0;
    a = (a << 4 | a >>> 28) + b | 0;
    d += (a ^ b ^ c) + k[0] - 358537222 | 0;
    d = (d << 11 | d >>> 21) + a | 0;
    c += (d ^ a ^ b) + k[3] - 722521979 | 0;
    c = (c << 16 | c >>> 16) + d | 0;
    b += (c ^ d ^ a) + k[6] + 76029189 | 0;
    b = (b << 23 | b >>> 9) + c | 0;
    a += (b ^ c ^ d) + k[9] - 640364487 | 0;
    a = (a << 4 | a >>> 28) + b | 0;
    d += (a ^ b ^ c) + k[12] - 421815835 | 0;
    d = (d << 11 | d >>> 21) + a | 0;
    c += (d ^ a ^ b) + k[15] + 530742520 | 0;
    c = (c << 16 | c >>> 16) + d | 0;
    b += (c ^ d ^ a) + k[2] - 995338651 | 0;
    b = (b << 23 | b >>> 9) + c | 0;
    a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
    a = (a << 6 | a >>> 26) + b | 0;
    d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
    d = (d << 10 | d >>> 22) + a | 0;
    c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
    c = (c << 15 | c >>> 17) + d | 0;
    b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
    b = (b << 21 | b >>> 11) + c | 0;
    a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
    a = (a << 6 | a >>> 26) + b | 0;
    d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
    d = (d << 10 | d >>> 22) + a | 0;
    c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
    c = (c << 15 | c >>> 17) + d | 0;
    b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
    b = (b << 21 | b >>> 11) + c | 0;
    a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
    a = (a << 6 | a >>> 26) + b | 0;
    d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
    d = (d << 10 | d >>> 22) + a | 0;
    c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
    c = (c << 15 | c >>> 17) + d | 0;
    b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
    b = (b << 21 | b >>> 11) + c | 0;
    a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
    a = (a << 6 | a >>> 26) + b | 0;
    d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
    d = (d << 10 | d >>> 22) + a | 0;
    c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
    c = (c << 15 | c >>> 17) + d | 0;
    b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
    b = (b << 21 | b >>> 11) + c | 0;
    x[0] = a + x[0] | 0;
    x[1] = b + x[1] | 0;
    x[2] = c + x[2] | 0;
    x[3] = d + x[3] | 0;
  }

  function md5blk(s) {
    var md5blks = [],
        i;
    /* Andy King said do it this way. */

    for (i = 0; i < 64; i += 4) {
      md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
    }

    return md5blks;
  }

  function md5blk_array(a) {
    var md5blks = [],
        i;
    /* Andy King said do it this way. */

    for (i = 0; i < 64; i += 4) {
      md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
    }

    return md5blks;
  }

  function md51(s) {
    var n = s.length,
        state = [1732584193, -271733879, -1732584194, 271733878],
        i,
        length,
        tail,
        tmp,
        lo,
        hi;

    for (i = 64; i <= n; i += 64) {
      md5cycle(state, md5blk(s.substring(i - 64, i)));
    }

    s = s.substring(i - 64);
    length = s.length;
    tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    for (i = 0; i < length; i += 1) {
      tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
    }

    tail[i >> 2] |= 0x80 << (i % 4 << 3);

    if (i > 55) {
      md5cycle(state, tail);

      for (i = 0; i < 16; i += 1) {
        tail[i] = 0;
      }
    } // Beware that the final length might not fit in 32 bits so we take care of that


    tmp = n * 8;
    tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
    lo = parseInt(tmp[2], 16);
    hi = parseInt(tmp[1], 16) || 0;
    tail[14] = lo;
    tail[15] = hi;
    md5cycle(state, tail);
    return state;
  }

  function md51_array(a) {
    var n = a.length,
        state = [1732584193, -271733879, -1732584194, 271733878],
        i,
        length,
        tail,
        tmp,
        lo,
        hi;

    for (i = 64; i <= n; i += 64) {
      md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
    } // Not sure if it is a bug, however IE10 will always produce a sub array of length 1
    // containing the last element of the parent array if the sub array specified starts
    // beyond the length of the parent array - weird.
    // https://connect.microsoft.com/IE/feedback/details/771452/typed-array-subarray-issue


    a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
    length = a.length;
    tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    for (i = 0; i < length; i += 1) {
      tail[i >> 2] |= a[i] << (i % 4 << 3);
    }

    tail[i >> 2] |= 0x80 << (i % 4 << 3);

    if (i > 55) {
      md5cycle(state, tail);

      for (i = 0; i < 16; i += 1) {
        tail[i] = 0;
      }
    } // Beware that the final length might not fit in 32 bits so we take care of that


    tmp = n * 8;
    tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
    lo = parseInt(tmp[2], 16);
    hi = parseInt(tmp[1], 16) || 0;
    tail[14] = lo;
    tail[15] = hi;
    md5cycle(state, tail);
    return state;
  }

  function rhex(n) {
    var s = '',
        j;

    for (j = 0; j < 4; j += 1) {
      s += hex_chr[n >> j * 8 + 4 & 0x0F] + hex_chr[n >> j * 8 & 0x0F];
    }

    return s;
  }

  function hex(x) {
    var i;

    for (i = 0; i < x.length; i += 1) {
      x[i] = rhex(x[i]);
    }

    return x.join('');
  } // In some cases the fast add32 function cannot be used..


  if (hex(md51('hello')) !== '5d41402abc4b2a76b9719d911017c592') {
    add32 = function add32(x, y) {
      var lsw = (x & 0xFFFF) + (y & 0xFFFF),
          msw = (x >> 16) + (y >> 16) + (lsw >> 16);
      return msw << 16 | lsw & 0xFFFF;
    };
  } // ---------------------------------------------------

  /**
   * ArrayBuffer slice polyfill.
   *
   * @see https://github.com/ttaubert/node-arraybuffer-slice
   */


  if (typeof ArrayBuffer !== 'undefined' && !ArrayBuffer.prototype.slice) {
    (function () {
      function clamp(val, length) {
        val = val | 0 || 0;

        if (val < 0) {
          return Math.max(val + length, 0);
        }

        return Math.min(val, length);
      }

      ArrayBuffer.prototype.slice = function (from, to) {
        var length = this.byteLength,
            begin = clamp(from, length),
            end = length,
            num,
            target,
            targetArray,
            sourceArray;

        if (to !== undefined) {
          end = clamp(to, length);
        }

        if (begin > end) {
          return new ArrayBuffer(0);
        }

        num = end - begin;
        target = new ArrayBuffer(num);
        targetArray = new Uint8Array(target);
        sourceArray = new Uint8Array(this, begin, num);
        targetArray.set(sourceArray);
        return target;
      };
    })();
  } // ---------------------------------------------------

  /**
   * Helpers.
   */


  function toUtf8(str) {
    if (/[\u0080-\uFFFF]/.test(str)) {
      str = unescape(encodeURIComponent(str));
    }

    return str;
  }

  function utf8Str2ArrayBuffer(str, returnUInt8Array) {
    var length = str.length,
        buff = new ArrayBuffer(length),
        arr = new Uint8Array(buff),
        i;

    for (i = 0; i < length; i += 1) {
      arr[i] = str.charCodeAt(i);
    }

    return returnUInt8Array ? arr : buff;
  }

  function arrayBuffer2Utf8Str(buff) {
    return String.fromCharCode.apply(null, new Uint8Array(buff));
  }

  function concatenateArrayBuffers(first, second, returnUInt8Array) {
    var result = new Uint8Array(first.byteLength + second.byteLength);
    result.set(new Uint8Array(first));
    result.set(new Uint8Array(second), first.byteLength);
    return returnUInt8Array ? result : result.buffer;
  }

  function hexToBinaryString(hex) {
    var bytes = [],
        length = hex.length,
        x;

    for (x = 0; x < length - 1; x += 2) {
      bytes.push(parseInt(hex.substr(x, 2), 16));
    }

    return String.fromCharCode.apply(String, bytes);
  } // ---------------------------------------------------

  /**
   * SparkMD5 OOP implementation.
   *
   * Use this class to perform an incremental md5, otherwise use the
   * static methods instead.
   */


  function SparkMD5() {
    // call reset to init the instance
    this.reset();
  }
  /**
   * Appends a string.
   * A conversion will be applied if an utf8 string is detected.
   *
   * @param {String} str The string to be appended
   *
   * @return {SparkMD5} The instance itself
   */


  SparkMD5.prototype.append = function (str) {
    // Converts the string to utf8 bytes if necessary
    // Then append as binary
    this.appendBinary(toUtf8(str));
    return this;
  };
  /**
   * Appends a binary string.
   *
   * @param {String} contents The binary string to be appended
   *
   * @return {SparkMD5} The instance itself
   */


  SparkMD5.prototype.appendBinary = function (contents) {
    this._buff += contents;
    this._length += contents.length;
    var length = this._buff.length,
        i;

    for (i = 64; i <= length; i += 64) {
      md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
    }

    this._buff = this._buff.substring(i - 64);
    return this;
  };
  /**
   * Finishes the incremental computation, reseting the internal state and
   * returning the result.
   *
   * @param {Boolean} raw True to get the raw string, false to get the hex string
   *
   * @return {String} The result
   */


  SparkMD5.prototype.end = function (raw) {
    var buff = this._buff,
        length = buff.length,
        i,
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ret;

    for (i = 0; i < length; i += 1) {
      tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3);
    }

    this._finish(tail, length);

    ret = hex(this._hash);

    if (raw) {
      ret = hexToBinaryString(ret);
    }

    this.reset();
    return ret;
  };
  /**
   * Resets the internal state of the computation.
   *
   * @return {SparkMD5} The instance itself
   */


  SparkMD5.prototype.reset = function () {
    this._buff = '';
    this._length = 0;
    this._hash = [1732584193, -271733879, -1732584194, 271733878];
    return this;
  };
  /**
   * Gets the internal state of the computation.
   *
   * @return {Object} The state
   */


  SparkMD5.prototype.getState = function () {
    return {
      buff: this._buff,
      length: this._length,
      hash: this._hash.slice()
    };
  };
  /**
   * Gets the internal state of the computation.
   *
   * @param {Object} state The state
   *
   * @return {SparkMD5} The instance itself
   */


  SparkMD5.prototype.setState = function (state) {
    this._buff = state.buff;
    this._length = state.length;
    this._hash = state.hash;
    return this;
  };
  /**
   * Releases memory used by the incremental buffer and other additional
   * resources. If you plan to use the instance again, use reset instead.
   */


  SparkMD5.prototype.destroy = function () {
    delete this._hash;
    delete this._buff;
    delete this._length;
  };
  /**
   * Finish the final calculation based on the tail.
   *
   * @param {Array}  tail   The tail (will be modified)
   * @param {Number} length The length of the remaining buffer
   */


  SparkMD5.prototype._finish = function (tail, length) {
    var i = length,
        tmp,
        lo,
        hi;
    tail[i >> 2] |= 0x80 << (i % 4 << 3);

    if (i > 55) {
      md5cycle(this._hash, tail);

      for (i = 0; i < 16; i += 1) {
        tail[i] = 0;
      }
    } // Do the final computation based on the tail and length
    // Beware that the final length may not fit in 32 bits so we take care of that


    tmp = this._length * 8;
    tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
    lo = parseInt(tmp[2], 16);
    hi = parseInt(tmp[1], 16) || 0;
    tail[14] = lo;
    tail[15] = hi;
    md5cycle(this._hash, tail);
  };
  /**
   * Performs the md5 hash on a string.
   * A conversion will be applied if utf8 string is detected.
   *
   * @param {String}  str The string
   * @param {Boolean} [raw] True to get the raw string, false to get the hex string
   *
   * @return {String} The result
   */


  SparkMD5.hash = function (str, raw) {
    // Converts the string to utf8 bytes if necessary
    // Then compute it using the binary function
    return SparkMD5.hashBinary(toUtf8(str), raw);
  };
  /**
   * Performs the md5 hash on a binary string.
   *
   * @param {String}  content The binary string
   * @param {Boolean} [raw]     True to get the raw string, false to get the hex string
   *
   * @return {String} The result
   */


  SparkMD5.hashBinary = function (content, raw) {
    var hash = md51(content),
        ret = hex(hash);
    return raw ? hexToBinaryString(ret) : ret;
  }; // ---------------------------------------------------

  /**
   * SparkMD5 OOP implementation for array buffers.
   *
   * Use this class to perform an incremental md5 ONLY for array buffers.
   */


  SparkMD5.ArrayBuffer = function () {
    // call reset to init the instance
    this.reset();
  };
  /**
   * Appends an array buffer.
   *
   * @param {ArrayBuffer} arr The array to be appended
   *
   * @return {SparkMD5.ArrayBuffer} The instance itself
   */


  SparkMD5.ArrayBuffer.prototype.append = function (arr) {
    var buff = concatenateArrayBuffers(this._buff.buffer, arr, true),
        length = buff.length,
        i;
    this._length += arr.byteLength;

    for (i = 64; i <= length; i += 64) {
      md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
    }

    this._buff = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
    return this;
  };
  /**
   * Finishes the incremental computation, reseting the internal state and
   * returning the result.
   *
   * @param {Boolean} raw True to get the raw string, false to get the hex string
   *
   * @return {String} The result
   */


  SparkMD5.ArrayBuffer.prototype.end = function (raw) {
    var buff = this._buff,
        length = buff.length,
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        i,
        ret;

    for (i = 0; i < length; i += 1) {
      tail[i >> 2] |= buff[i] << (i % 4 << 3);
    }

    this._finish(tail, length);

    ret = hex(this._hash);

    if (raw) {
      ret = hexToBinaryString(ret);
    }

    this.reset();
    return ret;
  };
  /**
   * Resets the internal state of the computation.
   *
   * @return {SparkMD5.ArrayBuffer} The instance itself
   */


  SparkMD5.ArrayBuffer.prototype.reset = function () {
    this._buff = new Uint8Array(0);
    this._length = 0;
    this._hash = [1732584193, -271733879, -1732584194, 271733878];
    return this;
  };
  /**
   * Gets the internal state of the computation.
   *
   * @return {Object} The state
   */


  SparkMD5.ArrayBuffer.prototype.getState = function () {
    var state = SparkMD5.prototype.getState.call(this); // Convert buffer to a string

    state.buff = arrayBuffer2Utf8Str(state.buff);
    return state;
  };
  /**
   * Gets the internal state of the computation.
   *
   * @param {Object} state The state
   *
   * @return {SparkMD5.ArrayBuffer} The instance itself
   */


  SparkMD5.ArrayBuffer.prototype.setState = function (state) {
    // Convert string to buffer
    state.buff = utf8Str2ArrayBuffer(state.buff, true);
    return SparkMD5.prototype.setState.call(this, state);
  };

  SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
  SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;
  /**
   * Performs the md5 hash on an array buffer.
   *
   * @param {ArrayBuffer} arr The array buffer
   * @param {Boolean}     [raw] True to get the raw string, false to get the hex one
   *
   * @return {String} The result
   */

  SparkMD5.ArrayBuffer.hash = function (arr, raw) {
    var hash = md51_array(new Uint8Array(arr)),
        ret = hex(hash);
    return raw ? hexToBinaryString(ret) : ret;
  };

  return SparkMD5;
});

},{}],50:[function(require,module,exports){
/*!
 * Copyright (c) 2015, Salesforce.com, Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. Neither the name of Salesforce.com nor the names of its contributors may
 * be used to endorse or promote products derived from this software without
 * specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */
"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var punycode = require(5);

var urlParse = require(59).parse;

var util = require(63);

var pubsuffix = require(54);

var Store = require(55).Store;

var MemoryCookieStore = require(51).MemoryCookieStore;

var pathMatch = require(52).pathMatch;

var VERSION = require(56);

var _require = require(57),
    fromCallback = _require.fromCallback; // From RFC6265 S4.1.1
// note that it excludes \x3B ";"


var COOKIE_OCTETS = /^[\x21\x23-\x2B\x2D-\x3A\x3C-\x5B\x5D-\x7E]+$/;
var CONTROL_CHARS = /[\x00-\x1F]/; // From Chromium // '\r', '\n' and '\0' should be treated as a terminator in
// the "relaxed" mode, see:
// https://github.com/ChromiumWebApps/chromium/blob/b3d3b4da8bb94c1b2e061600df106d590fda3620/net/cookies/parsed_cookie.cc#L60

var TERMINATORS = ["\n", "\r", "\0"]; // RFC6265 S4.1.1 defines path value as 'any CHAR except CTLs or ";"'
// Note ';' is \x3B

var PATH_VALUE = /[\x20-\x3A\x3C-\x7E]+/; // date-time parsing constants (RFC6265 S5.1.1)

var DATE_DELIM = /[\x09\x20-\x2F\x3B-\x40\x5B-\x60\x7B-\x7E]/;
var MONTH_TO_NUM = {
  jan: 0,
  feb: 1,
  mar: 2,
  apr: 3,
  may: 4,
  jun: 5,
  jul: 6,
  aug: 7,
  sep: 8,
  oct: 9,
  nov: 10,
  dec: 11
};
var MAX_TIME = 2147483647000; // 31-bit max

var MIN_TIME = 0; // 31-bit min

var SAME_SITE_CONTEXT_VAL_ERR = 'Invalid sameSiteContext option for getCookies(); expected one of "strict", "lax", or "none"';

function checkSameSiteContext(value) {
  var context = String(value).toLowerCase();

  if (context === "none" || context === "lax" || context === "strict") {
    return context;
  } else {
    return null;
  }
}

var PrefixSecurityEnum = Object.freeze({
  SILENT: "silent",
  STRICT: "strict",
  DISABLED: "unsafe-disabled"
}); // Dumped from ip-regex@4.0.0, with the following changes:
// * all capturing groups converted to non-capturing -- "(?:)"
// * support for IPv6 Scoped Literal ("%eth1") removed
// * lowercase hexadecimal only

var IP_REGEX_LOWERCASE = /(?:^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$)|(?:^(?:(?:[a-f\d]{1,4}:){7}(?:[a-f\d]{1,4}|:)|(?:[a-f\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|:[a-f\d]{1,4}|:)|(?:[a-f\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,2}|:)|(?:[a-f\d]{1,4}:){4}(?:(?::[a-f\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,3}|:)|(?:[a-f\d]{1,4}:){3}(?:(?::[a-f\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,4}|:)|(?:[a-f\d]{1,4}:){2}(?:(?::[a-f\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,5}|:)|(?:[a-f\d]{1,4}:){1}(?:(?::[a-f\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,6}|:)|(?::(?:(?::[a-f\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,7}|:)))$)/;
/*
 * Parses a Natural number (i.e., non-negative integer) with either the
 *    <min>*<max>DIGIT ( non-digit *OCTET )
 * or
 *    <min>*<max>DIGIT
 * grammar (RFC6265 S5.1.1).
 *
 * The "trailingOK" boolean controls if the grammar accepts a
 * "( non-digit *OCTET )" trailer.
 */

function parseDigits(token, minDigits, maxDigits, trailingOK) {
  var count = 0;

  while (count < token.length) {
    var c = token.charCodeAt(count); // "non-digit = %x00-2F / %x3A-FF"

    if (c <= 0x2f || c >= 0x3a) {
      break;
    }

    count++;
  } // constrain to a minimum and maximum number of digits.


  if (count < minDigits || count > maxDigits) {
    return null;
  }

  if (!trailingOK && count != token.length) {
    return null;
  }

  return parseInt(token.substr(0, count), 10);
}

function parseTime(token) {
  var parts = token.split(":");
  var result = [0, 0, 0];
  /* RF6256 S5.1.1:
   *      time            = hms-time ( non-digit *OCTET )
   *      hms-time        = time-field ":" time-field ":" time-field
   *      time-field      = 1*2DIGIT
   */

  if (parts.length !== 3) {
    return null;
  }

  for (var i = 0; i < 3; i++) {
    // "time-field" must be strictly "1*2DIGIT", HOWEVER, "hms-time" can be
    // followed by "( non-digit *OCTET )" so therefore the last time-field can
    // have a trailer
    var trailingOK = i == 2;
    var num = parseDigits(parts[i], 1, 2, trailingOK);

    if (num === null) {
      return null;
    }

    result[i] = num;
  }

  return result;
}

function parseMonth(token) {
  token = String(token).substr(0, 3).toLowerCase();
  var num = MONTH_TO_NUM[token];
  return num >= 0 ? num : null;
}
/*
 * RFC6265 S5.1.1 date parser (see RFC for full grammar)
 */


function parseDate(str) {
  if (!str) {
    return;
  }
  /* RFC6265 S5.1.1:
   * 2. Process each date-token sequentially in the order the date-tokens
   * appear in the cookie-date
   */


  var tokens = str.split(DATE_DELIM);

  if (!tokens) {
    return;
  }

  var hour = null;
  var minute = null;
  var second = null;
  var dayOfMonth = null;
  var month = null;
  var year = null;

  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i].trim();

    if (!token.length) {
      continue;
    }

    var result = void 0;
    /* 2.1. If the found-time flag is not set and the token matches the time
     * production, set the found-time flag and set the hour- value,
     * minute-value, and second-value to the numbers denoted by the digits in
     * the date-token, respectively.  Skip the remaining sub-steps and continue
     * to the next date-token.
     */

    if (second === null) {
      result = parseTime(token);

      if (result) {
        hour = result[0];
        minute = result[1];
        second = result[2];
        continue;
      }
    }
    /* 2.2. If the found-day-of-month flag is not set and the date-token matches
     * the day-of-month production, set the found-day-of- month flag and set
     * the day-of-month-value to the number denoted by the date-token.  Skip
     * the remaining sub-steps and continue to the next date-token.
     */


    if (dayOfMonth === null) {
      // "day-of-month = 1*2DIGIT ( non-digit *OCTET )"
      result = parseDigits(token, 1, 2, true);

      if (result !== null) {
        dayOfMonth = result;
        continue;
      }
    }
    /* 2.3. If the found-month flag is not set and the date-token matches the
     * month production, set the found-month flag and set the month-value to
     * the month denoted by the date-token.  Skip the remaining sub-steps and
     * continue to the next date-token.
     */


    if (month === null) {
      result = parseMonth(token);

      if (result !== null) {
        month = result;
        continue;
      }
    }
    /* 2.4. If the found-year flag is not set and the date-token matches the
     * year production, set the found-year flag and set the year-value to the
     * number denoted by the date-token.  Skip the remaining sub-steps and
     * continue to the next date-token.
     */


    if (year === null) {
      // "year = 2*4DIGIT ( non-digit *OCTET )"
      result = parseDigits(token, 2, 4, true);

      if (result !== null) {
        year = result;
        /* From S5.1.1:
         * 3.  If the year-value is greater than or equal to 70 and less
         * than or equal to 99, increment the year-value by 1900.
         * 4.  If the year-value is greater than or equal to 0 and less
         * than or equal to 69, increment the year-value by 2000.
         */

        if (year >= 70 && year <= 99) {
          year += 1900;
        } else if (year >= 0 && year <= 69) {
          year += 2000;
        }
      }
    }
  }
  /* RFC 6265 S5.1.1
   * "5. Abort these steps and fail to parse the cookie-date if:
   *     *  at least one of the found-day-of-month, found-month, found-
   *        year, or found-time flags is not set,
   *     *  the day-of-month-value is less than 1 or greater than 31,
   *     *  the year-value is less than 1601,
   *     *  the hour-value is greater than 23,
   *     *  the minute-value is greater than 59, or
   *     *  the second-value is greater than 59.
   *     (Note that leap seconds cannot be represented in this syntax.)"
   *
   * So, in order as above:
   */


  if (dayOfMonth === null || month === null || year === null || second === null || dayOfMonth < 1 || dayOfMonth > 31 || year < 1601 || hour > 23 || minute > 59 || second > 59) {
    return;
  }

  return new Date(Date.UTC(year, month, dayOfMonth, hour, minute, second));
}

function formatDate(date) {
  return date.toUTCString();
} // S5.1.2 Canonicalized Host Names


function canonicalDomain(str) {
  if (str == null) {
    return null;
  }

  str = str.trim().replace(/^\./, ""); // S4.1.2.3 & S5.2.3: ignore leading .
  // convert to IDN if any non-ASCII characters

  if (punycode && /[^\u0001-\u007f]/.test(str)) {
    str = punycode.toASCII(str);
  }

  return str.toLowerCase();
} // S5.1.3 Domain Matching


function domainMatch(str, domStr, canonicalize) {
  if (str == null || domStr == null) {
    return null;
  }

  if (canonicalize !== false) {
    str = canonicalDomain(str);
    domStr = canonicalDomain(domStr);
  }
  /*
   * S5.1.3:
   * "A string domain-matches a given domain string if at least one of the
   * following conditions hold:"
   *
   * " o The domain string and the string are identical. (Note that both the
   * domain string and the string will have been canonicalized to lower case at
   * this point)"
   */


  if (str == domStr) {
    return true;
  }
  /* " o All of the following [three] conditions hold:" */

  /* "* The domain string is a suffix of the string" */


  var idx = str.indexOf(domStr);

  if (idx <= 0) {
    return false; // it's a non-match (-1) or prefix (0)
  } // next, check it's a proper suffix
  // e.g., "a.b.c".indexOf("b.c") === 2
  // 5 === 3+2


  if (str.length !== domStr.length + idx) {
    return false; // it's not a suffix
  }
  /* "  * The last character of the string that is not included in the
   * domain string is a %x2E (".") character." */


  if (str.substr(idx - 1, 1) !== '.') {
    return false; // doesn't align on "."
  }
  /* "  * The string is a host name (i.e., not an IP address)." */


  if (IP_REGEX_LOWERCASE.test(str)) {
    return false; // it's an IP address
  }

  return true;
} // RFC6265 S5.1.4 Paths and Path-Match

/*
 * "The user agent MUST use an algorithm equivalent to the following algorithm
 * to compute the default-path of a cookie:"
 *
 * Assumption: the path (and not query part or absolute uri) is passed in.
 */


function defaultPath(path) {
  // "2. If the uri-path is empty or if the first character of the uri-path is not
  // a %x2F ("/") character, output %x2F ("/") and skip the remaining steps.
  if (!path || path.substr(0, 1) !== "/") {
    return "/";
  } // "3. If the uri-path contains no more than one %x2F ("/") character, output
  // %x2F ("/") and skip the remaining step."


  if (path === "/") {
    return path;
  }

  var rightSlash = path.lastIndexOf("/");

  if (rightSlash === 0) {
    return "/";
  } // "4. Output the characters of the uri-path from the first character up to,
  // but not including, the right-most %x2F ("/")."


  return path.slice(0, rightSlash);
}

function trimTerminator(str) {
  for (var t = 0; t < TERMINATORS.length; t++) {
    var terminatorIdx = str.indexOf(TERMINATORS[t]);

    if (terminatorIdx !== -1) {
      str = str.substr(0, terminatorIdx);
    }
  }

  return str;
}

function parseCookiePair(cookiePair, looseMode) {
  cookiePair = trimTerminator(cookiePair);
  var firstEq = cookiePair.indexOf("=");

  if (looseMode) {
    if (firstEq === 0) {
      // '=' is immediately at start
      cookiePair = cookiePair.substr(1);
      firstEq = cookiePair.indexOf("="); // might still need to split on '='
    }
  } else {
    // non-loose mode
    if (firstEq <= 0) {
      // no '=' or is at start
      return; // needs to have non-empty "cookie-name"
    }
  }

  var cookieName, cookieValue;

  if (firstEq <= 0) {
    cookieName = "";
    cookieValue = cookiePair.trim();
  } else {
    cookieName = cookiePair.substr(0, firstEq).trim();
    cookieValue = cookiePair.substr(firstEq + 1).trim();
  }

  if (CONTROL_CHARS.test(cookieName) || CONTROL_CHARS.test(cookieValue)) {
    return;
  }

  var c = new Cookie();
  c.key = cookieName;
  c.value = cookieValue;
  return c;
}

function parse(str, options) {
  if (!options || _typeof(options) !== "object") {
    options = {};
  }

  str = str.trim(); // We use a regex to parse the "name-value-pair" part of S5.2

  var firstSemi = str.indexOf(";"); // S5.2 step 1

  var cookiePair = firstSemi === -1 ? str : str.substr(0, firstSemi);
  var c = parseCookiePair(cookiePair, !!options.loose);

  if (!c) {
    return;
  }

  if (firstSemi === -1) {
    return c;
  } // S5.2.3 "unparsed-attributes consist of the remainder of the set-cookie-string
  // (including the %x3B (";") in question)." plus later on in the same section
  // "discard the first ";" and trim".


  var unparsed = str.slice(firstSemi + 1).trim(); // "If the unparsed-attributes string is empty, skip the rest of these
  // steps."

  if (unparsed.length === 0) {
    return c;
  }
  /*
   * S5.2 says that when looping over the items "[p]rocess the attribute-name
   * and attribute-value according to the requirements in the following
   * subsections" for every item.  Plus, for many of the individual attributes
   * in S5.3 it says to use the "attribute-value of the last attribute in the
   * cookie-attribute-list".  Therefore, in this implementation, we overwrite
   * the previous value.
   */


  var cookie_avs = unparsed.split(";");

  while (cookie_avs.length) {
    var av = cookie_avs.shift().trim();

    if (av.length === 0) {
      // happens if ";;" appears
      continue;
    }

    var av_sep = av.indexOf("=");
    var av_key = void 0,
        av_value = void 0;

    if (av_sep === -1) {
      av_key = av;
      av_value = null;
    } else {
      av_key = av.substr(0, av_sep);
      av_value = av.substr(av_sep + 1);
    }

    av_key = av_key.trim().toLowerCase();

    if (av_value) {
      av_value = av_value.trim();
    }

    switch (av_key) {
      case "expires":
        // S5.2.1
        if (av_value) {
          var exp = parseDate(av_value); // "If the attribute-value failed to parse as a cookie date, ignore the
          // cookie-av."

          if (exp) {
            // over and underflow not realistically a concern: V8's getTime() seems to
            // store something larger than a 32-bit time_t (even with 32-bit node)
            c.expires = exp;
          }
        }

        break;

      case "max-age":
        // S5.2.2
        if (av_value) {
          // "If the first character of the attribute-value is not a DIGIT or a "-"
          // character ...[or]... If the remainder of attribute-value contains a
          // non-DIGIT character, ignore the cookie-av."
          if (/^-?[0-9]+$/.test(av_value)) {
            var delta = parseInt(av_value, 10); // "If delta-seconds is less than or equal to zero (0), let expiry-time
            // be the earliest representable date and time."

            c.setMaxAge(delta);
          }
        }

        break;

      case "domain":
        // S5.2.3
        // "If the attribute-value is empty, the behavior is undefined.  However,
        // the user agent SHOULD ignore the cookie-av entirely."
        if (av_value) {
          // S5.2.3 "Let cookie-domain be the attribute-value without the leading %x2E
          // (".") character."
          var domain = av_value.trim().replace(/^\./, "");

          if (domain) {
            // "Convert the cookie-domain to lower case."
            c.domain = domain.toLowerCase();
          }
        }

        break;

      case "path":
        // S5.2.4

        /*
         * "If the attribute-value is empty or if the first character of the
         * attribute-value is not %x2F ("/"):
         *   Let cookie-path be the default-path.
         * Otherwise:
         *   Let cookie-path be the attribute-value."
         *
         * We'll represent the default-path as null since it depends on the
         * context of the parsing.
         */
        c.path = av_value && av_value[0] === "/" ? av_value : null;
        break;

      case "secure":
        // S5.2.5

        /*
         * "If the attribute-name case-insensitively matches the string "Secure",
         * the user agent MUST append an attribute to the cookie-attribute-list
         * with an attribute-name of Secure and an empty attribute-value."
         */
        c.secure = true;
        break;

      case "httponly":
        // S5.2.6 -- effectively the same as 'secure'
        c.httpOnly = true;
        break;

      case "samesite":
        // RFC6265bis-02 S5.3.7
        var enforcement = av_value ? av_value.toLowerCase() : "";

        switch (enforcement) {
          case "strict":
            c.sameSite = "strict";
            break;

          case "lax":
            c.sameSite = "lax";
            break;

          default:
            // RFC6265bis-02 S5.3.7 step 1:
            // "If cookie-av's attribute-value is not a case-insensitive match
            //  for "Strict" or "Lax", ignore the "cookie-av"."
            // This effectively sets it to 'none' from the prototype.
            break;
        }

        break;

      default:
        c.extensions = c.extensions || [];
        c.extensions.push(av);
        break;
    }
  }

  return c;
}
/**
 *  If the cookie-name begins with a case-sensitive match for the
 *  string "__Secure-", abort these steps and ignore the cookie
 *  entirely unless the cookie's secure-only-flag is true.
 * @param cookie
 * @returns boolean
 */


function isSecurePrefixConditionMet(cookie) {
  return !cookie.key.startsWith("__Secure-") || cookie.secure;
}
/**
 *  If the cookie-name begins with a case-sensitive match for the
 *  string "__Host-", abort these steps and ignore the cookie
 *  entirely unless the cookie meets all the following criteria:
 *    1.  The cookie's secure-only-flag is true.
 *    2.  The cookie's host-only-flag is true.
 *    3.  The cookie-attribute-list contains an attribute with an
 *        attribute-name of "Path", and the cookie's path is "/".
 * @param cookie
 * @returns boolean
 */


function isHostPrefixConditionMet(cookie) {
  return !cookie.key.startsWith("__Host-") || cookie.secure && cookie.hostOnly && cookie.path != null && cookie.path === "/";
} // avoid the V8 deoptimization monster!


function jsonParse(str) {
  var obj;

  try {
    obj = JSON.parse(str);
  } catch (e) {
    return e;
  }

  return obj;
}

function fromJSON(str) {
  if (!str) {
    return null;
  }

  var obj;

  if (typeof str === "string") {
    obj = jsonParse(str);

    if (obj instanceof Error) {
      return null;
    }
  } else {
    // assume it's an Object
    obj = str;
  }

  var c = new Cookie();

  for (var i = 0; i < Cookie.serializableProperties.length; i++) {
    var prop = Cookie.serializableProperties[i];

    if (obj[prop] === undefined || obj[prop] === cookieDefaults[prop]) {
      continue; // leave as prototype default
    }

    if (prop === "expires" || prop === "creation" || prop === "lastAccessed") {
      if (obj[prop] === null) {
        c[prop] = null;
      } else {
        c[prop] = obj[prop] == "Infinity" ? "Infinity" : new Date(obj[prop]);
      }
    } else {
      c[prop] = obj[prop];
    }
  }

  return c;
}
/* Section 5.4 part 2:
 * "*  Cookies with longer paths are listed before cookies with
 *     shorter paths.
 *
 *  *  Among cookies that have equal-length path fields, cookies with
 *     earlier creation-times are listed before cookies with later
 *     creation-times."
 */


function cookieCompare(a, b) {
  var cmp = 0; // descending for length: b CMP a

  var aPathLen = a.path ? a.path.length : 0;
  var bPathLen = b.path ? b.path.length : 0;
  cmp = bPathLen - aPathLen;

  if (cmp !== 0) {
    return cmp;
  } // ascending for time: a CMP b


  var aTime = a.creation ? a.creation.getTime() : MAX_TIME;
  var bTime = b.creation ? b.creation.getTime() : MAX_TIME;
  cmp = aTime - bTime;

  if (cmp !== 0) {
    return cmp;
  } // break ties for the same millisecond (precision of JavaScript's clock)


  cmp = a.creationIndex - b.creationIndex;
  return cmp;
} // Gives the permutation of all possible pathMatch()es of a given path. The
// array is in longest-to-shortest order.  Handy for indexing.


function permutePath(path) {
  if (path === "/") {
    return ["/"];
  }

  var permutations = [path];

  while (path.length > 1) {
    var lindex = path.lastIndexOf("/");

    if (lindex === 0) {
      break;
    }

    path = path.substr(0, lindex);
    permutations.push(path);
  }

  permutations.push("/");
  return permutations;
}

function getCookieContext(url) {
  if (url instanceof Object) {
    return url;
  } // NOTE: decodeURI will throw on malformed URIs (see GH-32).
  // Therefore, we will just skip decoding for such URIs.


  try {
    url = decodeURI(url);
  } catch (err) {// Silently swallow error
  }

  return urlParse(url);
}

var cookieDefaults = {
  // the order in which the RFC has them:
  key: "",
  value: "",
  expires: "Infinity",
  maxAge: null,
  domain: null,
  path: null,
  secure: false,
  httpOnly: false,
  extensions: null,
  // set by the CookieJar:
  hostOnly: null,
  pathIsDefault: null,
  creation: null,
  lastAccessed: null,
  sameSite: "none"
};

var Cookie = /*#__PURE__*/function () {
  function Cookie() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Cookie);

    if (util.inspect.custom) {
      this[util.inspect.custom] = this.inspect;
    }

    Object.assign(this, cookieDefaults, options);
    this.creation = this.creation || new Date(); // used to break creation ties in cookieCompare():

    Object.defineProperty(this, "creationIndex", {
      configurable: false,
      enumerable: false,
      // important for assert.deepEqual checks
      writable: true,
      value: ++Cookie.cookiesCreated
    });
  }

  _createClass(Cookie, [{
    key: "inspect",
    value: function inspect() {
      var now = Date.now();
      var hostOnly = this.hostOnly != null ? this.hostOnly : "?";
      var createAge = this.creation ? "".concat(now - this.creation.getTime(), "ms") : "?";
      var accessAge = this.lastAccessed ? "".concat(now - this.lastAccessed.getTime(), "ms") : "?";
      return "Cookie=\"".concat(this.toString(), "; hostOnly=").concat(hostOnly, "; aAge=").concat(accessAge, "; cAge=").concat(createAge, "\"");
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var obj = {};

      var _iterator = _createForOfIteratorHelper(Cookie.serializableProperties),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var prop = _step.value;

          if (this[prop] === cookieDefaults[prop]) {
            continue; // leave as prototype default
          }

          if (prop === "expires" || prop === "creation" || prop === "lastAccessed") {
            if (this[prop] === null) {
              obj[prop] = null;
            } else {
              obj[prop] = this[prop] == "Infinity" // intentionally not ===
              ? "Infinity" : this[prop].toISOString();
            }
          } else if (prop === "maxAge") {
            if (this[prop] !== null) {
              // again, intentionally not ===
              obj[prop] = this[prop] == Infinity || this[prop] == -Infinity ? this[prop].toString() : this[prop];
            }
          } else {
            if (this[prop] !== cookieDefaults[prop]) {
              obj[prop] = this[prop];
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return obj;
    }
  }, {
    key: "clone",
    value: function clone() {
      return fromJSON(this.toJSON());
    }
  }, {
    key: "validate",
    value: function validate() {
      if (!COOKIE_OCTETS.test(this.value)) {
        return false;
      }

      if (this.expires != Infinity && !(this.expires instanceof Date) && !parseDate(this.expires)) {
        return false;
      }

      if (this.maxAge != null && this.maxAge <= 0) {
        return false; // "Max-Age=" non-zero-digit *DIGIT
      }

      if (this.path != null && !PATH_VALUE.test(this.path)) {
        return false;
      }

      var cdomain = this.cdomain();

      if (cdomain) {
        if (cdomain.match(/\.$/)) {
          return false; // S4.1.2.3 suggests that this is bad. domainMatch() tests confirm this
        }

        var suffix = pubsuffix.getPublicSuffix(cdomain);

        if (suffix == null) {
          // it's a public suffix
          return false;
        }
      }

      return true;
    }
  }, {
    key: "setExpires",
    value: function setExpires(exp) {
      if (exp instanceof Date) {
        this.expires = exp;
      } else {
        this.expires = parseDate(exp) || "Infinity";
      }
    }
  }, {
    key: "setMaxAge",
    value: function setMaxAge(age) {
      if (age === Infinity || age === -Infinity) {
        this.maxAge = age.toString(); // so JSON.stringify() works
      } else {
        this.maxAge = age;
      }
    }
  }, {
    key: "cookieString",
    value: function cookieString() {
      var val = this.value;

      if (val == null) {
        val = "";
      }

      if (this.key === "") {
        return val;
      }

      return "".concat(this.key, "=").concat(val);
    } // gives Set-Cookie header format

  }, {
    key: "toString",
    value: function toString() {
      var str = this.cookieString();

      if (this.expires != Infinity) {
        if (this.expires instanceof Date) {
          str += "; Expires=".concat(formatDate(this.expires));
        } else {
          str += "; Expires=".concat(this.expires);
        }
      }

      if (this.maxAge != null && this.maxAge != Infinity) {
        str += "; Max-Age=".concat(this.maxAge);
      }

      if (this.domain && !this.hostOnly) {
        str += "; Domain=".concat(this.domain);
      }

      if (this.path) {
        str += "; Path=".concat(this.path);
      }

      if (this.secure) {
        str += "; Secure";
      }

      if (this.httpOnly) {
        str += "; HttpOnly";
      }

      if (this.sameSite && this.sameSite !== "none") {
        var ssCanon = Cookie.sameSiteCanonical[this.sameSite.toLowerCase()];
        str += "; SameSite=".concat(ssCanon ? ssCanon : this.sameSite);
      }

      if (this.extensions) {
        this.extensions.forEach(function (ext) {
          str += "; ".concat(ext);
        });
      }

      return str;
    } // TTL() partially replaces the "expiry-time" parts of S5.3 step 3 (setCookie()
    // elsewhere)
    // S5.3 says to give the "latest representable date" for which we use Infinity
    // For "expired" we use 0

  }, {
    key: "TTL",
    value: function TTL(now) {
      /* RFC6265 S4.1.2.2 If a cookie has both the Max-Age and the Expires
       * attribute, the Max-Age attribute has precedence and controls the
       * expiration date of the cookie.
       * (Concurs with S5.3 step 3)
       */
      if (this.maxAge != null) {
        return this.maxAge <= 0 ? 0 : this.maxAge * 1000;
      }

      var expires = this.expires;

      if (expires != Infinity) {
        if (!(expires instanceof Date)) {
          expires = parseDate(expires) || Infinity;
        }

        if (expires == Infinity) {
          return Infinity;
        }

        return expires.getTime() - (now || Date.now());
      }

      return Infinity;
    } // expiryTime() replaces the "expiry-time" parts of S5.3 step 3 (setCookie()
    // elsewhere)

  }, {
    key: "expiryTime",
    value: function expiryTime(now) {
      if (this.maxAge != null) {
        var relativeTo = now || this.creation || new Date();
        var age = this.maxAge <= 0 ? -Infinity : this.maxAge * 1000;
        return relativeTo.getTime() + age;
      }

      if (this.expires == Infinity) {
        return Infinity;
      }

      return this.expires.getTime();
    } // expiryDate() replaces the "expiry-time" parts of S5.3 step 3 (setCookie()
    // elsewhere), except it returns a Date

  }, {
    key: "expiryDate",
    value: function expiryDate(now) {
      var millisec = this.expiryTime(now);

      if (millisec == Infinity) {
        return new Date(MAX_TIME);
      } else if (millisec == -Infinity) {
        return new Date(MIN_TIME);
      } else {
        return new Date(millisec);
      }
    } // This replaces the "persistent-flag" parts of S5.3 step 3

  }, {
    key: "isPersistent",
    value: function isPersistent() {
      return this.maxAge != null || this.expires != Infinity;
    } // Mostly S5.1.2 and S5.2.3:

  }, {
    key: "canonicalizedDomain",
    value: function canonicalizedDomain() {
      if (this.domain == null) {
        return null;
      }

      return canonicalDomain(this.domain);
    }
  }, {
    key: "cdomain",
    value: function cdomain() {
      return this.canonicalizedDomain();
    }
  }]);

  return Cookie;
}();

Cookie.cookiesCreated = 0;
Cookie.parse = parse;
Cookie.fromJSON = fromJSON;
Cookie.serializableProperties = Object.keys(cookieDefaults);
Cookie.sameSiteLevel = {
  strict: 3,
  lax: 2,
  none: 1
};
Cookie.sameSiteCanonical = {
  strict: "Strict",
  lax: "Lax"
};

function getNormalizedPrefixSecurity(prefixSecurity) {
  if (prefixSecurity != null) {
    var normalizedPrefixSecurity = prefixSecurity.toLowerCase();
    /* The three supported options */

    switch (normalizedPrefixSecurity) {
      case PrefixSecurityEnum.STRICT:
      case PrefixSecurityEnum.SILENT:
      case PrefixSecurityEnum.DISABLED:
        return normalizedPrefixSecurity;
    }
  }
  /* Default is SILENT */


  return PrefixSecurityEnum.SILENT;
}

var CookieJar = /*#__PURE__*/function () {
  function CookieJar(store) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      rejectPublicSuffixes: true
    };

    _classCallCheck(this, CookieJar);

    if (typeof options === "boolean") {
      options = {
        rejectPublicSuffixes: options
      };
    }

    this.rejectPublicSuffixes = options.rejectPublicSuffixes;
    this.enableLooseMode = !!options.looseMode;
    this.allowSpecialUseDomain = !!options.allowSpecialUseDomain;
    this.store = store || new MemoryCookieStore();
    this.prefixSecurity = getNormalizedPrefixSecurity(options.prefixSecurity);
    this._cloneSync = syncWrap("clone");
    this._importCookiesSync = syncWrap("_importCookies");
    this.getCookiesSync = syncWrap("getCookies");
    this.getCookieStringSync = syncWrap("getCookieString");
    this.getSetCookieStringsSync = syncWrap("getSetCookieStrings");
    this.removeAllCookiesSync = syncWrap("removeAllCookies");
    this.setCookieSync = syncWrap("setCookie");
    this.serializeSync = syncWrap("serialize");
  }

  _createClass(CookieJar, [{
    key: "setCookie",
    value: function setCookie(cookie, url, options, cb) {
      var err;
      var context = getCookieContext(url);

      if (typeof options === "function") {
        cb = options;
        options = {};
      }

      var host = canonicalDomain(context.hostname);
      var loose = options.loose || this.enableLooseMode;
      var sameSiteContext = null;

      if (options.sameSiteContext) {
        sameSiteContext = checkSameSiteContext(options.sameSiteContext);

        if (!sameSiteContext) {
          return cb(new Error(SAME_SITE_CONTEXT_VAL_ERR));
        }
      } // S5.3 step 1


      if (typeof cookie === "string" || cookie instanceof String) {
        cookie = Cookie.parse(cookie, {
          loose: loose
        });

        if (!cookie) {
          err = new Error("Cookie failed to parse");
          return cb(options.ignoreError ? null : err);
        }
      } else if (!(cookie instanceof Cookie)) {
        // If you're seeing this error, and are passing in a Cookie object,
        // it *might* be a Cookie object from another loaded version of tough-cookie.
        err = new Error("First argument to setCookie must be a Cookie object or string");
        return cb(options.ignoreError ? null : err);
      } // S5.3 step 2


      var now = options.now || new Date(); // will assign later to save effort in the face of errors
      // S5.3 step 3: NOOP; persistent-flag and expiry-time is handled by getCookie()
      // S5.3 step 4: NOOP; domain is null by default
      // S5.3 step 5: public suffixes

      if (this.rejectPublicSuffixes && cookie.domain) {
        var suffix = pubsuffix.getPublicSuffix(cookie.cdomain());

        if (suffix == null) {
          // e.g. "com"
          err = new Error("Cookie has domain set to a public suffix");
          return cb(options.ignoreError ? null : err);
        }
      } // S5.3 step 6:


      if (cookie.domain) {
        if (!domainMatch(host, cookie.cdomain(), false)) {
          err = new Error("Cookie not in this host's domain. Cookie:".concat(cookie.cdomain(), " Request:").concat(host));
          return cb(options.ignoreError ? null : err);
        }

        if (cookie.hostOnly == null) {
          // don't reset if already set
          cookie.hostOnly = false;
        }
      } else {
        cookie.hostOnly = true;
        cookie.domain = host;
      } //S5.2.4 If the attribute-value is empty or if the first character of the
      //attribute-value is not %x2F ("/"):
      //Let cookie-path be the default-path.


      if (!cookie.path || cookie.path[0] !== "/") {
        cookie.path = defaultPath(context.pathname);
        cookie.pathIsDefault = true;
      } // S5.3 step 8: NOOP; secure attribute
      // S5.3 step 9: NOOP; httpOnly attribute
      // S5.3 step 10


      if (options.http === false && cookie.httpOnly) {
        err = new Error("Cookie is HttpOnly and this isn't an HTTP API");
        return cb(options.ignoreError ? null : err);
      } // 6252bis-02 S5.4 Step 13 & 14:


      if (cookie.sameSite !== "none" && sameSiteContext) {
        // "If the cookie's "same-site-flag" is not "None", and the cookie
        //  is being set from a context whose "site for cookies" is not an
        //  exact match for request-uri's host's registered domain, then
        //  abort these steps and ignore the newly created cookie entirely."
        if (sameSiteContext === "none") {
          err = new Error("Cookie is SameSite but this is a cross-origin request");
          return cb(options.ignoreError ? null : err);
        }
      }
      /* 6265bis-02 S5.4 Steps 15 & 16 */


      var ignoreErrorForPrefixSecurity = this.prefixSecurity === PrefixSecurityEnum.SILENT;
      var prefixSecurityDisabled = this.prefixSecurity === PrefixSecurityEnum.DISABLED;
      /* If prefix checking is not disabled ...*/

      if (!prefixSecurityDisabled) {
        var errorFound = false;
        var errorMsg;
        /* Check secure prefix condition */

        if (!isSecurePrefixConditionMet(cookie)) {
          errorFound = true;
          errorMsg = "Cookie has __Secure prefix but Secure attribute is not set";
        } else if (!isHostPrefixConditionMet(cookie)) {
          /* Check host prefix condition */
          errorFound = true;
          errorMsg = "Cookie has __Host prefix but either Secure or HostOnly attribute is not set or Path is not '/'";
        }

        if (errorFound) {
          return cb(options.ignoreError || ignoreErrorForPrefixSecurity ? null : new Error(errorMsg));
        }
      }

      var store = this.store;

      if (!store.updateCookie) {
        store.updateCookie = function (oldCookie, newCookie, cb) {
          this.putCookie(newCookie, cb);
        };
      }

      function withCookie(err, oldCookie) {
        if (err) {
          return cb(err);
        }

        var next = function next(err) {
          if (err) {
            return cb(err);
          } else {
            cb(null, cookie);
          }
        };

        if (oldCookie) {
          // S5.3 step 11 - "If the cookie store contains a cookie with the same name,
          // domain, and path as the newly created cookie:"
          if (options.http === false && oldCookie.httpOnly) {
            // step 11.2
            err = new Error("old Cookie is HttpOnly and this isn't an HTTP API");
            return cb(options.ignoreError ? null : err);
          }

          cookie.creation = oldCookie.creation; // step 11.3

          cookie.creationIndex = oldCookie.creationIndex; // preserve tie-breaker

          cookie.lastAccessed = now; // Step 11.4 (delete cookie) is implied by just setting the new one:

          store.updateCookie(oldCookie, cookie, next); // step 12
        } else {
          cookie.creation = cookie.lastAccessed = now;
          store.putCookie(cookie, next); // step 12
        }
      }

      store.findCookie(cookie.domain, cookie.path, cookie.key, withCookie);
    } // RFC6365 S5.4

  }, {
    key: "getCookies",
    value: function getCookies(url, options, cb) {
      var context = getCookieContext(url);

      if (typeof options === "function") {
        cb = options;
        options = {};
      }

      var host = canonicalDomain(context.hostname);
      var path = context.pathname || "/";
      var secure = options.secure;

      if (secure == null && context.protocol && (context.protocol == "https:" || context.protocol == "wss:")) {
        secure = true;
      }

      var sameSiteLevel = 0;

      if (options.sameSiteContext) {
        var sameSiteContext = checkSameSiteContext(options.sameSiteContext);
        sameSiteLevel = Cookie.sameSiteLevel[sameSiteContext];

        if (!sameSiteLevel) {
          return cb(new Error(SAME_SITE_CONTEXT_VAL_ERR));
        }
      }

      var http = options.http;

      if (http == null) {
        http = true;
      }

      var now = options.now || Date.now();
      var expireCheck = options.expire !== false;
      var allPaths = !!options.allPaths;
      var store = this.store;

      function matchingCookie(c) {
        // "Either:
        //   The cookie's host-only-flag is true and the canonicalized
        //   request-host is identical to the cookie's domain.
        // Or:
        //   The cookie's host-only-flag is false and the canonicalized
        //   request-host domain-matches the cookie's domain."
        if (c.hostOnly) {
          if (c.domain != host) {
            return false;
          }
        } else {
          if (!domainMatch(host, c.domain, false)) {
            return false;
          }
        } // "The request-uri's path path-matches the cookie's path."


        if (!allPaths && !pathMatch(path, c.path)) {
          return false;
        } // "If the cookie's secure-only-flag is true, then the request-uri's
        // scheme must denote a "secure" protocol"


        if (c.secure && !secure) {
          return false;
        } // "If the cookie's http-only-flag is true, then exclude the cookie if the
        // cookie-string is being generated for a "non-HTTP" API"


        if (c.httpOnly && !http) {
          return false;
        } // RFC6265bis-02 S5.3.7


        if (sameSiteLevel) {
          var cookieLevel = Cookie.sameSiteLevel[c.sameSite || "none"];

          if (cookieLevel > sameSiteLevel) {
            // only allow cookies at or below the request level
            return false;
          }
        } // deferred from S5.3
        // non-RFC: allow retention of expired cookies by choice


        if (expireCheck && c.expiryTime() <= now) {
          store.removeCookie(c.domain, c.path, c.key, function () {}); // result ignored

          return false;
        }

        return true;
      }

      store.findCookies(host, allPaths ? null : path, this.allowSpecialUseDomain, function (err, cookies) {
        if (err) {
          return cb(err);
        }

        cookies = cookies.filter(matchingCookie); // sorting of S5.4 part 2

        if (options.sort !== false) {
          cookies = cookies.sort(cookieCompare);
        } // S5.4 part 3


        var now = new Date();

        var _iterator2 = _createForOfIteratorHelper(cookies),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var cookie = _step2.value;
            cookie.lastAccessed = now;
          } // TODO persist lastAccessed

        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        cb(null, cookies);
      });
    }
  }, {
    key: "getCookieString",
    value: function getCookieString() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var cb = args.pop();

      var next = function next(err, cookies) {
        if (err) {
          cb(err);
        } else {
          cb(null, cookies.sort(cookieCompare).map(function (c) {
            return c.cookieString();
          }).join("; "));
        }
      };

      args.push(next);
      this.getCookies.apply(this, args);
    }
  }, {
    key: "getSetCookieStrings",
    value: function getSetCookieStrings() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var cb = args.pop();

      var next = function next(err, cookies) {
        if (err) {
          cb(err);
        } else {
          cb(null, cookies.map(function (c) {
            return c.toString();
          }));
        }
      };

      args.push(next);
      this.getCookies.apply(this, args);
    }
  }, {
    key: "serialize",
    value: function serialize(cb) {
      var type = this.store.constructor.name;

      if (type === "Object") {
        type = null;
      } // update README.md "Serialization Format" if you change this, please!


      var serialized = {
        // The version of tough-cookie that serialized this jar. Generally a good
        // practice since future versions can make data import decisions based on
        // known past behavior. When/if this matters, use `semver`.
        version: "tough-cookie@".concat(VERSION),
        // add the store type, to make humans happy:
        storeType: type,
        // CookieJar configuration:
        rejectPublicSuffixes: !!this.rejectPublicSuffixes,
        // this gets filled from getAllCookies:
        cookies: []
      };

      if (!(this.store.getAllCookies && typeof this.store.getAllCookies === "function")) {
        return cb(new Error("store does not support getAllCookies and cannot be serialized"));
      }

      this.store.getAllCookies(function (err, cookies) {
        if (err) {
          return cb(err);
        }

        serialized.cookies = cookies.map(function (cookie) {
          // convert to serialized 'raw' cookies
          cookie = cookie instanceof Cookie ? cookie.toJSON() : cookie; // Remove the index so new ones get assigned during deserialization

          delete cookie.creationIndex;
          return cookie;
        });
        return cb(null, serialized);
      });
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.serializeSync();
    } // use the class method CookieJar.deserialize instead of calling this directly

  }, {
    key: "_importCookies",
    value: function _importCookies(serialized, cb) {
      var _this = this;

      var cookies = serialized.cookies;

      if (!cookies || !Array.isArray(cookies)) {
        return cb(new Error("serialized jar has no cookies array"));
      }

      cookies = cookies.slice(); // do not modify the original

      var putNext = function putNext(err) {
        if (err) {
          return cb(err);
        }

        if (!cookies.length) {
          return cb(err, _this);
        }

        var cookie;

        try {
          cookie = fromJSON(cookies.shift());
        } catch (e) {
          return cb(e);
        }

        if (cookie === null) {
          return putNext(null); // skip this cookie
        }

        _this.store.putCookie(cookie, putNext);
      };

      putNext();
    }
  }, {
    key: "clone",
    value: function clone(newStore, cb) {
      if (arguments.length === 1) {
        cb = newStore;
        newStore = null;
      }

      this.serialize(function (err, serialized) {
        if (err) {
          return cb(err);
        }

        CookieJar.deserialize(serialized, newStore, cb);
      });
    }
  }, {
    key: "cloneSync",
    value: function cloneSync(newStore) {
      if (arguments.length === 0) {
        return this._cloneSync();
      }

      if (!newStore.synchronous) {
        throw new Error("CookieJar clone destination store is not synchronous; use async API instead.");
      }

      return this._cloneSync(newStore);
    }
  }, {
    key: "removeAllCookies",
    value: function removeAllCookies(cb) {
      var store = this.store; // Check that the store implements its own removeAllCookies(). The default
      // implementation in Store will immediately call the callback with a "not
      // implemented" Error.

      if (typeof store.removeAllCookies === "function" && store.removeAllCookies !== Store.prototype.removeAllCookies) {
        return store.removeAllCookies(cb);
      }

      store.getAllCookies(function (err, cookies) {
        if (err) {
          return cb(err);
        }

        if (cookies.length === 0) {
          return cb(null);
        }

        var completedCount = 0;
        var removeErrors = [];

        function removeCookieCb(removeErr) {
          if (removeErr) {
            removeErrors.push(removeErr);
          }

          completedCount++;

          if (completedCount === cookies.length) {
            return cb(removeErrors.length ? removeErrors[0] : null);
          }
        }

        cookies.forEach(function (cookie) {
          store.removeCookie(cookie.domain, cookie.path, cookie.key, removeCookieCb);
        });
      });
    }
  }], [{
    key: "deserialize",
    value: function deserialize(strOrObj, store, cb) {
      if (arguments.length !== 3) {
        // store is optional
        cb = store;
        store = null;
      }

      var serialized;

      if (typeof strOrObj === "string") {
        serialized = jsonParse(strOrObj);

        if (serialized instanceof Error) {
          return cb(serialized);
        }
      } else {
        serialized = strOrObj;
      }

      var jar = new CookieJar(store, serialized.rejectPublicSuffixes);

      jar._importCookies(serialized, function (err) {
        if (err) {
          return cb(err);
        }

        cb(null, jar);
      });
    }
  }, {
    key: "deserializeSync",
    value: function deserializeSync(strOrObj, store) {
      var serialized = typeof strOrObj === "string" ? JSON.parse(strOrObj) : strOrObj;
      var jar = new CookieJar(store, serialized.rejectPublicSuffixes); // catch this mistake early:

      if (!jar.store.synchronous) {
        throw new Error("CookieJar store is not synchronous; use async API instead.");
      }

      jar._importCookiesSync(serialized);

      return jar;
    }
  }]);

  return CookieJar;
}();

CookieJar.fromJSON = CookieJar.deserializeSync;
["_importCookies", "clone", "getCookies", "getCookieString", "getSetCookieStrings", "removeAllCookies", "serialize", "setCookie"].forEach(function (name) {
  CookieJar.prototype[name] = fromCallback(CookieJar.prototype[name]);
});
CookieJar.deserialize = fromCallback(CookieJar.deserialize); // Use a closure to provide a true imperative API for synchronous stores.

function syncWrap(method) {
  return function () {
    if (!this.store.synchronous) {
      throw new Error("CookieJar store is not synchronous; use async API instead.");
    }

    var syncErr, syncResult;

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    this[method].apply(this, args.concat([function (err, result) {
      syncErr = err;
      syncResult = result;
    }]));

    if (syncErr) {
      throw syncErr;
    }

    return syncResult;
  };
}

exports.version = VERSION;
exports.CookieJar = CookieJar;
exports.Cookie = Cookie;
exports.Store = Store;
exports.MemoryCookieStore = MemoryCookieStore;
exports.parseDate = parseDate;
exports.formatDate = formatDate;
exports.parse = parse;
exports.fromJSON = fromJSON;
exports.domainMatch = domainMatch;
exports.defaultPath = defaultPath;
exports.pathMatch = pathMatch;
exports.getPublicSuffix = pubsuffix.getPublicSuffix;
exports.cookieCompare = cookieCompare;
exports.permuteDomain = require(53).permuteDomain;
exports.permutePath = permutePath;
exports.canonicalDomain = canonicalDomain;
exports.PrefixSecurityEnum = PrefixSecurityEnum;

},{"5":5,"51":51,"52":52,"53":53,"54":54,"55":55,"56":56,"57":57,"59":59,"63":63}],51:[function(require,module,exports){
/*!
 * Copyright (c) 2015, Salesforce.com, Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. Neither the name of Salesforce.com nor the names of its contributors may
 * be used to endorse or promote products derived from this software without
 * specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var _require = require(57),
    fromCallback = _require.fromCallback;

var Store = require(55).Store;

var permuteDomain = require(53).permuteDomain;

var pathMatch = require(52).pathMatch;

var util = require(63);

var MemoryCookieStore = /*#__PURE__*/function (_Store) {
  _inherits(MemoryCookieStore, _Store);

  var _super = _createSuper(MemoryCookieStore);

  function MemoryCookieStore() {
    var _this;

    _classCallCheck(this, MemoryCookieStore);

    _this = _super.call(this);
    _this.synchronous = true;
    _this.idx = {};

    if (util.inspect.custom) {
      _this[util.inspect.custom] = _this.inspect;
    }

    return _this;
  }

  _createClass(MemoryCookieStore, [{
    key: "inspect",
    value: function inspect() {
      return "{ idx: ".concat(util.inspect(this.idx, false, 2), " }");
    }
  }, {
    key: "findCookie",
    value: function findCookie(domain, path, key, cb) {
      if (!this.idx[domain]) {
        return cb(null, undefined);
      }

      if (!this.idx[domain][path]) {
        return cb(null, undefined);
      }

      return cb(null, this.idx[domain][path][key] || null);
    }
  }, {
    key: "findCookies",
    value: function findCookies(domain, path, allowSpecialUseDomain, cb) {
      var results = [];

      if (typeof allowSpecialUseDomain === "function") {
        cb = allowSpecialUseDomain;
        allowSpecialUseDomain = false;
      }

      if (!domain) {
        return cb(null, []);
      }

      var pathMatcher;

      if (!path) {
        // null means "all paths"
        pathMatcher = function matchAll(domainIndex) {
          for (var curPath in domainIndex) {
            var pathIndex = domainIndex[curPath];

            for (var key in pathIndex) {
              results.push(pathIndex[key]);
            }
          }
        };
      } else {
        pathMatcher = function matchRFC(domainIndex) {
          //NOTE: we should use path-match algorithm from S5.1.4 here
          //(see : https://github.com/ChromiumWebApps/chromium/blob/b3d3b4da8bb94c1b2e061600df106d590fda3620/net/cookies/canonical_cookie.cc#L299)
          Object.keys(domainIndex).forEach(function (cookiePath) {
            if (pathMatch(path, cookiePath)) {
              var pathIndex = domainIndex[cookiePath];

              for (var key in pathIndex) {
                results.push(pathIndex[key]);
              }
            }
          });
        };
      }

      var domains = permuteDomain(domain, allowSpecialUseDomain) || [domain];
      var idx = this.idx;
      domains.forEach(function (curDomain) {
        var domainIndex = idx[curDomain];

        if (!domainIndex) {
          return;
        }

        pathMatcher(domainIndex);
      });
      cb(null, results);
    }
  }, {
    key: "putCookie",
    value: function putCookie(cookie, cb) {
      if (!this.idx[cookie.domain]) {
        this.idx[cookie.domain] = {};
      }

      if (!this.idx[cookie.domain][cookie.path]) {
        this.idx[cookie.domain][cookie.path] = {};
      }

      this.idx[cookie.domain][cookie.path][cookie.key] = cookie;
      cb(null);
    }
  }, {
    key: "updateCookie",
    value: function updateCookie(oldCookie, newCookie, cb) {
      // updateCookie() may avoid updating cookies that are identical.  For example,
      // lastAccessed may not be important to some stores and an equality
      // comparison could exclude that field.
      this.putCookie(newCookie, cb);
    }
  }, {
    key: "removeCookie",
    value: function removeCookie(domain, path, key, cb) {
      if (this.idx[domain] && this.idx[domain][path] && this.idx[domain][path][key]) {
        delete this.idx[domain][path][key];
      }

      cb(null);
    }
  }, {
    key: "removeCookies",
    value: function removeCookies(domain, path, cb) {
      if (this.idx[domain]) {
        if (path) {
          delete this.idx[domain][path];
        } else {
          delete this.idx[domain];
        }
      }

      return cb(null);
    }
  }, {
    key: "removeAllCookies",
    value: function removeAllCookies(cb) {
      this.idx = {};
      return cb(null);
    }
  }, {
    key: "getAllCookies",
    value: function getAllCookies(cb) {
      var cookies = [];
      var idx = this.idx;
      var domains = Object.keys(idx);
      domains.forEach(function (domain) {
        var paths = Object.keys(idx[domain]);
        paths.forEach(function (path) {
          var keys = Object.keys(idx[domain][path]);
          keys.forEach(function (key) {
            if (key !== null) {
              cookies.push(idx[domain][path][key]);
            }
          });
        });
      }); // Sort by creationIndex so deserializing retains the creation order.
      // When implementing your own store, this SHOULD retain the order too

      cookies.sort(function (a, b) {
        return (a.creationIndex || 0) - (b.creationIndex || 0);
      });
      cb(null, cookies);
    }
  }]);

  return MemoryCookieStore;
}(Store);

["findCookie", "findCookies", "putCookie", "updateCookie", "removeCookie", "removeCookies", "removeAllCookies", "getAllCookies"].forEach(function (name) {
  MemoryCookieStore[name] = fromCallback(MemoryCookieStore.prototype[name]);
});
exports.MemoryCookieStore = MemoryCookieStore;

},{"52":52,"53":53,"55":55,"57":57,"63":63}],52:[function(require,module,exports){
/*!
 * Copyright (c) 2015, Salesforce.com, Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. Neither the name of Salesforce.com nor the names of its contributors may
 * be used to endorse or promote products derived from this software without
 * specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */
"use strict";
/*
 * "A request-path path-matches a given cookie-path if at least one of the
 * following conditions holds:"
 */

function pathMatch(reqPath, cookiePath) {
  // "o  The cookie-path and the request-path are identical."
  if (cookiePath === reqPath) {
    return true;
  }

  var idx = reqPath.indexOf(cookiePath);

  if (idx === 0) {
    // "o  The cookie-path is a prefix of the request-path, and the last
    // character of the cookie-path is %x2F ("/")."
    if (cookiePath.substr(-1) === "/") {
      return true;
    } // " o  The cookie-path is a prefix of the request-path, and the first
    // character of the request-path that is not included in the cookie- path
    // is a %x2F ("/") character."


    if (reqPath.substr(cookiePath.length, 1) === "/") {
      return true;
    }
  }

  return false;
}

exports.pathMatch = pathMatch;

},{}],53:[function(require,module,exports){
/*!
 * Copyright (c) 2015, Salesforce.com, Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. Neither the name of Salesforce.com nor the names of its contributors may
 * be used to endorse or promote products derived from this software without
 * specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */
"use strict";

var pubsuffix = require(54); // Gives the permutation of all possible domainMatch()es of a given domain. The
// array is in shortest-to-longest order.  Handy for indexing.


var SPECIAL_USE_DOMAINS = ["local"]; // RFC 6761

function permuteDomain(domain, allowSpecialUseDomain) {
  var pubSuf = null;

  if (allowSpecialUseDomain) {
    var domainParts = domain.split(".");

    if (SPECIAL_USE_DOMAINS.includes(domainParts[domainParts.length - 1])) {
      pubSuf = "".concat(domainParts[domainParts.length - 2], ".").concat(domainParts[domainParts.length - 1]);
    } else {
      pubSuf = pubsuffix.getPublicSuffix(domain);
    }
  } else {
    pubSuf = pubsuffix.getPublicSuffix(domain);
  }

  if (!pubSuf) {
    return null;
  }

  if (pubSuf == domain) {
    return [domain];
  }

  var prefix = domain.slice(0, -(pubSuf.length + 1)); // ".example.com"

  var parts = prefix.split(".").reverse();
  var cur = pubSuf;
  var permutations = [cur];

  while (parts.length) {
    cur = "".concat(parts.shift(), ".").concat(cur);
    permutations.push(cur);
  }

  return permutations;
}

exports.permuteDomain = permuteDomain;

},{"54":54}],54:[function(require,module,exports){
/*!
 * Copyright (c) 2018, Salesforce.com, Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. Neither the name of Salesforce.com nor the names of its contributors may
 * be used to endorse or promote products derived from this software without
 * specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */
"use strict";

var psl = require(43);

function getPublicSuffix(domain) {
  return psl.get(domain);
}

exports.getPublicSuffix = getPublicSuffix;

},{"43":43}],55:[function(require,module,exports){
/*!
 * Copyright (c) 2015, Salesforce.com, Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. Neither the name of Salesforce.com nor the names of its contributors may
 * be used to endorse or promote products derived from this software without
 * specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */
"use strict";
/*jshint unused:false */

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Store = /*#__PURE__*/function () {
  function Store() {
    _classCallCheck(this, Store);

    this.synchronous = false;
  }

  _createClass(Store, [{
    key: "findCookie",
    value: function findCookie(domain, path, key, cb) {
      throw new Error("findCookie is not implemented");
    }
  }, {
    key: "findCookies",
    value: function findCookies(domain, path, allowSpecialUseDomain, cb) {
      throw new Error("findCookies is not implemented");
    }
  }, {
    key: "putCookie",
    value: function putCookie(cookie, cb) {
      throw new Error("putCookie is not implemented");
    }
  }, {
    key: "updateCookie",
    value: function updateCookie(oldCookie, newCookie, cb) {
      // recommended default implementation:
      // return this.putCookie(newCookie, cb);
      throw new Error("updateCookie is not implemented");
    }
  }, {
    key: "removeCookie",
    value: function removeCookie(domain, path, key, cb) {
      throw new Error("removeCookie is not implemented");
    }
  }, {
    key: "removeCookies",
    value: function removeCookies(domain, path, cb) {
      throw new Error("removeCookies is not implemented");
    }
  }, {
    key: "removeAllCookies",
    value: function removeAllCookies(cb) {
      throw new Error("removeAllCookies is not implemented");
    }
  }, {
    key: "getAllCookies",
    value: function getAllCookies(cb) {
      throw new Error("getAllCookies is not implemented (therefore jar cannot be serialized)");
    }
  }]);

  return Store;
}();

exports.Store = Store;

},{}],56:[function(require,module,exports){
"use strict";

// generated by genversion
module.exports = '4.0.0';

},{}],57:[function(require,module,exports){
'use strict';

exports.fromCallback = function (fn) {
  return Object.defineProperty(function () {
    var _arguments = arguments,
        _this = this;

    if (typeof arguments[arguments.length - 1] === 'function') fn.apply(this, arguments);else {
      return new Promise(function (resolve, reject) {
        _arguments[_arguments.length] = function (err, res) {
          if (err) return reject(err);
          resolve(res);
        };

        _arguments.length++;
        fn.apply(_this, _arguments);
      });
    }
  }, 'name', {
    value: fn.name
  });
};

exports.fromPromise = function (fn) {
  return Object.defineProperty(function () {
    var cb = arguments[arguments.length - 1];
    if (typeof cb !== 'function') return fn.apply(this, arguments);else fn.apply(this, arguments).then(function (r) {
      return cb(null, r);
    }, cb);
  }, 'name', {
    value: fn.name
  });
};

},{}],58:[function(require,module,exports){
(function (global){(function (){
'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var required = require(48),
    qs = require(47),
    slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
    protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
    windowsDriveLetter = /^[a-zA-Z]:/,
    whitespace = "[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]",
    left = new RegExp('^' + whitespace + '+');
/**
 * Trim a given string.
 *
 * @param {String} str String to trim.
 * @public
 */


function trimLeft(str) {
  return (str ? str : '').toString().replace(left, '');
}
/**
 * These are the parse rules for the URL parser, it informs the parser
 * about:
 *
 * 0. The char it Needs to parse, if it's a string it should be done using
 *    indexOf, RegExp using exec and NaN means set as current value.
 * 1. The property we should set when parsing this value.
 * 2. Indication if it's backwards or forward parsing, when set as number it's
 *    the value of extra chars that should be split off.
 * 3. Inherit from location if non existing in the parser.
 * 4. `toLowerCase` the resulting value.
 */


var rules = [['#', 'hash'], // Extract from the back.
['?', 'query'], // Extract from the back.
function sanitize(address, url) {
  // Sanitize what is left of the address
  return isSpecial(url.protocol) ? address.replace(/\\/g, '/') : address;
}, ['/', 'pathname'], // Extract from the back.
['@', 'auth', 1], // Extract from the front.
[NaN, 'host', undefined, 1, 1], // Set left over value.
[/:(\d+)$/, 'port', undefined, 1], // RegExp the back.
[NaN, 'hostname', undefined, 1, 1] // Set left over.
];
/**
 * These properties should not be copied or inherited from. This is only needed
 * for all non blob URL's as a blob URL does not include a hash, only the
 * origin.
 *
 * @type {Object}
 * @private
 */

var ignore = {
  hash: 1,
  query: 1
};
/**
 * The location object differs when your code is loaded through a normal page,
 * Worker or through a worker using a blob. And with the blobble begins the
 * trouble as the location object will contain the URL of the blob, not the
 * location of the page where our code is loaded in. The actual origin is
 * encoded in the `pathname` so we can thankfully generate a good "default"
 * location from it so we can generate proper relative URL's again.
 *
 * @param {Object|String} loc Optional default location object.
 * @returns {Object} lolcation object.
 * @public
 */

function lolcation(loc) {
  var globalVar;
  if (typeof window !== 'undefined') globalVar = window;else if (typeof global !== 'undefined') globalVar = global;else if (typeof self !== 'undefined') globalVar = self;else globalVar = {};
  var location = globalVar.location || {};
  loc = loc || location;

  var finaldestination = {},
      type = _typeof(loc),
      key;

  if ('blob:' === loc.protocol) {
    finaldestination = new Url(unescape(loc.pathname), {});
  } else if ('string' === type) {
    finaldestination = new Url(loc, {});

    for (key in ignore) {
      delete finaldestination[key];
    }
  } else if ('object' === type) {
    for (key in loc) {
      if (key in ignore) continue;
      finaldestination[key] = loc[key];
    }

    if (finaldestination.slashes === undefined) {
      finaldestination.slashes = slashes.test(loc.href);
    }
  }

  return finaldestination;
}
/**
 * Check whether a protocol scheme is special.
 *
 * @param {String} The protocol scheme of the URL
 * @return {Boolean} `true` if the protocol scheme is special, else `false`
 * @private
 */


function isSpecial(scheme) {
  return scheme === 'file:' || scheme === 'ftp:' || scheme === 'http:' || scheme === 'https:' || scheme === 'ws:' || scheme === 'wss:';
}
/**
 * @typedef ProtocolExtract
 * @type Object
 * @property {String} protocol Protocol matched in the URL, in lowercase.
 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
 * @property {String} rest Rest of the URL that is not part of the protocol.
 */

/**
 * Extract protocol information from a URL with/without double slash ("//").
 *
 * @param {String} address URL we want to extract from.
 * @param {Object} location
 * @return {ProtocolExtract} Extracted information.
 * @private
 */


function extractProtocol(address, location) {
  address = trimLeft(address);
  location = location || {};
  var match = protocolre.exec(address);
  var protocol = match[1] ? match[1].toLowerCase() : '';
  var forwardSlashes = !!match[2];
  var otherSlashes = !!match[3];
  var slashesCount = 0;
  var rest;

  if (forwardSlashes) {
    if (otherSlashes) {
      rest = match[2] + match[3] + match[4];
      slashesCount = match[2].length + match[3].length;
    } else {
      rest = match[2] + match[4];
      slashesCount = match[2].length;
    }
  } else {
    if (otherSlashes) {
      rest = match[3] + match[4];
      slashesCount = match[3].length;
    } else {
      rest = match[4];
    }
  }

  if (protocol === 'file:') {
    if (slashesCount >= 2) {
      rest = rest.slice(2);
    }
  } else if (isSpecial(protocol)) {
    rest = match[4];
  } else if (protocol) {
    if (forwardSlashes) {
      rest = rest.slice(2);
    }
  } else if (slashesCount >= 2 && isSpecial(location.protocol)) {
    rest = match[4];
  }

  return {
    protocol: protocol,
    slashes: forwardSlashes || isSpecial(protocol),
    slashesCount: slashesCount,
    rest: rest
  };
}
/**
 * Resolve a relative URL pathname against a base URL pathname.
 *
 * @param {String} relative Pathname of the relative URL.
 * @param {String} base Pathname of the base URL.
 * @return {String} Resolved pathname.
 * @private
 */


function resolve(relative, base) {
  if (relative === '') return base;
  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/')),
      i = path.length,
      last = path[i - 1],
      unshift = false,
      up = 0;

  while (i--) {
    if (path[i] === '.') {
      path.splice(i, 1);
    } else if (path[i] === '..') {
      path.splice(i, 1);
      up++;
    } else if (up) {
      if (i === 0) unshift = true;
      path.splice(i, 1);
      up--;
    }
  }

  if (unshift) path.unshift('');
  if (last === '.' || last === '..') path.push('');
  return path.join('/');
}
/**
 * The actual URL instance. Instead of returning an object we've opted-in to
 * create an actual constructor as it's much more memory efficient and
 * faster and it pleases my OCD.
 *
 * It is worth noting that we should not use `URL` as class name to prevent
 * clashes with the global URL instance that got introduced in browsers.
 *
 * @constructor
 * @param {String} address URL we want to parse.
 * @param {Object|String} [location] Location defaults for relative paths.
 * @param {Boolean|Function} [parser] Parser for the query string.
 * @private
 */


function Url(address, location, parser) {
  address = trimLeft(address);

  if (!(this instanceof Url)) {
    return new Url(address, location, parser);
  }

  var relative,
      extracted,
      parse,
      instruction,
      index,
      key,
      instructions = rules.slice(),
      type = _typeof(location),
      url = this,
      i = 0; //
  // The following if statements allows this module two have compatibility with
  // 2 different API:
  //
  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
  //    where the boolean indicates that the query string should also be parsed.
  //
  // 2. The `URL` interface of the browser which accepts a URL, object as
  //    arguments. The supplied object will be used as default values / fall-back
  //    for relative paths.
  //


  if ('object' !== type && 'string' !== type) {
    parser = location;
    location = null;
  }

  if (parser && 'function' !== typeof parser) parser = qs.parse;
  location = lolcation(location); //
  // Extract protocol information before running the instructions.
  //

  extracted = extractProtocol(address || '', location);
  relative = !extracted.protocol && !extracted.slashes;
  url.slashes = extracted.slashes || relative && location.slashes;
  url.protocol = extracted.protocol || location.protocol || '';
  address = extracted.rest; //
  // When the authority component is absent the URL starts with a path
  // component.
  //

  if (extracted.protocol === 'file:' && (extracted.slashesCount !== 2 || windowsDriveLetter.test(address)) || !extracted.slashes && (extracted.protocol || extracted.slashesCount < 2 || !isSpecial(url.protocol))) {
    instructions[3] = [/(.*)/, 'pathname'];
  }

  for (; i < instructions.length; i++) {
    instruction = instructions[i];

    if (typeof instruction === 'function') {
      address = instruction(address, url);
      continue;
    }

    parse = instruction[0];
    key = instruction[1];

    if (parse !== parse) {
      url[key] = address;
    } else if ('string' === typeof parse) {
      if (~(index = address.indexOf(parse))) {
        if ('number' === typeof instruction[2]) {
          url[key] = address.slice(0, index);
          address = address.slice(index + instruction[2]);
        } else {
          url[key] = address.slice(index);
          address = address.slice(0, index);
        }
      }
    } else if (index = parse.exec(address)) {
      url[key] = index[1];
      address = address.slice(0, index.index);
    }

    url[key] = url[key] || (relative && instruction[3] ? location[key] || '' : ''); //
    // Hostname, host and protocol should be lowercased so they can be used to
    // create a proper `origin`.
    //

    if (instruction[4]) url[key] = url[key].toLowerCase();
  } //
  // Also parse the supplied query string in to an object. If we're supplied
  // with a custom parser as function use that instead of the default build-in
  // parser.
  //


  if (parser) url.query = parser(url.query); //
  // If the URL is relative, resolve the pathname against the base URL.
  //

  if (relative && location.slashes && url.pathname.charAt(0) !== '/' && (url.pathname !== '' || location.pathname !== '')) {
    url.pathname = resolve(url.pathname, location.pathname);
  } //
  // Default to a / for pathname if none exists. This normalizes the URL
  // to always have a /
  //


  if (url.pathname.charAt(0) !== '/' && isSpecial(url.protocol)) {
    url.pathname = '/' + url.pathname;
  } //
  // We should not add port numbers if they are already the default port number
  // for a given protocol. As the host also contains the port number we're going
  // override it with the hostname which contains no port number.
  //


  if (!required(url.port, url.protocol)) {
    url.host = url.hostname;
    url.port = '';
  } //
  // Parse down the `auth` for the username and password.
  //


  url.username = url.password = '';

  if (url.auth) {
    instruction = url.auth.split(':');
    url.username = instruction[0] || '';
    url.password = instruction[1] || '';
  }

  url.origin = url.protocol !== 'file:' && isSpecial(url.protocol) && url.host ? url.protocol + '//' + url.host : 'null'; //
  // The href is just the compiled result.
  //

  url.href = url.toString();
}
/**
 * This is convenience method for changing properties in the URL instance to
 * insure that they all propagate correctly.
 *
 * @param {String} part          Property we need to adjust.
 * @param {Mixed} value          The newly assigned value.
 * @param {Boolean|Function} fn  When setting the query, it will be the function
 *                               used to parse the query.
 *                               When setting the protocol, double slash will be
 *                               removed from the final url if it is true.
 * @returns {URL} URL instance for chaining.
 * @public
 */


function set(part, value, fn) {
  var url = this;

  switch (part) {
    case 'query':
      if ('string' === typeof value && value.length) {
        value = (fn || qs.parse)(value);
      }

      url[part] = value;
      break;

    case 'port':
      url[part] = value;

      if (!required(value, url.protocol)) {
        url.host = url.hostname;
        url[part] = '';
      } else if (value) {
        url.host = url.hostname + ':' + value;
      }

      break;

    case 'hostname':
      url[part] = value;
      if (url.port) value += ':' + url.port;
      url.host = value;
      break;

    case 'host':
      url[part] = value;

      if (/:\d+$/.test(value)) {
        value = value.split(':');
        url.port = value.pop();
        url.hostname = value.join(':');
      } else {
        url.hostname = value;
        url.port = '';
      }

      break;

    case 'protocol':
      url.protocol = value.toLowerCase();
      url.slashes = !fn;
      break;

    case 'pathname':
    case 'hash':
      if (value) {
        var _char = part === 'pathname' ? '/' : '#';

        url[part] = value.charAt(0) !== _char ? _char + value : value;
      } else {
        url[part] = value;
      }

      break;

    default:
      url[part] = value;
  }

  for (var i = 0; i < rules.length; i++) {
    var ins = rules[i];
    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
  }

  url.origin = url.protocol !== 'file:' && isSpecial(url.protocol) && url.host ? url.protocol + '//' + url.host : 'null';
  url.href = url.toString();
  return url;
}
/**
 * Transform the properties back in to a valid and full URL string.
 *
 * @param {Function} stringify Optional query stringify function.
 * @returns {String} Compiled version of the URL.
 * @public
 */


function toString(stringify) {
  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;
  var query,
      url = this,
      protocol = url.protocol;
  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';
  var result = protocol + (url.slashes || isSpecial(url.protocol) ? '//' : '');

  if (url.username) {
    result += url.username;
    if (url.password) result += ':' + url.password;
    result += '@';
  }

  result += url.host + url.pathname;
  query = 'object' === _typeof(url.query) ? stringify(url.query) : url.query;
  if (query) result += '?' !== query.charAt(0) ? '?' + query : query;
  if (url.hash) result += url.hash;
  return result;
}

Url.prototype = {
  set: set,
  toString: toString
}; //
// Expose the URL parser and some additional properties that might be useful for
// others or testing.
//

Url.extractProtocol = extractProtocol;
Url.location = lolcation;
Url.trimLeft = trimLeft;
Url.qs = qs;
module.exports = Url;

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"47":47,"48":48}],59:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var punycode = require(5);

var util = require(60);

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;
exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
} // Reference: RFC 3986, RFC 1808, RFC 2396
// define these here so at least they only have to be
// compiled once on the first module load.


var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,
    // Special case for a simple path URL
simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
    // RFC 2396: characters reserved for delimiting URLs.
// We actually just auto-escape these.
delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],
    // RFC 2396: characters not allowed for various reasons.
unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),
    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
autoEscape = ['\''].concat(unwise),
    // Characters that are never ever allowed in a hostname.
// Note that any invalid chars are also handled, but these
// are the ones that are *expected* to be seen, so we fast-path
// them.
nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
unsafeProtocol = {
  'javascript': true,
  'javascript:': true
},
    // protocols that never have a hostname.
hostlessProtocol = {
  'javascript': true,
  'javascript:': true
},
    // protocols that always contain a // bit.
slashedProtocol = {
  'http': true,
  'https': true,
  'ftp': true,
  'gopher': true,
  'file': true,
  'http:': true,
  'https:': true,
  'ftp:': true,
  'gopher:': true,
  'file:': true
},
    querystring = require(46);

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && util.isObject(url) && url instanceof Url) return url;
  var u = new Url();
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function (url, parseQueryString, slashesDenoteHost) {
  if (!util.isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + _typeof(url));
  } // Copy chrome, IE, opera backslash-handling behavior.
  // Back slashes before the query string get converted to forward slashes
  // See: https://code.google.com/p/chromium/issues/detail?id=25916


  var queryIndex = url.indexOf('?'),
      splitter = queryIndex !== -1 && queryIndex < url.indexOf('#') ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);
  var rest = url; // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"

  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);

    if (simplePath) {
      this.path = rest;
      this.href = rest;
      this.pathname = simplePath[1];

      if (simplePath[2]) {
        this.search = simplePath[2];

        if (parseQueryString) {
          this.query = querystring.parse(this.search.substr(1));
        } else {
          this.query = this.search.substr(1);
        }
      } else if (parseQueryString) {
        this.search = '';
        this.query = {};
      }

      return this;
    }
  }

  var proto = protocolPattern.exec(rest);

  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  } // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.


  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';

    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] && (slashes || proto && !slashedProtocol[proto])) {
    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c
    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.
    // find the first instance of any hostEndingChars
    var hostEnd = -1;

    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) hostEnd = hec;
    } // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.


    var auth, atSign;

    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    } // Now we have a portion which is definitely the auth.
    // Pull that off.


    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    } // the host is the remaining to the left of the first non-host char


    hostEnd = -1;

    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) hostEnd = hec;
    } // if we still have not hit it, then the entire thing is a host.


    if (hostEnd === -1) hostEnd = rest.length;
    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd); // pull out port.

    this.parseHost(); // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.

    this.hostname = this.hostname || ''; // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.

    var ipv6Hostname = this.hostname[0] === '[' && this.hostname[this.hostname.length - 1] === ']'; // validate a little.

    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);

      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;

        if (!part.match(hostnamePartPattern)) {
          var newpart = '';

          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          } // we test again with ASCII char only


          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);

            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }

            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }

            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a punycoded representation of "domain".
      // It only converts parts of the domain name that
      // have non-ASCII characters, i.e. it doesn't matter if
      // you call it with a domain that already is ASCII-only.
      this.hostname = punycode.toASCII(this.hostname);
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host; // strip [ and ] from the hostname
    // the host field still retains them, though

    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);

      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  } // now rest is set to the post-host stuff.
  // chop off any delim chars.


  if (!unsafeProtocol[lowerProto]) {
    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1) continue;
      var esc = encodeURIComponent(ae);

      if (esc === ae) {
        esc = escape(ae);
      }

      rest = rest.split(ae).join(esc);
    }
  } // chop off from the tail first.


  var hash = rest.indexOf('#');

  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }

  var qm = rest.indexOf('?');

  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);

    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }

    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }

  if (rest) this.pathname = rest;

  if (slashedProtocol[lowerProto] && this.hostname && !this.pathname) {
    this.pathname = '/';
  } //to support http.request


  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  } // finally, reconstruct the href based on what has been validated.


  this.href = this.format();
  return this;
}; // format a parsed object into a url string


function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (util.isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function () {
  var auth = this.auth || '';

  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ? this.hostname : '[' + this.hostname + ']');

    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query && util.isObject(this.query) && Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || query && '?' + query || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':'; // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.

  if (this.slashes || (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, function (match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');
  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function (relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function (relative) {
  if (util.isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);

  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  } // hash is always overridden, no matter what.
  // even href="" will remove it.


  result.hash = relative.hash; // if the relative url is empty, then there's nothing left to do here.

  if (relative.href === '') {
    result.href = result.format();
    return result;
  } // hrefs like //foo/bar always cut to the protocol.


  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);

    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol') result[rkey] = relative[rkey];
    } //urlParse appends trailing / to urls like http://www.example.com


    if (slashedProtocol[result.protocol] && result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);

      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }

      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;

    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');

      while (relPath.length && !(relative.host = relPath.shift())) {
        ;
      }

      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }

    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port; // to support http.request

    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }

    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = result.pathname && result.pathname.charAt(0) === '/',
      isRelAbs = relative.host || relative.pathname && relative.pathname.charAt(0) === '/',
      mustEndAbs = isRelAbs || isSourceAbs || result.host && relative.pathname,
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol]; // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.

  if (psychotic) {
    result.hostname = '';
    result.port = null;

    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;else srcPath.unshift(result.host);
    }

    result.host = '';

    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;

      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;else relPath.unshift(relative.host);
      }

      relative.host = null;
    }

    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = relative.host || relative.host === '' ? relative.host : result.host;
    result.hostname = relative.hostname || relative.hostname === '' ? relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath; // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!util.isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift(); //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')

      var authInHost = result.host && result.host.indexOf('@') > 0 ? result.host.split('@') : false;

      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }

    result.search = relative.search;
    result.query = relative.query; //to support http.request

    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') + (result.search ? result.search : '');
    }

    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null; //to support http.request

    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }

    result.href = result.format();
    return result;
  } // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.


  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (result.host || relative.host || srcPath.length > 1) && (last === '.' || last === '..') || last === ''; // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0

  var up = 0;

  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];

    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  } // if the path is allowed to go above the root, restore leading ..s


  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' && (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && srcPath.join('/').substr(-1) !== '/') {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' || srcPath[0] && srcPath[0].charAt(0) === '/'; // put the host back

  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' : srcPath.length ? srcPath.shift() : ''; //occationaly the auth can get stuck only in host
    //this especially happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')

    var authInHost = result.host && result.host.indexOf('@') > 0 ? result.host.split('@') : false;

    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || result.host && srcPath.length;

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  } //to support request.http


  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') + (result.search ? result.search : '');
  }

  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function () {
  var host = this.host;
  var port = portPattern.exec(host);

  if (port) {
    port = port[0];

    if (port !== ':') {
      this.port = port.substr(1);
    }

    host = host.substr(0, host.length - port.length);
  }

  if (host) this.hostname = host;
};

},{"46":46,"5":5,"60":60}],60:[function(require,module,exports){
'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = {
  isString: function isString(arg) {
    return typeof arg === 'string';
  },
  isObject: function isObject(arg) {
    return _typeof(arg) === 'object' && arg !== null;
  },
  isNull: function isNull(arg) {
    return arg === null;
  },
  isNullOrUndefined: function isNullOrUndefined(arg) {
    return arg == null;
  }
};

},{}],61:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = function isBuffer(arg) {
  return arg && _typeof(arg) === 'object' && typeof arg.copy === 'function' && typeof arg.fill === 'function' && typeof arg.readUInt8 === 'function';
};

},{}],62:[function(require,module,exports){
// Currently in sync with Node.js lib/internal/util/types.js
// https://github.com/nodejs/node/commit/112cc7c27551254aa2b17098fb774867f05ed0d9
'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var isArgumentsObject = require(27);

var isGeneratorFunction = require(28);

var whichTypedArray = require(74);

var isTypedArray = require(29);

function uncurryThis(f) {
  return f.call.bind(f);
}

var BigIntSupported = typeof BigInt !== 'undefined';
var SymbolSupported = typeof Symbol !== 'undefined';
var ObjectToString = uncurryThis(Object.prototype.toString);
var numberValue = uncurryThis(Number.prototype.valueOf);
var stringValue = uncurryThis(String.prototype.valueOf);
var booleanValue = uncurryThis(Boolean.prototype.valueOf);

if (BigIntSupported) {
  var bigIntValue = uncurryThis(BigInt.prototype.valueOf);
}

if (SymbolSupported) {
  var symbolValue = uncurryThis(Symbol.prototype.valueOf);
}

function checkBoxedPrimitive(value, prototypeValueOf) {
  if (_typeof(value) !== 'object') {
    return false;
  }

  try {
    prototypeValueOf(value);
    return true;
  } catch (e) {
    return false;
  }
}

exports.isArgumentsObject = isArgumentsObject;
exports.isGeneratorFunction = isGeneratorFunction;
exports.isTypedArray = isTypedArray; // Taken from here and modified for better browser support
// https://github.com/sindresorhus/p-is-promise/blob/cda35a513bda03f977ad5cde3a079d237e82d7ef/index.js

function isPromise(input) {
  return typeof Promise !== 'undefined' && input instanceof Promise || input !== null && _typeof(input) === 'object' && typeof input.then === 'function' && typeof input["catch"] === 'function';
}

exports.isPromise = isPromise;

function isArrayBufferView(value) {
  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    return ArrayBuffer.isView(value);
  }

  return isTypedArray(value) || isDataView(value);
}

exports.isArrayBufferView = isArrayBufferView;

function isUint8Array(value) {
  return whichTypedArray(value) === 'Uint8Array';
}

exports.isUint8Array = isUint8Array;

function isUint8ClampedArray(value) {
  return whichTypedArray(value) === 'Uint8ClampedArray';
}

exports.isUint8ClampedArray = isUint8ClampedArray;

function isUint16Array(value) {
  return whichTypedArray(value) === 'Uint16Array';
}

exports.isUint16Array = isUint16Array;

function isUint32Array(value) {
  return whichTypedArray(value) === 'Uint32Array';
}

exports.isUint32Array = isUint32Array;

function isInt8Array(value) {
  return whichTypedArray(value) === 'Int8Array';
}

exports.isInt8Array = isInt8Array;

function isInt16Array(value) {
  return whichTypedArray(value) === 'Int16Array';
}

exports.isInt16Array = isInt16Array;

function isInt32Array(value) {
  return whichTypedArray(value) === 'Int32Array';
}

exports.isInt32Array = isInt32Array;

function isFloat32Array(value) {
  return whichTypedArray(value) === 'Float32Array';
}

exports.isFloat32Array = isFloat32Array;

function isFloat64Array(value) {
  return whichTypedArray(value) === 'Float64Array';
}

exports.isFloat64Array = isFloat64Array;

function isBigInt64Array(value) {
  return whichTypedArray(value) === 'BigInt64Array';
}

exports.isBigInt64Array = isBigInt64Array;

function isBigUint64Array(value) {
  return whichTypedArray(value) === 'BigUint64Array';
}

exports.isBigUint64Array = isBigUint64Array;

function isMapToString(value) {
  return ObjectToString(value) === '[object Map]';
}

isMapToString.working = typeof Map !== 'undefined' && isMapToString(new Map());

function isMap(value) {
  if (typeof Map === 'undefined') {
    return false;
  }

  return isMapToString.working ? isMapToString(value) : value instanceof Map;
}

exports.isMap = isMap;

function isSetToString(value) {
  return ObjectToString(value) === '[object Set]';
}

isSetToString.working = typeof Set !== 'undefined' && isSetToString(new Set());

function isSet(value) {
  if (typeof Set === 'undefined') {
    return false;
  }

  return isSetToString.working ? isSetToString(value) : value instanceof Set;
}

exports.isSet = isSet;

function isWeakMapToString(value) {
  return ObjectToString(value) === '[object WeakMap]';
}

isWeakMapToString.working = typeof WeakMap !== 'undefined' && isWeakMapToString(new WeakMap());

function isWeakMap(value) {
  if (typeof WeakMap === 'undefined') {
    return false;
  }

  return isWeakMapToString.working ? isWeakMapToString(value) : value instanceof WeakMap;
}

exports.isWeakMap = isWeakMap;

function isWeakSetToString(value) {
  return ObjectToString(value) === '[object WeakSet]';
}

isWeakSetToString.working = typeof WeakSet !== 'undefined' && isWeakSetToString(new WeakSet());

function isWeakSet(value) {
  return isWeakSetToString(value);
}

exports.isWeakSet = isWeakSet;

function isArrayBufferToString(value) {
  return ObjectToString(value) === '[object ArrayBuffer]';
}

isArrayBufferToString.working = typeof ArrayBuffer !== 'undefined' && isArrayBufferToString(new ArrayBuffer());

function isArrayBuffer(value) {
  if (typeof ArrayBuffer === 'undefined') {
    return false;
  }

  return isArrayBufferToString.working ? isArrayBufferToString(value) : value instanceof ArrayBuffer;
}

exports.isArrayBuffer = isArrayBuffer;

function isDataViewToString(value) {
  return ObjectToString(value) === '[object DataView]';
}

isDataViewToString.working = typeof ArrayBuffer !== 'undefined' && typeof DataView !== 'undefined' && isDataViewToString(new DataView(new ArrayBuffer(1), 0, 1));

function isDataView(value) {
  if (typeof DataView === 'undefined') {
    return false;
  }

  return isDataViewToString.working ? isDataViewToString(value) : value instanceof DataView;
}

exports.isDataView = isDataView; // Store a copy of SharedArrayBuffer in case it's deleted elsewhere

var SharedArrayBufferCopy = typeof SharedArrayBuffer !== 'undefined' ? SharedArrayBuffer : undefined;

function isSharedArrayBufferToString(value) {
  return ObjectToString(value) === '[object SharedArrayBuffer]';
}

function isSharedArrayBuffer(value) {
  if (typeof SharedArrayBufferCopy === 'undefined') {
    return false;
  }

  if (typeof isSharedArrayBufferToString.working === 'undefined') {
    isSharedArrayBufferToString.working = isSharedArrayBufferToString(new SharedArrayBufferCopy());
  }

  return isSharedArrayBufferToString.working ? isSharedArrayBufferToString(value) : value instanceof SharedArrayBufferCopy;
}

exports.isSharedArrayBuffer = isSharedArrayBuffer;

function isAsyncFunction(value) {
  return ObjectToString(value) === '[object AsyncFunction]';
}

exports.isAsyncFunction = isAsyncFunction;

function isMapIterator(value) {
  return ObjectToString(value) === '[object Map Iterator]';
}

exports.isMapIterator = isMapIterator;

function isSetIterator(value) {
  return ObjectToString(value) === '[object Set Iterator]';
}

exports.isSetIterator = isSetIterator;

function isGeneratorObject(value) {
  return ObjectToString(value) === '[object Generator]';
}

exports.isGeneratorObject = isGeneratorObject;

function isWebAssemblyCompiledModule(value) {
  return ObjectToString(value) === '[object WebAssembly.Module]';
}

exports.isWebAssemblyCompiledModule = isWebAssemblyCompiledModule;

function isNumberObject(value) {
  return checkBoxedPrimitive(value, numberValue);
}

exports.isNumberObject = isNumberObject;

function isStringObject(value) {
  return checkBoxedPrimitive(value, stringValue);
}

exports.isStringObject = isStringObject;

function isBooleanObject(value) {
  return checkBoxedPrimitive(value, booleanValue);
}

exports.isBooleanObject = isBooleanObject;

function isBigIntObject(value) {
  return BigIntSupported && checkBoxedPrimitive(value, bigIntValue);
}

exports.isBigIntObject = isBigIntObject;

function isSymbolObject(value) {
  return SymbolSupported && checkBoxedPrimitive(value, symbolValue);
}

exports.isSymbolObject = isSymbolObject;

function isBoxedPrimitive(value) {
  return isNumberObject(value) || isStringObject(value) || isBooleanObject(value) || isBigIntObject(value) || isSymbolObject(value);
}

exports.isBoxedPrimitive = isBoxedPrimitive;

function isAnyArrayBuffer(value) {
  return typeof Uint8Array !== 'undefined' && (isArrayBuffer(value) || isSharedArrayBuffer(value));
}

exports.isAnyArrayBuffer = isAnyArrayBuffer;
['isProxy', 'isExternal', 'isModuleNamespaceObject'].forEach(function (method) {
  Object.defineProperty(exports, method, {
    enumerable: false,
    value: function value() {
      throw new Error(method + ' is not supported in userland');
    }
  });
});

},{"27":27,"28":28,"29":29,"74":74}],63:[function(require,module,exports){
(function (process){(function (){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors(obj) {
  var keys = Object.keys(obj);
  var descriptors = {};

  for (var i = 0; i < keys.length; i++) {
    descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
  }

  return descriptors;
};

var formatRegExp = /%[sdj%]/g;

exports.format = function (f) {
  if (!isString(f)) {
    var objects = [];

    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }

    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function (x) {
    if (x === '%%') return '%';
    if (i >= len) return x;

    switch (x) {
      case '%s':
        return String(args[i++]);

      case '%d':
        return Number(args[i++]);

      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }

      default:
        return x;
    }
  });

  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }

  return str;
}; // Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.


exports.deprecate = function (fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  } // Allow for deprecating things in the process of starting up.


  if (typeof process === 'undefined') {
    return function () {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;

  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }

      warned = true;
    }

    return fn.apply(this, arguments);
  }

  return deprecated;
};

var debugs = {};
var debugEnvRegex = /^$/;

if (process.env.NODE_DEBUG) {
  var debugEnv = process.env.NODE_DEBUG;
  debugEnv = debugEnv.replace(/[|\\{}()[\]^$+?.]/g, '\\$&').replace(/\*/g, '.*').replace(/,/g, '$|^').toUpperCase();
  debugEnvRegex = new RegExp('^' + debugEnv + '$', 'i');
}

exports.debuglog = function (set) {
  set = set.toUpperCase();

  if (!debugs[set]) {
    if (debugEnvRegex.test(set)) {
      var pid = process.pid;

      debugs[set] = function () {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function () {};
    }
  }

  return debugs[set];
};
/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */

/* legacy: obj, showHidden, depth, colors*/


function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  }; // legacy...

  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];

  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  } // set default options


  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}

exports.inspect = inspect; // http://en.wikipedia.org/wiki/ANSI_escape_code#graphics

inspect.colors = {
  'bold': [1, 22],
  'italic': [3, 23],
  'underline': [4, 24],
  'inverse': [7, 27],
  'white': [37, 39],
  'grey': [90, 39],
  'black': [30, 39],
  'blue': [34, 39],
  'cyan': [36, 39],
  'green': [32, 39],
  'magenta': [35, 39],
  'red': [31, 39],
  'yellow': [33, 39]
}; // Don't use 'blue' not visible on cmd.exe

inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};

function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return "\x1B[" + inspect.colors[style][0] + 'm' + str + "\x1B[" + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}

function stylizeNoColor(str, styleType) {
  return str;
}

function arrayToHash(array) {
  var hash = {};
  array.forEach(function (val, idx) {
    hash[val] = true;
  });
  return hash;
}

function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect && value && isFunction(value.inspect) && // Filter out the util module, it's inspect function is special
  value.inspect !== exports.inspect && // Also filter out any prototype objects using the circular check.
  !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);

    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }

    return ret;
  } // Primitive types cannot have properties


  var primitive = formatPrimitive(ctx, value);

  if (primitive) {
    return primitive;
  } // Look up the keys of the object.


  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  } // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx


  if (isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  } // Some type of object without properties can be shortcutted.


  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }

    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }

    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }

    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '',
      array = false,
      braces = ['{', '}']; // Make Array say that they are Array

  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  } // Make functions say that they are functions


  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  } // Make RegExps say that they are RegExps


  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  } // Make dates with properties first say the date


  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  } // Make error with message first say the error


  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);
  var output;

  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function (key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();
  return reduceToSingleString(output, base, braces);
}

function formatPrimitive(ctx, value) {
  if (isUndefined(value)) return ctx.stylize('undefined', 'undefined');

  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }

  if (isNumber(value)) return ctx.stylize('' + value, 'number');
  if (isBoolean(value)) return ctx.stylize('' + value, 'boolean'); // For some reason typeof null is "object", so special case here.

  if (isNull(value)) return ctx.stylize('null', 'null');
}

function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}

function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];

  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
    } else {
      output.push('');
    }
  }

  keys.forEach(function (key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
    }
  });
  return output;
}

function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || {
    value: value[key]
  };

  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }

  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }

  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }

      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function (line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function (line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }

  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }

    name = JSON.stringify('' + key);

    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}

function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function (prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
} // NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.


exports.types = require(62);

function isArray(ar) {
  return Array.isArray(ar);
}

exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}

exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}

exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}

exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}

exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}

exports.isString = isString;

function isSymbol(arg) {
  return _typeof(arg) === 'symbol';
}

exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}

exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}

exports.isRegExp = isRegExp;
exports.types.isRegExp = isRegExp;

function isObject(arg) {
  return _typeof(arg) === 'object' && arg !== null;
}

exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}

exports.isDate = isDate;
exports.types.isDate = isDate;

function isError(e) {
  return isObject(e) && (objectToString(e) === '[object Error]' || e instanceof Error);
}

exports.isError = isError;
exports.types.isNativeError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}

exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || _typeof(arg) === 'symbol' || // ES6 symbol
  typeof arg === 'undefined';
}

exports.isPrimitive = isPrimitive;
exports.isBuffer = require(61);

function objectToString(o) {
  return Object.prototype.toString.call(o);
}

function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']; // 26 Feb 16:19:34

function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
} // log is just a thin wrapper to console.log that prepends a timestamp


exports.log = function () {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};
/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */


exports.inherits = require(26);

exports._extend = function (origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;
  var keys = Object.keys(add);
  var i = keys.length;

  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }

  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function') throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];

    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }

    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn,
      enumerable: false,
      writable: false,
      configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });
    var args = [];

    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));
  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn,
    enumerable: false,
    writable: false,
    configurable: true
  });
  return Object.defineProperties(fn, getOwnPropertyDescriptors(original));
};

exports.promisify.custom = kCustomPromisifiedSymbol;

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }

  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  } // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.


  function callbackified() {
    var args = [];

    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();

    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }

    var self = this;

    var cb = function cb() {
      return maybeCb.apply(self, arguments);
    }; // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)


    original.apply(this, args).then(function (ret) {
      process.nextTick(cb.bind(null, null, ret));
    }, function (rej) {
      process.nextTick(callbackifyOnRejected.bind(null, rej, cb));
    });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified, getOwnPropertyDescriptors(original));
  return callbackified;
}

exports.callbackify = callbackify;

}).call(this)}).call(this,require(41))
},{"26":26,"41":41,"61":61,"62":62}],64:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex; // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434

  return (bth[buf[i + 0]] + bth[buf[i + 1]] + bth[buf[i + 2]] + bth[buf[i + 3]] + '-' + bth[buf[i + 4]] + bth[buf[i + 5]] + '-' + bth[buf[i + 6]] + bth[buf[i + 7]] + '-' + bth[buf[i + 8]] + bth[buf[i + 9]] + '-' + bth[buf[i + 10]] + bth[buf[i + 11]] + bth[buf[i + 12]] + bth[buf[i + 13]] + bth[buf[i + 14]] + bth[buf[i + 15]]).toLowerCase();
}

var _default = bytesToUuid;
exports["default"] = _default;

},{}],65:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "v1", {
  enumerable: true,
  get: function get() {
    return _v["default"];
  }
});
Object.defineProperty(exports, "v3", {
  enumerable: true,
  get: function get() {
    return _v2["default"];
  }
});
Object.defineProperty(exports, "v4", {
  enumerable: true,
  get: function get() {
    return _v3["default"];
  }
});
Object.defineProperty(exports, "v5", {
  enumerable: true,
  get: function get() {
    return _v4["default"];
  }
});

var _v = _interopRequireDefault(require(69));

var _v2 = _interopRequireDefault(require(70));

var _v3 = _interopRequireDefault(require(72));

var _v4 = _interopRequireDefault(require(73));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

},{"69":69,"70":70,"72":72,"73":73}],66:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */

function md5(bytes) {
  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = new Uint8Array(msg.length);

    for (var i = 0; i < msg.length; ++i) {
      bytes[i] = msg.charCodeAt(i);
    }
  }

  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */


function md5ToHexEncodedArray(input) {
  var output = [];
  var length32 = input.length * 32;
  var hexTab = '0123456789abcdef';

  for (var i = 0; i < length32; i += 8) {
    var x = input[i >> 5] >>> i % 32 & 0xff;
    var hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
    output.push(hex);
  }

  return output;
}
/**
 * Calculate output length with padding and bit length
 */


function getOutputLength(inputLength8) {
  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */


function wordsToMd5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[getOutputLength(len) - 1] = len;
  var a = 1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d = 271733878;

  for (var i = 0; i < x.length; i += 16) {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }

  return [a, b, c, d];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */


function bytesToWords(input) {
  if (input.length === 0) {
    return [];
  }

  var length8 = input.length * 8;
  var output = new Uint32Array(getOutputLength(length8));

  for (var i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
  }

  return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */


function safeAdd(x, y) {
  var lsw = (x & 0xffff) + (y & 0xffff);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */


function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */


function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}

function md5ff(a, b, c, d, x, s, t) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t);
}

function md5gg(a, b, c, d, x, s, t) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t);
}

function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}

function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}

var _default = md5;
exports["default"] = _default;

},{}],67:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = rng; // Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
// getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
// find the complete implementation of crypto (msCrypto) on IE11.

var getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);
var rnds8 = new Uint8Array(16);

function rng() {
  if (!getRandomValues) {
    throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
  }

  return getRandomValues(rnds8);
}

},{}],68:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0; // Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html

function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;

    case 1:
      return x ^ y ^ z;

    case 2:
      return x & y ^ x & z ^ y & z;

    case 3:
      return x ^ y ^ z;
  }
}

function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}

function sha1(bytes) {
  var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
  var H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = [];

    for (var i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  }

  bytes.push(0x80);
  var l = bytes.length / 4 + 2;
  var N = Math.ceil(l / 16);
  var M = new Array(N);

  for (var _i = 0; _i < N; ++_i) {
    var arr = new Uint32Array(16);

    for (var j = 0; j < 16; ++j) {
      arr[j] = bytes[_i * 64 + j * 4] << 24 | bytes[_i * 64 + j * 4 + 1] << 16 | bytes[_i * 64 + j * 4 + 2] << 8 | bytes[_i * 64 + j * 4 + 3];
    }

    M[_i] = arr;
  }

  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

  for (var _i2 = 0; _i2 < N; ++_i2) {
    var W = new Uint32Array(80);

    for (var t = 0; t < 16; ++t) {
      W[t] = M[_i2][t];
    }

    for (var _t = 16; _t < 80; ++_t) {
      W[_t] = ROTL(W[_t - 3] ^ W[_t - 8] ^ W[_t - 14] ^ W[_t - 16], 1);
    }

    var a = H[0];
    var b = H[1];
    var c = H[2];
    var d = H[3];
    var e = H[4];

    for (var _t2 = 0; _t2 < 80; ++_t2) {
      var s = Math.floor(_t2 / 20);
      var T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[_t2] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }

    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }

  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
}

var _default = sha1;
exports["default"] = _default;

},{}],69:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _rng = _interopRequireDefault(require(67));

var _bytesToUuid = _interopRequireDefault(require(64));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
} // **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html


var _nodeId;

var _clockseq; // Previous uuid creation time


var _lastMSecs = 0;
var _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];
  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    var seedBytes = options.random || (options.rng || _rng["default"])();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  var msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || (0, _bytesToUuid["default"])(b);
}

var _default = v1;
exports["default"] = _default;

},{"64":64,"67":67}],70:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _v = _interopRequireDefault(require(71));

var _md = _interopRequireDefault(require(66));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var v3 = (0, _v["default"])('v3', 0x30, _md["default"]);
var _default = v3;
exports["default"] = _default;

},{"66":66,"71":71}],71:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
exports.URL = exports.DNS = void 0;

var _bytesToUuid = _interopRequireDefault(require(64));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function uuidToBytes(uuid) {
  // Note: We assume we're being passed a valid uuid string
  var bytes = [];
  uuid.replace(/[a-fA-F0-9]{2}/g, function (hex) {
    bytes.push(parseInt(hex, 16));
  });
  return bytes;
}

function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  var bytes = [];

  for (var i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

var DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
exports.DNS = DNS;
var URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
exports.URL = URL;

function _default(name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    var off = buf && offset || 0;
    if (typeof value === 'string') value = stringToBytes(value);
    if (typeof namespace === 'string') namespace = uuidToBytes(namespace);

    if (!Array.isArray(value)) {
      throw TypeError('value must be an array of bytes');
    }

    if (!Array.isArray(namespace) || namespace.length !== 16) {
      throw TypeError('namespace must be uuid string or an Array of 16 byte values');
    } // Per 4.3


    var bytes = hashfunc(namespace.concat(value));
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      for (var idx = 0; idx < 16; ++idx) {
        buf[off + idx] = bytes[idx];
      }
    }

    return buf || (0, _bytesToUuid["default"])(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
}

},{"64":64}],72:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _rng = _interopRequireDefault(require(67));

var _bytesToUuid = _interopRequireDefault(require(64));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function v4(options, buf, offset) {
  if (typeof options === 'string') {
    buf = options === 'binary' ? new Uint8Array(16) : null;
    options = null;
  }

  options = options || {};

  var rnds = options.random || (options.rng || _rng["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`


  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    var start = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[start + i] = rnds[i];
    }

    return buf;
  }

  return (0, _bytesToUuid["default"])(rnds);
}

var _default = v4;
exports["default"] = _default;

},{"64":64,"67":67}],73:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _v = _interopRequireDefault(require(71));

var _sha = _interopRequireDefault(require(68));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var v5 = (0, _v["default"])('v5', 0x50, _sha["default"]);
var _default = v5;
exports["default"] = _default;

},{"68":68,"71":71}],74:[function(require,module,exports){
(function (global){(function (){
'use strict';

var forEach = require(12);

var availableTypedArrays = require(3);

var callBound = require(6);

var $toString = callBound('Object.prototype.toString');

var hasToStringTag = require(18)();

var g = typeof globalThis === 'undefined' ? global : globalThis;
var typedArrays = availableTypedArrays();
var $slice = callBound('String.prototype.slice');
var toStrTags = {};

var gOPD = require(9);

var getPrototypeOf = Object.getPrototypeOf; // require('getprototypeof');

if (hasToStringTag && gOPD && getPrototypeOf) {
  forEach(typedArrays, function (typedArray) {
    if (typeof g[typedArray] === 'function') {
      var arr = new g[typedArray]();

      if (Symbol.toStringTag in arr) {
        var proto = getPrototypeOf(arr);
        var descriptor = gOPD(proto, Symbol.toStringTag);

        if (!descriptor) {
          var superProto = getPrototypeOf(proto);
          descriptor = gOPD(superProto, Symbol.toStringTag);
        }

        toStrTags[typedArray] = descriptor.get;
      }
    }
  });
}

var tryTypedArrays = function tryAllTypedArrays(value) {
  var foundName = false;
  forEach(toStrTags, function (getter, typedArray) {
    if (!foundName) {
      try {
        var name = getter.call(value);

        if (name === typedArray) {
          foundName = name;
        }
      } catch (e) {}
    }
  });
  return foundName;
};

var isTypedArray = require(29);

module.exports = function whichTypedArray(value) {
  if (!isTypedArray(value)) {
    return false;
  }

  if (!hasToStringTag || !(Symbol.toStringTag in value)) {
    return $slice($toString(value), 8, -1);
  }

  return tryTypedArrays(value);
};

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"12":12,"18":18,"29":29,"3":3,"6":6,"9":9}]},{},[1])(1)
});
