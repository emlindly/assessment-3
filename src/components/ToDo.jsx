import React, { useState } from "react";
import { Check, Trash } from "react-bootstrap-icons";
import { removeTask, completeTask } from "../state/taskList/taskListSlice";
import SubmitTask from "./SubmitTask";

const Todo = ({ updateTodo, todos }) => {
  const [done, setDone] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(done.id, value);

    setDone({
      id: null,
      value: "",
    });
  };

  if (done.id) {
    return <SubmitTask done={done} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTask(todo.id)}>
        {todo.text}
      </div>
      <div className="todo-container">
        <Check onSubmit={completeTask} />
        <Trash onSubmit={removeTask} />
      </div>
    </div>
  ));
};
export default Todo;
