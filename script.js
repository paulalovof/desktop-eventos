//pega o elemento com esse id la do html
var elemento = document.getElementById("meuElemento");

//muda a cor do fundo de acordo com o mouseover
elemento.addEventListener('mouseover', function(){
    elemento.style.backgroundColor = 'lightcoral';
});

//muda a cor do fundo de acordo com o mouseout
elemento.addEventListener('mouseout', function(){
    elemento.style.backgroundColor = 'lightblue';
});

//botao 1 com funcao direto no html
function minhaFuncao(){
    alert("Botao 1 foi clicado!!");
}

//botao 2 pegando o id do html
document.getElementById('botao2').addEventListener('click', function(){
    alert("Botao 2 foi clicado!!");
});

//botao com jquery
$("#botao3").click(function(){
    alert("Botao 3 JQuery foi clicado!!");
});

//pegar as variaveis pelo id do html
var campo = document.getElementById("meuCampo");
var mensagem = document.getElementById("mensagem");

//ve qual tecla foi pressionada la no campo, uma por vez, pelo event
campo.addEventListener('keydown', function(event){
    mensagem.textContent = 'Tecla pressionada: '+ event.key;
});

campo.addEventListener('keyup', function(event){
    mensagem.textContent = 'Tecla liberada: '+ event.key;
});

const campoFrutas = document.getElementById("frutas");
const frutaSelecionada = document.getElementById("fruta-selecionada");

//ve quando um valor do formulario é alterado, exemplo para form
campoFrutas.addEventListener('change', function(){
    const opcaoSelecionada = campoFrutas.options[campoFrutas.selectedIndex];
    const textoOpcao = opcaoSelecionada.text;

    frutaSelecionada.textContent = "Voce escolheu "+textoOpcao;
});

const campoEntrada = document.getElementById("campo");
const textoInfo = document.getElementById("textoInfo");

//da um foco no campo para preencher, exemplo para form
campoEntrada.addEventListener('focus', function(){
    campoEntrada.style.backgroundColor = 'lightyellow';
    textoInfo.innerHTML = "input ganhou foco!";
});

//tira o foco do campo, exemplo para form
campoEntrada.addEventListener('blur', function(){
    campoEntrada.style.backgroundColor = 'white';
    textoInfo.innerHTML = "input perdeu foco :(";
});

