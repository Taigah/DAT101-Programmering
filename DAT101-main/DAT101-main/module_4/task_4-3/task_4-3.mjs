"use strict";

const CarTypes = [
  { value: 1, caption: "Aston Martin" },
  { value: 2, caption: "Bentley" },
  { value: 3, caption: "Alfa Romeo" },
  { value: 4, caption: "Ferrari" },
  { value: 5, caption: "Subaru" },
  { value: 6, caption: "Porsche" },
  { value: 7, caption: "Tesla" },
  { value: 8, caption: "Toyota" },
  { value: 9, caption: "Renault" },
  { value: 10, caption: "Peugeot" },
  { value: 11, caption: "Suzuki" },
  { value: 12, caption: "Mitsubishi" },
  { value: 13, caption: "Nissan" },
];

const GirlsNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

const MovieGenre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
];

//--- Part 1 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

const cmbTask1Calculate = document.getElementById("cmbTask1Calculate");
cmbTask1Calculate.addEventListener("click", cmbTask1CalculateClick);
function cmbTask1CalculateClick() {
  const rectangleHeight = document.getElementById("txtRectHeight");
  const rectangleWidth = document.getElementById("txtRectWidth");
  const height = Number(rectangleHeight.value);
  const width = Number(rectangleWidth.value);  
  const perimeter = 2 * (height + width);
  const area = height * width;
  const txtTask1Output = document.getElementById("txtTask1Output");
  txtTask1Output.innerHTML = "Circumference = " + perimeter + " Area = " + area;
  console.log("Height: " + height + " Width: " + width);
  console.log("Height is: " + typeof(height) + " Width is: " + typeof(width));
  console.log("Perimeter: " + perimeter + " Area: " + area);
}

//--- Part 2 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

const txtTask2Word = document.getElementById("txtTask2Word");
txtTask2Word.addEventListener("keypress", txtTask2WordKeyPress);
const txtTask2Output = document.getElementById("txtTask2Output");
let task2Words = [];
function txtTask2WordKeyPress(aEvent) {
  const key = aEvent.key;
  console.log(key);
  switch(key) {
    case "Enter":
      const words = txtTask2Word.value.split(" ");
      txtTask2Word.value = "";
      task2Words = task2Words.concat(words);
      txtTask2Output.innerHTML = "Number of words = " + task2Words.length + "<br>" + task2Words.join(" ");
      console.log(task2Words);
      break;
  }
}
//--- Part 3 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

const cmbTask3CheckAnswer = document.getElementById("cmbTask3CheckAnswer");
cmbTask3CheckAnswer.addEventListener("click", cmbTask3CheckAnswerClick);
const txtTask3Output = document.getElementById("txtTask3Output");

let text = "";
function cmbTask3CheckAnswerClick() {
  const chkTask3 = document.getElementsByName("chkTask3");
  for (let i = 0; i < chkTask3.length; i++) {
    const checkBox = chkTask3[i];
    if (checkBox.checked) {
      const value = checkBox.value;
      text += "You have picked number " + value + ".<br / >"
    }
  }
  txtTask3Output.innerHTML = text;
  text = "";
}

//--- Part 4 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

const carButton = document.getElementById("divTask4Cars");
carButton.addEventListener("click", carButtonClick);
const txtTask4Output = document.getElementById("txtTask4Output");

function carButtonClick(value, caption) {
  let label = document.createElement("LABEL");
  let radioButton = document.createElement("INPUT");
  radioButton.value = value
  radioButton.caption = caption
  radioButton.setAttribute("type", "radio");
  label.appendChild(radioButton);
  label.appendChild(document.createTextNode(caption));
  return label
}

text = "";
for (let i = 0; i < CarTypes.length; i++) {
  const button = carButtonClick(CarTypes[i].value, CarTypes[i].caption);
  const query = button.querySelector("INPUT");
  button.addEventListener("click", ()=>{
    const caption = query.caption
    txtTask4Output.innerHTML = "You choose " + caption + ".<br / >"
  })
  txtTask4Output.appendChild(button);
  txtTask4Output.appendChild(document.createElement("br"));
}

//--- Part 5 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

let selectTask5Animals = document.getElementById("selectTask5Animals");
selectTask5Animals.addEventListener("change", selectTask5AnimalsClick);
let txtTask5Output = document.getElementById("txtTask5Output");

text = "";
function selectTask5AnimalsClick () {
  let selectedOption = selectTask5Animals.options[selectTask5Animals.selectedIndex];
  let optionText = selectedOption.textContent;  // Get the text of the selected option
  txtTask5Output.innerHTML = "You selected " + optionText;  // Display the animal name
}
text = "";

//--- Part 6 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

const selectTask6Girls = document.getElementById("selectTask6Girls");
selectTask6Girls.addEventListener("change", selectTask6GirlsChange);
const txtTask6Output = document.getElementById("txtTask6Output");

function populateDropdown() {
  for (let i = 0; i < GirlsNames.length; i++) {
    let option = GirlsNames[i];
    let element = document.createElement("option");
    element.textContent = option;
    element.value = option;
    selectTask6Girls.appendChild(element);
  }
}

function selectTask6GirlsChange() {
  let nameOption = selectTask6Girls.options[selectTask6Girls.selectedIndex];
  let nameText = nameOption.textContent;
  txtTask6Output.innerHTML = "You selected: " + nameText;
}

populateDropdown();

//--- Part 7 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

const selectMovieGenre = document.getElementById("selectMovieGenre");

function populateDropdownMovies() {
  for (let i = 0; i < MovieGenre.length; i++) {
    let option = MovieGenre[i];
    let element = document.createElement("option");
    element.textContent = option;
    element.value = option;
    selectMovieGenre.appendChild(element);
  }
}

populateDropdownMovies();

const txtMovieTitle = document.getElementById("txtMovieTitle");
const txtMovieDirector = document.getElementById("txtMovieDirector");
let moveTitle = [];
let movieDirector = [];
let tblMovies = document.getElementById("tblMovies");