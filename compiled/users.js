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
var utils_4 = require("./utils");
var pouchdb_utils_1 = require("pouchdb-utils");
var pouchdb_utils_2 = require("pouchdb-utils");
var getUsersDatabaseUrl = function () {
    var db = this;
    var userDBURL = utils_4.getBaseUrl(db) + '/_users';
    // console.log(`getUsersDatabaseUrl(): URL and DB is:\n`, userDBURL);
    // console.log(`getUsersDatabaseUrl(): DB is:`, db);
    return userDBURL;
};
exports.getUsersDatabaseUrl = getUsersDatabaseUrl;
var updateUser = function (db, user, opts) {
    return __awaiter(this, void 0, void 0, function () {
        var options, reservedWords, key, err, url, ajaxOpts, res, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
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
                        'salt',
                    ];
                    if (opts.metadata) {
                        for (key in opts.metadata) {
                            if (opts.metadata.hasOwnProperty(key) && reservedWords.indexOf(key) !== -1) {
                                err = new utils_1.AuthError('cannot use reserved word in metadata: "' + key + '"');
                                throw err;
                            }
                        }
                        user = pouchdb_utils_1.assign(user, opts.metadata);
                    }
                    if (opts.roles) {
                        user = pouchdb_utils_1.assign(user, { roles: opts.roles });
                    }
                    url = '/_users/' + encodeURIComponent(user._id);
                    ajaxOpts = pouchdb_utils_1.assign({
                        method: 'PUT',
                        body: user,
                        headers: utils_3.getBasicAuthHeaders(db),
                    }, options.ajax || {});
                    return [4 /*yield*/, utils_2.doFetch(db, url, ajaxOpts)];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/, res];
                case 2:
                    err_1 = _a.sent();
                    throw err_1;
                case 3: return [2 /*return*/];
            }
        });
    });
};
var signUp = function (username, password, opts) {
    return __awaiter(this, void 0, void 0, function () {
        var db, options, err, err, err, userId, user, res, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    db = this;
                    options = opts != undefined ? opts : {};
                    if (['http', 'https'].indexOf(db.type()) === -1) {
                        err = new utils_1.AuthError('This plugin only works for the http/https adapter. So you should use new PouchDB("http://mysite.com:5984/mydb") instead.');
                        throw err;
                    }
                    else if (!username) {
                        err = new utils_1.AuthError('You must provide a username');
                        throw err;
                    }
                    else if (!password) {
                        err = new utils_1.AuthError('You must provide a password');
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
                    err_2 = _a.sent();
                    throw err_2;
                case 3: return [2 /*return*/];
            }
        });
    });
};
exports.signUp = signUp;
var getUser = function (username, opts) {
    return __awaiter(this, void 0, void 0, function () {
        var db, options, err, url, ajaxOpts, res, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    db = this;
                    options = opts != undefined ? opts : {};
                    if (!username) {
                        err = new utils_1.AuthError('you must provide a username');
                        throw err;
                    }
                    url = '/_users/' + encodeURIComponent('org.couchdb.user:' + username);
                    ajaxOpts = pouchdb_utils_1.assign({
                        method: 'GET',
                        headers: utils_3.getBasicAuthHeaders(db),
                    }, options.ajax || {});
                    return [4 /*yield*/, utils_2.doFetch(db, url, ajaxOpts)];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/, res];
                case 2:
                    err_3 = _a.sent();
                    throw err_3;
                case 3: return [2 /*return*/];
            }
        });
    });
};
exports.getUser = getUser;
var putUser = function (username, opts) {
    return __awaiter(this, void 0, void 0, function () {
        var db, options, err, err, user, res, err_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    db = this;
                    options = opts != undefined ? opts : {};
                    if (['http', 'https'].indexOf(db.type()) === -1) {
                        err = new utils_1.AuthError('This plugin only works for the http/https adapter. So you should use new PouchDB("http://mysite.com:5984/mydb") instead.');
                        throw err;
                    }
                    else if (!username) {
                        err = new utils_1.AuthError('You must provide a username');
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
                    err_4 = _a.sent();
                    throw err_4;
                case 4: return [2 /*return*/];
            }
        });
    });
};
exports.putUser = putUser;
var deleteUser = function (username, opts) {
    return __awaiter(this, void 0, void 0, function () {
        var db, options, err, err, user, url, ajaxOpts, res, err_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    db = this;
                    options = opts != undefined ? opts : {};
                    if (['http', 'https'].indexOf(db.type()) === -1) {
                        err = new utils_1.AuthError('This plugin only works for the http/https adapter. So you should use new PouchDB("http://mysite.com:5984/mydb") instead.');
                        throw err;
                    }
                    else if (!username) {
                        err = new utils_1.AuthError('You must provide a username');
                        throw err;
                    }
                    return [4 /*yield*/, db.getUser(username, options)];
                case 1:
                    user = _a.sent();
                    url = '/_users/' + encodeURIComponent(user._id) + '?rev=' + user._rev;
                    ajaxOpts = pouchdb_utils_1.assign({
                        method: 'DELETE',
                        headers: utils_3.getBasicAuthHeaders(db),
                    }, options.ajax || {});
                    return [4 /*yield*/, utils_2.doFetch(db, url, ajaxOpts)];
                case 2:
                    res = _a.sent();
                    return [2 /*return*/, res];
                case 3:
                    err_5 = _a.sent();
                    throw err_5;
                case 4: return [2 /*return*/];
            }
        });
    });
};
exports.deleteUser = deleteUser;
var changePassword = function (username, password, opts) {
    return __awaiter(this, void 0, void 0, function () {
        var db, options, err, err, err, user, url, ajaxOpts, res, err_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    db = this;
                    options = opts != undefined ? opts : {};
                    if (['http', 'https'].indexOf(db.type()) === -1) {
                        err = new utils_1.AuthError('This plugin only works for the http/https adapter. So you should use new PouchDB("http://mysite.com:5984/mydb") instead.');
                        throw err;
                    }
                    else if (!username) {
                        err = new utils_1.AuthError('You must provide a username');
                        throw err;
                    }
                    else if (!password) {
                        err = new utils_1.AuthError('You must provide a password');
                        throw err;
                    }
                    return [4 /*yield*/, db.getUser(username, options)];
                case 1:
                    user = _a.sent();
                    user.password = password;
                    url = '/_users/' + encodeURIComponent(user._id);
                    ajaxOpts = pouchdb_utils_1.assign({
                        method: 'PUT',
                        headers: utils_3.getBasicAuthHeaders(db),
                        body: user,
                    }, options.ajax || {});
                    return [4 /*yield*/, utils_2.doFetch(db, url, ajaxOpts)];
                case 2:
                    res = _a.sent();
                    return [2 /*return*/, res];
                case 3:
                    err_6 = _a.sent();
                    throw err_6;
                case 4: return [2 /*return*/];
            }
        });
    });
};
exports.changePassword = changePassword;
var changeUsername = function (oldUsername, newUsername, opts) {
    return __awaiter(this, void 0, void 0, function () {
        var db_1, options, USERNAME_PREFIX, fetch_1, updateUser_1, err, err, err, res, err, err_7, user, newUser, res, err_8, err_9;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 11, , 12]);
                    db_1 = this;
                    options = opts != undefined ? opts : {};
                    USERNAME_PREFIX = 'org.couchdb.user:';
                    fetch_1 = function (url, opts) {
                        return __awaiter(this, void 0, void 0, function () {
                            var options_1, res, err_10;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        options_1 = opts != undefined ? opts : {};
                                        return [4 /*yield*/, utils_2.doFetch(db_1, url, options_1)];
                                    case 1:
                                        res = _a.sent();
                                        return [2 /*return*/, res];
                                    case 2:
                                        err_10 = _a.sent();
                                        throw err_10;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        });
                    };
                    updateUser_1 = function (user, opts) {
                        return __awaiter(this, void 0, void 0, function () {
                            var options_2, url, updateOpts, res, err_11;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        options_2 = opts != undefined ? opts : {};
                                        url = '/_users/' + encodeURIComponent(user._id);
                                        updateOpts = pouchdb_utils_1.assign({
                                            method: 'PUT',
                                            headers: utils_3.getBasicAuthHeaders(db_1),
                                            body: user,
                                        }, options_2.ajax || {});
                                        return [4 /*yield*/, fetch_1(url, updateOpts)];
                                    case 1:
                                        res = _a.sent();
                                        return [2 /*return*/, res];
                                    case 2:
                                        err_11 = _a.sent();
                                        throw err_11;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        });
                    };
                    options.ajax = options.ajax || {};
                    if (['http', 'https'].indexOf(db_1.type()) === -1) {
                        err = new utils_1.AuthError('This plugin only works for the http/https adapter. So you should use new PouchDB("http://mysite.com:5984/mydb") instead.');
                        throw err;
                    }
                    if (!newUsername) {
                        err = new utils_1.AuthError('You must provide a new username');
                        throw err;
                    }
                    if (!oldUsername) {
                        err = new utils_1.AuthError('You must provide a username to rename');
                        throw err;
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 10]);
                    return [4 /*yield*/, db_1.getUser(newUsername, options)];
                case 2:
                    res = _a.sent();
                    err = new utils_1.AuthError('user already exists');
                    err.taken = true;
                    throw err;
                case 3:
                    err_7 = _a.sent();
                    _a.label = 4;
                case 4:
                    _a.trys.push([4, 8, , 9]);
                    return [4 /*yield*/, db_1.getUser(oldUsername, options)];
                case 5:
                    user = _a.sent();
                    newUser = pouchdb_utils_2.clone(user);
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
                    err_8 = _a.sent();
                    throw err_8;
                case 9: return [3 /*break*/, 10];
                case 10: return [3 /*break*/, 12];
                case 11:
                    err_9 = _a.sent();
                    throw err_9;
                case 12: return [2 /*return*/];
            }
        });
    });
};
exports.changeUsername = changeUsername;
//# sourceMappingURL=users.js.map