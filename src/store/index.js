import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import apiMiddleware from '../middleware/api'
import localStorage, { loadState } from '../middleware/local-storage'
import reducer from '../redux/index'

const initialState = loadState('todos')
const store = createStore(reducer, initialState, applyMiddleware(apiMiddleware('http://localhost:8080/api'), thunk, promise, localStorage('todos'), logger))


export default store