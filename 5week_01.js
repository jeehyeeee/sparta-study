// 클래스라는 설계도를 만든다
class Person {
  // 사람의 필수요소
  // name, age
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // 메서드 형태의 동사표현
  //   sayHello() {
  //     // console.log("hello");
  //     console.log(this.name)
  //   }

  printMyAge() {
    console.log(`${this.name}는 ${this.age}살 입니다.`);
  }
}
// 설계도를 통해 인스턴스를 만들기
// 이름은 지혜고 나이는 27살인 사람을 하나 만들어라(설계도에 근거해서)
const person1 = new Person("지애", 27);
const person2 = new Person("처로", 31);
// console.log(person1, person2);
// person1.sayHello();
// person2.sayHello();
person1.printMyAge();
person2.printMyAge();
