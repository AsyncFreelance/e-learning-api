import { Document, Model, Query } from "mongoose"
import { ErrorType } from "../../constants/interfaces"

export { Query }

export interface IChapter {
  title: string
  courseID: string
  numberOfReading: number
  numberOfVideos: number
  numberOfAssignments: number
}

export interface GQLPostChapter {
  ChapterInput: IChapterInput
}

export interface GQLEditChapter {
  ChapterEdit: IChapterEdit
}

export interface IChapterInput {
  title: string
  courseID: string
  numberOfReading: number
  numberOfVideos: number
  numberOfAssignments: number
}

export interface IChapterEdit {
  _id: string
  title: string
  courseID: string
  numberOfReading: number
  numberOfVideos: number
  numberOfAssignments: number
}

export interface IChapterDoc {
  _id: string
  title: string
  courseID: string
  numberOfReading: number
  numberOfVideos: number
  numberOfAssignments: number
  error: ErrorType
  createdAt?: Date
  updatedAt?: Date
}

export interface IChapterDocument extends IChapter, Document {}

export interface IChapterModel extends IChapter, Model<IChapterDocument> { }