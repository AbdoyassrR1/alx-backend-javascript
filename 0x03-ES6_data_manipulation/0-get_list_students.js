export default function getListStudents() {

  class Student {
    constructor(id, firstName, location) {
      this.id = id
      this.firstName = firstName
      this.locatoin = location
    }
  }


  let student1 = new Student(1, 'Guillaume', 'San Francisco')
  let student2 = new Student(2, 'James', 'Columbia')
  let student3 = new Student(3, 'Serena', 'San Francisco')
  return [student1, student2, student3]

}
