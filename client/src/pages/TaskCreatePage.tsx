
import TaskForm from "../components/TaskForm"
import { TaskType, ITask } from "../types/Task";
import { taskService } from "../services/taskService";
import {useNavigate } from 'react-router-dom';




const TaskCreatePage: React.FC = () => {
  const navigate = useNavigate();

  const handleCreateTask = async (task: ITask) => {
    try {
      const response = await taskService.createTask(task as TaskType);
      alert(response.message);
      navigate('/tasks/list');
    } catch (error: any) {
      alert(error.message)
    }
  }


  return (
    <main className="w-full h-screen flex  justify-center items-center ">
      <div className="bg-gray-300 p-5 flex flex-col justify-start items-center">
        <h1 className="text-balck text-3xl mb-4">Create Task</h1>
        <TaskForm initialData={{ title: '', time:'', description: '' }} onSubmit={handleCreateTask} buttonText="Create" />
      </div>
    </main>
  )
}

export default TaskCreatePage