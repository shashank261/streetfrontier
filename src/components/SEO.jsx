import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, image, url, schema, canonical }) => {
    const siteTitle = "Streetfrontier Hub";
    const defaultDescription = "A community driven platform focused on India’s urban and transit infrastructure.";
    const defaultImage = "https://hub.streetfrontier.com/logo.jpg";
    const siteUrl = "https://hub.streetfrontier.com";

    const currentTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const currentDescription = description || defaultDescription;
    const currentImage = image || defaultImage;
    const currentUrl = url || siteUrl;
    const canonicalUrl = canonical || currentUrl;

    return (
        <Helmet>
            {/* Standard metadata */}
            <title>{currentTitle}</title>
            <meta name="description" content={currentDescription} />
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:title" content={currentTitle} />
            <meta property="og:description" content={currentDescription} />
            <meta property="og:image" content={currentImage} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={currentUrl} />
            <meta name="twitter:title" content={currentTitle} />
            <meta name="twitter:description" content={currentDescription} />
            <meta name="twitter:image" content={currentImage} />

            {/* Structured Data (JSON-LD) */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
