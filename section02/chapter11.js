// 동기와 비동기

// 동기 : 여러개의 작업을 한번에 하나씩 순서대로 처리
// 자바스크립트는 기본적으로 동기적으로 실행됨

// 동기의 단점 : 중간 쓰레드가 오래걸릴경우, 다음 쓰레드의 실행을 방해해 전체적인 프로그래밍 흐름을 방해
// 단점을 보완하기 위해 멀티쓰레드 사용 : 자바, c언어 등등 에서 사용됨


// 비동기 : 작업을 순서대로 처리하지 않음
// 동기의 단점을 보완할 수 있음
// 쓰레드의 결과값을 이용하려면 각각의 쓰레드에 콜백함수를 넣어 처리할 수 있음


console.log(1);
setTimeout(()=> {
  console.log(2);
}, 3000); 
// setTimeout()함수는 비동기적으로 처리됨
// 두번째 인수인 3000ms 이후에 콜백함수가 처리됨
console.log(3);

// 자바스크립트의 비동기 작업은 자바스크립트 엔진이 아닌 웹브라우저인 Web APIs에서 실행됨
// 자바스크립트는 쓰레드가 1개여도, 웹브라우저의 Web APIs의 도움으로 비동기 처리가 가능!