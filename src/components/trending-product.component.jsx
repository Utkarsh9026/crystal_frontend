import prodImage from "../assets/img.png";

const TrendingProduct = () => {
  return (
    <div className="flex flex-col items-center mt-10 bg-white p-6 rounded-lg shadow-lg">
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-4xl w-full">
        {/* Text Section */}
        <div className="flex flex-col items-start text-center lg:text-left lg:mr-10">
          <div className="text-right">
            <span className="text-xl lg:text-2xl text-[#31546D] mb-2">
              BEST PRICE
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#31546D] mb-2">
              Agate Phone Grip
            </h1>
          </div>

          <div className="flex items-center space-x-4 text-center lg:text-left mt-4 mb-4">
            <span className="text-[#41A0B7] text-2xl lg:text-3xl line-through">
              $44.50
            </span>
            <span className="text-[#FF6B3C] text-4xl lg:text-5xl font-bold">
              $19.50
            </span>
          </div>

          <p className="text-gray-600 text-sm lg:text-base max-w-md mb-6">
            These Pop Rock Crystal grip tops can be swapped with other tops
            depending on your mood, outfit, nails, phone case, holiday, etc.!
            Just gently squeeze the sides to remove and swap out with another
            color or design!
          </p>

          <button className="px-6 py-2 lg:px-8 lg:py-3 bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition duration-300">
            BUY NOW
          </button>
        </div>

        {/* Image Section */}
        <div className="flex items-center justify-center mt-8 lg:mt-0">
          <div className="relative flex items-center justify-center w-64 h-64 lg:w-80 lg:h-80 bg-white rounded-full shadow-2xl">
            <div className="absolute flex items-center justify-center w-48 h-48 lg:w-60 lg:h-60 bg-white rounded-full shadow-2xl">
              <img
                src={prodImage}
                alt="Product"
                className="w-24 h-24 lg:w-40 lg:h-40 object-contain rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingProduct;
