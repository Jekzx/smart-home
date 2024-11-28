# Smart Home Management System 🏠

A modern, responsive web application for managing smart home devices with an intuitive interface and real-time monitoring capabilities.

## 🌟 Live Demo

Check out the live demo: [Smart Home Management System](https://jekzx.github.io/smart-home/)

![Smart Home Dashboard](https://raw.githubusercontent.com/Jekzx/smart-home/main/preview.png)

## ✨ Features

### 🎨 Modern UI/UX
- Sleek, responsive design that works on all devices
- Dark mode support with smooth transitions
- Beautiful animations and interactions
- Real-time device status updates
- Interactive charts and metrics

### 🏠 Device Management
- Control multiple device types:
  - Smart lights 💡
  - Thermostats 🌡️
  - Fans 🌪️
  - Security cameras 📹
  - Smart locks 🔒
- Room-based device organization
- Quick search functionality
- Device status monitoring

### 📊 Dashboard Features
- Real-time energy consumption monitoring
- Temperature and humidity tracking
- Weather integration
- Security status overview
- Device activity logs

### 🛠️ Technical Features
- TypeScript for type safety
- React with modern hooks
- Efficient state management
- Responsive design with Tailwind CSS
- Smooth animations with Framer Motion
- Interactive charts with Chart.js

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Jekzx/smart-home.git
```

2. Navigate to the project directory:
```bash
cd smart-home
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

```bash
npm run build
```

### Deploying to GitHub Pages

```bash
npm run deploy
```

## 🛠️ Built With

- [React](https://reactjs.org/) - Frontend framework
- [TypeScript](https://www.typescriptlang.org/) - Programming language
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Chart.js](https://www.chartjs.org/) - Charting library
- [Lucide React](https://lucide.dev/) - Icon library

## 📱 Screenshots

### Light Mode
![Light Mode](https://raw.githubusercontent.com/Jekzx/smart-home/main/light-mode.png)

### Dark Mode
![Dark Mode](https://raw.githubusercontent.com/Jekzx/smart-home/main/dark-mode.png)

## 🌟 Key Features Explained

### Device Control
- Toggle devices on/off with smooth animations
- Adjust thermostat temperatures
- Monitor device status in real-time
- Group devices by room for easy management

### Energy Monitoring
- Track daily energy consumption
- View historical usage data
- Identify peak usage times
- Monitor device-specific energy usage

### Weather Integration
- Current weather conditions
- Temperature and humidity tracking
- Weather forecast integration
- Automated climate control suggestions

### Security Features
- Smart lock controls
- Security camera integration
- Real-time security status
- Activity logging and notifications

## 🔜 Upcoming Features

- User authentication and profiles
- Advanced automation rules
- Voice control integration
- Mobile app version
- More detailed analytics
- Additional device type support

## 🔧 Project Structure

```
smart-home/
├── src/
│   ├── components/         # React components
│   │   ├── Dashboard.tsx   # Main dashboard view
│   │   ├── DeviceList.tsx  # Device management
│   │   └── Navigation.tsx  # Side navigation
│   ├── context/           # React context
│   │   └── ThemeContext.tsx # Dark mode management
│   ├── hooks/             # Custom React hooks
│   │   └── useDevices.ts  # Device state management
│   ├── App.tsx           # Main application component
│   ├── main.tsx         # Application entry point
│   └── types.ts         # TypeScript type definitions
├── public/              # Static assets
├── index.html          # HTML entry point
├── package.json        # Project dependencies
├── tailwind.config.js  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite configuration
```

## 🎯 Core Functionality

### Device Management
- Add and remove devices
- Group devices by room
- Control device states
- Monitor device status
- Adjust device settings

### Dashboard Features
- Real-time metrics
- Energy consumption charts
- Weather information
- Security status
- Quick actions

### Theme Support
- Light and dark mode
- System preference detection
- Persistent theme selection
- Smooth transitions

## 💻 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages

### Environment Setup

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open browser at `http://localhost:5173`

### Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

## 🤝 Support

For support, email [your-email@example.com](mailto:your-email@example.com) or open an issue in the GitHub repository.

## 📝 License

[MIT](LICENSE)

## 🤝 Contributing

Contributions are welcome! Feel free to submit pull requests or open issues for any improvements.

## 👤 Author

- GitHub: [@Jekzx](https://github.com/Jekzx)

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- UI inspiration from modern smart home interfaces
- React and TypeScript communities for excellent documentation
