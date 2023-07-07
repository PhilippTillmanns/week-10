import { doc, setDoc, getDoc} from "firebase/firestore"; 
import { activeUser, auth, db} from "../config/firebase";

export const CreateUserInformation = async (props) =>{
    await setDoc(doc(db, "users", auth.currentUser.uid), {
      username: props.username,
      personality: props.personality,
    }).then(() => GetUserData());
    
}

async function GetUserData(){
    const docRef = doc(db, "users", auth.currentUser.uid);
    const docSnap = await getDoc(docRef);
    if(docSnap.data() != null){
      activeUser.username = docSnap.data().username;
      activeUser.personality = docSnap.data().personality;
    }else{
      console.log("No data!");
    }
    
}

export default GetUserData