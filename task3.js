function updateEmployeeDetails(employee, newRole) {
    return { ...employee, role: newRole };
}

const employee = { name: 'Navya', role: 'Team lead', age: 19, location: 'Hyderabad' };
const updatedEmployee = updateEmployeeDetails(employee, 'Full Stack Developer');

console.log(updatedEmployee);

