const initialState = {
  counter: 0,
};

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

export const incrementActionCreator = () => ({ type: INCREMENT });
export const decrementActionCreator = () => ({ type: DECREMENT });