import { doc, setDoc, getDoc} from "firebase/firestore"; 
import { db } from "../config/firebase";
import { auth } from "../config/firebase";
import { activeUser } from "../config/firebase";

export const CreateUserInformation = async () =>{
    await setDoc(doc(db, "users", auth.currentUser.uid), {
      username: auth.currentUser.displayName,
      personality: ""
    });
}

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