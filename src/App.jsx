import { useState } from "react";
import { CategoriesSection } from "./components/CategoriesSection/CategoriesSection.jsx";
import { categories } from "./data/categories.js";
import "./App.scss";

export function App() {
    return (
        <main>
            <CategoriesSection categories={categories} />
        </main>
    );
}