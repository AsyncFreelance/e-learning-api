import { gql } from 'apollo-server-express'

export default gql`

extend type Query {
  fetchCourses: [CourseDoc!]
  fetchUnverifiedCourses: [CourseDoc!]
  fetchCourseByID(_id: String!): CourseDoc
}

extend type Mutation {
  postCourse(CourseInput: CourseInput!): CourseDoc
  editCourse(CourseEdit: CourseEdit!): CourseDoc
  removeCourse(_id: String!): CourseDoc
  verifyCourse(_id: String!): CourseDoc
}

type CourseDoc {
  _id: String
  title: String
  image: String
  briefIntroduction: String
  language: String
  numberOfChapters: Int
  teacherID: String
  universityID: String
  categoryID: String
  verified: Boolean
  error: ErrorType
  createdAt: String
  updatedAt: String
}

input CourseInput {
  title: String!
  image: String
  briefIntroduction: String!
  language: String!
  numberOfChapters: Int!
  teacherID: String!
  universityID: String!
  categoryID: String!
}

input CourseEdit {
  _id: String!
  title: String
  image: String
  briefIntroduction: String
  language: String
  numberOfChapters: Int
  teacherID: String
  universityID: String
  categoryID: String
}
`