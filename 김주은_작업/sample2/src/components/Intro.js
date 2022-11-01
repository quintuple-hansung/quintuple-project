import React from 'react';
import Bounce from 'react-reveal/Bounce';
import Tada from 'react-reveal/Tada';
import Swing from 'react-reveal/Swing';
import { useNavigate, useNavigation } from 'react-router-dom';
import "../styles/Intro.css";

class Intro extends React.Component {
    

    render() {
    return (
        <body>
        <div className='intro0'>
            <Bounce left cascade>
                
                <div>
                <p className='l1'>여러분만의 포트폴리오를 (사이트)에서 만들어보세요!</p>
                </div>
                
            </Bounce>
            <p> 다양한 템플릿을 이용하여 간편하게 만들어보세요 </p> 
            <p> 주어진 양식대로 입력하면 코딩을 몰라도 나만의 포트폴리오를 무료로 제작할 수 있습니다.</p>
            <Swing>
            <button>시작하기</button>
            <button onClick={()=>window.location.href='/login'}>시작하기</button> 
            </Swing>
        </div>
        </body>
        )
    }
}


export default Intro;
