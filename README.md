# Streetfrontier

A hub that tracks the progress of urban infrastructure in India. 

## Features

- **Metro Tracker**: View operational and under-construction lengths of metro systems across 19+ Indian cities
- Real-time data with source links
- Responsive design with Bootstrap
- Swiss typography-inspired aesthetic

## Tech Stack

- **React 19** - UI framework
- **Vite 7** - Build tool and dev server
- **React Router 7** - Client-side routing
- **Bootstrap 5** - Styling and responsive layout

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/shashank261/streetfrontier.git
cd streetfrontier

# Install dependencies
npm install
```

### Running Locally

```bash
# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Building for Production

```bash
# Create optimized production build
npm run build

# Preview the production build locally
npm run preview
```

## Deployment

This project is deployed on **Vercel**.

### Vercel Configuration

The project includes a `vercel.json` file that handles client-side routing for the Single Page Application:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

## Project Structure

```
streetfrontier/
├── public/              # Static assets (favicon, etc.)
├── src/
│   ├── data/            # Metro data with sources
│   ├── pages/           # React page components
│   ├── styles/          # CSS stylesheets
│   ├── App.jsx          # Main app with routing
│   └── main.jsx         # Entry point
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
└── vercel.json          # Vercel deployment config
```

## Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.
