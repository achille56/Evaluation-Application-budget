// récupération variables dépenses fixes.
let gasElecWater = document.getElementById("gasElecWater");
let phoneInternet = document.getElementById("phoneInternet");
let mutualHealth = document.getElementById("mutualHealth");
let incomeTax = document.getElementById("incomeTax");
let localTax = document.getElementById("localTax");
let homeInsurance = document.getElementById("homeInsurance");
let carInsurance = document.getElementById("carInsurance");
let rent = document.getElementById("rent");

// récupération variables dépenses courantes.
let shopping = document.getElementById("shopping");
let essence = document.getElementById("essence");
let sport = document.getElementById("sport");

// récupération variables dépenses occasionnelles.
let familyExit = document.getElementById("familyExit");
let other = document.getElementById("other");
let holidays = document.getElementById("holidays");

// récupération des recettes.
let salary = document.getElementById("salary");
let activityBonus = document.getElementById("activityBonus");
let realEstateRental = document.getElementById("realEstateRental");

// recette et dépense totale.
let totalDepenses = document.getElementById("totalDepenses");
let totalRecipes = document.getElementById("totalRecipes");

// ajout de recette et dépense.
let addExpense = document.getElementById("expense");
let addRecipes = document.getElementById("recipe");

// total.
let resultAll = document.getElementById("resultAll");
let saving = document.getElementById("saving3");

function newExpense() {
    let newE = +addExpense.value;
    let newD = +totalDepenses.innerHTML;
    totalDepenses.innerHTML = newD + newE;
}

function newRecipe() {
    let newR = +addRecipes.value;
    let newRe = +totalRecipes.innerHTML;
    totalRecipes.innerHTML = newR + newRe;
}

function resultsAll() {
    resultAll.value = totalRecipes.innerHTML - totalDepenses.innerHTML;
        if (resultAll.value > 0 && resultAll.value < 1000) {
            resultAll.style.backgroundColor = "green";
            resultAll.style.color = "white";
            alert("Il vous reste " + resultAll.value + " euros");
        }
        else if (resultAll.value >= 1000) {
            resultAll.style.backgroundColor = "green";
            resultAll.style.color = "white";
            alert("Il vous reste " + resultAll.value + " euros " + " vous devriez faire une sortie en famille");
        }
        else if (resultAll.value == 0) {
            alert("On vat pas pouvoir faire grand chose avec ça");
        }
        else {
            resultAll.style.backgroundColor = "red";
            resultAll.style.color = "white";
            alert("Il faut faire attention");
        }
}

function additionneRecipesTotal() {
    let r1 = +salary.value;
    let r2 = +activityBonus.value;
    let r3 = +realEstateRental.value;
    totalRecipes.textContent = (r1 + r2 + r3);
}

// récupération de toutes les dépenses.
function additionTotalDepenses() {
    let d1 = +gasElecWater.value;
    let d2 = +phoneInternet.value;
    let d3 = +mutualHealth.value;
    let d4 = +incomeTax.value;
    let d5 = +localTax.value;
    let d6 = +homeInsurance.value;
    let d7 = +carInsurance.value;
    let d8 = +rent.value;
    let d9 = +shopping.value;
    let d10 = +essence.value;
    let d11 = +sport.value;
    let d12 = +familyExit.value;
    let d13 = +other.value;
    let d14 = +holidays.value;
    totalDepenses.textContent = (d1 + d2 + d3 + d4 + d5 + d6 + d7 + d8 + d9 + d10 + d11 + d12 + d13 + d14);
}

// remise à zero de tous les champs.
function reset() {
    totalDepenses.textContent = "";
    totalRecipes.textContent = "";
    salary.value = "";
    activityBonus.value = "";
    realEstateRental.value = "";
    gasElecWater.value = "";
    phoneInternet.value = "";
    mutualHealth.value = "";
    incomeTax.value = "";
    localTax.value= "";
    homeInsurance.value = "";
    carInsurance.value = "";
    rent.value = "";
    shopping.value = "";
    essence.value = "";
    sport.value = "";
    familyExit.value = "";
    other.value = "";
    holidays.value = "";
    resultAll.value = "";
    resultAll.style.backgroundColor = "white";
    addRecipes.value = "";
    addExpense.value = "";
}











