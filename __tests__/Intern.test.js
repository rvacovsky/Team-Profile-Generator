const Intern = require('../lib/Intern.js');

test('identifies school field in object', () => {
  const testSchool = 'University of Richmond';
  const employee = new Intern('Roger', "64", "test@test.com", testSchool);
  expect(employee.school).toBe(testSchool);
});

test('using getRole to retireve role', () => {
  const testRole = 'Intern';
  const employee = new Intern('Roger', "64", "test@test.com", 'University of Richmond');
  expect(employee.getRole()).toBe(testRole);
});

test('using getSchool function to gather value', () => {
  const testSchool = 'University of Richmond';
  const employee = new Intern('Roger', "64", "test@test.com", testSchool);
  expect(employee.getSchool()).toBe(testSchool);
});