let inquirer = require('inquirer');
let fs = require('fs');
let Manager = require('./lib/Manager');
let Engineer = require('./lib/Engineer');
let Employee = require('./lib/Employee');
let Intern = require('./lib/Intern');
let Finish = require('./lib/render')
const path = require("path");
let Team = []
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outPutPath = path.join(OUTPUT_DIR, "team.html")
const render = require('./src/template.js')




function addToTeam(){
inquirer.prompt([        
{
 type: 'input',
 message: 'What is the name of this team?',
 name: 'teamTitle',
 validate:  nameInput1 =>{
 if (nameInput1){
    return true;
    }else{
     console.log('Please enter your team name!');
}
}
},

    
{
 type: 'checkbox',
 name: 'selectEmployee',
 message:'Add an employee, or select "finished".',
 choices : [
'Manager',
'Engineer',
'Intern',
'Finish', ]
     
},

]).then(function(data){
    let employeeRole = data.selectEmployee;
    if (employeeRole == 'Manager') {
        managerInfo();
    }
    else if (employeeRole == 'Engineer'){
        EngineerInfo();
    }
    else if (employeeRole == 'Intern'){
        InternInfor();
    }
    
    else if (employeeRole == 'Finish'){
        renderTeam();
    }
});
}
    
addToTeam();

function managerInfo(){
    inquirer.prompt([
    {
        type: 'input',
        name: 'managerName',
        message: "Please, enter manager's name:",
        validate:  nameInput2 =>{
            if (nameInput2){
                return true;
            }else{
                console.log("Please enter your manager's name!");
            }
        }

    },
{
        type: 'input',
        name: 'managerID',
        message: "Please, enter Manager's ID!",
        validate:  nameInput3 =>{
            if (nameInput3){
                return true;
            }else{
                console.log("Please enter your manager's ID!");
            }
        }
    

},
{
    type: 'input',
    name: 'managerEmail',
    message: "Please, enter Manager's E-mail!",
    validate:  nameInput4 =>{
        if (nameInput4){
            return true;
        }else{
            console.log("Please enter your manager's E-mail!");
        }
    }
},

{
    type: 'input',
    name: 'managerOffice',
    message: "Please, enter Manager office Number!",
    validate:  nameInput5 =>{
        if (nameInput5){
            return true;
        }else{
            console.log("Please enter your manager's office Number!");
        }
    }
},
{
    type: "list",
    name: "moreMembers",
    message: "Would you like to add more team members?",
    choices: [ 
        "yes",
        "no"
    ],


    
}
    ]).then(function(data){
        let manager = new Manager(data.managerName, data.managerID, data.managerEmail, data.managerOffice, data.moreMembers);
        Team.push(manager);
        console.log(Team);
      
        let moreMembers = data.moreMembers;
        if (moreMembers == 'yes') {
    
            console.log(addToTeam('Please, select your new member!'));
    
        }
        else if (moreMembers == 'no'){
            console.log("you are done!");
            buildPage()
        }
     
 
       })
    
    
    }
    



     function EngineerInfo(){
     inquirer.prompt([
    {
     type: 'input',
     name: 'engineerName',
     message: "what is engineer's name?",
     validate:  nameInput6 =>{
       if (nameInput6){
        return true;
       }else{
        console.log("Please enter your engineer's name!");
       }
    }
     } ,

     {
     type: 'input',
      name: 'engineerID',
      message: "what is your ID?",
      validate:  nameInput7 =>{
      if (nameInput7){
        return true;
     }else{
        console.log("Please enter your engineer's ID!");
    }
    }
     },
    
     {
type: 'input',
name: 'engineerEmail',
message: "what is your Email?",
validate:  nameInput8 =>{
    if (nameInput8){
        return true;
    }else{
        console.log("Please enter your engineer's Email!");
    }
    }
      },

    {
    type: 'input',
     name: 'gitHub',
     message: "what is your github Username?",
     validate:  nameInput9 =>{
    if (nameInput9){
        return true;
    }else{
        console.log("Please enter your engineer's github Username!");
    }
    }
     },
     {
    type: "list",
    name: "moreMembers",
    message: "Would you like to add more team members?",
    choices: [
        "yes",
        "no"
    ],
    }


    ]).then(function(data){
    let engineer = new Engineer (data.engineerName, data.engineerID, data.engineerEmail, data.gitHub, data.moreMembers);
     Team.push(engineer);   
     console.log(Team);

    let moreMembers = data.moreMembers;
    if (moreMembers == 'yes') {
      
        
            console.log(addToTeam('Please, select your new member!'));
    

    }
    else if (moreMembers == 'no'){
        console.log("you are done!");
    }
    
    })
   }

    function InternInfor(){
    inquirer.prompt([   
    {
    type: 'input',
    name: 'InternName',
    message: "what is your intern's name?",
    validate:  nameInput10 =>{
        if (nameInput10){
            return true;
        }else{
            console.log("Please enter your intern's name!");
        }
    }
    } ,

    {
    type: 'input',
    name: 'InternId',
    message: "what is your intern's Id?",
    validate:  nameInput11 =>{
        if (nameInput11){
            return true;
        }else{
            console.log("Please enter your intern's ID!");
        }
    }
    } ,
 
     {
    type: 'input',
    name: 'InternEmail',
    message: "what is your intern's Email?",
    validate:  nameInput12 =>{
        if (nameInput12){
            return true;
        }else{
            console.log("Please enter your intern's Email!");
        }
    }
 } ,
 
 {
    type: 'input',
    name: 'school',
    message: "what is your intern's school?",
    validate:  nameInput13 =>{
        if (nameInput13){
            return true;
        }else{
            console.log("Please enter your intern's school!");
        }
    }
 } ,
 {
    type: "list",
    name: "moreMembers",
    message: "Would you like to add more team members?",
    choices: [
        "yes",
        "no"
    ],
}

]).then(function(data){
    let intern = new Intern(data.InternName, data.InternId, data.InternEmail, data.school, data.moreMembers);
    Team.push(intern);
    console.log(Team);

    let moreMembers = data.moreMembers;
    if (moreMembers == 'yes') {
     
        console.log(addToTeam('Please, select your new member!'));


    }
    else if (moreMembers == 'no'){
        console.log("you are done!");
        buildPage()
    }
  


    })
};


function renderTeam(){
    inquirer.prompt([

        {
            type: "list",
            name: "moreMembers",
            message: "Would you like to add more team members?",
            choices: [
                "yes",
                "no"
            ],
        }


    ]).then(function(redata){
        let reselect = redata.moreMembers;
        console.log(reselect)
        if (reselect == 'yes') {
           console.log(addToTeam());

        }
        else{
            buildPage()
            console.log("you are done!");
            
        }
       
    });
    } 
            


    function buildPage()
    {
        // If output directory isn't there then it will build one.
        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFileSync(outPutPath, render(Team), 'utf-8');
    }    
    





