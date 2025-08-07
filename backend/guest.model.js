import mongoose, {Schema} from "mongoose";


const guestSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
},{timeStamps:true});


export default mongoose.model('guest', guestSchema)