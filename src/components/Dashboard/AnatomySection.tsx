import React from 'react';
import { Heart } from 'lucide-react';

const AnatomySection = () => {
  return (
    <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
        <h2 className="text-lg md:text-xl font-semibold text-gray-900">Dashboard</h2>
        <span className="text-sm text-gray-500 mt-1 sm:mt-0">This Week</span>
      </div>
      
      <div className="relative flex items-center justify-center min-h-[300px] md:min-h-[400px]">
        {/* Human Body Illustration */}
        <div className="relative w-32 sm:w-40 md:w-48 h-60 sm:h-72 md:h-80 mx-auto">          <img 
            src="/human-anatomy.png" 
            alt="Human Anatomy" 
            className="w-full h-full object-contain"
          />
        </div>
        
        {/* Health Indicators */}
        <div className="absolute top-8 sm:top-12 left-0 sm:left-4">
          <div className="bg-blue-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm flex items-center space-x-2">
            <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Healthy Heart</span>
          </div>
        </div>
        
        <div className="absolute bottom-8 sm:bottom-12 left-0 sm:left-4">
          <div className="bg-cyan-400 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
            Healthy Leg
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnatomySection;
