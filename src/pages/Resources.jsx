import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Resources = () => {
    const resources = [
        {
            category: "Official Metro Authorities",
            links: [
                { name: "Agra, Kanpur & Lucknow Metro (UPMRC)", url: "https://www.upmetrorail.com/" },
                { name: "Ahmedabad & Surat Metro (GMRC)", url: "https://www.gujaratmetrorail.com/" },
                { name: "Bengaluru Metro (BMRCL)", url: "https://www.bmrc.co.in/" },
                { name: "Bhopal & Indore Metro (MPMRCL)", url: "https://www.mpmetrorail.com/" },
                { name: "Chennai Metro (CMRL)", url: "https://chennaimetrorail.org/" },
                { name: "Delhi Metro (DMRC)", url: "https://www.delhimetrorail.com/" },
                { name: "Hyderabad Metro (L&T)", url: "https://www.ltmetro.com/" },
                { name: "Jaipur Metro (JMRC)", url: "https://transport.rajasthan.gov.in/jmrc" },
                { name: "Kochi Metro (KMRL)", url: "https://www.kochimetro.org/" },
                { name: "Kolkata Metro", url: "https://mtp.indianrailways.gov.in/" },
                { name: "Mumbai Metro (MMRDA)", url: "https://mmrda.maharashtra.gov.in/" },
                { name: "Mumbai Metro One", url: "https://www.reliancemumbaimetro.com/" },
                { name: "Nagpur Metro (Maha Metro)", url: "https://www.metrorailnagpur.com/" },
                { name: "Navi Mumbai Metro (CIDCO)", url: "https://cidco.maharashtra.gov.in/" },
                { name: "Patna Metro (PMRCL)", url: "https://www.delhimetrorail.com/patna-metro" },
                { name: "Pune Metro (Maha Metro)", url: "https://www.punemetrorail.org/" }
            ]
        }
    ];

    const schema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Transit Resources",
        "description": "Official links, dashboards, and metro authority resources for all Indian cities.",
        "url": "https://hub.streetfrontier.com/resources",
        "mainEntity": {
            "@type": "ItemList",
            "itemListElement": resources[0].links.map((link, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "url": link.url,
                "name": link.name
            }))
        }
    };

    return (
        <Container className="swiss-container">
            <SEO
                title="Transit Resources | Official Metro & Bus Authorities"
                description="Access official links, dashboards, and metro authority resources for all Indian cities."
                url="https://hub.streetfrontier.com/resources"
                schema={schema}
            />
            <div className="mb-4">
                <Link to="/" className="nav-link-custom">← Back to Hub</Link>
            </div>

            <h1 className="swiss-title">Resources</h1>
            <p className="swiss-subtitle">
                Official links, dashboards, and portals for Indian urban infrastructure.
            </p>

            <div className="mt-5">
                {resources.map((section, idx) => (
                    <div key={idx} className="mb-5">
                        <h2 className="h4 mb-4 font-weight-bold text-uppercase" style={{ letterSpacing: '0.05em' }}>
                            {section.category}
                        </h2>
                        <ul className="list-group list-group-flush border-top ps-0 mb-0">
                            {section.links.map((link, lIdx) => (
                                <li key={lIdx} className="list-group-item p-0 bg-transparent border-bottom">
                                    <a
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="d-flex justify-content-between align-items-center text-decoration-none text-reset w-100 h-100 py-3 px-3 list-group-item-action"
                                    >
                                        <span>{link.name}</span>
                                        <span className="text-muted">↗</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default Resources;
