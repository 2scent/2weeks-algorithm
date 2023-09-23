// 입력을 받아오기 위해 아래 두줄의 코드를 사용하세요. (수정 금지)
const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim();

const [G, L] = stdin.split(' ').map(Number);

const divide = L / G;
const candidates = [];
for (let a = 1; a < Math.floor(Math.sqrt(divide)) + 1; a++) {
  if (divide % a === 0) {
    const b = divide / a;

    if (gcd(a, b) === 1) {
      candidates.push([a, b]);
    }
  }
}

const min = candidates.reduce((acc, cur) => {
  const accSum = (acc[0] + acc[1]) * G;
  const curSum = (cur[0] + cur[1]) * G;
  return accSum > curSum ? cur : acc;
});

const answer = min.map((n) => n * G);

console.log(answer.join(' '));

function gcd(a, b) {
  while (a % b !== 0) {
    const temp = a % b;
    a = b;
    b = temp;
  }
  return b;
}
