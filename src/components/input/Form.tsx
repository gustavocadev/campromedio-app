import { useContext, useMemo, type ChangeEvent } from 'react';
import { GradeContext } from '~/context';
import calcGrade from '~/helpers/calcGrade';
import type { GradeType, Unit } from '~/types/types';
import { Input } from '../ui/input';
import { Card } from '../ui/card';
import { Label } from '../ui/label';

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
    <Card className="flex flex-col gap-4 justify-center p-4">
      <h2>
        <span className="dark:text-gray-200 text-xl font-semibold uppercase">
          Unidad {unit.unit}
        </span>
      </h2>
      <section className="flex flex-col 2xl:flex-row justify-between">
        <div className="space-y-2">
          <Label className="dark:text-[#54A0FF]" htmlFor="procedimental">
            {title}{' '}
            <span className="capitalize font-semibold dark:text-purple-300 text-purple-600">
              ({unit.grades[0].type} 40%)
            </span>
          </Label>
          <Input
            type="number"
            id="procedimental"
            placeholder="--"
            autoComplete="off"
            className="dark:text-white dark:bg-[#131313]"
            name={unit.grades[0].type}
            value={unit.grades[0].grade}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <Label className="dark:text-[#54A0FF] pt-[24px]" htmlFor="conceptual">
            {title}{' '}
            <span className="capitalize font-semibold dark:text-purple-300 text-purple-600">
              ({unit.grades[1].type} 50%)
            </span>
          </Label>
          <Input
            type="number"
            placeholder="--"
            id="conceptual"
            autoComplete="off"
            className="dark:text-white dark:bg-[#131313]"
            name={unit.grades[1].type}
            value={unit.grades[1].grade}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <Label
            className="dark:text-[#54A0FF]  pt-[24px]"
            htmlFor="actitudinal"
          >
            {title}{' '}
            <span className="capitalize font-semibold dark:text-purple-300 text-purple-600">
              ({unit.grades[2].type} 10%)
            </span>
          </Label>
          <Input
            type="number"
            placeholder="--"
            id="actitudinal"
            autoComplete="off"
            className="dark:text-white dark:bg-[#131313]"
            name={unit.grades[2].type}
            value={unit.grades[2].grade}
            onChange={handleChange}
          />
        </div>
      </section>

      <section className="text-center w-full p-2 dark:text-gray-200 space-y-2">
        <h2 className="text-2xl font-semibold">Tu nota de unidad:</h2>
        <p className="text-3xl font-semibold">{calcGradeOfTheUnit}</p>
      </section>
    </Card>
  );
};

export default Form;
