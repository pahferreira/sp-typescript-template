import { combineReducers } from 'redux'
import { TAction, TStore } from '../../types/storage'
import { EGlobalActions } from '../../enums/actions'

const appReducer = combineReducers<TStore | undefined, TAction>({})

export default (state: TStore, action: TAction) => {
  if (action.type === EGlobalActions.RESET) {
    return appReducer(undefined, action)
  }
  return appReducer(state, action)
}
