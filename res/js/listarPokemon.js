const logo = document.querySelector('.imglogo');

logo.addEventListener("click", function() {
   return location.replace('index.html')
})

const mostraPokemon = (pokemon) => { // Mapeia e mostra todos os pokemons na ordem

   const htmlPOKEMON = pokemon.map(pok => `
   <div class="pokemon" onclick="pokemonSelecionado(${pok.id})">
       <div class="container-foto-pokemon"> 
           <img src="https://raw.githubusercontent.com/jnovack/pokemon-svg/master/svg/${pok.id}.svg"/>
       </div>
       <div class="fundo">
           <img class="pokeball" src="https://i.imgur.com/8qOOkAG.png" />
       </div>
       <div class="informacoes-pokemon">
           <span class="numero-pokemon">#${pok.id}</span>
           <h3 class="nome-pokemon">${pok.nome}</h3>
           <small class="cor-badge"> <span>Tipo: <span class="titulopok">${pok.tipo}</span></small>
       </div>
   </div>  
   `).join('');


   lista.innerHTML = htmlPOKEMON;
}

window.addEventListener("load", function() {
   caixaValorDigitado.focus();
})

puxaPoke();

