// 모듈 시스템 : 모듈을 다루는 시스템
// -> 기능별로 파일을 나눠서 개발
// -> 모듈을 생성하고, 불러오고, 사용하는 등의 모듈을 다루는 다양한 기능을 제공하는 시스템

// javaScript의 모듈 시스템
// Common JS(CJS)
// ES Module (ESM)

// Common JS(CJS)
// 별도 파일에서 module.exports = {} 객체를 만들어서 
// 불러오는 파일에서 require() 함수로 인자를 넣어 받아오기

// ES Mobule
// package.json에서 type: module 추가
// Common JS와 같이 사용할 수 없음
// 오류메시지 - ReferenceError: require is not defined in ES module scope, you can use import instead

