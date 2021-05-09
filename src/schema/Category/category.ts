import { gql } from 'apollo-server-express'

export default gql`

extend type Query {
  fetchCategories: [CategoryDoc!]
  fetchCategoryByID(_id: String!): CategoryDoc
}

extend type Mutation {
  postCategory(CategoryInput: CategoryInput!): CategoryDoc
  editCategory(CategoryEdit: CategoryEdit!): CategoryDoc
  removeCategory(_id: String!): CategoryDoc
}

type CategoryDoc {
  _id: String
  name: String
  error: ErrorType
  createdAt: String
  updatedAt: String
}

input CategoryInput {
  name: String!
}

input CategoryEdit {
  _id: String!
  name: String!
}
`