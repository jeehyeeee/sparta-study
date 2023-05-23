// 일급 객체로서의 함수 (First-class Object)

// (1) 변수에 함수를 할당, 변수를 가지고 함수를 객체처럼, 변수처럼 사용가능, 호출하면 함수사용 가능 -> 함수를 값으로 취급한다.
// const sayHello = function () {
//   console.log("Hello");
// };

// (2) 함수를 인자로 다른 함수에 전달할 수가 있다.
// 2-1 콜백함수 : 매개변수로써 쓰이는 함수 -> 고차함수의 한 종류
// 2-2 고차함수 : 함수를 인자로 받거나 return 하는 함수
function callFunction(func) {
  // 매개변수로 받은 변수가 사실, 함수다.
  func();
}
const sayHello = function () {
  console.log("Hello");
};
callFunction(sayHello);

// (3) 함수를 반환할 수 있다.
function craeteAdder(num) {
  return function (x) {
    return x + num;
  };
}
const addFive = craeteAdder(5);
// const addFive = function (x) {
//   return x + 5;
// ;  26번째 줄과 같은 의미

console.log(addFive(10));

// (4) 변수에 함수를 할당
const person = {
  name: "john",
  age: 31,
  isMarried: true,
  //   sayHello: function () {
  //     console.log("hello " + this.name); // 중괄호(스코프) 안에서의 this는 항상 자기 자신(객체)을 가리킨다.
  //     // console.log(`hello ${this.name}`);
  //     // console.log(`hello ${person.name}`);
  //   },
  sayHello: () => {
    console.log(`hello ${person.name}`); // 화살표함수는 this를 바인딩 하지않는다
  },
};
person.sayHello();

// (5) 배열의 요소로 함수를 할당

const myArr = [
  function (a, b) {
    return a + b;
  }, // 0번째 요소
  function (a, b) {
    return a - b;
  }, // 1번째 요소
];
// 더하기
console.log(myArr[0](1, 2)); // 배열의 요소로 접근함. 함수여도 헷갈리지 말기!! 함수 호출도 같이()
// 빼기
console.log(myArr[1](5, 2)); // 배열의 요소로 접근함. 함수여도 헷갈리지 말기!! 함수 호출도 같이()

function multiplyBy(num) {
  return function (x) {
    return x * num;
  };
}
function add(x, y) {
  return x + y;
}
const multiplyByTwo = multiplyBy(2);

// const multiplyByTwo = function (x) {
//     return x * 2;
//   };

const multiplyByThree = multiplyBy(3);

// const multiplyByThree = function (x) {
//     return x * 3;
//   };

console.log(multiplyByTwo(10));
console.log(multiplyByThree(10));

const result = add(multiplyByTwo(5), multiplyByThree(10));
console.log(result);
