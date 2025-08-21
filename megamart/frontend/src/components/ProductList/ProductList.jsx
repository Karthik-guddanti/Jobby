import { useEffect, useState } from "react";
import { apiFetch } from "../../api";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

function ProductList({ refresh }) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiFetch("/products")
      .then(setProducts)
      .catch((err) => setError(err.message));
  }, [refresh]);

  const handleDelete = (id) => {
    apiFetch(`/products/${id}`, { method: "DELETE" })
      .then(() => setProducts((prev) => prev.filter((p) => p._id !== id)))
      .catch((err) => setError(err.message));
  };

  return (
    <div className="product-list">
      {products.map((p) => (
        <ProductCard key={p._id} product={p} onDelete={handleDelete} />
      ))}
      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default ProductList;