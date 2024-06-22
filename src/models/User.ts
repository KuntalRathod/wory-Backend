import { Schema, model, Document } from 'mongoose';

interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  role: 'Client' | 'Freelancer';
}

const userSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, enum: ['Client', 'Freelancer'] }
});

export const User = model<IUser>('User', userSchema);
