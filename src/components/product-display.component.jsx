import { useState } from "react";
import prodImage from "../assets/img.png";

const ProductDisplay = () => {
  const Card = [
    {
      image: prodImage,
      title: "Crystal Agate Phone Grip 1",
      price: "18.99$",
    },
    {
      image: prodImage,
      title: "Crystal Agate Phone Grip 2",
      price: "18.99$",
    },
    {
      image: prodImage,
      title: "Crystal Agate Phone Grip 3",
      price: "18.99$",
    },
    {
      image: prodImage,
      title: "Crystal Agate Phone Grip 4",
      price: "18.99$",
    },
    {
      image: prodImage,
      title: "Crystal Agate Phone Grip 5",
      price: "18.99$",
    },
    {
      image: prodImage,
      title: "Crystal Agate Phone Grip 6",
      price: "18.99$",
    },
  ];

  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (index) => {
    setSelectedButton(index);
  };

  return (
    <div className="flex flex-col mt-9 w-full">
      <h1 className="text-5xl text-center font-bold text-[#31546D]">
        All Products
      </h1>
      <div className="flex pt-10 pl-7 space-x-8">
        <div className="flex items-center space-x-2">
          <span className="text-gray-500 font-bold">Filter:</span>
          <select className="border border-gray-300 font-bold rounded px-3 py-2 text-gray-700 focus:outline-none">
            <option>All Products</option>
            <option>Category 1</option>
            <option>Category 2</option>
            <option>Category 3</option>
          </select>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-gray-500 font-bold">Sort:</span>
          <select className="border border-gray-300 font-bold rounded px-3 py-2 text-gray-700 focus:outline-none">
            <option>Best Selling</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
          </select>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-7 mt-10 ml-12 mr-7 ">
        {Card.map((prod, i) => (
          <div key={i} className="bg-white shadow-2xl rounded-xl p-6 max-w-xs">
            <img
              src={prod.image}
              alt={prod.title}
              className="w-32 h-32 mx-auto mb-4"
            />

            <h2 className="text-gray-800 text-xl font-semibold text-center mb-2">
              {prod.title}
            </h2>

            <p className="text-[#317189] text-center text-lg font-medium mb-4">
              {prod.price}
            </p>

            <div className="text-center">
              <button
                onClick={() => handleButtonClick(i)}
                className={
                  selectedButton === i
                    ? "bg-gradient-to-r from-blue-400 to-blue-600 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition duration-200"
                    : "border-2 border-[#75CCEB] text-[#75CCEB] px-6 py-2 rounded-full font-bold hover:bg-blue-100 transition duration-200"
                }
              >
                BUY NOW
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button className="border-2 border-[#75CCEB] text-[#75CCEB] px-6 py-2 rounded-full font-bold hover:bg-blue-100 transition duration-200">
          View All
        </button>
      </div>
    </div>
  );
};

export default ProductDisplay;
