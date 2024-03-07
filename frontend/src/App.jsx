import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <div className="bg-gray-100 h-screen flex">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <NavBar />
        <div className="ml-8 p-8">
          <h1 className="text-2xl font-bold mb-4">
            Sistema de reclamo por incidencias
          </h1>
          <h1 className="text-2xl font-bold mb-4">Bienvenido</h1>
        </div>
      </div>
    </div>
  );
};

export default App;
