import React, { useEffect } from 'react';

const LoadingPage = ({ onFinishLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinishLoading(); // Call the function passed in props that will handle the transition to the next page
    }, 3000);
    return () => clearTimeout(timer);
  }, [onFinishLoading]);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-yellow-500"></div>
      <p className="text-gray-1000 mt-3">Finding learning path recommendations for you based on your responses</p>
    </div>
  );
};

export default LoadingPage;
