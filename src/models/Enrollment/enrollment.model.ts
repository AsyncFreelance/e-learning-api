import { model } from "mongoose"
import EnrollmentSchema from "./enrollment.schema"

export const EnrollmentModel = model("enrollments", EnrollmentSchema)