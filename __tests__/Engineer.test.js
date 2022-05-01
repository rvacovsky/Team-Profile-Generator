const Engineer = require('../lib/Engineer.js');

test('creates an Engineer object', () => {
  const employee = new Engineer('');

  expect(employee.name).toBe('');
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toBe('');
  expect(employee.github).toBe('');

  expect(employee.profile).toEqual(expect.arrayContaining([expect.any(Object)]));
});