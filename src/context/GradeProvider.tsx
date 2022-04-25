import { useReducer } from "react";
import { CurrentPercentageType, GradeCurrentType } from "../types/types";
import { GradeContext, gradeReducer } from "./";

export type GradeState = {
  finalGrade: number;
  currentGrades: GradeCurrentType;
  currentPercent: CurrentPercentageType;
  messageGrade: string;
};

const GRADE_INITIAL_STATE: GradeState = {
  finalGrade: 0,
  currentGrades: {
    inputGrade1: 0,
    inputGrade2: 0,
    inputGrade3: 0,
  },
  currentPercent: {
    inputPercent1: 40,
    inputPercent2: 50,
    inputPercent3: 10,
  },
  messageGrade: "",
};

const GradeProvider = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch] = useReducer(gradeReducer, GRADE_INITIAL_STATE);

  // actions
  const setFinalGrade = (finalGrade: number) => {
    dispatch({
      type: "SET_FINAL_GRADE",
      payload: finalGrade,
    });
  };

  const setCurrentGrades = (currentGrades: GradeCurrentType) => {
    dispatch({
      type: "SET_CURRENT_GRADES",
      payload: currentGrades,
    });
  };

  const setCurrentPercent = (currentPercent: CurrentPercentageType) => {
    dispatch({
      type: "SET_CURRENT_PERCENT",
      payload: currentPercent,
    });
  };
  // Estado del mensaje
  const setMessageGrade = (messageGrade: string) => {
    dispatch({
      type: "SET_MESSAGE_GRADE",
      payload: messageGrade,
    });
  };
  return (
    <GradeContext.Provider
      value={{
        ...state,
        setFinalGrade,
        setCurrentGrades,
        setCurrentPercent,
        setMessageGrade,
      }}
    >
      {children}
    </GradeContext.Provider>
  );
};
export { GradeProvider };
