/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?
let costPerDay = 0;
let totalDays = 0;
let dailyRate = 35;
let monday = document.getElementById("monday");
let tuesday = document.getElementById("tuesday");
let wednesday = document.getElementById("wednesday");
let thursday = document.getElementById("thursday");
let friday = document.getElementById("friday");
let fullDay = document.getElementById("full");
let halfDay = document.getElementById("half");
let calculatedCost = document.getElementById("calculated-cost") 
let clearButton = document.getElementById("clear-button");
const days = [monday, tuesday, wednesday, thursday, friday];

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
days.forEach((day) => {
  day.addEventListener("click", () => {
    if (day.classList.contains("clicked")) {
      day.classList.remove("clicked");
      totalDays--;
    } else {
      day.classList.add("clicked");
      totalDays++;
    }
    recalculate()
  });
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
clearButton.addEventListener("click", () => {
  days.forEach((day) => {
    day.classList.remove("clicked");
  });
  totalDays = 0;
  dailyRate = 35;
  calculatedCost.textContent = 0;
});

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfDay.addEventListener("click", () => {
    dailyRate = 20;
    halfDay.classList.add("clicked");
    fullDay.classList.remove("clicked");
    recalculate();
})

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
fullDay.addEventListener("click", () => {
    dailyRate = 35;
    fullDay.classList.add("clicked");
    halfDay.classList.remove("clicked");
    recalculate();
})

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function recalculate() {
    let totalCost = totalDays * dailyRate;
    calculatedCost.innerHTML = totalCost;
}