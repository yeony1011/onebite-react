// 비동기 작업 처리하기 3. Async/Await
// async/await 을 통해 비동기작업을 동기적으로 처리하는 듯 빠르게 코드 작성을 할 수 있다

// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// -> 함수가 프로미스를 반환하도록 변환해주는 그런 키워드

async function getData(){
  return {
    name: '조승연',
    id: 'yeony'
  };
}
console.log(getData()); // Promise { <fulfilled> }  
// return 값은 Promise의 결과값으로 반환됨

// return 자체에 Promise를 반환한다면, async가 따로 작동하지 않음
// async는 함수자체를 비동기적으로 만들어주는데, 비동기 반환하는 Promise가 있기 때문
// async function getData(){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({
//         name: '조승연',
//         id: 'yeony'
//       })
//     }, 1500);
//   });
// }



// await
// async 함수 내부에서만 사용이 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할
// async 키워드가 붙지 않은 함수에서 await 사용하면 syntax error 발생
// async 키워드가 붙은 함수 안에서만 await 사용가능!

// then 메서드를 활용해서 결과값을 받아와야 하지만, await를 활용해 결과값을 받을 수 있다
// function printData(){
//   getData().then((result) => {
//     console.log(result);
//   });
// }

async function printData(){
  const data = await getData();
  console.log(data);
}
printData();