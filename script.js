const billInput = document.querySelector("#billInput");
const percent = document.querySelectorAll(".percent");
const custom = document.querySelector("#custom");
const numOfPeople = document.querySelector("#numOfPeople");

const tipPerPerson = document.querySelector(".tipAmount > p");
const totalPerPerson = document.querySelector(".totalTip > p");

const reset = document.querySelector("#resetBtn");

percent.forEach(btn => {
	btn.addEventListener("click", e => {
		btn.classList.add(".active");
		calculate(e);
	});
});

custom.addEventListener("input", e => {
	if (billInput.value === "" || numOfPeople.value === "") {
	} else {
		calcTipPerPerson(billInput.value, e.target.value, numOfPeople.value);
		calcTotalPerPerson(billInput.value, e.target.value, numOfPeople.value);
	}
});

billInput.addEventListener("input", e => {
	calculate(e);
});

numOfPeople.addEventListener("input", e => {
	calculate(e);
});

const calcTipPerPerson = (bill, tip, people) => {
	const result = ((bill * (tip / 100)) / people).toFixed(2);
	tipPerPerson.textContent = `$${result}`;
};
const calcTotalPerPerson = (bill, tip, people) => {
	const result = ((Number(bill) + bill * (tip / 100)) / people).toFixed(2);
	totalPerPerson.textContent = `$${result}`;
};

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

reset.addEventListener("click", () => {
	billInput.value = "";
	numOfPeople.value = "";
	custom.value = "";
	tipPerPerson.textContent = "$0.00";
	totalPerPerson.textContent = "$0.00";
});
