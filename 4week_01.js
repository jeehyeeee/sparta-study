// 1. 호출 시점에 대한 제어권을 갖는다.
// setInterval : 반복해서 매개변수로 받은 콜백함수의 로직을 수행
let count = 0;
let cbFunc = function () {
  console.log(count);
  if (++count > 9) clearInterval(timer);
};
let timer = setInterval(cbFunc, 300);

// let timer = setInterval(function () {
//   console.log(count);
//   if (++count > 9) clearInterval(timer);
// }, 300);
