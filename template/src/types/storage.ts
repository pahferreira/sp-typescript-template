import { EGlobalActions } from '../enums/actions'

export type TStore = {}
export type TAction = {
  type: EGlobalActions | string
  payload: any
}
