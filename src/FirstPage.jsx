import React from 'react';
import { useState } from 'react';
const FirstPage = ({ handleContinue }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const options = [
        { label: 'Student or soon to be enrolled', icon: 'https://cdn-icons-png.flaticon.com/128/2436/2436683.png' },
        { label: 'Professional pursuing a career', icon: 'https://cdn-icons-png.flaticon.com/128/998/998412.png' },
        { label: 'Parent of a school-age child', icon: 'https://cdn-icons-png.flaticon.com/128/547/547601.png' },
        { label: 'Lifelong learner', icon: 'https://cdn-icons-png.flaticon.com/128/10236/10236029.png' },
        { label: 'Teacher', icon: 'https://cdn-icons-png.flaticon.com/128/1048/1048949.png' },
        { label: 'Other', icon: 'https://cdn-icons-png.flaticon.com/128/3356/3356595.png' }
    ];
    const selectOption = (index) => {
        setSelectedOption(index);
    };
    const continueToNextPage = () => {
        if (selectedOption !== null) {
            handleContinue();
        } else {
            // Optionally handle the case where no option is selected
            alert('Please select an option to continue.');
        }
    };
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <div className="w-full bg-gray-200 px-10 py-2 flex items-center">
                <div className="flex-grow bg-gray-200">
                    <div className="bg-green-500 h-2" style={{ width: '20%' }}></div>
                </div>
                <div className="w-6 h-6 cursor-pointer"/>
            </div>

            <div className="flex flex-col items-center justify-center flex-grow px-4 py-10">
                <h2 className="text-2xl font-semibold mb-4">Which describes you best?</h2>
                <p className="text-sm text-gray-500 mb-8">This will help us personalize your experience.</p>

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

// Define the options with corresponding labels and icon paths


export default FirstPage;
