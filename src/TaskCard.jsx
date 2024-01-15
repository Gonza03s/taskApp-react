import React, { useState } from "react";
import { useGlobalContext } from "./context/GlobalContext";

/* cards y update de cada tarea */

function TaskCard(props) {
  const { deleteTask, updateDescription, updateTitle } = useGlobalContext();
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(props.task.description);

  const [newTitle, setNewTitle] = useState(props.task.title)

  const handleUpdate = (id) => {
    updateDescription(id, newDescription);
    updateTitle(id, newTitle);
    setIsEditing(false);
  };

  return (
    <>
      <div className="bg-gray-800 rounded-md text-white p-4 overflow-auto">
        <h2 className="text-xl font-bold capitalize flex flex-wrap pb-5  ">{props.task.title}</h2>
        <hr />
        {isEditing ? (
          <>
            <input
              type="text"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              className="bg-slate-300 text-black p-1 rounded-md my-2 placeholder:text-red-500"
              placeholder="New-Description"
            />
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="bg-slate-300 text-black p-1 rounded-md my-2 placeholder:text-red-500"
              placeholder="New-Title"
            />
            <button
              className="bg-zinc-700 hover:bg-zinc-900 px-5 mx-5 mt-4 rounded-md"
              onClick={() => handleUpdate(props.task.id)}
            >
              Update
            </button>
          </>
        ) : (
          <div>
            <p className="text-md my-6 flex flex-wrap  ">{props.task.description}</p>
            <div className="flex justify-between mt-4 ">
              <button
                className="bg-red-500 hover:bg-red-800 px-2 py-1 rounded-md  "
                onClick={() => deleteTask(props.task.id)}
              >
                Delete
              </button>
              <button
                className="bg-indigo-500 hover:bg-indigo-600 px-2 py-1 rounded-md "
                onClick={() => setIsEditing(true)}
              >
                Modify
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default TaskCard;
