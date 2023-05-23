// 단축 속성명: property shorthand
const name = "nbc";
const newAge = 30;

// key-value 가 똑같으면 생략가능
const obj = { name: name, age: newAge }; // -> const obj = {name, age: newAge}

// 전개 구문 = spread operator
// 구조분해할당과 함께 가장 많이 사용되는 문법
let arr = [1, 2, 3];
console.log(arr);
console.log(...arr); // 대괄호를 없애고 새 구조를 입혀야할 때 사용

let newArr = [...arr, 4]; // 펼쳐진 값을 배열로[] 다시 묶어서 안의 값을 펼쳐서 추가하고싶은 내용 추가 가능
console.log(arr);
console.log(newArr);

// 객체
let user = {
  name: "nbc",
  newAge: 30,
};
let user2 = { ...user };
console.log(user2);
console.log(user);

// 나머지 매개변수(rest parameter)
function exampleFunc(a, b, c, ...args) {
  console.log(a, b, c);
  console.log(...args);
  console.log(args); // -> 스프레드연산자 사용안하면 배열 형태로 나옴
}
exampleFunc(1, 2, 3, 5, 6, 7);

// 템플릿 리터럴(Template Literal)
const testValue = "안녕하세요";
console.log(`hello world ${testValue}`);
console.log(
  `
    Hello
    My name is Jeehyee

    
    `
);  // 멀티라인 표현 가능함
