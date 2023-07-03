import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../config/firebase'

export const SignInWithGoogle = async () => {
        await signInWithPopup(auth, provider);
}
