/*
    Objetivo 1 - Quando passar o mouse em cima do personagem temos que:

    - Colocar a classe selecionado no personagem que passamos o mouse em cima
    para adicionar a animação nele.

    - Retirar a classe selecionado do personagem que está selecionado.
    

    Objectio 2 - quando passar o mouse em cima do personagem, trocar a imagem e nome do personagem grande

    - Alterar a imagem do jogador 1
    - Alterar o nome do jogador 1
*/


const personagens = document.querySelectorAll(".personagem");


personagens.forEach(function(personagem){
        

     personagem.addEventListener("mouseenter",function(){
        const idSelecionado = this.attributes.id.value;

        if (idSelecionado === "ultron"){
            return;
        }
        const personagemSelecionado = document.querySelector(".selecionado");
        personagemSelecionado.classList.remove("selecionado");
        this.classList.add("selecionado");


        const imagemJogador1 = document.getElementById("personagem-jogador-1");
        imagemJogador1.src= "./src/imagens/" + idSelecionado + ".png" ;

        const nomeJogador1 = document.getElementById("nome-jogador-1");
        const nomeSelecionado = this.getAttribute("data-name");

        nomeJogador1.innerHTML = nomeSelecionado;
    });
});
