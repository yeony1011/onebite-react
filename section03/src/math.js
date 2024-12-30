// math 모듈

export function add(a, b){ // 함수 앞에 export를 써도 ESM 방식
  return a + b;
}

export function sub(a, b){
  return a - b;
}

// CommonJS 모듈 표현식
// 함수모듈을 내보내기 : module.exports 객체 안에 내보내고싶은 값들을 넣으면 됨 
// add라는 프로퍼티에 value로 add함수를 넣음
// module.exports = {
//   add: add,
//   sub: sub
// }

// 프로퍼티와 밸류값이 동일한 경우, 한번만 사용해도 가능 (⭐️)
// module.exports = {
//   add,
//   sub
// }

// export { add, sub }; //ESM 방식

export default function multiply(a, b) { // 기본값으로 내보내짐 // 불러올때 별도로 중괄호 없이 불러옴! // 불러올때 이름바꿔서 불러오기 가능!
  return a * b;
}