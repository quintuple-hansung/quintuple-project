import { useState } from 'react';
import { collection, doc, getDocs } from "firebase/firestore";
import { firestore } from "../../components/firebase_config";

// db에서 포트폴리오에 입력할 내용들 가져와서 객체로 만들기
export const useInfo = async() => {
    //const name = '홍길동'
    const querySnapshot = await getDocs(collection(firestore, "user"));
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
    });

    const [info, setInfo] = useState({})

    const setInformation = () => {
        setInfo = {
            name: doc.data()
        }
    }

    return [setInformation];
    //return [name];
}
