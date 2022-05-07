const fs = require('fs');
const generatePage = require('./src/page-template');
const inquirer = require('inquirer')
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')


const EmployeeArray = []

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name:  "name",
            message: "What is the team Manager's name? "
        },
        {
            type: 'input',
            name:  "id",
            message: "What is the team Manager's id? "
        },
        {
            type: 'input',
            name:  "email",
            message: "What is the team Manager's email address? "
        },
        {
            type: 'input',
            name:  "officeNumber",
            message: "What is the team Manager's OfficeNumber? "
        }
    ])
    .then(answer => {
        let manager =  new Manager(answer.name, parseInt(answer.id), answer.email, answer.officeNumber)
        EmployeeArray.push(manager)
    })

}


const promptNextQuestion = () => {
    inquirer.prompt([
            {
                type: 'list',
                name:  "role",
                message: "Would you like to add a Employee? ",
                choices: [{ name: "Intern", value: 0 }, { name: "Engineer", value: 1}, {name: "none", value: 2}] 
            }
    ])
    .then((response) => {
        if(response.role === 0){
            promptIntern()

        } else if(response.role === 1) {
            return promptEngineer()
        } else {
           let template = generatePage(EmployeeArray)  
                    fs.writeFile('index.html', template, err => {
                        if (err) throw err;
                    });
           
        }
})
}



const promptIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name:  "name",
            message: "What is the interns name? "
        },
        {
            type: 'input',
            name:  "id",
            message: "What is the interns id? "
        },
        {
            type: 'input',
            name:  "email",
            message: "What is the interns email address? "
        },
        {
            type: 'input',
            name:  "schoolName",
            message: "What is the interns Name of school? "
        }
    ])
    .then(answer => {
      let intern =  new Intern(answer.name, parseInt(answer.id), answer.email, answer.schoolName)
      EmployeeArray.push(intern)
    })
    .then(promptNextQuestion)
  };
 


  const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name:  "name",
            message: "What is the Engineers name? "
        },
        {
            type: 'input',
            name:  "id",
            message: "What is the Engineers id? "
        },
        {
            type: 'input',
            name:  "email",
            message: "What is the Engineers email address? "
        },
        {
            type: 'input',
            name:  "link",
            message: "What is the githubName? "
        }
    ])
    .then(answer => {
        let engineer =  (new Engineer(answer.name, parseInt(answer.id), answer.email, answer.link))
        EmployeeArray.push(engineer)
      })
      .then(promptNextQuestion)
  };


promptUser()
  .then(promptNextQuestion)
