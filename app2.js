//元ネタ
// 'use strict';
// const fs = require('fs');
// const fileName = './test.txt';
// for (let count = 0; count < 30; count++) {
//   fs.appendFileSync(fileName, 'おはようございます\n', 'utf8', () => { });
//   fs.appendFileSync(fileName, 'こんにちは\n', 'utf8', () => { });
//   fs.appendFileSync(fileName, 'こんばんは\n', 'utf8', () => { });
// }


//改編、回答見てます  Promise、await、asyncを使って実装した時
'use strict'

const fs = require('fs');
const fileName = './test1.txt';
function appendFilePromise(fileName, str) {
  return new Promise((resolve) => {
    fs.appendFile(fileName, str, 'utf8', () => resolve());
  });
}

function main() {
  let promiseChain = Promise.resolve();
  for (let count = 0; count < 500; count++) {
    promiseChain = PromiseChain.then(() => {
      return appendFilePromise(fileName, 'おはようございます\n');
    }).then(() => {
      return appendFilePromise(fileName, 'こんにちは');
    }).then(() => {
      return appendFilePromise(fileName, 'こんばんは');
    });
  }
}

main();