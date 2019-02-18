export class AuthError extends Error {
  public status:number = 400;
  public name:string = "authentication_error";
  // public message:string = "";
  public error:string|boolean = true;
  public taken:boolean = false;
  public reason?:string = "";
  public toJSON:Function;
  public toJson:Function;
  // public error?:string = "";
  // public 
  constructor(msg:string, ...params) {
    super(msg);
    let self = this;

    if(msg) {
      this.message = msg;
    }
    if(typeof Error !== 'undefined' && typeof Error.captureStackTrace === 'function') {
      // Error.captureStackTrace(this, AuthError);
      // Error.captureStackTrace(this);
      Error.captureStackTrace(self, AuthError);
      // Error.captureStackTrace(self, self.constructor);
    }
    if(!this.reason) {
      this.reason = this.message;
    }
    this.toJSON = () => {
      // debuglog(`AuthError.toJSON() called`);
      let out:any = Object.assign({}, this);
      out.message = this.message + "";
      // console.log(`AuthError.toJSON() called. Returning:`, out);
      return out;
    };
    this.toJson = () => {
      return this.toJSON();
    };
    return this;
  }
}
