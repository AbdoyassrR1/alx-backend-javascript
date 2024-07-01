export default function updateStudentGradeByCity(studentList, city, newGrades) {
  const filteredStudents = studentList.filter((student) => student.location === city);
  const updatedStudentGrade = filteredStudents.map((student) => {
    const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
    return {
      ...student,
      grade: gradeObj ? gradeObj.grade : 'N/A',
    };
  });
  return updatedStudentGrade;
}
