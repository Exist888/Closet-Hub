import "./CategoryCard.scss";

export function CategoryCard({ category }) {
    const { title, imageUrl } = category;
    return (
        <article className="category-card" >
            <div 
                className="background-image" 
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className="category-title-and-cta-box">
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </article>
    ); 
}