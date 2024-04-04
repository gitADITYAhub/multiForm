import React, { useState } from 'react';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import FourthPage from './FourthPage';
import FifthPage from './FifthPage';
import LoadingPage from './LoadingPage';
import FinalPage from './FinalPage'
import './index.css';


const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [progress, setProgress] = useState(20); // Initial progress set to 16.67% for the first page
  const [isLoading, setIsLoading] = useState(false);
  const handleContinue = () => {
    if (currentPage === 5) {
      setIsLoading(true);
    }
    else {
      setCurrentPage(currentPage + 1);
      setProgress(progress + 20); // Increment progress by 16.67% for each page
    }
  };
  const finishLoading = () => {
    setIsLoading(false);
    setCurrentPage(currentPage + 1); // Move to the next page after loading is done
  };
  const handleBack = () => {
    setCurrentPage(currentPage - 1);
    setProgress(progress - 20); // Decrement progress by 16.67% for each page
  };
  const renderPage = () => {
    if (isLoading) {
      return <LoadingPage onFinishLoading={finishLoading} />;
    }
    switch (currentPage) {
      case 1:
        return <FirstPage handleContinue={handleContinue} />;
      case 2:
        return <SecondPage handleContinue={handleContinue} handleBack={handleBack} />;
      case 3:
        return <ThirdPage handleContinue={handleContinue} handleBack={handleBack} />;
      case 4:
        return <FourthPage handleContinue={handleContinue} handleBack={handleBack} />;
      case 5:
        return <FifthPage handleContinue={handleContinue} handleBack={handleBack} />;
      case 6:
        return <FinalPage />
        default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="h-2 bg-gray-200">
        <div
          className="h-full bg-green-500 transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      {renderPage()}
    </div>
  );
};

export default App;