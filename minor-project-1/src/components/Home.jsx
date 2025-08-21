import  {useContext } from "react";
import { useState, useEffect } from "react";
import ProductList from "./ProductList";
import Categories from "./Categories";
import basicOps from "../utility/basicOps";
import { pageContainer } from "../context/PagenationContextProvider";
import { Link } from "react-router-dom";

function Home() {
  // setter functiion creates the state variables with new values and update the UI
  const [searchTerm, setSearchTerm] = useState("");
  const [productsArr, setProductsArr] = useState(null);
  //Initially our elements are unsorted => 0 (state is 0)
  //If elements are sorted in increasing order => 1 (state is 1)
  //if elements are sorted in decreasing order => -1 (state is -1)
  //now create a simple state variable
  const [sortDir, setSortDir] = useState(0);

  const [categories, setCategories] = useState(null);
  //for getting current category
  const [currCategory, setCurrCategory] = useState("All categories");
  //for cart details
  const [cart,setCart] = useState({})
  
  const {pageNum,pageSize,setPageNum} = useContext(pageContainer)

const updateCart = (productId, qty) => {
  setCart((prev) => {
    const updated = { ...prev };
    if (qty === 0) {
      delete updated[productId];
    } else {
      updated[productId] = qty;
    }
    return updated;
  });
};


  function fetchDetails() {
    async function fn() {
      const response = await fetch("https://fakestoreapi.com/products");
      const productsData = await response.json();
      setProductsArr(productsData);
    }
    fn();
  }
  function fetchCategories() {
    async function fn() {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const categoriesData = await response.json();
      setCategories(categoriesData);
    }
    fn();
  }

  useEffect(fetchDetails, []);

  useEffect(fetchCategories, []);

  function handleInput(e) {
    setSearchTerm(e.target.value);
    setPageNum(1);
  }

  // filtering unwanted products i.e, we are hiding the elements
  let details = basicOps(
    productsArr,
    searchTerm,
    sortDir,
    currCategory,
    pageNum,
    pageSize
  );
  if (details == undefined) {
    return;
  }


  let { filteredSortedGroupbyArr } = details;
  let { totalPages } = details;


  return (
    <div className="flex flex-col justify-end">
      <header className="flex justify-center bg-[#44403c] w-full h-10">
        <input type="search" className="w-80 border-1 border-indigo-200 rounded-lg bg-gray-200" value={searchTerm} placeholder="Search for product" onChange={handleInput}/>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" onClick={() => {setSortDir(1);}} className="size-8 mt-1 ml-2 mr-2 bg-white rounded-lg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"/>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" onClick={() => {setSortDir(-1);}}className="size-8 mt-1 ml-2 mr-2 bg-white rounded-lg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"/>
        </svg>

        <div className="flex justify-end">
          <Link className="font-bold text-xl text-blue-400 ml-2 mr-2" to="/">
            Home
          </Link>
          <Link className="font-bold text-xl text-blue-400 ml-2 mr-2" to="/user">
            User
          </Link>
          <Link className="font-bold text-xl text-blue-400 ml-2 mr-2" to="/cart">
            Cart
          </Link>
        </div>
      </header>
      <div className="bg-gray-200 w-full h-11 flex justify-end a=items-center">
        <Categories
          categories={categories}
          setPageNum={setPageNum}
          setCurrCategory={setCurrCategory}
        ></Categories>
      </div>

      <div className=" justify-center min-w-60 h-screen">
        <ProductList productList={filteredSortedGroupbyArr}  cart={cart} updateCart={updateCart}></ProductList>
      </div>
      {/* {pagination} */}
      <div className="flex self-center items-end">
        <button
          onClick={() => {
            if (pageNum > 1) {
              setPageNum(pageNum - 1);
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
        <div className="font-semibold text-2xl">{pageNum}</div>
        <button
          onClick={() => {
            if (pageNum < totalPages) {
              setPageNum(pageNum + 1);
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Home;

/** FEATURES ADDED:
 * A.searching, B. Sorting, C. Categories D.Pagination then rendering on the page*/