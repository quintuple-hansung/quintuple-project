import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import Button from '@mui/material/Button';
import IntroLayout from './IntroLayout';

class IntroTitle extends React.Component {
	render() {
		return (
            <IntroLayout
                sxBackground={{
                    //backgroundImage: `url(${backgroundImage})`,
                    backgroundColor: '#7fc7d9',
                    backgroundPosition: 'center',
                }}
            >
            <img
                style={{ display: 'none' }}
                //src={backgroundImage}
                alt="increase priority"
            />
            <Typography color="inherit" align="center" variant="h2" marked="center">
                여러분만의 포트폴리오를<br/>(사이트)에서 만들어보세요!
            </Typography>
            <Typography
                color="inherit"
                align="center"
                variant="h5"
                sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
            >
                다양한 템플릿을 이용하여 간편하게 만들어보세요<br />
                주어진 양식대로 입력하면 코딩을 몰라도 나만의 포트폴리오를 무료로 제작할 수 있습니다.
            </Typography>
            <Button
                color="secondary"
                variant="contained"
                size="large"
                component="a"
                href="/IntroLearnMore"
                sx={{ minWidth: 200 }}
            >
                더 알아보기
            </Button>
            </IntroLayout>
            /*<div className="intro">
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
            </div>*/
		);
	}
}

export default IntroTitle;
