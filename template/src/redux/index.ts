import { applyMiddleware, createStore, compose } from 'redux'
import ReduxDucks from './ducks'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore<any, any, any, any>(ReduxDucks, composeEnhancers())

export default store
