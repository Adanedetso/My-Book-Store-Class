import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center">
      {/* Create a circle with spinning animation */}
      <div className="w-16 h-16 border-4 border-t-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
