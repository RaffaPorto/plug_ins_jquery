$(document).ready(function(){
    $('#tel').mask('(00) 00000-0000')
    $('#cpf').mask('00000000000')
    $('#cep').mask('00000000')

    $('form').validate({
    rules: {
        nome: {
            required : true
        },
        email: {
            required: true
        },
        telefone: {
            required : true
        },
        cpf: {
            required: true
        },
        endereço: {
            required : true
        },
        cep: {
            required: true
        }
    },
    messages: {
        nome: 'Por favor, insira seu nome'
    },
    submitHandler: function(form) {
        console.log(form)
        alert(`Cadastro realizado com sucesso!`)
    },
    invalidHandler: function(evento, validador) {
        let camposIncorretos = validador.numberOfInvalids();
        if(camposIncorretos) {
            alert(`Existem ${camposIncorretos} campos imcompletos!`)
            alert(`Preencha corretamente`)
        }
    }
})
})
