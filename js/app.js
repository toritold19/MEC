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

// ! Lógica para el funcionamiento del pop-up

//Declaración de variable
const popup = document.getElementById("popup-container");
const popupcontent = document.getElementById("popup-content");

//Si tag != null, no te muestra el popup. De lo contrario apengas carga el HTML, te salta el popup
$(window).on("load", function () {
    if (localStorage.getItem("tag") != null) {
        popup.style.display = "none";
        crearPopUpContent();
    } else {
        popup.style.display = "block";
    }});

//Al hacer clic en cualquier lado por fuera del container, se cierra el popup
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



