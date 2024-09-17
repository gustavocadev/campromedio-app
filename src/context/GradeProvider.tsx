import { useReducer } from 'react';
import type { Grade, Unit } from '~/types/types';
import { GradeContext, gradeReducer } from './';

export type GradeState = {
  finalGrade: number;
  units: Unit[];
  messageGrade: string;
};

const GRADE_INITIAL_STATE: GradeState = {
  finalGrade: 0,
  units: [],

  messageGrade: '',
};

export const GradeProvider = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch] = useReducer(gradeReducer, GRADE_INITIAL_STATE);

  // actions
  const setFinalGrade = (finalGrade: number) => {
    dispatch({
      type: 'SET_FINAL_GRADE',
      payload: finalGrade,
    });
  };

  const setInitialUnits = (units: Unit[]) => {
    dispatch({
      type: 'SET_INITIAL_UNITS',
      payload: units,
    });
  };

  const getInitialUnits = (): Unit[] => {
    return [
      {
        unit: 1,
        grades: [
          {
            grade: 0,
            type: 'procedimental',
          },
          {
            grade: 0,
            type: 'conceptual',
          },
          {
            grade: 0,
            type: 'actitudinal',
          },
        ],
      },
      {
        unit: 2,
        grades: [
          {
            grade: 0,
            type: 'procedimental',
          },
          {
            grade: 0,
            type: 'conceptual',
          },
          {
            grade: 0,
            type: 'actitudinal',
          },
        ],
      },
    ];
  };

  const setGradesByUnit = (unit: number, grade: Grade) => {
    const units = state.units.map((u) => {
      if (u.unit !== unit) return u;

      const grades = u.grades.map((g) => {
        if (g.type !== grade.type) return g;

        return {
          ...grade,
        };
      });

      return {
        ...u,
        grades: grades,
      };
    });

    dispatch({
      type: 'SET_GRADES_BY_UNIT',
      payload: units,
    });
  };

  // Estado del mensaje
  const setMessageGrade = (messageGrade: string) => {
    dispatch({
      type: 'SET_MESSAGE_GRADE',
      payload: messageGrade,
    });
  };
  return (
    <GradeContext.Provider
      value={{
        ...state,
        setFinalGrade,
        setGradesByUnit,
        setMessageGrade,
        getInitialUnits,
        setInitialUnits,
      }}
    >
      {children}
    </GradeContext.Provider>
  );
};
