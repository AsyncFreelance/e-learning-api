import { model } from "mongoose"
import ChapterSchema from "./chapter.schema"

export const ChapterModel = model("chapters", ChapterSchema)