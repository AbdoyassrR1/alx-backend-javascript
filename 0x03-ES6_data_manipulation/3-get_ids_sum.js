export default function getStudentIdsSum(studentList) {
  if (studentList instanceof Array) {
    return studentList.reduce((accumulator, currnetStudent) => accumulator + currnetStudent.id, 0);
  }

  return 0;
}
