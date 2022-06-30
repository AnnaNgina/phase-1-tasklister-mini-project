document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector('form')
    form.addEventListener('submit', e => {
        e.preventDefault()
        addTask(e.target.addTask.value);
        form.reset();
    })
});
function addTask(e) {
    var li = document.createElement('li')
    var btn = document.createElement('button')
    btn.innerHTML = 'Delete'
    btn.style.backgroundColor = 'red'
    btn.style.color = 'white'
    btn.addEventListener('click', handleDelete)
    li.textContent = `${e} `
    const parent = document.getElementById('tasks')
    parent.appendChild(li)
    li.appendChild(btn)
}
function handleDelete(e) {
    e.target.parentNode.remove()
}
});
