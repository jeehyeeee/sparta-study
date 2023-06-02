// 상속(inheritance)
// class를 유산으로 내려주는 주요 기능 , 부모 <-> 자식

// 동물 전체에 대한 클래스
class Animal {
  constructor(name) {
    this.name = name;
  }
  // 메서드(짖다)
  speak() {
    console.log(`${this.name} says!`);
  }
}
// const me = new Animal("jh");
// me.speak();

class Dog extends Animal {
  // extends 키워드를 써서 animal의 상속을 받는다
  // 부모에게서 내려받은 메서드를 재정의할 수 있음
    // overriding !! 
  speak() {
    console.log(`${this.name} barks!`);
  }
}
const puppy = new Dog("복실이");
puppy.speak();
