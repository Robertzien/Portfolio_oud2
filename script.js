let renewButton = document.getElementById("id");
const text = ["woon in Assen", "ben 19 jaar oud", "werk op dit moment in de horeca" ,"vind het leuk om websites te bouwen", "zit op scouting", "vind het leuk om te gamen", "bekijk graag films", "bekijk graag series", "zit op de Hanzehogeschool Groningen", "blijf altijd vrolijk", "wil graag meer leren over front-end development"];


document.getElementById('renew').onclick = function() {
    let random1 = text[Math.floor(Math.random() * text.length)];
    document.getElementById("about-text").innerHTML = random1, text[random1];
};