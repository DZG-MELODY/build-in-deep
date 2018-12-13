const path = require('path');
const fs = require('fs');
const rmrf = require('rimraf');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = function build (exampleName, options) {
  console.log('>>>>>>>>>> begin to compile webpack');
  const compile = webpack({
    entry: path.resolve(__dirname, `./${exampleName}/index.js`),
    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: 'dist.js',
      publicPath: 'http://localhost:5500/dist/'
    },
    optimization: {
      minimize: false
    },
    mode: options.mode || 'none',
    plugins: [
      new CleanWebpackPlugin(['dist'], {
        root: path.resolve(__dirname, '../')
      })
    ]
  });
  compile.run((err, stats) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stats.toString({
      chunks: false, // 使构建过程更静默无输出
      colors: true // 在控制台展示颜色
    }));
    console.log('>>>>>>>>>> webpack compile finished');
    console.log('>>>>>>>>>> copy file to example');
    const srcDir = path.resolve(__dirname, './../dist');
    const destDir = path.resolve(__dirname, `./${exampleName}/dist`);

    if (options.rm) {
      rmrf.sync(destDir);
      console.log(`>>>>>>>>>> dir has remove [${destDir}]`);
    }

    if (!fs.existsSync(destDir)) fs.mkdirSync(destDir);

    fs.readdirSync(srcDir).forEach(file => {
      const srcFile = `${srcDir}/${file}`;
      const destFile = `${destDir}/${file}`;
      if (fs.existsSync(destFile)) {
        console.log(`>>>>>>>>>> file has exist [${destFile}]`);
      } else {
        fs.copyFileSync(srcFile, destFile);
        console.log(`>>>>>>>>>> copy file [${destFile}]`);
      }
    });
    console.log('>>>>>>>>>> copy file finished');
  });
};
