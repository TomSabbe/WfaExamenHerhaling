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
        //imgGame.setAttribute('onclick','ToonDetails(picture.Name);');
        //or
        imgGame.onclick= function() {ToonDetails(picture.Name);};
       
        divafbeeldingenGamesVoorPlatforms.appendChild(imgGame);
    });
}

function ToonDetails(game) {
    console.log(game);


    let form = document.createElement("form");
    form.className = "form";
    //naam
    let name = document.createElement("h2");
    name.innerHTML = element.name;
    //type

    //prijs

    //beschrijving

    //detail foto's

   

    //merk logo
    let imgMerk = document.createElement("img");
    imgMerk.src = element.imgmerk;
    imgMerk.className = "imgMerk";
    //naam auto
  
    //foto auto
    let imgCard = document.createElement("img");
    imgCard.src = element.image;
    imgCard.className = "imgCar";
    //merk
    let merk = document.createElement("p");
    merk.innerHTML = element.merk;
    //prijs €
    let price = document.createElement("p");
    price.innerHTML = ` ${element.price} €`;
    //koffer
    let koffer = document.createElement("p");
    koffer.innerHTML = `koffer volume ${element.koffervolume} L`;

    //a plus buy
    let buybtn = document.createElement("a");
    //img buy
    let imgbuy = document.createElement("img");
    imgbuy.src = element.image;
    imgbuy.className = "imgCar";

    document.getElementById("containerRoad").appendChild(article);

    //uitvoering // !!!!!!! veranderen omdat extra array niet vergeten
    let voering = document.createElement("p");
    voering.innerHTML = element.Uitvoering;

    article.appendChild(imgMerk);
    article.appendChild(name);
    article.appendChild(imgCard);
    article.appendChild(merk);
    article.appendChild(price);
    article.appendChild(koffer);
    article.appendChild(voering);
}






function ResetFields() {
    divafbeeldingenGamesVoorPlatforms.innerHTML = "";
}