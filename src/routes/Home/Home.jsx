import { CategoriesSection } from "../../components/CategoriesSection/CategoriesSection.jsx";
import { categories } from "../../data/categories.js";
import "./Home.scss";

export function Home() {
    return (
        <CategoriesSection categories={categories} />
    );
}