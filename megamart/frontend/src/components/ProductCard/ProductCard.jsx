import "./ProductCard.css";

function ProductCard({ product, onDelete }) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="price">${product.price}</div>
      <div className="actions">
        <button>Add to Cart</button>
        {onDelete && (
          <button className="delete" onClick={() => onDelete(product._id)}>
            Delete
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;