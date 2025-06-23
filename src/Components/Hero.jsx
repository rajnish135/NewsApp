import { useContext } from 'react';
import Card from './Card.jsx';
import { Context } from './Context/Store';

const Hero = () => {
  const { newsData, setSearch } = useContext(Context);

  const handleClick = (input) => {
    setSearch(input);
  };

  const topics = ["Sports", "Politics", "Health", "Entertainment", "Technology","Education","World"];

  return (
    <div className="flex flex-col items-center bg-gradient-to-br from-blue-100 via-pink-100 to-yellow-100 min-h-screen px-4 py-10">

      <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-orange-500 to-pink-500 text-transparent bg-clip-text text-center mb-10 drop-shadow-sm">
        Stay Updated with <span className="italic">TrendyNews!</span>
      </h2>

      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {topics.map((topic, index) => (
          <button
            key={index}
            onClick={() => handleClick(topic)}
            className="transition-all duration-300 ease-in-out bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full shadow-lg hover:scale-105 hover:shadow-orange-300 active:scale-95"
          >
            {topic}
          </button>
        ))}
      </div>

      <div className="w-full bg-white/60 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-gray-200">
        <Card data={newsData} />
      </div>
    </div>
  );
};

export default Hero;
