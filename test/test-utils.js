var PouchDB = require('pouchdb-core');
var PouchHttp = require('pouchdb-adapter-http');
var Authentication = require('../lib');
var PouchDBDebug = require('pouchdb-debug');
var PouchFetch = require('pouchdb-fetch');

PouchDB.plugin(PouchHttp);
PouchDB.plugin(Authentication.default);
PouchDB.plugin(PouchDBDebug);

// var {fetch} = require('pouchdb-fetch');
// var fetch = require('pouchdb-fetch').fetch;
var fetch = PouchFetch.fetch;

// const ShowDebugOutput = true;
const ShowDebugOutput = false;
// const ForceDBFetch    = true;
const ForceDBFetch    = false;

var testNumber = 1, totalPassed = 0, totalFailed = 0, totalUnknown = 0, testsPassed = [], testsFailed = [], testsUnknown = [];
var esstart   = "padding-top: 50px; padding-bottom:  5px; background-color: blue; color: white;";
var esfinish  = "padding-top:  5px; padding-bottom: 50px; background-color: blue; color: white;";
var espassed  = "padding-top: 50px; padding-bottom: 50px; background-color: rgba(0, 255, 0, 0.3); border: 2px solid green; font-weight: bold; font-size: 16px;";
var esfailed  = "padding-top: 50px; padding-bottom: 50px; background-color: rgba(255, 0, 0, 0.5); border: 2px solid   red; font-weight: bold; font-size: 16px;";
var esunknown = "padding-top: 50px; padding-bottom: 50px; background-color: rgba(0, 0, 255, 0.2); border: 2px solid  blue; font-weight: bold; font-size: 16px;";

const debuglog = Authentication.debuglog;
const debugloggroup = Authentication.debugloggroup;
const debugloggroupend = Authentication.deubgloggroupend;

var g = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : null;

function showTestStart(context) {
  let ctx = context;
  let testName = "UNKNOWN_TEST";
  // console.log("SHOWTESTSTART: Context is:", ctx);
  if (ctx && ctx.currentTest && ctx.currentTest.title) {
    testName = ctx.currentTest.title;
  }
  debuglog(`%c<===== START TEST ${testNumber} ('${testName}') =====>`, esstart);
  // consoleOff();
  // console.log("%c<===== START TEST ${testNumber} ('${testName}') =====>", esstart);
}

function showTestResult(context) {
  let ctx = context;
  // console.log("SHOWTESTRESULT: Context is:", ctx);
  let testName = "UNKNOWN_TEST", state = "UNKNOWN";
  if (ctx && ctx.currentTest && ctx.currentTest.title) {
    testName = ctx.currentTest.title;
    state    = ctx.currentTest.state;
  }
  // consoleOn();
  if (state === 'passed') {
    debuglog(`%c<===== RESULT: PASSED TEST ${testNumber} ('${testName}') =====>`, espassed);
    totalPassed++;
    testsPassed.push(testNumber);
    testNumber++;
    // console.log("%c<===== RESULT: PASSED TEST ${testNumber++} ('${testName}') =====>", espassed);
  } else if (state === 'failed') {
    debuglog(`%c<===== RESULT: FAILED TEST ${testNumber} ('${testName}') =====>`, esfailed);
    totalFailed++;
    testsFailed.push(testNumber);
    testNumber++;
    // console.log("%c<===== RESULT: FAILED TEST ${testNumber++} ('${testName}') =====>`, esfailed);
  } else {
    debuglog(`%c<===== RESULT: ?????? TEST ${testNumber} ('${testName}') =====>`, esunknown);
    testsUnknown++;
    testsUnknown.push(testNumber);
    testNumber++;
    // var ukString = sprintf(`%c<===== RESULT: ?????? TEST %d ('%s') =====>`, testNumber++, testName);
    // debuglog(ukString, esunknown);
    // console.log(`%c<===== RESULT: ?????? TEST ${testNumber++} ('${testName}') =====>`, esunknown);
  }
}


module.exports = {
  testNumber     : testNumber     ,
  esstart        : esstart        ,
  esfinish       : esfinish       ,
  espassed       : espassed       ,
  esfailed       : esfailed       ,
  esunknown      : esunknown      ,
  showTestStart  : showTestStart  ,
  showTestResult : showTestResult ,
};

var TestPouch = PouchDB.defaults({
  fetch: function (url, opts) {
    opts.credentials = 'include';
    return fetch(url, opts);
  },
  skip_setup: true,
});

module.exports.TestPouch = TestPouch;

function backupConsole() {
  let g = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : null;
  if (g && g.console) {
    let emptyFunc = function () {};
    let keys = Object.keys(g.console);
    let backupConsole = typeof g.backupConsoleObject === 'object' ? g.backupConsoleObject : {};
    let emptyConsole = {};
    for (let key of keys) {
      emptyConsole[key] = emptyFunc;
      backupConsole[key] = g.console[key];
    }
    g.backupConsoleObject = backupConsole;
    g.emptyConsoleObject = emptyConsole;
    return backupConsole;
  }
}

function consoleOff(silent) {
  let g = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : null;
  if (g && g.console) {
    if (!silent) {
      g.console.log("Shutting off console, console will no longer work until consoleOn() or toggleConsole() is executed ...");
    }
    if (g.backupConsoleObject && g.emptyConsoleObject) {
      let keys = Object.keys(g.console);
      for (let key of keys) {
        g.console[key] = g.emptyConsoleObject[key];
      }
      // g.console = g.emptyConsoleObject;
    } else {
      backupConsole();
      let keys = Object.keys(g.console);
      for (let key of keys) {
        g.console[key] = g.emptyConsoleObject[key];
      }
      // g.console = g.emptyConsoleObject;
    }
  }
}

function consoleOn(silent) {
  let g = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : null;
  if (g && g.console) {
    if (g.backupConsoleObject && g.emptyConsoleObject) {
      let keys = Object.keys(g.console);
      for (let key of keys) {
        g.console[key] = g.backupConsoleObject[key];
      }
      // g.console = g.backupConsoleObject;
      if (!silent) {
        g.console.log("Console re-enabled");
      }
    } else {
      if (!silent) {
        g.console.log("Console already enabled");
      }
    }
  }
}

function consoleToggle(silent) {
  let g = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : null;
  if (g && g.console) {
    if (g.backupConsoleObject && g.emptyConsoleObject) {
      if (g.console.log === g.emptyConsoleObject.log) {
        g.consoleOn(silent);
      } else {
        g.consoleOff(silent);
      }
    } else {
      g.backupConsole();
      g.consoleOff(silent);
    }
  }
}

module.exports.getConfig = function () {
  // if (typeof window !== 'undefined' && typeof window === 'object') {
  let g = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : null;
  if (g) {
    g['pouchdbauthenticationplugin'] = Authentication;
    g['pouchdbauthenticationplugindebug'] = true;
    g['pouchdbauthenticationplugindebug'] = ShowDebugOutput;
    // g['forceDBFetch'] = g['pouchdbauthenticationplugindebug'];
    g['forceDBFetch'] = ForceDBFetch;
    g['AuthError'] = Authentication.AuthError;
    g['PouchDB'] = TestPouch;
    g['PouchDBOriginal'] = PouchDB;
    g['toggledebug'] = function () { g['pouchdbauthenticationplugindebug'] = !g['pouchdbauthenticationplugindebug']; return g['pouchdbauthenticationplugindebug']; };
    g['togglefetch'] = function () { g['forceDBFetch'] = !g['forceDBFetch']; return g['forceDBFetch']; };
    g['consoleOn']   = consoleOn;
    g['consoleOff']  = consoleOff;
    g['consoleToggle']  = consoleToggle;
    g['backupConsole']  = backupConsole;

    // Object.defineProperty(window, 'debugtoggle', {
    //   get: function () {
    //     window['pouchdbauthenticationplugindebug'] = !window['pouchdbauthenticationplugindebug'];
    //     return window['pouchdbauthenticationplugindebug'];
    //   },
    //   configurable: true,
    // });
  }
  if (typeof window !== 'undefined' && window.__karma__) {
    const emptyFunc = function () {};
    const customResultFunction = window.console ? function (result) {
      window.__karma__test__number = typeof window.__karma__test__number === 'number' ? window.__karma__test__number : 1;
      if (result.skipped) {
        this.skipped++;
        return;
      }
      var testsuccess = 'background-color: green; color: white;';
      var testfailure = 'background-color: red; color: white;';
      var testunknown = 'background-color: yellow;';
      var msg = result.success ? 'SUCCESS ' : 'FAILED ';
      var testno = window.__karma__test__number;
      // consoleOn(true);
      if (msg === 'SUCCESS ') {
        window.console.log('%c# ' + testno.toString().padStart(2, "0") + ": " + msg + result.suite.join(' ') + ' ' + result.description, testsuccess);
      } else if (msg === 'FAILED ') {
        window.console.log('%c# ' + testno.toString().padStart(2, "0") + ": " + msg + result.suite.join(' ') + ' ' + result.description, testfailure);
      } else {
        window.console.log('%c# ' + testno.toString().padStart(2, "0") + ": " + msg + result.suite.join(' ') + ' ' + result.description, testunknown);
      }
      // consoleOff(true);
      window.__karma__test__number++;
    
      for (var i = 0; i < result.log.length; i++) {
        // Printing error without losing stack trace
        (function (err) {
          setTimeout(function () {
            window.console.error(err);
          });
        })(result.log[i]);
      }
    } : emptyFunc;
    window.__karma__.result = customResultFunction;
    const customCompleteFunction = window.console  ? function () {
      window.console.log('Skipped ' + this.skipped + ' tests');
      window.console.log(totalPassed.toString().padStart(2, "0")  + " tests passed: ", testsPassed );
      window.console.log(totalFailed.toString().padStart(2, "0")  + " tests failed: ", testsFailed );
      window.console.log(totalUnknown.toString().padStart(2, "0") + " tests ??????: ", testsUnknown);
    } : emptyFunc;
    window.__karma__.complete = customCompleteFunction;
  }
  
  return typeof window !== 'undefined' ? window.__karma__.config : global.__testConfig__;
};

module.exports.ensureUsersDatabaseExists = function (db) {
  var usersUrl = db.getUsersDatabaseUrl();
  var usersDb = new this.TestPouch(usersUrl, {skip_setup: false});
  return usersDb.info();
};

module.exports.deleteUsers = function (db, users) {
  var usersUrl = db.getUsersDatabaseUrl();
  var usersDb = new this.TestPouch(usersUrl);
  return usersDb.allDocs({
    include_docs: true,
    keys: users.map(function (user) {
      return 'org.couchdb.user:' + user;
    }),
  }).then(function (res) {
    var rows = res.rows.filter(function (row) {
      return row.doc;
    });
    var docs = rows.map(function (row) {
      row.doc._deleted = true;
      return row.doc;
    });
    return usersDb.bulkDocs({docs: docs});
  });
};
