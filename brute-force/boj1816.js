// 입력을 받아오기 위해 아래 두줄의 코드를 사용하세요. (수정 금지)
const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim();

const [_, ...S] = stdin.split('\n');

const numbers = S.map((s) => BigInt(s));

const isOK = (n) => {
  if (n <= 1000000n) return false;

  for (let i = 2n; i <= 1000000n; i++) {
    if (n % i === 0n) return false;
  }
  return true;
};

for (const n of numbers) {
  console.log(isOK(n) ? 'YES' : 'NO');
}
