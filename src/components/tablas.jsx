import { useState, useEffect } from "react";
export function Tablas() {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setDatos(data));
  }, []);
  return (
    <div className="mx-4 flex justify-center box-border">
      <table className="mx-5 border-collapse border border-slate-700 ">
        <tr>
          <th className=" px-4">Nombre</th> <th className=" px-4">Apellido</th>{" "}
          <th className=" px-4">Ciudad</th> <th className=" px-4">Profesion</th>
        </tr>
        {datos.map((dato) => (
          <tr>
            <td className="px-4 border border-slate-700">{dato.name}</td>{" "}
            <td className="px-4 border border-slate-700">{dato.username}</td>{" "}
            <td className="border border-slate-700">{dato.address.city}</td>{" "}
            <td className="border border-slate-700">{dato.email}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
