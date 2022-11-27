import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import PropTypes from 'prop-types';
import HomeIcon from '@mui/icons-material/Home';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SearchAppBar from './SearchBar';
import { Link } from 'react-router-dom';
//import { auth } from "../firebase_config";
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

export default function TopBar() {

	const navigate = useNavigate();
	const auth = getAuth();

	const onLogOutClick = async() => {
		swal('정말 로그아웃하시겠습니까?', {
			buttons: {
				cancel: '아니요', 
				'네':true,
				
			},
		}).then((value) => {
			switch (value) {
				case '네' :
					signOut(auth);
					swal('로그아웃 완료', '', "success");
					navigate('/');

				default: 
					break;
			}
		});
		//await signOut(auth);
		//alert('로그아웃되었습니다');
		//navigate('/');
	}
	return (
		<Box sx={{ flexGrow: 2 }}>
			<AppBar position="static">
				<Toolbar>
					<Link to="/main" style={{ textDecoration: 'none', color: 'inherit' }}>
						<IconButton
							edge="start"
							color="inherit"
							sx={{ width: 50, height: 50, marginInlineEnd: 5 }}>
							<HomeIcon />
						</IconButton>
					</Link>
					<Typography variant="h5" component="div" sx={{ flexGrow: 3 }}>
						quintuple
					</Typography>
					<SearchAppBar />
					<Link
						to="/mypage"
						style={{ textDecoration: 'none', color: 'inherit' }}>
						<Button color="inherit" sx={{ width: 100 }}>
							My Page
						</Button>
					</Link>
					
						<Button color="inherit" sx={{ width: 100 }} onClick={onLogOutClick}>
							Logout
						</Button>
				
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

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}
