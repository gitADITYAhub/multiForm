import React, { useState } from 'react';

const FourthPage = ({ handleContinue, handleBack }) => {
    // State to keep track of the selected option
    const [selectedOption, setSelectedOption] = useState(null);

    // Assuming you'll replace these with the actual image paths
    const options = [
        { label: 'Arithmetic Introductory', src: '/images/ar.png' },
        { label: 'Basic Algebra Foundational', src: '/images/ar.png' },
        { label: 'Intermediate Algebra Intermediate', src: '/images/ba.png' },
        { label: 'Calculus Advanced', src: '/images/cal.png' }
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
            <div className="w-full bg-gray-200 px-10 py-2 flex items-center">
                <img src="/arrow.png" alt="Back" className="w-6 h-6 cursor-pointer" onClick={handleBack} />
                <div className="flex-grow bg-gray-200">
                    <div className="bg-green-500 h-2" style={{ width: '80%' }}></div>
                </div>
            </div>

            <div className="flex-grow flex flex-col items-center justify-center px-4 py-10">
                <div className="text-center mb-10">
                    <h2 className="text-2xl font-semibold mb-4">What is your math comfort level?</h2>
                    <p className="text-sm text-gray-500">Choose the highest level you feel confident in — you can always adjust later.</p>
                </div>

                {/* Option images */}
                <div className="grid grid-cols-4 gap-4 mb-10">
                    {options.map((option, index) => (
                        <div
                            key={index}
                            className={`p-4 border-2 ${selectedOption === index ? 'ring-2 ring-green-500' : 'border-gray-200'} 
                          rounded-lg cursor-pointer flex flex-col items-center transition-shadow duration-300`}
                            onClick={() => selectOption(index)}
                        >
                            <img src={option.src} alt={option.label} className="mb-2" />
                        </div>
                    ))}
                </div>

                {/* Continue button */}
                <div className="w-full max-w-md">
                    <button
                        className="bg-blue-500 hover:bg-blue-600 transition-colors duration-200 text-white py-2 px-4 rounded-full w-full"
                        onClick={continueToNextPage}
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FourthPage;
