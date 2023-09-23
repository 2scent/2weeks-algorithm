// 입력을 받아오기 위해 아래 두줄의 코드를 사용하세요. (수정 금지)
const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim();
const [line1, line2] = stdin.split('\n');

const [A, B] = line1.split(' ').map(Number);
const arr = line2.split(' ').map(Number);

const prefix = new Array(A + 1).fill(0);
for (let i = 0; i < A; i++) {
  prefix[i + 1] = prefix[i] + arr[i];
}

let max = Number.MIN_SAFE_INTEGER;
for (let i = B; i < A + 1; i++) {
  max = Math.max(max, prefix[i] - prefix[i - B]);
}
console.log(max);
