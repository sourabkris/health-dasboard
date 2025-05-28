import { type FC } from 'react';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import ActivityFeed from '../Activity/ActivityFeed';
import CalendarView from '../Calendar/CalendarView';
import UpcomingSchedule from '../Appointments/UpcomingSchedule';

const DashboardMainContent: FC = () => {
  return (
    <div className="min-h-full w-full bg-gray-50 p-4 sm:p-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 max-w-[1600px] mx-auto">
        {/* Left Column - Anatomy and Health Status */}
        <div className="lg:col-span-5 space-y-4 sm:space-y-6">
          <AnatomySection />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <HealthStatusCards />
            <ActivityFeed />
          </div>
        </div>
        
        {/* Right Column - Calendar and Schedule */}
        <div className="lg:col-span-7 space-y-4 sm:space-y-6">
          <CalendarView />
          <UpcomingSchedule />
        </div>
      </div>
    </div>
  );
};

export default DashboardMainContent;
