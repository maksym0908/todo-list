import React from 'react'
import classes from './Footer.module.scss'
import propTypes from 'prop-types'

const Footer = (props) => {
   
 const allTodos = props.todos.length
 const completedTodos = props.todos.filter(todo => todo.completed).length
 const uncompletedTodos = props.todos.filter(todo => !todo.completed).length

    return (
        
        <React.Fragment>
        <div className={classes.wrapper}>
            <span><button onClick={() => props.onSetFilter("ALL")}><img className={classes.all} alt="Показать все записи" title="Показать все записи" src={require('../../assets/all.svg')}/></button><p className={classes.text}>Все задачи: {allTodos}</p></span>
            <span><button onClick={() => props.onSetFilter("COMPLETED")}><img className={classes.all} alt="Показать завершенные задачи" title="Показать завершенные задачи" src={require('../../assets/completed.png')}/></button><p className={classes.text}>Выполненные: {completedTodos}</p></span>
            <span><button onClick={() => props.onSetFilter("UNCOMPLETED")}><img className={classes.all} alt="Показать незавершенные задачи" title="Показать незавершенные задачи" src={require('../../assets/uncomplete.png')}/></button><p>Осталось: {uncompletedTodos}</p></span>
            <button onClick={completedTodos || uncompletedTodos > 0 ? () => props.onToggleModal(true) : null}><img className={classes.all} alt="Удалить все записи" title="Удалить все записи" src={require('../../assets/trash.png')}/></button>
        </div>
        </React.Fragment>
    )
}

Footer.propTypes = {
    onSetFilter: propTypes.func.isRequired, 
    onToggleModal: propTypes.func.isRequired
}

export default Footer