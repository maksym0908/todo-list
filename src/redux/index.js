import { combineReducers } from 'redux'
import { default as todos } from './todo'
import { default as filter } from './footer'
import {default as modal } from './modal'
import {default as fetching } from './fetching'

const reducer = combineReducers({
    todos,
    filter, 
    modal, 
    fetching

})

export default reducer
