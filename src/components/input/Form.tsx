import { useContext, useMemo, type ChangeEvent } from 'react';
import { GradeContext } from '~/context';
import calcGrade from '~/helpers/calcGrade';
import type { GradeType, Unit } from '~/types/types';

type Props = {
  unit: Unit;
};

const Form = ({ unit }: Props) => {
  const title = 'Tu nota';

  const { setGradesByUnit } = useContext(GradeContext);

  // handle change is to watch everytime the inputs change
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const targetName = target.name as GradeType;

    setGradesByUnit(unit.unit, {
      grade: target.valueAsNumber,
      type: targetName,
    });
  };

  const calcGradeOfTheUnit = useMemo(() => {
    const grade = calcGrade({
      inputGrade1: unit.grades[0].grade,
      inputGrade2: unit.grades[1].grade,
      inputGrade3: unit.grades[2].grade,
    });
    return grade.toFixed(2);
  }, [unit]);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
      <section className="flex flex-col flex-1 w-full h-full">
        <h2>
          <span className="text-gray-200 text-xl font-semibold uppercase">
            Unidad {unit.unit}
          </span>
        </h2>
        <label className="dark:text-[#54A0FF]" htmlFor="procedimental">
          {title}{' '}
          <span className="capitalize font-semibold text-purple-300">
            ({unit.grades[0].type} 40%)
          </span>
        </label>
        <input
          type="number"
          id="procedimental"
          placeholder="--"
          autoComplete="off"
          className="px-[16px] py-[12px] rounded dark:text-white dark:bg-[#131313] mt-[8px]"
          name={unit.grades[0].type}
          value={unit.grades[0].grade}
          onChange={handleChange}
        />

        <label className="dark:text-[#54A0FF] pt-[24px]" htmlFor="conceptual">
          {title}{' '}
          <span className="capitalize font-semibold text-purple-300">
            ({unit.grades[1].type} 50%)
          </span>
        </label>
        <input
          type="number"
          placeholder="--"
          id="conceptual"
          autoComplete="off"
          className="px-[16px] py-[12px] rounded dark:bg-[#131313] dark:text-white  mt-[8px]"
          name={unit.grades[1].type}
          value={unit.grades[1].grade}
          onChange={handleChange}
        />

        <label className="dark:text-[#54A0FF]  pt-[24px]" htmlFor="actitudinal">
          {title}{' '}
          <span className="capitalize font-semibold text-purple-300">
            ({unit.grades[2].type} 10%)
          </span>
        </label>
        <input
          type="number"
          placeholder="--"
          id="actitudinal"
          autoComplete="off"
          className="px-[16px] py-[12px] rounded dark:text-white dark:bg-[#131313]  mt-[8px]"
          name={unit.grades[2].type}
          value={unit.grades[2].grade}
          onChange={handleChange}
        />
      </section>

      <section className="bg-orange-400 flex-1 rounded text-center w-full p-8 justify-center flex flex-col">
        <h2 className="text-2xl font-semibold">Tu nota final:</h2>
        <p className="text-3xl font-semibold">{calcGradeOfTheUnit}</p>
      </section>
    </div>
  );
};

export default Form;
