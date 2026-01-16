import { useEffect } from 'react';

const SEO = ({ title, description }) => {
    useEffect(() => {
        // Update Title
        if (title) {
            document.title = title;

            // Update Primary Meta Title
            const metaTitle = document.querySelector('meta[name="title"]');
            if (metaTitle) metaTitle.setAttribute('content', title);

            // Update Open Graph Title
            const ogTitle = document.querySelector('meta[property="og:title"]');
            if (ogTitle) ogTitle.setAttribute('content', title);

            // Update Twitter Title
            const twitterTitle = document.querySelector('meta[name="twitter:title"]');
            if (twitterTitle) twitterTitle.setAttribute('content', title);
        }

        // Update Description
        if (description) {
            // Update Primary Meta Description
            const metaDescription = document.querySelector('meta[name="description"]');
            if (metaDescription) metaDescription.setAttribute('content', description);

            // Update Open Graph Description
            const ogDescription = document.querySelector('meta[property="og:description"]');
            if (ogDescription) ogDescription.setAttribute('content', description);

            // Update Twitter Description
            const twitterDescription = document.querySelector('meta[name="twitter:description"]');
            if (twitterDescription) twitterDescription.setAttribute('content', description);
        }
    }, [title, description]);

    return null;
};

export default SEO;
