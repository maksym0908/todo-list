import { GET_TODOS, ADD_TODO, REMOVE_TODO, REMOVE_ALL_TODOS, EDIT_TODO, TOGGLE_TODO } from '../actions/index'

let reducer = (state = {}, action) => {

    switch (action.type) {
        case TOGGLE_TODO:

            if (state.id !== action.data.id) {
                return state
            }

            return action.data
        case EDIT_TODO:

            if (state.id !== action.data.id) {
                return state
            }

            return action.data

        default:
            return state

    }

}

const TodosReducer = (state = [], action) => {

    switch (action.type) {
        case GET_TODOS: {
            return action.data
        }

        case ADD_TODO:
            return [...state, action.data]

        case REMOVE_TODO:
            const index = state.findIndex(todo => todo.id === action.data)
            return [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ]

        case REMOVE_ALL_TODOS:
            return state.filter(todo => todo.completed && !todo.completed)

        case EDIT_TODO:
            return state.map(todo => reducer(todo, action))

        case TOGGLE_TODO:
            return state.map(todo => reducer(todo, action))

        default:
            return state
    }
}

export default TodosReducer

