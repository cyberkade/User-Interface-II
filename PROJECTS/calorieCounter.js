const goalForm = document.querySelector("#goalForm");
const foodForm = document.querySelector("#foodForm");
let calTotal = 0;
let carbTotal = 0;
let proTotal = 0;
let fatTotal = 0;

goalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  assignGoals();
  displayGoals();
});
foodForm.addEventListener("submit", (e) => {
  adjustGoals();
  e.preventDefault();
  foodForm.elements.calories.value = "";
  foodForm.elements.carbs.value = "";
  foodForm.elements.proteins.value = "";
  foodForm.elements.fats.value = "";
  foodForm.elements.food.value = "";
  foodForm.elements.servings.value = "";
});

const assignGoals = () => {
  const goalDiv = document.querySelectorAll(".goalDiv");
  const div = document.querySelector("#submit");
  const goalBtn = document.querySelector(".submitBtn");
  const calDiv = document.createElement("div");
  const carbDiv = document.createElement("div");
  const proDiv = document.createElement("div");
  const fatDiv = document.createElement("div");
  calDiv.append(`/${goalForm.elements.goalCalories.value} Calories`);
  carbDiv.append(`/${goalForm.elements.goalCarbs.value}g Carbs`);
  proDiv.append(`/${goalForm.elements.goalProteins.value}g Proteins`);
  fatDiv.append(`/${goalForm.elements.goalFats.value}g Fats`);
  for (let i = 0; i < 4; i++) {
    goalDiv[i].remove();
  }
  goalBtn.remove();
  calDiv.classList.add("bold");
  carbDiv.classList.add("bold");
  proDiv.classList.add("bold");
  fatDiv.classList.add("bold");
  div.classList.add("setGoals");
  div.append(calDiv);
  div.append(carbDiv);
  div.append(proDiv);
  div.append(fatDiv);
};

const displayGoals = () => {
  const div = document.querySelector("#foodEaten");
  const calDiv = document.createElement("div");
  const carbDiv = document.createElement("div");
  const proDiv = document.createElement("div");
  const fatDiv = document.createElement("div");

  calDiv.classList.add("displayCalProgress", "bolder");
  carbDiv.classList.add("displayCarbProgress", "bolder");
  proDiv.classList.add("displayProteinProgress", "bolder");
  fatDiv.classList.add("displayFatProgress", "bolder");

  calDiv.append(calTotal);
  carbDiv.append(carbTotal);
  proDiv.append(proTotal);
  fatDiv.append(fatTotal);
  div.append(calDiv);
  div.append(carbDiv);
  div.append(proDiv);
  div.append(fatDiv);
};

const adjustGoals = () => {
  const servings = foodForm.elements.servings.value;
  const item = foodForm.elements.food.value;
  const food = document.createElement("li");
  const ateToday = document.querySelector("h2");
  const foodList = document.querySelector("ul");

  const nutrients = {
    calories: foodForm.elements.calories.value,
    carbs: foodForm.elements.carbs.value,
    proteins: foodForm.elements.proteins.value,
    fats: foodForm.elements.fats.value,
  };

  calTotal += parseInt(nutrients.calories * servings);
  carbTotal += parseInt(nutrients.carbs * servings);
  proTotal += parseInt(nutrients.proteins * servings);
  fatTotal += parseInt(nutrients.fats * servings);

  ateToday.classList.remove("hide");
  food.classList.add("list");
  food.append(item);
  foodList.append(food);

  const calDiv = document.querySelector(".displayCalProgress");
  const carbDiv = document.querySelector(".displayCarbProgress");
  const proDiv = document.querySelector(".displayProteinProgress");
  const fatDiv = document.querySelector(".displayFatProgress");
  calDiv.innerText = calTotal;
  carbDiv.innerText = carbTotal;
  proDiv.innerText = proTotal;
  fatDiv.innerText = fatTotal;

  fatDiv.classList.add("fat");
  proDiv.classList.add("protein");
};
