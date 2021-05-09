import { model } from "mongoose"
import EnrollmentRequestSchema from "./enrollment_request.schema"

export const EnrollmentRequestModel = model("enrollment_requests", EnrollmentRequestSchema)