import React, { useState } from "react";
function ProductList(props) {
  const { productList } = props;
  const [quantity,setquantity] = useState(0)

  return (
    <div className="flex flex-wrap">
      {productList == null ? (
        <h1>Loading...</h1>
      ) : (
        productList.map((product) => {
          return (
            <div className="size-100  hover:shadow-xl/30 flex flex-col justify-center m-8 border-1 border-blue-900/20 rounded-lg">
              <img className="size-50 ml-22 mt-4" src={product.image} />
              <div className="mt-4 text-center">
                <h1 className="font-light">{product.title}</h1>
                <h2 className="mt-4 font-semibold text-blue-600/75 text-2xl">
                  ${product.price}
                </h2>
              </div>
              
{quantity === 0 ? (<button onClick={() => updateCart(product.id, 1)}className="border px-4 py-2 mt-2" >Add to Cart</button>) 
: (
  <div className="flex items-center gap-2 mt-2">
    <button onClick={() => updateCart(product.id, setquantity(prev => prev - 1))}className="px-2 border">-</button>
    <span>{quantity}</span>
    <button onClick={() => updateCart(product.id, setquantity(prev => prev + 1))}className="px-2 border">+</button>
  </div>
)}
            </div>
          );
        })
      )}
    </div>
  );
}

export default ProductList;