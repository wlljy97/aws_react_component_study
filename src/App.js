/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import { SReset } from "./styles/reset";
import { Reset } from "styled-reset";
import { GSCommon } from "./styles/common";
import MainLayout from "./components/MainLayout/MainLayout";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import APage from "./pages/APage/APage";
import BPage from "./pages/BPage/BPage";
import { useState } from "react";
import CPage from "./pages/CPage/CPage";
import Principal from "./components/Principal/Principal";

const SHeader = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: #777;

`;

const SContainer = css`
  margin: 0px auto;
  width: 1170px;
  background-color: #bbb;
`;



function App() { // 컴포넌트는 대문자로 시작 (구조분해를 하는 이유: 자동화완성이 쉽게 됨)
  const [ header, setHeader ] = useState("Header");
  // const student = {
  //   code: 20230801,
  //   name: "김준일"
  // }

  // const { code, name } = student; // 비할당 구조 (객체를 분할) (자신이 가져오고 싶은것만 가져올 수 있음)

  // const name ="김준일"; // 표현식으로 나타내기

  // const jsx = 
    // <>
      {/* <div>{code}</div>
      <div>{name}</div> 
      <div>{age}</div>  */}
      {/* ↑ props.age 도 객체이다 */}
    {/* </>  */}
    // jsx는 부모요소가 하나여야 해서 위의 것들을 하나로 묶어야 한다. <> </>

  return (

    
    <>
    <Reset />
    <Global styles={GSCommon} />
    <div>
      <div css={SHeader}>
        {header}
        <div>
          <Link to={ "/a" }>A페이지</Link>
          <Link to={ "/b" }>B페이지</Link>
          <Link to={ "/c" }>C페이지</Link>
          <Link to={ "/principal" }>Principal페이지</Link>
        </div>
      </div>
      <div css={SContainer}>
          <Routes>
            <Route path="/a" element={ <APage />} /> 
            <Route path="/b" element={ <BPage setHeader={setHeader} />} />
            <Route path="/c" element={ <CPage />} />
            <Route path="/principal" element={ <Principal />} />
          </Routes>

        
      </div>
    </div>
    </>

    // <div>{name}</div> // 표현식으로 나타내기
    // jsx
  );
}

export default App;
// 함수를 바로 export 해도 상관은 없다.
// 이런식으로
// export defaul function App() {
//   return (
//     <div></div>
//   );
// }
