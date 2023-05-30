// 명시적 thisbinding
// call, apply, bind

let func = function (a, b, c) {
  console.log(this, a, b, c);
};
// no binding
// func(1, 2, 3);
// // 명시적바인딩
// func.call({ x: 1 }, 1, 2, 3);

let obj = {
  a: 1,
  method: function (x, y) {
    console.log(this.a, x, y);
  },
};
// method 함수 안의 this는 항상 obj
// obj.method(2, 3);
obj.method.call({ a: 4 }, 5, 6);
// call, apply는 동일한 역할이지만, 뒤에 있는 매개변수를 대괄호로 묶어주어야함!
// 즉시 실행하는 메서드
obj.method.apply({ a: 4 }, [5, 6]);

// 유사배열객체
// length를 설정해야함. 실제 배열의 메소드(push, slice등)은 쓸 수 없음
// Array.from
// 객체 -> 배열로 변경해주는 메소드

let obj1 = {
  0: "a",
  1: "b",
  2: "c",
  length: 3,
};
let arr = Array.from(obj1);
// arr라는 배열에 obj1의 객체를 넣고 배열형태로 변환시켜줌
console.log(arr);
