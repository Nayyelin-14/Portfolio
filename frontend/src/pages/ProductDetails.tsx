import { useEffect, useState } from "react";
// import { useParams } from "react-router";
import { products } from "../constants/sampleProduct";
import ProductRating from "../components/Products/ProductRating";
import { Minus, Plus } from "lucide-react";

const sampleProduct = products[0];
const ProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>("#000000");
  const [selectedSize, setSelectedSize] = useState<string | null>("M");
  //   const { id } = useParams();

  useEffect(() => {
    if (sampleProduct.images.length > 0) {
      setSelectedImage(sampleProduct.images[0].url);
    }
    if (sampleProduct.color.length > 0) {
      setSelectedColor(sampleProduct.color[0]);
    }
  }, []);
  return (
    <section className="grid grid-cols-1  md:grid-cols-2 gap-8 my-10">
      <div className="grid grid-cols-4 gap-2">
        <div className="col-span-1 flex flex-col gap-3">
          {sampleProduct.images &&
            sampleProduct.images.map((img, index) => (
              <div
                key={index}
                className={`${
                  selectedImage === img.url && "border-2  border-gray-300"
                } object-cover w-24 h-24 p-1 rounded-xl`}
              >
                <img
                  onClick={() => setSelectedImage(img.url)}
                  src={img.url}
                  alt=""
                  className="w-full h-full rounded-xl cursor-pointer"
                />
              </div>
            ))}
        </div>
        {selectedImage && (
          <img
            src={selectedImage}
            alt="Selected product"
            className="col-span-3 h-full aspect-square rounded-xl object-cover"
          />
        )}
      </div>
      <div className="flex flex-col justify-between">
        <p className=" text-3xl font-bold ">{sampleProduct.name}</p>
        <ProductRating ratingCount={sampleProduct.rating} />
        <p className="text-3xl font-extrabold mb-1 ">
          {" "}
          $ {sampleProduct.price}
        </p>
        <p className="text-sm font-medium text-gray-400">
          {sampleProduct.description}
        </p>
        <hr className="text-xl font-bold my-2 text-gray-400" />
        <p className=" text-xl font-bold">Colors</p>
        <div className="flex gap-2 mt-2 items-center">
          {sampleProduct.color?.map((c, index) => (
            <div
              key={index}
              className={`rounded-full w-4 h-4 p-0.5 cursor-pointer ${
                selectedColor === c && "border-2 border-gray-400"
              }`}
              style={{ backgroundColor: c }}
              onClick={() => setSelectedColor(c)}
            />
          ))}
        </div>
        <hr className="text-xl font-bold my-2 text-gray-400" />
        <p className=" text-xl font-bold ">Sizes</p>

        <div className="flex gap-2 mt-2 items-center">
          {sampleProduct.size?.map((s, index) => (
            <div
              key={index}
              className={`p-1 rounded-full px-3 text-center cursor-pointer text-sm ${
                selectedSize === s && "border-2  bg-black text-white"
              }`}
              onClick={() => setSelectedSize(s)}
            >
              <span>{s}</span>
            </div>
          ))}
        </div>
        <hr className="text-xl font-bold my-2 text-gray-400" />
        <div className="flex gap-4 items-center">
          <div className="flex gap-2 items-center">
            <button className="w-6 h-6 flex justify-center items-center border border-gray-200 bg-black text-white cursor-pointer rounded hover:bg-black/60">
              <Minus size={12} />
            </button>
            <span>1</span>
            <button className="w-6 h-6 flex justify-center items-center border border-gray-200 bg-black text-white rounded hover:bg-black/60 cursor-pointer">
              <Plus size={12} />
            </button>
          </div>

          <button className="p-2 rounded-xl bg-black w-full text-center text-sm text-white hover:bg-black/60 cursor-pointer">
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
