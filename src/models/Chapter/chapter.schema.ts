import { Schema } from "mongoose"

const ChapterSchema = new Schema({
  title: {
    type: String, unique: false
  },
  courseID: {
    type: String, unique: false
  },
  numberOfReading: {
    type: Number, unique: false
  },
  numberOfVideos: {
    type: Number, unique: false
  },
  numberOfAssignments: {
    type: Number, unique: false
  },
  createdAt: {
    type: String, unique: false, default: String(new Date())
  },
  updatedAt: {
    type: String, unique: false, default: String(new Date())
  }
})

export default ChapterSchema