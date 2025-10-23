import { Loader as LoaderIcon } from "lucide-react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <LoaderIcon className="animate-spin w-10 h-10 text-black" />
    </div>
  );
};

export default Loader;
