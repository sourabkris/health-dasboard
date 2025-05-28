import React from 'react';

interface Appointment {
  id: number;
  title: string;
  time: string;
  icon: string;
}

interface SimpleAppointmentCardProps {
  appointment: Appointment;
}

const SimpleAppointmentCard: React.FC<SimpleAppointmentCardProps> = ({ appointment }) => {
  return (
    <div className="bg-gray-50 p-2 sm:p-3 rounded-lg border border-gray-200">
      <div className="flex items-center space-x-2 mb-1">
        <span className="text-base sm:text-lg">{appointment.icon}</span>
        <span className="font-medium text-gray-900 text-xs sm:text-sm truncate">{appointment.title}</span>
      </div>
      <p className="text-[10px] sm:text-xs text-gray-500">{appointment.time}</p>
    </div>
  );
};

export default SimpleAppointmentCard;
