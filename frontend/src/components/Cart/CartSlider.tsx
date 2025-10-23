import { X } from "lucide-react";
import { products } from "../../constants/sampleProduct";
import CartItem from "./CartItem";

interface SliderProps {
  isCartOpen: boolean;
  setCartOpen: (value: boolean) => void;
}

const CartSlider = ({ isCartOpen, setCartOpen }: SliderProps) => {
  return (
    <div
      className={`bg-gray-100 text-black min-w-2/8 h-full fixed top-0 right-0 transform transition-transform duration-300 ease-in-out ${
        isCartOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <X
        onClick={() => setCartOpen(false)}
        className="absolute right-2 top-3 text-black cursor-pointer"
      />
      <div className="my-10 p-4 flex flex-col gap-4 max-w-xl mx-auto">
        <p className=" text-xl font-medium">Cart Items</p>
        <div className="flex-1 overflow-auto max-h-[750px] space-y-4">
          {products && products.length > 0 ? (
            products.map((p, index) => (
              <CartItem
                key={index} // always add a key
                name={p.name}
                size={p.size[0]}
                color={Array.isArray(p.color) ? p.color : [p.color]}
                price={p.price}
                image={p.images[0].url}
              />
            ))
          ) : (
            <p className="text-gray-400 text-center">Your cart is empty</p>
          )}
        </div>

        {/* Checkout button */}
        <button className="bg-black text-white p-3 rounded-xl w-full hover:bg-gray-800 transition-colors">
          Go to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartSlider;
