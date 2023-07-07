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
                console.log("sign out!");
        }catch(err){
                console.error("Something kinda went oppise! :o \n Heres the error-code: " + err);
        }
        
}