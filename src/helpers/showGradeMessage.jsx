const showMessageGrade = (finalGrade) => {
  if (finalGrade >= 17) {
    return "Tu nota es Excelente! 😆";
  } else if (finalGrade < 17 && finalGrade >= 14) {
    return "Tu nota es buena! 😄";
  } else if (finalGrade < 14 && finalGrade >= 10.5) {
    return "Tu nota es regular! 😃";
  } else if (finalGrade < 10.5 && finalGrade >= 6) {
    return "Tu nota es mala 😕";
  } else if (finalGrade < 6 && finalGrade >= 0) {
    return "Tu nota es muy mala 🙁";
  }
};

export default showMessageGrade;
