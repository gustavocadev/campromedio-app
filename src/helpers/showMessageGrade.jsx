const showMessageGrade = (finalGrade) => {
  if (finalGrade >= 17) {
    return "Su nota es Excelente! :D";
  }
  if (finalGrade < 17 && finalGrade >= 14) {
    return "Su nota es buena! :')";
  }
  if (finalGrade < 14 && finalGrade >= 10.5) {
    return "Su nota es regular! :)";
  }
  if (finalGrade < 10.5 && finalGrade >= 6) {
    return "Su nota es mala :/";
  }
  if (finalGrade < 6 && finalGrade >= 0) {
    return "Su nota es muy mala :(";
  }
};

export default showMessageGrade;
