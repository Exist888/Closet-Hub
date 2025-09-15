import { SignInForm } from "../../components/SignInForm/SignInForm.jsx";
import { SignUpForm } from "../../components/SignUpForm/SignUpForm.jsx";
import "./SignIn.scss";

export function SignIn() {
    return (
        <>
            <section className="sign-in-section elements-container">
                <SignInForm />
                <SignUpForm />
            </section>
        </>
    );
}