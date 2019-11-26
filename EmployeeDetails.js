function employeeDetails (employee) {
    for (const property in employee) {
        console.log(property ,':', employee[property]);
      }
}
var employee = {
    name: 'Dany',
    age: 25,
    department: 'Services'

}
employeeDetails(employee);
