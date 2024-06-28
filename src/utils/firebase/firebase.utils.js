import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth"
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
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
export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    const userDocRef = doc(db, "users", userAuth.uid)
    const userSnapshot = await getDoc(userDocRef)

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth
        const createdAt = Date.now()
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            }
            )
        } catch (err) {
            console.error(err)
        }
    }

    return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!password || !email) return
    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!password || !email) return
    return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => {
    return await signOut(auth)
}

export const onAuthStateChangedListener = (cb) => {
    onAuthStateChanged(auth, cb)
}