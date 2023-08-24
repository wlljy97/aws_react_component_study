import React, { useRef, useState } from 'react';
import MainLayout from '../../components/MainLayout/MainLayout';

function BPage({ setHeader }) {
    const menus = [
        {
            id:1,
            name: "내 계정 정보"
        },
        {
            id:2,
            name: "비밀번호 변경"
        },
        {
            id:3,
            name: "이메일 인증 또는 변경"
        },
        {
            id:4,
            name: "계정 업그레이드"
        }
    ];

    let [ content, setContent ] = useState("기본값"); // 값을 바꿔주는 함수가 set..

    let inputText = "";

    const inputRef = useRef();

    const handleInputChange = (e) => { // (e) e는 매개변수 event가 일어난 대상
        inputText = (e.target.value)
    }

    const handleOkClick = () => {
        setHeader(inputText); // 이렇게 해줘야지만 랜더링이 일어난다.

        // alert("확인 클릭"); // 확인 창 띄우기
        // console.log(document.querySelector("input").value);
        // console.log(inputRef.current.value); // ref를 쓰면 ref를 만들어 주어야 한다.
        // 위 두개는 같은 것이다
    }

    return (
        <MainLayout title={"B페이지"} menus={menus} >
            <div>
                <h1>{content}</h1>
                <input type="text" onChange={handleInputChange} ref={inputRef} /> 
                <button onClick={handleOkClick}>확인</button>
            </div>
        </MainLayout>
    );
    // <h1>{content}</h1> 에서 값이 변하면 랜더링이 일어나는데, 변할려면 useState를 써야한다.
}

export default BPage;