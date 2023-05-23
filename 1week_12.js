// while
// let i = 0;
// while (i < 10) {
//   // main logic
//   console.log(i);
//   // 증감
//   i++;
// }
// while 3초과 100미만 숫자 중 5의 배수만 출력
// let i = 3;
// while (i < 100) {
//   if (i % 5 === 0 && i >= 5) {
//     console.log(i);
//   }
//   i++;
// }

// // do~while문
// let j = 0;
// do {
//   console.log(j);
//   j++;
// } while (i < 10);

// break-continue문

// for (let i = 0; i <= 10; i++) {
//   if (i === 5) {
//     break;
//   }
//   console.log(i);
// }

for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    continue; // 5 제외 후 다음으로 넘어감
  }
  console.log(i);
}
