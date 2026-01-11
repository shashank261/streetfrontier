import React, { useState } from 'react';
import { Container, Table, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { metroData } from '../data/metroData';

const MetroTracker = () => {
    // Sort by operational length desc
    const sortedData = [...metroData].sort((a, b) => b.operational - a.operational);

    const maxOperational = Math.max(...sortedData.map(d => d.operational));
    const maxConstruction = Math.max(...sortedData.map(d => d.underConstruction));
    // Use a common max for scaling bars to make them comparable relative to the largest network
    const maxScale = Math.max(maxOperational, maxConstruction);

    return (
        <Container className="swiss-container">
            <div className="mb-4">
                <Link to="/" className="nav-link-custom">← Back to Hub</Link>
            </div>

            <h1 className="swiss-title">Metro Train<br />Tracker</h1>
            <p className="swiss-subtitle">
                Tracking the expansion of rapid transit infrastructure across Indian cities.
                Ordered by current operational network length.
            </p>

            <div className="swiss-table-container">
                <Table hover responsive className="table-borderless">
                    <thead>
                        <tr>
                            <th style={{ width: '25%' }}>City</th>
                            <th className="text-end" style={{ width: '20%' }}>Operational (km)</th>
                            <th style={{ width: '15%' }}></th>
                            <th className="text-end" style={{ width: '20%' }}>In Progress (km)</th>
                            <th style={{ width: '20%' }}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedData.map((data, index) => (
                            <tr key={index}>
                                <td className="fw-bold">{data.city}</td>

                                <td className="text-end font-monospace">
                                    {data.operational > 0 ? data.operational.toFixed(2) : <span className="text-muted">-</span>}
                                </td>
                                <td>
                                    {data.operational > 0 && (
                                        <div className="d-flex align-items-center h-100">
                                            <div
                                                className="metric-bar-bg"
                                                style={{ width: '100%', height: '4px', backgroundColor: '#f0f0f0', marginRight: 0 }}
                                            >
                                                <div
                                                    className="metric-bar-fill"
                                                    style={{ width: `${(data.operational / maxScale) * 100}%` }}
                                                />
                                            </div>
                                        </div>
                                    )}
                                </td>

                                <td className="text-end font-monospace text-muted">
                                    {data.underConstruction > 0 ? data.underConstruction.toFixed(2) : '-'}
                                </td>
                                <td>
                                    {data.underConstruction > 0 && (
                                        <div className="d-flex align-items-center h-100">
                                            <div
                                                className="metric-bar-bg"
                                                style={{ width: '100%', height: '4px', backgroundColor: '#f0f0f0', marginRight: 0 }}
                                            >
                                                <div
                                                    className="metric-bar-fill wip"
                                                    style={{ width: `${(data.underConstruction / maxScale) * 100}%` }}
                                                />
                                            </div>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <div className="source-text">
                    Source: Various news reports and official releases (Dec 2024 / Jan 2025). Data is approximate and subject to change.
                </div>
            </div>
        </Container>
    );
};

export default MetroTracker;
