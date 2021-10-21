import { PouchDBUserDoc } from './utils';
import { PutUserOptions } from './utils';
import { BasicResponse } from './utils';
import { LoginOptions } from './utils';
declare const getUsersDatabaseUrl: () => string;
declare const hasRole: (username: string, role: string, opts?: PutUserOptions) => Promise<boolean>;
declare const getRoles: (username: string, opts?: PutUserOptions) => Promise<string[]>;
declare const addRoles: (username: string, roles: string | string[], opts?: PutUserOptions) => Promise<BasicResponse>;
declare const deleteRoles: (username: string, roles: string | string[], opts?: PutUserOptions) => Promise<BasicResponse>;
declare const signUp: (username: string, password: string, opts: PutUserOptions) => Promise<BasicResponse>;
declare const getUser: (username: string, opts: LoginOptions) => Promise<PouchDBUserDoc>;
declare const putUser: (username: string, opts: PutUserOptions) => Promise<BasicResponse>;
declare const deleteUser: (username: string, opts: LoginOptions) => Promise<BasicResponse>;
declare const changePassword: (username: string, password: string, opts: LoginOptions) => Promise<BasicResponse>;
declare const changeUsername: (oldUsername: string, newUsername: string, opts: PutUserOptions) => Promise<BasicResponse>;
export { getUsersDatabaseUrl, signUp, getUser, putUser, deleteUser, changePassword, changeUsername, getRoles, addRoles, deleteRoles, hasRole, };
//# sourceMappingURL=users.d.ts.map