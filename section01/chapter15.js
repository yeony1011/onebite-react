// 객체 : 객체를 이용하면 현실세계에 존재하는 어떤 사물이나 개념을 표현하기 용이함

// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)

// 2. 객체 프로퍼티 (객체 속성)
let person = {
  name : '조승연', // key : value
  age : 20,      // key는 따옴표로 감싸지 않아도 되지만, key가 띄어쓰기가 있다면 따옴표로 감싸야함!
  hobby : 'run',
  "like cat" : true
};

// 3. 객체 프로퍼티 다루는 방법
// 3.1. 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name;
console.log(name); // 조승연

let name2 = person.name2;
console.log(name2); // 객체에 없는 키값에 접근하면, undefined

let age = person['age']; // key를 따옴표를 포함해 문자열처럼 작성해야함
// let age = person["age"]; // 홑,쌍 다 됨
console.log(age);

let age2 = person['age2'];
console.log(age2); // 객체에 없는 키값에 접근하면, undefined

// 접근하고자 하는 키값을 변수에 담아서 프로퍼티를 꺼낼때
// 동적인 작업이 필요한 경우, 괄호 표기법 사용하고 그렇지 않으면 일반적으로 점 표기법 사용!
let property = "hobby";
let hobby = person[property];
console.log(hobby); // run

// 3.2. 새로운 프로퍼티를 추가하는 방법
person.job = "UI developer";
person["favoriteFood"] = "떡볶이";

// 3.3. 프로퍼티 수정하는 방법
person.job = "FE developer";
person["favoriteFood"] = "candy";

// 3.4. 프로퍼티 삭제하는 방법
delete person.job;
delete person["favoriteFood"];

// 3.5. 프로퍼티의 존재 유무를 확인하는 방법 ( in 연산자 )
let result1 = "name" in person; // name이라는 key가 person이라는 객체에 있는지 확인 // 결과는 boolean값
console.log(result1); // true

let result2 = "cat" in person;
console.log(result2); // false