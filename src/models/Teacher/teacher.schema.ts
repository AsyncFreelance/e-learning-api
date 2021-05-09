import { Schema } from "mongoose"

const TeacherSchema = new Schema({
  firstName: {
    type: String, unique: false
  },
  lastName: {
    type: String, unique: false
  },
  email: {
    type: String, unique: false
  },
  qualification: {
    type: String, unique: false
  },
  briefIntroduction: {
    type: String, unique: false
  },
  image: {
    type: String, unique: false
  },
  createdAt: {
    type: String, unique: false, default: String(new Date())
  },
  updatedAt: {
    type: String, unique: false, default: String(new Date())
  }
})

export default TeacherSchema