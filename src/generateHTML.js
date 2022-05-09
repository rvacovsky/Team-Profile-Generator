
  const getManager = data => {
    return `
        <div id=Manager class="g-col-6 g-col-md-4">
            <p>Name: ${data.name}</p>
            <p>ID: ${data.id}</p>
            <p>Email: <a href="mailto:${data.email}>${data.email}</a></p>
            <p>Office Number: ${data.officeNumber}</p>
        </div>
        `;
  };


  const getEngineer = data => { 
    return `
        <div id=Engineer class="g-col-6 g-col-md-4">
            <p>Name: ${data.name}</p>
            <p>ID: ${data.id}</p>
            <p>Email: <a href="mailto:${data.email}>${data.email}</a></p>
            <p>GitHub: ${data.github}</p>
        </div>
        `
  };

  const getIntern = data => {
    return `
        <div id=Intern class="g-col-6 g-col-md-4">
            <p>Name: ${data.name}</p>
            <p>ID: ${data.id}</p>
            <p>Email: <a href="mailto:${data.email}>${data.email}</a></p>
            <p>Alma Mater: ${data.school}</p>
        </div>
    
      `
  };

  const getHTML = team => {
    let staffList = [];
    for (let i = 0; i < team.length; i++) {
      const role = team[i].getRole();
      if (role === "Manager") {
        staffList.push(getManager(team[i]));
      }
      if (role === "Engineer") {
        staffList.push(getEngineer(team[i]));
      }
      if (role === "Intern") {
        staffList.push(getIntern(team[i]));
      }
    }
    const teamRoster = staffList.join('');
    return generateHTML(teamRoster);
  }

  
  const generateHTML = teamRoster => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link href="../dist/style.css" rel="stylesheet">
        <title>Team Profiles</title>
    </head>
    <header>
        <h2>My Team</h2>
    </header>
    <body>
        <div class="grid">
        ${teamRoster}
        </div>
        </body>
        
        <script src="./src/generateHTML.js"></script>
        </html>
        `;
  
  };

getHTML();
  

module.exports = getHTML;