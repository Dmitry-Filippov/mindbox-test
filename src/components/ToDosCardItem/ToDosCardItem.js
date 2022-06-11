import { useDispatch } from "react-redux";
import { toggleIsDone } from "../../features/todos/todosSlice";
import "./ToDosCardItem.css";

const ToDoCardItem = ({ name, isDone, _id }) => {
  const dispatch = useDispatch();

  return (
    <li className="todo-card-item">
      <div
        onClick={() => {
          
          dispatch(toggleIsDone(_id));
        }}
        className={`todo-card-item__is-done ${
          isDone ? "todo-card-item__is-done_checked" : ""
        }`}
      ></div>
      <p
        className={`todo-card-item__text ${
          isDone ? "todo-card-item__text_done" : ""
        }`}
      >
        {name}
      </p>
    </li>
  );
};

export default ToDoCardItem;
