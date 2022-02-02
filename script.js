let inputLargura = document.getElementById("largura");
let inputAltura = document.getElementById("altura");
let resultado = document.getElementById("resultado");
let obs = document.getElementById("obs")


function calcular(){
    
    let largura = inputLargura.value
    let altura = inputAltura.value
    var larguraRolo = parseFloat(1.40)
    var larguraRolo2 = 1.40

    let total = parseInt(largura/larguraRolo) + 1

    resultado.innerHTML = `<p>Você precisa de ${total} pedaços de ${altura}m x ${larguraRolo2}m`
    obs.innerHTML = `<p>Observação: O sistema coloca 1 pedaço a mais para não faltar na hora da aplicação`
}