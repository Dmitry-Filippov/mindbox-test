import { FC } from "react";
import ToDosList from "../ToDosList/ToDosList";
import "./App.css";

const App: FC = () => {
  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">todos</h1>
      </header>
      <main className="content">
        <ToDosList />
      </main>
    </div>
  );
};

export default App;
