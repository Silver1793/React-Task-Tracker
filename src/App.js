import "./App.css";
import Tasks from "./components/Tasks";
import Header from "./components/Header";
import AddTask from "./components/AddTask";

import { useState } from "react";

function App() {
  const [showAdder, setShowAdder] = useState(false);
  const [task, setTask] = useState([
    {
      id: 1,
      text: "shopping",
      day: "today",
      reminder: false,
    },
    { id: 2, text: "swimming", day: "yesterday", reminder: false },
    { id: 3, text: "tennis", day: "tmmrw", reminder: false },
  ]);
  const deleteTask = (id) => {
    setTask(task.filter((task) => task.id !== id));
  };
  const toggleReminder = (id) => {
    setTask(
      task.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  const addTask = (neoTask) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...neoTask };
    setTask([...task, newTask]);
  };
  return (
    <div className="container">
      <Header
        title={"Task Tracker"}
        showAdd={showAdder}
        onAdd={() => setShowAdder(!showAdder)}
      />
      {showAdder && <AddTask onAdd={addTask} />}
      {task.length > 0 ? (
        <Tasks
          task={task}
          onDelete={deleteTask}
          toggleReminder={toggleReminder}
        />
      ) : (
        "No Tasks"
      )}
    </div>
  );
}

export default App;
