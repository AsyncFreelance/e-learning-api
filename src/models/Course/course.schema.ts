import { Schema } from "mongoose"

const CourseSchema = new Schema({
  title: {
    type: String, unique: false
  },
  briefIntroduction: {
    type: String, unique: false
  },
  language: {
    type: String, unique: false
  },
  numberOfChapters: {
    type: Number, unique: false
  },
  teacherID: {
    type: String, unique: false
  },
  universityID: {
    type: String, unique: false
  },
  categoryID: {
    type: String, unique: false
  },
  verified: {
    type: Boolean, unique: false, default: false
  },
  createdAt: {
    type: String, unique: false, default: String(new Date())
  },
  updatedAt: {
    type: String, unique: false, default: String(new Date())
  }
})

export default CourseSchema