import { Outlet } from "react-router";
import Footer from "../components/Footer";
import MainNav from "../components/MainNav";

const AuthLayout = () => {
  return (
    <div>
      <MainNav />
      <main className="max-w-6xl mx-auto p-4 lg:p-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AuthLayout;
