alert("MEC: Mining Extract Calculator");
alert("Escribe el algoritmo que deseas utilizar");

let seleccion = parseInt(prompt("1. Ethash, 2. KawPow, 3.Autolykos"));
let mhsUsuario = parseInt(prompt("Ingrese el poder de minado que tiene"))

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

switch (seleccion){
    case 1:
        let ethExtract = `Obtendrás ${ethReward.toFixed(4)} ETH diario con ${mhsUsuario} MH/s`;
        alert(ethExtract);
        break;
    case 2:
        let rvnExtract = `Obtendrás ${rvnReward.toFixed(4)} RVN diario con ${mhsUsuario} MH/s`;
        alert(rvnExtract);
        break;
    case 3:
        let ergoReward = `Obtendrás ${ergoReward.toFixed(4)} ERG diario con ${mhsUsuario} MH/s`;
        alert(rvnExtract);
        break;
}






