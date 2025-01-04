// 클래스형식보다 함수형식이 일반적
// 함수 컴포넌트 (함수선언식, 화살표함수 모두 가능)
// 첫글자는 대문자로 사용해야 컴포넌트로 인식됨
function Header(){ // 자식 컴포넌트
  return (
    <header>
      <h1>header</h1>
    </header>
  )
}
// const Header = () => {
//   return (
//     <header>
//       <h1>header</h1>
//     </header>
//   )
// }

export default Header;