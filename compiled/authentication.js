"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var utils_2 = require("./utils");
var utils_3 = require("./utils");
var pouchdb_utils_1 = require("pouchdb-utils");
var logIn = function (username, password, opts) {
    return __awaiter(this, void 0, void 0, function () {
        var db, options, err, err, err, url, headers, ajaxOpts, res, auth, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
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
                    headers = utils_2.getBasicAuthHeadersFor(username, password);
                    headers.append('Content-Type', 'application/json');
                    ajaxOpts = pouchdb_utils_1.assign({
                        method: 'POST',
                        // headers: assign({'Content-Type': 'application/json'}, getBasicAuthHeaders(db)),
                        headers: headers,
                        body: { name: username, password: password },
                    }, options.ajax || {});
                    return [4 /*yield*/, utils_1.doFetch(db, url, ajaxOpts)];
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
exports.logIn = logIn;
var logOut = function (opts) {
    return __awaiter(this, void 0, void 0, function () {
        var db, options, url, ajaxOpts, res, err_2, db, options, url, ajaxOpts, res, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 7]);
                    db = this;
                    options = opts != undefined ? opts : {};
                    url = '/_session';
                    ajaxOpts = pouchdb_utils_1.assign({
                        method: 'DELETE',
                        headers: utils_3.getBasicAuthHeaders(db),
                    }, options.ajax || {});
                    return [4 /*yield*/, utils_1.doFetch(db, url, ajaxOpts)];
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
                    db = this;
                    options = opts != undefined ? opts : {};
                    url = '/_session';
                    ajaxOpts = pouchdb_utils_1.assign({
                        method: 'DELETE',
                    }, options.ajax || {});
                    return [4 /*yield*/, utils_1.doFetch(db, url, ajaxOpts)];
                case 4:
                    res = _a.sent();
                    if (db && db.__opts && db.__opts.auth) {
                        delete db.__opts.auth;
                    }
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
exports.logOut = logOut;
var getSession = function () {
    return __awaiter(this, void 0, void 0, function () {
        var db, url, ajaxOpts, res, err_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    db = this;
                    url = '/_session';
                    ajaxOpts = {
                        method: 'GET',
                        headers: utils_3.getBasicAuthHeaders(db),
                    };
                    return [4 /*yield*/, utils_1.doFetch(db, url, ajaxOpts)];
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
exports.getSession = getSession;
//# sourceMappingURL=authentication.js.map