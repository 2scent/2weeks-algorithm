// 입력을 받아오기 위해 아래 두줄의 코드를 사용하세요. (수정 금지)
const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim();

const [n, ...coordinates] = stdin.split('\n');

const xSet = new Set();
const ySet = new Set();
for (const coordinate of coordinates) {
  const [x, y] = coordinate.split(' ').map(Number);
  xSet.add(x);
  ySet.add(y);
}

const candidates = [];
for (const x of xSet) {
  for (const y of ySet) {
    candidates.push([x, y]);
  }
}

const distanceses = [];

for (const candidate of candidates) {
  const [x1, y1] = candidate;

  const distances = [];

  for (const coordinate of coordinates) {
    const [x2, y2] = coordinate.split(' ').map(Number);

    const distance = Math.abs(x2 - x1) + Math.abs(y2 - y1);

    distances.push(distance);
  }

  distanceses.push(distances);
}

const answers = [];
for (let i = 1; i <= n; i++) {
  const answer = distanceses
    .map((distances) => distances.sort((a, b) => a - b))
    .map((distances) => distances.slice(0, i))
    .map((distances) => distances.reduce((a, b) => a + b));

  answers.push(Math.min(...answer));
}
console.log(answers.join(' '));
