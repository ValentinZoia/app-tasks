import { useEffect, useState } from "react";
import { ITask } from "../types/Task";

interface TaskFormProps {
  initialData?: ITask;
  onSubmit: (task: ITask) => void;
  buttonText: string;
}

const TaskForm: React.FC<TaskFormProps> = ({
  initialData,
  onSubmit,
  buttonText,
}) => {
  const [title, setTitle] = useState(initialData?.title || "");
  const [description, setDescription] = useState(
    initialData?.description || ""
  );
  const [time, setTime] = useState(initialData?.time || "");

  useEffect(() => {
    setTitle(initialData?.title || "");
    setDescription(initialData?.description || "");
  }, [initialData]);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTime(event.target.value);
  }

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({ title, time, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col mb-4">
        <label htmlFor="title">Title:</label>
        <input
          className="border border-gray-300 rounded p-2"
          type="text"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="title">Time:</label>
        <input
          className="border border-gray-300 rounded p-2"
          type="time"
          placeholder="Time"
          value={time}
          onChange={handleTimeChange}
        />
      </div>

      <div className="flex flex-col mb-4">
        <label htmlFor="description">Description:</label>
        <textarea
          className="border border-gray-300 rounded p-2"
          id="description"
          placeholder="Description"
          value={description}
          onChange={handleDescriptionChange}
        />
      </div>

      <button type="submit" className="w-20 bg-blue-400  py-2 rounded text-white text-center">{buttonText}</button>
    </form>
  );
};

export default TaskForm;
