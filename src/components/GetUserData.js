import React from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { db, auth} from '../config/firebase'
import { activeUser } from '../config/firebase';

async function GetUserData(){

    const docRef = doc(db, "users", auth.currentUser.uid);
    const docSnap = await getDoc(docRef);
    if(docSnap.exists()){
        activeUser.username = docSnap.data().username;
        activeUser.personality = docSnap.data().personality;
        console.log(activeUser);
    }
}

export default GetUserData