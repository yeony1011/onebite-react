// 구조 분해 할당

// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

// 기존방식
// let one = arr[0];
// let two = arr[1];
// let three = arr[3];

let [one, two, three] = arr; // 배열의 순서에 따른 참조
console.log(one); // 1
console.log(two); // 2
console.log(three); // 3

// let [one, two] = arr;
// console.log(one, two); // 1, 2

// four가 존재하지 않는 경우 undefined 노출
// let [one, two, three, four] = arr;
// console.log(one, two, three, four); // 1, 2, 3, undefined

// four 에 기본값을 추가할 수 있음
// let [one, two, three, four = 4] = arr;
// console.log(one, two, three, four); // 1, 2, 3, 4


// 2. 객체의 구조 분해 할당
let person = {
  name : '조승연',
  age : 20,
  hobby : 'run',
}
let {name, age, hobby} = person;
console.log(name); // 조승연
console.log(age); // 20
console.log(hobby); // run

// 존재하지 않는 프로퍼티 경우 undefined 노출 (= 배열과 동일)
// let {name, age, hobby, extra} = person;
// console.log(name, age, hobby, extra); // 조승연, 20, run, undefined

// 프로퍼티에 기본값을 추가할 수 있음 (= 배열과 동일)
// let {name, age, hobby, extra = 'hello'} = person;
// console.log(name, age, hobby, extra); // 조승연, 20, run, hello

// 다른 변수에 할당 받고 싶은 경우 ( myAge 변수에 age프로퍼티 값을 할당 )
// let {name, age : myAge, hobby, extra} = person;
// console.log(name, myAge, hobby, extra);


// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby }) => {
  console.log(name, age, hobby);
}

func(person);