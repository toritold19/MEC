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

// Global variables
let eAlgo = document.getElementById("algoritmo");
let eMhs = document.getElementById("qMhs");

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

    const button = document.getElementById('btnCalcular');
    button.addEventListener('click', (e) => {
        e.preventDefault() // ! El formulaio no recarga / no se va para arriba
        let extract = "";
        let seleccion = parseInt(eAlgo.value);
        console.log(seleccion);
        let mhsUsuario = eMhs.value;
        console.log(mhsUsuario);

        
        //Calculo de roundshare
        let rsEthash = division(mhsUsuario, netEthash);
        let rsKawPow = division(mhsUsuario, netKawPow);
        let rsAutolykos = division(mhsUsuario, netAutolykos);

        //Calculo de recompensas
        let ethReward = multiplicacion(rsEthash, rewardEthash);
        let rvnReward = multiplicacion(rsKawPow, rewardKawPow);
        let ergoReward = multiplicacion(rsKawPow, rewardKawPow);

        if (seleccion === 1) {
            extract = `Obtendrás ${ethReward.toFixed(4)} ETH diario con ${mhsUsuario} MH/s`;
        } else if (seleccion === 2){
            extract = `Obtendrás ${rvnReward.toFixed(4)} RVN diario con ${mhsUsuario} MH/s`;
        } else if (seleccion === 3) {
            extract = `Obtendrás ${ergoReward.toFixed(4)} ERG diario con ${mhsUsuario} MH/s`;
        } else {
            extract = `Debe seleccionar un algoritmo válido e ingresar su poder de cómputo`;
        }
        
            alert(extract);
            });







