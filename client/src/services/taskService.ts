// services/taskService.ts

import axios from 'axios';
import { messages } from '../utils/message';
import { TaskType } from '../types/Task';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/tasks';

export const taskService = {
  
  getAllTasks: async (): Promise<TaskType[]> => {
      try {
        const response = await axios.get(API_URL)
        return response.data.tasks
        
        
      } catch (error: any) {
        throw new Error(messages.error.serverError)
      }
  },

  getTaskById: async (id: string): Promise<TaskType> => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data.task;
    } catch (error: any) {
      throw new Error(messages.error.taskNotFound);
    }
  },

  createTask: async (task: Omit<TaskType, '_id'>): Promise<{ task: TaskType; message: string }> => {
    try {
      const response = await axios.post(API_URL, task);
      return response.data;
    } catch (error : any) {
      if (error.response && error.response.status === 400) {
        throw new Error(error.response.data.message);
      }
      throw new Error(messages.error.serverError);
    }
  },

  updateTask: async (id: string, task: Partial<TaskType>): Promise<{ task: TaskType; message: string }> => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, task);
        return response.data;
    } catch (error: any) {
        if (error.response && error.response.status === 400) {
            throw new Error(error.response.data.message);
          }
          throw new Error(messages.error.serverError);
    }
  },

  deleteTask: async (id: string): Promise<string> => {
    try {
        const response =await axios.delete(`${API_URL}/${id}`);
        return response.data.message
    } catch (error: any) {
          throw new Error(messages.error.serverError);
    }
  }

}