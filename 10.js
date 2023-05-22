// 배열 index 0번째 부터 시작

// 크기지정
let num = new Array(5); // 5개의 아이템이 있는 배열만들어줘
// console.log(num);

// 배열메소드

// push 마지막에 요소추가
// let fruits = ['apple', 'banana']
// console.log(fruits);

// fruits.push('orange')
// console.log(fruits);

// pop 마지막 요소 삭제
// let fruits = ["apple", "banana"];
// console.log(fruits);

// fruits.pop();
// console.log(fruits);

// shift 맨 앞 요소 삭제
// let fruits = ["apple", "banana"];
// console.log(fruits);

// fruits.shift();
// console.log(fruits);

// unshift 맨 앞 요소 추가
// let fruits = ["apple", "banana"];
// console.log(fruits);

// fruits.unshift("grape");
// console.log(fruits);

// splice
// let fruits = ["apple", "banana", "kiwi"];
// console.log(fruits);

// fruits.splice(1, 1, "grape"); // 첫 번째부터 1개 지우고 그 자리에 grape로 갈아끼워줘
// fruits.splice(1, 2, "grape"); // 첫 번째부터 2개 지우고 그 자리에 grape로 갈아끼워줘 -> 두세번째 모두 삭제 후 grape로 대체
// console.log(fruits);

// slice  새로운 배열 반환
// let fruits = ["apple", "banana", "kiwi"];
// let slicedFruits = fruits.slice(0, 2); // index0부터 index2는 제외하고 나머지만 새로운 배열로 만들어줘 -> index0, index1만 새로운 배열로 반환
// console.log(slicedFruits);

// forEach, map, filter, find
let numbers = [1, 2, 3, 4, 5];

// 매개변수 자리에 함수를 넣는 것을 콜백함수라고 함!
// numbers.forEach(function (item) {
//   console.log(item);
// });

// map 기존 배열을 가공해서 새로운 배열을 생성 -> 항상 원본 배열의 길이만큼 return된다
// let newNumbers = numbers.map(function (item) {
//   return item * 2;
// });
// console.log(newNumbers);

// let newNumbers = numbers.map((item) => {
//   return item * 2;
// });
// console.log(newNumbers);

// filter 새로운 배열을 반환하지만 조건에 맞는 배열만 만들어져서 반환됨
// let filteredNumbers = numbers.filter(function (item) {
//   return item !== 5;
// });
// console.log(filteredNumbers);

// find 조건에 맞는 제일 앞에 하나만 반환
let result = numbers.find(function (item) {
  return item > 2;
});
console.log(result);
