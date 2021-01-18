"use strict";

window.addEventListener('load', Initieer);

//globals
//index links
var slcplatformKeuze;
var h3titelPlatform;
var divafbeeldingenGamesVoorPlatforms;
//global vars
var gamesCollection;
var ChoiceGamePlatform;

function Initieer() {
    KoppelDomElementen();
    VoegEventListenersToe();
    FetchData();
}


function KoppelDomElementen() {
    slcplatformKeuze = document.getElementById("platformKeuze");
    h3titelPlatform = document.getElementById("titelPlatform");
    divafbeeldingenGamesVoorPlatforms = document.getElementById("afbeeldingenGamesVoorPlatforms");
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
    slcplatformKeuze.selectedIndex= 1;
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
        //imgGame.setAttribute('onclick','ToonDetails();');
        //or
        imgGame.onclick= function() {ToonDetails(picture.Name);};
       
        divafbeeldingenGamesVoorPlatforms.appendChild(imgGame);

       

    });
}

function ToonDetails(game) {
    console.log(game);
    //img.style.border ='5px solid pink';
}






function ResetFields() {
    divafbeeldingenGamesVoorPlatforms.innerHTML = "";
}