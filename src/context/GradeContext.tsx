import { createContext } from 'react';
import type { Grade, Unit } from '~/types/types';

type ContextProps = {
  finalGrade: number;
  units: Unit[];
  setFinalGrade: (value: number) => void;
  setGradesByUnit: (unit: number, grades: Grade) => void;
  messageGrade: string;
  setMessageGrade: (value: string) => void;
};

export const GradeContext = createContext({} as ContextProps);
