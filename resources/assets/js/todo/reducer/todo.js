import { combineReducers } from 'redux';
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, SHOW_FILTER } from '../action/index';

// Todo Reducer
function todos(state = {
    data: [],
    id: 1
}, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                data: [
                    ...state.data,
                    {
                        _id: state.id,
                        text: action.text,
                        ok: false
                    }
                ],
                id: state.id + 1
            }

        case TOGGLE_TODO:
            let newData = state.data.map((todo) => {
                if (todo._id === action.id) {
                    todo.ok = !todo.ok;
                }
                return todo;
            });

            return {
                data: newData,
                id: state.id
            };

        case DELETE_TODO:
            let nextData = state.data.filter((todo) => {
                return todo._id !== action.id;
            });

            return {
                data: nextData,
                id: state.id
            };

        default:
            return state;
    }
}

// Todo Show Filter
function showType(state = 'all', action) {
    const filterType = ['all', 'active', 'completed'];
    return filterType.indexOf(action.filter) === -1 ? state : action.filter;
}

// 融合所有function, 建立一個 Reducer
const todoReducer = combineReducers({
    todos,
    showType
});

export default todoReducer;
