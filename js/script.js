"use strict";

window.addEventListener('load', Initieer);

//global variables
var rdbAll;
var black;


function Initieer() {
    slcHouses = document.querySelector('#slcHouses');
    slcAncestry = document.querySelector('#slcAncestry');
    placeholderCards = document.querySelector('#placeholderCards');
    hairFilter = document.querySelector('#hairFilter');
    eyesFilter = document.querySelector('#eyesFilter');

    slcHouses.addEventListener("change", SelectedHouse);
    slcAncestry.addEventListener("change", SelectedAncestry);

    Start();
}

function Start() {
    AddHairRadioButton();
    AddEyesRadioButton();
    ShowAllCards();
    FillHouses();
    FillAncestry();
}