import React, { useEffect, useState } from "react";
import calcGrade from "../../../helpers/calcGrade.jsx";
import showMessageGrade from "../../../helpers/showMessageGrade.jsx";
import Form from "../../input/Form.jsx";
import Percent from "../../input/Percent.jsx";

const Home = () => {
  const initialGrades = JSON.parse(localStorage.getItem("grades")) || {
    inputGrade1: "",
    inputGrade2: "",
    inputGrade3: "",
  };

  const initialPercents = JSON.parse(localStorage.getItem("percents")) || {
    inputPercent1: 40,
    inputPercent2: 50,
    inputPercent3: 10,
  };

  // Hooks
  const [finalGrade, setFinalGrade] = useState(0);
  const [currentGrades, setCurrentGrades] = useState(initialGrades);
  const [currentPercent, setCurrentPercent] = useState(initialPercents);
  // console.log(initialState);
  const [button, setButton] = useState(false);

  // Distructuring
  const { inputGrade1, inputGrade2, inputGrade3 } = currentGrades;

  const { inputPercent1, inputPercent2, inputPercent3 } = currentPercent;

  // Estado del mensaje
  const [messageGrade, setMessageGrade] = useState("");

  useEffect(() => {
    localStorage.setItem("grades", JSON.stringify(currentGrades));
  }, [currentGrades]);

  useEffect(() => {
    localStorage.setItem("percents", JSON.stringify(currentPercent));
  }, [currentPercent]);

  // Set New Result
  useEffect(() => {
    const answer = calcGrade(
      inputGrade1,
      inputGrade2,
      inputGrade3,
      inputPercent1,
      inputPercent2,
      inputPercent3
    );
    // Actualizamos el estado de la nota
    setFinalGrade(answer);

    // console.log("again because button changes");
  }, [button]);

  // Change button state
  const toggleButtonState = (e) => {
    e.preventDefault();
    setButton(!button);
  };

  useEffect(() => {
    // Cambiamos el estado del mensaje
    setMessageGrade(showMessageGrade(finalGrade));
  }, [finalGrade]);

  return (
    <>
      <h1 className="font-bold text-[32px] text-[#FF4D4D] dark:text-[#E66767] my-4">
        Promedios
      </h1>
      <main className="grid grid-cols-1 grid-rows-2 gap-4 text-black md:grid-cols-2 md:grid-rows-1">
        <section>
          <div className="grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-[24px]">
            <Form
              button={button}
              setCurrentGrades={setCurrentGrades}
              currentGrades={currentGrades}
            />
            <Percent
              setCurrentPercent={setCurrentPercent}
              button={button}
              currentPercent={currentPercent}
            />
          </div>

          <button
            type="submit"
            onClick={toggleButtonState}
            className="transition duration-200 bg-[#54A0FF] py-[21px] rounded my-[24px] text-xl font-semibold w-full hover:bg-blue-500"
          >
            Calcular nota
          </button>
        </section>
        <section className="relative">
          {finalGrade !== 0 && (
            <div
              className={`absolute top-0 bottom-0 left-0 right-0 rounded-lg ${
                finalGrade >= 10.5 ? "bg-green-600" : "bg-red-500"
              }`}
            >
              <div className="flex items-center justify-center h-full">
                <span className="text-center">
                  <p className="font-semibold text-[40px] uppercase">
                    {finalGrade >= 10.5 ? "¡Aprobaste!" : "¡REPROBASTE!"}
                  </p>
                  <p className="font-semibold text-[18px]">Tu nota final es:</p>
                  <p className="font-semibold text-[64px]">
                    {" "}
                    {finalGrade.toFixed(1)}
                  </p>
                  <p className="font-semibold text-[18px]">{messageGrade}</p>
                </span>
              </div>
            </div>
          )}
        </section>
      </main>
    </>
  );
};

export default Home;
