import React from "react";
import  {useGlobalContext}  from "./context/GlobalContext";
import TaskCard from "./TaskCard";
/* componente para iterar individualmente cada tarea para pasarle a taskCard */

export const TaskList = () => {
  const { tasksState } = useGlobalContext();



  if (tasksState.length == 0) {
    return (
      <h1 className="text-2xl tracking-wide text-white font-bold flex justify-center items-center">
        No Tasks Yet 
      </h1>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {tasksState.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};
