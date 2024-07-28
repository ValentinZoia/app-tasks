import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ITask, TaskType } from '../types/Task';
import { taskService } from '../services/taskService';
import TaskForm from '../components/TaskForm';


const TaskEditPage: React.FC = () => {
 const {id} = useParams<{ id: string }>();
 const navigate = useNavigate();
 const [task, setTask] = useState<TaskType | null>(null);
 const [title, setTitle] = useState('');
 const [time, setTime] = useState<string | undefined>('')
 const [description, setDescription] = useState('');
 const [isLoading, setIsLoading] = useState(true);
 const [error, setError] = useState<string | null>(null);

 useEffect(() => {
  const fetchTask = async () => {
    if (!id) return;
    try {
      const fetchedTask = await taskService.getTaskById(id);
      setTask(fetchedTask);
      setTitle(fetchedTask.title);
      setTime(fetchedTask.time)
      setDescription(fetchedTask.description);
      setIsLoading(false);
    } catch (err) {
      setError('Error al cargar la tarea');
      setIsLoading(false);
    }
  };

  fetchTask();
}, [id]);
 



  const handleUpdateTask = async (task: ITask) => {
    try {
      const response =await taskService.updateTask(id as string, task as TaskType);
      alert(response.message);
      navigate('/tasks/list');
    } catch (error: any) {
      alert(error.message)
    }
  }

  if (isLoading) return <div className="text-center mt-8">Cargando tarea...</div>;
  if (error) return <div className="text-center mt-8 text-red-500">{error}</div>;
  if (!task) return <div className="text-center mt-8">Tarea no encontrada</div>;

  return (
    <main className="w-full h-screen flex  justify-center items-center ">
      <div className="bg-gray-300 p-5 flex flex-col justify-start items-center">
        <h1 className="text-balck text-3xl mb-4 ">Edit Task</h1>
        <TaskForm initialData={{ title, time, description}} onSubmit={handleUpdateTask} buttonText="Save" />
      </div>
    </main>
  )
}

export default TaskEditPage