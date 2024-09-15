// Force load all JSON files
window.addEventListener('load', () => {
	fetch('https://lottie.host/afac0248-3d9b-4343-bb0b-9c003fc57897/fLEuGUfjFL.json');
	fetch('https://lottie.host/4186fd79-aabc-4611-a53a-d685a8446f4e/BLJhhUdUBG.json');
	fetch('https://lottie.host/230968f9-47ee-453c-a80f-2f8307630aa6/6tJWJeWgyo.json');
});

var resultDiv = document.getElementById("result");
var resultDivTxt = resultDiv.innerText;

let iconDiv = document.getElementById("icon");

var butnClicked = 0;
var submittedValue = "";

const textField = document.getElementById('inputField');

textField.addEventListener('input', function () {

	resultDiv.classList.remove('shake', 'red');

	const inputValue = textField.value;

	if (inputValue && butnClicked) {
		resultDiv.textContent = "Click Check";
		reflow(resultDiv, 'fade-in');
		butnClicked = 0;

	} else if (!inputValue) {
		resultDiv.textContent = resultDivTxt;
		reflow(resultDiv, 'fade-in');
		butnClicked = 0;
	}

	if (submittedValue != "" && submittedValue != inputValue) {
		iconDiv.classList.add('fade-out');
	}

});

function reflow(element, animation) {
	element.classList.remove(animation);
	element.offsetHeight;
	element.classList.add(animation);
}

function removeIcon() {
	while (iconDiv.firstChild) {
		iconDiv.removeChild(iconDiv.firstChild);
	}
}

function addIcon(path, speed = 1, scale = 1) {

	removeIcon();
	iconDiv.classList.remove('fade-out');

	const lottieIcon = document.createElement('dotlottie-player');
	lottieIcon.setAttribute('src', path);
	lottieIcon.setAttribute('speed', speed);
	lottieIcon.setAttribute('autoplay', '');
	lottieIcon.style.scale = scale;

	iconDiv.appendChild(lottieIcon);
}

function checkLeapYear(year) {
	var outputText = "";

	if (year % 400 === 0) {
		outputText = `<span class="br-green">Century Leap Year</span>`;
		addIcon('https://lottie.host/afac0248-3d9b-4343-bb0b-9c003fc57897/fLEuGUfjFL.json', 2.5, 2);

	} else if (year % 100 === 0) {
		outputText = `<span class="red">Not a Leap Year</span>`;
		addIcon('https://lottie.host/4186fd79-aabc-4611-a53a-d685a8446f4e/BLJhhUdUBG.json', 1.5);

	} else if (year % 4 === 0) {
		outputText = `<span class="green">Leap Year</span>`;
		addIcon('https://lottie.host/230968f9-47ee-453c-a80f-2f8307630aa6/6tJWJeWgyo.json');

	} else {
		outputText = `<span class="red">Not a Leap Year</span>`;
		addIcon('https://lottie.host/4186fd79-aabc-4611-a53a-d685a8446f4e/BLJhhUdUBG.json', 1.5);
	}

	resultDiv.classList.remove('fade-in');
	resultDiv.innerHTML = outputText;
	reflow(resultDiv, 'fade-in');
}

function takeInput() {
	butnClicked = 1;

	var year = (document.getElementById("inputField").value);
	resultDiv.classList.remove('shake', 'red');

	if (year === "") {
		resultDiv.innerHTML = "Input is Empty!";
		reflow(resultDiv, 'red');
		reflow(resultDiv, 'shake');

	} else {
		submittedValue = year;
		checkLeapYear(parseInt(year, 10));
	}
}

