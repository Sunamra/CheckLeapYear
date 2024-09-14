function checkLeapYear(year) {
	alert(window.devicePixelRatio);
	var outputText = "";

	if (year % 400 === 0) {
		outputText = `${year} is a Century Leap Year`;
	} else if (year % 100 === 0) {
		outputText = `${year} is Not a Leap Year`;
	} else if (year % 4 === 0) {
		outputText = `${year} is a Leap Year`;
	} else {
		outputText = `${year} is Not a Leap Year`;
	}

	var resultDiv = document.getElementById("result");
    
    resultDiv.classList.remove('expand');
    resultDiv.offsetHeight;
    resultDiv.innerHTML = outputText;
    
    resultDiv.classList.add('expand');
}

function takeInput() {
	var text = document.getElementById("input").value.trim();
	var resultDiv = document.getElementById('result');
	resultDiv.classList.remove('shake');

	if (text === "") {
		resultDiv.innerHTML = "Input is Empty!";

		void resultDiv.offsetWidth;

		resultDiv.classList.add('shake');

	} else {
		var intVal = parseInt(text, 10);
		checkLeapYear(intVal)
	}
}
