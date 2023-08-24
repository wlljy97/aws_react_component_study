import React, { useEffect, useState } from 'react';
import MainLayout from '../../components/MainLayout/MainLayout';

function APage(props) {
    const menus = [
        {
            id:1,
            name: "나의 프로젝트"
        },
        {
            id:2,
            name: "나에게 공유된 프로젝트"
        }
    ];

    const [ result, setResult ] = useState(0);

    const [ inputValueObjs, setinputValueObjs ] = useState ({ 
        firstNum: 0,
        secondNum: 0
    });

    const [ name, setName ] = useState("");

    useEffect(
        () => { // 마운트가 일어나면 calc가 일어난다. 
        // 페이지가 열렸을때 동작을 한번 하고 다른 상태들이 변했을때도 변화를 한다. , 주로 카카오맵에서 사용
        console.log("useEffect 실행")
        calc(inputValueObjs.firstNum, inputValueObjs.secondNum);
        // calc(10, 20);
        return () => {
            console.log("언마운트")
        };
    }, [] // ← depc 의존대상 (해당상태를 대입)
    );

    const calc = (x, y) => {
        setResult(x+y);
    }

    const handleInputChange = (e) => {
        setinputValueObjs({
            ...inputValueObjs,
            [e.target.name]: parseInt(e.target.value) // [e.target.name] object key값 , (e.target.value) type이 String
        });
    }

    const handleNameInputChange = (e) => {
        setName(e.target.value)
    }
    
    return (
        <MainLayout title={"A페이지"} menus={menus} >
            <div>{result}</div>
            <div>{name}</div>
            <div>
                <input type="text" name='firstNum' onChange={handleInputChange} placeholder='1번 값' />
                <input type="text" name='secondNum' onChange={handleInputChange} placeholder='2번 값' />
                <input type="text" name='name' onChange={handleNameInputChange} placeholder='이름' />
                
            </div>
        </MainLayout>
    );
}

export default APage;