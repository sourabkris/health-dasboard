import React from 'react';
import { navigationItems } from '../../data/mockData';

const Sidebar = () => {
  return (
    <div className="w-64 bg-white border-r border-gray-200 h-full flex flex-col overflow-y-auto">
      <div className="p-4 sm:p-6">
        <h3 className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wide mb-3 sm:mb-4">General</h3>
        <nav className="space-y-1 sm:space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`flex items-center space-x-2 sm:space-x-3 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg cursor-pointer transition-colors ${
                  item.active 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-medium text-sm sm:text-base">{item.name}</span>
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
