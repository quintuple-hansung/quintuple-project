import React, { useState } from 'react';
import '../../../../pages/temp1/containers/skills/Skills.css';

// import SkillSection from './SkillSection';
import SkillSection from '../../../../pages/temp1/containers/skills/SkillSection';
import { Fade } from 'react-reveal';
import { collection, doc, getDoc } from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';
import { firestore } from '../../../../components/firebase_config';
import { stepClasses } from '@mui/material';

let lang_arr = [];
let tlang_arr = [];
let stack_arr = [];

export default function Skills(props) {
	//const theme = props.theme;
	const [theme, setTheme] = useState({});
	// 현재 로그인한 사용자 가져오기
	const docRef = doc(firestore, 'user', props.email);

	const [name, setName] = useState('');
	const [edu, setEdu] = useState('');
	const [title, setTitle] = useState('');
	const [introduce, setIntroduce] = useState('');
	const [description, setDescription] = useState('');
	const [language, setLanguage] = useState('');
	const [tlanguage, setTLanguage] = useState('');
	const [field, setField] = useState('');
	const [stack, setStack] = useState('');

	const handleTheme = () => {
		setTheme(props.theme);
	};

	const changeName = target => {
		setName(target);
	};
	const changeEdu = target => {
		setEdu(target);
	};
	const changeTitle = target => {
		setTitle(target);
	};
	const changeIntroduce = target => {
		setIntroduce(target);
	};
	const changeDescription = target => {
		setDescription(target);
	};
	const changeLanguage = target => {
		setLanguage(target);
	};
	const changeTLanguage = target => {
		setTLanguage(target);
	};
	const changeField = target => {
		setField(target);
	};
	const changeStack = target => {
		setStack(target);
	};

	// user 컬렉션에서 db 가져오기
	getDoc(doc(firestore, 'user', props.email)).then(docSnap => {
		if (docSnap.exists()) {
			var currentName = docSnap.data()['name'];
			var currentField = docSnap.data()['field'];
			var currentEdu = docSnap.data()['education'];
			var currentField = docSnap.data()['field'];
			var currentIntroduce = docSnap.data()['introduce'];
			var currentTitle = docSnap.data()['title'];
			var currentDesc = docSnap.data()['description'];
			var currentLang = docSnap.data()['language'];
			var currentTLang = docSnap.data()['tlanguage'];
			var currentStack = docSnap.data()['stack'];

			console.log(`currentName = ${currentName}`);
			changeName(currentName); // 이름 설정
			changeField(currentField); // 자신의 분야 설정
			changeEdu(currentEdu); // 학교 설정
			changeIntroduce(currentIntroduce); // 자기소개
			changeTitle(currentTitle); // 포트폴리오 제목
			changeDescription(currentDesc); // 설명
			changeLanguage(currentLang); // 사용했던 언어
			console.log(`사용한 언어: ` + currentLang);
			// 사용했던 언어 -> 쉼표 기준으로 잘라서 배열로 (3개로 입력 제한)
			lang_arr = currentLang.split(', ');
			console.log(`lang_arr = ${lang_arr}`);
			changeTLanguage(currentTLang); // 자기 주요 언어
			// 자기 주요 언어 -> 쉼표 기준으로 잘라서 배열 (3개로 입력 제한)
			tlang_arr = currentTLang.split(', ');
			console.log(`tlang_arr = ${tlang_arr}`);

			changeStack(currentStack); // 사용한 기술
		} else {
			console.log('No such document!');
		}
	});

	const skills = {
		data: [
			{
				title: title,
				fileName: 'DataScienceImg',
				skills: [
					description,
					//"⚡ Experience of working with Computer Vision and NLP projects",
					//"⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
				],
				softwareSkills: [
					{
						skillName: 'Tensorflow',
						fontAwesomeClassname: 'logos-tensorflow',
						style: {
							backgroundColor: 'transparent',
						},
					},
					{
						skillName: 'Keras',
						fontAwesomeClassname: 'simple-icons:keras',
						style: {
							backgroundColor: 'white',
							color: '#D00000',
						},
					},
					{
						skillName: 'PyTorch',
						fontAwesomeClassname: 'logos-pytorch',
						style: {
							backgroundColor: 'transparent',
						},
					},
					{
						skillName: 'Python',
						fontAwesomeClassname: 'ion-logo-python',
						style: {
							backgroundColor: 'transparent',
							color: '#3776AB',
						},
					},
				],
			},
			{
				title: '사용한 언어',
				fileName: 'FullStackImg',
				skills: ['⚡ ' + lang_arr[0], '⚡ ' + lang_arr[1], '⚡ ' + lang_arr[2]],
				softwareSkills: [
					{
						skillName: 'HTML5',
						fontAwesomeClassname: 'simple-icons:html5',
						style: {
							color: '#E34F26',
						},
					},
					{
						skillName: 'CSS3',
						fontAwesomeClassname: 'fa-css3',
						style: {
							color: '#1572B6',
						},
					},
					{
						skillName: 'Sass',
						fontAwesomeClassname: 'simple-icons:sass',
						style: {
							color: '#CC6699',
						},
					},
					{
						skillName: 'JavaScript',
						fontAwesomeClassname: 'simple-icons:javascript',
						style: {
							backgroundColor: '#000000',
							color: '#F7DF1E',
						},
					},
					{
						skillName: 'ReactJS',
						fontAwesomeClassname: 'simple-icons:react',
						style: {
							color: '#61DAFB',
						},
					},
					{
						skillName: 'NodeJS',
						fontAwesomeClassname: 'simple-icons:node-dot-js',
						style: {
							color: '#339933',
						},
					},
					{
						skillName: 'NPM',
						fontAwesomeClassname: 'simple-icons:npm',
						style: {
							color: '#CB3837',
						},
					},
					{
						skillName: 'Yarn',
						fontAwesomeClassname: 'simple-icons:yarn',
						style: {
							color: '#2C8EBB',
						},
					},
					{
						skillName: 'Gatsby',
						fontAwesomeClassname: 'simple-icons:gatsby',
						style: {
							color: '#663399',
						},
					},
					{
						skillName: 'Flutter',
						fontAwesomeClassname: 'simple-icons:flutter',
						style: {
							color: '#02569B',
						},
					},
				],
			},
			{
				title: '사용한 기술',
				fileName: 'CloudInfraImg',
				skills: [
					'⚡ ' + stack,
					//"⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
				],
				softwareSkills: [
					{
						skillName: 'GCP',
						fontAwesomeClassname: 'simple-icons:googlecloud',
						style: {
							color: '#4285F4',
						},
					},
					{
						skillName: 'AWS',
						fontAwesomeClassname: 'simple-icons:amazonaws',
						style: {
							color: '#FF9900',
						},
					},
					{
						skillName: 'Azure',
						fontAwesomeClassname: 'simple-icons:microsoftazure',
						style: {
							color: '#0089D6',
						},
					},
					{
						skillName: 'Firebase',
						fontAwesomeClassname: 'simple-icons:firebase',
						style: {
							color: '#FFCA28',
						},
					},
					{
						skillName: 'PostgreSQL',
						fontAwesomeClassname: 'simple-icons:postgresql',
						style: {
							color: '#336791',
						},
					},
					{
						skillName: 'MongoDB',
						fontAwesomeClassname: 'simple-icons:mongodb',
						style: {
							color: '#47A248',
						},
					},
					{
						skillName: 'Docker',
						fontAwesomeClassname: 'simple-icons:docker',
						style: {
							color: '#1488C6',
						},
					},
					{
						skillName: 'Kubernetes',
						fontAwesomeClassname: 'simple-icons:kubernetes',
						style: {
							color: '#326CE5',
						},
					},
				],
			},
			{
				title: '나의 주 언어',
				fileName: 'DesignImg',
				skills: [
					'⚡ ' + tlang_arr[0],
					'⚡ ' + tlang_arr[1],
					'⚡ ' + tlang_arr[2],
				],
				softwareSkills: [
					{
						skillName: 'Adobe XD',
						fontAwesomeClassname: 'simple-icons:adobexd',
						style: {
							color: '#FF2BC2',
						},
					},
					{
						skillName: 'Figma',
						fontAwesomeClassname: 'simple-icons:figma',
						style: {
							color: '#F24E1E',
						},
					},
					{
						skillName: 'Adobe Illustrator',
						fontAwesomeClassname: 'simple-icons:adobeillustrator',
						style: {
							color: '#FF7C00',
						},
					},
					{
						skillName: 'Inkscape',
						fontAwesomeClassname: 'simple-icons:inkscape',
						style: {
							color: '#000000',
						},
					},
				],
			},
		],
	};

	return (
		<div className="main" id="skills" onLoad={handleTheme}>
			<div className="skills-header-div">
				<Fade bottom duration={2000} distance="20px">
					<h1 className="skills-header" style={{ color: theme.text }}>
						What I Do?
					</h1>
				</Fade>
			</div>
			<SkillSection
				theme={theme}
				skills={skills}
				style={{
					textAlign: 'left',
					fontSize: '30px',
					marginTop: '60px',
					marginLeft: '30px',
				}}
			/>
		</div>
	);
}
