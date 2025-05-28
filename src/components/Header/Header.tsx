import React from 'react';
import { Search, Bell, Plus, User, Menu } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4">
      <div className="flex items-center justify-between max-w-[1600px] mx-auto">
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuClick}
            className="p-1 -ml-1 rounded-lg hover:bg-gray-100 lg:hidden"
          >
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
          <div className="text-xl sm:text-2xl font-bold text-cyan-500">
            Health<span className="text-gray-900">care.</span>
          </div>
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-48 md:w-64 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-4">
          <Bell className="w-5 h-5 text-gray-600 cursor-pointer" />
          <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
          <button className="bg-cyan-500 text-white p-2 rounded-lg hover:bg-cyan-600">
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
