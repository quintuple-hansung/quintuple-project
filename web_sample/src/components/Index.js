import React from "react";
import Flip from 'react-reveal/Flip';
import '../styles/Index.css';

class Introduce1 extends React.Component {
    render() {
        return (
            <div className="intro">
                <div className="intro1">
                    <Flip left>
                        <p>우리 (사이트이름)으로 제작한 다양한 포트폴리오를 확인해보세요.</p>
                        <p>관심분야의 포트폴리오를 쉽게 조회할 수 있습니다.</p>
                        <p>지금 바로 (사이트 이름)을 시작해보세요.</p>
                    </Flip>
                </div>
                <div className="intro2">
                    <Flip right>
                        <p>다른 사람의 포트폴리오에 의견을 남기고 서로 공유하며 소통해보세요.</p>
                        <p>마이페이지에서 나만의 포트폴리오를 생성할 수 있습니다.</p>
                        <p>주어진 양식대로 입력만 하면 됩니다.</p>
                        <p>제작한 포트폴리오는 pdf 파일로 저장도 가능합니다.</p>
                    </Flip>
                </div>
            </div>          
        )
    }
}

export default Introduce1;