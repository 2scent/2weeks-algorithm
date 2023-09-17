// 입력을 받아오기 위해 아래 두줄의 코드를 사용하세요. (수정 금지)
const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim();

const [a, b, c, d, e, f] = stdin.split(' ').map(Number);

for (let x = -999; x <= 999; x++) {
  for (let y = -999; y <= 999; y++) {
    if (a * x + b * y === c) {
      if (d * x + e * y === f) {
        console.log(x, y);
        break;
      }
    }
  }
}
