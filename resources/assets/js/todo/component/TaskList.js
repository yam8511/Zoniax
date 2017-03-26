import React, { Component, PropTypes } from 'react';
import Task from './Task';

class TaskList extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.todos.map((todo, index) => {
                        return (
                            <Task todo={ todo } key={ index }
                                toggleChecked={() => { this.props.toggleChecked(todo._id) }}
                                deleteTask={() => { this.props.deleteTask(todo._id) }} />
                        );
                    }).reverse()
                }
            </ul>
        );
    }
}

export default TaskList;
