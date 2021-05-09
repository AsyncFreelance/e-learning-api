import { Document, Model, Query } from "mongoose"
import { ErrorType } from "../../constants/interfaces"

export { Query }

export interface ICourse {
  title: string
  briefIntroduction: string
  language: string
  numberOfChapters: number
  verified: boolean
  teacherID: string
  universityID: string
  categoryID: string
}

export interface GQLPostCourse {
  CourseInput: ICourseInput
}

export interface GQLEditCourse {
  CourseEdit: ICourseEdit
}

export interface ICourseInput {
  title: string
  briefIntroduction: string
  language: string
  numberOfChapters: number
  teacherID: string
  universityID: string
  categoryID: string
}

export interface ICourseEdit {
  _id: string
  title: string
  briefIntroduction: string
  language: string
  numberOfChapters: number
  teacherID: string
  universityID: string
  categoryID: string
}

export interface ICourseDoc {
  _id: string
  title: string
  briefIntroduction: string
  language: string
  numberOfChapters: number
  verified: boolean
  teacherID: string
  universityID: string
  categoryID: string
  error: ErrorType
  createdAt?: Date
  updatedAt?: Date
}

export interface ICourseDocument extends ICourse, Document {}

export interface ICourseModel extends ICourse, Model<ICourseDocument> { }