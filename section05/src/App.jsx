import './App.css'
import Header from './components/Header' // 리액트앱을 개발할때, 파일의 확장자 생략 가능!
import Main from './components/Main'
import Footer from './components/Footer'

function App() { // 부모 컴포넌트 // Root 컴포넌트로 조상으로 있어야함

  return (
    <>
      <Header />
      <Main />
      <Footer />
      {/* <h1>안녕 !</h1> */}
    </>
  )
}

export default App
