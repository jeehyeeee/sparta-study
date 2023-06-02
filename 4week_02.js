// 제어권
// 인자에 대한 제어권을 가짐
// map

const newarr = [10, 20, 30].map((currentValue, index) => {
  console.log(currentValue, index);
  return currentValue + 5;
});

// 결과는 ?
console.log(newarr);

// index,currentValue는 사람이 이해할 수 있는 변수명일뿐.

const newarr1 = [10, 20, 30].map((index, currentValue) => {
  console.log(index, currentValue);
  return currentValue + 5;
});
console.log(newarr1);
// currentValue를 index로 이해해서 [5,6,7] 이라는 결과가 나옴 -> [0 + 5, 1 + 5, 2 + 5]
// 변수명은 뭐가됐든 컴퓨터는 두번째 인자를 index로 인식함
