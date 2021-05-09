import { model } from "mongoose"
import CourseSchema from "./course.schema"

export const CourseModel = model("courses", CourseSchema)