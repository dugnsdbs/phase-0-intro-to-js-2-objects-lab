
let employee={
  name:"Sam",
  streetAddress: "11 Broadway"
}
function updateEmployeeWithKeyAndValue(employee, key, value){
  let newObj={...employee};
  newObj[key]=value;
  return newObj;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
  employee[key]=value;
  return employee;  
}

function deleteFromEmployeeByKey(employee, key){
  let newEmployee ={...employee};
  delete newEmployee[key];
  return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
  let newEmployee = {...employee};
  delete newEmployee[key];
  employee[key]=newEmployee[key];
  return employee;

} 