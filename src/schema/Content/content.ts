import { gql } from 'apollo-server-express'

export default gql`

extend type Query {
  fetchContents: [ContentDoc!]
  fetchContentByID(_id: String!): ContentDoc
}

extend type Mutation {
  postContent(ContentInput: ContentInput!): ContentDoc
  editContent(ContentEdit: ContentEdit!): ContentDoc
  removeContent(_id: String!): ContentDoc
  removeAllContents: [ContentDoc]
}

type ContentDoc {
  _id: String
  chapterID: String
  contentType: String
  title: String
  contentData: String
  isMandatory: Boolean
  timeRequiredInMinutes: Int
  error: ErrorType
  createdAt: String
  updatedAt: String
}

input ContentInput {
  chapterID: String!
  contentType: String!
  title: String!
  contentData: String!
  isMandatory: Boolean!
  timeRequiredInMinutes: Int!
}

input ContentEdit {
  _id: String!
  chapterID: String
  contentType: String
  title: String!
  contentData: String
  isMandatory: Boolean
  timeRequiredInMinutes: Int
}
`