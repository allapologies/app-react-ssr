import React from 'react';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { routes } from '../client/routes'

const renderer = (req, store, context) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter context={context} location={req.path}>
                <div>{renderRoutes(routes)}</div>
            </StaticRouter>
        </Provider>
    );

    return `
        <html>
            <head>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
            </head>
            <body>
                <div id="root">${content}</div>
                <script>window.initialState = ${serialize(store.getState())}</script>
                <script src="bundle.js"></script>
            </body>
       </html>
    `;
};

module.exports = renderer;
