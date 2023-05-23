// function - input, output

// 함수 선언문
// function add(매개변수=input) {
// 함수 내부에서 실행할 로직
// }
// 두개의 숫자를 입력 받아서 덧셈을 한 후 내보내는 함수
function add(x, y) {
  return x + y;
}

// 함수 표현식
let add2 = function (x, y) {
  return x + y;
};

// 함수를 호춣한다(=사용한다)
// 함수명() -> add(입력값)
// console.log(add(2, 3));

// let fundtionResult = add(3, 4);
// console.log(fundtionResult);

// add2를 가지고 10과 20을 더한 값 출력
function add3(a, b) {
  return a + b;
}
console.log(add3(10, 20));

let add4 = function (c, d) {
  return c + d;
};
// console.log(add4(10, 20));
let result = add4(10, 20);
console.log(result); 

// input: 함수의 input -> 매개변수(매개체가 되는 변수)
// output: return문 뒤에 오는 값 -> 반환값
