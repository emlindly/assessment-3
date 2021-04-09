import { useState } from "react";
import { useDispatch } from "react-redux";

import { addTask } from "../state/taskList/taskListSlice";

import "./SubmitTask.css";

const SubmitTask = (props) => {
  // Get access to the dispatch using useDispatch() from 'react-redux'.
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState({ completed: false });

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Date.now(),
      text: newTask
    });
    // Dispatch an action that we imported from the slice, with a payload of "newTask".
    dispatch(addTask(newTask));
  };

  return (
    <form className="task-submit-form" onSubmit={handleSubmit}>
      <label htmlFor="task-type">Task Name</label>
      <input
        id="task-type"
        type="text"
        onChange={(e) => setNewTask({ description: e.target.value })}
      ></input>
      <button type="submit" onClick={handleSubmit}>
        Submit Task
      </button>
    </form>
  );
};
export default SubmitTask;
