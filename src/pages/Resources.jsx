import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Resources = () => {
    const resources = [
        {
            category: "Official Metro Authorities",
            links: [
                { name: "Delhi Metro (DMRC)", url: "https://www.delhimetrorail.com/" },
                { name: "Mumbai Metro (MMRDA)", url: "https://mmrda.maharashtra.gov.in/" },
                { name: "Mumbai Metro One", url: "https://www.reliancemumbaimetro.com/" },
                { name: "Bengaluru Metro (BMRCL)", url: "https://www.bmrc.co.in/" },
                { name: "Chennai Metro (CMRL)", url: "https://chennaimetrorail.org/" },
                { name: "Hyderabad Metro (L&T)", url: "https://www.ltmetro.com/" },
                { name: "Kolkata Metro", url: "https://mtp.indianrailways.gov.in/" },
                { name: "Ahmedabad Metro (GMRC)", url: "https://www.gujaratmetrorail.com/" },
                { name: "Pune Metro", url: "https://www.punemetrorail.org/" }
            ]
        }
    ];

    return (
        <Container className="swiss-container">
            <div className="mb-4">
                <Link to="/" className="nav-link-custom">← Back to Hub</Link>
            </div>

            <h1 className="swiss-title">Resource Hub</h1>
            <p className="swiss-subtitle">
                Official links, dashboards, and portals for Indian urban infrastructure.
            </p>

            <div className="mt-5">
                {resources.map((section, idx) => (
                    <div key={idx} className="mb-5">
                        <h2 className="h4 mb-4 font-weight-bold text-uppercase" style={{ letterSpacing: '0.05em' }}>
                            {section.category}
                        </h2>
                        <div className="list-group list-group-flush border-top">
                            {section.links.map((link, lIdx) => (
                                <a
                                    key={lIdx}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="list-group-item list-group-item-action py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom"
                                >
                                    <span>{link.name}</span>
                                    <span className="text-muted">↗</span>
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default Resources;
