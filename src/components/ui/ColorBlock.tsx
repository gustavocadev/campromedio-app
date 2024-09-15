import { useState, useEffect, Fragment } from 'react';
import asignColorBlock from '~/helpers/asignColorBlock';
import { useContext } from 'react';
import { GradeContext } from '~/context';

const ColorBlock = () => {
  const { finalGrade, messageGrade } = useContext(GradeContext);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (finalGrade >= 0 && finalGrade <= 20) {
      setError(false);
    } else {
      setError(true);
    }
  }, [finalGrade]);
  return (
    <Fragment>
      {finalGrade !== 0 ? (
        <div
          className={`absolute top-0 bottom-0 left-0 right-0 rounded-lg ${asignColorBlock(
            finalGrade,
            error,
          )}`}
        >
          <div className="flex items-center justify-center h-full">
            <span className="text-center">
              {!error && (
                <p className="font-semibold text-[40px] uppercase">
                  {finalGrade >= 10.5 ? '¡Aprobaste!' : '¡REPROBASTE!'}
                </p>
              )}

              {error && (
                <p className="font-semibold text-[38px] uppercase">
                  Tus notas no pueden ser mayores a{' '}
                  <span className="text-red-900">20</span> o ser notas{' '}
                  <span className="text-red-900">negativas</span>.
                </p>
              )}

              <p className="font-semibold text-[18px]">
                {!error && 'Tu nota final es:'}
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
        <div className="absolute top-0 bottom-0 left-0 right-0 rounded-lg bg-[#D9735B]">
          <div className="flex items-center justify-center h-full">
            <p className="font-semibold text-[40px] text-center">
              <span className="block font-bold text-blue-900">
                ¡Bienvenid@ a Campromedio!
              </span>
              Lugar donde puedes calcular tus promedios de forma segura.
            </p>
          </div>
        </div>
      )}

      <figure className="flex justify-end bottom-0 right-0 lg:-right-20 absolute z-50">
        <img
          src="/img/homeBuho.png"
          alt="Buho con varita magica"
          className="w-[233px] mt-[-208px]"
        />
      </figure>
    </Fragment>
  );
};

export default ColorBlock;
