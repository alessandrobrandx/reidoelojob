// Add your custom JS code here
function whats() {
    var valor1 = document.querySelector('#price').innerHTML; // obtem o valor impresso

    var select = document.getElementById('ct');
    var atual = select.options[select.selectedIndex].value;

    var select = document.getElementById('cd');
    var atual1 = select.options[select.selectedIndex].value;

    var select = document.getElementById('dt');
    var futura = select.options[select.selectedIndex].value;

    var select = document.getElementById('dd');
    var futura1 = select.options[select.selectedIndex].value;

    //tratando elo atual
    if (atual == 'f') {
        var atual2 = 'ferro '
    }
    if (atual == 'b') {
        var atual2 = 'bronze '
    }
    if (atual == 's') {
        var atual2 = 'prata '
    }
    if (atual == 'g') {
        var atual2 = 'ouro '
    }
    if (atual == 'p') {
        var atual2 = 'platina '
    }
    if (atual == 'd') {
        var atual2 = 'diamante '
    }

    //tratando elo futuro

    if (futura == 'f') {
        var futura2 = 'ferro'
    }
    if (futura == 'b') {
        var futura2 = 'bronze'
    }
    if (futura == 's') {
        var futura2 = 'prata'
    }
    if (futura == 'g') {
        var futura2 = 'ouro'
    }
    if (futura == 'p') {
        var futura2 = 'platina'
    }
    if (futura == 'd') {
        var futura2 = 'diamante'
    }
    if (futura == 'm') {
        var futura2 = 'mestre'
    }
    if (futura == 'gm') {
        var futura2 = 'grao mestre'
    }
    if (futura == 'c') {
        var futura2 = 'desafiante'
    }

    var text = 'Olá,%20estou%20no%20site,%20e%20quero%20Elo%20Job.%20Estou%20no%20'+atual2+'%20'+atual1+'%20e%20quero%20chegar%20no%20'+futura2+'%20'+futura1+', no%20valor%20de%20'+valor1+"."

    //var text = atual2.concat(concat).concat(atual1).concat('e%20quero%20ir%20para%20o').concat(concat).concat(futura2).concat(concat).concat(futura1).concat(concat).concat('no').concat(concat).concat('valor').concat(concat).concat('de').concat(concat).concat(valor1)

    if (mobileCheck() == false) {
        type = "web"
    } else {
        type = "api"
    }

    var url = `https://${type}.whatsapp.com/send?1=pt_BR&phone=5571996656742&text=`.concat(text);

    window.open(url);
}

$(document).ready(function() {
    $("body").mouseenter(function() {
        var valor = conversor(document.querySelector('#price').innerHTML); // obtem o valor impresso
        var valor_inicial = conversor(document.querySelector('#price').getAttribute('valor-inicial')); // obtem o valor inicial armazenado (nao sofre alterações)
        // vai percorrer todos os inputs do tipo checkbox (referentes aos adicionais)


        // vai tratar os valores para que não ocorra erros nos calculos (ex: NaN, undefined)
        function conversor(input) {
            if (typeof input == 'number')
                return input;

            let res;
            input = input.toString().replace(/[^0-9,.]/g, '');
            if (input.match(/(,)\d{2}$/)) {
                res = input.replace(/\./g, '').replace(',', '.')
            } else {
                res = input.replace(',', '');
            }

            return parseFloat(res);
        }


        // formata o resultado final para ser impresso em moeda real
        const formatCurrency = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
    });
    $("#ct").mouseup(function() {
        var valorDaDiv = $("#price").text();
        if ((valorDaDiv == "R$  0,00") || (valorDaDiv == "false") || valorDaDiv == "O elo inicial não pode ser maior que o elo final!") {
            $("#price").addClass("btn-success");
            $('#price').text('O elo inicial não pode ser maior que o elo final!');
            $(".form-check-input").prop('disabled', true);
        } else {
            $("#price").removeClass("btn-success");
            $(".form-check-input").prop('disabled', false);
        }

    });
    $("#dt").mouseup(function() {
        var valorDaDiv = $("#price").text();
        if ((valorDaDiv == "R$  0,00") || (valorDaDiv == "false") || valorDaDiv == "O elo inicial não pode ser maior que o elo final!") {
            $("#price").addClass("btn-danger");
            $('#price').text('O elo inicial não pode ser maior que o elo final!');
            $(".form-check-input").prop('disabled', true);
        } else {
            $("#price").removeClass("btn-success");
            $(".form-check-input").prop('disabled', false);
        }

    });

    $('#ct').change(function() {
        var src = $(this).find('option:selected').attr('data-img');
        $('img#eloa').attr('src', src);
        $(".form-check-input").prop("checked", false);

    });
    $('#dt').change(function() {
        var src = $(this).find('option:selected').attr('data-img');
        $('img#elof').attr('src', src);
        $(".form-check-input").prop("checked", false);
        opt = $(this).children("option:selected").attr('id');
        if ((opt == 'm') || (opt == 'c') || (opt == 'gm')) {
            $('#dd').empty()
                .append('<option selected="selected">1</option>');
        } else {
            $('#dd').empty()
                .append('<option>4</option><option>3</option><option>2</option><option selected="selected">1</option>');
        }
    });
});

function EloEvolution(attrs) {

    this._products = {
        f4: {

            price: 10
        },
        f3: {

            price: 10
        },
        f2: {

            price: 10
        },
        f1: {

            price: 10
        },
        b4: {

            price: 15
        },
        b3: {

            price: 15
        },
        b2: {

            price: 15
        },
        b1: {

            price: 15
        },
        s4: {

            price: 15
        },
        s3: {

            price: 15
        },
        s2: {

            price: 15
        },
        s1: {

            price: 20
        },
        g4: {

            price: 20
        },
        g3: {

            price: 20
        },
        g2: {

            price: 20
        },
        g1: {

            price: 30
        },
        p4: {

            price: 30
        },
        p3: {

            price: 30
        },
        p2: {

            price: 30
        },
        p1: {

            price: 50
        },
        
        d4: {

            price: 60
        },
        d3: {

            price: 80
        },
        d2: {

            price: 120
        },
        d1: {

            price: 150
        },
        m4: {
            id: 0,
            price: 0
        },
        m3: {
            id: 0,
            price: 0
        },
        m2: {
            id: 0,
            price: 0
        },
        m1: {
            id: 0,
            price: 720
        },
        gm4: {
            id: 0,
            price: 0
        },
        gm3: {
            id: 0,
            price: 0
        },
        gm2: {
            id: 0,
            price: 0
        },
        gm1: {
            id: 0,
            price: 1240
        },
        c4: {
            id: 0,
            price: 150
        },
        c3: {
            id: 0,
            price: 150
        },
        c2: {
            id: 0,
            price: 150
        },
        c1: {
            id: 0,
            price: 1500
        }
    };

    this._errorMessages = {
        dest_lt_cur: "Nível Desejado é menor que o Atual"
    }

    this._sequence = [
        'f4', 'f3', 'f2', 'f1',
        'b4', 'b3', 'b2', 'b1',
        's4', 's3', 's2', 's1',
        'g4', 'g3', 'g2', 'g1',
        'p4', 'p3', 'p2', 'p1',
        'd4', 'd3', 'd2', 'd1',
        'm4', 'm3', 'm2', 'm1',
        'gm4', 'gm3', 'gm2', 'gm1',
        'c4', 'c3', 'c2', 'c1'
    ];

    this.errors = [];

    this.currencyFormat = 'R$ ';
    this.currencyDecimalSeparator = ',';

    this.settings = function(attrs) {
        for (var key in attrs) {
            this[key] = attrs[key];
        }
        this._attachAddToCart();

        return this;
    }

    this.change = function() {
        this.ck = $(this.selectCurrentTier).val() + $(this.selectCurrentDivision).val();
        this.dk = $(this.selectDestinationTier).val() + $(this.selectDestinationDivision).val();
        this.current = this._products[this.ck];
        this.destination = this._products[this.dk];

        var price = this.sumValue();
        $(this.priceContainer).text(this._formatCurrency(price));

        $("#price").attr("valor-inicial", price);
        return this;
    }

    this.sumValue = function() {
        this._getSequence();
        if (this.i_dest < this.i_cur) {
            this._addError('dest_gt_cur');
            return false;
        }

        var sum = 0;
        this._execInSequence(function(p, k) {
            sum += p.price;
        });
        return sum;
    }

    this.errorMessages = function() {
        var trErrors = [];
        for (var i = 0; i < this.errors.length; i++) {
            var k = this.errors[i];
            if (this._errorMessages[k]) {
                trErrors.push(this._errorMessages[k]);
            } else {
                trErrors.push(k);
            }
            return trErrors;
        }
    }

    // ============== PRIVATE METHODS ================
    this._getSequence = function() {
        for (var i = 0; i < this._sequence.length; i++) {
            if (this.ck === this._sequence[i]) {
                this.i_cur = i;
            }
            if (this.dk === this._sequence[i]) {
                this.i_dest = i;
            }
        }
    }

    this._execInSequence = function(func) {
        for (var i = this.i_cur; i < this.i_dest; i++) {
            var p_key = this._sequence[i];
            var product = this._products[p_key];
            func(product, p_key);
        }
    }

    this._formatCurrency = function(val) {
        var o = [];
        var decPart = new String(parseInt((val - parseInt(val)) * Math.pow(10, this._currencyDecimalQty)) || 0);
        var intPart = new String(parseInt(val) || 0);
        if (decPart < 10) {
            decPart = "0" + decPart;
        }

        o.push(this.currencyFormat);
        o.push('')
        o.push(intPart);

        o.push(this.currencyDecimalSeparator);
        o.push(decPart);

        return o.join('');
    }

    this._attachAddToCart = function() {
        var evo = this;
        $(evo.addToCartButton).click(function() {
            evo.addToCart();
        });
    }

    this._addError = function(err) {
        this.errors.push(err);
    }

    this.init = function(attrs) {
        if (attrs) {
            this.settings(attrs);
        }
    }

    this.init(attrs);
}

$(function() {
    var evo = new EloEvolution({
        selectCurrentTier: '#ct',
        selectCurrentDivision: '#cd',
        selectDestinationTier: '#dt',
        selectDestinationDivision: '#dd',
        priceContainer: '#price',
        priceContainerOriginal: '#priceoriginal'
    }).change();
    $('#ct,#cd,#dt,#dd').change(function() {
        // we need to call inside an anonymous function
        // because we use `this`, inside evo.change function,
        // referring to evo instance, instead the dom object
        // that was changed.
        evo.change();
    });
});
