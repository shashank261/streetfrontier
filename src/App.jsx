import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react";
import Home from './pages/Home';
import MetroTracker from './pages/MetroTracker';
import Resources from './pages/Resources';
import Glossary from './pages/Glossary';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/metro-tracker" element={<MetroTracker />} />
                    <Route path="/resources" element={<Resources />} />
                    <Route path="/glossary" element={<Glossary />} />
                </Routes>
            </Router>
            <Analytics />
        </>
    );
}

export default App;
