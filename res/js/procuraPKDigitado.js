const arrayDePokemons = []; //Array responsável por guardar todos os resultados
const caixaValorDigitado = document.getElementById('caixa-pesquisa'); // Campo em que o usuario digita
const pokedex = document.getElementById('pokedex');
const pokexibe = document.querySelector('.pokemonn');
const resultadoPokemon = '';
let to;

const { clientHeight, scrollHeight, scrollTop } = document.documentElement; // copiando o valor das proriedades
const usuarioPertodoFimdaPagina = scrollTop + clientHeight >= scrollHeight - 10; /*Checando se o usuario esta perto do fim da página | Se a distancia entre o topo e o topo visivel do documento
somada a altura entre topo e o final da parte visivel da pagina é maior ou igual a altura total de desse documento - 10 */

let temPoke = true;// Variavel para usar como referencia para erros




const url = `https://pokeapi.co/api/v2/pokemon?limit=151`;

fetch(url)
    .then(resposta => resposta.json())
    .then(pokemons => arrayDePokemons.push(...pokemons.results))

    console.log(arrayDePokemons);

function encontrarPokemon(pesquisa, arrayDePoks) { //Função responsável por filtrar os pokemons de acordo com a "Expressão" digitada.
    /*Recebe como parametro o termo "pesquisado" e os pokemons do arrayDePokemon */
    return arrayDePoks.filter((pokemon, indice) => { //Filtra dentro do Array
        const id = indice + 1;
        const regex = new RegExp(pesquisa, 'gi');//Armazena a pesquisa (Valor digitado no campo) em uma variavel. O 'gi' aponta uma pesquisa global
        return regex.test(pokemon.name) || regex.test(id.toString());
    })
}

function deBounceTime (event) {
    clearTimeout(to);
    to = setTimeout(function () {
        exibirPokemon(event);
    }, 600)
}

function exibirPokemon(e) {
    
    const pokeErro = `
    <div class="img-aviso">
    <h1>Pokemon não encontrado !</h1>
    <img src="https://i.imgur.com/VGtUTtC.gif"/>
    </div>
    `
    
    const resultadoPokemon = encontrarPokemon(e.target.value, arrayDePokemons); //Recebe o valor digitado na pesquisa como parametro e percorre o array para encontrar o mesmo

    if(!resultadoPokemon.length){ // Se não tiver o pokemon dentro do Array ele procura de novo na api com numero
        pegarPoke(e.target.value)
        .catch(() =>{ // catch realiza um ação se acontecer
            pokedex.innerHTML = pokeErro;
        })
    }

    lista.innerHTML = ""
    Promise.all(resultadoPokemon.map(async pokemon => { // Espera resolver todos os valores para apresentar na tela
        return await pegarPoke(pokemon.name);
    }));

    if (caixaValorDigitado.value == '') { // Se a caixa de pesquisa estiver vazia ele volta para a página incial
        lista.innerHTML = '';
        return location.replace('index.html')
    }
}

caixaValorDigitado.addEventListener('input', event => {
    deBounceTime(event);
});
