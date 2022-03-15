const employee = {name: "Jordan", streetAddress: "Fake Street"};

function updateEmployeeWithKeyAndValue(emp, key, value) {
    return Object.assign({}, emp, { [key]: value });
}

function  destructivelyUpdateEmployeeWithKeyAndValue(emp, key, value) {
    emp[key] = value;
    return emp;
}

function  deleteFromEmployeeByKey(employee, key) {
    const newEmp = Object.assign({},employee);
    delete newEmp[key];
    return newEmp;
}

function  destructivelyDeleteFromEmployeeByKey(emp, key) {
    delete emp[key];
    return emp;
}

console.log (updateEmployeeWithKeyAndValue(employee, 'country', 987));
