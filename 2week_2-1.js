// function solution(strings, n) {
//   let answer = [];

//   // 1. 문자열 가장 앞 글자를 붙여서 배열 만들기
//   for (let i = 0; i < strings.length; i++) {
//     strings[i] = strings[i][n] + strings[i];
//     // car -> a+ car -> acar
//   }
//   // 2. 해당 배열을 사전 순으로 정렬(sort)
//   strings.sort();

//   // 3. 앞글자 제거 후 리턴
//   for (let j = 0; j < strings.length; j++) {
//     strings[j] = strings[j].replace(strings[j][0], "");
//     answer.push(strings[j]);
//   }
//   console.log(answer);

//   return answer;
// }
// solution(["abce", "abcd", "cdx"], 2);

function solution(flo) {
  let answer = Math.trunc(flo);
  return answer;
}
function solution(num_list) {
  let sum = 0;
  let mul = 1;
  // 넘리스트의 길이를 순회
  for (let i = 0; i < num_list.length; i++) {
    // 만약에 넘리스트의 길이가 11이상이면 모든 원소의 합
    if (num_list.length >= 11) {
      sum += num_list[i];
      answer = sum;
      // 10이하면 모든 원소의 곱
    } else {
      answer = mul *= num_list[i];
      answer = mul;
    }
  }
  return answer;
}
console.log(num_list[(1, 3, 4, 5, 6, 4, 3, 6, 5)]);

