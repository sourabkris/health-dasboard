import React from 'react';
import { chartData } from '../../data/mockData';

const ActivityFeed = () => {
  return (
    <div className="bg-white rounded-xl p-3 sm:p-6 shadow-sm">
      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-4">Activity</h3>
      <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">3 appointments on this week</p>
      
      <div className="flex items-end justify-between h-24 sm:h-32 space-x-1 sm:space-x-2">
        {chartData.map((item, index) => (
          <div key={index} className="flex flex-col items-center flex-1">
            <div 
              className="w-full bg-blue-500 rounded-t-sm mb-1 sm:mb-2 transition-all duration-300"
              style={{ height: `${Math.floor(item.value * 0.8)}px` }}
            ></div>
            <span className="text-[10px] sm:text-xs text-gray-500">{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
