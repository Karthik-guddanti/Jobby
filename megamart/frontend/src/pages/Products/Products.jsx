import { useState } from "react";
import AddProduct from "../AddProduct/AddProduct";
import ProductList from "../../components/ProductList/ProductList";
import "./Products.css";

function Products() {
  const [refresh, setRefresh] = useState(false);

  // Refresh product list after adding a product
  const handleProductAdded = () => setRefresh(r => !r);

  return (
    <div className="products-page">
      <h2>All Products</h2>
      <AddProduct onProductAdded={handleProductAdded} />
      <ProductList refresh={refresh} />
    </div>
  );
}

export default Products;