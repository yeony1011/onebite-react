import './App.css'
import { useReducer, useRef, createContext } from 'react'
import { Routes, Route, useSearchParams } from 'react-router-dom'
import Home from './pages/Home'
import Diary from './pages/Diary'
import New from './pages/New'
import Edit from './pages/Edit'
import Notfound from './pages/Notfound'
import { useEffect } from 'react'
import { useState } from 'react'

// import Button from './components/Button'
// import Header from './components/Header'

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지

function reducer(state, action){
  let nextState;

  switch(action.type){
    case 'INIT': 
      return action.data
    case 'CREATE': {
      nextState = [action.data, ...state];
      break;
    }
    case 'UPDATE': {
      nextState = state.map((item) => String(item.id) === String(action.data.id) ? action.data : item);
      break;
    }
    case 'DELETE': {
      nextState = state.filter((item)=> String(item.id) !== String(action.id));
      break;
    }
    default:
      return state;
  }

  localStorage.setItem('diary', JSON.stringify(nextState));
  return nextState;
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  useEffect(() => {
    const storedData = localStorage.getItem('diary');
    if(!storedData){
      setIsLoading(false);
      return;
    }

    const parsedData = JSON.parse(storedData);
    if(!Array.isArray(parsedData)){
      setIsLoading(false);
      return;
    }

    let maxId = 0;
    parsedData.forEach((item) => {
      if(Number(item.id) > maxId){
        maxId = Number(item.id);
      }
    })

    idRef.current = maxId + 1;

    dispatch({
      type: "INIT",
      data: parsedData
    })
    setIsLoading(false);
    
  }, []);

  // localStorage.setItem(key, value));
  
  // localStorage.setItem('test', 'hello');
  // localStorage.setItem('person', {name: 'yeony'}); // 객체는 저장안됨, 문자열 형태로만 보관 가능
  // localStorage.setItem('person', JSON.stringify({name: 'yeony'})); // 객체를 문자열로 전달하기 위해 JSON.stringify() 메서드 사용
  
  // console.log(localStorage.getItem('test'));
  // console.log(localStorage.getItem('person')); // JSON.stringify() 메서드사용해서 객체처럼 생긴 문자열값으로 불러와짐
  // console.log(JSON.parse(localStorage.getItem('person'))); // 문자열을 파싱해서 객체로 다시 변환시키는 기능
  
  // JSON.parse(undefined);
  // JSON.parse는 undefined 또는 null 일때 브라우저 전체 오류가 나서 주의 및 예외처리 필요!!

  // localstorage 에서 데이터 삭제 방법
  // localStorage.removeItem('test');
  // 개발자도구 -> Application -> Storage -> Local Storage -> 데이터 선택 후 backspace



  // 새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    // 새로운 일기를 추가하는 기능
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content
      }
    })
  }

  // 기존 일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        emotionId,
        content
      }
    })
  }

  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id
    })
  }

  if(isLoading){
    return <div>데이터 로딩중입니다...</div>
  }

  return (
    <>
      {/* <Header 
        title={"Header"}
        leftChild={<Button text={"Left"} />}
        rightChild={<Button text={"Right"} />}
      /> */}

      {/* <Button text={'123'} onClick={()=>{
        console.log('123번 버튼 클릭');
        
      }} />

      <Button text={'123'} type={'POSITIVE'} onClick={()=>{
        console.log('123번 버튼 클릭');
        
      }} />

      <Button text={'123'} type={'NEGATIVE'} onClick={()=>{
        console.log('123번 버튼 클릭');
        
      }} /> */}

      {/* <button onClick={()=>{
        onCreate(new Date().getTime(), 1, "Hello");
      }}>
        일기 추가 테스트
      </button> */}

      {/* <button onClick={()=>{
        onUpdate(1, new Date().getTime(), 3, "수정된 일기입니다");
      }}>
        일기 수정 테스트
      </button> */}

      {/* <button onClick={()=>{
        onDelete(1);
      }}>
        일기 삭제 테스트
      </button> */}

      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{
          onCreate,
          onUpdate,
          onDelete
        }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  )
}

export default App
