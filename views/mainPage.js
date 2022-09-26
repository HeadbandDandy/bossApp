// create variable to hold all the employees together
const createEmployees = data => {
    //  html for the manager 
     const createManager = manager => {
         return `
         <div class="col-4 mt-4">
             <div class="card emp-card">
                 <div class="card-header bg-dark text-info">
                     <h2 class="card-title">${manager.getName()}</h2>
                     <h3 class="card-title">${manager.getRole()}</h3>
                 </div>
                 <div class="card-body">
                     <p class="empId">Id: ${manager.id}</p>
                     <p class="empEmail">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                     <p class="empOfficeNumber">Office Number: ${manager.officeNumber}</p>
                 </div>
             </div>
         </div>
         `;
     };
 
     // html for the engineer
     const createEngineer = engineer => {
         return `
         <div class="col-4 mt-4">
             <div class="card emp-card">
                 <div class="card-header bg-dark text-info">
                     <h2 class="card-title">${engineer.getName()}</h2>
                     <h3 class="card-title">${engineer.getRole()}</h3>
                 </div>
                 <div class="card-body">
                     <p class="empId">Id: ${engineer.id}</p>
                     <p class="empEmail">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                     <p class="empGitHub">GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</p>
                 </div>
             </div>
         </div>
         `;
     };
 
     // html for the intern
     const createIntern = intern => {
         return `
         <div class="col-4 mt-4">
             <div class="card emp-card">
                 <div class="card-header bg-dark text-info">
                     <h2 class="card-title">${intern.getName()}</h2>
                     <h3 class="card-title">${intern.getRole()}</h3>
                 </div>
                 <div class="card-body">
                     <p class="empId">Id: ${intern.id}</p>
                     <p class="empEmail">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                     <p class="empSchool">School: ${intern.school}</p>
                 </div>
             </div>
         </div>
         `;
     };
 
     const emptyArray = [];
 
     // add manager to array
     emptyArray.push(data.filter(employee => employee.getRole() === "Manager").map(manager => createManager(manager)));
     // add engineer to array
     emptyArray.push(data.filter(employee => employee.getRole() === "Engineer").map(engineer => createEngineer(engineer)).join(""));
     // add intern to array
     emptyArray.push(data.filter(employee => employee.getRole() === "Intern").map(intern => createIntern(intern)).join(""));
 
     // call to return final array with all employees
     return emptyArray.join("");
 };
 
 // this will generate the page 
 const createPage = data => {
     return `
     <!DOCTYPE html>
     <html lang="en">
     <head>
         <meta charset="utf-8">
         <meta name="viewport" content="width=device-width, initial-scale=1">
         <title>Team Profiles</title>
         <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
         <link rel="stylesheet" href="style.css">
     </head>
     <body>
         <div class="jumbotron jumbotron-fluid bg-dark">
             <h1 class="text-center">Team Profiles</h1>
         </div>
         
         <!-- Where employees will display -->
         <div class="container text-center row mx-auto">
             ${createEmployees(data)}
         </div>
     </body>
     </html>
     `;
 };
 
 module.exports = createPage;