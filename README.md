PouchDB Authentication
=====

[![Build Status](https://travis-ci.org/pouchdb-community/pouchdb-authentication.svg?branch=master)](https://travis-ci.org/pouchdb-community/pouchdb-authentication)
[![Greenkeeper badge](https://badges.greenkeeper.io/pouchdb-community/pouchdb-authentication.svg)](https://greenkeeper.io/)
[![npm version](https://img.shields.io/npm/v/pouchdb-authentication.svg)](https://www.npmjs.com/package/pouchdb-authentication)

<img alt="PouchDB Authentication logo by nickcolley" title="PouchDB Authentication logo by nickcolley" width="150px" src="https://raw.githubusercontent.com/pouchdb-community/pouchdb-authentication/master/docs/logo.png"/>

Easy user authentication for PouchDB/CouchDB.

# Note
The following changes have been been made in this fork:
- Changed package name to `pouchdb-auth-utils`
- Updated to use PouchDB 7.x dependencies, and to work as a plugin with PouchDB 7.x
- Rewritten in TypeScript
- Support for callbacks removed. I'm not using callbacks, I hate callbacks, nobody should be using callbacks. Promises are where its at.
- added `hasRole()`, `addRoles()`, and `deleteRoles()` functions
- Testing now uses Headless Chromium (via `puppeteer`) instead of PhantomJS, since [PhantomJS was basically deprecated in favor of Headless Chromium](https://groups.google.com/forum/#!topic/phantomjs/9aI5d-LDuNE). This means we can now use ES6 features like `let` and `const` and arrow functions in the tests.
- Bundle has increased in size, unfortunately, because it now includes the following dependencies:
  - `node-fetch` and `fetch-cookie`: the version of `fetch-cookie` currently (2019-02-18) used by `pouchdb-fetch` is outdated and would not parse cookies with commas or hyphens in them. So I had to update them and include them in this plugin.
    Also, I would just use `PouchDB.fetch()` if possible, and avoid pulling any kind of `fetch` in as a dependency. However, `PouchDB.fetch()` must be run from an actual PouchDB database, as in
    ```js
    var db = new PouchDB("http://localhost:5984/testdb");
    var res = db.fetch("/_membership");
    ```
    and unfortunately PouchDB assumes you are fetching something from the database itself, so it tries to fetch from `http://localhost:5984/testdb/_membership` instead of `http://localhost:5984/_membership`, which naturally causes an error. Creating a weird "virtual" URL (such as `http://localhost:5984/testdb/../_membership`) will work for some cases (a browser environment using recent versions of Chrome, at least), but not for a Node environment. So I gave up.
  - `url-parse`: `pouchdb-utils` has an included `parseUri()` function that used to take care of this, but it parses wildly incorrectly if you try to parse some CouchDB 2.x URLs like `/_node/couchdb@localhost/config`. Using native `URL()` objects doesn't work in a Node environment if Node < 10.x, so I included `url-parse` instead.
------
------

# Original ReadMe
```js
var db = new PouchDB('http://mysite:5984/mydb', {skip_setup: true});
db.logIn('batman', 'brucewayne').then(function (batman) {
  console.log("I'm Batman.");
  return db.logOut();
});
```


Overview
----------

You know what's hard?  **Security**.  You know what makes security really easy?  **CouchDB**.

That's right, CouchDB is more than a database: it's also a RESTful web server with a built-in authentication framework. And it boasts some top-notch security features:

* **salts and hashes** passwords automatically with [PBKDF2](https://en.wikipedia.org/wiki/PBKDF2)
* **stores a cookie** in the browser
* **refreshes the cookie** every 10 minutes (default)

And best of all, CouchDB does it with good ol'-fashioned HTTP. Just open up the network tab and watch the JSON fly back and forth.

To get started, just install CouchDB, throw in [a little SSL](https://wiki.apache.org/couchdb/How_to_enable_SSL), and you've got everything you need for your site's authentication.

### Project status

This plugin uses vanilla CouchDB.  The goal is to give you a lightweight authentication API that doesn't require anything fancy &ndash; no additional server daemons, no third-party providers, just straight-up Pouch and Couch.

So this is more of a reference implementation than an all-in-one solution. If there's a feature missing that you need, you will probably need to write a custom server (see the [CouchDB Authentication recipes][recipes] section for details).

Since version 1.0.0, this plugin **does support Node.js**.


Using PouchDB Authentication
------

* [Setup](https://github.com/chorpler/pouchdb-auth-utils/blob/master/docs/setup.md)
* [API](https://github.com/chorpler/pouchdb-auth-utils/blob/master/docs/api.md)
* [CouchDB Authentication recipes][recipes]


Changelog
------

PouchDB Authentication follows [semantic versioning](http://semver.org/). To see a changelog with all PouchDB Authentication releases, check out the [Github releases page](https://github.com/pouchdb-community/pouchdb-authentication/releases).


Contributing
------

We use [standard-version](https://github.com/conventional-changelog/standard-version) for release versioning along with [Angular-style commit messages](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit) to automate the changelog generation. To help you make good commit messages, you are advised to install and use [commitizen](https://github.com/commitizen/cz-cli).

PouchDB Authentication is heavily tested, so you'll also want to check out the [testing guide](https://github.com/pouchdb-community/pouchdb-authentication/blob/master/TESTING.md).

[recipes]: https://github.com/pouchdb-community/pouchdb-authentication/blob/master/docs/recipes.md

Big Thanks
------

Cross-browser Testing Platform and Open Source <3 Provided by [Sauce Labs][sauce labs homepage].

![sauce labs logo][]

[sauce labs homepage]: https://saucelabs.com
[sauce labs logo]: https://raw.githubusercontent.com/pouchdb-community/pouchdb-authentication/master/docs/sauce_labs.png
