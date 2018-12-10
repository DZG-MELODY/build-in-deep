console.log('main');

console.log('start to load a.js');
import('./a').then(module=>{
  console.log('a.js is loaded');
  module.default();
});