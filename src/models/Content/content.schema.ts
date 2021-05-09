import { Schema } from "mongoose"

const ContentSchema = new Schema({
  chapterID: {
    type: String, unique: false
  },
  contentType: {
    type: String, unique: false
  },
  contentData: {
    type: String, unique: false
  },
  title: {
    type: String, unique: false, default: ""
  },
  isMandatory: {
    type: Boolean, unique: false, default: true
  },
  timeRequiredInMinutes: {
    type: Number, unique: false
  },
  createdAt: {
    type: String, unique: false, default: String(new Date())
  },
  updatedAt: {
    type: String, unique: false, default: String(new Date())
  }
})

export default ContentSchema