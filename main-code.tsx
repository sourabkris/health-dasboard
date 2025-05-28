import React from 'react';
import { Search, Bell, Plus, Calendar, Activity, Heart, User, MessageCircle, HelpCircle, Settings, BarChart3, Clock, Stethoscope, Eye, Brain } from 'lucide-react';

// Mock Data
const navigationItems = [
  { id: 1, name: 'Dashboard', icon: BarChart3, active: true },
  { id: 2, name: 'History', icon: Clock, active: false },
  { id: 3, name: 'Calendar', icon: Calendar, active: false },
  { id: 4, name: 'Appointments', icon: User, active: false },
  { id: 5, name: 'Statistics', icon: Activity, active: false },
  { id: 6, name: 'Tests', icon: Stethoscope, active: false },
  { id: 7, name: 'Chat', icon: MessageCircle, active: false },
  { id: 8, name: 'Support', icon: HelpCircle, active: false },
  { id: 9, name: 'Setting', icon: Settings, active: false }
];

const healthStatus = [
  { id: 1, name: 'Lungs', date: 'Oct 19, 2021', status: 'warning', icon: Activity },
  { id: 2, name: 'Teeth', date: 'Oct 19, 2021', status: 'good', icon: Calendar },
  { id: 3, name: 'Bone', date: 'Oct 19, 2021', status: 'warning', icon: Settings }
];

const upcomingAppointments = [
  {
    day: 'On Thursday',
    appointments: [
      { id: 1, title: 'Health checkup complete', time: '11:00 AM', icon: '🎯' },
      { id: 2, title: 'Ophthalmologist', time: '14:00 PM', icon: '👁️' }
    ]
  },
  {
    day: 'On Saturday',
    appointments: [
      { id: 3, title: 'Cardiologist', time: '12:00 AM', icon: '❤️' },
      { id: 4, title: 'Neurologist', time: '16:00 PM', icon: '🧠' }
    ]
  }
];

const calendarData = {
  month: 'October 2021',
  days: [
    { date: 25, appointments: [] },
    { date: 26, appointments: ['09:00'] },
    { date: 27, appointments: [] },
    { date: 28, appointments: ['11:00'] },
    { date: 29, appointments: [] },
    { date: 30, appointments: ['13:00', '09:00'] },
    { date: 31, appointments: [] }
  ]
};

// Header Component
const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div className="text-2xl font-bold text-cyan-500">
          Health<span className="text-gray-900">care.</span>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Bell className="w-5 h-5 text-gray-600 cursor-pointer" />
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
        </div>
        <button className="bg-cyan-500 text-white p-2 rounded-lg hover:bg-cyan-600">
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
};

// Sidebar Component
const Sidebar = () => {
  return (
    <div className="w-64 bg-white border-r border-gray-200 h-full flex flex-col">
      <div className="p-6">
        <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">General</h3>
        <nav className="space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer transition-colors ${
                  item.active 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.name}</span>
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

// Anatomy Section Component
const AnatomySection = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Dashboard</h2>
        <span className="text-sm text-gray-500">This Week</span>
      </div>
      
      <div className="relative flex items-center justify-center">
        {/* Human Body Illustration Placeholder */}
        <div className="relative w-48 h-80 bg-gradient-to-b from-orange-200 to-red-300 rounded-full mx-8" 
             style={{clipPath: 'ellipse(40% 45% at 50% 45%)'}}>
          {/* Head */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-20 bg-orange-300 rounded-full"></div>
          
          {/* Body */}
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-24 h-32 bg-red-400 rounded-lg"></div>
          
          {/* Arms */}
          <div className="absolute top-20 left-2 w-4 h-24 bg-red-400 rounded-lg transform -rotate-12"></div>
          <div className="absolute top-20 right-2 w-4 h-24 bg-red-400 rounded-lg transform rotate-12"></div>
          
          {/* Legs */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-3 w-6 h-20 bg-red-400 rounded-lg"></div>
          <div className="absolute bottom-8 left-1/2 transform translate-x-3 w-6 h-20 bg-red-400 rounded-lg"></div>
        </div>
        
        {/* Health Indicators */}
        <div className="absolute top-12 left-4">
          <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm flex items-center space-x-2">
            <Heart className="w-4 h-4" />
            <span>Healthy Heart</span>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-4">
          <div className="bg-cyan-400 text-white px-3 py-1 rounded-full text-sm">
            Healthy Leg
          </div>
        </div>
      </div>
    </div>
  );
};

// Health Status Cards Component
const HealthStatusCards = () => {
  return (
    <div className="space-y-4">
      {healthStatus.map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center space-x-3 mb-2">
              <div className={`p-2 rounded-lg ${
                item.status === 'warning' ? 'bg-red-100' : 'bg-green-100'
              }`}>
                <Icon className={`w-5 h-5 ${
                  item.status === 'warning' ? 'text-red-600' : 'text-green-600'
                }`} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.date}</p>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className={`h-2 rounded-full ${
                item.status === 'warning' ? 'bg-red-500 w-3/4' : 'bg-green-500 w-5/6'
              }`}></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// Calendar View Component
const CalendarView = () => {
  const weekDays = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
  
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{calendarData.month}</h3>
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
      
      <div className="grid grid-cols-7 gap-2 mb-4">
        {weekDays.map(day => (
          <div key={day} className="text-center text-sm font-medium text-gray-500 p-2">
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-2">
        {calendarData.days.map((day, index) => (
          <div key={index} className="aspect-square p-2 text-center relative">
            <span className="text-sm font-medium">{day.date}</span>
            <div className="mt-1 space-y-1">
              {day.appointments.map((time, timeIndex) => (
                <div key={timeIndex} className="text-xs bg-blue-500 text-white px-1 py-0.5 rounded">
                  {time}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* Appointment Cards Below Calendar */}
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="bg-blue-600 text-white p-4 rounded-xl">
          <div className="flex items-center space-x-2 mb-2">
            <Calendar className="w-5 h-5" />
            <span className="font-medium">Dentist</span>
          </div>
          <p className="text-sm opacity-90">09:00-11:00</p>
          <p className="text-xs opacity-75">Dr Cameron Williamson</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-xl">
          <div className="flex items-center space-x-2 mb-2">
            <Activity className="w-5 h-5 text-orange-500" />
            <span className="font-medium text-gray-900">Physiotherapy Appointment</span>
          </div>
          <p className="text-sm text-gray-600">11:00-12:00</p>
          <p className="text-xs text-gray-500">Dr Kevin Djores</p>
        </div>
      </div>
    </div>
  );
};

// Upcoming Schedule Component
const UpcomingSchedule = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">The Upcoming Schedule</h3>
      
      {upcomingAppointments.map((dayData, dayIndex) => (
        <div key={dayIndex} className="mb-6">
          <h4 className="text-sm font-medium text-gray-500 mb-3">{dayData.day}</h4>
          <div className="grid grid-cols-2 gap-3">
            {dayData.appointments.map((appointment) => (
              <SimpleAppointmentCard key={appointment.id} appointment={appointment} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

// Simple Appointment Card Component
const SimpleAppointmentCard = ({ appointment }) => {
  return (
    <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
      <div className="flex items-center space-x-2 mb-1">
        <span className="text-lg">{appointment.icon}</span>
        <span className="font-medium text-gray-900 text-sm">{appointment.title}</span>
      </div>
      <p className="text-xs text-gray-500">{appointment.time}</p>
    </div>
  );
};

// Activity Feed Component
const ActivityFeed = () => {
  const chartData = [
    { day: 'Mon', value: 20 },
    { day: 'Tues', value: 45 },
    { day: 'Wed', value: 30 },
    { day: 'Thurs', value: 60 },
    { day: 'Fri', value: 40 },
    { day: 'Sat', value: 25 },
    { day: 'Sun', value: 35 }
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Activity</h3>
      <p className="text-sm text-gray-600 mb-4">3 appointments on this week</p>
      
      <div className="flex items-end justify-between h-32 space-x-2">
        {chartData.map((item, index) => (
          <div key={index} className="flex flex-col items-center flex-1">
            <div 
              className="w-full bg-blue-500 rounded-t-sm mb-2 transition-all duration-300"
              style={{ height: `${item.value}px` }}
            ></div>
            <span className="text-xs text-gray-500">{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Dashboard Main Content Component
const DashboardMainContent = () => {
  return (
    <div className="flex-1 bg-gray-50 p-6 overflow-auto">
      <div className="grid grid-cols-12 gap-6">
        {/* Left Column - Anatomy and Health Status */}
        <div className="col-span-5 space-y-6">
          <AnatomySection />
          <div className="grid grid-cols-2 gap-4">
            <HealthStatusCards />
            <ActivityFeed />
          </div>
        </div>
        
        {/* Right Column - Calendar and Schedule */}
        <div className="col-span-7 space-y-6">
          <CalendarView />
          <UpcomingSchedule />
        </div>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <DashboardMainContent />
      </div>
    </div>
  );
};

export default App;