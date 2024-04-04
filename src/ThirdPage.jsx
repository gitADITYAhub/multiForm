import React from 'react';

const ThirdPage = ({ handleContinue, handleBack }) => {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <div className="w-full bg-gray-200 px-10 py-2 flex items-center">
                <img src="/arrow.png" alt="Back" className="w-6 h-6 cursor-pointer" onClick={handleBack} />
                <div className="flex-grow bg-gray-200">
                    <div className="bg-green-500 h-2" style={{ width: '60%' }}></div>
                </div>
            </div>

            <div className="flex-grow flex flex-col items-center justify-center px-4 py-10">
                <div className="flex w-full max-w-4xl items-center justify-center space-x-10">
                    {/* Image container */}
                    <div className="w-1/2 flex justify-center">
                        <img src="/images/pulley.png" alt="Illustration" />
                    </div>

                    {/* Text container */}
                    <div className="w-1/2">
                        <h3 className="text-2xl font-bold mb-4">You're in the right place</h3>
                        <h1 className="text-sm font-semibold text-gray-800 mb-8">
                            Brilliant gets you hands-on to help improve your professional skills and knowledge. You'll
                            interact with concepts and solve fun problems in math, science, and computer science.
                        </h1>
                    </div>
                </div>

                {/* Continue button - aligned as in the previous pages */}
                <div className="w-full max-w-md">
                    <button
                        className="mt-8 bg-blue-500 hover:bg-blue-600 transition-colors duration-200 text-white py-2 px-4 rounded-full w-full"
                        onClick={handleContinue}
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ThirdPage;
