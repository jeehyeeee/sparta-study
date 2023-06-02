// Static Method(=정적메소드)
// class -> 객체를 다량으로, 안전하고 정확하게 만들기 위해 사용함!
// 변하지않는 메소드들이 있음

// static키워드 사용하여 constructor 사용안함
class Calculator {
  static add(a, b) {
    console.log("더하기");
    return a + b;
  }
  static substract(a, b) {
    console.log("빼기");
    return a - b;
  }
}
console.log(Calculator.add(3, 5));
console.log(Calculator.substract(3, 5));
