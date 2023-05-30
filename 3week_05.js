// 실행컨텍스트(스코프, 변수, 객체, 호이스팅)
// 실행할 코드에 제공할 환경 정보들을 모아놓은 객체
// 콜스택, 큐

// const x = "x";
// function c() {
//   const y = "y";
//   console.log("c");
//   debugger;
// }

// function a() {
//   const x = "x";

//   function b() {
//     const z = "z";1
//     console.log("b");
//     c();
//   }
//   b();
// }
// a();
// c();

// // ---- 1번
// var a = 1;
// function outer() {
//   function inner() {
//     console.log(a); //undefined
//     var a = 3;
//   }
//   inner(); // ---- 2번
//   console.log(a);
// }
// outer(); // ---- 3번
// console.log(a);

// function a() {
//   console.log(x);
//   var x;
//   console.log(x);
//   var x = 2;
//   console.log(x);
// }
// a(1);

// function a() {
//   var b; // 변수 선언부 호이스팅
//   function b() {} // 함수 선언은 전체를 호이스팅

//   console.log(b);
//   b = "bbb"; // 변수의 할당부는 원래 자리에

//   console.log(b);
//   console.log(b);
// }
// a();

// function a() {
//   console.log(z);
// }
// const z = "z1";
// a();


// let foo = 1;
// {
// console.log(foo);
// let foo = 2;
// }

// 아래 코드를 여러분이 직접 call stack을 그려가며 scope 관점에서 변수에 접근해보세요!
// 어려우신 분들은 강의를 한번 더 돌려보시기를 권장드려요 :)
let a = 1;
let outer = function () {
  let inner = function () {
    console.log(a); // 이 값은 뭐가 나올지 예상해보세요! 이유는 뭐죠? scope 관점에서!
    let a = 3;
  };
  inner();
  console.log(a); // 이 값은 또 뭐가 나올까요? 이유는요? scope 관점에서!
};
outer();
console.log(a); // 이 값은 뭐가 나올까요? 마찬가지로 이유도!