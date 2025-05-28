import React from 'react';
import { Calendar, Activity } from 'lucide-react';
import { calendarData } from '../../data/mockData';

const CalendarView = () => {
  const weekDays = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
  
  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900">{calendarData.month}</h3>
        <div className="flex space-x-2">
          <button className="p-1 hover:bg-gray-100 rounded">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="p-1 hover:bg-gray-100 rounded">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-4">
        {weekDays.map(day => (
          <div key={day} className="text-center text-xs sm:text-sm font-medium text-gray-500 p-1 sm:p-2">
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-1 sm:gap-2">
        {calendarData.days.map((day, index) => (
          <div key={index} className="aspect-square p-1 sm:p-2 text-center relative">
            <span className="text-xs sm:text-sm font-medium">{day.date}</span>
            <div className="mt-0.5 sm:mt-1 space-y-0.5 sm:space-y-1">
              {day.appointments.map((time, timeIndex) => (
                <div 
                  key={timeIndex} 
                  className="text-[10px] sm:text-xs bg-blue-500 text-white px-0.5 sm:px-1 py-0.5 rounded"
                >
                  {time}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* Appointment Cards Below Calendar */}
      <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <div className="bg-blue-600 text-white p-3 sm:p-4 rounded-xl">
          <div className="flex items-center space-x-2 mb-2">
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="font-medium text-sm sm:text-base">Dentist</span>
          </div>
          <p className="text-xs sm:text-sm opacity-90">09:00-11:00</p>
          <p className="text-xs opacity-75">Dr Cameron Williamson</p>
        </div>
        <div className="bg-gray-100 p-3 sm:p-4 rounded-xl">
          <div className="flex items-center space-x-2 mb-2">
            <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
            <span className="font-medium text-sm sm:text-base text-gray-900">Physiotherapy</span>
          </div>
          <p className="text-xs sm:text-sm text-gray-600">11:00-12:00</p>
          <p className="text-xs text-gray-500">Dr Kevin Djores</p>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
