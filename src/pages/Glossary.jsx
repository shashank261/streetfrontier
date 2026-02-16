import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Glossary = () => {
    const glossaryData = [
        {
            parent: "Transit",
            child: "Metro",
            terms: [
                {
                    term: "CBTC",
                    definition: "Communication-Based Train Control. A railway signaling system that positions trains more accurately than traditional signaling systems."
                },
                {
                    term: "Standard Gauge",
                    definition: "A track gauge of 1435 mm. Most modern metro systems in India use this gauge."
                },
                {
                    term: "Broad Gauge",
                    definition: "A track gauge of 1676 mm. Used by early lines in Delhi and Kolkata."
                },
                {
                    term: "TBM",
                    definition: "Tunnel Boring Machine. Used for excavating circular tunnels through soil and rock."
                },
                {
                    term: "Headway",
                    definition: "The time interval between two consecutive trains."
                }
            ]
        },
        {
            parent: "Transit",
            child: "Trams",
            terms: [
                {
                    term: "Pantograph",
                    definition: "An apparatus mounted on the roof of an electric train or tram to collect power through contact with an overhead line."
                },
                {
                    term: "Street-running",
                    definition: "The routing of a track or line along public streets, where the rail is embedded in the pavement."
                }
            ]
        },
        {
            parent: "Transit",
            child: "Buses",
            terms: [
                {
                    term: "Trolleybus",
                    definition: "An electric bus that draws power from dual overhead wires using spring-loaded trolley poles."
                },
                {
                    term: "Articulated Bus",
                    definition: "A bus with two sections linked by a pivoting joint, allowing for a higher passenger capacity while remaining maneuverable."
                },
                {
                    term: "Bi-articulated Bus",
                    definition: "An extension of the articulated bus, featuring three sections and two pivoting joints."
                },
                {
                    term: "Low-floor Bus",
                    definition: "A bus with no steps between the ground and the floor of the bus at one or more entrances, improving accessibility for all passengers."
                },
                {
                    term: "Low-entry Bus",
                    definition: "A bus with a low floor at the front, but steps up to a high floor at the rear (common in transit buses to accommodate the engine)."
                },
                {
                    term: "Bus Rapid Transit (BRT)",
                    definition: "A high-capacity bus-based transit system that delivers fast and efficient services through dedicated lanes and off-board fare collection."
                },
                {
                    term: "Guided Busway",
                    definition: "A dedicated path for buses that uses physical or electronic guidance to maintain the vehicle's position, allowing for higher speeds and narrower lanes."
                }
            ]
        },
        {
            parent: "Urban",
            child: "Footpath",
            terms: [
                {
                    term: "Pedestrianization",
                    definition: "The process of removing vehicular traffic from city streets and making them exclusive for people on foot."
                },
                {
                    term: "Tactile Paving",
                    definition: "Textured ground surface indicators found on footpaths, stairs and station platforms to assist pedestrians who are visually impaired."
                }
            ]
        }
    ];

    const schema = {
        "@context": "https://schema.org",
        "@type": "DefinedTermSet",
        "name": "Urban Transit Glossary",
        "description": "Technical terms and jargon used in urban transit, categorized by infrastructure type.",
        "url": "https://hub.streetfrontier.com/glossary",
        "hasDefinedTerm": glossaryData.flatMap(category =>
            category.terms.map(item => ({
                "@type": "DefinedTerm",
                "name": item.term,
                "description": item.definition,
                "termCode": item.term
            }))
        )
    };

    return (
        <Container className="swiss-container">
            <SEO
                title="Transit Glossary | Technical Jargon Explained"
                description="Master the jargon: CBTC, gauges, rolling stock, signaling systems, and more."
                url="https://hub.streetfrontier.com/glossary"
                schema={schema}
            />
            <div className="mb-4">
                <Link to="/" className="nav-link-custom">← Back to Hub</Link>
            </div>

            <h1 className="swiss-title">Glossary</h1>
            <p className="swiss-subtitle">
                A guide to the technical terms and jargon used in urban transit, categorized by infrastructure type.
            </p>

            <div className="mt-5">
                {glossaryData.map((category, catIdx) => (
                    <div key={catIdx} className="mb-5">
                        <h2 className="h4 mb-4 font-weight-bold text-uppercase border-bottom pb-2" style={{ letterSpacing: '0.1em' }}>
                            <span className="text-muted">{category.parent}</span>
                            <span className="mx-2 text-danger">/</span>
                            {category.child}
                        </h2>
                        <dl className="row mt-4">
                            {category.terms.map((item, idx) => (
                                <React.Fragment key={idx}>
                                    <dt className="col-sm-3 h6 font-weight-bold mb-2">{item.term}</dt>
                                    <dd className="col-sm-9 mb-4 text-muted">
                                        {item.definition}
                                    </dd>
                                </React.Fragment>
                            ))}
                        </dl>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default Glossary;
