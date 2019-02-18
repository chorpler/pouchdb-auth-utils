API
-------

- [API](#api)
    - [db.signUp(username, password [, options])](#dbsignupusername-password--options)
      - [Example response:](#example-response)
      - [Options](#options)
      - [Example:](#example)
    - [db.logIn(username, password [, options])](#dbloginusername-password--options)
      - [Example response:](#example-response-1)
    - [db.logOut()](#dblogout)
      - [Example:](#example-1)
      - [Example response:](#example-response-2)
    - [db.getSession([options])](#dbgetsessionoptions)
      - [Example:](#example-2)
      - [Example response:](#example-response-3)
    - [db.getUser(username [, options])](#dbgetuserusername--options)
      - [Example:](#example-3)
      - [Example response:](#example-response-4)
    - [db.putUser(username [, options])](#dbputuserusername--options)
      - [Example:](#example-4)
    - [db.deleteUser(username [, options])](#dbdeleteuserusername--options)
      - [Example:](#example-5)
    - [db.changePassword(username, password [, options])](#dbchangepasswordusername-password--options)
      - [Example:](#example-6)
    - [db.changeUsername(oldUsername, newUsername [, options])](#dbchangeusernameoldusername-newusername--options)
      - [Example:](#example-7)
    - [db.hasRole(username, role [, options])](#dbhasroleusername-role--options)
      - [Example:](#example-8)
    - [db.getRoles(username [, options])](#dbgetrolesusername--options)
      - [Example:](#example-9)
    - [db.addRoles(username, roles [, options])](#dbaddrolesusername-roles--options)
      - [Example:](#example-10)
    - [db.deleteRoles(username, roles [, options])](#dbdeleterolesusername-roles--options)
      - [Example:](#example-11)
    - [db.signUpAdmin(username, password [, options])](#dbsignupadminusername-password--options)
    - [db.deleteAdmin(username [, options])](#dbdeleteadminusername--options)

Node-style callbacks **are no longer supported**. Use promises:

```js
db.doSomething(args).then(function (response) {
  return db.doSomethingElse(args);
}).then(function response) {
  // handle response
}).catch(function (error) {
  // handle error
});
```

Every function also takes a set of `options`.  Unless otherwise noted, the options are identical to the `init` parameter described in the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters). The most common parameters will be:
- `method`: Which type of HTTP request to use (`GET`, `POST`, `PUT`, `DELETE`, etc.)
- `headers`: A `Headers` object containing standard headers like `Content-Type`, `Authorization`, etc. This plugin will attempt to fill in the `Authorization` header when possible.
- `body`: For `POST` and `PUT` requests, you may need to supply a body. This will be sent as a string; if you supply an object, it will be stringified before being sent.
- `credentials`: What type of request credentials to use.
Check out the Fetch API link above for more details.

#### db.signUp(username, password [, options])

Sign up a new user who doesn't exist yet.  Throws an error if the user already exists or if the username is invalid, or if some network error occurred.  CouchDB has some limitations on user names (e.g. they cannot contain the character `:`).

```js
db.signUp('batman', 'brucewayne').then(function (response) {
  // etc.
}).catch(function (err) {
  if (err.name === 'conflict') {
    // "batman" already exists, choose another username
  } else if (err.name === 'forbidden') {
    // invalid username
  } else {
    // HTTP error, cosmic rays, etc.
  }
});
```

##### Example response:

```js
{
  "ok":true,
  "id":"org.couchdb.user:batman",
  "rev":"1-575ed65bb40cbe90dc882ced8044a90f"
}
```

**Note:** Signing up does not automatically log in a user; you will need to call `db.logIn()` afterwards.

##### Options

* **metadata** : Object of metadata you want to store with the username, e.g. an email address or any other info. Can be as deeply structured as you want.
                 HOWEVER, it must not contain any of the following reserved keys, which are handled automatically by CouchDB:
                 [
                   '_id',
                   '_rev',
                   'name',
                   'type',
                   'roles',
                   'password',
                   'password_scheme',
                   'iterations',
                   'derived_key',
                   'salt'
                 ]

##### Example:

```js
db.signUp('robin', 'dickgrayson', {
  metadata : {
    email : 'robin@boywonder.com',
    birthday : '1932-03-27T00:00:00.000Z',
    likes : ['acrobatics', 'short pants', 'sidekickin\''],
  }
}).then(function (response) {
  // etc.
}).catch(function (err) {
  // handle error
});
```

Note that CouchDB does not enforce a password policy or a username policy, unless you add a security doc to the `_users` database.

#### db.logIn(username, password [, options])

Log in an existing user. Throws an error if the user doesn't exist yet, the password is wrong, the HTTP server is unreachable, or a meteor struck your computer.

```js
db.logIn('superman', 'clarkkent').then(function (response) {
  // etc.
}).catch(function (err) {
  if (err.name === 'unauthorized' || err.name === 'forbidden') {
    // name or password incorrect
  } else {
    // cosmic rays, a meteor, etc.
  }
});
```

##### Example response:

```js
{"ok":true,"name":"david","roles":[]}
```

#### db.logOut()

Logs out whichever user is currently logged in. If nobody's logged in, it does nothing and just returns `{"ok" : true}`.

##### Example:

```js
db.logOut().then(function (response) {
  // etc.
}).catch(function (err) {
  // err is probably a network error
})
```

##### Example response:

```js
{"ok":true}
```

#### db.getSession([options])

Returns information about the current session.  In other words, this tells you which user is currently logged in.

##### Example:

```js
db.getSession().then(function (response) {
  // response.userCtx.name is the current user
  if (!response.userCtx.name) {
      // nobody's logged in
  } else {
    // etc.
  }
}).catch(function (err) {
  // err is probably a network error
});
```

##### Example response:

```js
{
    "info": {
        "authenticated": "cookie",
        "authentication_db": "_users",
        "authentication_handlers": ["oauth", "cookie", "default"]
    },
    "ok": true,
    "userCtx": {
        "name": "batman",
        "roles": []
    }
}

```

**Note:** `getSession()` returns basic user information, like name and roles, but doesn't return metadata.  If you need the metadata, use `getUser()`.

#### db.getUser(username [, options])

Returns the user document associated with a username.  (CouchDB, in a pleasing show of consistency, stores users as JSON documents in the special `_users` database.) This is the primary way to get metadata about a user.

##### Example:

```js
db.getUser('aquaman').then(function (response) {
  // response is the user object
}).catch(function (err) {
  if (err.name === 'not_found') {
    // typo, or you don't have the privileges to see this user
  } else {
    // some other error
  }
});
```

##### Example response:

```js
{
    "_id": "org.couchdb.user:aquaman",
    "_rev": "1-60288b5b056a8af31e910bca2523ea6a",
    "derived_key": "05c3314f180faed646af3b77e637ffecf2e3fb93",
    "iterations": 10,
    "name": "aquaman",
    "password_scheme": "pbkdf2",
    "roles": [],
    "salt": "bce14111a559e00587f3e5f207e4a316",
    "type": "user"
}
```

**Note:** Only server admins or the user themselves can fetch user data. Otherwise you will get a 404 `not_found` error.


#### db.putUser(username [, options])

Update the metadata of a user.

##### Example:

```js
db.putUser('robin', {
  metadata : {
    email : 'robin@boywonder.com',
    birthday : '1932-03-27T00:00:00.000Z',
    likes : ['acrobatics', 'short pants', 'sidekickin\''],
  }
}).then(function (response) {
  // etc.
}).catch(function (err) {
  // handle error
});
```

#### db.deleteUser(username [, options])

Delete a user.

##### Example:

```js
db.deleteUser('robin').then(function (response) {
  // etc.
.catch(function (err) {
  // handle error
});
```

#### db.changePassword(username, password [, options])

Set new `password` for user `username`.

##### Example:

```js
db.changePassword('spiderman', 'will-remember').then(function(response) {
  // response is the user update response
  // {
  //   "ok": true,
  //   "id": "org.couchdb.user:spiderman",
  //   "rev": "2-09310a62dcc7eea42bf3d4f67e8ff8c4"
  // }
}).catch(function (err) {
  if (err.name === 'not_found') {
    // typo, or you don't have the privileges to see this user
  } else {
    // some other error
  }
});
```

**Note:** Only server admins or the user themselves can change user data. Otherwise you will get a 404 `not_found` error.

#### db.changeUsername(oldUsername, newUsername [, options])

Renames `oldUsername` to `newUsername`.

##### Example:

```js
db.changeUsername('spiderman', 'batman').then(function (response) {
  // etc.
}).catch(function(err) {
    if (err.name === 'not_found') {
    // typo, or you don't have the privileges to see this user
  } else if (err.taken) {
    // auth error, make sure that 'batman' isn't already in DB
  } else {
    // some other error
  }
});
```

**Note:** Only server admins change a username. Otherwise you will get a 404 `not_found` error.

#### db.hasRole(username, role [, options])

Returns `true` if the user has the specified role. If not, returns `false`.

##### Example:

```js
db.hasRole('spiderman', 'superhero').then(function (response) {
  // etc.
}).catch(function(err) {
  // handle error
});
```

**Note:** Generally, only server admins or the user themselves can check roles. Otherwise you will get a 403 `forbidden` error.

#### db.getRoles(username [, options])

Returns the roles the user has as an array of strings

##### Example:

```js
db.getRoles('spiderman').then(function (response) {
  // response will be something like
  // [ 'superhero', 'webslinger' ]
}).catch(function(err) {
  // handle error
});
```

**Note:** Generally, only server admins or the user themselves can get a user's roles. Otherwise you will get a 403 `forbidden` error.

#### db.addRoles(username, roles [, options])

Adds the specified `roles` to the user. `roles` can be a single string or an array of strings.

##### Example:

```js
db.addRoles('spiderman', ['superhero', 'webslinger', 'avenger', 'mutant']).then(function (response) {
  // etc.
}).catch(function(err) {
  // handle error
});
```

**Note:** Only server admins can add roles. Otherwise you will get a 403 `forbidden` error.

#### db.deleteRoles(username, roles [, options])

Deletes the specified roles from the user. `roles` can be a single string or an array of strings. If any of the provided roles do not exist, it will not throw an error.

##### Example:

```js
db.deleteRoles('spiderman', ['mutant', 'villain']).then(function (response) {
  // Deletes role 'mutant' from user 'spiderman'
  // No problem if user 'spiderman' never had role 'villain'
}).catch(function(err) {
  // handle error
});
```

**Note:** Only server admins can delete roles. Otherwise you will get a 403 `forbidden` error.

#### db.signUpAdmin(username, password [, options])

Sign up a new admin.

```js
db.signUpAdmin('batman', 'brucewayne').then(function (response) {
  // response will be an empty string if the signup was successful
}).catch(function (err) {
  // handle error
});
```

#### db.deleteAdmin(username [, options])

Delete an admin.

```js
db.deleteAdmin('batman').then(function (response) {
  // response will be a string containing the encrypted/salted/hashed
  // password the administrator had in the CouchDB .ini file
}).catch(function (err) {
  // handle error
});
```
