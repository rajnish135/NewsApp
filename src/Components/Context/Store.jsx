import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [newsData, setNewsData] = useState([]);
  const [search, setSearch] = useState("");

  return (
    <Context.Provider value={{ newsData, setNewsData, search, setSearch }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
