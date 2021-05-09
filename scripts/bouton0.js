let myButton0 = document.querySelector('#bouton0');
myButton0.addEventListener('click', function() {
    myTexte.value = `${myTexte.value}0`;
});

let myButton_vir = document.querySelector('#bouton_vir');
myButton_vir.addEventListener('click', function() {
    myTexte.value = myTexte.value + '.';
});