import { Document, Model, Query } from "mongoose"
import { ErrorType } from "../../constants/interfaces"

export { Query }

export interface IEnrollmentRequest {
  studentID: string
  courseID: string
}

export interface GQLPostEnrollmentRequest {
  EnrollmentRequestInput: IEnrollmentRequestInput
}

export interface GQLEditEnrollmentRequest {
  EnrollmentRequestEdit: IEnrollmentRequestEdit
}

export interface IEnrollmentRequestInput {
  studentID: string
  courseID: string
}

export interface IEnrollmentRequestEdit {
  _id: string
  studentID: string
  courseID: string
}

export interface IEnrollmentRequestDoc {
  _id: string
  studentID: string
  courseID: string
  error: ErrorType
  createdAt?: Date
  updatedAt?: Date
}

export interface IEnrollmentRequestDocument extends IEnrollmentRequest, Document {}

export interface IEnrollmentRequestModel extends IEnrollmentRequest, Model<IEnrollmentRequestDocument> { }