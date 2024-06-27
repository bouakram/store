import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZu9XTSFj7vuTodcdKIA4dRHSmN05jqlk",
    authDomain: "store-1d05a.firebaseapp.com",
    projectId: "store-1d05a",
    storageBucket: "store-1d05a.appspot.com",
    messagingSenderId: "331748251304",
    appId: "1:331748251304:web:da73bea469c36f42aed49d"
};


const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()
export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, "users", userAuth.uid)
    const userSnapshot = await getDoc(userDocRef)
    console.log(userSnapshot.exists())

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth
        const createdAt = Date.now()
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            }
            )
        } catch (err) {
            console.error(err)
        }
    }

    return userDocRef
}

