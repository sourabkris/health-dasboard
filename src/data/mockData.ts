import { BarChart3, Clock, Calendar, User, Activity, Stethoscope, MessageCircle, HelpCircle, Settings } from 'lucide-react';

export const navigationItems = [
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

export const healthStatus = [
  { id: 1, name: 'Lungs', date: 'Oct 19, 2021', status: 'warning', icon: Activity },
  { id: 2, name: 'Teeth', date: 'Oct 19, 2021', status: 'good', icon: Calendar },
  { id: 3, name: 'Bone', date: 'Oct 19, 2021', status: 'warning', icon: Settings }
];

export const upcomingAppointments = [
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

export const calendarData = {
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

export const chartData = [
  { day: 'Mon', value: 20 },
  { day: 'Tues', value: 45 },
  { day: 'Wed', value: 30 },
  { day: 'Thurs', value: 60 },
  { day: 'Fri', value: 40 },
  { day: 'Sat', value: 25 },
  { day: 'Sun', value: 35 }
];
