import { Document, Model, Query } from "mongoose"
import { ErrorType } from "../../constants/interfaces"

export { Query }

export interface IEnrollment {
  studentID: string
  courseID: string
  status: string
}

export interface GQLPostEnrollment {
  EnrollmentInput: IEnrollmentInput
}

export interface GQLEditEnrollment {
  EnrollmentEdit: IEnrollmentEdit
}

export interface IEnrollmentInput {
  studentID: string
  courseID: string
  status: string
}

export interface IEnrollmentEdit {
  _id: string
  studentID: string
  courseID: string
  status: string
}

export interface IEnrollmentDoc {
  _id: string
  studentID: string
  courseID: string
  status: string
  error: ErrorType
  createdAt?: Date
  updatedAt?: Date
}

export interface IEnrollmentDocument extends IEnrollment, Document {}

export interface IEnrollmentModel extends IEnrollment, Model<IEnrollmentDocument> { }