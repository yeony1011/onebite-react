// (⭐️)콜백함수 : 자신이 아닌 다른 함수에, 인수로써 전달된 함수를 의미
// -> 파라미터로 변수나 값을 전달하는게 아닌, "함수" 자체를 전달
// -> 매개변수에 함수를 전달해 일회용으로 사용하기에 함수이름을 붙이지 않고 익명함수로 사용
// ->-> 코드의 간결성, 함수명 충돌방지
// -> 익명 화살표 함수로 사용
// -> 일회성이 아닌 여러 호출 함수에 재활용을 사용할 경우, 별도로 함수를 정의하고 함수의 이름만 호출 함수의 인자로 전달하는 식으로 사용 가능
// -> 콜백함수의 this는 전역객체를 가리킴 (주의!)
// --> 참조링크 : https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%BD%9C%EB%B0%B1-%ED%95%A8%EC%88%98

// ex)
function main1(value){ // value라는 매개변수에 sub1함수가 들어옴
  value(); // value()함수를 호출 == sub1()함수를 호출 , 콘솔로그에 'sub' 찍힘
}
function sub1(){
  console.log('sub');
}
main1(sub1); // main1함수에 인수로 sub1함수를 넣음 ( 다른함수에 인수로써 전달된 함수를 콜백함수!! 여기선, sub1()함수가 콜백함수로 사용됨 )

// 1. 콜백함수 : 원하는 위치에서 코드실행시킬 수 있음
function main(value){
  console.log(value); // sub함수가 노출
  value();  // i am sub 노출
}

function sub(){
  console.log('i am sub');
}

main(sub); // sub함수 == 콜백함수

// 아예 함수표현식으로 넣어도 가능
// main(function sub(){
//   console.log('i am sub');
// })

// 함수표현식으로 사용할 때는 익명함수로도 가능
// main(function (){
//   console.log('i am sub');
// })

// 화살표함수로도 가능
// main(() => {
//   console.log('i am sub');
// })


// 2. 콜백함수의 활용
function repeat(count, callback){
  for(let idx = 1; idx <= count; idx++){
    callback(idx);
  }
}

// function repeatDouble(){
//   for(let idx = 1; idx <= count; idx++){
//     console.log(idx);
//   }
// }

repeat(5, function(idx){
  console.log(idx);
});  //  1, 2, 3, 4, 5
// repeatDouble(5);  // 2, 4, 6, 8, 10
repeat(5, function(idx){
  console.log(idx * 2);
});  // 2, 4, 6, 8, 10
// repeat(5, (idx) => {
//   console.log(idx * 2);
// });  // 2, 4, 6, 8, 10

// 중복코드 발생할때 콜백함수를 활용할 수 있음