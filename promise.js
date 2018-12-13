// 示例用来补充说明Promise

function task () {
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(100);
  //   }, 2000);
  // });
  return Promise.all([]);
  // return Promise.resolve(100);
  // return Promise.reject(100);
}

task().then(data => {
  console.log('fulfilled');
  console.log(data);
  return 200;
}, code => {
  console.log('reject');
  console.log(code);
}).then(nextData => {
  console.log('nextData');
  console.log(nextData);
}).catch(err => {
  console.log('catch err');
  console.log(err);
});
