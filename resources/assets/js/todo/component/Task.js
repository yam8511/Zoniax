import React, { Component, PropTypes } from 'react';

class Task extends Component {
    render() {
        const todo = this.props.todo;
        const statusClass = todo.ok ? 'checked' : '';

        return (
            <li className={ statusClass }>
                <button className="delete" onClick={this.props.deleteTask}>
                  &times;
                </button>

                <input
                    readOnly
                    type="checkbox"
                    checked={todo.ok}
                    onClick={this.props.toggleChecked} />

                <span className="text">{todo.text}</span>
            </li>
        );
    }
}

export default Task;
