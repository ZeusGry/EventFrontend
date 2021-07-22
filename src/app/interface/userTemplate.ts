import {role} from "./role";

export interface UserTemplate {
  id: number
  login: string
  roles: role[]
  email: string
  showName: string
}
