export type GradeCurrentType = {
  inputGrade1: number;
  inputGrade2: number;
  inputGrade3: number;
};

export type Grade = {
  grade: number;
  type: GradeType;
};

export type GradeType = 'procedimental' | 'actitudinal' | 'conceptual';

export type Unit = {
  unit: number;
  grades: Grade[];
};
