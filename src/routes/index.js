import express from 'express';
import urlRoutes from './url.routes';
import pkg from '../../package.json';

const routes = express();

// // Get info from package.json
// routes.set('pkg', pkg);

// routes.get('/', (req, res) => {
//     res.json({
//         name: routes.get('pkg').name,
//         author: routes.get('pkg').author,
//         description: routes.get('pkg').description,
//         version: routes.get('pkg').version,
//     });
// });

routes.use('/url', urlRoutes);

export default routes;