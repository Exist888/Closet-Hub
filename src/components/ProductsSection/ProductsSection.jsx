import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext.jsx";
import { ProductCard } from "../ProductCard/ProductCard.jsx";
import "./ProductsSection.scss";

export function AllProducts() {
    const { products } = useContext(ProductsContext);
    const productsJsx = products.map((product) => {
        return (
            <ProductCard key={product.id} product={product}/>
        );
    });

    return (
        <section className="products-section shop-section elements-container">
            {productsJsx}
        </section>
    );
}