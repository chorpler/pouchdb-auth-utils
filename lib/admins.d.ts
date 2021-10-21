import { PDB } from './utils';
import { BasicResponse } from './utils';
import { LoginOptions } from './utils';
import { CouchNodeMembership } from './utils';
declare const getConfigUrl: (db: PDB, nodeName?: string) => string;
declare const getMembership: (opts: LoginOptions) => Promise<CouchNodeMembership>;
declare const signUpAdmin: (username: string, password: string, opts: LoginOptions) => Promise<BasicResponse>;
declare const deleteAdmin: (username: string, opts: LoginOptions) => Promise<BasicResponse>;
export { getConfigUrl, getMembership, deleteAdmin, signUpAdmin };
//# sourceMappingURL=admins.d.ts.map