import { useDispatch, useSelector } from 'react-redux';
// import {
//   incrementActionCreator,
//   decrementActionCreator,
// } from './vanillaRedux/reducers/counterReducer';
import {
  addTodoActionCreator,
  removeTodoActionCreator,
} from './vanillaRedux/reducers/todoReducer';
import { decrement, increment } from './toolkitRedux/toolkitReducer';

const App = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.toolkit.count);

  // const { counter } = useSelector((state) => state.counter);
  // const { todos } = useSelector((state) => state.todos);

  // const increment = () => {
  //   dispatch(incrementActionCreator());
  // };

  // const decrement = () => {
  //   dispatch(decrementActionCreator());
  // };

  const addTodo = (newTodo) => {
    dispatch(addTodoActionCreator(newTodo));
  };

  const removeLastTodo = () => {
    dispatch(removeTodoActionCreator());
  };

  return (
    <div>
      <h1>{counter}</h1>
      {/* <ul>
        {todos.map((todo) => {
          return <li key={todo}>{todo}</li>;
        })}
      </ul> */}
      <button onClick={() => dispatch(increment())}>Инкремент</button>
      <button onClick={() => dispatch(decrement())}>Декремент</button>
      {/* <button onClick={() => addTodo(prompt())}>Добавить задачу</button>
      <button onClick={() => removeLastTodo()}>Удалить последнюю задачу</button> */}
    </div>
  );
};

export default App;
