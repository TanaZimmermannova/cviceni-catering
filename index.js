let volba = document.querySelector (".volba");
let vstup;
let pocetOsob;

const catering = (vstup, pocetOsob) => {
    vstup = prompt("Zvolte cateringovou firmu - Just Food, Your Mama, Flavour Haven");
    pocetOsob = Number(prompt("Zvolte počet osob"));

    if (vstup == "Just Food") {
        volba.textContent = `Catering od ${vstup} je pro ${pocetOsob} osob celkem za ${pocetOsob*100} Kč.`;
    } else if (vstup == "Your Mama") {
        volba.textContent = `Catering od ${vstup} je pro ${pocetOsob} osob celkem za ${pocetOsob*500} Kč.`;
    } else if (vstup == "Flavour Haven") {
        volba.textContent = `Catering od ${vstup} je pro ${pocetOsob} osob celkem za ${pocetOsob*500} Kč.`;
    } else {
        volba.textContent = `Zadány špatné hodnoty`;
    }
}