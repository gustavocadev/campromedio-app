import { useContext, useEffect, FormEvent } from "react";
import calcGrade from "../../helpers/calcGrade";
import showMessageGrade from "../../helpers/showGradeMessage";
import Form from "../../components/input/Form";
import Percent from "../../components/input/Percent";
import ColorBlock from "../../components/ui/ColorBlock";
import { GradeContext } from "../../context/GradeContext";

const Home = () => {
  const {
    currentGrades,
    currentPercent,
    setCurrentPercent,
    setCurrentGrades,
    finalGrade,
    setFinalGrade,
    setMessageGrade,
  } = useContext(GradeContext);

  const { inputGrade1, inputGrade2, inputGrade3 } = currentGrades;
  const { inputPercent1, inputPercent2, inputPercent3 } = currentPercent;

  // get initial state from local storage
  useEffect(() => {
    const initialGrades = JSON.parse(localStorage.getItem("grades") ?? "{}");
    setCurrentGrades(initialGrades);
  }, []);

  // get initial state from local storage
  useEffect(() => {
    const initialPercents = JSON.parse(localStorage.getItem("percents")!) ?? {
      ...currentPercent,
    };
    setCurrentPercent(initialPercents);
  }, []);

  // next, we need to watch everytime the inputs change
  useEffect(() => {
    localStorage.setItem("grades", JSON.stringify(currentGrades));
  }, [currentGrades]);

  // next, we need to watch everytime the inputs change
  useEffect(() => {
    localStorage.setItem("percents", JSON.stringify(currentPercent));
  }, [currentPercent]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const answer = calcGrade({
      inputGrade1,
      inputGrade2,
      inputGrade3,
      inputPercent1,
      inputPercent2,
      inputPercent3,
    });
    const msg = showMessageGrade(answer);

    // Actualizamos el estado de la nota
    setFinalGrade(answer);
    setMessageGrade(msg);
  };

  return (
    <>
      <h1 className="font-bold text-[32px] text-[#FF4D4D] dark:text-[#E66767] my-4">
        Promedios
      </h1>
      <main className="grid grid-cols-1 grid-rows-2 gap-4 text-black md:grid-cols-2 md:grid-rows-1">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-[24px]">
            <Form />
            <Percent />
          </div>

          <button
            type="submit"
            className="transition duration-200 bg-[#54A0FF] py-[21px] rounded my-[24px] text-xl font-semibold w-full hover:bg-blue-500"
          >
            Calcular nota
          </button>
        </form>
        <section className="relative">
          <ColorBlock />
        </section>
      </main>
    </>
  );
};

export default Home;
