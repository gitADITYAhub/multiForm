import React from 'react';

const FifthPage = ({ handleContinue, handleBack }) => {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <div className="w-full bg-gray-200 px-10 py-2 flex items-center">
                <img src="/arrow.png" alt="Back" className="w-6 h-6 cursor-pointer" onClick={handleBack} />
                <div className="flex-grow bg-gray-200">
                    <div className="bg-green-500 h-2" style={{ width: '100%' }}></div>
                </div>
            </div>

            <div className="flex-grow flex flex-col items-center justify-center px-4 py-10 space-y-6">
                <div className="flex w-full max-w-4xl items-center justify-center space-x-10">
                    {/* Image container */}
                    <div className="w-1/2 flex justify-center">
                        <img src="/images/p5.png" alt="Character" />
                    </div>

                    {/* Text and stars container */}
                    <div className="w-1/2 max-w-md space-y-4">
                        <h2 className="text-2xl font-semibold text-center">You're on your way!</h2>
                        {/* Star rating */}
                        <div className="flex justify-center">
                            <span className="text-yellow-400 text-3xl">★★★★★</span>
                        </div>
                        <p className="text-sm text-gray-500 italic text-center">
                            "Through its engaging and well-structured courses, Brilliant has taught me
                            mathematical concepts that I previously struggled to understand. I now feel
                            confident approaching both technical job interviews and real world problem
                            solving situations."
                        </p>
                        <p className="text-sm text-gray-500 font-bold text-center">— Jacob S.</p>
                    </div>
                </div>

                {/* Continue button */}
                <div className="w-full max-w-md">
                    <button
                        className="bg-blue-500 hover:bg-blue-600 transition-colors duration-200 text-white py-2 px-4 rounded-full w-full"
                        onClick={handleContinue}
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FifthPage;
