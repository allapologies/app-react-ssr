import express from 'express';

import renderer from './helpers/renderer'

const app = express();

app.use(express.static('public'));

const PORT = 3000;

app.get('/', (req, res) => res.send(renderer()));

app.listen(PORT, (req, res) => {
    console.log(`Listening on port ${PORT}`)
});
