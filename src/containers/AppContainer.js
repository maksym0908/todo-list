import { App } from '../App'
import { connect } from 'react-redux'

function mapStateToProps(state) {
    return {
        fetching: state.fetching, 
        todos: state.todos
    }
}

const AppContainer = connect(mapStateToProps, null)(App)

export default AppContainer

