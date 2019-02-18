import path               from 'path'                    ;
import { resolve }        from 'path'                    ;
import * as packageJson   from '../package.json'         ;
// import UglifyJsPlugin     from 'uglifyjs-webpack-plugin' ;

// import CleanWebpackPlugin from 'clean-webpack-plugin'    ;
// let pathsToClean = [
//   // buildPath(),
//   'dist',
//   'build',
// ];

// let pathsToExclude = [
//   // 'dist',
//   // 'build',
// ];

// // the clean options to use
// let cleanOptions = {
//   root:     getRootDir(),
//   // exclude:  ['shared.js'],
//   exclude:  pathsToExclude,
//   verbose:  true,
//   // dry:      true,
//   dry:      false,
//   beforeEmit: true,
// };

let BUILD_MODE = process && process.env && process.env.BUILD_MODE ? process.env.BUILD_MODE : "development";


function getRootDir() {
  let outPath = __dirname;
  let pathdir = path.join(outPath, '..');
  console.log(`getRootDir(): path is '${pathdir}'`);
  return pathdir;
}

function getBundleName() {
  let projName = packageJson.name || "unknown";
  let bundleName = projName + ".bundle.js";
  console.log(`getBundleName(): Bundle name is '${bundleName}'`);
  return bundleName;
}

function srcPath(subdir) {
  let rootDir = getRootDir();
  let outPath = path.join(rootDir, "src", subdir);
  console.log("srcPath(): path is:\n", outPath);
  return outPath;
}

function buildPath() {
  return 'build';
  // return 'dist';
}

function relativeBuildPath() {
  let outPath = path.join("..", buildPath());
  console.log("relativeBuildPath(): result is:\n", outPath);
  return outPath;
}

function getBuildPath() {
  let outPath = resolve(__dirname, relativeBuildPath());
  console.log("getBuildPath(): result is:\n", outPath);
  return outPath;
}

module.exports = {
  mode: BUILD_MODE,
  // mode: 'production',
  // mode: 'development',
  entry: {
    'app': srcPath('index.ts'),
    // 'domain': './src/domain/index.ts'
  },
  output: {
    // filename: 'bundle.js',
    filename: getBundleName(),
    path: getBuildPath(),
    publicPath: buildPath() + "/",

  },
  resolve: {
    // symlinks: false,
    // alias: {
    //   // 'onsitexdomain'  : srcPath('domain')     ,
    //   'workerModule'      : srcPath('worker')    ,
    // },
    modules: [
      'src',
      'node_modules'
    ],
    extensions: [
      '.js',
      '.ts'
    ]
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        use: "source-map-loader",
        // exclude: /workerModule/,
      },
      {
        // For our normal typescript
        test: /\.ts$/,
        use: [{
          loader: 'awesome-typescript-loader',
          options: {
            configFileName: 'tsconfig.json'
          }
        }],
        exclude: [
          /(?:node_modules)/,
          // /\.worker\.ts/
        ]
      },
    ]
  },
  // devtool: 'inline-source-map'
  devtool: 'source-map',
  plugins: [
    // new CleanWebpackPlugin(pathsToClean, cleanOptions),
  ],
};
