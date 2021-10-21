/// <reference types="pouchdb-core" />
/// <reference types="pouchdb-adapter-cordova-sqlite" />
/// <reference types="pouchdb-adapter-fruitdown" />
/// <reference types="pouchdb-adapter-http" />
/// <reference types="pouchdb-adapter-idb" />
/// <reference types="pouchdb-adapter-leveldb" />
/// <reference types="pouchdb-adapter-localstorage" />
/// <reference types="pouchdb-adapter-memory" />
/// <reference types="pouchdb-adapter-websql" />
/// <reference types="pouchdb-replication" />
import { Headers } from "pouchdb-fetch";
import { parseUri } from "pouchdb-utils";
import { AuthError } from './AuthError';
import Url from 'url-parse';
declare const nFetch: typeof globalThis.fetch;
declare const mode: string;
declare const fet: any;
interface AuthHeader {
    username?: string;
    password?: string;
}
interface PDBOpts {
    adapter?: string;
    skip_setup?: boolean;
    auth?: AuthHeader;
    prefix?: string;
    deterministic_revs?: boolean;
    name?: string;
}
interface UserContext {
    name: string;
    roles?: string[];
}
interface User extends UserContext {
}
interface PouchDBUserDoc extends User {
    _id?: string;
    _rev?: string;
    [propName: string]: any;
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
    all_nodes: string[];
    cluster_nodes: string[];
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
    getMembership(options?: LoginOptions): Promise<CouchNodeMembership>;
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
    getUser(username: string, options?: PouchDB.Core.Options): Promise<PouchDB.Core.Document<Content & User> & PouchDB.Core.GetMeta>;
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
     * Test if user has a role.
     * Must be logged in as administrator or as specified user.
     */
    hasRole(username: string, role: string, options?: PutUserOptions): Promise<boolean>;
    /**
     * Get roles for user, as array of strings.
     * Must be logged in as administrator or as specified user.
     */
    getRoles(username: string, role: string, options?: PutUserOptions): Promise<boolean>;
    /**
     * Add roles `roles` to user `username`. `roles` can be a single string or an array of strings.
     * If any of the provided roles already exist for the user, they will not be duplicated.
     * Must be logged in as administrator.
     */
    addRoles(username: string, roles: string[], options?: PutUserOptions): Promise<PouchDB.Core.Response>;
    addRoles(username: string, roles: string, options?: PutUserOptions): Promise<PouchDB.Core.Response>;
    /**
     * Delete roles `roles` from user `username`. `roles` can be a single string or an array of strings.
     * If any of the provided roles do not exist for the user, they will be ignored (will not cause an error)
     * Must be logged in as administrator.
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
declare type PouchDatabase = Database<any>;
interface PDB extends PouchDatabase {
    __opts: PDBOpts;
    prefix?: string;
    type(): string;
}
declare const debuglog: (...args: any[]) => void;
declare const debugloggroup: (label: any) => void;
declare const debugloggroupend: () => void;
declare const debuglogemph: (msg: any) => void;
declare const debugerr: (...args: any[]) => void;
declare const getBaseUrl: (db: PDB) => string;
declare const getRelativeComplexUrl: (db: PDB, url: string) => string;
declare const getComplexBaseUrl: (db: PDB, url: string) => string;
declare const makeBaseUrl: (baseURL: string, newURL: string) => string;
declare function getURLWithoutSearchParams(url: string): string;
declare function getBasicAuthHeadersFor(username: string, password: string): Headers;
declare const getBasicAuthHeaders: (db?: PDB) => any;
declare function getFullFetchURL(db: PDB, url: string): string;
declare function doFetch(db: PDB, url: string, opts: any, forceDBFetch?: boolean): Promise<any>;
declare type LoginOptions = PouchDB.Core.Options;
declare type BasicResponse = PouchDB.Core.BasicResponse;
export { mode, fet, nFetch, debuglog, debuglogemph, debugloggroup, debugloggroupend, debugerr, AuthError, doFetch, getBasicAuthHeadersFor, getBasicAuthHeaders, getBaseUrl, AuthHeader, PDBOpts, UserContext, User, Database, PouchDatabase, PDB, PouchDBUserDoc, LoginOptions, LoginResponse, BasicResponse, SessionResponse, PutUserOptions, CouchNodeMembership, parseUri, getComplexBaseUrl, getRelativeComplexUrl, makeBaseUrl, getURLWithoutSearchParams, getFullFetchURL, Url, };
//# sourceMappingURL=urlparse.d.ts.map