import Header from '../components/Header/Header'
import { addTodo } from '../actions/index'
import { connect } from 'react-redux'

function mapStateToProps(state) {

    return {
        todos: state.todos 
        
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onAdd: title => dispatch(addTodo(title)), 


    }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)

export default HeaderContainer