// 배열 : 여러개의 값을 '순차적'으로 담을 수 있는 자료형

// 1. 배열 생성
let arrA = new Array(); // 배열 생성자
let arrB = []; // 배열 리터럴 ( 대부분 사용 )

let arrC = [1, 2, 3, true, 'hello', null, undefined, () => {}, {}, []]; // 모두 저장가능
console.log(arrC);

// 2. 배열 요소 접근
let item1 = arrC[0]; // 인덱스 : [] 대괄호 안의 숫자값, 배열의 순서
let item2 = arrC[1];

arrC[0] = 'hello';
console.log(arrC);
