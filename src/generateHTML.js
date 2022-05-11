
  const getManager = Manager => {
    return `
        <div id="Manager" class="g-col-6 g-col-md-4">
            <h3>${Manager}</h3>
            <p>Name: ${this.name}</p>
            <p>ID: ${this.id}</p>
            <p>Email: <a href="mailto:${this.email}">${this.email}</a></p>
            <p>Office Number: ${this.officeNumber}</p>
        </div>
        `;
  };


  const getEngineer = Engineer => { 
    return `
        <div id="Engineer" class="g-col-6 g-col-md-4">
            <h3>${Engineer}</h3>
            <p>Name: ${this.name}</p>
            <p>ID: ${this.id}</p>
            <p>Email: <a href="mailto:${this.email}">${this.email}</a></p>
            <p>GitHub: ${this.github}</p>
        </div>
        `
  };

  const getIntern = Intern => {
    return `
        <div id="Intern" class="g-col-6 g-col-md-4">
            <h3>${Intern}</h3>    
            <p>Name: ${this.name}</p>
            <p>ID: ${this.id}</p>
            <p>Email: <a href="mailto:${this.email}">${this.email}</a></p>
            <p>Alma Mater: ${this.school}</p>
        </div>
    
      `
  };

const generateHTML = () => {
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
      <div class="container">
        <div class="row">
          <div class="col">
            ${getManager()}
            ${getEngineer()}
            ${getIntern()}
          </div>
        </div>  
      </div>
  </body>
      
  <script src="./src/generateHTML.js"></script>
  </html>
  `;

};


  

module.exports = generateHTML;