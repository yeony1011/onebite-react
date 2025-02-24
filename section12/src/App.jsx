import './App.css'
import { useReducer } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Diary from './pages/Diary'
import New from './pages/New'
import Edit from './pages/Edit'
import Notfound from './pages/Notfound'

// import Button from './components/Button'
// import Header from './components/Header'

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지

const mockData = [
  {
    id : 1,
    createdDate : new Date().getTime(),
    emotionId : 1,
    content : "1번 일기 내용"
  },
  {
    id : 2,
    createdDate : new Date().getTime(),
    emotionId : 2,
    content : "2번 일기 내용"
  },
];

function reducer(state, action){
  return state;
}

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);

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

      <Button text={'123'} type={'pasitive'} onClick={()=>{
        console.log('123번 버튼 클릭');
        
      }} />

      <Button text={'123'} type={'nagative'} onClick={()=>{
        console.log('123번 버튼 클릭');
        
      }} /> */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  )
}

export default App
