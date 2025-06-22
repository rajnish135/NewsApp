const Card = ({ data }) => {

  const handleClick = (url) => {
    window.open(url, "_blank"); // Opens link in a new tab
  };

  // Remove things like [1660 chars] at the end
  const cleanContent = (text) => {
    if (!text) return "";
    return text.replace(/\[\d+\s*chars?\]$/, '');
  };

  const formatDate = (publishDate) => {
  const date = new Date(publishDate);
  const options = { day: '2-digit', month: 'long', year: 'numeric' };
  return date.toLocaleDateString('en-GB', options);
};

  return (
    <div className='grid grid-cols-3 gap-4 mt-7 mx-30'>
      {
        data?.map((news, index) => (
          <div key={index} className='p-4 shadow-md rounded-xl bg-white'>
            <img src={news.image} alt="news" className='w-full h-48 object-cover rounded-md' />

            <h2 
              onClick={() => handleClick(news.url)} 
              className='mt-2 font-bold hover:underline hover:cursor-pointer'
            >
              {cleanContent(news.content).slice(0, 400)}
            </h2>

            <p className='mt-2 text-gray-700'>
              {news.description 
                ? `${news.description.slice(0, 400)}...` 
                : "No description available."}
            </p>

            {/* Source and Data */}
           <div className='flex justify-between items-center mt-2 text-sm text-gray-500'>
            <p>Source: {news.source?.name || "Unknown"}</p>
            <p>{formatDate(news.publishedAt)}</p>
          </div>

            <button 
              onClick={() => handleClick(news.url)} 
              className='bg-blue-500 text-white px-4 py-2 rounded-xl mt-2'
            >
              Read More
            </button>
          </div>
        ))
      }
    </div>
  );
};

export default Card;
