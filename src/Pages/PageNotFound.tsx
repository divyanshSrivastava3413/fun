import { FileQuestion } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center w-[90vw] sm:w-[80vw] md:w-[60vw] lg:w-[50vw] mx-auto h-[95vh]">
      <h1 className="text-8xl font-serif font-bold text-center">Oops!</h1>
      <span className="flex justify-center items-center gap-1">
        <p className="text-2xl flex gap-1 items-center font-semibold mt-3">
          Error 404 <FileQuestion size={30} /> -
        </p>
        <p className="text-2xl text-red-600 flex gap-1 items-center font-semibold mt-3">
          Page Not Found.
        </p>
      </span>
      <button
        onClick={() => navigate("/")}
        className="px-3 py-2 bg-blue-600 font-semibold text-white cursor-pointer hover:bg-blue-500 transition-colors ease-in-out duration-200 mt-3"
      >
        Go to Home
      </button>
    </div>
  );
};

export default PageNotFound;
