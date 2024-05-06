import React, { createContext, useContext, useEffect, useState } from "react";
import { initialTasks } from "../data/taskData";

 const context = createContext();

export const useGlobalContext = () => {
  const contexto = useContext(context);
  return contexto;
};

export const GlobalContextProvider = ({ children }) => {

  const initializeTasks = () =>
    {
      const storedTasks = JSON.parse(localStorage.getItem("tasks")) || initialTasks ;
      return storedTasks;
    };
  
  const [tasksState, setTasks] = useState(() => initializeTasks());

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksState));
  }, [tasksState]);

  const createTask = (title, description) => {
    const newTask = {
      id: new Date().getTime(),
      title: title,
      description: description,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const updateDescription = (id, newDescription = undefined) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, description: newDescription } : task
      )
    );
  };

  const updateTitle = (id, newTitle = undefined) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, title: newTitle } : task
      )
    );
  };

  return (
    <context.Provider value={{ tasksState, createTask, deleteTask, updateDescription, updateTitle }}>
      {children}
    </context.Provider>
  );
};
