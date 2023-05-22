function solution(s) {
  var answer = true;

  // 1.  대문자로 통일
  s = s.toUpperCase();
  // 2. for문을 통해 문자열의 요소를 하나씩 비교 (p,y와 비교)
  let num = 0;
  for (let i = 0; i < s.length; i++) {
    //  여기에서 비교
    if (s[i] === "P") {
      num++;
    }
    if (s[i] === "Y") {
      num--;
    }
  }
  //3. 갯수체크
  if (num === 0) {
    answer = true;
  } else {
    answer = false;
  }
  return answer;
}
let str1 = "pPoooyY";
let str2 = "Pyy";
console.log(solution(str1));
