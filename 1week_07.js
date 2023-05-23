// 조건문의 중첩
let age = 20;
let gender = "여성";

// 미성년자 구분
if (age >= 18) {
  //   conzsole.log("성인입니다");
  if (gender === "여성") {
    console.log("성인 여성입니다");
  } else {
    console.log("성인 남성입니다.");
  }
} else {
  if (gender === "여성") {
    console.log("미성년 여성입니다");
  } else {
    console.log("미성년 남성입니다.");
  }
}

// 조건부 실행
let x = 10;
// if (x > 0) {
//   console.log("x는 양수입니다.");
// }
// and조건(&&)
x > 0 && console.log("x는 양수입니다."); // 앞에있는 조건이 만족하면 뒤에를 실행

// or조건(||)
// 삼항연산자와 단축평가
let y; // undefined
let z = y || 20; // y가 존재하지않는 경우면 20을 기본값으로 세팅해줘
console.log(z);
