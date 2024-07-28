import express from 'express';
import {
    getAllTasks,
    createTask,
    getTaskById,
    updateTask,
    deleteTask
} from "../controllers/taskController";

const router = express.Router();

// GET /api/tasks
router.get('/', getAllTasks);

// POST /api/tasks
router.post('/', createTask);

router.get('/:id', getTaskById);

// PUT /api/tasks/:id
router.put('/:id', updateTask);

// DELETE /api/tasks/:id
router.delete('/:id', deleteTask);

export default router