'use strict';

var utils = require('./test-utils');
var chai = require('chai');
var should = chai.should();

var PouchDB = utils.TestPouch;

var serverHost = utils.getConfig().serverHost;

describe('authentication', function () {
  // this.timeout(10000);

  var dbName = serverHost + '/testdb';
  var users = ['aquaman'];

  var db;

  beforeEach(function () {
    utils.showTestStart(this);
    db = new PouchDB(dbName);
    return utils.ensureUsersDatabaseExists(db);
  });

  afterEach(function () {
    let context = this;
    return db.logout().then(function () {
      return db.destroy();
    }).then(function () {
      // remove the fake users, hopefully we're in the admin party
      return utils.deleteUsers(db, users);
    }).then(function () {
      utils.showTestResult(context);
    }).catch(function () {
      utils.showTestResult(context);
    });
  });

  it('Test login/logout', function () {
    return db.signup('aquaman', 'sleeps_with_fishes').then(function () {
      return db.getSession();
    }).then(function (res) {
      should.equal(res.userCtx.name, null);
      return db.login('aquaman', 'sleeps_with_fishes');
    }).then(function (res) {
      res.ok.should.equal(true);
      return db.getSession();
    }).then(function (res) {
      res.userCtx.name.should.equal('aquaman');
      return db.logout();
    }).then(function () {
      return db.getSession();
    }).then(function (res) {
      should.equal(res.userCtx.name, null);
    });
  });
});
