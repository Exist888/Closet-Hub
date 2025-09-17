import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext.jsx";
import { signOutUser } from "../../services/firebase/firebase.js";
import logo from "../../assets/logo.png";
import "./Header.scss";

export function Header() {
    // Destructure currentUser state from user context
    const { currentUser, setCurrentUser } = useContext(UserContext);
    console.log("Current User: ", currentUser);

    async function signOutHandler() {
        await signOutUser();
        setCurrentUser(null);
    }

    return (
        <header>
            <nav className="elements-container" aria-label="Main Navigation">
                <Link to="/" className="logo">
                    <img src={logo} alt="Closet Hub Logo" />
                </Link>
                <ul className="menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    {currentUser ? (
                        <li><span onClick={signOutHandler} className="link">Sign Out</span></li>
                    ) : (
                        <li><Link to="/auth">Sign In</Link></li>
                    )}
                </ul>
            </nav>
        </header>
    );
}