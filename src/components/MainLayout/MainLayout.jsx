import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const SMainContainer = css`
    display: flex;
`;

const SSidebar = css`
    width: 300px;
    background-color: #ddd;
`;

const SContentContainer = css`
    flex-grow: 1;
    height: 700px;
    background-color: #aaa;
`;

function MainLayout({ title, menus, children }) { // 표현식 
    const testMenus = [ 1, 2, 3, 4 ];

    const testMenusMap = testMenus.map((menu) => <li>{menu}</li>);
    // map을 쓰게 되면 testMenus = [ 1, 2, 3, 4]; 이배열을 밑에 처럼 만들어 준다
    const testMenusMap2 = [ <li>1</li>, <li>2</li>,<li>3</li>, <li>4</li>]

    return (
    <>
        <h1>{title}</h1>
            <div css={SMainContainer}>
            <ul css={SSidebar}>
                {menus.map((menu) => <li key={menu.id} >{menu.name}</li>)}
            </ul>
            <div css={SContentContainer}>
                {children}
            </div>
        </div>
    </>
    );
}

export default MainLayout;