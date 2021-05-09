import { Document, Model, Query } from "mongoose"
import { ErrorType } from "../../constants/interfaces"

export { Query }

export interface IStudent {
  firstName: string
  lastName: string
  email: string
  numberOfCoursesEnrolled: number
  numberOfCoursesCompleted: number
}

export interface GQLPostStudent {
  StudentInput: IStudentInput
}

export interface GQLEditStudent {
  StudentEdit: IStudentEdit
}

export interface IStudentInput {
  firstName: string
  lastName: string
  email: string
  numberOfCoursesEnrolled?: number
  numberOfCoursesCompleted?: number
}

export interface IStudentEdit {
  _id: string
  firstName: string
  lastName: string
  email: string
  numberOfCoursesEnrolled: number
  numberOfCoursesCompleted: number
}

export interface IStudentDoc {
  _id: string
  firstName: string
  lastName: string
  email: string
  numberOfCoursesEnrolled: number
  numberOfCoursesCompleted: number
  error: ErrorType
  createdAt?: Date
  updatedAt?: Date
}

export interface IStudentDocument extends IStudent, Document {}

export interface IStudentModel extends IStudent, Model<IStudentDocument> { }