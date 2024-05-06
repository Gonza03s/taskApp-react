import React from "react";
import { TaskForm } from "./TaskForm";
import { GlobalContextProvider } from "./context/GlobalContext";
import { TaskList } from "./TaskList";
/* main comunicacional entre componentes */

export const App = () => {
  return (
    <main className="bg-zinc-900 h-screen">

      <GlobalContextProvider>
        <div className="container mx-auto p-10">
          <TaskForm></TaskForm>
          <TaskList></TaskList>
        </div>
      </GlobalContextProvider>
      
    </main>
  );
};
