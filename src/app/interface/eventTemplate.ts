import {Adress} from "./adress";

export interface EventTemplate {
  id?: number
  name: string
  startTime: string
  email: string
  phoneNumber: string
  participantCount: number
  commentCount: number
  adress: Adress
}
