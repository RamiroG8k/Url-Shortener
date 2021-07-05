// Common Modules
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import { config } from 'dotenv';
import routes from './routes';
import './database';

/**
 * CONFIG
 * inits app with express,
 * disables x-powered-by header
 * enables custom file to load env vars
 */
const app = express();
app.disable('x-powered-by');
config({ path: __dirname + '/.env' });

// Developer middleware
app.use(morgan('dev'));

// Data as JSON
app.use(express.json());

// Cors
app.use(cors());

// Helmet
app.use(helmet());

// General routes
app.use('/api', routes);

// Init
app.listen(process.env.PORT, () => {
    console.log('Server listening on Port:', process.env.PORT);
});
