import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import bfhlRoutes from './routes/bfhlRoutes.js';
import { errorHandler } from './middlewares/errorHandler.js';

// Load environment variables
dotenv.config();

// Validate required environment variables
if (!process.env.OFFICIAL_EMAIL) {
  console.warn('Warning: OFFICIAL_EMAIL not set in .env file');
}

if (!process.env.EXTERNAL_API_KEY) {
  console.warn('Warning: EXTERNAL_API_KEY not set - external service will use fallback');
}

const app = express();
const PORT = process.env.PORT || 3000;

// Security middleware
app.use(helmet());
app.use(cors());

// Body parser with size limit
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Routes
app.use('/', bfhlRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    is_success: false,
    official_email: process.env.OFFICIAL_EMAIL || 'student@chitkara.edu.in',
    error: 'Endpoint not found'
  });
});

// Global error handler
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
});
