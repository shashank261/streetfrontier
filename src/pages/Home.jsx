import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Train, Link2, BookOpen, ArrowRight } from 'lucide-react';
import './Home.css';

const gateways = [
    {
        title: 'Metro Train Tracker',
        description: 'Track the growth of India\'s rapid transit systems with live data on operational and under-construction lines.',
        icon: Train,
        path: '/metro-tracker',
        accent: 'linear-gradient(135deg, #ff3333 0%, #ff6b6b 100%)',
    },
    {
        title: 'Resource Hub',
        description: 'Access official links, dashboards, and metro authority resources for all Indian cities.',
        icon: Link2,
        path: '/resources',
        accent: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
    },
    {
        title: 'Tech Glossary',
        description: 'Master the jargon: CBTC, gauges, rolling stock, signaling systems, and more.',
        icon: BookOpen,
        path: '/glossary',
        accent: 'linear-gradient(135deg, #2d3436 0%, #636e72 100%)',
    },
];

const Home = () => {
    return (
        <div className="home-page">
            <Container className="swiss-container">
                {/* Hero Section */}
                <Row className="justify-content-center text-center mb-5">
                    <Col lg={10}>
                        <h1 className="hero-title">
                            Streetfrontier Hub
                        </h1>
                        <p className="hero-tagline">
                            Your gateway to India's urban transit infrastructure
                        </p>
                    </Col>
                </Row>

                {/* Gateway Cards */}
                <Row className="g-4 justify-content-center">
                    {gateways.map((gateway, index) => {
                        const IconComponent = gateway.icon;
                        return (
                            <Col key={index} md={6} lg={4}>
                                <Link to={gateway.path} className="gateway-link">
                                    <Card className="gateway-card h-100">
                                        <div
                                            className="gateway-header"
                                            style={{ background: gateway.accent }}
                                        >
                                            <IconComponent
                                                size={48}
                                                strokeWidth={1.5}
                                                className="gateway-icon"
                                            />
                                        </div>
                                        <Card.Body className="gateway-body">
                                            <h2 className="gateway-title">{gateway.title}</h2>
                                            <p className="gateway-description">
                                                {gateway.description}
                                            </p>
                                            <div className="gateway-cta">
                                                <span>Explore</span>
                                                <ArrowRight size={18} />
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        );
                    })}
                </Row>

                {/* Footer tagline */}
                <Row className="mt-5 pt-4">
                    <Col className="text-center">
                        <p className="footer-tagline">
                            Community-driven • Open Source • Built with ❤️
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;
