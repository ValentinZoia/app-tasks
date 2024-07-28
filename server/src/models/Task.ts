
import mongoose,{ Schema } from 'mongoose';
import { ITaskDocument } from '../types/Task';

const TaskSchema: Schema = new Schema<ITaskDocument>({
  title: { type: String, required: true },
  time: { type: String, required: false },
  description: { type: String, required: true },
  completed: { type: Boolean, default: false }
}, {
  timestamps: true
});

 const Task = mongoose.models.Task ||mongoose.model<ITaskDocument>('Task', TaskSchema);

export default Task