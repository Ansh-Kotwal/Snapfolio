import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-32 h-32 border-8 border-blue-500 border-solid rounded-full animate-spin border-t-transparent"></div>
    </div>
  );
};

export default LoadingSpinner;
