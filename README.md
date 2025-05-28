# Healthcare Dashboard

A responsive healthcare dashboard built with React, TypeScript, and Tailwind CSS. This project demonstrates the implementation of a modern, responsive UI for healthcare data visualization and appointment management.

## 🚀 Features

- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎨 Modern UI with clean aesthetics
- 📊 Interactive health status cards
- 📅 Calendar view for appointments
- 👤 Anatomical visualization with health indicators
- 📈 Activity tracking visualization
- 📱 Mobile-friendly navigation with collapsible sidebar

## 🛠️ Technology Stack

- **React** - UI Framework
- **TypeScript** - Type Safety
- **Tailwind CSS** - Styling
- **Vite** - Build Tool
- **Lucide React** - Icons
- **PostCSS** - CSS Processing

## 📦 Project Structure

```
health-dashboard/
├── src/
│   ├── components/
│   │   ├── Activity/
│   │   │   └── ActivityFeed.tsx
│   │   ├── Appointments/
│   │   │   ├── SimpleAppointmentCard.tsx
│   │   │   └── UpcomingSchedule.tsx
│   │   ├── Calendar/
│   │   │   └── CalendarView.tsx
│   │   ├── Dashboard/
│   │   │   ├── AnatomySection.tsx
│   │   │   ├── DashboardMainContent.tsx
│   │   │   └── HealthStatusCards.tsx
│   │   ├── Header/
│   │   │   └── Header.tsx
│   │   └── Sidebar/
│   │       └── Sidebar.tsx
│   ├── data/
│   │   └── mockData.ts
│   ├── App.tsx
│   └── main.tsx
└── assets/
    └── human-anatomy.png
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Navigate to the project directory:
```bash
cd health-dashboard
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

## 📱 Responsive Design

The dashboard is optimized for various screen sizes:

- **Mobile** (<640px)
  - Collapsible sidebar with overlay
  - Stacked grid layout
  - Optimized touch targets
  - Adjusted typography and spacing

- **Tablet** (≥640px)
  - Two-column layout for better space utilization
  - Enhanced calendar view
  - Improved card layouts

- **Desktop** (≥1024px)
  - Full sidebar visible
  - Multi-column dashboard layout
  - Extended calendar and appointment views

## 🧩 Components

### Main Components

1. **Header**
   - Logo
   - Search functionality
   - Notification bell
   - User profile
   - Add button

2. **Sidebar**
   - Navigation menu
   - Active state indicators
   - Collapsible on mobile

3. **AnatomySection**
   - Human body visualization
   - Health status indicators
   - Interactive markers

4. **CalendarView**
   - Monthly calendar
   - Appointment indicators
   - Date navigation

5. **HealthStatusCards**
   - Status indicators
   - Progress bars
   - Date information

6. **ActivityFeed**
   - Weekly activity chart
   - Appointment counters
   - Visual data representation

## 🎨 Styling

- Utilizes Tailwind CSS for responsive design
- Custom color scheme for health status indicators
- Consistent spacing and typography
- Smooth transitions and animations
- Accessible color contrasts

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Future Enhancements

- User authentication
- Real-time data integration
- Dark mode support
- Appointment scheduling
- Health metrics tracking
- Customizable dashboard layouts

## 📝 License

This project is part of a web development assignment and is intended for educational purposes.
