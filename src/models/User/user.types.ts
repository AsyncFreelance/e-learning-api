import { Document, Model, Query } from "mongoose"
import { ErrorType } from "../../constants/interfaces"

export { Query }

export interface IUser {
  firstName: string
  lastName: string
  email: string
  password: string
  enrolledCourses: string[]
  numberOfCoursesEnrolled: number
  numberOfCoursesCompleted: number
}

export interface GQLPostUser {
  UserInput: IUserInput
}

export interface GQLEditUser {
  UserEdit: IUserEdit
}

export interface IUserInput {
  firstName: string
  lastName: string
  email: string
  numberOfCoursesEnrolled?: number
  numberOfCoursesCompleted?: number
}

export interface GQLLoginInput {
  email: string
  password: string
}

export interface IUserEdit {
  _id: string
  firstName: string
  lastName: string
  email: string
  numberOfCoursesEnrolled: number
  numberOfCoursesCompleted: number
}

export interface IUserDoc {
  _id: string
  firstName: string
  lastName: string
  email: string
  password: string
  enrolledCourses: string[]
  numberOfCoursesEnrolled: number
  numberOfCoursesCompleted: number
  error: ErrorType
  createdAt?: Date
  updatedAt?: Date
}

export interface EnrollCourse {
  _id: string
  courseID: string
}

export interface IUserDocument extends IUser, Document {}

export interface IUserModel extends IUser, Model<IUserDocument> { }