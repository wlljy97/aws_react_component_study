import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import P1 from './P1/P1';
import { useRecoilState } from 'recoil';
import { principalState } from '../../store/principalStore';

const SContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px auto;
    width: 500px;
    height: 500px;
    background-color: #333;
`;


function Principal(props) { // 전역상태
    const [ principal, setPrincipal ] = useRecoilState(principalState); //principalState 은 principalStore에 연결 되어 있음
    const [ num, setNum ] = useState(0);

    useEffect(() => {
        setPrincipal({
            ...principal,
            username: "abcdef"
        })
    },[]);

    return (
        <div css={SContainer}>
            <h1>{num}</h1>
            <P1 num={num} setNum={setNum} />
        </div>
    );
}

export default Principal;