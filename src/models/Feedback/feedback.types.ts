import { Document, Model, Query } from "mongoose"
import { ErrorType } from "../../constants/interfaces"

export { Query }

export interface IFeedback {
  courseID: string
  content: string
}

export interface GQLPostFeedback {
  FeedbackInput: IFeedbackInput
}

export interface GQLEditFeedback {
  FeedbackEdit: IFeedbackEdit
}

export interface IFeedbackInput {
  courseID: string
  content: string
}

export interface IFeedbackEdit {
  _id: string
  courseID: string
  content: string
}

export interface IFeedbackDoc {
  _id: string
  courseID: string
  content: string
  error: ErrorType
  createdAt?: Date
  updatedAt?: Date
}

export interface IFeedbackDocument extends IFeedback, Document {}

export interface IFeedbackModel extends IFeedback, Model<IFeedbackDocument> { }