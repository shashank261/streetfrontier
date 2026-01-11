import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MetroTracker from './pages/MetroTracker';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/metro-tracker" element={<MetroTracker />} />
            </Routes>
        </Router>
    );
}

export default App;
