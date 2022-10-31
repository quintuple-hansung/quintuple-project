import React from 'react';
import Bounce from 'react-reveal/Bounce';
import Tada from 'react-reveal/Tada';
import Swing from 'react-reveal/Swing';
import { useNavigate } from 'react-router-dom';
import "../styles/Intro.css";


class IntroPage extends React.Component {

    render() {
    return (
        <div className='intro0'>
            <Bounce left cascade>
                
                <div>
                <p className='l1'>Create your own portfolio in SITE!</p>
                </div>
                
            </Bounce>
            <p> Make it easy using various templates! </p> 
            <p> If you fill in the form provided, you can create your own portfolio for free even if you don't know the coding. </p>
            <Swing>
            <button>START</button>
            {/*<button onClick={()=>this.props.navHook('/login)')}>�����ϱ�</button> */} 
            </Swing>
        </div>
        )
    }
}



/*
//�����ϱ� ��ư Ŭ���� �α��� ȭ������ 
function Start(Component) {
    return props => <Component {...props} navigate={useNavigate()} />;
}
*/

/*
const Start = async () => {
 // ȭ�� ��ȯ
 const navigate = useNavigate();

 // �����ϱ� ��ư Ŭ���� �α��� ȭ������
 const onClickStart = async () => {
 console.log('Start button pressed')
 navigate('/login');
 }
}
*/
export default IntroPage;
//export default Start;
