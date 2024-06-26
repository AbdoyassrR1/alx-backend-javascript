export default function createIteratorObject(report) {
  const employeesNames = [];
  for (const department of Object.values(report.allEmployees)) {
    for (const employee of department) {
      employeesNames.push(employee);
    }
  }
  return employeesNames;
}
