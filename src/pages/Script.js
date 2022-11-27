import React , {useState} from 'react';
import IMG1 from '../image/img1.jpg';
import IMG2 from '../image/img2.jpg';
import IMG3 from '../image/img3.jpg';
import IMG4 from '../image/img4.jpg';
import '../styles/Script.css';
import Tada from 'react-reveal/Tada';
import Flip from 'react-reveal/Flip';
import Bounce from 'react-reveal/Bounce';
import Swing from 'react-reveal/Swing';
import { Button } from 'react-bootstrap';
import { useNavigate, useNavigation } from 'react-router-dom';
import '../font/font.css';

const Script = () => {

  
const navigate = useNavigate();

const navigateToLogin = () => {
  navigate("/login");
}

  const introduction = [
    {
      id: 1,
      title: '사이트 하나로 포트폴리오 준비 끝',
      img: IMG1,
      description:
        '다양한 템플릿을 이용하여 간편하게 만들어보세요!',
  
    },
    {
      id: 2,
      title: '다른 사람들의 포트폴리오 구경하기',
      img: IMG2,
      description:
        '다양한 분야의 포트폴리오를 자유롭게 구경해보세요' 
    },
    {
      id: 3,
      title: '마음에 드는 포트폴리오를 골라보세요',
      img: IMG3,
      description:
        '마음에 드는 포트폴리오에 댓글을 남기고 사람들에게 공유해보세요' 
    },
    {
      id: 4,
      title: '언제 어디서나 자유롭게 작성',
      img: IMG4,
      description: '노트북으로, 스마트폰으로 자유롭게 작성하고 필요할땐 PDF로 저장하세요',

    }
  ];

  return (
    
    <section id="script">
      <div className="container script__container">
        {introduction.map((pro) => (
          <article className="script__item" key={pro.id}>
            <div className="script__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <Bounce>
            <div className="script__item-content">
              <h2>{pro.title}</h2>
              <p>{pro.description}</p>
            </div>
            </Bounce>
          </article>
        ))}
       <Button onClick={navigateToLogin}> 지금 시작하기 </Button> 
      </div>
     
   
    </section>
  );
};

export default Script;

/*
export default function Script() {
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      height="140"
      image= 'IMG1'
      alt="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Lizard
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </Typography>
    </CardContent>
    
  </Card>
  )
}
*/