import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './todoItem/todos'
import  { Spinner }  from '../../../assets/Loader/Loader'


const styles = {
    ul: {
        listStyle: 'none', 
        margin: 0,
        padding: 0
}
}

 function TodoList (props) {
    return (
         <ul style={styles.ul}>
            
            { props.todos.map( (todo, index, completed) => {
                return <TodoItem 
                todo={todo} 
                key={todo.id} 
                completed={completed} 
                index={index} 
                handleToggle={props.onToggle} 
                handleDelete={props.onDelete} 
                onEdit={props.onEdit} /> 
            })  }
        </ul> 
        
        
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}

export default TodoList