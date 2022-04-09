// function to know the answer
const calcGrade = (
  grade1: number,
  grade2: number,
  grade3: number,
  percent1: number,
  percent2: number,
  percent3: number
) => {
  const res =
    grade1 * (percent1 / 100) +
    grade2 * (percent2 / 100) +
    grade3 * (percent3 / 100)
  // console.log(res);
  return res
}

export default calcGrade
