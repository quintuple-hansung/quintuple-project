// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCb8l9v8pzWOGcM2SRNGAheilUMxaeJbvg",
  authDomain: "webframework-lecture.firebaseapp.com",
  projectId: "webframework-lecture",
  storageBucket: "webframework-lecture.appspot.com",
  messagingSenderId: "30731011367",
  appId: "1:30731011367:web:561b53febdd070dab65502",
  measurementId: "G-JS42Q6581L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export default app;