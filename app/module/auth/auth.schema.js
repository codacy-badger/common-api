/**
 * Module dependencies.
 */
import mongoose, { Schema } from 'mongoose'

const AuthenticationSchema = new Schema({
  token: String,
  channel: String,
  username: String,
  valid: Boolean,
  loginTime: { type: Date, default: Date.now },
  accessTime: { type: Date, default: Date.now },
  deviceId: String,
  deviceType: String,
  deviceToken: String,
  userId: { type: Schema.Types.ObjectId, ref: 'users' }
}, { collection: 'authentications', versionKey: false });

// Build the authentication Model:
export default mongoose.model('authentications', AuthenticationSchema)
