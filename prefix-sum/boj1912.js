// 입력을 받아오기 위해 아래 두줄의 코드를 사용하세요. (수정 금지)
const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim();
const [line1, line2] = stdin.split('\n');
const arr = line2.split(' ').map(Number);

const prefix = new Array(arr.length + 1).fill(0);

for (let i = 0; i < arr.length; i++) {
  prefix[i + 1] = Math.max(prefix[i] + arr[i], arr[i]);
}

console.log(Math.max(...prefix.slice(1)));
