import './App.css'
// import { useState } from 'react' // 리액트가 제공하는 내장 함수 사용
// import Bulb from './components/Bulb'
// import Counter from './components/Counter'
import Register from './components/Register'
import HookExam from './components/HookExam'

function App() {
  // const state = useState(); // useState()함수를 호출해서 state변수에 저장
  // console.log(state); // [undefined, 함수] state의 현재값, state의 상태변화 시키는 함수 두개의 값이 들어간 배열이 출력됨
  
  // const [state, setState] = useState(0); // 비구조화할당(=구조분해할당)
  
  // return (
  //   <>
  //     <h1>{state}</h1>
  //     <button onClick={()=>{
  //       setState(state + 1)
  //     }}>+</button>
  //   </>
  // )

  
  
  return (
    <>
      {/* <Bulb /> */}
      {/* <Counter /> */}
      {/* <Register /> */}
      <HookExam />
    </>
  )
}

export default App


// state : 컴포넌트의 현재 상태를 보관하는 변수
// 컴포넌트들은 state 값에 따라 현재 UI 화면을 렌더링
// 여러개의 state 만드는 것 가능

// 컴포넌트의 값이 변화 -> return문을 다시 렌더링 => 리렌더링


// 리렌더링 발생되는 세가지 상황
// 1. 자신이 관리하는 state 값이 변경될 때
// 2. 제공받는 props의 값이 변경될 때
// 3. 부모 컴포넌트가 리렌더링될 때
// -> 불필요한 리렌더링은 성정 저하의 원인
// -> 방지하기 위해, 관련없는 state는 같은 컴포넌트에 넣지 않고, 각각의 컴포넌트를 사용!