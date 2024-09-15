type GrandesAndPercents = {
  inputGrade1: number;
  inputGrade2: number;
  inputGrade3: number;
  inputPercent1?: number;
  inputPercent2?: number;
  inputPercent3?: number;
};

// function to know the answer
const calcGrade = ({
  inputGrade1,
  inputGrade2,
  inputGrade3,
  inputPercent1 = 40,
  inputPercent2 = 50,
  inputPercent3 = 10,
}: GrandesAndPercents) => {
  const res =
    inputGrade1 * (inputPercent1 / 100) +
    inputGrade2 * (inputPercent2 / 100) +
    inputGrade3 * (inputPercent3 / 100);
  // console.log(res);
  return res;
};

export default calcGrade;
