import {Adress} from "./adress";

export interface EventTemplate {
  id?: number
  name: string
  startTime: string
  acces: boolean
  email: string
  phoneNumber: string
  participantCount: number
  commentCount: number
  adress: Adress
}
