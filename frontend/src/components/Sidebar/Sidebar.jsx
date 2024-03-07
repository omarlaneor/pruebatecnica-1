import React from "react";
import logoImage from "../../../public/LOGO_LOMALINDA.png";

const Sidebar = () => {
  return (
    <aside className="bg-orange-500 text-white p-4 h-full">
      <div className="mb-4">
        <img src={logoImage} alt="Logo" className="w-44 h-44" />
      </div>
      <ul>
        <li className="mb-2 mt-8 font-semibold text-lg">
          <a href="#" className="hover:bg-green-700 p-2 rounded">
            Reporte de Incidencias
          </a>
        </li>
        <li className="mb-2 mt-4 font-semibold text-lg">
          <a href="#" className="hover:bg-green-700 p-2 rounded block w-full">
            Ver Incidencias
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
