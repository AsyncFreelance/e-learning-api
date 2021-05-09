import { Document, Model, Query } from "mongoose"
import { ErrorType } from "../../constants/interfaces"
export { Query }

export interface IContent {
  chapterID: string
  contentType: string
  contentData: string
  title: string
  isMandatory: boolean
  timeRequiredInMinutes: number
}

export interface GQLPostContent {
  ContentInput: IContentInput
}

export interface GQLEditContent {
  ContentEdit: IContentEdit
}

export interface IContentInput {
  chapterID: string
  contentType: string
  contentData: string
  title: string
  isMandatory: boolean
  timeRequiredInMinutes: number
}

export interface IContentEdit {
  _id: string
  chapterID: string
  contentType: string
  contentData: string
  title: string
  isMandatory: boolean
  timeRequiredInMinutes: number
}

export interface IContentDoc {
  _id: string
  chapterID: string
  contentType: string
  contentData: string
  title: string
  isMandatory: boolean
  timeRequiredInMinutes: number
  error: ErrorType
  createdAt?: Date
  updatedAt?: Date
}

export interface IContentDocument extends IContent, Document {}

export interface IContentModel extends IContent, Model<IContentDocument> { }