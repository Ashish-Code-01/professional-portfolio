import React from 'react';

const Loader = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="relative w-24 h-24">
                <div className="absolute inset-0 border-4 border-blue-500/30 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
                <div className="absolute inset-0 border-4 border-blue-400/20 rounded-full animate-pulse"></div>
            </div>
        </div>
    );
};

export default Loader;