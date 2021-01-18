"use strict";

window.addEventListener('load', Initieer);

//global variables
var slcPlatform;
var divGekozenPlatform;
var gekozenPlatform = null;
var secDetails, secBestelling;

var platfrom;

function Initieer() {
    KoppelDomElementen();
    VoegEventListenersToe()

    // Functieuitvoer bij start
   
    Start();


}

function Start() {
    console.log(`debuggen kijken wat erin zit : ${games}`);
    fetch();
    ToonPlatforms();
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

function fetch() {
          //Fetch online
          fetch('https://tomsabbe.github.io/WfaExamenHerhaling/api/games.json')
          .then(function (resp) { return resp.json(); })
          .then(function (arr) {
            console.log("werk de fetch :" + arr);

            platfrom = arr.PS4;
            //createCardsSuper(platfrom);
            console.log("werk de fetch :" + platfrom);

          });
}



function ToonPlatforms() {
    slcPlatform.options.lenght = 0;

    for (let plat in games) {
        slcPlatform.options[slcPlatform.length] = new Option(plat, plat);
    }

    ToonGekozenPlatform();
    console.writeLine()
}


function ToonGekozenPlatform() {
    gekozenPlatform = slcPlatform.selectedIndex;

    let x = document.createElement('p');
    x.innerHTML = "gekozen platform";
    divGekozenPlatform.appendChild(x);

}

