// 문자열 결합하기(concatenation)
let str1 = "hello";
let str2 = "world";
let result = str1 + str2;
let result1 = str1.concat(str2);
console.log(result);
console.log(result1);

// 문자열 자르기
let str3 = "hello, world!";
console.log(str3.substr(7, 5));
console.log(str3.slice(7, 12));

// 문자열 검색
let str4 = "hello, world!";
console.log(str4.search("world"));

// 문자열 대체
let str5 = "hello, world!";
let result2 = str5.replace("world!", "javascript!");
console.log(result2);

// 문자열 분할
let str6 = "apple, banana, kiwi";
let result3 = str6.split(",");
console.log(result3);
