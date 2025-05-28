import React from 'react';
import { healthStatus } from '../../data/mockData';

const HealthStatusCards = () => {
  return (
    <div className="space-y-2 sm:space-y-4">
      {healthStatus.map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.id} className="bg-white rounded-xl p-3 sm:p-4 shadow-sm border border-gray-100">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
              <div className={`p-1.5 sm:p-2 rounded-lg ${
                item.status === 'warning' ? 'bg-red-100' : 'bg-green-100'
              }`}>
                <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${
                  item.status === 'warning' ? 'text-red-600' : 'text-green-600'
                }`} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{item.name}</h3>
                <p className="text-xs text-gray-500">{item.date}</p>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
              <div className={`h-1.5 sm:h-2 rounded-full ${
                item.status === 'warning' ? 'bg-red-500 w-3/4' : 'bg-green-500 w-5/6'
              }`}></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HealthStatusCards;
