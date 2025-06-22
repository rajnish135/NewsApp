
const Card = ({data}) => {

  const handleCLick = (url)=>{
   
      window.open(url, "_blank"); // Opens link in a new tab 
  }

 console.log(data)
  return (
    <div className='grid grid-cols-3 gap-4 mt-7 mx-30'>
       
         { data?.map((news)=>{

            if(!news.urlToImage)
            return null
            
            else{

              return(
                  <div key={news.id}>
                      
                      <img src={news.urlToImage}/>
                      <h2 onClick={()=>{handleCLick(news.url)} } className='mt-2 font-bold hover:underline hover:cursor-pointer'>{news.content.slice(0, 400)}</h2>
                      <p className='mt-2'>{news.description ?  `${news.description.slice(0, 400)}...` : "No description available."}</p>
                      <button onClick={()=>{handleCLick(news.url)} } className='bg-blue-500 rounded-1.2xl mt-2 cursor-pointer'>Read More</button>
                  
                  </div>
               )
            }
           
         })}
    </div>
  )
}

export default Card