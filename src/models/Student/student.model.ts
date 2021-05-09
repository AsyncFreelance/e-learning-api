import { model } from "mongoose"
import StudentSchema from "./student.schema"

export const StudentModel = model("students", StudentSchema)