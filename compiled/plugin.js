"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var admins_1 = require("./admins");
var authentication_1 = require("./authentication");
var users_1 = require("./users");
var PouchDBAuthPlugin = {
    login: authentication_1.logIn,
    logIn: authentication_1.logIn,
    logout: authentication_1.logOut,
    logOut: authentication_1.logOut,
    getSession: authentication_1.getSession,
    getMembership: admins_1.getMembership,
    signUpAdmin: admins_1.signUpAdmin,
    deleteAdmin: admins_1.deleteAdmin,
    getUsersDatabaseUrl: users_1.getUsersDatabaseUrl,
    signup: users_1.signUp,
    signUp: users_1.signUp,
    getUser: users_1.getUser,
    putUser: users_1.putUser,
    deleteUser: users_1.deleteUser,
    changePassword: users_1.changePassword,
    changeUsername: users_1.changeUsername,
};
var plugin = PouchDBAuthPlugin;
exports.plugin = plugin;
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
if (typeof window !== 'undefined' && window.PouchDB) {
    window.PouchDB.plugin(PouchDBAuthPlugin);
}
// export default plugin;
// export plugin;
//# sourceMappingURL=plugin.js.map