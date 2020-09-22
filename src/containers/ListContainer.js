import { deleteTodo, editTodo, toggleTodo } from '../actions/index'
import TodoList from '../components/TodosBlock/todoList/todoList'
import { connect } from 'react-redux'

function getFilteredTodos(todos, filter) {
   switch(filter) {
      case 'All':
         return todos

      case 'COMPLETED':
         return todos.filter(todo => todo.completed)

      case 'UNCOMPLETED':
         return todos.filter(todo => !todo.completed)

         default:
             return todos
   }
}

function mapStateToProps(state) {
   return {
      todos: getFilteredTodos(state.todos, state.filter)
   }
   
}

function mapDispatchToProps(dispatch) {
   return {
      onDelete: id => dispatch(deleteTodo(id)),
      onToggle: id => dispatch(toggleTodo(id)),
      onEdit: (id, title) => dispatch(editTodo(id, title))
   }
}

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList) 




export default ListContainer
