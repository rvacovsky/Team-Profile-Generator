const Manager = require('../lib/Manager.js');

test('creates a Manager object', () => {
  const employee = new Manager('Roger');

  expect(employee.name).toBe('Roger');
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toBe('test@test.com');
  expect(employee.officeNumber).toEqual(expect.any(Number));

  expect(employee.profile).toEqual(expect.arrayContaining([expect.any(Object)]));
});