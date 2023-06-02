// getters, setters
// 프로퍼티(constructor)
// setter 장점 : 외부로부터 값이 들어왔을때 내부에서 검증 후 세팅할 수 있음
// 언더스코어(언더바 _ ) == private의 의미를 가짐

class Rectangle {
  constructor(width, height) {
    this._width = width; // 이 인스턴스 내에서만 쓰기로 한 변수로 분리를 하겠다 라는 뜻
    this._height = height;
  }
  // width를 위한 getter
  get width() {
    return this._width;
  }
  // width를 위한 setter
  set width(value) {
    // 검증 1 : value가 음수이면 오류
    if (value <= 0) {
      console.log("Error! 가로 길이는 0보다 커야 합니다");
    } else if (typeof value !== "number") {
      console.log("Error! 가로 길이가 숫자 타입이 아닙니다");
    }
    this._width = value;
  }
  // height를 위한 getter
  get height() {
    return this._height;
  }
  // height를 위한 setter
  set height(value) {
    if (value <= 0) {
      console.log("Error! 세로 길이는 0보다 커야 합니다");
    } else if (typeof value !== "number") {
      console.log("Error! 세로 길이가 숫자 타입이 아닙니다");
    }
    this._height = value;
  }
  // getArea : 가로 * 세로 => 넓이
  getArea() {
    const a = this._width * this._height;
    console.log(`넓이는 ${a} 입니다.`);
  }
}
// // instance생성
const rect1 = new Rectangle(7, 20);
rect1.getArea();
// const rect2 = new Rectangle(15, 40);
// const rect3 = new Rectangle(30, 50);
