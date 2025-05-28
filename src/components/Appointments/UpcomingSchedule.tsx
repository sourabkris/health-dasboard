import React from 'react';
import SimpleAppointmentCard from './SimpleAppointmentCard';
import { upcomingAppointments } from '../../data/mockData';

const UpcomingSchedule = () => {
  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">The Upcoming Schedule</h3>
      
      <div className="space-y-4 sm:space-y-6">
        {upcomingAppointments.map((dayData, dayIndex) => (
          <div key={dayIndex}>
            <h4 className="text-xs sm:text-sm font-medium text-gray-500 mb-2 sm:mb-3">{dayData.day}</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              {dayData.appointments.map((appointment) => (
                <SimpleAppointmentCard key={appointment.id} appointment={appointment} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingSchedule;
