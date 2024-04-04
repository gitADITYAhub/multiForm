import React from 'react';

const FinalPage = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-10">
            <h1 className="text-2xl font-bold text-center mb-6">Learning paths based on your answers</h1>
            <p className="text-sm font-semibold text-center mb-10">Choose one to get started. You can switch anytime.</p>
            <div className="flex flex-wrap justify-center gap-8">
                <div className="relative flex flex-col items-center p-4 border border-gray-800 rounded-lg">
                    <div className="absolute top-0 -translate-y-1/2 bg-blue-100 text-blue-800 text-xs rounded-full py-1 px-3 transform">
                        MOST POPULAR
                    </div>
                    <img src="https://cdn-icons-png.flaticon.com/128/14746/14746619.png" alt="Math Icon" className="mb-4" />
                    <h2 className="text-lg font-semibold mb-2">Foundational Math</h2>
                    <p className="text-sm text-gray-600 text-center mb-4">
                        Build your foundational skills in algebra, geometry, and probability.
                    </p>
                </div>
                <div className="flex flex-col items-center p-4 border border-gray-800 rounded-lg">
                    <img src="https://cdn-icons-png.flaticon.com/128/14746/14746619.png" alt="Thinking Icon" className="mb-4" />
                    <h2 className="text-lg font-semibold mb-2">Mathematical Thinking</h2>
                    <p className="text-sm text-gray-600 text-center mb-4">
                        Build your foundational skills in algebra, geometry, and probability.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FinalPage;