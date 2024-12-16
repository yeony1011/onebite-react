// 1. null 병합 연산자 ( 표현식 : ?? )
// -> 존재하는 값을 추려내는 기능
// -> null, undefined가 아닌 값을 찾아내는 연산자

let var1; // 초기화 전으로 undefined
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2; // undefined와 10중에서 10을 출력함
// console.log(var4); // 10

let var6 = var2 ?? var3; // 비교하는 연산자 모두 null도 아니고, undefined가 아니라면 앞에 있는 값을 반환
// console.log(var6); // 10

// let var6 = var3 ?? var2;
// console.log(var6); // 20


// ⭐️ null 병합 연산자는 실무에서 많이 사용됨
// ex) 유저네임이 없다면 디폴트유저네임으로 노출되게 해라
let userName = "yeony";
let userNickName = "User Name";
let displayName = userName ?? userNickName;
console.log(displayName); // yeony

// let userName;
// let userNickName = "User Name";
// let displayName = userName ?? userNickName;
// console.log(displayName); // User Name


// 2. typeof 연산자
// -> 값의 타입을 문자열로 반환하는 기능을 하는 연산자

let var7 = 1;
var7 = "hello";
// 다른언어와 다르게, 자바스크립트는 하나의 변수에 다른 자료형의 값이 적용됨

let t1 = typeof var7;
console.log(t1); // String

// boolean, Number ...


// 3. 삼항 연산자
// -> 항을 3개 사용하는 연산자
// -> 조건식을 이용해서 참, 거짓일 때의 값을 다르게 변환
let var8 = 10;

// 요구사항 : 변수 res에 var8의 값이 짝수 -> "짝", 홀수 -> "홀"
// 조건식 ? 참일때 반환값 : 거짓일때 반환값
let res = var8 % 2 === 0 ? "짝수" : "홀수";