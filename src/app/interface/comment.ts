import {UserTemplate} from "./userTemplate";

export interface Comments {
  id?: number
  user?: UserTemplate
  postTime?: Date
  content: string
}
