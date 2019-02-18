"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var PouchDB = __importStar(require("pouchdb-core"));
var pouchdb_binary_utils_1 = require("pouchdb-binary-utils");
var pouchdb_fetch_1 = require("pouchdb-fetch");
var whatwg_fetch_1 = require("whatwg-fetch");
var pouchdb_utils_1 = require("pouchdb-utils");
exports.parseUri = pouchdb_utils_1.parseUri;
var StaticPouch = PouchDB;
var debuglog = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    // if(window && (window.PouchDB && window.PouchDB.debug && typeof window.PouchDB.debug.enabled === 'function' && window.PouchDB.debug.enabled('pouchdb:authentication'))) {
    // if(window && window.PouchDB && typeof window.PouchDB.emit === 'function' && window.pouchdbauthenticationdebug) {
    //   window.PouchDB.emit('debug', ['authentication', ...args]);
    //   console.log(...args);
    // }
    if (window && window.PouchDB && typeof window.PouchDB.emit === 'function') {
        window.PouchDB.emit('debug', __spread(['authentication'], args));
    }
    if (window && window.pouchdbauthenticationdebug === true) {
        console.log.apply(console, __spread(args));
    }
};
var debugerr = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    // if(window && (window.PouchDB && window.PouchDB.debug && typeof window.PouchDB.debug.enabled === 'function' && window.PouchDB.debug.enabled('pouchdb:authentication'))) {
    // if(window && window.PouchDB && typeof window.PouchDB.emit === 'function' && window.pouchdbauthenticationdebug) {
    //   window.PouchDB.emit('debug', ['authentication', ...args]);
    //   console.error(...args);
    // }
    var err, strError;
    if (window && (window.pouchdbauthenticationdebug || (window.PouchDB && typeof window.PouchDB.emit === 'function'))) {
        err = __assign({}, args);
        strError = JSON.stringify(err);
    }
    if (window && window.PouchDB && typeof window.PouchDB.emit === 'function') {
        window.PouchDB.emit('debug', __spread(['authentication', "ERROR"], args));
        window.PouchDB.emit('debug', ['authentication', "STRERROR", strError]);
    }
    if (window && window.pouchdbauthenticationdebug === true) {
        console.log("PDBAUTH ERROR:", strError);
        console.error.apply(console, __spread(args));
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
        fullName = prefix + (prefix.endsWith('/') ? '' : '/') + db.name;
    }
    else {
        fullName = db.name;
    }
    var uri = pouchdb_utils_1.parseUri(fullName);
    // Compute parent path for databases not hosted on domain root (see #215)
    var path = uri.path;
    var normalizedPath = path.endsWith('/') ? path.substr(0, -1) : path;
    var parentPath = normalizedPath.split('/').slice(0, -1).join('/');
    var portString = uri.port ? ":" + uri.port : '';
    var baseURL = uri.protocol + "://" + uri.host + portString + parentPath;
    // let baseURL:string = uri.protocol + '://' + uri.host + (uri.port ? ':' + uri.port : '') + parentPath;
    // console.log(`getBaseUrl(): Base URL is '${baseURL}'`);
    debuglog("getBaseUrl(): Base URL is '" + baseURL + "'");
    return baseURL;
};
exports.getBaseUrl = getBaseUrl;
function getBasicAuthHeadersFor(username, password) {
    var authString = username + ":" + password;
    var token = pouchdb_binary_utils_1.btoa(decodeURIComponent(encodeURIComponent(authString)));
    var headers = new pouchdb_fetch_1.Headers();
    headers.set('Authorization', 'Basic ' + token);
    return headers;
}
exports.getBasicAuthHeadersFor = getBasicAuthHeadersFor;
function getBasicAuthHeaders(db) {
    var auth;
    if (!db) {
        return new pouchdb_fetch_1.Headers();
    }
    if (db.__opts && db.__opts.auth) {
        auth = db.__opts.auth;
    }
    else {
        var uri = pouchdb_utils_1.parseUri(db.name);
        if (uri.user || uri.password) {
            auth = {
                username: uri.user,
                password: uri.password,
            };
        }
    }
    if (!auth) {
        return new pouchdb_fetch_1.Headers();
    }
    return getBasicAuthHeadersFor(auth.username, auth.password);
    // let str:string = auth.username + ':' + auth.password;
    // let token:string = btoa(decodeURIComponent(encodeURIComponent(str)));
    // let headers:Headers = new Headers();
    // headers.set('Authorization', 'Basic ' + token);
    // return headers;
}
exports.getBasicAuthHeaders = getBasicAuthHeaders;
function doFetch(db, url, opts) {
    return __awaiter(this, void 0, void 0, function () {
        var e_1, _a, full, newurl, baseURL, res, RESERVED_KEYS, RESERVED_KEYS_1, RESERVED_KEYS_1_1, key, ok, content, msg, status_1, err, err_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 6, , 7]);
                    opts = pouchdb_utils_1.assign(opts || {});
                    full = true;
                    newurl = void 0;
                    baseURL = void 0;
                    res = void 0;
                    RESERVED_KEYS = [
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
                    try {
                        // if(RESERVED_KEYS.indexOf(url) > -1) {
                        //   baseURL = getBaseUrl(db);
                        // } else {
                        //   baseURL = db.name;
                        // }
                        for (RESERVED_KEYS_1 = __values(RESERVED_KEYS), RESERVED_KEYS_1_1 = RESERVED_KEYS_1.next(); !RESERVED_KEYS_1_1.done; RESERVED_KEYS_1_1 = RESERVED_KEYS_1.next()) {
                            key = RESERVED_KEYS_1_1.value;
                            if (url.includes(key)) {
                                full = false;
                            }
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (RESERVED_KEYS_1_1 && !RESERVED_KEYS_1_1.done && (_a = RESERVED_KEYS_1.return)) _a.call(RESERVED_KEYS_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    if (full) {
                        baseURL = db.name;
                    }
                    else {
                        baseURL = getBaseUrl(db);
                    }
                    if (url[0] === "/") {
                        newurl = baseURL + url;
                    }
                    else {
                        newurl = baseURL + "/" + url;
                    }
                    // if(url[0] === '/') {
                    //   newurl = ".." + url;
                    // }
                    // let dbname:string = db.name;
                    // newurl = url;
                    // console.log(`doFetch(): DB is: `, db);
                    if (opts.body && typeof opts.body !== 'string') {
                        opts.body = JSON.stringify(opts.body);
                    }
                    if (!full) return [3 /*break*/, 2];
                    // let res:Response = await db.fetch(newurl, opts);
                    debuglog("doFetch(): Fetching from url '" + url + "' with options:", opts);
                    return [4 /*yield*/, db.fetch(url, opts)];
                case 1:
                    res = _b.sent();
                    return [3 /*break*/, 4];
                case 2:
                    debuglog("doFetch(): Fetching from url '" + newurl + "' with options:", opts);
                    return [4 /*yield*/, whatwg_fetch_1.fetch(newurl, opts)];
                case 3:
                    res = _b.sent();
                    _b.label = 4;
                case 4:
                    debuglog("doFetch(): Response is: ", res);
                    ok = res.ok;
                    return [4 /*yield*/, res.json()];
                case 5:
                    content = _b.sent();
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
                    return [3 /*break*/, 7];
                case 6:
                    err_1 = _b.sent();
                    // console.log(`doFetch(): Fetch error:\n`, err);
                    if (err_1 && err_1.name === 'unknown_error') {
                        err_1.message = (err_1.message + ' ' || '') +
                            'Unknown error!  Did you remember to enable CORS?';
                    }
                    debuglog("doFetch(): Error during fetch!");
                    debugerr(err_1);
                    // callback(err);
                    throw err_1;
                case 7: return [2 /*return*/];
            }
        });
    });
}
exports.doFetch = doFetch;
var AuthError = /** @class */ (function (_super) {
    __extends(AuthError, _super);
    // public error?:string = "";
    // public 
    function AuthError(msg) {
        var _this = _super.call(this, msg) || this;
        _this.status = 400;
        _this.name = "authentication_error";
        // public message:string = "";
        _this.error = true;
        _this.taken = false;
        _this.reason = "";
        if (msg) {
            _this.message = msg;
        }
        if (Error.captureStackTrace) {
            Error.captureStackTrace(_this, AuthError);
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
exports.AuthError = AuthError;
//# sourceMappingURL=utils.js.map