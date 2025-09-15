import { useState } from "react";
import { signInWithGooglePopup, 
    createUserDocumentFromAuth } 
from "../../services/firebase/firebase.js";
import { FormInput } from "../FormInput/FormInput.jsx";
import { Button } from "../Button/Button.jsx";
import { ButtonSeparator } from "../ButtonSeparator/ButtonSeparator.jsx";
import "./SignInForm.scss";

const defaultFormFields = {
    email: "",
    password: "",
}

export function SignInForm() {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    function handleChange(event) {
        // Destructure input name and value when input changes
        const { name, value } = event.target;
        // Update state to new value where input changes while keeping remaining fields
        setFormFields({ ...formFields, [name]: value });
    }

    async function logGoogleUser() {
        const response = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(response.user);
    }

    return (
        <section className="sign-in-form-section">
            <h1>Already have an account?</h1>
            <p> 
                <i aria-hidden="true" className="fa-solid fa-lock"></i>
                <div><span>Sign in</span> with your email and password</div>
            </p>
            <form onSubmit={() => {}}>
                <FormInput
                    label="Email"
                    id="sign-in-email" 
                    type="email" 
                    onChange={handleChange}
                    name="email" 
                    value={email}
                    minLength={5}
                    maxLength={75}
                    autoComplete="new-email"
                />

                <FormInput
                    label="Password"
                    id="sign-in-password" 
                    type="password" 
                    onChange={handleChange}
                    name="password" 
                    value={password}
                    minLength={15}
                    maxLength={35}
                    autoComplete="new-password"
                />
                <Button buttonClass="signIn" type="submit">Sign In</Button>
            </form>
            <ButtonSeparator />
            <Button buttonClass="googleSignIn" onClick={logGoogleUser}>
                <i className="fa-brands fa-google"></i>
                Sign In With Google
            </Button>
        </section>
    );
}