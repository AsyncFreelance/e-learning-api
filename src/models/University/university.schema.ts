import { Schema } from "mongoose"

const UniversitySchema = new Schema({
  name: {
    type: String, unique: false
  },
  description: {
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

export default UniversitySchema