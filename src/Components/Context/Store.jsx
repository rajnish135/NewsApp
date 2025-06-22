import { createContext,useState } from "react";

export const Context = createContext();

const ContextProvider = ({children})=>{

    const [newsData,setNewsData] = useState([])
    const [search,setSearch] = useState("India")
    const [query, setQuery] = useState(search);

    return(
    <Context.Provider value={{newsData,setNewsData,search,setSearch,query, setQuery}}>
        {children}
    </Context.Provider>
    )
}

export default ContextProvider;