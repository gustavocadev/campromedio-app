import { CurrentPercentageType, GradeCurrentType } from "../types/types"
import { GradeState } from "./"

type GradeActionType =
  | { type: "SET_CURRENT_GRADES"; payload: GradeCurrentType }
  | { type: "SET_CURRENT_PERCENT"; payload: CurrentPercentageType }
  | { type: "SET_FINAL_GRADE"; payload: number }
  | { type: "SET_MESSAGE_GRADE"; payload: string }

const gradeReducer = (state: GradeState, action: GradeActionType) => {
  switch (action.type) {
    case "SET_MESSAGE_GRADE":
      return {
        ...state,
        messageGrade: action.payload,
      }
    case "SET_CURRENT_GRADES":
      return {
        ...state,
        currentGrades: action.payload,
      }
    case "SET_CURRENT_PERCENT":
      return {
        ...state,
        currentPercent: action.payload,
      }
    case "SET_FINAL_GRADE":
      return {
        ...state,
        finalGrade: action.payload,
      }

    default:
      return state
  }
}
export { gradeReducer }
