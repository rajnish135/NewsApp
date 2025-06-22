import img from '../assets/Not-available.jpg'

const Card = ({ data }) => {
  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  const formatDate = (publishDate) => {
    const date = new Date(publishDate);
    const options = { day: '2-digit', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options);
  };

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-6 md:px-16 bg-gradient-to-br from-blue-50 via-pink-50 to-yellow-50 py-6 rounded-xl'>
      {
        data?.map((news, index) => (

           news?.image !== 'None' && (
            <div
              key={index}
              className='p-5 shadow-xl rounded-2xl bg-gradient-to-br from-white via-blue-50 to-gray-100 border hover:from-blue-100 hover:via-pink-100 hover:to-yellow-100 hover:shadow-blue-300 transition-all duration-500 cursor-pointer'
            >
              <img 
                src={news.image || img} 
                alt="news" 
                className='w-full h-52 object-cover rounded-lg mb-4 transition-transform duration-300 hover:scale-105'
                onError={(e) => e.target.src = img}
              />

              <h2 
                onClick={() => handleClick(news.url)} 
                className='text-lg font-semibold text-gray-900 hover:underline hover:text-blue-700'
              >
                {news.title?.slice(0, 200)}
              </h2>

              <p className='mt-3 text-gray-700 text-sm leading-relaxed'>
                {news.description 
                  ? `${news.description.slice(0, 300)}...` 
                  : "No description available."}
              </p>

              <div className='flex justify-between items-center mt-4 text-sm text-gray-500'>
                <p>Source: <span className="font-medium text-gray-700">{news.author || "Unknown"}</span></p>
                <p className="text-right">{formatDate(news.published)}</p>
              </div>

              <button 
                onClick={() => handleClick(news.url)} 
                className='mt-5 w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all hover:cursor-pointer'
              >
                Read More
              </button>
            </div>
          )
        ))
      }
    </div>
  );
};

export default Card;
