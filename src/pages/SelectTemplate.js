import { useNavigate } from 'react-router-dom';

function SelectTemplate(){

    const navigate = useNavigate();

    const selectTemp1 = () => {
        navigate('/template1');
    }

    const selectTemp2 = () => {
        navigate('/template2');
    }

    return (
        <div>
            <h1>템플릿 고르는 페이지</h1>
            <h3>템플릿 이미지 추가</h3>
            <button onClick={selectTemp1}>템플릿 1</button>
            <button onClick={selectTemp2}>템플릿 2</button>
        </div>
    );
}
export default SelectTemplate;