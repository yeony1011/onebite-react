// 1. 상수 객체 : 상수에 저장해 놓은 객체
const animal = {
  type: "고양이",
  name: "나비",
  color: "black"
}
// 상수의 값을 변경하는 것은 불가, 상수안의 객체 프로퍼티를 변경은 가능!
// 가능
animal.age = 2; // 추가
animal.name = "까망이"; // 수정
delete animal.color; // 삭제

// animal = 12; // 불가


// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함
const person = {}
  name : "조승연", // 일반적인 프로퍼티들은 객체의 정보를 담고 있음
  // 메서드 : 함수프로퍼티들은 메서드 형식으로 객체의 동작을 담고 있음
  sayHi : function(){ // 익명함수
    console.log('안녕');
  }
  // sayHi : () => { // 화살표함수
  //   console.log('안녕');
  // }

  // 메서드 선언
  // sayHi() {
  //   console.log('안녕');
  // }
  
;
person.sayHi(); // 함수라 호출 가능 // 안녕
// person["sayHi"]();