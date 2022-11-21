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
            </IntroLayout>
		);
	}
}

export default IntroTitle;
