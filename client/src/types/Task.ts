import { ObjectId } from 'mongoose'; 

// Interfaz para los datos de la tarea
export interface ITask {
  title: string;
  time?:string;
  description: string;
  completed?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

// Tipo para usar en las operaciones del servicio
export type TaskType = ITask & {
  _id: ObjectId | string | undefined;
}