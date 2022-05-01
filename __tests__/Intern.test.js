const Intern = require('../lib/Intern.js');

test('creates an Intern object', () => {
  const employee = new Intern('');

  expect(employee.name).toBe('');
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toBe('');
  expect(employee.school).toBe('');

  expect(employee.profile).toEqual(expect.arrayContaining([expect.any(Object)]));
});