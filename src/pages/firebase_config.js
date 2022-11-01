// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDz2Y8priLn2JuivNZnqEprvrLYAZ22iNU',
	authDomain: 'quintuple-e9f49.firebaseapp.com',
	projectId: 'quintuple-e9f49',
	storageBucket: 'quintuple-e9f49.appspot.com',
	messagingSenderId: '1023938065916',
	appId: '1:1023938065916:web:e2bca9e49f7ff7ad36ae79',
	measurementId: 'G-2SE0T52C2Z',
};
export default firebaseConfig;
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//export default app;
