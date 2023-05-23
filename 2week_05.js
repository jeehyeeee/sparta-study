// Set 고유한 값을 저장하는 자료구조다. 값만 저장하고 key는 저장하지않음
// 값이 중복되지 않는 유일한 요소로만 구성된다. 중복되면 1개의 값으로 침
// 값 추가, 검색, 삭제, 모든 값 제거, 존재 여부 확인

const mySet = new Set();
mySet.add("value1");
mySet.add("value2");
mySet.add("value3");
mySet.add("value9");
mySet.add("value6");

console.log(mySet.size);
console.log(mySet.has("value1"));
console.log(mySet.has("value4"));
console.log(mySet.has("value3"));

// Iterator, 반복자
for (const value of mySet.values()) {
  console.log(value);
}
