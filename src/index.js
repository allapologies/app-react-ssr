import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './client/components/home'

const app = express();

app.use(express.static('public'));

const PORT = 3000;

app.get('/', (req, res) => {
    const content = renderToString(<Home />);

    const html = `
        <html>
            <head></head>
            <body>
                <div id="root">${content}</div>
                <script src="bundle.js"></script>
            </body>
       </html>
    `;
    res.send(html);
});

app.listen(PORT, (req, res) => {
    console.log(`Listening on port ${PORT}`)
});
