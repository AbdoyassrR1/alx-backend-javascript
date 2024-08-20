const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.trim().split('\n').filter((line) => line);

    if (lines.length === 0) {
      console.log('Number of students: 0');
      return;
    }

    const header = lines.shift().split(',');
    const students = lines.map((line) => {
      const values = line.split(',');
      return header.reduce((student, field, index) => {
        student[field.trim()] = values[index].trim();
        return student;
      }, {});
    });

    console.log(`Number of students: ${students.length}`);

    const fields = students.reduce((acc, student) => {
      const { field } = student;
      if (!acc[field]) {
        acc[field] = [];
      }
      acc[field].push(student.firstname);
      return acc;
    }, {});

    Object.entries(fields).forEach(([field, firstnames]) => {
      console.log(`Number of students in ${field}: ${firstnames.length}. List: ${firstnames.join(', ')}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
