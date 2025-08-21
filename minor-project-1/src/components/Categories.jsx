function Categories(props) {
  const { categories, setCurrCategory, setPageNum } = props;
  return (
    <div>
      {categories == null ? (
        ""
      ) : (
        <div>
          <button
            className="border-1 mr-2 ml-2 rounded-lg p-2"
            onClick={() => {
              setCurrCategory("All categories");
              setPageNum(1);
            }}
          >
            All categories
          </button>
          {categories.map((category) => {
            return (
              <button
                className="border-1 mr-2 ml-2 rounded-lg p-2"
                onClick={() => {
                  setCurrCategory(category);
                  setPageNum(1);
                }}
              >
                {category}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Categories;