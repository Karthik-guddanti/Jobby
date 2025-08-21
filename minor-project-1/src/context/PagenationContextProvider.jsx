import {createContext,useState} from "react"
export const pageContainer = createContext()
export function PagenationContextProvider({children}){

    //for page Numbers
  const [pageNum, setPageNum] = useState(1);
  //for size of page
  const [pageSize, setPageSize] = useState(4);

    return (
        <div>
        <pageContainer.Provider value={{
            pageNum,pageSize,setPageNum,setPageSize
        }}>
            {children}
        </pageContainer.Provider>
        </div>
    )
}