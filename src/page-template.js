module.exports = templateData => {
    console.log(templateData)

    let employeeTemplate = `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
                <title>Team Profile Generator</title>
            </head>
            <body>
                <header class="container-fluid bg-danger d-flex align-items-center justify-content-center py-5">
                    <h1 class="text-white"> My Team </h1>
                </header>

                <div class="container">

                    <div class="row my-5">
        `

    templateData.forEach(data => {
        if(data.officeNumber) {
            employeeTemplate +=  `
            <div class="col-lg-3 mx-2 mb-3 col-sm-4">
                <div class="row bg-primary text-white">
                    <h1> ${data.name}</h1>
                    <h3> Manager </h3>
                </div>

                <div class="row d-flex align-items-center justify-content-center bg-light p-5">
                    <div class="card" style="width: 18rem;">
                        <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${data.id}</li>
                        <li class="list-group-item">Email: <a href="#" style="text-decoration:none">${data.email}</a></li>
                        <li class="list-group-item"> officeNumber: ${data.officeNumber}</li>
                        </ul>
                    </div>

                </div>
            </div>`  
        }else if(data.github){
            employeeTemplate += `
            <div class="col-lg-3 mx-2 mb-3 col-sm-4">
            <div class="row bg-primary text-white">
                <h1> ${data.name}</h1>
                <h3> Engineer </h3>
            </div>

            <div class="row d-flex align-items-center justify-content-center bg-light p-5">
                <div class="card" style="width: 18rem;">
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${data.id}</li>
                    <li class="list-group-item">Email: <a href="#" style="text-decoration:none">${data.email}</a></li>
                    <li class="list-group-item"> Github:<a href="https://github.com/BlessingI" style="text-decoration:none">${data.github}</a></li>
                    </ul>
                </div>

            </div>
        </div>
            `
        } else if(data.school){
            employeeTemplate += `
            <div class="col-lg-3 mx-2 mb-3 col-sm-4">
            <div class="row bg-primary text-white">
                <h1> ${data.name}</h1>
                <h3> Intern </h3>
            </div>

            <div class="row d-flex align-items-center justify-content-center bg-light p-5">
                <div class="card" style="width: 18rem;">
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${data.id}</li>
                    <li class="list-group-item">Email: <a href="#" style="text-decoration:none">${data.email}</a></li>
                    <li class="list-group-item"> School: ${data.school}</li>
                    </ul>
                </div>

            </div>
        </div>       
            `

        }
        
    });

    employeeTemplate += `
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    </body>
    </html>
    `
    return employeeTemplate
}
