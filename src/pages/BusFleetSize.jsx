import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, RotateCcw, Bus, Users, Info, Share2, Check } from 'lucide-react';
import cityData from '../data/city-population.json';

import SEO from '../components/SEO';


const BusFleetSize = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCity, setSelectedCity] = useState(null);
    const [result, setResult] = useState(null);
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [activeIndex, setActiveIndex] = useState(-1);
    const [searchParams, setSearchParams] = useSearchParams();
    const [copied, setCopied] = useState(false);

    // Initial load from query parameter
    useEffect(() => {
        const cityParam = searchParams.get('city');
        if (cityParam && !selectedCity) {
            const city = cityData.find(c => c.City.toLowerCase() === cityParam.toLowerCase());
            if (city) {
                setSearchTerm(city.City);
                setSelectedCity(city);
                calculateFleet(city.Population);
            }
        }
    }, []);

    useEffect(() => {
        if (searchTerm.length > 1 && !selectedCity) {
            const matches = cityData
                .filter(city => city.City.toLowerCase().includes(searchTerm.toLowerCase()))
                .slice(0, 15);
            setSuggestions(matches);
            setShowSuggestions(true);
        } else {
            setSuggestions([]);
            setShowSuggestions(false);
        }
    }, [searchTerm, selectedCity]);

    const handleSelectCity = (city) => {
        setSearchTerm(city.City);
        setSelectedCity(city);
        setShowSuggestions(false);
        calculateFleet(city.Population);
        setSearchParams({ city: city.City });
    };

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowDown') {
            setActiveIndex(prev => Math.min(prev + 1, suggestions.length - 1));
        } else if (e.key === 'ArrowUp') {
            setActiveIndex(prev => Math.max(prev - 1, 0));
        } else if (e.key === 'Enter' && activeIndex > -1) {
            e.preventDefault();
            handleSelectCity(suggestions[activeIndex]);
        }
    };

    const handleSearch = (e) => {
        if (e) e.preventDefault();
        const city = cityData.find(c => c.City.toLowerCase() === searchTerm.toLowerCase());
        if (city) {
            handleSelectCity(city);
        } else {
            setSelectedCity(null);
            setResult(null);
            alert('City not found. Please select from the list.');
        }
    };

    const calculateFleet = (population) => {
        // 1.45x growth factor from 2011 to 2026 (~45% increase based on urbanization trends)
        const projectedPop = Math.ceil(population * 1.45);
        const lakhPop2011 = population / 100000;
        const lakhPop2026 = projectedPop / 100000;

        // Rates (MoHUA)
        const getRate = (pop) => pop > 2000000 ? 60 : 40;

        const rate2011 = getRate(population);
        const rate2026 = getRate(projectedPop);

        const count2011 = Math.ceil(lakhPop2011 * rate2011);
        const count2026 = Math.ceil(lakhPop2026 * rate2026);

        setResult({
            count2011,
            count2026,
            rate2011,
            rate2026,
            lakhPop2011: lakhPop2011.toFixed(2),
            lakhPop2026: lakhPop2026.toFixed(2),
            projectedPop
        });
    };

    const handleClear = () => {
        setSearchTerm('');
        setSelectedCity(null);
        setResult(null);
        setSuggestions([]);
        setShowSuggestions(false);
        setActiveIndex(-1);
        setSearchParams({});
    };

    const handleShare = () => {
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <Container className="swiss-container">
            <SEO
                title="Bus Fleet Size Calculator | MoHUA Guidelines"
                description="Calculate the MoHUA INDIA recommended bus fleet strength based on city population and urbanization trends."
            />

            <div className="mb-4">
                <Link to="/" className="nav-link-custom">← Back to Hub</Link>
            </div>

            <h1 className="swiss-title">Recommended<br />Bus Fleet Size</h1>
            <p className="swiss-subtitle">
                Calculate the MoHUA INDIA recommended bus fleet strength based on city population.
            </p>

            <Row className="justify-content-center mt-5">
                <Col lg={8}>
                    <Card className="swiss-card border-0 shadow-sm p-4 overflow-visible">
                        <Form onSubmit={handleSearch}>
                            <Form.Group className="mb-4 position-relative">
                                <Form.Label className="fw-bold mb-3">Search City</Form.Label>
                                <div className="swiss-search-group">
                                    <Form.Control
                                        type="text"
                                        placeholder="Type city name (e.g. Delhi)..."
                                        value={searchTerm}
                                        onChange={(e) => {
                                            setSearchTerm(e.target.value);
                                            setSelectedCity(null);
                                        }}
                                        onKeyDown={handleKeyDown}
                                        className="swiss-input-seamless"
                                        autoComplete="off"
                                    />
                                    {searchTerm && (
                                        <button
                                            type="button"
                                            onClick={handleClear}
                                            className="swiss-button-seamless reset-btn"
                                            title="Clear search"
                                        >
                                            <RotateCcw size={20} />
                                        </button>
                                    )}
                                    <button
                                        type="submit"
                                        className="swiss-button-seamless"
                                        title="Search"
                                    >
                                        <Search size={22} />
                                    </button>
                                </div>
                                {showSuggestions && suggestions.length > 0 && (
                                    <div className="autocomplete-dropdown shadow-lg">
                                        {suggestions.map((city, idx) => (
                                            <div
                                                key={idx}
                                                className={`suggestion-item ${idx === activeIndex ? 'active' : ''}`}
                                                onClick={() => handleSelectCity(city)}
                                            >
                                                <span className="city-name">{city.City}</span>
                                                <span className="city-pop text-muted small ms-2">
                                                    Pop: {city.Population.toLocaleString()}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                <Form.Text className="text-muted mt-2 d-block">
                                    Guidelines: 60 buses/lakh (Pop &gt; 20L), 40 buses/lakh (Pop ≤ 20L)
                                </Form.Text>
                            </Form.Group>
                        </Form>

                        {result && selectedCity && (
                            <div className="result-section mt-4 pt-4 border-top animate-fade-in text-center">
                                <div className="recommendation-hero mb-4">
                                    <div className="hero-fleet-count position-relative">
                                        {result.count2026}
                                        <button
                                            className="share-btn-floating"
                                            onClick={handleShare}
                                            title="Share this city data"
                                        >
                                            {copied ? <Check size={18} className="text-success" /> : <Share2 size={18} />}
                                        </button>
                                    </div>
                                    <div className="hero-fleet-label text-uppercase letter-spacing-2 d-flex align-items-center justify-content-center gap-2">
                                        <Bus size={20} /> RECOMMENDED 2026 FLEET
                                    </div>
                                    <div className="mt-2 small opacity-75">
                                        Projected Pop: {result.projectedPop.toLocaleString()}
                                    </div>
                                </div>

                                <Row className="g-4 mb-4">
                                    <Col md={6}>
                                        <div className="p-3 bg-light rounded-3 h-100">
                                            <div className="text-muted small text-uppercase fw-bold mb-2">2011 Baseline</div>
                                            <div className="h3 fw-bold mb-1">{result.count2011} <small className="h6 text-muted">Buses</small></div>
                                            <div className="small text-muted">Population: {selectedCity.Population.toLocaleString()}</div>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="p-3 bg-light rounded-3 h-100 border-start border-3 border-dark">
                                            <div className="text-muted small text-uppercase fw-bold mb-2">2026 Growth (1.45x)</div>
                                            <div className="h3 fw-bold mb-1">+{result.count2026 - result.count2011} <small className="h6 text-muted">Buses</small></div>
                                            <div className="small text-muted">Factor: Rate of Urbanization</div>
                                        </div>
                                    </Col>
                                </Row>

                                <Row className="g-3 justify-content-center pt-2">
                                    <Col xs="auto">
                                        <div className="metric-tag">
                                            <Users size={16} className="me-2 text-primary" />
                                            Census 2011 (Baseline)
                                        </div>
                                    </Col>
                                    <Col xs="auto">
                                        <div className="metric-tag">
                                            <Info size={16} className="me-2 text-primary" />
                                            {result.rate2026} Buses / Lakh
                                        </div>
                                    </Col>
                                </Row>

                                <div className="mt-5 small text-muted text-start border-start border-3 ps-3 py-1">
                                    <strong>Urban Projected Model:</strong> Since no census was conducted after 2011, we apply a
                                    <strong> 1.45x growth factor </strong> (derived from urbanization trends) to project 2026 population
                                    and fleet requirements (LOS of 1).
                                </div>
                            </div>
                        )}
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default BusFleetSize;
