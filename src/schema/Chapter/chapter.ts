import { gql } from 'apollo-server-express'

export default gql`

extend type Query {
  fetchChapters: [ChapterDoc!]
  fetchChapterByID(_id: String!): ChapterDoc
}

extend type Mutation {
  postChapter(ChapterInput: ChapterInput!): ChapterDoc
  editChapter(ChapterEdit: ChapterEdit!): ChapterDoc
  removeChapter(_id: String!): ChapterDoc
  removeAllChapters: [ChapterDoc]
}

type ChapterDoc {
  _id: String
  title: String
  courseID: String
  numberOfReading: Int
  numberOfVideos: Int
  numberOfAssignments: Int
  error: ErrorType
  createdAt: String
  updatedAt: String
}

input ChapterInput {
  title: String!
  courseID: String!
  numberOfReading: Int!
  numberOfVideos: Int!
  numberOfAssignments: Int!
}

input ChapterEdit {
  _id: String!
  title: String
  courseID: String
  numberOfReading: Int
  numberOfVideos: Int
  numberOfAssignments: Int
}
`