// const sys    = require('sys')
// const exec   = require('child_process').exec;
// const os     = require('os');
// const path   = require('path');
// const fs     = require('graceful-fs');
// const rimraf = require('rimraf');
// const mkdirp = require('mkdirp');

// let directoriesToClean = [
//   'www',
// ];

// let rootDir = path.join(__dirname, '..');

// function getDirectory(directory) {
//   let dir = path.normalize(path.join(rootDir, directory));
//   return dir;
// }

// for(let directory of directoriesToClean) {
//   try {
//     let fullDir = getDirectory(directory);
//     console.log(`CLEAN: Cleaning directory '${fullDir}' …`)
//     let out = rimraf.sync(fullDir)
//   } catch (error) {
//     console.log(`CLEAN: Error while cleaning directory '${directory}'`)
//     console.error(error);
//   }
// }