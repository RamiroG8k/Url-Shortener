// Common Modules
import express from 'express';
import morgan from 'morgan';
import routes from './routes';
import { config } from 'dotenv';
import './database';

// Config
const app = express();
config({path: __dirname + '/.env'});

// Developer middleware
app.use(morgan('dev'));

// Handles data as JSON
app.use(express.json());

// General routes
app.use('/api', routes);

// Init
app.listen(process.env.PORT, () => {
    console.log('Server listening on Port:', process.env.PORT);
});
