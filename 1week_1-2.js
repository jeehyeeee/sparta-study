function solution(absolutes, signs) {
  //   // 1. return해야 하는 answer 생성
  //   let answer = 0;
  //   // 2. 두 배열을 비교해 가면서 값을 더하거나 빼줄 것
  //   // 두 배열은 크기가 같음
  //   for (let i = 0; i < absolutes.length; i++) {
  //     // 부호(+, -)에 따른 처리
  //     if (signs[i] === true) {
  //       // 값이 true인 경우 (양수)
  //       answer += absolutes[i];
  //     } else if (signs[i] === false)
  //       // 값이 false인 경우 (음수)
  //       answer -= absolutes[i];
  //   }
  //   return answer;
  // }
  // let absolutes = [4, 7, 12];
  // let signs = [true, false, true];
  // console.log(solution(absolutes, signs));

  let answer = 0;
  for (let i = 0; i < absolutes.length; i++) {
    signs[i] ? (answer += absolutes[i]) : (answer -= absolutes[i]);
  }
  return answer;
}
let absolutes = [4, 7, 12];
let signs = [true, false, true];
console.log(solution(absolutes, signs));
