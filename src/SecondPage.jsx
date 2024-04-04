import React, { useState } from 'react';

const SecondPage = ({ handleContinue, handleBack }) => {
  // State to keep track of the selected option
  const [selectedOption, setSelectedOption] = useState(null);

  // Define the options with corresponding labels and icon paths
  const options = [
    { label: 'Learning specific skills to advance my career', icon: 'https://cdn-icons-png.flaticon.com/128/3281/3281323.png' },
    { label: 'Exploring new topics I\'m interested in', icon: 'https://cdn-icons-png.flaticon.com/128/471/471012.png' },
    { label: 'Refreshing my math foundations', icon: 'https://cdn-icons-png.flaticon.com/128/639/639347.png' },
    { label: 'Exercising my brain to stay sharp', icon: 'https://cdn-icons-png.flaticon.com/128/3500/3500952.png' },
    { label: 'Something else', icon: 'https://cdn-icons-png.flaticon.com/128/2702/2702134.png' }
  ];
  const continueToNextPage = () => {
    if (selectedOption !== null) {
      handleContinue();
    } else {
      // Optionally handle the case where no option is selected
      alert('Please select an option to continue.');
    }
  };
  // Handle option selection
  const selectOption = (index) => {
    setSelectedOption(index);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Progress bar with back and front icons */}
      <div className="w-full bg-gray-200 px-10 py-2 flex items-center">
        <img src="/arrow.png" alt="Back" className="w-6 h-6 cursor-pointer" onClick={handleBack} />
        <div className="flex-grow bg-gray-200">
          <div className="bg-green-500 h-2" style={{ width: '40%' }}></div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center flex-grow px-4 py-10">
        <h2 className="text-2xl font-semibold mb-4">Which are you most interested in?</h2>
        <p className="text-sm text-gray-500 mb-8">Choose just one. This will help us get started (but won't limit your experience).</p>

        {/* Options */}
        <div className="space-y-4 w-full max-w-md">
          {options.map((option, index) => (
            <button
              key={index}
              className={`flex items-center space-x-3 bg-gray-100 ${selectedOption === index ? 'ring-2 ring-green-500' : ''
                } hover:bg-gray-200 transition-colors duration-200 py-3 px-4 rounded-lg w-full`}
              onClick={() => selectOption(index)}
            >
              <img src={option.icon} alt={option.label} className="w-6 h-6" />
              <span className="font-medium">{option.label}</span>
            </button>
          ))}
        </div>

        {/* Continue button */}
        <button
          className="mt-8 bg-blue-500 hover:bg-blue-600 transition-colors duration-200 text-white py-2 px-4 rounded-full w-full max-w-md"
          onClick={continueToNextPage}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default SecondPage;
