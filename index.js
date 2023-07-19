// const input = document.getElementById('input');

// input.addEventListener('input', function addingEventListener() {
//     alert('I was clicked!');
// });

function addingEventListener(){
    let input = document.querySelector('#input');
    input.addEventListener('input',()=> console.log('Input value has been added'))
}
addingEventListener();