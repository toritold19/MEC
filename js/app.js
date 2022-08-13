//Objeto Miner
class Miner {
    constructor(tag, address) {
        this.tag = tag;
        this.address = address;
    }
}

//Array de miners
let minerArray = [];

// ? Global variables
let eAlgo = document.getElementById("algoritmo");
let eMhs = document.getElementById("qMhs");
let eTag = document.getElementById("tagMiner");
let eAddress = document.getElementById("addressMiner");

//Cálculos sencillos
const division = (a,b) => a/b;
const multiplicacion = (a,b) => a*b;

//Block time
let tBlockETH;
let tBlockRVN;
let tBlockERG;

//Hashrate de la red en MHs
let netEthash;
let netKawPow;
let netAutolykos;

//Block reward
let rETH = 2;
let rRVN = 2500.03;
let rERG = 48;

// ! Lógica para respuesta form al pretar btnCalcular

const button = document.getElementById('btnCalcular');
button.addEventListener('click', async (e) => {
    e.preventDefault() // ! El formulaio no recarga / no se va para arriba
    await bringNet();

    let extract = "";
    let seleccion = parseInt(eAlgo.value);
    let mhsUsuario = eMhs.value;

    //Calculo de recompensas diarias en crypto
    let rewardEthash = ((60*60*24)/tBlockETH)*rETH;
    let rewardKawPow = ((60*60*24)/tBlockRVN)*rRVN;
    let rewardAutolykos = ((60*60*24)/tBlockERG)*rERG;
        
     //Calculo de roundshare
    let rsEthash = division(mhsUsuario, netEthash/1000000);
    let rsKawPow = division(mhsUsuario, netKawPow/1000000);
    let rsAutolykos = division(mhsUsuario, netAutolykos/1000000);

    //Calculo de recompensas del usuario
    let ethReward = multiplicacion(rsEthash, rewardEthash);
    let rvnReward = multiplicacion(rsKawPow, rewardKawPow);
    let ergoReward = multiplicacion(rsAutolykos, rewardAutolykos);
    
    if (eMhs.value === '') {
        swal("Error!", "El campo MHs solo admite números", "error");
        return
    } else if (seleccion === 1) {
        extract = `Obtendrás ${ethReward.toFixed(4)} ETH diario con ${mhsUsuario} MH/s`;
    } else if (seleccion === 2){
        extract = `Obtendrás ${rvnReward.toFixed(2)} RVN diario con ${mhsUsuario} MH/s`;
    } else if (seleccion === 3) {
        extract = `Obtendrás ${ergoReward.toFixed(2)} ERG diario con ${mhsUsuario} MH/s`;
    };

    let divAnswer = document.getElementById("divAnswer");

    function addContentDiv() {
        let div = divAnswer;
        div.innerHTML = `
        <img src="" alt="" id="img-answer">
        <p>${extract}</p>`;
    }

    addContentDiv();
});

// * Declaración de variable
const popup = document.getElementById("popup-container");
const popupcontent = document.getElementById("popup-content");

// ! Si tag != null, no te muestra el popup. De lo contrario apengas carga el HTML, te salta el popup
$(window).on("load", function () {
    if (localStorage.getItem("tag") != null) {
        popup.style.display = "none";
        crearPopUpContent();
    } else {
        popup.style.display = "block";
    }});

// ! Al hacer clic en cualquier lado por fuera del container, se cierra el popup
$(window).click(function(e) {
    if(e.target == popup){
        swal("¡Falta información!", "Es necesario que completes el popup para proseguir", "warning");    }
});

function crearPopUpContent() {
    let main = document.getElementById("popup-answer");
    let div = document.createElement("div");
    
    div.setAttribute("class", "popup-content");
    div.innerHTML = `
    <img src="" alt="Miner-icon" id="img-popup"/>
    <h2>${localStorage.getItem("tag")}</h2>
    <p>${localStorage.getItem("address")}</p>`;
    main.appendChild(div);
}

const btnIngresar = document.getElementById('btnIngresar');
btnIngresar.addEventListener('click', (e) => {
    e.preventDefault()
    let tagMiner = eTag.value;
    let addressMiner = eAddress.value;

    localStorage.setItem("tag", tagMiner.replace(/["]+/g,""));
    localStorage.setItem("address", addressMiner.replace(/["]+/g,""));

    crearPopUpContent();
    popup.style.display = "none";
    });

// ! Funcion para traer el dato del hashrate / time block de las blockchain
async function bringNet() {
    await fetch("https://api.ethermine.org/networkStats")
    .then(res => res.json())
    .then(data => {
        tBlockETH = data.data.blockTime;
        netEthash = Object.values(data)[1].hashrate;
    });

    await fetch("https://api-ravencoin.flypool.org/networkStats")
    .then(res => res.json())
    .then(data => {
        tBlockRVN = Object.values(data)[1].blocktime;
        netKawPow = Object.values(data)[1].hashrate;
    });

    await fetch("https://api-ergo.flypool.org/networkStats")
    .then(res => res.json())
    .then(data => {
        tBlockERG = Object.values(data)[1].blocktime;
        netAutolykos = Object.values(data)[1].hashrate;
    });
}