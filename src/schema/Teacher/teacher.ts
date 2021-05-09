import { gql } from 'apollo-server-express'

export default gql`

extend type Query {
  fetchTeachers: [TeacherDoc!]
  fetchTeacherByID(_id: String!): TeacherDoc
}

extend type Mutation {
  postTeacher(TeacherInput: TeacherInput!): TeacherDoc
  editTeacher(TeacherEdit: TeacherEdit!): TeacherDoc
  removeTeacher(_id: String!): TeacherDoc
}

type TeacherDoc {
  _id: String
  firstName: String
  lastName: String
  email: String
  qualification: String
  briefIntroduction: String
  image: String
  error: ErrorType
  createdAt: String
  updatedAt: String
}

input TeacherInput {
  firstName: String!
  lastName: String!
  email: String!
  qualification: String!
  briefIntroduction: String!
  image: String!
}

input TeacherEdit {
  _id: String!
  firstName: String
  lastName: String
  email: String
  qualification: String
  briefIntroduction: String
  image: String
}
`