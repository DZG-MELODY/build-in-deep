const minimist = require('minimist');
const webpackBuild = require('./webpack/build');
const rollupBuild = require('./rollup/build');

const config = minimist(process.argv.slice(0));

const buildType = config.type;
const exampleName = config.name;

console.log('>>>>>>>>>>');
console.log(`[build info] type: ${buildType}  exampleName: ${exampleName}`);
console.log('>>>>>>>>>>');

const shellScript = buildType === 'rollup' ? rollupBuild : webpackBuild;
shellScript(exampleName, config);
