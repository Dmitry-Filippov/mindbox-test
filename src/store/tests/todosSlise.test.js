import todoReduser, {
  addTodo,
  toggleIsDone,
  editName,
  initialState,
} from "../slices/todosSlice";

describe("todoSlice", () => {
  it("should retern default state when passed an empty action", () => {
    const result = todoReduser(undefined, { type: "" });
    expect(result).toEqual(initialState);
  });

  it("should add a new item with 'addTodo' action", () => {
    const action = {
      type: addTodo.type,
      payload: {
        name: "Протестировать приложение",
        isDone: false,
      },
    };
    const result = todoReduser({ todosList: [] }, action);
    expect(result.todosList[0].name).toBe("Протестировать приложение");
    expect(result.todosList[0].isDone).toBe(false);
  });

  it("should toggle todo isDone status with 'toggleIsDone' action", () => {
    const action = {
      type: toggleIsDone.type,
      payload: 0,
    };
    const result = todoReduser(
      {
        todosList: [
          {
            name: "Протестировать приложение",
            isDone: false,
          },
        ],
      },
      action
    );
    expect(result.todosList[0].isDone).toBe(true);
  });

  it("should edit todo name text with 'editName' action", () => {
    const action = {
      type: editName.type,
      payload: [0, "Запустить тесты"],
    };
    const result = todoReduser(
      {
        todosList: [
          {
            name: "Протестировать приложение",
            isDone: false,
          },
        ],
      },
      action
    );
    expect(result.todosList[0].name).toBe("Запустить тесты");
  });
});
