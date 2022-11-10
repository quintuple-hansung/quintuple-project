import React, { useState, useEffect } from 'react';
import Cards from '../components/main/Cards';
import TopBar from '../components/main/TopBar';
import '../styles/Main.css';
function Main() {
	return (
		<>
			<TopBar />
			<Cards />
		</>
	);
}

export default Main;
