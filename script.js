let altura = document.getElementById('altura');
let peso = document.getElementById('peso');
let botao = document.getElementById('botao').addEventListener('click', function(e){
    e.preventDefault();
})
let modal = document.getElementById('myModal')
let sair = document.getElementById('sair-modal')
let resultado = document.getElementById('resultadoImc')
let mensagem = document.getElementById('mensagemResultado')


function cal(){
    let imcBruto = peso.value/Math.pow(altura.value, 2);
    const imc = imcBruto.toFixed(1)
    console.log(imc)
    resultado.innerHTML = `${imc}`
    if (imc <= 18.5){
        mensagem.innerHTML = `Você está abaixo do peso`
    }else if (imc > 18.6 && imc < 24.8){
        mensagem.innerHTML = `Você está no peso ideal`
    }else if (imc > 25.0 && imc < 29.9){
        mensagem.innerHTML = `Você está levemente acima do peso`
    }else if (imc > 30.0 && imc < 34.9){
        mensagem.innerHTML = `Você está na obesidade grau I`
    }else if (imc > 35.0 && imc < 39.9){
        mensagem.innerHTML = `Você está na obesidade grau II`
    }else if (imc >= 40.0){
        mensagem.innerHTML = `Você está na obesidade grau III`
    }else {
        mensagem.innerHTML = 'Por favor, insira seus dados!'
    }
}

function abrir(){
    modal.style.visibility = 'visible';
}

function fechar() {
    if (modal) {
        modal.style.visibility = 'hidden';
    } else {
        console.log('cu')
    }
    
}


