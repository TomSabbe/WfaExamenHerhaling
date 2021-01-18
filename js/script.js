"use strict";

window.addEventListener('load', Initieer);

//global variables
var slcPlatform;
var divGekozenPlatform;
var gekozenPlatform = null;
var secDetails, secBestelling;

var platfrom;

function Initieer() {
    //koppel elementen
    KoppelDomElementen();
    //event listners
    VoegEventListenersToe();

    // Functieuitvoer bij start
    Start();


}

function Start() {
    console.log(`testing area`);
    OnlineFetch();
    
}

// Functies aanroepen 

function KoppelDomElementen() {
    slcPlatform = document.getElementById("platform");
    divGekozenPlatform = document.getElementById("gekozenPlatform");
    secDetails = document.getElementById("details");
    secBestelling = document.getElementById("bestelling");
}

function VoegEventListenersToe() {
    slcPlatform.addEventListener('change', ToonGekozenPlatform);
    
}

function OnlineFetch() {
          //Fetch online
          fetch('https://tomsabbe.github.io/WfaExamenHerhaling/api/games.json')
          .then(function (resp) { return resp.json(); })
          .then(function (arr) {
            ToonPlatforms(arr);

          });
}



function ToonPlatforms() {
    slcPlatform.options.lenght = 0;

    for (let plat in games) {
        slcPlatform.options[slcPlatform.length] = new Option(plat, plat);
    }

    ToonGekozenPlatform();
}


function ToonGekozenPlatform() {
    gekozenPlatform = slcPlatform.selectedIndex;

    let x = document.createElement('p');
    x.innerHTML = "gekozen platform";
    divGekozenPlatform.appendChild(x);

}

