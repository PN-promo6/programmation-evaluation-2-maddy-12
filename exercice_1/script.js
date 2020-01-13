//create the array variable
let fishList = [
  ["Ordre", "Famille", "Nom vernaculaire", "Nom binomial"],
  ["Aulopiformes", "Synodontidae", "Poisson lézard", "Synodus saurus"],
  ["Aulopiformes", "Anguilliformes", "Anguille", "Anguilla anguilla"],
  ["Aulopiformes", "Congridae", "Congre", "Conger conger"],
  ["Atheriniformes", "Atherinidae", "Joël", "Atherina boyeri"],
];

// create the function

function displayArray(array) {
  //Create the variables for table.
  let headerData = array[0]; //The head of the table 's variable.
  let i = 0;
  let currentElement;
  //create the table.
  let tableElement = document.createElement("table");
  document.body.appendChild(tableElement).style.border = "solid black";
  // create the head of the table
  let theadElement = document.createElement("thead")
  tableElement.appendChild(theadElement);
  // create the body of the table
  let tbodyElement = document.createElement("tbody");
  tableElement.appendChild(tbodyElement).style.fontStyle = "italic";
  // Create the table row in the thead containing the th elements
  let trInTheadElement = document.createElement("tr");
  theadElement.appendChild(trInTheadElement);

  //thead loop to create the "th" elements
  while (i < headerData.length) {
    currentElement = headerData[i];
    //create the th element inside the row of the thead
    let thElement = document.createElement("th");
    trInTheadElement.appendChild(thElement);
    thElement.textContent = currentElement;
    thElement.style.color="red";
    thElement.style.fontWeight="bold"
    thElement.style.borderRight = "solid";
    thElement.style.borderBottom = "solid";
    thElement.style.borderColor = "black";
    i++;
  }
  //tbody loop to create the "tr" elements
  let currentElement2
  let j = 1;

  while (j < array.length) {
    currentElement2 = array[j];
    let trIntbodyElement = document.createElement("tr");
    tbodyElement.appendChild(trIntbodyElement);
    trInTheadElement

    j++;

    //loop to create the "td" elements in the table rows
    let k =0;
    while (k < currentElement2.length) {
    let tdElement = document.createElement("td")
    trIntbodyElement.appendChild(tdElement).style.borderRight = "solid";
    tdElement.style.borderBottom = "solid";
    tdElement.textContent = currentElement2[k];

    k++;
  }

  }
}
//Call the function
displayArray(fishList);
