const showMessageGrade = (finalGrade: number) => {
  if (finalGrade >= 17) {
    return "Tu nota es excelente, sigue así! 😆"
  } else if (finalGrade < 17 && finalGrade >= 14) {
    return "Tu nota es buena!, pero aún puedes mejorar esa nota 😄"
  } else if (finalGrade < 14 && finalGrade >= 10.5) {
    return "Tu nota es regular!, pero no te quedes ahí 😃"
  } else if (finalGrade < 10.5 && finalGrade >= 6) {
    return "Tu nota es mala, puedes mejorar 😕"
  } else if (finalGrade < 6 && finalGrade >= 0) {
    return "Tu nota es muy mala, debes esforzarte más 🙁"
  }
}

export default showMessageGrade
