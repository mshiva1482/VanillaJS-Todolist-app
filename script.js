var form = document.querySelector('#form1');
var rem = document.querySelector('.delete');
var loc = document.getElementById('item-n');


function clearFields(){
    document.getElementById('input1').value = '';
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    var newTask = document.getElementById('input1').value;
    var row = document.createElement('tr');
    row.innerHTML = `
    <td class="f-child">${newTask}</td>
    <td><button class="delete">X</button></td>
    `
    loc.appendChild(row);
    clearFields();
});

loc.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete')){
        if(confirm("Are you sure?")){
            var trow = e.target.parentElement.parentElement;
            loc.removeChild(trow);
        }
    }
});