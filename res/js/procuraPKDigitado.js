const arrayDePokemons = []; //Array responsável por guardar todos os resultados
const caixaValorDigitado = document.getElementById('caixa-pesquisa'); // Campo em que o usuario digita
const pokedex = document.getElementById('pokedex');

const { clientHeight, scrollHeight, scrollTop } = document.documentElement; // copiando o valor das proriedades
const usuarioPertodoFimdaPagina = scrollTop + clientHeight >= scrollHeight - 10; /*Checando se o usuario esta perto do fim da página | Se a distancia entre o topo e o topo visivel do documento
somada a altura entre topo e o final da parte visivel da pagina é maior ou igual a altura total de desse documento - 10 */

let temPoke = true; // Variavel para usar como referencia para erros



const url = `https://pokeapi.co/api/v2/pokemon?limit=893`;

fetch(url)
    .then(resposta => resposta.json())
    .then(pokemons => arrayDePokemons.push(...pokemons.results))


function encontrarPokemon(pesquisa, arrayDePokemons) { //Função responsável por filtrar os pokemons de acordo com a "Expressão" digitada.
    /*Recebe como parametro o termo "pesquisado" e os pokemons do arrayDePokemon */
    return arrayDePokemons.filter(pokemon => { //Filtra dentro do Array
        const regex = new RegExp(pesquisa, 'gi');//Armazena a pesquisa (Valor digitado no campo) em uma variavel. O 'gi' aponta uma pesquisa global
        return pokemon.name.match(regex);
    })
}

function exibirPokemon() {
    lista.innerHTML = "";

    const pokeErro = `
    <div class="img-aviso">
        <h1>Pokemon não encontrado !</h1>
        <img src="https://i.imgur.com/VGtUTtC.gif"/>
    </div>
    `

    const resultadoPokemon = encontrarPokemon(this.value, arrayDePokemons); //Recebe o valor digitado na pesquisa como parametro e percorre o array para encontrar o mesmo

    if(!resultadoPokemon.length){ // Se não tiver o pokemon dentro do Array ele procura de novo na api com numero
        pegarPoke(this.value);
    } else {
        temPoke = false;
    }

    if (temPoke == false){
        pokedex.innerHTML = pokeErro;
    }

    
    const htmlResult = resultadoPokemon.map(pokemon => { //Mapeando e retornando os valores filtrados
        return `
        <h3 class="hidden" id="nome-pokemon">${pokemon.name}</h3>
        `
    }).join("")

    lista.innerHTML = htmlResult; // Inserindo os valores dentro da HTML
    const nome = document.getElementById('nome-pokemon').textContent; // Buscando o conteudo interno dos nomes exibidos

    if (caixaValorDigitado.value == '') { // Se a caixa de pesquisa estiver vazia ele volta para a página incial
        lista.innerHTML = '';
        return location.replace('index.html')
    }

    if (caixaValorDigitado.value > "" && lista.childElementCount >= 1) { // Se o usuario estiver digitando e tiver mais de um pokemon na lista ele aparece o pokemon
        pokedex.innerHTML = '' // Limpa a tela pra evitar que a pokebola "Pokemon não encontrado apareça"
        pegarPoke(nome)
    }

}
caixaValorDigitado.addEventListener('input', exibirPokemon);
