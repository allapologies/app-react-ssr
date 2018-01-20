import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './client/components/home'

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    const content = renderToString(<Home />);
    res.send(content);
});

app.listen(PORT, (req, res) => {
    console.log(`Listening on port ${PORT}`)
});
