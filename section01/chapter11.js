// 함수
// 중복된 코드는, 동일한 기능을 일일이 타이핑 해야함
// 향후 코드의 생산성에 좋지 않음

// 함수선언
function greeting(){
  console.log('안녕하세요');
}

console.log('호출전');

// 함수호출
greeting();

console.log('호출후');

// 함수 호출 순서
// 1. 함수선언된 코드
// 2. 10라인 콘솔로그
// 3. 함수호출
// 4. 함수선언된 코드 다시 읽음
// 5. 15라인 콘솔로그


// 직사각형 넓이를 구하는 함수
function getArea(width, height){ // 매개변수
  // width, height 매개변수로 받아와서 별도 선언하지 않아도 됨
  let area = width * height; // 내부에서 값을 사용할 수 있음

  // console.log(area);

  return area; // 값을 반환 (= 반환값 = 함수결과값)
  // 리턴하위에 코드가 있어도 리턴이 호출되면 함수가 종료되어 코드 실행이 되지않음
}
getArea(10, 20); // 인수
getArea(20, 50);

let area1 = getArea(30, 20); // area1에 리턴값 받아옴

// 중첩함수 : 함수안에 함수 선언 가능
function aaa(){
  function bbb(){
  }
  bbb();
}

// 호이스팅 : 끌어올리다
// 함수호출을 먼저하고, 함수선언을 했을때 다른언어는 오류를 출력하지만 자바스크립트는 호이스팅되어 오류없음
// 자바스크립트는 유연하다