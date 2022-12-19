let burger = document.querySelector("#burger");
let nav = document.querySelector("nav");
let socialmedia = document.querySelector("#socialmedia")

burger.addEventListener('click', () => {
  console.log(nav.classList)
  nav.classList.toggle('open-menu')
  socialmedia.classList.toggle('open-menu')
  burger.classList.toggle('burger-toggle')


})


let modeSwitch = document.getElementById("mode");

modeSwitch.addEventListener('click', function () {
    modeSwitch.checked ? 
    document.documentElement.setAttribute("data-theme", "dark") : 
    document.documentElement.setAttribute("data-theme", "");

});


const showDialog = document.getElementById('filter');
const favDialog = document.getElementById('favDialog');


showDialog.addEventListener('click', () => {
  favDialog.showModal();
});

favDialog.addEventListener('close', () => {
  outputBox.value = `ReturnValue: ${favDialog.returnValue}.`;
});

