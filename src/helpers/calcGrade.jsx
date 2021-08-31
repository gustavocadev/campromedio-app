// function to know the answer
const calcGrade = (grade1, grade2, grade3, percent1, percent2, percent3) => {
  const res =
    Number(grade1) * (Number(percent1) / 100) +
    Number(grade2) * (Number(percent2) / 100) +
    Number(grade3) * (Number(percent3) / 100);
  // console.log(res);
  return res;
};

export default calcGrade;
