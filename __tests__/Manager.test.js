const Manager = require('../lib/Manager.js');

test('identifies office number field in object', () => {
  const testOfficeNumber = "340";
  const employee = new Manager('Roger', "64", "test@test.com", testOfficeNumber);
  expect(employee.officeNumber).toBe(testOfficeNumber);
});

test('using getRole to retireve role', () => {
  const testRole = 'Manager';
  const employee = new Manager('Roger', "64", "test@test.com", "340");
  expect(employee.getRole()).toBe(testRole);
});

test('using getOfficeNUmber function to gather value', () => {
  const testOfficeNumber = "340";
  const employee = new Manager('Roger', "64", "test@test.com", testOfficeNumber);
  expect(employee.getOfficeNumber()).toBe(testOfficeNumber);
});

