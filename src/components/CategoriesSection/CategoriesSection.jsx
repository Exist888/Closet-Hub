import { CategoryCard } from "../CategoryCard/CategoryCard.jsx";
import "./CategoriesSection.scss";

export function CategoriesSection({ categories }) {
    const categoriesJsx = categories.map((category) => {
        return (
            <CategoryCard key={category.id} category={category} />
        ); 
    });

    return (
        <section className="categories-section">
            <div className="elements-container">
                {categoriesJsx}
            </div>
        </section>
    );
}