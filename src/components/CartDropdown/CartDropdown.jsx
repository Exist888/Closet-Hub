import { useEffect, useRef } from "react";
import { Button } from "../Button/Button.jsx";
import "./CartDropdown.scss";

export function CartDropdown({ closeDropdown, isDropdownClicked, cartIconRef }) {
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleOutsideClick(event) {
            const clickedOutsideDropdown = (
                dropdownRef.current && !dropdownRef.current.contains(event.target)
            );
            const clickedOutsideCartIcon = (
                cartIconRef.current && !cartIconRef.current.contains(event.target)
            );

            if (clickedOutsideDropdown && clickedOutsideCartIcon) {
                closeDropdown();
            }
        }

        if (isDropdownClicked) {
            document.addEventListener("click", handleOutsideClick);
        }

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        }

    }, [isDropdownClicked, closeDropdown]);

    return (
        <section className="cart-dropdown-container" ref={dropdownRef}>
            <button className="close-btn" onClick={closeDropdown}>
                <i className="fa-solid fa-xmark"></i>
            </button>
            <article className="cart-items"></article>
            <Button>
                Go to Checkout
                <i className="fa-solid fa-arrow-right"></i>
            </Button>
        </section>
    );
}