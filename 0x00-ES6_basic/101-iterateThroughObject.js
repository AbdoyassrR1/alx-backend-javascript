export default function iterateThroughObject(reportWithIterator) {
  let employeesNameString = '';

  for (const employee of reportWithIterator) {
    employeesNameString += employee;
    if (employee !== reportWithIterator[reportWithIterator.length - 1]) {
      employeesNameString += ' | ';
    }
  }
  return employeesNameString;
}
