let numbers = [10, 20, 3, 16, 45];
// let max = (min = numbers[0]); // 10
// numbers.forEach(function (number) {
//   // 현재 돌아가는 숫자가 max보다 큰 경우
//   if (number > max) {
//     max = number;
//   }
//   if (number < min) {
//     min = number;
//   }
// });
// console.log(max, min);

numbers.forEach(function (number, idx) {
  console.log(idx + " 번째 값 => " + number);
});

// apply활용
// apply -> ({},[])
let max = Math.max.apply(this, numbers);
let min = Math.min.apply(null, numbers);

console.log(max, min);

// spread operator활용
let max1 = Math.max(...numbers);
let min1 = Math.min(...numbers);
// console.log(numbers);
// console.log(...numbers);
console.log(max, min);
