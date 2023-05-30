// bind 메서드
// call, apply와는 다르게 즉시 호출하지않음
// 바인딩해서 새로운 함수를 리턴함
// 목적 1) 함수에 this를 미리 적용함 2) 부분 적용 함수

var func = function (a, b, c, d) {
  console.log(this, a, b, c, d);
};
func(1, 2, 3, 4); // node객체

// // 함수에 this 미리 적용
let bindFunc1 = func.bind({ x: 1 }); // 바로 호출되지 않음
bindFunc1(5, 6, 7, 8); // { x: 1 } 5 6 7 8

// // 부분 적용 함수 구현
var bindFunc2 = func.bind({ x: 1 }, 4, 5); // 4와 5를 미리 적용
bindFunc2(6, 7); // { x: 1 } 4 5 6 7
bindFunc2(8, 9); // { x: 1 } 4 5 8 9

// name 프로퍼티
// 'bound'라는 접두어 (bind의 수동태, ~가 되었다), 추적하기 쉽다!
console.log(func.name);
console.log(bindFunc1.name);
console.log(bindFunc2.name);
