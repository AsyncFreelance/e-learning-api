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
  password: {
    type: String, unique: false, default: ""
  },
  image: {
    type: String, unique: false, default: ""
  },
  numberOfCoursesEnrolled: {
    type: Number, unique: false, default: 0
  },
  numberOfCoursesCompleted: {
    type: Number, unique: false, default: 0
  },
  userType: {
    type: String, unique: false, default: "STUDENT"
  },
  externalID: {
    type: String, unique: false, default: ""
  },
  enrolledCourses: [{
    type: String, unique: false, default: []
  }],
  completedCourses: [{
    type: String, unique: false, default: []
  }],
  createdAt: {
    type: String, unique: false, default: String(new Date())
  },
  updatedAt: {
    type: String, unique: false, default: String(new Date())
  }
})

export default StudentSchema