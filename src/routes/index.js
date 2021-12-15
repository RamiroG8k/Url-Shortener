import express from 'express';
import genericRoutes from './generic.routes';
import pkg from '../../package.json';

const routes = express();

// Get info from package.json
routes.set('pkg', pkg);

routes.get('/', (req, res) => {
    res.json({
        name: routes.get('pkg').name,
        author: routes.get('pkg').author,
        description: routes.get('pkg').description,
        version: routes.get('pkg').version,
    });
});

routes.use('/generic', genericRoutes);

export default routes;