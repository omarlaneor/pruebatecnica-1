import React from 'react';

export const CreateForm = () => {
    return (
        <>
            <form className="max-w-md mx-auto mt-10">
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="subject" id="subject" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="subject" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Asunto</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <label htmlFor="incident_type" className="block mb-2 text-sm font-medium text-gray-900">Tipo de incidencia</label>
                    <select id="incident_type" name="incident_type" className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-0 focus:border-blue-600">
                        <option value="" disabled selected>Seleccione...</option>
                        <option value="infraestructura">Infraestructura</option>
                        <option value="electrico">Eléctrico</option>
                        <option value="redes">Redes</option>
                        <option value="alumbrado">Alumbrado</option>
                        <option value="limpieza">Limpieza</option>
                    </select>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <textarea name="incident_detail" id="incident_detail" rows="4" className="block w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Detalle de la incidencia" required></textarea>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <label htmlFor="image_upload" className="block mb-2 text-sm font-medium text-gray-900">Subir imagen</label>
                    <input id="image_upload" type="file" className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-0 focus:border-blue-600" />
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900">Estado</label>
                    <select id="status" name="status" className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-0 focus:border-blue-600">
                        <option value="" disabled selected>Seleccione...</option>
                        <option value="en_proceso">En proceso</option>
                        <option value="preparado">Preparado</option>
                        <option value="error">Error</option>
                        <option value="completado">Completado</option>
                    </select>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <label htmlFor="creation_date" className="block mb-2 text-sm font-medium text-gray-900">Fecha de creación</label>
                    <input type="date" id="creation_date" name="creation_date" className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-0 focus:border-blue-600" />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
            </form>
        </>
    );
};
