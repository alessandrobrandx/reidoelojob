function whats() {
    var valor1 = document.querySelector('#price').innerHTML; // obtem o valor impresso
    
    var select = document.getElementById('ct');
    var atual = select.options[select.selectedIndex].value;
    var valor = valor1.replace("&nbsp;","")
    
    //tratando elo atual
    if (atual == 'f75') {
        var atual2 = 'ferro '
    }
    if (atual == 'b75') {
        var atual2 = 'bronze'
    }
    if (atual == 's75') {
        var atual2 = 'prata'
    }
    if (atual == 'o75') {
        var atual2 = 'ouro'
    }
    if (atual == 'p75') {
        var atual2 = 'platina'
    }
    if (atual == 'd75') {
        var atual2 = 'diamante'
    }
    if (atual == 'm75') {
        var atual2 = 'mestre'
    }
    if (atual == 'g75') {
        var atual2 = 'grao mestre'
    }
    if (atual == 'c75') {
        var atual2 = 'desafiante'
    }

    var text = `Olá,%20estou%20no%20site%20e%20quero%20MD10%20do%20elo%20 ${atual2} %20no%20valor%20de%20 ${valor}`
    
    if (mobileCheck() == false) {
        type = "web"
    } else {
        type = "api"
    }

    var url = `https://${type}.whatsapp.com/send?1=pt_BR&phone=5571996656742&text=`.concat(text);

    window.open(url);
}

$(document).ready(function() {
    $('#ct').change(function() {
        $('.bton').show();

        var src = $(this).find('option:selected').attr('data-img');
        $('img#eloa').attr('src', src);
        $(".form-check-input").prop("checked", false);
    });
});
