import * as React from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import { Link } from 'react-router-dom';
import { margin } from '@mui/system';
import { useState, useEffect } from 'react';

/*const backgroundImage =
  '../image/background.jpg';*/

const goToLearnMore = () => {
  console.log('더 알아보기 버튼 눌림');
  window.scrollTo({
      top: 800,
      behavior: 'smooth'
  })
}

export default function IntroLayout() {

  return (
    <ProductHeroLayout
      sxBackground={{
        //backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      {/*<img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
    />*/}

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
        sx={{ minWidth: 200 }}
        onClick={goToLearnMore}
      >
        더 알아보기
      </Button>
      {/*<Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Discover the experience
      </Typography>*/}
    </ProductHeroLayout>
  );
}