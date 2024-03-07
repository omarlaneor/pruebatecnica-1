
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Sidebar from "./components/Sidebar/Sidebar";

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateForm } from './components/CreateForm'

function App() {
  const [count, setCount] = useState(0)


const App = () => {
  return (

    <div className="bg-gray-200 h-screen flex">
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

    <>
      <CreateForm/>
    
    </>
  )
}


export default App;
