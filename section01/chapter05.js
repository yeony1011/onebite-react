// 자료형(Data Type) : 원시타입, 객체타입

// ᄂ 원시타입 (기본형타입)
// ᄂᄂ Number (모듈러 연산 가능)
// ᄂᄂ String (템플릿 리터럴 문법 가능)
// ᄂᄂ Boolean
// ᄂᄂ Null
// ᄂᄂ Undefined

// ᄂ 객체타입
// ᄂᄂ Object
// ᄂᄂᄂ Array
// ᄂᄂᄂ Function
// ᄂᄂᄂ RegexExp


// 1. Number
let num1 = 27;
let num2 = 3.14;
let num3 = -20;

let inf = Infinity;
let mInf = -Infinity;

let nan = NaN;

// 2. String
let myName = '이정환';
let myLocation = '목동';
let introduce = myName + myLocation;

let introduceText = `${myName}은 ${myLocation}에 거주합니다.`; // 템플릿 리터럴

// 3. Boolean
let isSwitchOn = true;
let isEmpty = false;

// 4. Null (아무것도 없다)
let empty = null;

// 5. Undefined
let none; // 초기화 안된 변수, 자동으로 들어가는 값, 존재하지 않는 변수를 부를때 노출 됨