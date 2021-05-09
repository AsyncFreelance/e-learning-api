import { Schema } from "mongoose"

const CategorySchema = new Schema({
  name: {
    type: String, unique: false
  },
  createdAt: {
    type: String, unique: false, default: String(new Date())
  },
  updatedAt: {
    type: String, unique: false, default: String(new Date())
  }
})

export default CategorySchema