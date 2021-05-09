import { gql } from 'apollo-server-express'

export default gql`

extend type Query {
  fetchUniversities: [UniversityDoc!]
  fetchUniversityByID(_id: String!): UniversityDoc
}

extend type Mutation {
  postUniversity(UniversityInput: UniversityInput!): UniversityDoc
  editUniversity(UniversityEdit: UniversityEdit!): UniversityDoc
  removeUniversity(_id: String!): UniversityDoc
}

type UniversityDoc {
  _id: String
  name: String
  description: String
  image: String!
  error: ErrorType
  createdAt: String
  updatedAt: String
}

input UniversityInput {
  name: String!
  description: String!
  image: String!
}

input UniversityEdit {
  _id: String!
  name: String
  description: String
  image: String
}
`