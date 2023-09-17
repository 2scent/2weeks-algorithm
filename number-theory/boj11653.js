// 입력을 받아오기 위해 아래 두줄의 코드를 사용하세요. (수정 금지)
const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim();

const n = Number(stdin);
let m = n;
const answers = [];

for (let k = 2; k < Math.floor(Math.sqrt(n)) + 1; k++) {
  while (m % k === 0) {
    answers.push(k);
    m = m / k;
  }
  if (m === 1) break;
}
if (m > 1) answers.push(m);

if (n !== 1) {
  answers.forEach((answer) => console.log(answer));
}
