// 5가지 배열 변형 메서드

// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
  {name: "yeony", hobby: "테니스"},
  {name: "조승연", hobby: "테니스"},
  {name: "홍길동", hobby: "독서"},
];

const tennisPeople = arr1.filter((item) => {
  if(item.hobby === "테니스") return true;
});
// const tennisPeople = arr1.filter((item) => item.hobby === "테니스"); // 조건식만 사용해 반환 가능
console.log(tennisPeople); // [{name: "yeony", hobby: "테니스"}, {name: "조승연", hobby: "테니스"}]


// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서새로운 배열로 반환

let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
  return item * 2;
});

let names = arr1.map((item) => {
  return item.name;
});
console.log(names); // ["yeony", "조승연", "홍길동"]


// 3. sort
// 현재 배열을 사전순으로 정렬하는 메서드
let arr3 = ['a', 'c', 'd', 'b'];
arr3.sort();
console.log(arr3); // ["a", "b", "c", "d"]

let arr3_2 = [10, 3, 5];
// arr3_2.sort(); // 숫자는 정렬되지 않음 (대소관계 정렬 안됨)
arr3_2.sort((a, b) => {  // 오름차순 정렬
  if(a > b){
    // b가 a 앞에 와라
    return 1; // return 1 -> sort함수에서 둘중 작은값이 앞에 옴 // b, a 배치
  }else if(a < b){
    // a가 b 앞에 와라
    return -1; // a, b 배치
  }else{
    // 두 값의 자리가 바꾸지 마라
    return 0; // a,b 자리를 그대로 유지
  }
});
// arr3_2.sort((a, b) => {  // 내림차순 정렬
//   if(a > b){
//     // a가 b 앞에 와라
//     return -1;
//   }else if(a < b){
//     // b가 a 앞에 와라
//     return 1;
//   }else{
//     // 두 값의 자리가 바꾸지 마라
//     return 0;
//   }
// });

console.log(arr3_2); // [3, 5, 10]


// 4. toSorted
// sort와 동일하게 배열을 사전순으로 정렬하는 메서드
// 정렬된 새로운 배열을 반환!

let arr4 = ['a', 'c', 'd', 'b'];
const sorted = arr4.toSorted();
console.log(arr4, sorted); // ["a", "c", "d", "b"] // ["a", "b", "c", "d"]

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드

let arr6 = ['hi', 'im', 'winter'];
const joined = arr6.join(); // 문자열로 세퍼레이터(구분자 : 기본 ,) 출력됨
// join(''); join('_');
console.log(joined); // "hi,im,winter"


