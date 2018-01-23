import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';

import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import { routes } from './client/routes';

const app = express();

app.use(express.static('public'));

const PORT = 3000;

app.get('*', (req, res) => {
    const store = createStore();
    const promises = matchRoutes(routes, req.path).map(({ route }) => {
        return route.loadData ? route.loadData(store) : null;
    });

    Promise.all(promises).then(()=> {
        res.send(renderer(req, store));
    })
});

app.listen(PORT, (req, res) => {
    console.log(`Listening on port ${PORT}`)
});
