import React, { useContext , useState} from 'react'
import {Context} from './Context/Store'
import { useEffect } from 'react';

const NavBar = () => {

  const API_KEY = "56e0ec655c3943bdb2810b85150757e6";

  const {setNewsData,search,setSearch,query, setQuery} = useContext(Context);

   // Hold input value separately
 
    const getData = async ()=>{
      
      const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`)
      
      const jsonData = await response.json();
     //  console.log(jsonData)
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