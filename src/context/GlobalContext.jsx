import React, { createContext, useContext, useEffect, useState } from "react";
import { initialTasks } from "../data/taskData";

const Context = createContext();

export const useGlobalContext = () => {
  const context = useContext(Context);
  return context;
};

export const GlobalContextProvider = ({ children }) => {
  //inicializar el estado basado en localStorage
  const initializeTasks = () => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || initialTasks;
    return storedTasks;
  };

  const [tasks, setTasks] = useState(() => initializeTasks());

  useEffect(() => {
    // Actualizar localStorage cada vez que cambie el estado de tasks
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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
    <Context.Provider value={{ tasks, createTask, deleteTask, updateDescription, updateTitle }}>
      {children}
    </Context.Provider>
  );
};
