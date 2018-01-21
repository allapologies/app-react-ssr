import React from 'react';
import { renderToString } from 'react-dom/server'

import Home from '../client/components/home'

const renderer = () => {
    const content = renderToString(<Home />);

    return `
        <html>
            <head></head>
            <body>
                <div id="root">${content}</div>
                <script src="bundle.js"></script>
            </body>
       </html>
    `;
};

renderToString(<Home/>);

module.exports = renderer;
