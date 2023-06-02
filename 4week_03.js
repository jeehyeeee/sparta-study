Array.prototype.map3 = function (callback, thisArg) {
  // 함수에서 return할 결과 배열
  const mappedArr = [];
  for (let i = 0; i < this.length; i++) {
    let mappedValue = callback.call(thisArg || globalThis, this[i]);
    mappedArr[i] = mappedValue;
  }
  return mappedArr;
};
let newArr = [1, 2, 3].map3(function (number) {
  return number * 2;
});
console.log(newArr);
