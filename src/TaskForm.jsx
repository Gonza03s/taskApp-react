import React, { useState } from "react";
import { useGlobalContext } from "./context/GlobalContext";

/* formulario ingreso de tarea */

export const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useGlobalContext();

  const handleSubmit = (event) => {
    event.preventDefault();

    if(title.length == 0 && description.length == 0) return;

    createTask(title, description);

    setTitle("");
    setDescription("");
  };

  return (
    <div className="flex justify-center items-center bg-slate-800 w-full sm:w-3/4 rounded-lg mx-auto mb-6 ">
      <form onSubmit={handleSubmit} className=" space-y-4 p-6 ">
        <h1 className="text-white text-center text-2xl pb-4 font-bold  ">
          Task Manager
        </h1>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="enter a title"
          className="bg-slate-300 p-3 w-full text-black rounded mb-2"
        />

        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="enter a description"
          className="bg-slate-300 p-3 w-full text-black rounded mb-2"
        />
        <button
          className="bg-neutral-900 hover:bg-neutral-800 text-white tracking-wide font-bold py-1 px-3 rounded-md w-full"
          type="submit"
        >
          Save
        </button>
      </form>
    </div>
  );
};
