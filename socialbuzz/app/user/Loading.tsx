import React from "react";

export default function Loading () {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80"></div>
      <div className="relative z-10 p-4 bg-white rounded-lg shadow-lg">
        {/* Content of the real page */}
      </div>
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-white via-transparent to-white opacity-0"></div>
    </div>
  );
};

