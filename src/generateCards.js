const generateManager = (manager) => {
    return
    `<div class="manager" style="width: 18rem;">
    <div class="manager-header">
      Manager
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${manager.firstName}</li>
      <li class="list-group-item">${manager.id}</li>
      <li class="list-group-item">${manager.email}</li>
      <li class="list-group-item">${manager.officeNumber}</li>
    </ul>
  </div>`
}

const generateEngineer = (engineer) => {
    return
    `<div class="manager" style="width: 18rem;">
    <div class="manager-header">
      Manager
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${engineer.firstName}</li>
      <li class="list-group-item">${engineer.id}</li>
      <li class="list-group-item">${engineer.email}</li>
      <li class="list-group-item">${engineer.github}</li>
    </ul>
  </div>`
}

const generateIntern = (intern) => {
    return
    `<div class="manager" style="width: 18rem;">
    <div class="manager-header">
      Manager
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${intern.firstName}</li>
      <li class="list-group-item">${intern.id}</li>
      <li class="list-group-item">${intern.email}</li>
      <li class="list-group-item">${intern.school}</li>
    </ul>
  </div>`
}

