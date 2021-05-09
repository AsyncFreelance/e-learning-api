import { CategoryModel } from "../../models/Category/category.model"
import { GQLEditCategory, GQLPostCategory, ICategoryDoc } from "../../models/Category/category.types"
import DBWrapper from "../../wrappers/APIGenerator"

const { getAPICalls } = new DBWrapper(CategoryModel)
const { Create, Edit, Fetch, FetchOne, Remove } = getAPICalls()

const CategoryResolver = {
  Query: {
    async fetchCategories(_: any, prop: any): Promise<ICategoryDoc[]> {
      return await Fetch() as unknown as ICategoryDoc[]
    },
    async fetchCategoryByID(_: any, prop: any): Promise<ICategoryDoc> {
      return await FetchOne(prop._id) as unknown as ICategoryDoc
    }
  },

  Mutation: {
    async postCategory(_: any, prop: GQLPostCategory): Promise<ICategoryDoc> {
      return await Create(prop.CategoryInput) as unknown as ICategoryDoc
    },
    async editCategory(_: any, prop: GQLEditCategory): Promise<ICategoryDoc> {
      return await Edit(prop.CategoryEdit) as unknown as ICategoryDoc
    },
    async removeCategory(_: any, prop: any) {
      return await Remove(prop._id) as unknown as ICategoryDoc
    },
  }
}

export default CategoryResolver