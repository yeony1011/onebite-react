// Spread 연산자와 Rest 매개변수

// 1. Spread 연산자
// -> Spread : 흩뿌리다, 펼치다 라는 뜻
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

// 배열에서 스프레드 연산자
const arrA = [1, 2, 3];
const arrB = [4, 5, 6];
// const arrC = [4, arr[0], arr[1], arr[2], 5, 6]; // 위험, 복잡
const arrC = [4, ...arrA, 5, 6];
console.log(arrC);

// 객체에서 스프레드 연산자
let obj1 = {
  a: 1,
  b: 2,
}
let obj2 = {
  ...obj1,
  c: 3,
  d: 4
}
console.log(obj2);

// 함수에서 스프레드 연산자
function funcA(p1, p2, p3){
  console.log(p1, p2, p3);
}
funcA(...arrA);


// 2. Rest 매개변수
// -> Rest : 나머지, 나머지 매개변수
function funcB(one, ...rest){ // 배열형태로 받음 // 첫번째 매개변수만 one으로 받고 나머지는 rest매개변수를 활용해 받게됨
  console.log(rest);
}
funcB(...arrA);

// ...xxx, ...asdf 등등 ...뒤에 변수명은 변경 가능!
// rest 매개변수 뒤에는 다른 매개변수가 올 수 없음! (오류)