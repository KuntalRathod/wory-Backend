import { Schema, model, Document } from 'mongoose';

interface IProject extends Document {
  title: string;
  description: string;
  clientId: Schema.Types.ObjectId;
  tags: string[];
}

const projectSchema = new Schema<IProject>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  clientId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  tags: [{ type: String }]
});

export const Project = model<IProject>('Project', projectSchema);
