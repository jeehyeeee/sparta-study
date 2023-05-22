// 조건문
//  if문
let x = 10;
// if(조건 -> true 또는 false가 들어가는 문){}

//
let y = "hello world";
// y의 길이가 5보다 크거나 같으면 길이를 console.log로 출력
if (y.length >= 5) {
  console.log(y.length);
}

// switch문
// 변수의 값에 따라 여러개의 경우(case) 중 하나를 선택
let fruit = "banana1";

switch (fruit) {
  case "apple":
    console.log("사과입니다");
    break;
  case "banana":
    console.log("바나나입니다");
    break;
  case "kiwi":
    console.log("키위입니다");
    break;
  default:
    console.log("아무것도 아닙니다.");
    break;
}
