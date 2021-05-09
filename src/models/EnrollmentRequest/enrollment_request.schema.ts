import { Schema } from "mongoose"

const EnrollmentRequestSchema = new Schema({
  studentID: {
    type: String, unique: false
  },
  courseID: {
    type: String, unique: false
  },
  createdAt: {
    type: String, unique: false, default: String(new Date())
  },
  updatedAt: {
    type: String, unique: false, default: String(new Date())
  }
})

export default EnrollmentRequestSchema