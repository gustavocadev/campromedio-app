import { useContext, useEffect, type FormEvent } from 'react';
import Form from '~/components/input/Form';
import ColorBlock from '~/components/ui/ColorBlock';
import { GradeContext } from '~/context/GradeContext';
import showMessageGrade from '~/helpers/showGradeMessage';

const Home = () => {
  const {
    units,
    setMessageGrade,
    setFinalGrade,
    getInitialUnits,
    setInitialUnits,
  } = useContext(GradeContext);

  // get initial state from local storage
  // biome-ignore lint/correctness/useExhaustiveDependencies: This is the initial state, there is no need to watch it
  useEffect(() => {
    const initialUnits = localStorage.getItem('units');

    if (!initialUnits) {
      setInitialUnits(getInitialUnits());
      localStorage.setItem('units', JSON.stringify(getInitialUnits()));
      return;
    }

    setInitialUnits(JSON.parse(initialUnits));
  }, []);

  // next, we need to watch everytime the inputs change
  useEffect(() => {
    localStorage.setItem('units', JSON.stringify(units));
  }, [units]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const finalGradesSum = units.reduce((acc, value) => {
      const gradesSum = value.grades.reduce(
        (acc2, value2) => acc2 + value2.grade,
        0,
      );
      return acc + gradesSum;
    }, 0);

    // the value 3 reprents the quantity of the grades per unit, I know, it can varible.
    const finalGrade = finalGradesSum / (units.length * 3);

    const msg = showMessageGrade(finalGrade);

    // Actualizamos el estado de la nota
    setFinalGrade(finalGrade);
    setMessageGrade(msg);
  };

  return (
    <>
      <h1 className="font-bold text-[32px] text-[#FF4D4D] dark:text-[#E66767] my-4">
        Calcular Promedios UNAM
      </h1>
      <main className="grid grid-cols-1 grid-rows-2 gap-4 text-black md:grid-cols-2 md:grid-rows-1">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-[24px]">
            {units.map((unit) => (
              <Form unit={unit} key={unit.unit} />
            ))}
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
