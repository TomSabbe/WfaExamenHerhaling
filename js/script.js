"use strict";

window.addEventListener('load', Initieer);

//global variables
var slcPlatform;
var divGekozenPlatform;
var gekozenPlatform = null;
var secDetails, secBestelling;


function Initieer() {

    // Inlezen DOM-elementen
    KoppelDomElementen();

    // Toevoegen van Eventlisteners
    VoegEventListenersToe()

    // Functieuitvoer bij start
    ToonPlatforms();
    Start();


}

function Start() {
    console.log(`debuggen kijken wat erin zit : ${slcHouses}`);
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
    ToonPlatforms();
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

