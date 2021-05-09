import { model } from "mongoose"
import ContentSchema from "./content.schema"

export const ContentModel = model("contents", ContentSchema)