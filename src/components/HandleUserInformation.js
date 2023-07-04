import { doc, setDoc, getDoc} from "firebase/firestore"; 
import { activeUser, auth, db} from "../config/firebase";

export const CreateUserInformation = async () =>{
    await setDoc(doc(db, "users", auth.currentUser.uid), {
      username: auth.currentUser.displayName,
      personality: ""
    });
}

async function GetUserData(){

    const docRef = doc(db, "users", auth.currentUser.uid);
    const docSnap = await getDoc(docRef);
    activeUser.username = docSnap.data().username;
    activeUser.personality = docSnap.data().personality;
}

export default GetUserData