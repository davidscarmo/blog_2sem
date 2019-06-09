//Funções para aumento de fonte
function fonte(e) {
    var elemento = $(".acessibilidade");
    var fonte = elemento.css('font-size');
    if (e == 'a') {
        elemento.css("fontSize", parseInt(fonte) + 1);
    } else if ('d') {
        elemento.css("fontSize", parseInt(fonte) - 1);
    }
}

//Funções para teclas de atalho
$(document).ready(function () {
    var shift = false;
    //Define a primeira tecla da combinação de teclas
    //no caso a tecla ALT
    $(document).keydown(function (e) {
        if (e.keyCode == 18) {
            shift = true;
        }
    })
    $(document).keyup(function (e) {
        if (shift == true && e.keyCode == 82) {
            $('#endereco').focus();
        }
    })
    $(document).keyup(function (e) {
        if (shift == true && e.keyCode == 67) {
            $('#cidade').focus();
        }
    })
})

//Funções para contraste
