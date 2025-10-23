import React from "react";
import ProductRating from "./ProductRating";
import { useNavigate } from "react-router";

type ProductProps = {
  id: number;
  name: string;
  image: string;
  size: string[];
  rating: number;
  category: string;
  price: number;
  color: string[];
};

const ProductsCards: React.FC<ProductProps> = ({
  name,
  id,
  image,
  size,
  rating,
  category,
  price,
  color,
}) => {
  const navigate = useNavigate();
  return (
    <div
      className="border border-black "
      onClick={() => navigate(`/products/${id}`)}
    >
      <img src={image} alt="" className="rounded-lg " />
      <p className="font-medium my-2">{name}</p>
      <p> {size.join(" , ")}</p>
      <ProductRating ratingCount={rating} />
      <p> {category}</p>
      <p className="text-lg font-bold">$ {price}</p>
      <p> {color}</p>
    </div>
  );
};

export default ProductsCards;
