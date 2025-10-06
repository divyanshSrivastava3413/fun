import {
  ChevronDown,
  ChevronRight,
  RefreshCw,
  TriangleAlert,
} from "lucide-react";
import { useState, type ErrorInfo } from "react";

interface ErrorProps {
  errorInfo: null | ErrorInfo;
  error: Error | null;
}

const ErrorPage = ({ error, errorInfo }: ErrorProps) => {
  const [showError, setShowError] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center w-[90vw] sm:w-[80vw] md:w-[60vw] lg:w-[50vw] mx-auto h-[95vh]">
      <div className="p-2 text-white w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
        <TriangleAlert size={30} />
      </div>

      <h1 className="text-lg sm:text-xl md:text-2xl mt-2 text-center">
        Something went wrong!
      </h1>

      <p className="text-gray-600 text-sm sm:text-base md:text-md mb-4 text-center">
        There was an error processing the request. Please try again.
      </p>

      {error && (
        <>
          <div className="px-1 flex items-center w-full bg-gray-300 gap-2">
            <button
              onClick={() => setShowError(!showError)}
              className="px-2 py-2 flex justify-center items-center bg-white cursor-pointer"
            >
              {showError ? (
                <ChevronDown size={18} />
              ) : (
                <ChevronRight size={18} />
              )}
            </button>
            <p className="truncate py-2 text-sm sm:text-base md:text-lg">
              Error: {errorInfo?.componentStack ?? "An Error Occured"}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-2 py-2 flex justify-center items-center bg-white cursor-pointer"
            >
              <RefreshCw size={18} />
            </button>
          </div>

          <div
            className={`p-2 w-full overflow-y-scroll transition-all duration-200 ease-in-out border border-gray-700 ${
              showError ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-red-700 font-mono text-xs sm:text-sm md:text-base whitespace-pre-wrap">
              {errorInfo?.componentStack ?? "An Error Occured"}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default ErrorPage;
