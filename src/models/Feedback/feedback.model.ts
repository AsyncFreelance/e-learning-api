import { model } from "mongoose"
import FeedbackSchema from "./feedback.schema"

export const FeedbackModel = model("feedbacks", FeedbackSchema)