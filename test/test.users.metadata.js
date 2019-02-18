'use strict';

var utils = require('./test-utils');
var chai = require('chai');
var should = chai.should();

var PouchDB = utils.TestPouch;

var serverHost = utils.getConfig().serverHost;

describe('users.metadata', function () {

  var dbName = serverHost + '/testdb';
  var users = ['robin'];

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

  it('Test metadata', function () {
    var metadata = {alias: 'boywonder', profession: 'acrobat'};
    var opts = {metadata: metadata};
    return db.signup('robin', 'dickgrayson', opts).then(function (res) {
      res.ok.should.equal(true);
      return db.login('robin', 'dickgrayson');
    }).then(function () {
      return db.getUser('robin');
    }).then(function (user) {
      user.name.should.equal('robin');
      user.alias.should.equal('boywonder');
      user.profession.should.equal('acrobat');
    });
  });

  it('Test changing metadata', function () {
    var metadata = {alias: 'boywonder', profession: 'acrobat'};
    var newMetadata = {alias: 'rednowyob', profession: 'taborca'};
    var opts = {metadata: metadata};
    return db.signup('robin', 'dickgrayson', opts).then(function (res) {
      res.ok.should.equal(true);
      return db.login('robin', 'dickgrayson');
    }).then(function () {
      return db.getUser('robin');
    }).then(function (user) {
      user.name.should.equal('robin');
      user.alias.should.equal('boywonder');
      user.profession.should.equal('acrobat');
    }).then(function () {
      return db.putUser('robin', {metadata: newMetadata});
    }).then(function () {
      return db.getUser('robin');
    }).then(function (user) {
      user.name.should.equal('robin');
      user.alias.should.equal('rednowyob');
      user.profession.should.equal('taborca');
    });
  });

  var reservedWords = [
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
  ];

  reservedWords.forEach(function (key) {
    it('Test changing metadata using reserved word "' + key + '"', function () {
      return db.signup('robin', 'dickgrayson').then(function (res) {
        res.ok.should.equal(true);
        return db.login('robin', 'dickgrayson');
      }).then(function () {
        return db.getUser('robin').then(function (user) {
          var metadata = {};
          metadata[key] = 'test';
          return db.putUser('robin', {metadata: metadata}).then(function (res) {
            res.ok.should.not.equal(true);
          }).catch(function (err) {
            should.exist(err);
            err.status.should.equal(400);
            err.name.should.equal('authentication_error');
            err.message.should.equal('cannot use reserved word in metadata: "' + key + '"');
            err.error.should.equal(true);

            if (key === 'password') {
              return db.login('robin', 'dickgrayson').then(function (res) {
                res.ok.should.equal(true);
              }).catch(function (err) {
                should.not.exist(err);
              });
            } else {
              return db.getUser('robin').then(function (changedUser) {
                changedUser[key].should.deep.equal(user[key]);
              }).catch(function (err) {
                should.not.exist(err);
              });
            }
          });
        });
      });
    });
  });

  it('Test changing metadata using non-reserved word "metadata"', function () {
    var metadata = {test: 'test'};
    return db.signup('robin', 'dickgrayson').then(function (res) {
      res.ok.should.equal(true);
      return db.login('robin', 'dickgrayson');
    }).then(function () {
      return db.putUser('robin', {metadata: {metadata: metadata}});
    }).then(function (res) {
      res.ok.should.equal(true);
      return db.getUser('robin');
    }).then(function (changedUser) {
      changedUser.metadata.should.deep.equal(metadata);
    }).catch(function (err) {
      should.not.exist(err);
    });
  });

  it('Test roles functions for user', function () {
    return db.signUpAdmin('anna', 'secret').then(function (res) {
      should.exist(res);
      return db.logIn('anna', 'secret');
    }).then(function (res) {
      res.ok.should.equal(true);
      return db.signup('robin', 'dickgrayson');
    }).then(function (res) {
      res.ok.should.equal(true);
      return db.getRoles('robin');
    }).then(function (res) {
      res.should.be.an('array');
      res.should.deep.equal([]);
      return db.hasRole('robin', 'sidekick');
    }).then(function (res) {
      res.should.equal(false);
      return db.addRoles('robin', ['sidekick']);
    }).then(function (res) {
      res.ok.should.equal(true);
      return db.hasRole('robin', 'sidekick');
    }).then(function (res) {
      res.should.equal(true);
      return db.getRoles('robin');
    }).then(function (res) {
      res.should.be.to.be.an('array');
      res.should.have.deep.members(['sidekick']);
      return db.addRoles('robin', ['hero', 'acrobat']);
    }).then(function (res) {
      res.ok.should.equal(true);
      return db.getRoles('robin');
    }).then(function (res) {
      res.should.be.an('array');
      res.should.have.deep.members(['sidekick', 'acrobat', 'hero']);
      return db.hasRole('robin', 'hero');
    }).then(function (res) {
      res.should.equal(true);
      return db.deleteRoles('robin', ['hero']);
    }).then(function (res) {
      res.ok.should.equal(true);
      return db.hasRole('robin', 'hero');
    }).then(function (res) {
      res.should.equal(false);
      return db.getRoles('robin');
    }).then(function (res) {
      res.should.be.an('array');
      res.should.have.deep.members(['sidekick', 'acrobat']);
      return db.deleteRoles('robin', ['sidekick', 'acrobat']);
    }).then(function (res) {
      res.ok.should.equal(true);
      return db.getRoles('robin');
    }).then(function (res) {
      res.should.be.an('array');
      res.should.deep.equal([]);
      return db.deleteUser('robin');
    }).then(function (res) {
      res.ok.should.equal(true);
      return db.deleteAdmin('anna');
    }).then(function (res) {
      should.exist(res);
      return db.logOut();
    }).then(function (res) {
      res.ok.should.equal(true);
    }).catch(function (err) {
      should.not.exist(err);
    });
  });
});
