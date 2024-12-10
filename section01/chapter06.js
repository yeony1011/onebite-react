// 형 변환 : 어떤 값의 타입을 다른 타입으로 변경하는 것
// ex) number -> string, string -> number

// 1. 묵시적 형 변환
// 개발자가 직접 설정하지 않아도 알아서 자바스크립트 엔진이 형 변환하는 것
let num = 10;
let str = "20";

const result = num + str;
console.log(result); // 1020


// 2. 명시적 형 변환
// 개발자가 직접 함수 등을 이용해 형 변환을 일으킴
// 문자열 -> 숫자
let str1 = "10";
let strToNum1 = Number(str1);
console.log(10 + strToNum1); // 20

// 문자자열을 Number() 통해 숫자형으로 변환하고자 할때 숫자가 아닌 NaN 출력됨
let str2 = "10개";
let strToNum2 = Number(str2);
console.log(strToNum2); // NaN

// 문자열을 parseInt() 통해 숫자형으로 변환하고자 할때 숫자로 변환됨
let strToNum3 = parseInt(str2);
console.log(strToNum3); // 10
// 단, 숫자가 앞에 있는 경우만 해당. 문자가 앞에 있는 경우도 NaN 출력됨

// 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);
console.log(numToStr1 + "입니다"); // 20입니다
