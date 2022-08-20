// Write your solution in this file!
const employee = {
    name: "Silvia",
    streetAddress: "200 Joyland",
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const employeeInfo = {...employee, [key]: value}
    return employeeInfo;
}


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;  
    return employee;
}

function deleteFromEmployeeByKey(employee,key) {
    const newEmployee = {...employee}
    delete newEmployee [key]
    return newEmployee;
}


function destructivelyDeleteFromEmployeeByKey(employee,key) {
    delete employee [key]
    return employee;
}