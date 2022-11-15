import React from 'react';
import Bounce from 'react-reveal/Bounce';
import Tada from 'react-reveal/Tada';
import Swing from 'react-reveal/Swing';
import Flip from 'react-reveal/Flip';
import { useNavigate, useNavigation } from 'react-router-dom';
import '../styles/Intro.css';
import AppAppBar from './AppAppBar';

class Intro extends React.Component {
	render() {
		return (
			<>
				<AppAppBar/>
				<div className="intro">
					<div className="intro0">
						<Bounce left cascade>
							<div className="title">
								<p>
									여러분만의 포트폴리오를
									<br />
									(사이트)에서 만들어보세요!
								</p>
							</div>
						</Bounce>
						<div className="intro0_text">
							<p>
								{' '}
								다양한 템플릿을 이용하여 간편하게 만들어보세요
								<br />
								주어진 양식대로 입력하면 코딩을 몰라도 나만의 포트폴리오를 무료로
								제작할 수 있습니다.
							</p>
						</div>
						<div className="intro0_start_btn">
							<Swing>
								<div className='intro0_learn_more'>
									<a id="learn_more" href="#intro1">더 알아보기</a>
								</div>
							</Swing>
						</div>
					</div>
					<div id="intro1">
						<Flip left>
							<div className="intro1_text">
								<p>
									우리 (사이트)로 제작한 <br /> 다양한 포트폴리오를 확인해보세요!{' '}
									<br />
									관심분야의 포트폴리오를 쉽게 조회할 수 있습니다.
								</p>
								<p>지금 바로 (사이트 이름)을 시작해보세요.</p>
							</div>
						</Flip>
						<div className="intro1_start_btn">
							<Swing>
								<button onClick={() => (window.location.href = '/login')}>
									시작하기
								</button>
							</Swing>
						</div>
					</div>
					<div className="intro2">
						<Flip right>
							<div className="intro2_text">
								<p>
									다른 사람의 포트폴리오에 의견을 남기고 서로 공유하며
									소통해보세요.
								</p>
								<p>마이페이지에서 나만의 포트폴리오를 생성할 수 있습니다.</p>
								<p>주어진 양식대로 입력만 하면 됩니다.</p>
								<p>제작한 포트폴리오는 pdf 파일로 저장도 가능합니다.</p>
							</div>
						</Flip>
					</div>
				</div>
			</>
		);
	}
}

export default Intro;
