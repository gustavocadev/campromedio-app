import type { Unit } from '../types/types';
import type { GradeState } from './';

type GradeActionType =
  | { type: 'SET_GRADES_BY_UNIT'; payload: Unit[] }
  | { type: 'SET_FINAL_GRADE'; payload: number }
  | { type: 'SET_MESSAGE_GRADE'; payload: string };

const gradeReducer = (state: GradeState, action: GradeActionType) => {
  switch (action.type) {
    case 'SET_MESSAGE_GRADE':
      return {
        ...state,
        messageGrade: action.payload,
      };
    case 'SET_GRADES_BY_UNIT':
      return {
        ...state,
        units: action.payload,
      };

    case 'SET_FINAL_GRADE':
      return {
        ...state,
        finalGrade: action.payload,
      };

    default:
      return state;
  }
};
export { gradeReducer };
