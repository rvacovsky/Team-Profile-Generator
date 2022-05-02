const Engineer = require('../lib/Engineer.js');

test('identifies github field in object', () => {
  const testGitHub = 'rvacovsky';
  const employee = new Engineer('Roger', "64", "test@test.com", testGitHub);
  expect(employee.github).toBe(testGitHub);
});

test('using getRole to retireve role', () => {
  const testRole = 'Engineer';
  const employee = new Engineer('Roger', "64", "test@test.com", 'rvacovsky');
  expect(employee.getRole()).toBe(testRole);
});

test('using getGithub function to gather value', () => {
  const testGithub = 'rvacovsky';
  const employee = new Engineer('Roger', "64", "test@test.com", testGithub);
  expect(employee.getGithub()).toBe(testGithub);
});