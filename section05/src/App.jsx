import './App.css'
import { useState } from 'react' // 리액트가 제공하는 내장 함수 사용

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

  const [count, setCount] = useState(0);
  const [light, setLight] = useState('OFF');
  
  return (
    <>
    <div>
      <h1>{light}</h1>
      <button onClick={()=> {
        setLight(light === 'OFF' ? 'ON' : 'OFF')
      }}>전구 {light == 'OFF' ? '켜기' : '끄기'}</button>
    </div>
      <div>
        <h1>{count}</h1>
        <button onClick={()=>{
          setCount(count + 1)
        }}>+</button>
      </div>
    </>
  )
}

export default App


// state : 컴포넌트의 현재 상태를 보관하는 변수
// 컴포넌트들은 state 값에 따라 현재 UI 화면을 렌더링
// 여러개의 state 만드는 것 가능

// 컴포넌트의 값이 변화 -> return문을 다시 렌더링 => 리렌더링