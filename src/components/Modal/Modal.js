import React from 'react'
import classes from './Modal.module.scss'


const Modal = props => {

    const combinedFunctions = () => {
        props.onDeleteAllTodos(props.todos)
        props.onToggleModal(false)
    }

    return (
        <React.Fragment>
            {props.modal === true ? <div className={classes.modal}>
                <div className={classes.modalBody}>
                    <h1>Уведомление</h1>
                    <p> Вы уверенны что хотите удалить все записи?</p>
                    <span>
                        <button onClick={() => combinedFunctions()}>Удалить &#10004;</button>
                        <button onClick={() => props.onToggleModal(false)}>Вернуться назад &#8634;</button>
                    </span>
                </div>
            </div> : null}
        </React.Fragment>
    )

}

export default Modal
