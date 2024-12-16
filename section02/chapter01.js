// Truty & Falsy
// -> 참이나 거짓을 의미하지 않는 값도, 조건문 내에서 참이나 거짓으로 평가하는 특징
// -> 참 같은 값, 거짓 같은 값

// 1. Falsy
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

// 2. Truthy
// -> 7가지 Falsy한 값을 제외한 나머지 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

// 3. 활용 사례
function printName(person){
  // undefined의 오류를 방지하기 위해 조건식을 넣어줌
  // if(person === undefined || person === null){
  if(!person){
    console.log("person의 값이 없음");
    return;
  }
  console.log(person.name);
}

let person; // undefined
printName(person);