document.addEventListener('DOMContentLoaded', () => {
  // your code here
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    buildToDo(e.target.createTaskForm.value)
    form.reset()

})
})

function buildToDo(tasks) {
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x'
  p.textContent = `${tasks} `
  p.appendChild(btn)
  console.log(p)
  document.querySelector('#tasks').appendChild(p)
}
function handleDelete(e){
  e.target.parentNode.remove()
}