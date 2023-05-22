// 객체
// key-value pair
// 하나의 변수에 여러개의 값을 넣을 수 있다!

// 기본적인 객체 생성 방법
let person = {
  name: "홍길동",
  age: 30,
  gender: "남자",
};

// 생성자 함수를 이용한 객체 생성 방법
// function Person(name, age, gender) {
//   (this.name = name), (this.age = age), (this.gender = gender);
// }
// let person1 = new Person("홍길동", 30, "남자");
// let person2 = new Person("박지혜", 27, "여자");

// // 접근하는 방법
// console.log("1", person.gender);
// console.log("2", person.age);
// console.log("3", person.name);

// 객체 메소드(객체가 가진 여러가지 기능 : Object.~~~)
// Object.key()
let keys = Object.keys(person);
console.log(keys);

// values
let values = Object.values(person);
console.log(values);

// entries
// key-value를 묶어서 배열로 만든 배열(2차원 배열)

let entries = Object.entries(person);
console.log(entries);

// assign 객체복사
let newPerson = {};
Object.assign(newPerson, person, { age: 31 });
console.log(newPerson);

// 객체 비교
let person1 = {
  name: "홍길동",
  age: 30,
  gender: "남자",
};
let person2 = {
  name: "홍길동",
  age: 30,
  //   gender: "남자",
};
console.log(person1 === person2); // false , 별도 공간에 대한 주소(크기가 크기때문), 주소값을 비교하기때문에 다르다 라고 나옴
console.log(JSON.stringify(person1) === JSON.stringify(person2)); // true, 문자열로 변환 후 비교하는거기 때문에 같은 값

// 객체 병합 ... 스프레드 연산자
let perfectMan = { ...person1, ...person2 };
console.log(perfectMan);
