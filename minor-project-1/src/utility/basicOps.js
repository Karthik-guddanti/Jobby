//components only maintain state variables and iuse effect.
//  So we have to store logic into one file and then import into component
// major ajenda for this function is to maintain all the logic for different operations
export default function basicOps(
  productsArr,
  searchTerm,
  sortDir,
  currCategory,
  pageNum,
  pageSize
) {
  if (productsArr == null) {
    return;
  }

  let filteredArr = productsArr; //creating a copy of state variable

  if (searchTerm !== "") {
    filteredArr = filteredArr.filter((product) => {
      let lowerTitle = product.title.toLowerCase();
      let lowerSearchTerm = searchTerm.toLowerCase();
      return lowerTitle.includes(lowerSearchTerm);
    });
  }
  //sorting --> it means rearranging the elements
  //sortedDir manages the sorting direction, it tells which sort to happen either in increaasing order or in decresing order. So by default our products are unsorted and value is set to 0
  let filteredSortedArr = filteredArr;

  if (sortDir !== 0) {
    if (sortDir == 1) {
      filteredSortedArr = filteredSortedArr.sort(onIncrementComp);
    } else {
      filteredSortedArr = filteredSortedArr.sort(onDecrementComp);
    }
  }

  //group by categories is implemented below
  let filteredSortedGroupbyArr = filteredSortedArr;

  if (currCategory !== "All categories") {
    filteredSortedGroupbyArr = filteredSortedGroupbyArr.filter((product) => {
      return product.category == currCategory;
    });
  }

  //pagination implementation
  // we need to  find the starting anf ending index of elements in array for given page
  let totalPages = filteredSortedGroupbyArr.length / pageSize;
  let sidx = (pageNum - 1) * pageSize; //starting index
  let eidx = sidx + pageSize; //ending index
  //[0,3] => (1-1)*4 = 0
  // [4,7] => (2-1)*4 = 0
  filteredSortedGroupbyArr = filteredSortedGroupbyArr.slice(sidx, eidx);

  let details = {
    filteredSortedGroupbyArr,
    totalPages,
  };
  return details;
}
function onIncrementComp(product1, product2) {
  if (product1.price > product2.price) {
    return 1;
  } else {
    return -1;
  }
}
function onDecrementComp(product1, product2) {
  if (product1.price < product2.price) {
    return 1;
  } else {
    return -1;
  }
}
// return { filteredSortedGroupbyArr, totalPages };