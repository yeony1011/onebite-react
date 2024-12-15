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

// console.log(returnFalse() && returnTure()); // False함수, false (단락평가 작동)
console.log(returnTure() && returnFalse()); // True함수, False함수, false (단락평가 미작동)

console.log(returnTure() || returnFalse()); // True 함수, true (단락평가 작동)
console.log(returnFalse() || returnTrue()); // False함수, True 함수, true (단락평가 미작동) 



function returnFalse(){
  console.log("False 함수");
  return undefined;
}
function returnTure(){
  console.log("True 함수");
  return 10;
}
console.log(returnTure() || returnFalse()); // True 함수, 10 ( Truthy한 값으로, ture가 아닌 Truthy한 값을 노출함 )
console.log(returnFalse() && returnTure()); // False 함수, undefined



// 단락 평가 활용 사례 (⭐️)
function printName(person){
  const name = person && person.name;
  console.log(name || 'person의 값이 없음');
}
printName(); // person의 값이 없음
printName({name: "조승연"}); // 조승연

// T || T -> 첫번째 T값 노출
// T && T -> 두번째 T값 노출
