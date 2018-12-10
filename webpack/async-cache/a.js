console.log('a');
import('./b').then(module=>{
  module.default()
});