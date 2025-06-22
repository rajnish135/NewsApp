import { useContext } from 'react'
import Card from './Card.jsx';
import {Context} from './Context/Store'

const Hero = () => {

  const {newsData,setSearch,setQuery} = useContext(Context);

  const handleClick = (input)=>{
          setSearch(input);
          setQuery(input);
  }

  return (
    <div className='flex flex-col '>

        <h2 className='text-center mt-4 mr-30 font-bold text-xl'>Stay Update with TrendyNews!</h2>
        
        <div className='flex gap-2 mt-9 justify-center'>
        <button onClick={()=>handleClick("Sports")} className='rounded-full bg-orange-500 w-30 cursor-pointer text-white p-1.5'>Sports</button>
        <button onClick={()=>handleClick("Politics")} className='rounded-full bg-orange-500 w-30 cursor-pointer text-white p-1.5'>Politics</button>
        <button onClick={()=>handleClick("Health")} className='rounded-full bg-orange-500 w-30 cursor-pointer text-white p-1.5'>Health</button>
        <button onClick={()=>handleClick("Entertainment")} className='rounded-full bg-orange-500 w-30 cursor-pointer text-white p-1.5'>Entertainment</button>
        <button onClick={()=>handleClick("Technology")} className='rounded-full bg-orange-500 w-30 cursor-pointer text-white p-1.5'>Technology</button>
        </div>

        <Card data={newsData}/>
    </div>
  )
}

export default Hero