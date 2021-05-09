import { model } from "mongoose"
import TeacherSchema from "./teacher.schema"

export const TeacherModel = model("teachers", TeacherSchema)