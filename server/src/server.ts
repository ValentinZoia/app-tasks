
import express from 'express';
import cors from 'cors';
import taskRoutes from './routes/taskRoutes';
import { connectDB } from './config/mongodb';

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/tasks', taskRoutes);
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));