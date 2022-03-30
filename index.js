// Write your solution in this file!
let employee = {};

function updateEmployeeWithKeyAndValue(obj, key, value) {
  const newObject = { ...obj };
  newObject[key] = value;

  return newObject;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
  obj[key] = value;

  return obj;
}

function deleteFromEmployeeByKey(obj, key) {
  const newObject = { ...obj };

  delete newObject[key];

  return newObject;
}
function destructivelyDeleteFromEmployeeByKey(obj, key) {
  delete obj[key];

  return obj;
}
