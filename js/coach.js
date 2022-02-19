function whats() {    
    var config = get_value_and_plan()

    if (mobileCheck() == false) {
        type = "web"
    } else {
        type = "api"
    }

    var text = `Olá,%20estou%20no%20site%20e%20quero%20contratar%20um%20Coach%20de%20 ${config["partidas"]} %20partidas%20no%20valor%20de%20 ${config["valor"]}`
    var url = `https://${type}.whatsapp.com/send?1=pt_BR&phone=5571996656742&text=`.concat(text);

    window.open(url);
}

$('#partidas').change(function() {
    var config = get_value_and_plan()
    $('#price').html(config["valor"])
});

function get_value_and_plan() {
    var select = document.getElementById('partidas');
    var partidas = select.options[select.selectedIndex].value;

    if (partidas == '5') {
        var valor = 'R$ 40,00'
    }else if (partidas == '10') {
        var valor = 'R$ 80,00'
    }else if (partidas == '15') {
        var valor = 'R$ 130,00'
    }

    return {"valor": valor, "partidas": partidas}
}