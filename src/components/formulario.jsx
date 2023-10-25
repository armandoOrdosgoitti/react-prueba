import { useEffect,useState } from "react";


export function Form() {
  return (
    <div className=" py-4 ">
      <form className="mx-4  py-2">

        <div className="flex flex-col my-4">
          <label className="text-lg font-bold">nombre: </label>
          <input
            className="border border-slate-900 rounded h-9 "
            type="text"
            name="nombre"
            placeholder="ingrese su nombre"
          />
        </div>

        <div className="flex flex-col my-4">
          <label className="text-lg font-bold">apellido: </label>
          <input
            className="border border-slate-900 rounded h-9 "
            type="text"
            name="apellido"
            placeholder="ingrese su apellido"
          />
        </div>

        <div className="flex flex-col my-4">
          <label className="text-lg font-bold"  >ciudad: </label>

          <input
            className="border border-slate-900 rounded h-9"
            type="text"
            name="ciudad"
            placeholder="ingrese la ciudad"
          />
        </div>
        <div className="flex flex-col my-4">
          <label className="text-lg font-bold"> profesion: </label>
          <input
            className="border border-slate-900 rounded h-9"
            type="text"
            name="profesion"
            placeholder="ingrese la profecion"
          />
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white text-1xl  px-2 py-1 rounded w-full h-9 flex justify-center items-center mt-4"
        >
          probar!
        </button>
      </form>
    </div>
  );
}
