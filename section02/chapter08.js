// 5가지 요소 순회 및 탐색 메서드

// 1. forEach
// 배열의 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
// return을 해도 undefined만 반환되며, 콜백함수의 실행 흐름에만 영향을 미치고, 메서드의 반환 값에는 영향주지 않음!

let arr1 = [1, 2, 3];
arr1.forEach(function(item, idx, arr){
  console.log(item * 2, idx);
  // 2, 0 
  // 4, 1
  // 6, 2
});

let doubleArr = [];
arr1.forEach((item) => {
  doubleArr.push(item * 2);
});
console.log(doubleArr); // [2, 4, 6]


// 2. includes
// 배열의 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3);
console.log(isInclude); // true
console.log(arr2.includes(10)); // false


// 3. indexOf : 얕은비교 (원시값만 비교 가능, 배열안의 특정 객체값을 비교할 수 없어 객체 비교는 findIndex 사용)
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [1, 2, 3];
let idx = arr3.indexOf(2);
console.log(idx); // 1
console.log(arr3.indexOf(10)); // -1 (요소가 없을때, -1 반환)

let arr3_2 = [2, 2, 2];
let idx_2 = arr3_2.indexOf(2);
console.log(idx_2); // 0 (가장 첫번째의 인덱스를 반환함)

let objectArr = [
  {name: "조승연"},
  {name: "yeony"}
];
console.log(
  objectArr.indexOf({name: "yeony"})
); // -1
console.log(
  objectArr.findIndex(
    (item) => item.name === "yeony"
  )
); // 1



// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 요소를 찾아서 인덱스를 반환하는 메서드
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr4 = [1, 2, 3];
const findIndex1 = arr4.findIndex((item) => {
  if(item == 2) return true;
});
console.log(findIndex1); // 1

const findIndex2 = arr4.findIndex((item) => {
  if(item % 2 !== 0) return true;
});
// const findIndex2 = arr4.findIndex((item) => item % 2 !== 0); // 위 식과 같은 내용. 바로 조건식을 반환값으로 사용
// const findIndex2 = arr4.findIndex((item) => item === 999); // 조건에 맞지 않으면 -1 반환
console.log(findIndex2); // 0 // indexOf처럼 가장 첫번째 인덱스를 반환


// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환
let arr5 = [
  {name: "조승연"}, 
  {name: "yeony"}
];
const finded = arr5.find((item) => item.name === "yeony");
console.log(finded); // {name: "yeony"}
