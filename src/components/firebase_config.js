// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
import firebase from 'firebase';
import dotenv from 'dotenv';

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
dotenv.config();
const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
	appId: process.env.REACT_APP_FIREBASE_APPID,
	measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID,
};
export default firebaseConfig;

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

//const auth = getAuth();

//Email 회원가입
export const signupEmail = (email, password) => {
	return createUserWithEmailAndPassword(auth, email, password);
  };
  
  
 //Email 로그인
 export const loginEmail = (email, password) => {
	return signInWithEmailAndPassword(auth, email, password);
  };

export const auth = getAuth(app);

 