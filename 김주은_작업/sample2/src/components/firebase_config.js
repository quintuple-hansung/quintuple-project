import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAHt7Sj1dRq44FI2w5mTmplSjwBYlmskNA",
    authDomain: "sample2-149b7.firebaseapp.com",
    projectId: "sample2-149b7",
    storageBucket: "sample2-149b7.appspot.com",
    messagingSenderId: "849457794768",
    appId: "1:849457794768:web:baace8ad461c099d5058d5",
    measurementId: "G-B90Q2KKXCQ"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);