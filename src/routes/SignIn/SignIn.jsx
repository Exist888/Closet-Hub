import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../services/firebase/firebase.js";
import "./SignIn.scss";

export function SignIn() {
    async function logGoogleUser() {
        const response = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(response.user);
    }

    return (
        <section className="sign-in-section elements-container">
            <p>This is the sign-in page</p>
            <button onClick={logGoogleUser}>Sign In With Google</button>
        </section>
    );
}