import { Analytics } from '@vercel/analytics/react';

import { Analytics } from '@vercel/analytics/react';

function RootLayout({ children }) {
    return (
        <html>
            <head>
                <title>Your Awesome App</title>
            </head>
            <body>
                {children}
                <Analytics /> {/* Place the Analytics component here */}
            </body>
        </html>
    );
}

export default RootLayout;