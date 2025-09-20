import "./ProductCard.scss";
import { Button } from "../Button/Button.jsx";

export function ProductCard({ product }) {
    const { imageUrl, name, price } = product;
    return (
        <article className="product-card">
            <img src={imageUrl} alt={`${name}`}/>
            <div className="product-card-text">
                <span className="name">{name}</span>
                <span className="price">{price} USD</span>
            </div>
            <Button buttonClass="product">
                <div>
                    <i className="fa-solid fa-cart-plus"></i>
                    <span>Add to cart</span>
                </div>
            </Button>
        </article>
    );
}