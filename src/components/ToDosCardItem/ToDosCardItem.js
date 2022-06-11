import { useDispatch } from "react-redux";
import {
  editName,
  toggleIsDone,
} from "../../features/todos/todosSlice";
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
      <input
        type="text"
        defaultValue={name}
        onChange={(e) => {
          dispatch(editName([_id, e.target.value]));
        }}
        className={`todo-card-item__text ${
          isDone ? "todo-card-item__text_done" : ""
        }`}
      />
    </li>
  );
};

export default ToDoCardItem;
