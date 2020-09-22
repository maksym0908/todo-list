import { onToggleModal, setFilter } from '../actions/index'
import Footer from '../components/Footer/Footer'
import { connect } from 'react-redux'

function mapStateToProps(state) {
   return{
        todos: state.todos,
        filter: state.filter
   } 
}

function mapDispatchToProps(dispatch) {
    return {
        onSetFilter: filter => (dispatch(setFilter(filter))), 
        onToggleModal: () => (dispatch(onToggleModal(true)))
    }
}



const FooterContainer = connect(mapStateToProps, mapDispatchToProps)(Footer)

export default FooterContainer