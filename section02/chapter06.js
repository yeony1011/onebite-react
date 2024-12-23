// 반복문으로 배열과 객체 순회하기
// 순회 : 배열, 객체에 저장된 여러개의 값에 순서대로 하나씩 접근하는 것
// ⭐️ 배열 순회 : for of
// ⭐️ 객체 순회 : for in ( chapter15 참고 )

// 1. 배열 순회
// 1.1 배열 인덱스
// index 활용 가능
let arr = [1, 2, 3];
for(let i = 0; i < arr.length; i++) { // length : 현재 길이를 알 수 있는 프로퍼티
  console.log(arr[i]);
} // 1, 2, 3

let arr2 = [4, 5, 6, 7, 8];
for(let i = 0; i < arr2.length; i++){
  console.log(arr2[i]);
}

// 1.2 for of 반복문
// index가 없음
// 단순 순회만 있음
// arr의 값을 순회해 item에 각각 넣어짐
for(let item of arr){
  console.log(item);
}


// 2. 객체 순회
let person = {
  name : 'yeony',
  age : 20,
  hobby : 'run'
}

// 2.1 Object.keys() 사용 ( 내장함수임 )
// -> 객체에서 key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);
// console.log(keys); // [ 'name', 'age', 'hobby' ]
for(let i = 0; i < keys.length; i++){
  console.log(keys[i]);
}
for(let key of keys){
  console.log(key, person[key]);
  // key : 객체의 키 값
  // person[key] : 객체의 value 값
  // 점표기법으로는 value값 못가져 오고, 괄호표기법으로 받아올 수 있음
}

// 2.2 Object.values() 사용 ( 내장함수임 )
// -> 객체에서 value 값들만 뽑아서 새로운 "배열"로 반환
let values = Object.values(person);
// console.log(values); // [ 'yeony', 20, 'run' ]
for(let i = 0; i < values.length; i++){
  console.log(values[i]);
}
for(let value of values){
  console.log(value);
}

// 2.3 for in : 객체만을 위한 반복문
for(let key in person){
  console.log(key, person[key]);
}
for(let value in person){
  console.log(value);
}