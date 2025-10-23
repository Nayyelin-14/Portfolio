import { Menu } from "lucide-react";

const categories: string[] = [
  "Jeans",
  "Top",
  "Jacket",
  "Shirts",
  "Gym",
  "Shorts",
  "Hoodies",
];

const CategoriesBar = () => {
  return (
    <main className="bg-gray-200 text-white  py-3 px-4 ">
      <div className=" flex items-center max-w-6xl gap-25 mx-auto">
        <div className="flex items-center gap-3 text-black">
          <Menu />
          <p className="text-base font-medium ">Categories</p>
        </div>
        <div className="flex items-center gap-6">
          {categories.length > 0 &&
            categories.map((category, index) => (
              <div
                key={index}
                className="text-black p-1.5 px-2 cursor-pointer text-sm rounded-xl bg-gray-300 hover:bg-gray-100"
              >
                {category}
              </div>
            ))}
        </div>
      </div>
    </main>
  );
};

export default CategoriesBar;
