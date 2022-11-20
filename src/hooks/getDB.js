import {firestore} from "../components/firebase_config";
import { getAuth } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore/lite';
import { useState } from "react";

// 파이어베이스에서 포트폴리오 내용 가져오기

export const useGetDB = () => {

    const [pfName, setPfName] = useState('');
    const [pfAge, setPfAge] = useState('');
    const [pfEducation, setPfEducation] = useState('');
    const [pfIntroduce, setPfIntroduce] = useState('');

    // 현재 로그인한 사용자 가져오기
    const auth = getAuth();
    const currentUser = auth.currentUser;
    const currentEmail = currentUser.email;
    console.log(`currentUser: ${currentEmail}`);

    const docRef = doc(firestore, "user", currentEmail);
    const docSnap = getDoc(docRef);

    getDoc(doc(firestore, "user", currentEmail)).then(docSnap => {
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
        } else {
          console.log("No such document!");
        }
    })

    console.log(`age: ${docSnap.data().age}`);

    setPfName(docSnap.data().name);
    setPfAge(docSnap.data().age);
    setPfEducation(docSnap.data().education);
    setPfIntroduce(docSnap.data().introduce);
    

    return [pfName, pfAge, pfEducation, pfIntroduce];
}