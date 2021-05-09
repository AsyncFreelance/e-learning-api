import { Document, Model, Query } from "mongoose"
import { ErrorType } from "../../constants/interfaces"

export { Query }

export interface ICategory {
  name: string
}

export interface GQLPostCategory {
  CategoryInput: ICategoryInput
}

export interface GQLEditCategory {
  CategoryEdit: ICategoryEdit
}

export interface ICategoryInput {
  name: string
}

export interface ICategoryEdit {
  _id: string
  name: string
}

export interface ICategoryDoc {
  _id: string
  name: string
  error: ErrorType
  createdAt?: Date
  updatedAt?: Date
}

export interface ICategoryDocument extends ICategory, Document {}

export interface ICategoryModel extends ICategory, Model<ICategoryDocument> { }