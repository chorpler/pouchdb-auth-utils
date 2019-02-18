declare const window:any;

import { deleteAdmin, getMembership, signUpAdmin } from "./admins";
import { getSession, logIn, logOut } from "./authentication";
import {
  changePassword,
  changeUsername,
  deleteUser,
  getUser,
  getUsersDatabaseUrl,
  putUser,
  signUp,
  getRoles,
  addRoles,
  deleteRoles,
  hasRole,
} from "./users";

const PouchDBAuthPlugin:any = {
  login               : logIn               ,
  logIn               : logIn               ,
  logout              : logOut              ,
  logOut              : logOut              ,
  getSession          : getSession          ,
  getMembership       : getMembership       ,
  signUpAdmin         : signUpAdmin         ,
  deleteAdmin         : deleteAdmin         ,
  getUsersDatabaseUrl : getUsersDatabaseUrl ,
  signup              : signUp              ,
  signUp              : signUp              ,
  getUser             : getUser             ,
  putUser             : putUser             ,
  deleteUser          : deleteUser          ,
  changePassword      : changePassword      ,
  changeUsername      : changeUsername      ,
  getRoles            : getRoles            ,
  addRoles            : addRoles            ,
  deleteRoles         : deleteRoles         ,
  hasRole             : hasRole             ,
};

const plugin:any = PouchDBAuthPlugin;
export { plugin };
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
