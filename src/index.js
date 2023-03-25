document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form')
  let newtask = document.getElementById('new-task-description')
  const tasks = document.getElementById('tasks')

  console.log(form)

  form.addEventListener('submit', function(e){
    e.preventDefault()
    let taskToAdd = document.createElement('p')
    let removeButton = document.createElement('button')
    removeButton.textContent = ('X')
    removeButton.addEventListener('click', () => taskToAdd.remove())
    taskToAdd.textContent = newtask.value
    tasks.append(taskToAdd)
    taskToAdd.append(removeButton)

  })



});
 

