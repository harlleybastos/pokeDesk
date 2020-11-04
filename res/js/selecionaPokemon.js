const mostrarPopUp = (pokemon) =>{ // Função responsável por abrir o PopUp quando o pokemon é clicado
    const tipos = pokemon.types.map(tipo => tipo.type.name).join(', ');
    const nomePokemonComEstilo = pokemon.name[0].toUpperCase() + pokemon.name.slice(1); // Alterando o estilo da fonte de cada nome | Primeira letra maiúcula

    const popUPHTML = `
    <div class="popup">
            <button id="fecharBTN" onclick="fecharBotao()">Fechar</button>
            <div class="container-foto-pokemon"> 
                <img src="https://raw.githubusercontent.com/jnovack/pokemon-svg/master/svg/${pokemon.id}.svg"/>
            </div>
         <div class="informacoes-pokemon">
            <span class="numero-pokemon">#${pokemon.id.toString().padStart(3, '0')}</span>
            <h3 class="nome-pokemon">${nomePokemonComEstilo}</h3>
            <small class="altura-pokemon">Altura: ${pokemon.height} cm</small>
            <small class="peso-pokemon">Peso: ${pokemon.weight} KG </small>
            <small class="tipo-pokemon">Tipo: ${tipos} </small>
        </div>
    </div>
    `
    pokedex.innerHTML = popUPHTML + pokedex.innerHTML;
}


const fecharBotao = () =>{
    const popup = document.querySelector('.popup');
    popup.parentElement.removeChild(popup)
    
}