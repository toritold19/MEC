//Objeto Miner
class Miner {
    constructor(tag, address) {
        this.tag = tag;
        this.address = address;
    }
}

// ? Global variables
let eAlgo = document.getElementById("algoritmo");
let eMhs = document.getElementById("qMhs");
let eTag = document.getElementById("tagMiner");
let eAddress = document.getElementById("addressMiner");

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

// ! Lógica para respuesta form al pretar btnCalcular

const button = document.getElementById('btnCalcular');
button.addEventListener('click', (e) => {
    e.preventDefault() // ! El formulaio no recarga / no se va para arriba
    let extract = "";
    let seleccion = parseInt(eAlgo.value);
    let mhsUsuario = eMhs.value;
        
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
        extract = `Obtendrás ${rvnReward.toFixed(2)} RVN diario con ${mhsUsuario} MH/s`;
    } else if (seleccion === 3) {
            extract = `Obtendrás ${ergoReward.toFixed(2)} ERG diario con ${mhsUsuario} MH/s`;
    } else {
            extract = `Debe seleccionar un algoritmo válido e ingresar su poder de cómputo`;
    }
        
    let ul = document.getElementsByClassName("main-form")[0];
    let div = document.createElement("div");
    div.setAttribute("class", "div-answer");
        
    div.innerHTML = `
    <img src="" alt="" id="img-answer">
    <p>${extract}</p>`;
    ul.appendChild(div);
});

// ! Lógica para el funcionamiento del pop-up

//Declaración de variable
const popup = document.getElementById("popup-container");

//Apenas carga el HTML se muestra el popup
$(window).on("load", function () {
    popup.style.display = "block";
});

//Al hacer clic en cualquier lado por fuera del container, se cierra el popup
$(window).click(function(e) {
    if(e.target == popup){
        popup.style.display = "none";
    }
  });

  