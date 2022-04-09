import { createContext } from "react"
import { CurrentPercentageType, GradeCurrentType } from "../types/types"

type ContextProps = {
  finalGrade: number
  currentGrades: GradeCurrentType
  currentPercent: CurrentPercentageType
  setFinalGrade: (value: number) => void
  setCurrentGrades: (value: GradeCurrentType) => void
  setCurrentPercent: (value: CurrentPercentageType) => void
  messageGrade: string
  setMessageGrade: (value: string) => void
}

export const GradeContext = createContext({} as ContextProps)
