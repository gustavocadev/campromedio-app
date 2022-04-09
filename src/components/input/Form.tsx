import { ChangeEvent, useContext } from "react"
import { GradeContext } from "../../context"

const Form = () => {
  const title = "Tu nota"

  const { currentGrades, setCurrentGrades } = useContext(GradeContext)

  // destructuring
  const { inputGrade1, inputGrade2, inputGrade3 } = currentGrades

  // handle change is to watch everytime the inputs change
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setCurrentGrades({
      ...currentGrades,
      [target.name]: target.valueAsNumber,
    })
  }

  return (
    <section className="flex flex-col">
      <label className="dark:text-[#54A0FF]">{title}</label>
      <input
        type="number"
        placeholder="--"
        autoComplete="off"
        className="px-[16px] py-[12px] rounded dark:text-white dark:bg-[#131313] mt-[8px]"
        name="inputGrade1"
        value={inputGrade1}
        onChange={handleChange}
      />

      <label className="dark:text-[#54A0FF] pt-[24px]">{title}</label>
      <input
        type="number"
        placeholder="--"
        autoComplete="off"
        className="px-[16px] py-[12px] rounded dark:bg-[#131313] dark:text-white  mt-[8px]"
        name="inputGrade2"
        value={inputGrade2}
        onChange={handleChange}
      />

      <label className="dark:text-[#54A0FF]  pt-[24px]">{title}</label>
      <input
        type="number"
        placeholder="--"
        autoComplete="off"
        className="px-[16px] py-[12px] rounded dark:text-white dark:bg-[#131313]  mt-[8px]"
        name="inputGrade3"
        value={inputGrade3}
        onChange={handleChange}
      />
    </section>
  )
}

export default Form
