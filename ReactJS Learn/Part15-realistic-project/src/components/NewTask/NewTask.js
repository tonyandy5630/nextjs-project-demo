import { useState } from "react";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";
import useHTTP from "../Hooks/use-http";

const NewTask = (props) => {
  const { isLoading, error, sendRequest: sendTaskRequest } = useHTTP();
  const addData = (taskText, newTask) => {
    const generatedId = newTask.name;
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  };
  const enterTaskHandler = (taskText) => {
    sendTaskRequest(
      {
        method: "POST",
        url: "https://react-learn-749b3-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json",
        data: taskText,
        headers: { "Content-Type": "application/json" },
      },
      addData.bind(null, taskText)
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
