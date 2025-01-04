import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// createRoot함수를 통해 인수에 document.getElementById('root')를 넣음
// createRoot 요소를 리액트의 루트로 변환해주고 있음
// App 컴포넌트를 렌더링하는 중
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
