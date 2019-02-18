'use strict';

var utils = require('./test-utils');
var chai = require('chai');
var should = chai.should();

var PouchDB = utils.TestPouch;

var serverHost = utils.getConfig().serverHost;

describe('admins', function () {
  // this.timeout(20000);
  var dbHost = serverHost;
  var dbName = dbHost + '/testdb';

  var db;

  // var testNumber = 1;
  // var esstart   = "margin-top: 50px; margin-bottom: 5px; background-color: blue; color: white;";
  // var esfinish  = "margin-top: 5px; margin-bottom: 50px; background-color: blue; color: white;";
  // var espassed  = "margin-top: 5px; margin-bottom: 50px; border: 1px solid green; color: green; font-weight: bold;";
  // var esfailed  = "margin-top: 5px; margin-bottom: 50px; border: 1px solid red; background-color: rgba(32, 0, 128, 0); color: red; font-weight: bold;";
  // var esunknown = "margin-top: 5px; margin-bottom: 50px; border: 1px solid blue; background-color: rgba(32, 0, 128, 0); color: blue; font-weight: bold;";

var testNumber = utils.testNumber, testName = utils.testName;

  beforeEach(function () {
    // let testName = "UNKNOWN_TEST";
    // if (this && this.currentTest && this.currentTest.title) {
    //   testName = this.currentTest.title;
    // }
    // // console.log(`\n\n`);
    // console.log(`%c<===== START TEST ${testNumber} ('${testName}') =====>`, esstart);
    // console.log(`\n`);
    utils.showTestStart(this);
    db = new PouchDB(dbName);
    return utils.ensureUsersDatabaseExists(db);
  });
  
  afterEach(function () {
    // let testName = "UNKNOWN_TEST", state = "UNKNOWN";
    // if (this && this.currentTest && this.currentTest.title) {
    //   testName = this.currentTest.title;
    //   state = this.currentTest.state;
    // }
    // console.log("AFTEREACH(): This is: ", this.currentTest);
    // console.log(`%c======================> TEST ADMINS: afterEach() called for test ${testNumber} ('${testName}') STATE: ${state}`, es);
    let context = this;
    return db.logOut().then(function () {
      return db.destroy();
    }).then(function () {
      utils.showTestResult(context);
    }).catch(function (err) {
      utils.showTestResult(context);
      throw err;
    });
    // .finally(function () {
      // let states = [];
      // if (this && this.test && this.test.parent && this.test.parent.tests && this.test.parent.tests.length) {
      //   for (let test of this.test.parent.tests) {
      //     let title = test.title || "UNKNOWN_TITLE";
      //     let state = test.state || "UNKNOWN_STATE";
      //     let onestate = {
      //       title: title,
      //       state: state,
      //     };
      //     states.push(onestate);
      //   }
      // }
      // console.log(`\n`);
      // if (state === 'passed') {
      //   console.log(`%c<===== RESULT: PASSED TEST ${testNumber++} ('${testName}') =====>`, espassed);
      // } else if (state === 'failed') {
      //   console.log(`%c<===== RESULT: FAILED TEST ${testNumber++} ('${testName}') =====>`, esfailed);
      // } else {
      //   console.log(`%c<===== RESULT: ?????? TEST ${testNumber++} ('${testName}') =====>`, esunknown);
      // }
      // console.log('\n\n');
      // utils.showTestResult(this);
    // });
  });

  it('Create and delete admin', function () {
    return testCreateDeleteAdmin({});
  });

  it('Create and delete admin with config url', function () {
    return db.getMembership().then(function (membership) {
      // Some couchdb-2.x-like server
      return membership.all_nodes[0];
    }).catch(function () {
      // Some couchdb-1.x-like server
      return undefined;
    }).then(function (nodeName) {
      var opts = {
        configUrl: (nodeName ? '/_node/' + nodeName : '') + '/_config',
      };

      return testCreateDeleteAdmin(opts);
    });
  });

  function testCreateDeleteAdmin(opts) {
    return db.signUpAdmin('anna', 'secret', opts)
    .then(function (res) {
      should.exist(res);
      return db.logIn('anna', 'secret');
    }).then(function (res) {
      res.ok.should.equal(true);
      return db.deleteAdmin('anna', opts);
    }).then(function (res) {
      should.exist(res);
      return db.logOut();
    }).then(function () {
      return db.logIn('anna', 'secret');
    }).then(function () {
      should.fail('shouldn\'t have worked');
    }, function (err) {
      should.exist(err);
      err.error.should.equal('unauthorized');
      err.reason.should.equal('Name or password is incorrect.');
    });
  }
});
