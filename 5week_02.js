// 1. car라는 클래스 만들되,
// 1) modelName 2)modelYear 3)type 4)price 네개 값 필수 입력
// 2. makeNoise() 메서드를 만들어 클락션 출력
// 2-1. 해당 자동차가 몇년도 모델인지 출력하는 메서드 만들기
// 3. 이후 자동차를 3개정도 더 만들기

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
        console.log(`${this.modelName}은 ${this.modelYear}년도 모델입니다.`)
    }
}
// 자동차 만들기
const car1 = new Car("benz", "2023", "gasoline", "8천만원");
const car2 = new Car("BMW", "2020", "diesel", "5천만원");
const car3 = new Car("Audi", "1980", "electronic", "6천만원");
// console.log(car1);
car1.printModelYear();
car2.printModelYear();
car3.printModelYear();


