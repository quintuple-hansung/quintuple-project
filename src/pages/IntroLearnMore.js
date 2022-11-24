import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';


const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

class IntroLearnMore extends React.Component {
    render() {
        return (
            <Box
              component="section"
              sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'secondary.light' }}
            >
              <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
                <Box
                  component="img"
                  src="/static/themes/onepirate/productCurvyLines.png"
                  alt="curvy lines"
                  sx={{ pointerEvents: 'none', position: 'absolute', top: -180 }}
                />
                <Grid container spacing={5}>
                  <Grid item xs={12} md={4}>
                    <Box sx={item}>
                      <Box
                        component="img"
                        src="/static/themes/onepirate/productValues1.svg"
                        alt="suitcase"
                        sx={{ height: 55 }}
                      />
                      <Typography variant="h6" sx={{ my: 5 }}>
                        (사이트) 하나로 포트폴리오 준비 끝
                      </Typography>
                      <Typography variant="h5">
                        {
                          '다양한 템플릿을 이용하여 간편하게 만들어보세요!'
                        }
        
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Box sx={item}>
                      <Box
                        component="img"
                        src="/static/themes/onepirate/productValues2.svg"
                        alt="graph"
                        sx={{ height: 55 }}
                      />
                      <Typography variant="h6" sx={{ my: 5 }}>
                        다른 사람들의 포트폴리오 구경하기
                      </Typography>
                      <Typography variant="h5">
                        {
                          '다양한 분야의 포트폴리오를 자유롭게 구경하고 댓글을 남겨보세요'
                        }
        
                       
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Box sx={item}>
                      <Box
                        component="img"
                        src="/static/themes/onepirate/productValues3.svg"
                        alt="clock"
                        sx={{ height: 55 }}
                      />
                      <Typography variant="h6" sx={{ my: 5 }}>
                        언제 어디서나 자유롭게 작성
                      </Typography>
                      <Typography variant="h5">
                        {'주말엔 노트북, 출퇴근길엔 스마트폰으로 자유롭게 작성하고 필요할땐 PDF로 저장하세요 '}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Container>
            </Box>
        );
    }
}

export default IntroLearnMore;