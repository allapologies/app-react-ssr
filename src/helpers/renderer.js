import React from 'react';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';

import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { routes } from '../client/routes'

const renderer = (req, store) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter context={{}} location={req.path}>
                <div>{renderRoutes(routes)}</div>
            </StaticRouter>
        </Provider>
    );

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

module.exports = renderer;
