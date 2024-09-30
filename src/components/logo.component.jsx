const Logo = () => {
  return (
    <div
      className="flex items-center p-2 space-x-1 mt-2 ml-3"
      style={{ width: "199px", height: "64px" }}
    >
      {/* Logo container */}
      <div className="relative flex items-center justify-center w-10 h-16 bg-gradient-to-r from-blue-300 to-pink-300 rounded-full">
        {/* Icon inside the logo */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="white"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 2l4 8h-8l4-8zM4 10l8 10-8-10zm16 0l-8 10 8-10z"
          />
        </svg>
      </div>

      {/* Logo text */}
      <h1 className="text-xl text-white whitespace-nowrap">Pop Rock Crystal</h1>
    </div>
  );
};

export default Logo;
