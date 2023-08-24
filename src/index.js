import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(document.getElementById('root')); // document.getElementById('root') 기준으로 랜더링을 함
root.render(
  // Recoil 전역상태 안에서만 관리 가능하게
  <RecoilRoot> 
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RecoilRoot>
)

// app.js가 꼭 들어올 필요는 없다.
// App을 해서 App.js가 랜더링 된다.
// age={30} 이러한 형식을 props 라고 부른다. props로 넘겨준다.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
