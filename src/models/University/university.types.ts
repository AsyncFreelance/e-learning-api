import { Document, Model, Query } from "mongoose"
import { ErrorType } from "../../constants/interfaces"

export { Query }

export interface IUniversity {
  name: string
  description: string
  image: string
}

export interface GQLPostUniversity {
  UniversityInput: IUniversityInput
}

export interface GQLEditUniversity {
  UniversityEdit: IUniversityEdit
}

export interface IUniversityInput {
  name: string
  description: string
  image: string
}

export interface IUniversityEdit {
  _id: string
  name: string
  description: string
  image: string
}

export interface IUniversityDoc {
  _id: string
  name: string
  description: string
  image: string
  error: ErrorType
  createdAt?: Date
  updatedAt?: Date
}

export interface IUniversityDocument extends IUniversity, Document {}

export interface IUniversityModel extends IUniversity, Model<IUniversityDocument> { }