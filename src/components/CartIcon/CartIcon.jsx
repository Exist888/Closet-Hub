// Use forward Ref because we will pass this ref into a sibling component via the Header parent
import { forwardRef } from "react";
import ShoppingBag from "../../assets/shopping-bag.svg?react";
import "./CartIcon.scss";

export function CartIconInner({ toggleDropdown, isDropdownClicked }, ref) {
    return (
        <button 
            ref={ref}
            onClick={toggleDropdown} 
            className={`cart-icon-container ${isDropdownClicked ? "on" : ""}`} 
            aria-label="Toggle shopping cart"
            >
            <ShoppingBag className="shopping-bag-icon" aria-hidden="true" />
            <span className="item-count">0</span>
        </button>
    );
}

export const CartIcon = forwardRef(CartIconInner);