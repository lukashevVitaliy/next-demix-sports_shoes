import mongoose from 'mongoose';

interface IUser {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
  timestamps: boolean;
}

const userSchema = new mongoose.Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
);

const User: IUser =
  mongoose.models.User || mongoose.model<IUser>('User', userSchema);
export default User;
