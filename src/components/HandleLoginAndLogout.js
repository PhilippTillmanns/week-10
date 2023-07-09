import { signInWithPopup, signOut } from 'firebase/auth'
import { activeUser, auth, provider } from '../config/firebase'

export const SignInWithGoogle = async () => {
        try{
                const result = await signInWithPopup(auth, provider);
        }catch(err){
                console.error("Something kinda went oppise! :o \n Heres the error-code: " + err);
        }
};

export const SignOut = async () => {
        console.log("Trying to sign out!");
        try{
                await signOut(auth);
                activeUser.username = null;
                activeUser.personality = null;
                DeleteUserCookies();
                console.log("sign out!");
        }catch(err){
                console.error("Something kinda went oppise! :o \n Heres the error-code: " + err);
        }
        
}

function DeleteUserCookies(){
        document.cookie = "user-name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "user-personality=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}