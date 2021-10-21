import { LoginOptions } from './utils';
import { LoginResponse } from './utils';
import { BasicResponse } from './utils';
import { SessionResponse } from './utils';
declare const logIn: (username: string, password: string, opts: LoginOptions) => Promise<LoginResponse>;
declare const logOut: (opts: LoginOptions) => Promise<BasicResponse>;
declare const getSession: () => Promise<SessionResponse>;
export { logIn, logOut, getSession };
//# sourceMappingURL=authentication.d.ts.map