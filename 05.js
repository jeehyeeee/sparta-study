// 스코프(변수의 영향볌위), 전역변수, 지역변수, 화살표함수

let x = 10; // 전체영역에서 선언된 변수
function printX() {
  console.log(x);
}
console.log(x);
printX();

// 스코프(변수의 영향볌위), 전역변수, 지역변수, 화살표함수

function printY() {
  let y = 10;
  console.log(y);
}
console.log(y); // y가 정의되지않았다 라는 레퍼런스 에러가 뜸
printX();

// 화살표 함수
let arrowFunc1 = (x, y) => {
  return x + y;
};
let arrowFunc2 = (x, y) => x + y;

function test(x) {
  return x;
}

let test2 = x => x;
// 매개변수 하나일때는 소괄호도 안써도됨