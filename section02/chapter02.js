// 단락 평가 : 첫번째 피연산자로 연산에 충족하면 다음연산자를 접근조차 하지 않음

// ex)
// let varA = false;
// let varB = true;

// // AND 연산자
// console.log(varA && varB); // false

// // OR 연산자
// console.log(varB || varA); // true


function returnFalse(){
  console.log("False 함수");
  return false;
}
function returnTure(){
  console.log("True 함수");
  return true;
}

console.log(returnFalse() && returnTure()); // False함수, false (단락평가 작동)
console.log(returnTure() && returnFalse()); // True함수, False함수, false (단락평가 미작동)

console.log(returnTure() || returnFalse()); // True 함수, true (단락평가 작동)
console.log(returnFalse() || returnTrue()); // False함수, True 함수, true (단락평가 미작동) 



function returnFalse2(){
  console.log("False 함수");
  return undefined;
}
function returnTure2(){
  console.log("True 함수");
  return 10;
}
console.log(returnTure2() || returnFalse2()); // True 함수, 10 ( Truthy한 값으로, ture가 아닌 Truthy한 값을 노출함(⭐️) )
console.log(returnFalse2() && returnTure2()); // False 함수, undefined



// 단락 평가 활용 사례 (⭐️)
// gpt 설명 : https://chatgpt.com/share/6762a8ba-c7ac-8003-8556-5c0a6ed944ee

function printName(person){
  const name = person && person.name;
  console.log(name || 'person의 값이 없음');
}
printName(); // person의 값이 없음
printName({name: "조승연"}); // 조승연


// [⭐️ 정리 : 단락평가 Truty & Falsy]
// T || T -> 첫번째 T값 노출
// T && T -> 두번째 T값 노출

// && 연산자 : 좌항이 truthy 일때만 우향을 평가
// || 연산자 : 좌항이 falsy 일때만 우향을 평가

// 단락평가를 활용하는 이유
// - 안전한 객체 접근 : 객체가 undefined일 수 있는 상황에서 속성을 안전하게 접근
// - 기본값 처리 : 값이 없는 경우 기본값을 설정할 때 유용