import { Document, Model, Query } from "mongoose"
import { ErrorType } from "../../constants/interfaces"

export { Query }

export interface ITeacher {
  firstName: string
  lastName: string
  email: string
  qualification: string
  briefIntroduction: string
  image: string
}

export interface GQLPostTeacher {
  TeacherInput: ITeacherInput
}

export interface GQLEditTeacher {
  TeacherEdit: ITeacherEdit
}

export interface ITeacherInput {
  firstName: string
  lastName: string
  email: string
  numberOfCoursesEnrolled?: number
  numberOfCoursesCompleted?: number
}

export interface ITeacherEdit {
  _id: string
  firstName: string
  lastName: string
  email: string
  qualification: string
  briefIntroduction: string
  image: string
}

export interface ITeacherDoc {
  _id: string
  firstName: string
  lastName: string
  email: string
  qualification: string
  briefIntroduction: string
  image: string
  error: ErrorType
  createdAt?: Date
  updatedAt?: Date
}

export interface ITeacherDocument extends ITeacher, Document {}

export interface ITeacherModel extends ITeacher, Model<ITeacherDocument> { }