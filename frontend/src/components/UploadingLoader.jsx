import React from "react";

function UploadingLoader({isLoading }) {
  if (!isLoading) return null; // Don't render anything if modal is not open

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex justify-around bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex items-center justify-center text-3xl font-mono ">
          <h1>
            <span className="inline-block animate-bounce-custom">U</span>
            <span className="inline-block animate-bounce-custom">p</span>
            <span className="inline-block animate-bounce-custom">l</span>
            <span className="inline-block animate-bounce-custom">o</span>
            <span className="inline-block animate-bounce-custom">a</span>
            <span className="inline-block animate-bounce-custom">d</span>
            <span className="inline-block animate-bounce-custom">i</span>
            <span className="inline-block animate-bounce-custom">n</span>
            <span className="inline-block animate-bounce-custom">g </span>
            &nbsp;
            <span className="inline-block animate-bounce-custom">P</span>
            <span className="inline-block animate-bounce-custom">o</span>
            <span className="inline-block animate-bounce-custom">s</span>
            <span className="inline-block animate-bounce-custom">t</span>
          </h1>
        </div>
        <div className="w-16 h-16 border-8 border-blue-500 border-solid rounded-full animate-spin border-t-transparent"></div>
      </div>
    </div>
  );
}

export default UploadingLoader;

