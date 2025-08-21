// src/components/CategoriesSection/index.jsx
import React from "react";

const CategoriesSection = ({ categories }) => {
  if (!Array.isArray(categories)) {
    return <p>Categories not available</p>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Browse Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category) => (
          <div key={category.id} className="p-4 border rounded shadow">
            <img
              src={category.image_url}
              alt={category.name}
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="mt-2 font-semibold">{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;
