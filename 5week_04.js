// 1. car라는 클래스 만들되,
// 1) modelName 2)modelYear 3)type 4)price 네개 값 필수 입력
// 2. makeNoise() 메서드를 만들어 클락션 출력
// 2-1. 해당 자동차가 몇년도 모델인지 출력하는 메서드 만들기
// 3. 이후 자동차를 3개정도 더 만들기

// 추가 요구사항
// 1. modelName, modelYear, type, price을 가져오는 메서드
// 2. modelName, modelYear, type, price을 세팅하는 메서드
// 3. 만든 인스턴스를 통해서 마지막에 set해서 get하는 로직까지

class Car {
  constructor(modelName, modelYear, type, price) {
    this._modelName = modelName;
    this._modelYear = modelYear;
    this._type = type;
    this._price = price;
  }
  get modelName() {
    return this._modelName;
  }
  // 입력값에 대한 검증까지 가능함(setter 의 장점)
  set modelName(value) {
    // 유효성 검사
    if (value.length <= 0) {
      console.log("Error! 입력된 값이 없습니다.");
      return;
    } else if (typeof value !== "string") {
      console.log("Error! 모델명이 문자열이 아닙니다.");
      return;
    }
    // 검증이 완료된 경우에만 setting!
    this._modelName = value;
  }

  get modelYear() {
    return this._modelYear;
  }
  set modelYear(value) {
    // 유효성 검사
    if (value.length !== 4) {
      console.log("Error! 입력된 년도가 4자리가 아닙니다.");
      return;
    } else if (typeof value !== "string") {
      console.log("Error! 모델연도가 문자열이 아닙니다.");
      return;
    }
    // 검증이 완료된 경우에만 setting!
    this._modelYear = value;
  }

  get type() {
    return this._type;
  }
  set type(value) {
    // g, d, e가 아닌 경우 오류
    if (value.length <= 0) {
      console.log("Error! 타입이 입력되지 않았습니다.");
      return;
    } else if (value !== "g" && value !== "d" && value !== "e") {
      console.log("Error! 입력된 타입이 잘못 되었습니다.");
      return;
    }
    // 검증이 완료된 경우에만 setting!
    this._type = value;
  }

  get price() {
    return this._price;
  }
  set price(value) {
    if (typeof value !== "number") {
      console.log("Error! 가격으로 입력된 값이 숫자가 아닙니다.");
      return;
    } else if (value < "1000000") {
      console.log("Error! 가격은 100만원 보다 작을 수 없습니다.");
      return;
    }
    // 검증이 완료된 경우에만 setting!
    this._price = value;
  }

  // 클락션 울리는 메서드
  makeNoise() {
    console.log(this._modelName + " BBANG!");
  }
  // 몇년도 모델인지 확인하는 메서드
  printModelYear() {
    console.log(`${this._modelName}은 ${this._modelYear}년도 모델입니다.`);
  }

  // modelName 가져오는 메서드
  getModelName() {
    console.log(`모델명은 ${this._modelName} 입니다.`);
  }
  // modelYear 가져오는 메서드
  getModelYear() {
    console.log(`만들어진 연도는 ${this._modelYear}년 입니다.`);
  }
  // type 가져오는 메서드
  getCarType() {
    console.log(`종류는 ${this._type} 입니다.`);
  }
  // price 가져오는 메서드
  getCarPrice() {
    console.log(`가격은 ${this._price} 입니다.`);
  }
}
// 자동차 만들기
const car1 = new Car("benz", "2023", "gasoline", "8천만원");
const car2 = new Car("BMW", "2020", "diesel", "5천만원");
const car3 = new Car("Audi", "1980", "electronic", "6천만원");

// getter 예시
console.log(car1.modelName);
// setter 예시
car1.type = 1;
console.log(car1.type);

// car2.getModelName();
// car2.getModelYear();
// car2.getCarType();
// car2.getCarPrice();
