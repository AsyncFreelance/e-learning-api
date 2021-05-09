import { model } from "mongoose"
import CategorySchema from "./category.schema"

export const CategoryModel = model("categories", CategorySchema)