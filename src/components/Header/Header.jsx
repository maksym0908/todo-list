import React from 'react'
import PropTypes from 'prop-types'
import classes from './Header.module.scss'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.inputRef = React.createRef()
    }

    handleSubmit(event) {
        event.preventDefault()
        let title = this.state.title
            if (title) {
                this.props.onAdd(title)
                this.setState({ title: ''})
            }
    }

    handleChange(event) {
        let title = event.target.value
        this.setState({ title })
    }


    render() {
        return (
            <React.Fragment>
            <form onSubmit={this.handleSubmit}>
                <div className={classes.addTodo}>
                    <input ref={this.inputRef} onChange={this.handleChange} value={this.state.title} placeholder="Что Вам нужно сделать?" autoFocus={true}/>
                </div>
            </form>
            </React.Fragment>
        )

    }
}

   



Header.propTypes = {
    onAdd: PropTypes.func.isRequired
}


export default Header