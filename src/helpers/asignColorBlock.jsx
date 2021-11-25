const asignColorBlock = (finalGrade, error) => {
  if (finalGrade >= 10.5 && !error) {
    return "bg-[#9de567]";
  }
  if (finalGrade < 10.5 && !error) {
    return "bg-red-500";
  }
  if (error) {
    return "bg-yellow-500";
  }
};

export default asignColorBlock;
