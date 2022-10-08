import React, { useEffect, useState, useCallback } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHTTP from "./components/Hooks/use-http";

function App() {
  const [tasks, setTasks] = useState([]);
  const HttpData = useHTTP();
  const { isLoading, error, sendRequest: fetchTasks } = HttpData;

  // console.log(HttpData);
  useEffect(() => {
    const transformTasks = (taskObj) => {
      const loadedTask = [];
      if (tasks) {
        for (let taskKey in taskObj) {
          console.log(taskObj[taskKey].text);
          loadedTask.push({ id: taskKey, text: taskObj[taskKey].text });
        }
        setTasks(loadedTask);
      }
    };
    fetchTasks(
      {
        url: "https://react-learn-749b3-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json",
      },
      transformTasks
    );
  }, []);
  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  // console.log(tasks);
  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
