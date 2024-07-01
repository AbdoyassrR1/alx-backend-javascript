export default function getStudentsByLocation(studentList, city) {
  if (studentList instanceof Array) {
    return studentList.filter((student) => student.location === city);
  }
  return [];
}
