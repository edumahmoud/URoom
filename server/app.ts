import express from 'express';
import apiRoutes from './routes/api.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();

// Built-in middleware for parsing JSON
app.use(express.json());

// API Routes
app.use('/api', apiRoutes);

// Global Error Handler
app.use(errorHandler);

export default app;
