const buildTeam = team => {

  const getManager = manager => {
    return `
        <div id="Manager" class="col"><i class="fa-solid fa-mug-hot"></i>
            <h3>${manager.getRole()}</h3>
            <p>Name: ${manager.getName()}</p>
            <p>ID: ${manager.getId()}</p>
            <p>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
            <p>Office Number: ${manager.getOfficeNumber()}</p>
        </div>
        `;
  };


  const getEngineer = engineer => { 
    return `
        <div id="Engineer" class="col"><i class="fa-solid fa-glasses"></i>
            <h3>${engineer.getRole()}</h3>
            <p>Name: ${engineer.getName()}</p>
            <p>ID: ${engineer.getId()}</p>
            <p>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
            <p>GitHub: ${engineer.github}</p>
        </div>
        `
  };

  const getIntern = intern => {
    return `
        <div id="Intern" class="col"><i class="fa-solid fa-user-graduate"></i>
            <h3>${intern.getRole()}</h3>    
            <p>Name: ${intern.getName()}</p>
            <p>ID: ${intern.getId()}</p>
            <p>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
            <p>Alma Mater: ${intern.getSchool()}</p>
        </div>
    
      `
  };

const html = [];

html.push(team.filter(
  employee => employee.getRole() === "Manager" 
).map(manager => getManager(manager))
);
html.push(team.filter(
  employee => employee.getRole() === "Engineer" 
  ).map(engineer => getEngineer(engineer))
  .join('')
);
html.push(team.filter(
  employee => employee.getRole() === "Intern" 
  ).map(intern => getIntern(intern))
  .join('')
);

return html.join('');


};



module.exports = team => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <link href="../dist/style.css" rel="stylesheet">
      <script src="https://kit.fontawesome.com/18465520fb.js" crossorigin="anonymous"></script>
      <title>Team Profiles</title>
  </head>
  <header>
      <h2>My Team</h2><i class="fa-solid fa-people-group"></i>
  </header>
  <body>
      <div class="container">
        <div class="row">
            ${buildTeam(team)}
        </div>  
      </div>
  </body>
      
  <script src="./src/generateHTML.js"></script>
  </html>
  `;

};


  
