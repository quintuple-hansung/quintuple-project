import { useNavigate } from 'react-router-dom';
import PageBar from './PageBar.js';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Temp1IMG from '../image/ex1.png';
import Temp2IMG from '../image/ex2.png';
import { textAlign } from '@mui/system';


export default function SelectTemplate(){

    const navigate = useNavigate();

    const selectTemp1 = () => {
        navigate('/template1');
    }

    const selectTemp2 = () => {
        navigate('/template2');
    }

    return (
        <div>
            
            <PageBar/>
            <center>
            <p style={{color:'rgba(46,59,85)', fontFamily:'nanum', fontSize:'1.5rem', fontWeight:'bold', textAlign:'center'}}>샘플을 보고 마음에 드는 템플릿을 골라서 포트폴리오에 적용해보세요!!</p>
            
              
            <CardActions sx={{display : 'flex', justifyContent : 'center'}} >
                <Card >
                <CardMedia
                component="img"
                height='600px'
                width='400px'
                image= {Temp1IMG}
                sx={{ padding: "1em 1em 0em 1em", objectFit: "contain" }}
                />
                <Button sx={{ margin: "3% auto" ,color:'white', bgcolor: '#2e3b55', fontFamily:'nanum', "&:hover": {backgroundColor:'#E8474C', cursor: "pointer"}}} size="big" onClick={selectTemp1}>
                TEMPLATE 1
                </Button>
                </Card>

                <Card >
                <CardMedia
                component="img"
                height='600px'
                width='400px'
                image= {Temp2IMG}
                sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
                />
                 <Button sx={{ margin: "3% auto", color:'white', bgcolor: '#2e3b55', fontFamily:'nanum', "&:hover": {backgroundColor:'#E8474C', cursor: "pointer"}}} size="big" onClick={selectTemp2}>
                TEMPLATE 2
                </Button>
                </Card>
            </CardActions>            
            <p style={{color:'rgba(46,59,85)', fontFamily:'nanum', fontSize:'1.2rem', textAlign:'center'}}>앞으로 업데이트 되는 다양한 템플릿들을 만나보세요~~</p>
            </center>
        </div>
    );
}
