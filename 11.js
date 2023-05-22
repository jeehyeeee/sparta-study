// for문 => 반복문
// for(초기값; 조건식; 증감식){}

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// // 배열과 for문은 짝꿍
// const arr = ["one", "two", "three", "four", "five"];
// for (let i = 0; i < arr.length; i++) {
//   console.log(i);
//   console.log(arr[i]);
// }

// 0부터 10까지의 수 중에서 2의 배수만 출력
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// if (arr2[i] % 2 === 0) {
//   for (let i = 0; i <= 10; i++) {
//     console.log(arr2);
//   }
// }
for (let i = 0; i <= 10; i++) {
  if (i >= 2) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

// for~in문
// 객체의 속성을 출력하는 방법
let person = {
  name: "john",
  age: 30,
  gender: "male",
};
for (let key in person) {
  // 객체 안에 있는 key
//   console.log(key);
//   console.log(person[key]);
  console.log(key + ": " + person[key]);
}
