import { useState } from "react";
import { apiFetch } from "../../api";
import "./AddProduct.css";

function AddProduct({ onProductAdded }) {
  const [form, setForm] = useState({ name: "", description: "", price: "" });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await apiFetch("/products", {
        method: "POST",
        body: JSON.stringify({
          name: form.name,
          description: form.description,
          price: parseFloat(form.price),
        }),
      });
      setForm({ name: "", description: "", price: "" });
      if (onProductAdded) onProductAdded();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form className="add-product-form" onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
      <input name="description" value={form.description} onChange={handleChange} placeholder="Description" required />
      <input name="price" value={form.price} onChange={handleChange} placeholder="Price" type="number" required />
      <button type="submit">Add Product</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}

export default AddProduct;