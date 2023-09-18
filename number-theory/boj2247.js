// 입력을 받아오기 위해 아래 두줄의 코드를 사용하세요. (수정 금지)
const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim();

const n = Number(stdin);

let answer = 0;
for (let k = 2; k < Math.floor(n / 2) + 1; k++) {
  answer += (Math.floor(n / k) - 1) * k;
  answer %= 1000000;
}
console.log(answer);
