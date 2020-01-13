//----------------2.1
//create the "h1" element in html
let title = document.createElement("h1");
document.body.appendChild(title);
//The text of the h1
title.textContent = "Cinéma Le Dauphin";

// create the paragraph
let paragraph = document.createElement("p");
document.body.appendChild(paragraph);
//the text of the paragraph
paragraph.textContent = " une salle de cinéma grand confort, un restaurant et une sélection de vins de qualité. Des avant prmières, des rencontres, des ciné-repas, des débats, des ateliers, des ciné-goûters, de 11h30 à 23h du mardi au dimanche (jusqu'à minuit le vendredi et le samedi).";

// create the button
let button = document.createElement("button");
document.body.appendChild(button);
// the text of the button
button.textContent = "Voir les films à l'affiche cette semaine";


//function to display the requiered informations
function displayInformation() {
  console.log(title, paragraph);
}
//call the function;
displayInformation();

//--------------------2.2

//Create the array
let arrayString = [
  ["Titre du film", "Réalisateur", "Nationalité", "Année", " Durée", "Version"],
  ["IN MY ROOM", "Ulrich Köhler", "Allemagne", "2019", "2h", "vf"],
  ["UN VIOLENT DÉSIR DE BONHEUR", "Clément Schneider", "France", "2018", "1h06", "vf"],
  ["WHAT YOU GONNA DO WHEN THE WORLD'S ON FIRE", "Roberto Minervini", "Etas-Unis/italie", "2018", "2h03", "vostfr"],
  ["GRASS", "Hong Sang-Soo", "Corée du Sud", "2018", "1h06", "vostfr"]
];
//--------------------2.3
//create the function that creates and display the array on html
function displayArray(array) {
  //variables
  let headerData = array[0];
  let i = 0;
  let currentElement;
  //Create the table
  let tableElement = document.createElement("table");
  document.body.appendChild(tableElement).style.border = "solid black";;

  //create the table head
  let theadElement = document.createElement("thead")
  tableElement.appendChild(theadElement);


  //create the table body
  let tbodyElement = document.createElement("tbody");
  tableElement.appendChild(tbodyElement);
  //Créer the row for the head
  let trInTheadElement = document.createElement("tr");
  theadElement.appendChild(trInTheadElement);


  // loop to create "th"
  while (i < headerData.length) {
    currentElement = headerData[i];
    let thElement = document.createElement("th");
    trInTheadElement.appendChild(thElement);
    thElement.textContent = currentElement;
    thElement.style.borderRight = "solid";
    thElement.style.borderBottom = "solid";
    i++;
  }

  //loop for the table body
  let currentElement2
  let j = 1;
  // create the rows in the body
  while (j < array.length) {
    currentElement2 = array[j];
    let trIntbodyElement = document.createElement("tr");
    tbodyElement.appendChild(trIntbodyElement);
    trInTheadElement

    j++;
    //loop for the table data
    let k = 0;

    while (k < currentElement2.length) {
      let tdElement = document.createElement("td");
      trIntbodyElement.appendChild(tdElement).style.borderRight = "solid";
      tdElement.style.borderBottom = "solid";

      tdElement.textContent = currentElement2[k];
      k++;
    }

  }
return(arrayString);
}
//call the function
displayArray(arrayString);

//----------------2.4
//Add Event Listener
button.addEventListener("click",function(){
 infoDisplayNone();
});
// create the fucntion for the display none of the informations
let changeDisplay = displayInformation;
function infoDisplayNone (){
  changeDisplay.style.display="none";
};
