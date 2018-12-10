console.log('main');

Promise.all([import('./a'), import('./b')]).then(module => {
  module.forEach(m => m.default());
})