// 입력을 받아오기 위해 아래 두줄의 코드를 사용하세요. (수정 금지)
const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim();

const candy = Number(stdin);

const isOK = (candy, a, b, c) => {
  // a: 택희, b: 영훈, c: 남규
  if (candy > a + b + c) return false;
  if (c < b + 2) return false;
  if (a % 2 !== 0) return false;
  return true;
};

let count = 0;

for (let a = 1; a < candy; a++) {
  for (let b = 1; b < candy - a; b++) {
    for (let c = 1; c <= candy - a - b; c++) {
      if (isOK(candy, a, b, c)) {
        count++;
      }
    }
  }
}

console.log(count);
