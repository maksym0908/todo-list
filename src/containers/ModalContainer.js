import { onToggleModal, deleteAllTodos } from '../actions/index'
import Modal from '../components/Modal/Modal'
import { connect } from 'react-redux'

function mapStateToProps(state) {
    
    return{
         modal: state.modal,
         todos: state.todos

    } 
 }

 function mapDispatchToProps(dispatch) {
     return {
         onToggleModal: () => (dispatch(onToggleModal(false))), 
         onDeleteAllTodos: all => dispatch(deleteAllTodos(all))
     }
 }
 
 
 
 const ModalContainer = connect(mapStateToProps, mapDispatchToProps)(Modal)
 
 export default ModalContainer