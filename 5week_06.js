// 1. car라는 클래스 만들되,
// 1) modelName 2)modelYear 3)type 4)price 네개 값 필수 입력
// 2. makeNoise() 메서드를 만들어 클락션 출력
// 2-1. 해당 자동차가 몇년도 모델인지 출력하는 메서드 만들기
// 3. 이후 자동차를 3개정도 더 만들기

// 추가 요구사항
// 1. 전기차 클래스 -> car 클래스의 상속을 받음

class Car {
  constructor(modelName, modelYear, type, price) {
    this.modelName = modelName;
    this.modelYear = modelYear;
    this.type = type;
    this.price = price;
  }
  // 클락션 울리는 메서드
  makeNoise() {
    console.log(this.modelName + " BBANG!");
  }
  // 몇년도 모델인지 확인하는 메서드
  printModelYear() {
    console.log(`${this.modelName}은(는) ${this.modelYear}년도 모델입니다.`);
  }
}
// 자동차 만들기
// const car1 = new Car("benz", "2023", "gasoline", "8천만원");
// const car2 = new Car("BMW", "2020", "diesel", "5천만원");
// const car3 = new Car("Audi", "1980", "electronic", "6천만원");
// // console.log(car1);
// car1.printModelYear();
// car2.printModelYear();
// car3.printModelYear();

// 전기차 클래스
// 기본적으로 상속받을 때 constructor 쓸 필요 없지만 재정의(overriding)가 필요하면 써줘야함
class ElectronicCar extends Car {
  constructor(modelName, modelYear, price, chargeTime) {
    // type이라는 속성은 지정해놨기때문에 따로 받을 필요 X
    // Car(부모 class)에게도 알려주기
    super(modelName, modelYear, "e", price); // 부모의 constructor, super키워드
    this._chargeTime = chargeTime;
  }
  set chargeTime(value) {
    this._chargeTime = value;
  }
  get chargeTime() {
    return this._chargeTime;
  }
}
const eleCar1 = new ElectronicCar("테슬라", "2023", 9000, 60);
eleCar1.makeNoise();
eleCar1.printModelYear();
console.log("------------------------");
console.log(eleCar1._chargeTime);
eleCar1.chargeTime = 20;
console.log(eleCar1._chargeTime);
