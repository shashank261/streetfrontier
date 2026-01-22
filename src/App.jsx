import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react";
import Home from './pages/Home';
import MetroTracker from './pages/MetroTracker';
import Resources from './pages/Resources';
import Glossary from './pages/Glossary';
import BusFleetSize from './pages/BusFleetSize';
import PedestrianGuidelines from './pages/PedestrianGuidelines';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/metro-tracker" element={<MetroTracker />} />
                    <Route path="/resources" element={<Resources />} />
                    <Route path="/glossary" element={<Glossary />} />
                    <Route path="/bus-fleet-size" element={<BusFleetSize />} />
                    <Route path="/pedestrian-guidelines" element={<PedestrianGuidelines />} />
                </Routes>
            </Router>
            <Analytics />
        </>
    );
}

export default App;
