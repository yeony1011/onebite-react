// 6가지의 요소 조작 메서드

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1, 2, 3];
arr1.push(4);
console.log(arr1); // [1, 2, 3, 4]
// arr1.push(4, 5, 6);
// console.log(arr1); // [1, 2, 3, 4, 5, 6]

// -> push 메서드는 변경된 배열의 길이를 반환함!
const newLength = arr1.push(4, 5, 6);
console.log(newLength); // 6


// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고, 반환
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop();
console.log(poppedItem); // 3
console.log(arr2); // [1, 2]


// 3. shift ( pop과 반대 )
// 배열의 맨 앞에 있는 요소를 제거하고, 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();
console.log(shiftedItem); // 1
console.log(arr3); // [2, 3]


// 4. unshift ( push와 반대 )
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0);
console.log(newLength2, arr4); //4, [0, 1, 2, 3]

// !주의 : shift, unshift 메서드는 배열 앞쪽으로 변경이 일어나서 index도 움직여야해서 push,pop보다 성능이 좋지 않음


// 5. slice
// 마치 가위처럼, 배열의 특정 범위를 잘라내서 새로운 배열을 반환
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5);
// (시작점, 마지막점+1)
console.log(sliced); // [3, 4, 5]

let sliced2 = arr5.slice(2);
// 자르는 지점만 정하면, 마지막점까지를 새로운 배열을 생성
console.log(sliced2); // [3, 4, 5]

console.log(arr5); // 원본배열의 값은 변경되지 않았음 (⭐️)

let sliced3 = arr5.slice(-1); // 뒤에서부터 1개만 자르기
console.log(sliced3); // [5]
let sliced4 = arr5.slice(-3);
console.log(sliced4); // [3, 4, 5]


// 6. concat
// 두개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환

let arr6 = [1, 2, 3];
let arr7 = [4, 5, 6];
let concatedArr = arr6.concat(arr7);
console.log(concatedArr); // [1, 2, 3, 4, 5, 6]