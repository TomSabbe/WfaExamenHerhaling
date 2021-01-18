"use strict";

window.addEventListener('load', Initieer);

//globals
//index links
var slcplatformKeuze;
var h3titelPlatform;
var divafbeeldingenGamesVoorPlatforms;
var details;
//global vars
var gamesCollection;
var ChoiceGamePlatform;
var imgdetail;

function Initieer() {
    KoppelDomElementen();
    VoegEventListenersToe();
    FetchData();
}


function KoppelDomElementen() {
    slcplatformKeuze = document.getElementById("platformKeuze");
    h3titelPlatform = document.getElementById("titelPlatform");
    divafbeeldingenGamesVoorPlatforms = document.getElementById("afbeeldingenGamesVoorPlatforms");
    details = document.getElementById("details");
}

function VoegEventListenersToe() {
    slcplatformKeuze.addEventListener('change', ToonGekozenPlatformImg);

}

function FetchData() {
    fetch('https://tomsabbe.github.io/WfaExamenHerhaling/api/games.json')
        .then(function (resp) { return resp.json(); })
        .then(function (data) {
            gamesCollection = data;
            VulSelect(data);
        })
        .catch(function(err) { 
            divafbeeldingenGamesVoorPlatforms.innerHTML = err;
            console.log(err);
         });
        
}

// Functies aanroepen 
function VulSelect(games) {
    for (let plat in games) {
        let op = document.createElement("option");
        op.textContent = plat;
        op.value = plat;
        slcplatformKeuze.appendChild(op);
    }
    slcplatformKeuze.selectedIndex= 0;
    ToonGekozenPlatformImg();
}

function ToonGekozenPlatformImg() {
    ResetFields();
    let index = slcplatformKeuze.value;
    ChoiceGamePlatform = gamesCollection[index];
    titelPlatform.innerHTML = index;

    ChoiceGamePlatform.forEach(picture => {
       
        let imgGame = document.createElement("img");
        imgGame.src = picture.Image;
        imgGame.className = "imgGame";
        //imgGame.setAttribute('onclick','ToonDetails(picture.Name);');
        //or
        imgGame.onclick= function() {ToonDetails(picture);};
       
        divafbeeldingenGamesVoorPlatforms.appendChild(imgGame);
    });
}

function ToonDetails(game) {
    ResetDetail();

    let form = document.createElement("form");
    form.className = "form";

    //naam
    let name = document.createElement("h2");
    name.innerHTML = game.Name;
    //type
    let type = document.createElement("p");
    type.innerHTML = game.Type;
    //prijs
    let price = document.createElement("p");
    price.innerHTML = `${game.Price} $`;
    //beschrijving
    let beschrijving = document.createElement("p");
    beschrijving.innerHTML = game.Description;
    //detail foto's
    
    /*
    game.DetailImages.forEach(foto => {
        console.log(foto);
        imgdetail = document.createElement("img");
        imgdetail.src = foto;
        imgdetail.className = "imgMerkDetail";
    });
*/
    //koop knop
    let buy = document.createElement("btn");
    buy.innerHTML = "Winkel Karretje";
    buy.className = "btnBuy";
    buy.onclick= function() {Bestelling(game);};


    details.appendChild(form);

    details.appendChild(name);
    details.appendChild(type);
    details.appendChild(price);
    details.appendChild(beschrijving);
    //details.appendChild(imgdetail);

    details.appendChild(buy);
}

function Bestelling(tobuy) {
    console.log(tobuy);
    //img klein

    //details titel
    
    //table ofzo toondetails game met koop me



}

function ResetFields() {
    divafbeeldingenGamesVoorPlatforms.innerHTML = "";
}

function ResetDetail() {
    details.innerHTML = "";
}