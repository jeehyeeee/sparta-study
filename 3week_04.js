// 재귀적으로 수행한다?
// ⇒함수나 알고리즘이 자기 자신을 호출하여 반복적으로 실행되는 것을 말합니다 😎


var copyObjectDeep = function (target) {
  var result = {};
  if (typeof target === "object" && target !== null) {
    for (var prop in target) {
      result[prop] = copyObjectDeep(target[prop]);
    }
  } else {
    result = target;
  }
  return result;
};
