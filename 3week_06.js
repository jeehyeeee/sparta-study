// 런타임
// 코드가 돌아가는 그 환경
// (1) 노드, (2)브라우저
// 전역환경에서 노드는 global객체, 브라우저는 window객체

// let func = function (x) {
//   console.log(this, x);
// };
// func(1);

// let obj = {
//   method: func,
// };
// obj.method(2);

let obj1 = {
  outer: function () {
    console.log(this); // (1)
    let innerFunc = function () {
      console.log(this); // (2), (3)
    };
    innerFunc();

    // let obj2 =  {
    //   innerMethod: innerFunc,
    // };
    // obj2.innerMethod();
  },
};
obj1.outer();
