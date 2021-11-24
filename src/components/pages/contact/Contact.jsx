import React from "react";

const Contact = () => {
  // const data = [
  //   {
  //     curso: "POO",
  //     nombre: "Jean Lapadula"
  //   },
  //   {

  //   }
  // ]

  return (
    <main className="">
      <table class="table p-4 bg-[#f9ca24] shadow rounded-lg text-center m-auto w-[1000px] mt-24">
        <thead>
          <tr>
            <th class="border p-4 border-black whitespace-nowrap font-bold text-black text-xl">
              Curso
            </th>
            <th class="border p-4 border-black  whitespace-nowrap font-bold text-black text-xl">
              Nombre del Profesor
            </th>
            <th class="border p-4 border-black whitespace-nowrap font-bold text-black text-xl">
              Telefono
            </th>
            <th class="border p-4 border-black whitespace-nowrap font-bold text-black text-xl">
              Gmail
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-black">
            <td class="border p-4 border-black">POO</td>
            <td class="border p-4 border-black">Jean Lapadula</td>
            <td class="border p-4 border-black">99543934</td>
            <td class="border p-4 border-black">jeanlapadula@gmail.com</td>
          </tr>
          <tr class="text-black">
            <td class="border p-4 border-black">Estructura de Datos</td>
            <td class="border p-4 border-black">Eric Quispe</td>
            <td class="border p-4 border-black">99543931</td>
            <td class="border p-4 border-black">erickquispe@gmail.com</td>
          </tr>
          <tr class="text-black">
            <td class="border p-4 border-black">Matematica I</td>
            <td class="border p-4 border-black">Julien Sanchez</td>
            <td class="border p-4 border-black">99333934</td>
            <td class="border p-4 border-black">juliensanchez@gmail.com</td>
          </tr>
          <tr class="text-black">
            <td class="border p-4 border-black">Matematica II</td>
            <td class="border p-4 border-black">Igor Lopez</td>
            <td class="border p-4 border-black">92543934</td>
            <td class="border p-4 border-black">igorlopez@gmail.com</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};

export default Contact;
