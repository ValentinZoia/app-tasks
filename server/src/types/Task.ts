import { Document, Types } from 'mongoose';

// Interfaz para los datos de la tarea
export interface ITask {
  title: string;
  description: string;
  time?:string;
  completed?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

// Interfaz para el documento de Mongoose
export interface ITaskDocument extends ITask, Document {
  _id: Types.ObjectId;
  title: string;
  time?: string;
  description: string;
  completed?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}