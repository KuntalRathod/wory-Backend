import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './src/routes/authRoutes';
import projectRoutes from './src/routes/projectRoutes'
dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI as string)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Connection error', error.message);
  });
