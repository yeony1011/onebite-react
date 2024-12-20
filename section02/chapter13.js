// Promise(⭐️) : 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트의 내장 객체
// -> 비동기 작업을 감싸는 객체
// Promise 효능 : 비동기 작업 실행, 상태관리, 결과 저장, 병렬 실행, 다시 실행 등등.. 비동기의 모든 것 관여

// Promise의 3가지 상태
// 1 대기(Pending) : 아직 작업이 완료되지 않은 상태
// ex) 영상 로딩중
// 2성공(Fulfilled) : 비동기 작업이 성공적으로 마무리 된 상태
// ex) 영상 로딩 완료
// 해결(resolve) : 대기 -> 성공
// ex) 시청 가능 상태
// 3 실패(Rejected) : 비동기 작업이 실패한 상태
// ex) 시청 불가능한 상태
// 거부(reject) : 대기 -> 실패
// ex) 영상 로딩 실패


// const promise = new Promise((resolve, reject) => { // 매개변수로 resolve, reject를 넣음. resolve는 성공상태로 변환하는 함수가 있고, reject는 실패상태로 변환하는 함수가 있음
//   // 비동기 작업 실행하는 함수 : executor (Promise 안의 콜백함수)

//   setTimeout(() => {
//     console.log('안녕');
//     // resolve(); // Promoise를 성공상태로 변환, 인수로 아무것도 전달하지 않으면 PromiseResult가 undefined
//     // resolve('안녕');
//     reject('왜 실패했는지 이유..');
//   }, 2000);
// });

// // console.log(promise); // Promise { <pending> }

// setTimeout(() => {
//   console.log(promise); // 인수에 아무것도 없는 경우, Promise { <fulfilled> } // 인수가 들어간 경우, Promise { '안녕' }
// }, 3000);

function add10(num){
  const promise = new Promise((resolve, reject) => {

    setTimeout(() => {
      // const num = 10;
      // const num = null; // catch 부를때
      if(typeof num === 'number'){
        resolve(num + 10);
      }else{
        reject('num이 숫자가 아닙니다');
      }
    }, 2000);
  });
  return promise;
}

// then 메서드
// -> 그 후에
// promise.then((value) => { // value : Promise의 성공했을때 Result값을 then의 인수로 받아 올 수 있음
//   console.log(value);
// });
// then 메서드는 해당 promise를 다시 반환함

// catch 메서드
// -> 그 전에
// promise.catch((error) => { // error : Promise의 실패했을때 Result값을 catch의 인수로 받아 올 수 있음
//   console.log(error);
// });
// catch 메서드는 해당 promise를 다시 반환함

// promise의 체이닝
// promise.then((value) => {
//   console.log(value);
// }).catch((error) => {
//   console.log(error);
// });

const p = add10(0);
// p.then((result) => {
//   console.log(result);

//   const newP = add10(result);
//   newP.then((result) => {
//     console.log(result);
//   });
//   return newP; // p의 반환값도 newP로 바껴짐
// });

p.then((result) => {
  console.log(result);

  const newP = add10(result);
  return newP;
}).then((result) => {
  console.log(result);
});

// 간결 방법
// add10(0).then((result) => {
//   console.log(result);

//   return add10(result);
// }).then((result) => {
//   console.log(result);
//   return add10(result);
// }).then((result) => {
//   console.log(result);
// }).catch((error) => {
//   console.log(error);
// });