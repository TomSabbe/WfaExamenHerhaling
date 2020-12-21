"use strict";

window.addEventListener('load', Initieer);

//global variables
var slcHouses;
var eyesFilter;


function Initieer() {
    slcHouses = document.querySelector('#slcHouses');
    eyesFilter = document.querySelector('#eyesFilter');

    slcHouses.addEventListener("change", SelectedHouse);

    Start();
}

function Start() {
    AddHairRadioButton();
    FillHouses();
}