import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db'
import productRoutes from './routes/productRoutes';

// Load env variables from .env file
dotenv.config();

// Create Express app
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);

// Server port
const PORT = process.env.PORT || 5000;

// Connect to DB and start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error('❌ DB connection failed:', err);
});
