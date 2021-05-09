import { ChapterModel } from "../../models/Chapter/chapter.model"
import { GQLEditChapter, GQLPostChapter, IChapterDoc } from "../../models/Chapter/chapter.types"
import DBWrapper from "../../wrappers/APIGenerator"

const { getAPICalls } = new DBWrapper(ChapterModel)
const { Create, Edit, Fetch, FetchOne, Remove, RemoveAll } = getAPICalls()

const ChapterResolver = {
  Query: {
    async fetchChapters(_: any, prop: any): Promise<IChapterDoc[]> {
      return await Fetch() as unknown as IChapterDoc[]
    },
    async fetchChapterByID(_: any, prop: any): Promise<IChapterDoc> {
      return await FetchOne(prop._id) as unknown as IChapterDoc
    }
  },

  Mutation: {
    async postChapter(_: any, prop: GQLPostChapter): Promise<IChapterDoc> {
      return await Create(prop.ChapterInput) as unknown as IChapterDoc
    },
    async editChapter(_: any, prop: GQLEditChapter): Promise<IChapterDoc> {
      return await Edit(prop.ChapterEdit) as unknown as IChapterDoc
    },
    async removeChapter(_: any, prop: any): Promise<IChapterDoc> {
      return await Remove(prop._id) as unknown as IChapterDoc
    },
    async removeAllChapters(_: any, prop: any): Promise<IChapterDoc[]> {
      return await RemoveAll() as unknown as IChapterDoc[]
    }
  }
}

export default ChapterResolver