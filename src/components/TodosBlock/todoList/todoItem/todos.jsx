import React from 'react'
import PropTypes from 'prop-types'
import classes from './todos.module.scss'




class TodoItem extends React.Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef(null)
        this.state = {
            editing: false
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit() {
        let title = this.inputRef.current.value
        this.props.onEdit(this.props.todo.id, title)
        this.setState({ editing: false})
    }

    render() {
        const classChange = []
        if (this.props.todo.completed) {
            classChange.push('crossed')
        } 

        return ( this.state.editing ?
            <form onSubmit={this.handleSubmit} className={classes.form}>
                <div>
                    <input type="text" ref={this.inputRef} defaultValue={this.props.todo.title} autoFocus={true}/>
                    <button role="img" type="submit">Сохранить</button>
                </div>

        </form> :
            <div className={classes.todoItem}>
            <li>
            <span className={classChange.join(' ')} >
                <input type="checkbox" checked={this.props.todo.completed} onChange={() => this.props.handleToggle(this.props.todo.id) }/>
            <strong>{ this.props.index + 1}</strong>&nbsp;
               <p>{ this.props.todo.title } </p>
            </span>
            <span className={classes.btns}>
                <button className={classes.edit} onClick={() => this.setState({ editing: true})}><img src={require('../../../../assets/pencil.jpg')}/></button>
                <button className={classes.close} onClick={() => this.props.handleDelete(this.props.todo.id)}><div><img src={require('../../../../assets/delete.jpg')}/></div></button>
            </span>
            </li>
        </div>
        )
    }
}


TodoItem.propTypes = {
    todo: PropTypes.object.isRequired, 
    index: PropTypes.number,
    onEdit: PropTypes.func.isRequired
}

export default TodoItem