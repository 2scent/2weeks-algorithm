// 입력을 받아오기 위해 아래 두줄의 코드를 사용하세요. (수정 금지)
const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim();

let [A, B] = stdin.split(' ').map(BigInt);
A -= 1n;

let fa = A;
for (let k = 2n; k <= A; k *= 2n) {
  fa += (A / k) * (k / 2n);
}

let fb = B;
for (let k = 2n; k <= B; k *= 2n) {
  fb += (B / k) * (k / 2n);
}

console.log((fb - fa).toString());
