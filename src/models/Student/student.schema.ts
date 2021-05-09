import { Schema } from "mongoose"

const StudentSchema = new Schema({
  firstName: {
    type: String, unique: false
  },
  lastName: {
    type: String, unique: false
  },
  email: {
    type: String, unique: false
  },
  numberOfCoursesEnrolled: {
    type: Number, unique: false, default: 0
  },
  numberOfCoursesCompleted: {
    type: Number, unique: false, default: 0
  },
  createdAt: {
    type: String, unique: false, default: String(new Date())
  },
  updatedAt: {
    type: String, unique: false, default: String(new Date())
  }
})

export default StudentSchema