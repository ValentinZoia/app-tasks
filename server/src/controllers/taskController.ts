import { Request, Response } from "express";
import Task  from "../models/Task";
import { messages } from "../utils/messages";
import { connectDB } from "../config/mongodb";

interface BodyProps {
  _id?: string;
  title?: string;
  time?: string;
  description?: string;
}

export const createTask = async (req: Request, res: Response) => {
  try {
    await connectDB();

    //Obtner datos del body
    const body: BodyProps = await req.body;

    //Destructuración
    const { title, time, description } = body;

    //Validar datos
    if (!title  || !description) {
      return res
        .status(400)
        .json({ message: messages.error.invalidInput });
    }

    //Crear tarea
    const newTask = new Task({
      title,
      time,
      description,
    });

    await newTask.save();
    res
      .status(201)
      .json({ message: messages.success.taskCreated, task: newTask });
  } catch (error) {
    res
      .status(400)
      .json({ message: messages.error.invalidInput, error: error });
  }
};

export const getAllTasks = async (req: Request, res: Response) => {
  try {
    await connectDB();

    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(400).json({ message: messages.error.serverError, error: error });
  }
};

export const getTaskById = async (req: Request, res: Response) => {
  try {
    await connectDB();
    const task = await Task.findById(req.params.id);
    res.status(200).json({ task });
  } catch (error) {
    res.status(400).json({ message: messages.error.serverError, error: error });
  }
}

export const updateTask = async (req: Request, res: Response) => {
  try {
    await connectDB();

    //Obtner datos del body
    const body: BodyProps = await req.body;

    //Obtener id de la url
    const id = req.params.id;

    //Destructuración
    const {title, time, description } = body;

    //Validar datos
    if (!title ||  !description || !id) {
      return res
        .status(400)
        .json({ message: messages.error.invalidInput });
    }

    //Actualizar tarea
    const oldTask = await Task.findByIdAndUpdate(id, { title, time, description });

    const newTask = await Task.findById(id);

    res.status(200).json({ message: messages.success.taskUpdated, oldTask: oldTask, newTask: newTask });

  } catch (error) {
    res
      .status(400)
      .json({ message: messages.error.invalidInput, error: error });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
    try {
        await connectDB();

        const id = req.params.id;
        

        if (!id) {
          return res
            .status(400)
            .json({ message: messages.error.invalidInput });
        }

        const task = await Task.findByIdAndDelete(id);

        res.status(200).json({ message: messages.success.taskDeleted, task: task });

    } catch (error) {
        res.status(400).json({ message: messages.error.serverError, error: error });
    }
};
