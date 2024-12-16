// 콜백함수 : 자신이 아닌 다른 함수에, 인수로써 전달된 함수를 의미

// ex)
function main1(value){ // value라는 매개변수에 sub함수가 들어옴
  value(); // value()함수를 호출 == sub()함수를 호출 , 콘솔로그에 'sub' 찍힘
}
function sub1(){
  console.log('sub');
}
main1(sub1); // main함수에 인수로 sub함수를 넣음 ( 다른함수에 인수로써 전달된 함수를 콜백함수!! 여기선, sub()함수가 콜백함수로 사용됨 )

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