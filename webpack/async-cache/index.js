import './a';
setTimeout(()=>{
  import('./b').then(module=>{
    console.log('main');
    module.default();
  })
},2000);