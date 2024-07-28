

import React, { useState, useEffect } from 'react';
import { TaskType } from '../types/Task';
import { taskService } from '../services/taskService';
import TaskCard from '../components/TaskCard';
import showDate from '../utils/showDate';
import  convertTimeToMinutes  from '../utils/convertTimeToMinutes';

const TaskListPage: React.FC = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  
    const fetchTasks = async () => {
      try {
        const fetchedTasks = await taskService.getAllTasks();
        setTasks(fetchedTasks);
        setIsLoading(false);
      } catch (err) {
        setError('Error al cargar las tareas');
        setIsLoading(false);
      }
    };

    useEffect(() => {
    fetchTasks();
  }, []);

 const handleDeleteTask= (deleteTaskId: string)=>{
  const filteredTasks = tasks.filter((task) => task._id !== deleteTaskId);
  setTasks(filteredTasks);
 }

 const sortedTasks = tasks.sort((a, b) => {
  const timeA = convertTimeToMinutes(a.time);
  const timeB = convertTimeToMinutes(b.time);
  return timeA - timeB;
});
  
  if (isLoading) return <div className="text-center mt-8">Cargando tareas...</div>;
  if (error) return <div className="text-center mt-8 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className='text-3xl'>{showDate()}</h1>
      {tasks.length === 0 ? (
        <p className="text-gray-600 mt-4">No hay tareas disponibles.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {sortedTasks.map((task) => (
            <TaskCard
              key={task._id as string}
              id={task._id as string}
              title={task.title}
              time={task.time}
              description={task.description}
              onDelete={handleDeleteTask}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskListPage;