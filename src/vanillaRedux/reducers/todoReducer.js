const initialState = {
  todos: ['поспать', 'покушать', 'покодить'],
};

const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case REMOVE_TODO:
      return {
        ...state,
        todos: [...state.todos.slice(0, state.todos.length - 1)],
      };
    default:
      return state;
  }
};

export const addTodoActionCreator = (payload) => ({ type: ADD_TODO, payload });
export const removeTodoActionCreator = () => ({ type: REMOVE_TODO });
