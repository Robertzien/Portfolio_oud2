let renewButton = document.getElementById("id");
const text = [
  "woon in Assen",
  "wil graag beter worden in HTML",
  "wil graag beter worden met CSS",
  "woon al mijn hele leven in Assen",
  "leer op dit moment Javascript",
  "ben 19 jaar oud",
  "werk op dit moment in de horeca",
  "vind het leuk om websites te bouwen",
  "zit op scouting",
  "vind het leuk om te gamen",
  "bekijk graag films",
  "bekijk graag series",
  "zit op de Hanzehogeschool Groningen",
  "blijf altijd vrolijk",
  "wil graag meer leren over front-end development",
];

//kies een random stuk text uit de lijst wanneer er op de knop geklikt wordt

document.getElementById("renew").onclick = function () {
  let random = text[Math.floor(Math.random() * text.length)];
  (document.getElementById("about-text").innerHTML = random), text[random1];
};
