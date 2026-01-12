import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
    return (
        <Container className="swiss-container">
            <Row className="justify-content-center">
                <Col md={10} lg={8}>
                    <h1 className="swiss-title">Streetfrontier Hub</h1>
                    <p className="swiss-subtitle">
                        A community driven platform focused on India’s urban and transit infrastructure
                    </p>
                    <div className="mt-5">
                        <h2 className="h4 mb-4 font-weight-bold">Available Tools</h2>
                        <div className="list-group list-group-flush border-top">
                            <Link to="/metro-tracker" className="list-group-item list-group-item-action py-4 d-flex justify-content-between align-items-center bg-transparent">
                                <div>
                                    <h3 className="h5 mb-1 font-weight-bold">Metro Train Tracker</h3>
                                    <small className="text-muted">Track the growth of India's rapid transit systems.</small>
                                </div>
                                <span className="text-danger">→</span>
                            </Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
