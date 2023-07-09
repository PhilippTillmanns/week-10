import { doc, setDoc, getDoc} from "firebase/firestore"; 
import { activeUser, auth, db} from "../config/firebase";

export const CreateUserInformation = async (props) =>{
    await setDoc(doc(db, "users", auth.currentUser.uid), {
      username: props.username,
      personality: props.personality,
    }).then(() => {
      console.log("WRITING TO DATABASE!");
      SetActiveUser({username: props.username, personality: props.personality});
    });
    
}

async function GetUserData(){
    const result = getCookie({name: "user-name"});
    if(result != undefined){
      console.log("Read from Cookies!");
      activeUser.username = result;
      activeUser.personality = getCookie({name: "user-personality"});
    }else{
      console.log("READING FROM DATABASE!");
      const docRef = doc(db, "users", auth.currentUser.uid);
      const docSnap = await getDoc(docRef);
      if(docSnap.data() != null){
        SetActiveUser({username: docSnap.data().username, personality: docSnap.data().personality});
      }else{
        console.log("No data!");
      }
    }
}

function SetActiveUser(props){
  activeUser.username = props.username;
  activeUser.personality = props.personality;
  document.cookie="user-name=" + activeUser.username + "; path=/";
  document.cookie="user-personality=" + activeUser.personality + "; path=/";
}

export default GetUserData

function getCookie(props) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${props.name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}