import { SignInForm } from "../../components/SignInForm/SignInForm.jsx";
import { SignUpForm } from "../../components/SignUpForm/SignUpForm.jsx";
import "./Auth.scss";

export function Auth() {
    return (
        <section className="auth-section elements-container">
            <SignInForm />
            <SignUpForm />
        </section>
    );
}