// 비동기 작업 처리하기 1. 콜백함수

// function add(a, b, callback){
//   setTimeout(() => {
//     const sum = a + b;
//     callback(sum);
//   }, 3000);
// }

// add(1, 2, (value) => {
//   console.log(value);
// });
// 비동기 처리를 하는 함수 안의 값을 함수 밖에서 사용하고 싶을때 콜백함수를 사용함!
// 비동기 처리함수 안에서 콜백함수를 부르면 됨!



// 음식을 주문하는 상황
function orderFood(callback){
  setTimeout(()=>{
    const food = '떡볶이';
    callback(food);
  }, 3000);
}

function coolDownFood(food, callback){
  setTimeout(() => {
    const coolDownedFood = `식은 ${food}`; // 템플릿 리터럴
    callback(coolDownedFood);
  }, 2000);
}

function freezeFood(food, callback){
  const freezedFood = `냉동된 ${food}`;
  setTimeout(() => {
    callback(freezedFood);
  }, 1500);
}

orderFood((food)=>{
  console.log(food);
  
  coolDownFood(food, (coolDownedFood) => { // 비동기 결과의 인수를 또다른 비동기의 인수로 전달 가능
    console.log(coolDownedFood);

    freezeFood(coolDownedFood, (freezedFood) => {
      console.log(freezedFood);
    });
  });
});

// 상위 코드보다 들여쓰기가 많이 되면 콜백지옥에 빠질 수 있음
// 콜백지옥을 막기 위해, Promise 객체를 사용함