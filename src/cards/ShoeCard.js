
export const ShoeCard = ({ img, title, category, newPrice }) => {
    console.log();
    return (
        <div className="card">
            <img src={img} alt={title} />
            <h1>{title}</h1>
            <h4>{category}</h4>
            <h3>{`${newPrice}`}</h3>
        </div>
    )
}
