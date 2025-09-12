import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Header.scss";

export function Header() {
    return (
        <header>
            <nav className="elements-container" aria-label="Main Navigation">
                <Link to="/" className="logo">
                    <img src={logo} alt="Closet Hub Logo" />
                </Link>
                <ul className="menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                </ul>
            </nav>
        </header>
    );
}