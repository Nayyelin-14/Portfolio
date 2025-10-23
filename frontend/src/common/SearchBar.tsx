import { SearchIcon } from "lucide-react";
import React from "react";

const SearchBar = () => {
  return (
    <div className="w-[200px] sm:w-[300px] md:w-[400px] lg:w-3xl  relative">
      <SearchIcon className="absolute text-black top-1 left-2  " size={20} />
      <form>
        <input
          type="text"
          className="bg-gray-300 ps-8 py-1 rounded-full w-full text-sm text-black focus:outline-none"
        />
      </form>
    </div>
  );
};

export default SearchBar;
