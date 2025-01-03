// React로 만들어진 서비스 : 넷플릭스, 페이스북, 인스타그램, 노션

// * 기술적 특징
// 1. 컴포넌트를 기반으로 UI를 표현한다
// 2. 화면 업데이트 구현이 쉽다
// 3. 화면 업데이트가 빠르게 처리된다

// 1. 컴포넌트를 기반으로 UI를 표현한다
// 컴포넌트 == (UI)구성요소
// 컴포넌트로 레고처럼 조립하듯이 사용. 모듈화하여 중복코드없이 작업

// 2. 화면 업데이트 구현이 쉽다
// 사용자의 클릭이나 행동에 따라 웹사이트 화면이 변화하는 것
// 선영형 프로그래밍 : 불필요한 과정은 생략하고 이루고자 하는 목적만 구현 ex)리액트
// 모든 컴포넌트에는 state라는 상태값을 저장할 수 있음
// state 변수의 값에 따라서 렌더링결과값이 UI를 바꿀 수 있다

// 반대로, 명령형 프로그래밍 : 목적을 이루기 위한 모든 일련의 과정을 설명하는 방식 ex) javascript

// 3. 화면 업데이트가 빠르게 처리된다
// 브라우저 렌더링 과정(Critical Rendering Path)
// HTML -> DOM(Document Object Model), CSS -> CSSOM
// DOM, CSSOM -> Render Tree (화면에 표현되야하는 모든 정보 노출 : 청사진)
// Render Tree -> layout (배치를 잡는 작업)
// layout -> paint (화면에 그리는 작업)
// 업데이트 : javascipt 변화가 생기면, Dom 부터 새로 그림 (javascript -> DOM -> Render Tree -> layout -> paint)
// Reflow : layout을 다시 그림 (오래걸림)
// Repaint : paint을 다시 그림 (오래걸림)
// 과도한 Reflow, Repaint 발생하면 웹 성능에 좋지 않음
// 변경되는 것들은 변수같은 곳에 모았다가, DOM을 한번만 수정해야함
// --> 사람이 신경쓰지 않아도, 리액트는 자동으로 해줌
// 리액트는 Virtual DOM 을 사용 -> 한번에 Actual DOM 에 적용함
