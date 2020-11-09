const mostrarPopUp = (pokemon) =>{ // Função responsável por abrir o PopUp quando o pokemon é clicado
    const tipos = pokemon.types.map(tipo => tipo.type.name).join(', ');
    const nomePokemonComEstilo = pokemon.name[0].toUpperCase() + pokemon.name.slice(1); // Alterando o estilo da fonte de cada nome | Primeira letra maiúcula
    const habilidades = pokemon.abilities.map(habilidade => habilidade.ability.name).join(', ');
    const informacoesPokemon = pokemon.stats.map(st =>{
        return `
        <tr>
            <td class="titulo-table">${st.stat.name}</td>
            <td >${st.base_stat}</td>
        </tr>
        `

    }).join('');
    
    const popUPHTML = `
    <div class="popup">
            <button id="fecharBTN" onclick="fecharBotao()">Fechar</button>
            <div class="container-foto-pokemon"> 
                <img src="https://raw.githubusercontent.com/jnovack/pokemon-svg/master/svg/${pokemon.id}.svg"/>
            </div>
         <div class="informacoes-pokemon">
            <div class="info-topo-selecionado">
                <h3 class="numero-pokemon">#${pokemon.id.toString().padStart(3, '0')}</h3>
                <h3 class="nome-pokemon">${nomePokemonComEstilo}</h3>
            </div>
            <table class="table">
                <tbody>
                <tr><td class="titulo-table">Habilidades</td><td>${habilidades}</td></tr>
                <tr><td class="titulo-table">Altura</td><td>${pokemon.height}</td></tr>
                <tr><td class="titulo-table">Peso</td><td>${pokemon.weight}</td></tr>
                <tr><td class="titulo-table">Tipo</td><td>${tipos}</td></tr>
                ${informacoesPokemon}
                </tbody>
            </table>
        </div>
    </div>
    `
    pokedex.innerHTML = popUPHTML + pokedex.innerHTML;
}


const fecharBotao = () =>{
    const popup = document.querySelector('.popup');
    popup.parentElement.removeChild(popup)
    
}