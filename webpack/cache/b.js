console.log('b init');

function b (caller) {
  console.log(`${caller} -> b`);
}

module.exports = b;
