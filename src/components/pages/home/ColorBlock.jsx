import React, { useState, useEffect } from "react";
import asignColorBlock from "../../../helpers/asignColorBlock";

const ColorBlock = ({ finalGrade, messageGrade, currentGrades }) => {
  // Distructuring
  const { inputGrade1, inputGrade2, inputGrade3 } = currentGrades;
  const [error, setError] = useState(false);

  useEffect(() => {
    if (
      inputGrade1 >= 0 &&
      inputGrade1 <= 20 &&
      inputGrade2 >= 0 &&
      inputGrade2 <= 20 &&
      inputGrade3 >= 0 &&
      inputGrade3 <= 20 &&
      finalGrade <= 20 &&
      finalGrade >= 0
    ) {
      setError(false);
    } else {
      setError(true);
    }
  }, [finalGrade]);
  return (
    <div>
      {finalGrade !== 0 ? (
        <div
          className={`absolute top-0 bottom-0 left-0 right-0 rounded-lg ${asignColorBlock(
            finalGrade,
            error
          )}`}
        >
          <div className="flex items-center justify-center h-full">
            <span className="text-center">
              {!error && (
                <p className="font-semibold text-[40px] uppercase">
                  {finalGrade >= 10.5 ? "¡Aprobaste!" : "¡REPROBASTE!"}
                </p>
              )}

              {error && (
                <p className="font-semibold text-[38px] uppercase">
                  Tus notas no pueden ser mayores a{" "}
                  <span className="text-red-900">20</span> o ser notas{" "}
                  <span className="text-red-900">negativas</span>.
                </p>
              )}

              <p className="font-semibold text-[18px]">
                {!error && "Tu nota final es:"}
              </p>
              <p className="font-semibold text-[64px]">
                {!error && finalGrade.toFixed(1)}
              </p>
              <p className="font-semibold text-[22px]">
                {!error && messageGrade}
              </p>
            </span>
          </div>
        </div>
      ) : (
        <div
          className={`absolute top-0 bottom-0 left-0 right-0 rounded-lg bg-[#D9735B]`}
        >
          <div className="flex items-center justify-center h-full">
            <p className="font-semibold text-[40px] text-center">
              <span className="block font-bold text-blue-900">
                Bienvenid@ a Campromedio!!!
              </span>
              Lugar donde puedes calcular tus promedios de forma segura.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorBlock;
