//Objeto Miner
class Miner {
    constructor(tag, address) {
        this.tag = tag;
        this.address = address;
    }
}

//Array de Miners
const arrayMiners = [];

//Función para registrar mineros
function registrarse(){
    let tag = prompt("Ingrese su tag");
    let address = prompt("Ingrese su address");
    const mgFelicitaciones = `¡Felicitaciones ${tag}, tu registro fue exitoso!`;
    alert(mgFelicitaciones);

    const miner = new Miner(tag, address);
    arrayMiners.push(miner);
    console.log(arrayMiners);
}

let e = document.getElementById("algoritmo");
/* let seleccion = e.options[e.selectedIndex].value; */
/* let seleccion = e.options.selectedIndex; */

let mhsUsuario = document.getElementById("qMhs").value;

//Cálculos sencillos
const division = (a,b) => a/b;
const multiplicacion = (a,b) => a*b;

//Hashrate de la red en MHs
let netEthash = 915000000;
let netKawPow = 2500000;
let netAutolykos = 10750000;

//Recompensas diarias de la red en criptomoneda
let rewardEthash = 13327;
let rewardKawPow = 9000000;
let rewardAutolykos = 31594;

//Calculo de roundshare
let rsEthash = division(mhsUsuario, netEthash);
let rsKawPow = division(mhsUsuario, netKawPow);
let rsAutolykos = division(mhsUsuario, netAutolykos);

//Calculo de recompensas
let ethReward = multiplicacion(rsEthash, rewardEthash);
let rvnReward = multiplicacion(rsKawPow, rewardKawPow);
let ergoReward = multiplicacion(rsKawPow, rewardKawPow);

    const button = document.getElementById('btnCalcular');
    button.addEventListener('click', (e) => {
        e.preventDefault() // ! El formulaio no recarga / no se va para arriba
        let extract = "";

        if (seleccion === 1) {
            console.log(seleccion);
            extract = `Obtendrás ${ethReward.toFixed(4)} ETH diario con ${mhsUsuario.value} MH/s`;
        } else if (seleccion === 2){
            console.log(seleccion);
            extract = `Obtendrás ${rvnReward.toFixed(4)} RVN diario con ${mhsUsuario.value} MH/s`;
        } else if (seleccion === 3) {
            console.log(seleccion);
            extract = `Obtendrás ${ergoReward.toFixed(4)} ERG diario con ${mhsUsuario.value} MH/s`;
        } else {
            console.log(seleccion);
            extract = `Debe seleccionar un algoritmo válido e ingresar su poder de cómputo`;
        }
        
            alert(extract);
            });







