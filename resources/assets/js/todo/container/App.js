import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo, showFilter } from '../action/todo';
import TaskList from '../component/TaskList';

class App extends Component {

    render() {
        console.info('props', this.props);
        const { dispatch } = this.props;
        const allType = ['completed', 'active', 'all'];

        return (
            <div className="container">
                <header>
                    <h1>Todo List</h1>
                    {
                        allType.map((type, index) => {
                            return (
                                <label className="hide-completed" key={index}>
                                    <input
                                        type="radio"
                                        readOnly
                                        checked={ type === this.props.showType }
                                        onClick={() => {
                                            dispatch(showFilter(type));
                                            this.forceUpdate();
                                        }}
                                    />
                                    {type}
                                </label>
                            );
                        })
                    }

                    <form name="todoForm" className="new-task" onSubmit={ this.handleForm.bind(this) } >
                        <input name="job" type="text" placeholder="Type to add new tasks" />
                    </form>
                </header>

                <TaskList todos={ this.filterTodo() }
                    toggleChecked={(id) => {
                        dispatch(toggleTodo(id));
                        this.forceUpdate();
                    }}

                    deleteTask={(id) => {
                        dispatch(deleteTodo(id));
                        this.forceUpdate();
                    }} />
            </div>
        );
    }

    handleForm(e) {
        const { dispatch } = this.props;
        e.preventDefault();
        dispatch(addTodo(document.todoForm.job.value));
        document.todoForm.job.value = '';
    }

    filterTodo() {
        switch (this.props.showType) {
            case 'active':
                return this.props.todos.filter((todo) => {
                    return todo.ok === false;
                });

            case 'completed':
                return this.props.todos.filter((todo) => {
                    return todo.ok === true;
                });

            default:
                return this.props.todos;
        }
    }
}

App.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        ok: PropTypes.bool.isRequired
    }).isRequired).isRequired,
    showType: PropTypes.oneOf([
        'all',
        'active',
        'completed'
    ]).isRequired
}

function mapStateToProp(state) {
    return {
        todos: state.todos.data,
        showType: state.showType
    };
}

export default connect(mapStateToProp)(App);
