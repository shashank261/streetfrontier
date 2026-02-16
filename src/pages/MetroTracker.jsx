import React, { useState } from 'react';
import { Container, Table, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { metroData } from '../data/metroData';
import SEO from '../components/SEO';

const MetroTracker = () => {
    // Sort by operational length desc
    const sortedData = [...metroData].sort((a, b) => b.operational - a.operational);

    const maxOperational = Math.max(...sortedData.map(d => d.operational));
    const maxConstruction = Math.max(...sortedData.map(d => d.underConstruction));
    // Use a common max for scaling bars to make them comparable relative to the largest network
    const maxScale = Math.max(maxOperational, maxConstruction);

    const schema = {
        "@context": "https://schema.org",
        "@type": "Dataset",
        "name": "Indian Metro Rail Operational Data",
        "description": "Live data on operational and under-construction metro lines in Indian cities.",
        "url": "https://hub.streetfrontier.com/metro-tracker",
        "keywords": "metro, india, operational length, under construction",
        "creator": {
            "@type": "Organization",
            "name": "Streetfrontier Hub"
        },
        "distribution": {
            "@type": "DataDownload",
            "encodingFormat": "text/html",
            "contentUrl": "https://hub.streetfrontier.com/metro-tracker"
        }
    };

    return (
        <Container className="swiss-container">
            <SEO
                title="Metro Train Tracker | Indian City Metro Progress"
                description="Mapping the growth of metro rail networks across Indian cities with live operational data."
                url="https://hub.streetfrontier.com/metro-tracker"
                schema={schema}
            />
            <div className="mb-4">
                <Link to="/" className="nav-link-custom">← Back to Hub</Link>
            </div>

            <h1 className="swiss-title">Metro Train<br />Tracker</h1>
            <p className="swiss-subtitle">
                Mapping the growth of metro rail networks across Indian cities.
            </p>

            <div className="swiss-table-container">
                <div className="table-responsive-wrapper">
                    <Table hover responsive className="table-borderless mb-0">
                        <thead>
                            <tr>
                                <th style={{ width: '20%' }}>City</th>
                                <th className="text-end" style={{ width: '15%' }}>Scale (km)</th>
                                <th style={{ width: '15%' }}></th>
                                <th className="text-end" style={{ width: '15%' }}>InProgress (km)</th>
                                <th style={{ width: '20%' }}></th>
                                <th style={{ width: '15%' }}>Source</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedData.map((data, index) => (
                                <tr key={index}>
                                    <td className="fw-bold text-nowrap">{data.city}</td>

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
                                    <td className="text-truncate" style={{ maxWidth: '150px' }}>
                                        {data.sourceUrl ? (
                                            <a href={data.sourceUrl} target="_blank" rel="noopener noreferrer" className="source-link">
                                                {data.sourceName || 'Link'} ↗
                                            </a>
                                        ) : '-'}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <div className="scroll-hint d-md-none">
                        <small className="text-muted">← Scroll for more →</small>
                    </div>
                </div>

            </div>
        </Container>
    );
};

export default MetroTracker;
