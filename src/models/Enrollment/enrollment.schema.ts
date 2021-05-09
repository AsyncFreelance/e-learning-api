import { Schema } from "mongoose"
import enrollmentStatus from "../../constants/enrollmentStatus"

const EnrollmentSchema = new Schema({
  studentID: {
    type: String, unique: false
  },
  courseID: {
    type: String, unique: false
  },
  status: {
    type: String, unique: false, default: enrollmentStatus.ENROLLED
  },
  createdAt: {
    type: String, unique: false, default: String(new Date())
  },
  updatedAt: {
    type: String, unique: false, default: String(new Date())
  }
})

export default EnrollmentSchema