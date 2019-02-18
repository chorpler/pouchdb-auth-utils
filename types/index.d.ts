// Type definitions for pouchdb-authentication 7.0.1
// Project: https://pouchdb.com/
// Definitions by: Didier Villevalois <ptitjes@free.fr>
// Definitions: https://github.com/pouchdb-community/pouchdb-authentication
// TypeScript Version: 3.2

/// <reference types="pouchdb-core" />

// TODO: Fixing this lint error will require a large refactor
/* tslint:disable:no-single-declare-module */

declare namespace PouchDB {
  namespace Authentication {

    interface AuthHeader {
      username?:string;
      password?:string;
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
    
    interface LoginOptions extends PouchDB.Core.Options {
    }

    interface BasicResponse extends PouchDB.Core.BasicResponse {
    }
    
    interface LoginResponse extends Core.BasicResponse, UserContext {
    }

    interface SessionResponse extends Core.BasicResponse {
      info: {
        authenticated: string;
        authentication_db: string;
        authentication_handlers: string[];
      };
      userCtx: UserContext;
    }

    interface PutUserOptions extends Core.Options {
      metadata?: any;
      roles?: string[];
    }

    interface CouchNodeMembership {
      all_nodes:string[];
      cluster_nodes:string[];
    }
  }

  // interface Database<Content extends {} = {}> extends PouchDB.Database {
  interface Database<Content extends {} = {}> {
    /**
     * Log in an existing user.
     * Throws an error if the user doesn't exist yet, the password is wrong, the HTTP server is unreachable, or a meteor struck your computer.
     */
    logIn(username:string, password:string, options?:PouchDB.Core.Options):Promise<Authentication.LoginResponse>;

    /**
     * Logs out whichever user is currently logged in.
     * If nobody's logged in, it does nothing and just returns `{"ok" : true}`.
     */
    logOut():Promise<PouchDB.Core.BasicResponse>;

    /**
     * Returns information about the CouchDB node membership of the server for the current database.
     */
    getMembership(options?:Authentication.LoginOptions):Promise<Authentication.CouchNodeMembership>;

    /**
     * Returns information about the current session.
     * In other words, this tells you which user is currently logged in.
     */
    getSession():Promise<Authentication.SessionResponse>;

    /**
     * Sign up a new user who doesn't exist yet.
     * Throws an error if the user already exists or if the username is invalid, or if some network error occurred.
     * CouchDB has some limitations on user names (e.g. they cannot contain the character `:`).
     */
    signUp(username:string, password:string, options?:Authentication.PutUserOptions):Promise<PouchDB.Core.Response>;

    /**
     * Returns the user document associated with a username.
     * (CouchDB, in a pleasing show of consistency, stores users as JSON documents in the special `_users` database.)
     * This is the primary way to get metadata about a user.
     */
    getUser(username:string, options?:PouchDB.Core.Options):Promise<PouchDB.Core.Document<Content & Authentication.User> & PouchDB.Core.GetMeta>;
    // getUser(username: string, options?: PouchDB.Core.Options):Promise<PouchDBUserDoc>;

    /**
     * Update the metadata of a user.
     */
    putUser(username:string, options?:Authentication.PutUserOptions): Promise<PouchDB.Core.Response>;

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
     * Sign up a new admin.
     */
    signUpAdmin(username: string, password: string, options?:Authentication.PutUserOptions): Promise<string>;

    /**
     * Delete an admin.
     */
    deleteAdmin(username: string, options?: PouchDB.Core.Options): Promise<string>;
  }
}

declare module 'pouchdb-authentication' {
  const plugin: PouchDB.Plugin;
  export = plugin;
}