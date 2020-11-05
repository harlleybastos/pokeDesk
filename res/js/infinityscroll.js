window.addEventListener('scroll', () => {// 1º
    const { clientHeight, scrollHeight, scrollTop } = document.documentElement; // copiando o valor das proriedades
    const usuarioPertodoFimdaPagina = scrollTop + clientHeight >= scrollHeight - 10 ; /*Checando se o usuario esta perto do fim da página | Se a distancia entre o topo e o topo visivel do documento
     somada a altura entre topo e o final da parte visivel da pagina é maior ou igual a altura total de desse documento - 10 */
    if (usuarioPertodoFimdaPagina) {
       mostrarLoader();
    }
})

const mostrarLoader = () => { // Função responsavel por mostrar o loader carregando
    if(lista.innerHTML > ""){ // Só mostra o loader se a pagina não tiver a pokebola carregando..
    carregarLoader.classList.add('mostrar');// Mostrando o loader
    removerLoader();//Função que tirar o loader depois de 1seg
    }
 }

pegarProximosPokemons = () => { // Função responsável por mostrar os proximos pokemons quando a página for rolada para baixa
    numeroDePokemons += 20; // Adicionando +20 no numero de pokemons na do for da função consultarPokemons()
    referencia += 19;// Adicionando +20 na referencia do for da função consultarPokemons()
    consultarPokemons()
 }
 
const removerLoader = () => { // Depois de 1 segundo remove o Loader e adiciona mais 20 pokemons
    setTimeout(() => {
       carregarLoader.classList.remove('mostrar') //Removendo o loader
       pegarProximosPokemons();
    }, 1000)
 }