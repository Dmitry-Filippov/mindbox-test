import { useState, FC } from "react";
import { useDispatch } from "react-redux";
import {  useAppSelector } from "../../hooks";
import { addTodo } from "../../store/slices/todosSlice";
import { AppDispatch } from "../../store/store";
import ToDosCardItem from "../ToDosCardItem/ToDosCardItem";
import ToDosCards from "../ToDosCards/ToDosCards";
import "./ToDosList.css";

const ToDosList: FC = () => {
  const cardsList = useAppSelector((state) => state.todos.todosList);
  const dispatch = useDispatch<AppDispatch>();
  const [inputValue, setInputValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("all");

  const handleSelectClick = (e: any) => {
    setSelectedValue(e.target.id);
  }

  function Input() {
    return (
      <input
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        className="todos-form__input"
        type="text"
        required
        placeholder="что надо сделать?"
        value={inputValue}
      />
    );
  }

  return (
    <>
      <form
        className="todos-form"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addTodo({
              name: inputValue,
              isDone: false,
            })
          );
          setInputValue("");
        }}
      >
        {Input()}
        <button className="todos-form__submit"></button>
      </form>
      <h2 className="todos__title">Мои дела:</h2>
      <ToDosCards>
        {cardsList.map((todoItem) => {
          if (selectedValue === "active" && !todoItem.isDone) {
            return (
              <ToDosCardItem
                name={todoItem.name}
                isDone={todoItem.isDone}
                key={cardsList.indexOf(todoItem)}
                _id={cardsList.indexOf(todoItem)}
              />
            );
          } else if (selectedValue === "done" && todoItem.isDone) {
            return (
              <ToDosCardItem
                name={todoItem.name}
                isDone={todoItem.isDone}
                key={cardsList.indexOf(todoItem)}
                _id={cardsList.indexOf(todoItem)}
              />
            );
          } else if (selectedValue === "all") {
            return (
              <ToDosCardItem
                name={todoItem.name}
                isDone={todoItem.isDone}
                key={cardsList.indexOf(todoItem)}
                _id={cardsList.indexOf(todoItem)}
              />
            );
          }
        })}
      </ToDosCards>
      <ul className="select">
        <li
          id="all"
          className={selectedValue === "all" ? "selected" : ""}
          onClick={handleSelectClick}
        >
          Все
        </li>
        <li
          id="active"
          className={selectedValue === "active" ? "selected" : ""}
          onClick={handleSelectClick}
        >
          Активные
        </li>
        <li
          id="done"
          className={selectedValue === "done" ? "selected" : ""}
          onClick={handleSelectClick}
        >
          Выполненные
        </li>
      </ul>
    </>
  );
};

export default ToDosList;
