let myTexte = document.querySelector('input');
let myButton_egale = document.querySelector('#bouton_egale');


myButton_egale.addEventListener('click', function () {

    function main() {
        console.clear();
        var res;
        res = operation();
        myTexte.value = res;
        console.log(nb1);
        console.log(nb2);
        console.log(res);
        myTexte.size = 12;
        myTexte.maxLength = 12;
    }

    let myTexte = document.querySelector('input');
    var phrase = myTexte.value;
    var i;
    var nb1 = "";
    var nb2 = "";

    function operation(){
        var resultat;
        if (phrase.includes('+')) {
            var nb_av = phrase.indexOf('+');
            for (i = 0 ; i < nb_av ; i++){
                nb1 = nb1 + phrase.charAt(i);
            };
        
            for (i = nb_av + 1 ; i < phrase.length ; i++){
                nb2 = nb2 + phrase.charAt(i);
            };
            resultat = parseFloat(nb1, 10) + parseFloat(nb2, 10);
        }
        else if (phrase.includes('-')) {
            var nb_av = phrase.indexOf('-');
            for (i = 0 ; i < nb_av ; i++){
                nb1 = nb1 + phrase.charAt(i);
            };
        
            for (i = nb_av + 1 ; i < phrase.length ; i++){
                nb2 = nb2 + phrase.charAt(i);
            };
            resultat = parseFloat(nb1, 10) - parseFloat(nb2, 10);
        }
        else if (phrase.includes('*')) {
            var nb_av = phrase.indexOf('*');
            for (i = 0 ; i < nb_av ; i++){
                nb1 = nb1 + phrase.charAt(i);
            };
        
            for (i = nb_av + 1 ; i < phrase.length ; i++){
                nb2 = nb2 + phrase.charAt(i);
            };
            resultat = parseFloat(nb1, 10) * parseFloat(nb2, 10);
        }
        else {
            var nb_av = phrase.indexOf('/');
            for (i = 0 ; i < nb_av ; i++){
                nb1 = nb1 + phrase.charAt(i);
            };
        
            for (i = nb_av + 1 ; i < phrase.length ; i++){
                nb2 = nb2 + phrase.charAt(i);
            };

            resultat = parseFloat(nb1, 10) / parseFloat(nb2, 10);
        }
        return resultat;
    }
    main();
});
