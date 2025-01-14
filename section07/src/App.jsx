import './App.css'
import Viewer from './components/Viewer';
import Controller from './components/Controller';
import Even from './components/Even';
import { useState, useEffect, useRef } from 'react';

function App() {

  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  const isMount = useRef(false);

  // useEffect(() => {
  //   console.log(`count: ${count} / input: ${input}`);
  // }, [count, input]); // 배열의 값이 변경될 때마다, 첫번째 인수의 콜백함수가 실행됨
  // useEffect는 배열에 의존함
  // 의존성 배열 (dependency array : deps)

  // 라이프사이클 
  // 1. 마운트 : 탄생
  useEffect(() => {
    console.log('mount');
  }, []);
  // 콜백함수는 마운트된 이후에 다시는 실행되지 않음
  // 마운트되고 딱한번만 실행이 필요한 경우, useEffect 호출하고 deps에 빈배열

  // 2. 업데이트 : 변화, 리렌더링
  useEffect(() => {
    if(!isMount.current){
      isMount.current = true;
      return;
    }
    console.log('update');
  });
  // 마운트를 포함해서 업데이트 될때마다 출력됨
  // 진짜 업데이트 될때만 체크하고 싶다면, useRef 사용
  // 3. 언마운트 : 죽음

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input type="text" value={input} onChange={(e)=>{
          setInput(e.target.value)
        }} />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  )
}

export default App
