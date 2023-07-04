import { getAdditionalUserInfo, signInWithPopup, signOut } from 'firebase/auth'
import { auth, provider } from '../config/firebase'
import { CreateUserInformation } from './HandleUserInformation';

export const SignInWithGoogle = async () => {
        try{
                const result = await signInWithPopup(auth, provider);
                const info = getAdditionalUserInfo(result);
                console.log(info.isNewUser);
                if(info.isNewUser){
                        CreateUserInformation();
                }

        }catch(err){
                console.error("Something kinda went oppise! :o \n Heres the error-code: " + err);
        }
        
};

export const SignOut = async () => {
        try{
                await signOut(auth);
                console.log("sign out!");
        }catch(err){
                console.error("Something kinda went oppise! :o \n Heres the error-code: " + err);
        }
        
}