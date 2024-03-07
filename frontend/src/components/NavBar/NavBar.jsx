import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-orange-800 p-4 flex justify-between items-center">
      <div className="flex items-center ml-auto">
        {" "}
        <div className="mr-6">
          <a
            href="#"
            className="text-white hover:text-white-500 hover:bg-green-700 p-2 rounded text-lg font-bold"
          >
            Inicio
          </a>
        </div>
        <div className="mr-6">
          <a
            href="#"
            className="text-white hover:text-white-500 hover:bg-green-700 p-2 rounded text-lg font-bold"
          >
            Nuestro Conjunto
          </a>
        </div>
        <div className="mr-6">
          <a
            href="#"
            className="text-white hover:text-white-500 hover:bg-green-700 p-2 rounded text-lg font-bold"
          >
            Administración
          </a>
        </div>
        <div className="mr-6">
          <a
            href="#"
            className="text-white hover:text-white-500 hover:bg-green-700 p-2 rounded text-lg font-bold"
          >
            PQR
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
