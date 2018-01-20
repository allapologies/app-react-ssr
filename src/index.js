const express = require('express');
const React = require('react');
const renderTostring = require('react-dom/server').renderToString;

const Home = require('./client/components/home').default;
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    const content = renderTostring(<Home/>);
    res.send(content);
});

app.listen(PORT, (req, res) => {
    console.log(`Listening on port ${PORT}`)
});
