import './App.css'
import Header from './components/Header' // 리액트앱을 개발할때, 파일의 확장자 생략 가능!
import Main from './components/Main'
import Footer from './components/Footer'
import Button from './components/Button'

function App() { // 부모 컴포넌트 // Root 컴포넌트로 조상으로 있어야함

  const buttonProps = {
    text: '메일',
    color: 'red',
    a: 1,
    b: 2,
    c: 3
  };

  return (
    <>
      {/* <Header />
      <Main />
      <Footer /> */}

      {/* <Button text={'메일'} color={'red'} /> */}
      
      {/* 넘겨야 하는 props가 많은경우, 스프레드 연산자 사용 */}
      <Button {...buttonProps} /> 
      
      {/* props는 부모컴포넌트에서 자식컴포넌트로만 전달 가능 */}
      <Button text={'카페'} />
      
      {/* props는 javascript값 뿐만 아니라, HTML이나 React컴포넌트도 전달할 수 있음(children props로 전달됨) */}
      <Button text={'블로그'}>
        <div>자식요소</div>
      </Button>
      <Button text={'블로그'}>
        <Header />
      </Button>


      {/* <Footer text={'푸터'} /> */}
      {/* props(Properties) : 컴포넌트에 전달된 값들 */}
      {/* <h1>안녕 !</h1> */}
    </>
  )
}

export default App
