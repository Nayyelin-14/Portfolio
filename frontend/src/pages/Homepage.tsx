import { useSelector } from "react-redux";
import ProductList from "../components/Products/ProductList";
import type { RootState } from "@/store";

const Homepage = () => {
  const userInfo = useSelector((state: RootState) => state.auth.userInfo);
  console.log(userInfo);
  return (
    <main className="my-10">
      <div className="mb-10">
        <h1 className="text-center text-2xl font-bold mb-10">Populars</h1>
        <ProductList />
      </div>
      <div>
        <h1 className="text-center text-2xl font-bold mb-10">Best Deals</h1>
        <ProductList />
      </div>
    </main>
  );
};

export default Homepage;
