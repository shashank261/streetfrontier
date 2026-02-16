import React, { useState } from 'react';
import { Container, Row, Col, Card, Alert, Badge, Button, ProgressBar } from 'react-bootstrap';
import { Shield, AlertTriangle, Eye, Footprints, Baby, Car, CheckCircle, ClipboardList, Calculator, UserCheck, Download, Truck, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const PedestrianGuidelines = () => {
    const [auditScores, setAuditScores] = useState({
        mirrors: false,
        lighting: false,
        walkways: false,
        speedbumps: false,
        guards: false
    });
    const [showScore, setShowScore] = useState(false);

    const calculateScore = () => {
        const score = Object.values(auditScores).filter(Boolean).length;
        return (score / 5) * 10;
    };

    const getScoreColor = (score) => {
        if (score >= 8) return 'success';
        if (score >= 5) return 'warning';
        return 'danger';
    };

    const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Apartment Pedestrian Safety Guidelines",
        "description": "Safety guidelines and architectural interventions to protect pedestrians and children in apartment parking areas.",
        "image": "https://hub.streetfrontier.com/parent_child_safety.png",
        "author": {
            "@type": "Organization",
            "name": "Streetfrontier Hub"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Streetfrontier Hub",
            "logo": {
                "@type": "ImageObject",
                "url": "https://hub.streetfrontier.com/logo.jpg"
            }
        },
        "datePublished": "2024-01-01",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://hub.streetfrontier.com/pedestrian-guidelines"
        }
    };

    return (
        <Container className="swiss-container">
            <SEO
                title="Apartment Pedestrian Safety Guidelines | Streetfrontier Hub"
                description="Safety guidelines and architectural interventions to protect pedestrians and children in apartment parking areas."
                url="https://hub.streetfrontier.com/pedestrian-guidelines"
                schema={schema}
            />

            <div className="mb-4">
                <Link to="/" className="nav-link-custom">← Back to Hub</Link>
            </div>

            <h1 className="swiss-title">Apartment Pedestrian<br />Safety Guidelines</h1>
            <p className="swiss-subtitle">
                Protecting our children and community through better design and awareness.
            </p>




            {/* Safety Score Calculator */}
            <Card className="mb-5 border-0 shadow-sm overflow-hidden transform-hover">
                <div className="p-4 bg-primary bg-opacity-10">
                    <div className="d-flex align-items-center">
                        <Calculator className="text-primary me-3" size={32} />
                        <div>
                            <h3 className="h5 fw-bold mb-1">Safety Audit Calculator</h3>
                            <p className="mb-0 small text-muted">How safe is your apartment complex? Take this 1-minute test.</p>
                        </div>
                    </div>
                </div>
                <Card.Body className="p-4">
                    <Row className="g-3">
                        <Col md={8}>
                            <h6 className="fw-bold mb-3 small text-uppercase text-muted">Check all that apply:</h6>
                            <div className="d-flex flex-column gap-2">
                                {[
                                    { id: 'mirrors', label: 'Convex mirrors installed at blind turns' },
                                    { id: 'lighting', label: 'Basement lighting adequate (>50 Lux)' },
                                    { id: 'walkways', label: 'Dedicated/raised walkways for pedestrians' },
                                    { id: 'speedbumps', label: 'Speed bumps every 40-60m' },
                                    { id: 'guards', label: 'Security guards trained in traffic management' }
                                ].map((item) => (
                                    <div key={item.id} className="form-check custom-checkbox">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id={item.id}
                                            checked={auditScores[item.id]}
                                            onChange={(e) => setAuditScores({ ...auditScores, [item.id]: e.target.checked })}
                                        />
                                        <label className="form-check-label" htmlFor={item.id}>
                                            {item.label}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </Col>
                        <Col md={4} className="d-flex flex-column justify-content-center border-start-md ps-md-4">
                            {!showScore ? (
                                <Button
                                    variant="primary"
                                    className="w-100 py-2 fw-bold"
                                    onClick={() => setShowScore(true)}
                                >
                                    Calculate Score
                                </Button>
                            ) : (
                                <div className="text-center animate-fade-in">
                                    <div className="small text-uppercase fw-bold text-muted mb-2">Your Safety Score</div>
                                    <h2 className={`display-3 fw-bold text-${getScoreColor(calculateScore())} mb-0`}>
                                        {calculateScore()}<span className="h4 text-muted">/10</span>
                                    </h2>
                                    <ProgressBar
                                        variant={getScoreColor(calculateScore())}
                                        now={calculateScore() * 10}
                                        className="mt-3"
                                        style={{ height: '6px' }}
                                    />
                                    <p className="mt-3 mb-0 small text-muted">
                                        {calculateScore() >= 8 ? 'Excellent! Keep maintaining these standards.' : 'Needs improvement. Check the guidelines below.'}
                                    </p>
                                    <Button
                                        variant="link"
                                        className="text-muted small text-decoration-none mt-2"
                                        onClick={() => { setShowScore(false); setAuditScores({ mirrors: false, lighting: false, walkways: false, speedbumps: false, guards: false }); }}
                                    >
                                        Reset
                                    </Button>
                                </div>
                            )}
                        </Col>
                    </Row>
                </Card.Body>
            </Card>

            <h2 className="h3 fw-bold mb-4" style={{ color: '#2d3436' }}>Design Interventions</h2>
            <Row className="g-4 mb-5">
                <Col md={6}>
                    <Card className="h-100 border-0 shadow-sm">
                        <Card.Body>
                            <div className="mb-3 text-center">
                                <div className="d-inline-block p-3 rounded-circle bg-light mb-3">
                                    <Car className="text-primary" size={32} />
                                </div>
                                <h3 className="h5 fw-bold mb-0">Speed Calming</h3>
                            </div>
                            <p className="text-muted">
                                Physical barriers to reduce vehicle speed are essential.
                            </p>
                            <ul className="list-unstyled text-muted">
                                <li className="mb-2"><CheckCircle size={16} className="text-success me-2" /><strong>Intervals:</strong> Install every 40-60m.</li>
                                <li className="mb-2"><CheckCircle size={16} className="text-success me-2" /><strong>Dimensions:</strong> 10cm height, 3.5m width (parabolic).</li>
                                <li><CheckCircle size={16} className="text-success me-2" /><strong>Marking:</strong> Thermoplastic yellow/white stripes.</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className="h-100 border-0 shadow-sm">
                        <Card.Body>
                            <div className="mb-3 text-center">
                                <div className="d-inline-block p-3 rounded-circle bg-light mb-3">
                                    <Eye className="text-primary" size={32} />
                                </div>
                                <h3 className="h5 fw-bold mb-0">Visibility & Blind Spots</h3>
                            </div>
                            <p className="text-muted">
                                Enhancing lines of sight for both drivers and pedestrians.
                            </p>
                            <ul className="list-unstyled text-muted">
                                <li className="mb-2"><CheckCircle size={16} className="text-success me-2" /><strong>Mirrors:</strong> 80cm convex mirrors at all corners.</li>
                                <li className="mb-2"><CheckCircle size={16} className="text-success me-2" /><strong>Lighting:</strong> Min 50 Lux in parking, 30 Lux on paths.</li>
                                <li><CheckCircle size={16} className="text-success me-2" /><strong>Height:</strong> Mount mirrors at 2.5m clearance.</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className="h-100 border-0 shadow-sm">
                        <Card.Body>
                            <div className="mb-3 text-center">
                                <div className="d-inline-block p-3 rounded-circle bg-light mb-3">
                                    <Footprints className="text-primary" size={32} />
                                </div>
                                <h3 className="h5 fw-bold mb-0">Pedestrian Segregation</h3>
                            </div>
                            <p className="text-muted">
                                Separating people from cars is the most effective safety measure.
                            </p>
                            <ul className="list-unstyled text-muted">
                                <li className="mb-2"><CheckCircle size={16} className="text-success me-2" /><strong>Width:</strong> Minimum 1.2m clear walking path.</li>
                                <li className="mb-2"><CheckCircle size={16} className="text-success me-2" /><strong>Bollards:</strong> Spaced 1.2m (wheelchair accessible).</li>
                                <li><CheckCircle size={16} className="text-success me-2" /><strong>Elevation:</strong> Raised 150mm above driveway level.</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <h2 className="h3 fw-bold mb-4" style={{ color: '#2d3436' }}>Operational Protocols</h2>
            <Row className="g-4 mb-5">
                <Col md={6}>
                    <Card className="h-100 border-0 shadow-sm">
                        <Card.Body>
                            <div className="mb-3 text-center">
                                <div className="d-inline-block p-3 rounded-circle bg-light mb-3">
                                    <ClipboardList className="text-primary" size={32} />
                                </div>
                                <h3 className="h5 fw-bold mb-0">Operational Rules</h3>
                            </div>
                            <p className="text-muted">
                                Enforceable rules to govern behavior within the complex.
                            </p>
                            <ul className="list-unstyled text-muted">
                                <li className="mb-2"><CheckCircle size={16} className="text-success me-2" />Strict 5-10 km/h speed limit.</li>
                                <li className="mb-2"><CheckCircle size={16} className="text-success me-2" />One-way traffic flow to reduce confusion.</li>
                                <li><CheckCircle size={16} className="text-success me-2" />Ban reverse parking in high-footfall zones.</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Indian Context: Security, Delivery, Events */}
                <Col md={6}>
                    <Card className="h-100 border-0 shadow-sm">
                        <Card.Body className="p-4 text-center">
                            <div className="d-inline-block p-3 rounded-circle bg-light mb-3">
                                <UserCheck className="text-primary" size={32} />
                            </div>
                            <h4 className="h5 fw-bold mb-3">Security Guard Training</h4>
                            <p className="text-muted small mb-0">
                                Guards are the first line of defense. Train them to proactively stop vehicles when kids are crossing, use hand signals effectively, and managing gate entry.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className="h-100 border-0 shadow-sm">
                        <Card.Body className="p-4 text-center">
                            <div className="d-inline-block p-3 rounded-circle bg-light mb-3">
                                <Truck className="text-primary" size={32} />
                            </div>
                            <h4 className="h5 fw-bold mb-3">Delivery Partner Rules</h4>
                            <p className="text-muted small mb-0">
                                Designate specific parking zones for 10-min delivery bikes (Swiggy/Zomato). Do not allow them to rush into basements.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className="h-100 border-0 shadow-sm">
                        <Card.Body className="p-4 text-center">
                            <div className="d-inline-block p-3 rounded-circle bg-light mb-3">
                                <Calendar className="text-primary" size={32} />
                            </div>
                            <h4 className="h5 fw-bold mb-3">Event Protocols</h4>
                            <p className="text-muted small mb-0">
                                During festivals (Diwali, etc.) or weddings, create a "Guest Parking" plan with markers. Use a one-way loop system to avoid chaos.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <h2 className="h3 fw-bold mb-4" style={{ color: '#2d3436' }}>Driver Responsibility Guide</h2>
            <Row className="g-4 mb-5">
                <Col md={6}>
                    <Card className="h-100 border-0 shadow-sm">
                        <Card.Body className="d-flex align-items-start">
                            <div className="me-3 text-primary">
                                <Car size={24} />
                            </div>
                            <div>
                                <h4 className="h6 fw-bold mb-2">The "Walk-Around" Rule</h4>
                                <p className="text-muted small mb-0">
                                    Before getting into your car (especially SUVs), walk around it once to ensure no children are playing near the wheels or bumpers.
                                </p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className="h-100 border-0 shadow-sm">
                        <Card.Body className="d-flex align-items-start">
                            <div className="me-3 text-warning">
                                <Eye size={24} />
                            </div>
                            <div>
                                <h4 className="h6 fw-bold mb-2">Check A-Pillar Blind Spots</h4>
                                <p className="text-muted small mb-0">
                                    Thick A-pillars can hide a small child. Lean forward and check both sides before turning at corners or intersections.
                                </p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className="h-100 border-0 shadow-sm">
                        <Card.Body className="d-flex align-items-start">
                            <div className="me-3 text-success">
                                <CheckCircle size={24} />
                            </div>
                            <div>
                                <h4 className="h6 fw-bold mb-2">Reverse Park Only</h4>
                                <p className="text-muted small mb-0">
                                    Always reverse into parking spots. This ensures you have full forward visibility when leaving, which is safer for pedestrians.
                                </p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className="h-100 border-0 shadow-sm">
                        <Card.Body className="d-flex align-items-start">
                            <div className="me-3 text-info">
                                <Shield size={24} />
                            </div>
                            <div>
                                <h4 className="h6 fw-bold mb-2">Windows Down</h4>
                                <p className="text-muted small mb-0">
                                    In parking lots, roll down your windows. You might hear a child's voice or footsteps before you see them.
                                </p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <h2 className="h3 fw-bold mb-4" style={{ color: '#2d3436' }}>Parent & Child Safety Tips</h2>
            <Row className="mb-5">
                <Col md={12}>
                    <Card className="border-0 shadow-sm bg-white">
                        <Card.Body className="p-4">
                            <Row className="align-items-center">
                                <Col md={8}>
                                    <h4 className="h5 fw-bold mb-3">For Parents & Kids</h4>
                                    <div className="d-flex mb-3">
                                        <Badge bg="warning" text="dark" className="me-2 align-self-start mt-1">TIP 1</Badge>
                                        <p className="mb-0 text-muted"><strong>Stop, Look, Wave:</strong> Teach kids to stop at the edge, look left-right-left, and wave to the driver to ensure they are seen before crossing.</p>
                                    </div>
                                    <div className="d-flex mb-3">
                                        <Badge bg="warning" text="dark" className="me-2 align-self-start mt-1">TIP 2</Badge>
                                        <p className="mb-0 text-muted"><strong>Hold Hands:</strong> Always hold hands with children in parking lots. They are small and harder for SUV drivers to see.</p>
                                    </div>
                                    <div className="d-flex mb-3">
                                        <Badge bg="warning" text="dark" className="me-2 align-self-start mt-1">TIP 3</Badge>
                                        <p className="mb-0 text-muted"><strong>No Play Zones:</strong> Strictly forbid playing in driveways, basements, or between parked cars. Use designated play areas only.</p>
                                    </div>
                                    <div className="d-flex">
                                        <Badge bg="warning" text="dark" className="me-2 align-self-start mt-1">TIP 4</Badge>
                                        <p className="mb-0 text-muted"><strong>Be Bright:</strong> Prefer bright-colored clothing for kids when measuring them walking in the evenings.</p>
                                    </div>
                                </Col>
                                <Col md={4} className="text-center d-none d-md-flex align-items-center justify-content-center">
                                    <div className="p-5 rounded-circle bg-warning bg-opacity-10">
                                        <Baby className="text-warning" size={80} />
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mt-5 mb-5">
                <Col lg={12}>
                    <Card className="border-0 shadow-sm" style={{ backgroundColor: '#e3f2fd' }}>
                        <Card.Body className="p-5">
                            <div className="d-flex align-items-center mb-4">
                                <ClipboardList size={32} className="text-primary me-3" />
                                <h2 className="h3 fw-bold mb-0" style={{ color: '#2d3436' }}>Apartment Safety Action Plan</h2>
                            </div>
                            <p className="mb-4 text-muted">
                                Use this checklist to audit your apartment complex and implement necessary safety measures.
                            </p>
                            <Row>
                                <Col md={6}>
                                    <div className="form-check mb-3">
                                        <input className="form-check-input" type="checkbox" id="audit" />
                                        <label className="form-check-label" htmlFor="audit">Conduct a safety audit of parking areas</label>
                                    </div>
                                    <div className="form-check mb-3">
                                        <input className="form-check-input" type="checkbox" id="blindspots" />
                                        <label className="form-check-label" htmlFor="blindspots">Measure blind spots at corners</label>
                                    </div>
                                    <div className="form-check mb-3">
                                        <input className="form-check-input" type="checkbox" id="lighting" />
                                        <label className="form-check-label" htmlFor="lighting">Check lighting levels (lux meter) in basements</label>
                                    </div>
                                    <div className="form-check mb-3">
                                        <input className="form-check-input" type="checkbox" id="mirrors" />
                                        <label className="form-check-label" htmlFor="mirrors">Install convex mirrors at identified blind spots</label>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="form-check mb-3">
                                        <input className="form-check-input" type="checkbox" id="markings" />
                                        <label className="form-check-label" htmlFor="markings">Paint zebra crossings and pedestrian paths</label>
                                    </div>
                                    <div className="form-check mb-3">
                                        <input className="form-check-input" type="checkbox" id="speed" />
                                        <label className="form-check-label" htmlFor="speed">Install speed breakers / rumble strips</label>
                                    </div>
                                    <div className="form-check mb-3">
                                        <input className="form-check-input" type="checkbox" id="guidelines" />
                                        <label className="form-check-label" htmlFor="guidelines">Circulate safety guidelines to all residents</label>
                                    </div>
                                    <div className="form-check mb-3">
                                        <input className="form-check-input" type="checkbox" id="marshal" />
                                        <label className="form-check-label" htmlFor="marshal">Appoint a safety marshal for peak hours</label>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container >
    );
};

export default PedestrianGuidelines;
