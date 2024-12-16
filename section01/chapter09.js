// 조건문
// 특정 조건을 만족했을 때에만 실행되는 코드를 작성하기 위한 문법
// if, switch 조건문


// 1. if 조건문
let num = 10;
if(num >= 10){ // 조건문
  console.log('num은 10이상입니다'); // 조건이 참일때 코드
}else if(num >= 5){ // 다른 조건문
  console.log('num은 5이상입니다');
}else{
  console.log('조건이 거짓입니다.');  // 조건이 거짓일때 코드
}


// 2. switch 조건문
// -> if문과 기능 동일
// -> 다수의 조건을 처리할때 if문 보다 직관적
// -> case문에 중괄호 생략 가능

let animal = 'cat';
switch(animal){
  case 'cat': {
    console.log('cat');
    break;
  }
  case 'dog': {
    console.log('dog');
    break;
  }
  case 'bear': {
    console.log('bear');
    break;
  }
  default: {
    console.log('animal');
    break;
  }
}