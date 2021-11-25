import React from "react";
// import { useLocation } from "react-router-dom";
// import contactoBuho from "../../../assets/img/contactoBuho.png";

const Contact = () => {
  // const { pathName } = useLocation();
  // console.log(pathName);
  const teacherData = [
    {
      course: "POO",
      name: "Jean Lapadula",
      cellPhone: 99543934,
      correo: "jeanlapadula@gmail.com",
    },
    {
      course: "Estructura de Datos	",
      name: "Eric Quispe	",
      cellPhone: 99543931,
      correo: "erickquispe@gmail.com",
    },
    {
      course: "Matematica I",
      name: "Julien Sanchez",
      cellPhone: 99333934,
      correo: "juliensanchez@gmail.com",
    },
    {
      course: "Matematica II",
      name: "Igor Lopez",
      cellPhone: 92543934,
      correo: "igorlopez@gmail.com",
    },
  ];

  return (
    <main className="">
      <table className="table p-4 bg-[#f9ca24] shadow rounded-lg text-center m-auto w-[1000px] mt-24">
        <thead>
          <tr>
            <th className="p-4 text-xl font-bold text-black border border-black whitespace-nowrap">
              Curso
            </th>
            <th className="p-4 text-xl font-bold text-black border border-black whitespace-nowrap">
              Nombre del Profesor
            </th>
            <th className="p-4 text-xl font-bold text-black border border-black whitespace-nowrap">
              Telefono
            </th>
            <th className="p-4 text-xl font-bold text-black border border-black whitespace-nowrap">
              Gmail
            </th>
          </tr>
        </thead>
        <tbody>
          {teacherData.map((teacher) => {
            return (
              <tr className="text-black" key={teacher.name}>
                <td className="p-4 border border-black">{teacher.course}</td>
                <td className="p-4 border border-black">{teacher.name}</td>
                <td className="p-4 border border-black">{teacher.cellPhone}</td>
                <td className="p-4 border border-black">{teacher.correo}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};

export default Contact;
