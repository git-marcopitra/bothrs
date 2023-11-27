import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  avatarURL: { type: String, required: false },
});

export default mongoose.models.User || mongoose.model('User', userSchema);
