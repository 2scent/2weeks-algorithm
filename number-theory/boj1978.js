// 입력을 받아오기 위해 아래 두줄의 코드를 사용하세요. (수정 금지)
const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim();

const [n, line] = stdin.split('\n');
const numbers = line.split(' ').map(Number);

let answer = Number(n);
for (const number of numbers) {
  if (number === 1) {
    answer--;
  }

  for (let k = 2; k < Math.floor(Math.sqrt(number)) + 1; k++) {
    if (number % k === 0) {
      answer--;
      break;
    }
  }
}
console.log(answer);
