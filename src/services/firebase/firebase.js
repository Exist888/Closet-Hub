import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Initialize Firebase app with .env variables
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDING_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase app with the config object
const firebaseApp = initializeApp(firebaseConfig);

// Create an instance of Google auth provider
const provider = new GoogleAuthProvider();

// Force user to select account every time - even if already signed in
provider.setCustomParameters({
    prompt: "select_account"
});

// Initialize Firebase Auth and export a function to sign in with Google popup
export const auth = getAuth();
export function signInWithGooglePopup() {
    return signInWithPopup(auth, provider);
}

// Initialize Firestore database
export const db = getFirestore();

// Create a user document in Firestore from authenticated user data
// Include additionalInfo as optional param to overwrite nullified displayName (for em and pw auth)
export async function createUserDocumentFromAuth(userAuth, additionalInfo = {}) {
    if (!userAuth) return;

    // Create reference to user object in "users" collection with uid as id
    const userDocRef = doc(db, "users", userAuth.uid);
    console.log(userDocRef);

    // Retrieve the document snapshot - not the document itself
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    // Create a user document if it doesn't already exist
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        // Create (set) the user document with basic user info
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInfo
            });
        } catch (error) {
            console.log("Error creating the user: ", error.message);
        }
    }

    // Return the reference to the user doc whether it exists or not
    return userDocRef;
}

export async function createAuthUserWithEmailAndPassword(email, password) {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
}