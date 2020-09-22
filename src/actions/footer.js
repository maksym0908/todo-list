export const SET_FILTER = 'SET_FILTER'
export const TOGGLE_MODAL = 'TOGGLE_MODAL'

export function setFilter(filter) {
    return {
        type: SET_FILTER, 
        filter
    }
}

export function onToggleModal(modal) {
    return {
        type: TOGGLE_MODAL, 
        modal
    }
}