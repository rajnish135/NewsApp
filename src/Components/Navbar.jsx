import { useContext} from 'react'
import {Context} from './Context/Store'
import { useEffect } from 'react';

const NavBar = () => {

  const {setNewsData,search,setSearch,query, setQuery} = useContext(Context);

   // Hold input value separately
 
    const getData = async ()=>{

      const API_KEY = import.meta.env.VITE_API_KEY;
      
      const response = await fetch(`https://gnews.io/api/v4/search?q=${search}&apikey=${API_KEY}`)
      
      const jsonData = await response.json();

      console.log("NEWS DATA",jsonData.articles);
     
      setNewsData(jsonData.articles);

   }
     
   const handleInputChange = (input) => {
    setQuery(input);
  };

  // Update `search` only when the button is clicked
  const searchHandler = () => {
    setSearch(query);
  };

  if(search==="")
  setSearch("India")
      

  useEffect(() => {

      getData();
    
  }, [search]);

  return (
    <div className='flex justify-between px-[50px] bg-blue-200 p-5'>

        <h2 className='text-xl font-bold'>Trendy News</h2>

        <p className='font-semibold'>All News Top Headlines</p>

        <div className='flex'>
           <input onChange={(e)=>handleInputChange(e.target.value)} value={query} className='border mr-[5px] bg-white outline-none' type='text'/>
           <button onClick={()=>searchHandler()} className='bg-blue-400 cursor-pointer'>Search</button>
        </div>

    </div>
  )
}

export default NavBar