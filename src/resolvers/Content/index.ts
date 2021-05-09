import { ContentModel } from "../../models/Content/content.model"
import { GQLEditContent, GQLPostContent, IContentDoc } from "../../models/Content/content.types"
import DBWrapper from "../../wrappers/APIGenerator"

const { getAPICalls } = new DBWrapper(ContentModel)
const { Create, Edit, Fetch, FetchOne, Remove, RemoveAll } = getAPICalls()

const ContentResolver = {
  Query: {
    async fetchContents(_: any, prop: any): Promise<IContentDoc[]> {
      return await Fetch() as unknown as IContentDoc[]
    },
    async fetchContentByID(_: any, prop: any): Promise<IContentDoc> {
      return await FetchOne(prop._id) as unknown as IContentDoc
    }
  },

  Mutation: {
    async postContent(_: any, prop: GQLPostContent): Promise<IContentDoc> {
      return await Create(prop.ContentInput) as unknown as IContentDoc
    },
    async editContent(_: any, prop: GQLEditContent): Promise<IContentDoc> {
      return await Edit(prop.ContentEdit) as unknown as IContentDoc
    },
    async removeContent(_: any, prop: any): Promise<IContentDoc> {
      return await Remove(prop._id) as unknown as IContentDoc
    },
    async removeAllContents(_: any, prop: any): Promise<IContentDoc[]> {
      return await RemoveAll() as unknown as IContentDoc[]
    }
  }
}

export default ContentResolver