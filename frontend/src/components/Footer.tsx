const Footer = () => {
  return (
    <footer className="bg-black text-white px-4 py-6 ">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <h2 className="text-lg font-semibold">FlipFlop</h2>
        <p className="text-sm text-gray-300">
          &copy; {new Date().getFullYear()} FlipFlop. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
