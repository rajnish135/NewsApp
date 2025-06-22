import { useContext, useEffect } from 'react';
import { Context } from './Context/Store';

const NavBar = () => {
  const { setNewsData, search, setSearch, query, setQuery } = useContext(Context);

  const getData = async () => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const keyword = search || "India";
    const url = `https://api.currentsapi.services/v1/search?apiKey=${apiKey}&keywords=${keyword}&language=en&page_size=100`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log("NEWS DATA", data);
      setNewsData(data.news || []);
    } catch (err) {
      console.error("Failed to fetch news:", err);
    }
  };

  const handleInputChange = (input) => {
    setQuery(input);
  };

  const searchHandler = () => {
    setSearch(query);
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  useEffect(() => {
    if (search === "") {
      setSearch("India");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full px-4 py-4 bg-gradient-to-r from-blue-100 via-pink-100 to-yellow-100 backdrop-blur-lg shadow-md sticky top-0 z-50">
      
      <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-4">

        {/* Logo */}
        <h2 className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Trendlit<span className="italic font-bold"></span>
        </h2>

        {/* Tagline */}
       <p className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-medium text-sm sm:text-base text-center">
        All News Top Headlines
      </p>


        {/* Search Box */}
        <div className="flex items-center gap-2 bg-white shadow-inner px-3 py-2 rounded-full w-full sm:w-auto">
          <input
            onChange={(e) => handleInputChange(e.target.value)}
            value={query}
            type="text"
            placeholder="Search News..."
            className="bg-transparent outline-none w-full text-sm sm:text-base"
          />
          <button
            onClick={searchHandler}
            className="bg-blue-500 hover:bg-blue-600 active:scale-95 transition-all text-white text-sm sm:text-base px-4 py-1.5 rounded-full shadow-md"
          >
            Search
          </button>
        </div>

      </div>
    </div>
  );
};

export default NavBar;
