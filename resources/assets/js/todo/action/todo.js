import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, SHOW_FILTER } from './index';

export function addTodo(text) {
    return {
        type: ADD_TODO,
        text
    };
};

export function toggleTodo(id) {
    return {
        type: TOGGLE_TODO,
        id
    };
};

export function deleteTodo(id) {
    return {
        type: DELETE_TODO,
        id
    }
};

export function showFilter(filter) {
    return {
        type: SHOW_FILTER,
        filter
    };
};
