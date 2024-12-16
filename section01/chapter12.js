// 함수표현식

// 1. 일반적인 함수선언 (호이스팅 됨)
function funcA(){
  console.log('funcA');
  
}

let varA = funcA;
console.log(varA); // 함수 자체가 출력됨
varA(); // 함수가 변수에 담겨져 함수의 값이 출력됨

// 2. 함수표현식 (호이스팅 되지 않음)
let varB = function funcB(){
  console.log('funcB');
  
}
varB();
// 단, funcB는 선언식이 아니라, varB의 값으로 들어간 케이스임.
// funcB()를 호출했을때, 정의되지 않았다고 에러뜸 (not defined)

// 해서, 처음 함수를 만들때 이름을 생략해도 무방함!!!
// ex) let varB = function (){ // 익명함수
//                   console.log('funcB');
//                }

// 익명함수 : 이름이 없다


// 3. 화살표 함수
let varC = () => {
  return 1;
};

// 한줄표현가능
// let varC = () => 1; // 31라인 처럼, 똑같이 1을 반환함 (같은내용)

console.log(varC());

// 매개변수 필요할 때
let varC_2 = (value) => value + 1;
console.log(varC_2(10)); // 11