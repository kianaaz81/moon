# Weather Application 🌤️

A modern weather application built with React, TypeScript, and Material-UI that provides real-time weather information and forecasts.

## Features ✨

- 🌍 Real-time weather data
- 📊 Weather charts and statistics
- 🌙 Dark/Light mode support
- 🌐 Multi-language support (English & Farsi)
- 📱 Responsive design
- 🔄 RTL/LTR layout support
- ⚡ Performance optimized with lazy loading

## Technologies Used 🛠️

- React 18
- TypeScript
- Material-UI
- React Router
- i18next for internationalization
- Recharts for data visualization
- Webpack for bundling

## Getting Started 🚀

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd weather
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory and add your API key:
```env
REACT_APP_WEATHER_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm start
# or
yarn start
```

The application will be available at `http://localhost:3000`

## Project Structure 📁

```
weather/
├── src/
│   ├── components/         # Reusable components
│   ├── context/           # Context providers
│   ├── pages/             # Page components
│   ├── assets/            # Static assets
│   ├── theme/             # Theme configuration
│   ├── i18n/              # Translation files
│   └── weatherService.ts  # API service
├── public/                # Public assets
└── package.json          # Dependencies and scripts
```

## Available Scripts 📜

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Runs the test suite
- `npm run analyze` - Analyzes the bundle size

## Performance Optimizations ⚡

- Lazy loading for components
- Code splitting
- Bundle optimization
- Gzip compression
- Image optimization

## Contributing 🤝

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License 📝

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments 🙏

- Weather data provided by OpenWeather API
- Icons from Material-UI
- Charts powered by Recharts
