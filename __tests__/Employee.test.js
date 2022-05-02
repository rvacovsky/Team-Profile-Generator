const Employee = require('../lib/Employee.js');

test('creates an Employee object', () => {
  const employee = new Employee();
  
  expect(typeof(employee)).toBe("object");
});

test('identifies name field in object', () => {
  const name = 'Roger';
  const employee = new Employee(name);
  expect(employee.name).toBe(name);
});

test('identifies id field in object', () => {
  const testId = "64";
  const employee = new Employee('Roger', testId);
  expect(employee.id).toBe(testId);
});

test('identifies email field in object', () => {
  const testEmail = 'test@test.com';
  const employee = new Employee('Roger', "64", testEmail);
  expect(employee.email).toBe(testEmail);
});

test('using getName function to gather value', () => {
  const name = 'Roger';
  const employee = new Employee(name);
  expect(employee.getName()).toBe(name);
});

test('using getId function to gather value', () => {
  const testId = "64";
  const employee = new Employee('Roger', testId);
  expect(employee.getId()).toBe(testId);
});

test('using getEmail function to gather value', () => {
  const testEmail = 'test@test.com';
  const employee = new Employee('Roger', "64", testEmail);
  expect(employee.getEmail()).toBe(testEmail);
});
