// Map, Set -> 데이터의 구성, 검색, 사용을 효율적으로 처리 > 기존의 객체 또는 배열보다
// 반복적인 부분이 중요 -> method: keys, values, entries

// (1) Map : key-value pair
// key에 어떤 데이터 타입(유형)도 다 들어올 수 있다. 키가 정렬된 순서로 저장되기 때문!
// 기능: 검색, 삭제, 제거, 여부 확인

const myMap = new Map();
myMap.set("one", 1);
myMap.set("two", 2);
myMap.set("three", 3);

// console.log(myMap.keys());
for (const key of myMap.keys()) {
  // key = 변수명, of뒤에(myMap.keys)가 하나하나 돌면서 배정되는 값이 key(변수명)에 하나하나 배정된 것
  console.log(key);
}
// console.log(myMap.values());
for (const value of myMap.values()) {
  console.log(value);
}
// console.log(myMap.entries());
for (const entry of myMap.entries()) {
  // 키와 값을 한 쌍의 배열로 묶은 것을 이터레이터로 감싸줌
  console.log(entry);
}

console.log(myMap.size);  // map의 사이즈(길이)
console.log(myMap.has("two"));  // key 기반 검색

