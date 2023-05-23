// ES6
// 한 번 할당한 변수에 재할당을 할 수 있느냐 없느냐
// let(변수), const(상수)

// let a = 1;
// a = 2;
// console.log(a);

// const b = 1;
// b = 2;
// console.log(b); // 재할당 불가

// arrow function
let add = (x) => {
  return 1;
};
let add1 = (x) => 1;

// 삼항연산자
// condition ? true : false

console.log(true ? "참" : "거짓");
console.log(false ? "참" : "거짓");
console.log(1 === 1 ? "참" : "거짓");
console.log(1 !== 1 ? "참" : "거짓");

// 구조분해할당  (deftructuring(de + structure + ing)) 구조를 나눠서 각각을 다 할당함
// de = not
// 배열이나 객체의 속성

// (1) 배열의 경우
let [value1, value2] = [1, "new"];
console.log(value1, value2);

let arr = ["value1", "value2", "value3"];
let [a, b, c, d = 4] = arr;
console.log(a, b, c, d); // d가 undefined인 경우에 초기값 세팅가능 initial value

// (2) 객체인 경우
let user = {
  name: "jeehye",
  age: 27,
};
// let {name, age} = user

// let { name, age } = {
//   name: "jeehye",
//   age: 27,
// };

// console.log(name, age);

// (3) 새로운 이름으로 할당
let { name: newName, age: newAge } = user;
// user = {
//   name: "jeehye",
//   age: 27,
// };

// console.log(newAge, newName);

let { name, age, birthday = "today" } = user;
console.log(name, age, birthday); // birthday 값은 없기 때문에 undefined, 똑같이 초기값 세팅 가능, 초기값이 있어도 먼저 할당된 내용이 들어감
