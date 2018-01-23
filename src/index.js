import 'babel-polyfill';
import express from 'express';

import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

app.use(express.static('public'));

const PORT = 3000;

app.get('*', (req, res) => {
    const store = createStore();
    res.send(renderer(req, store));
});

app.listen(PORT, (req, res) => {
    console.log(`Listening on port ${PORT}`)
});
