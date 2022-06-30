// Selecting inputs
const billInput = document.querySelector("#billInput");
const percent = document.querySelectorAll(".percent");
const custom = document.querySelector("#custom");
const numOfPeople = document.querySelector("#numOfPeople");

// Selecting the endpoint for the results
const tipPerPerson = document.querySelector(".tipAmount > p");
const totalPerPerson = document.querySelector(".totalTip > p");

// Selecting the reset button
const reset = document.querySelector("#resetBtn");

// On Selecting a tip amount calculate the tip/total per person
percent.forEach(btn => {
	btn.addEventListener("click", e => {
		custom.value = "";
		calculate(e);
	});
});

// In case of custom input, the slice isn't necessary
custom.addEventListener("input", e => {
	if (billInput.value === "" || numOfPeople.value === "") {
	} else {
		calcTipPerPerson(billInput.value, e.target.value, numOfPeople.value);
		calcTotalPerPerson(billInput.value, e.target.value, numOfPeople.value);
	}
});

// When changing the bill amount, recalculate
billInput.addEventListener("input", e => {
	calculate(e);
});

// When changing the amount of people, recalculate
numOfPeople.addEventListener("input", e => {
	calculate(e);
});

// Calculating only the amount of tip one person has to pay
const calcTipPerPerson = (bill, tip, people) => {
	const result = ((bill * (tip / 100)) / people).toFixed(2);
	tipPerPerson.textContent = `$${result}`;
};

// Calculating the amount of "tip+portion of bill" one person has to pay
const calcTotalPerPerson = (bill, tip, people) => {
	const result = ((Number(bill) + bill * (tip / 100)) / people).toFixed(2);
	totalPerPerson.textContent = `$${result}`;
};

// Only calculate if all three input values are given
const calculate = e => {
	if (billInput.value === "" || numOfPeople.value === "") {
	} else {
		calcTipPerPerson(
			billInput.value,
			e.target.value.slice(0, -1),
			numOfPeople.value
		);
		calcTotalPerPerson(
			billInput.value,
			e.target.value.slice(0, -1),
			numOfPeople.value
		);
	}
};

// Reset the corresponding values upon clicking the button
reset.addEventListener("click", () => {
	billInput.value = "";
	numOfPeople.value = "";
	custom.value = "";
	tipPerPerson.textContent = "$0.00";
	totalPerPerson.textContent = "$0.00";
});
