import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import PropTypes from 'prop-types';
import HomeIcon from '@mui/icons-material/Home';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';

//포트폴리오 작성페이지 bar
export default function PageBar() {
	return (
		<Box sx={{ flexGrow: 2 }}>
			<AppBar position="static">
				<Toolbar  sx={{ justifyContent: 'space-between' }} style={{background : '#2E3B55'}}>
					<Link to="/main" style={{ textDecoration: 'none', color: 'inherit'}}>
						<IconButton
							edge="start"
							color="inherit"
							sx={{ width: 50, height: 50, marginInlineEnd: 5 }}>
							<HomeIcon />
						</IconButton>
					</Link>
					<Typography variant="h5" component="div" textAlign="center" sx={{ flexGrow: 3 }}  fontFamily= "esamanru Light">
						quintuple
					</Typography>
		
					<Link
						to="/mypage"
						style={{ textDecoration: 'none', color: 'inherit' }}
                        fontFamily= "esamanru Light">
						<Button color="inherit" sx={{ width: 100 }} >
							My Page
						</Button>
					</Link>
				</Toolbar>
			</AppBar>
		</Box>
	);
}

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

