import { TOGGLE_MODAL } from '../actions/index'


const ModalReducer = (state = false, action) => {
        switch (action.type) {

            case TOGGLE_MODAL:
                return !state
                   
            default:
                return state 
                
        }
}

export default ModalReducer