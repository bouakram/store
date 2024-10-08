import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    User,
    NextOrObserver
} from "firebase/auth"
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs,
    QueryDocumentSnapshot
} from "firebase/firestore"
import { Category } from "../../store/categories/category.types";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZu9XTSFj7vuTodcdKIA4dRHSmN05jqlk",
    authDomain: "store-1d05a.firebaseapp.com",
    projectId: "store-1d05a",
    storageBucket: "store-1d05a.appspot.com",
    messagingSenderId: "331748251304",
    appId: "1:331748251304:web:da73bea469c36f42aed49d"
};


initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export type ObjectToAdd = {
    title: string;
}

export const addCollectionAndDocuments = async <T extends ObjectToAdd>(collectionKey: string, objectsToAdd: T[]): Promise<void> => {
    const collectionRef = collection(db, collectionKey)
    const batch = writeBatch(db)

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase())
        batch.set(docRef, object)
    })

    await batch.commit()
}

export const getCategoriesAndDocuments = async (): Promise<Category[]> => {
    const collectionRef = collection(db, 'categories')
    const q = query(collectionRef)

    const querySnapshot = await getDocs(q)
    const categoryMap = querySnapshot.docs.map(docSnapshot => docSnapshot.data() as Category)
    return categoryMap
}

export type AdditionalInformation = {
    displayName?: string
}

export type UserData = {
    createdAt: Date;
    displayName: string;
    email: string;
}

export const createUserDocumentFromAuth = async (userAuth: User, additionalInformation = {} as AdditionalInformation): Promise<void | QueryDocumentSnapshot<UserData>> => {
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

    return userSnapshot as QueryDocumentSnapshot<UserData>
}

export const createAuthUserWithEmailAndPassword = async (email: string, password: string) => {
    if (!password || !email) return
    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email: string, password: string) => {
    if (!password || !email) return
    return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => {
    return await signOut(auth)
}

export const onAuthStateChangedListener = (cb: NextOrObserver<User>) => {
    onAuthStateChanged(auth, cb)
}

export const getCurrentUser = (): Promise<User | null> => {
    return new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(
            auth, (userAuth) => {
                unsubscribe()
                resolve(userAuth)
            },
            reject
        )
    })
}