import { Outlet } from "react-router";
import Navbar from "../common/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <section>
      <Navbar />
      <main className="max-w-6xl mx-auto p-4 lg:p-0">
        <Outlet />
      </main>
      <Footer />
    </section>
  );
};

export default MainLayout;
