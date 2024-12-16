// 스코프
// -> 범위( 중괄호 안의 영역 , 접근가능한 영역 )
// -> 변수나 함수에 접근하거나 호출할 수 있는 범위
// 전역스코프 : 전체영역 접근가능
// 지역스코프 : 특정영역 접근가능

let a = 1; // 전역 스코프

function funcA(){
  let b = 2; // 지역 스코프
  console.log(a);

  function funcB(){} // '함수선언식'은 함수안에서 지역 스코프!
}

funcA();
// console.log(b);

if(true){
  let c = 1; // 지역 스코프
  function funcB(){} // if문이나 for문에서는 지역스코프 갖지않음
}
// console.log(c);

for(let i = 0; i <10; i++){ // 지역 스코프
  let d = 1; // 지역 스코프
  function funcB(){} // if문이나 for문에서는 지역스코프 갖지않음
}
