import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebase/firebase";

const handleAuth = async (email, password, name, mode) => {
    if (mode) {
        return await createUserWithEmailAndPassword(auth, email, password)
    } else {
        return await signInWithEmailAndPassword(auth, email, password)
    }
}

export {handleAuth}