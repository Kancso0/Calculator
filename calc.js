function clickedChar(elem) {
	let input = document.getElementById("inputField");
	let displayError = document.getElementById("displayError");
	
	let char = elem.innerText;

	if(char == "=") {
		
		try {
			input.value = eval(input.value);
			displayError.style.display = "none";
		} catch (err) {
			displayError.innerText = "This operand is not allowed!";
			displayError.style.display = "block";
		}

	} else if(char == 'AC') {
		
		input.value = 0;
		displayError.style.display = "none";

	} else {
		if(input.value == 0) {
			input.value = char;
		} else {
			input.value += char;
		}
	}
	
}

function changeOperand(obj) {
	let currOperand = document.getElementById("operand");
	currOperand.innerText = obj.innerText;
}

function doCalc() {

	let firstValue = document.getElementById("firstValue").value;
	let secoundValue = document.getElementById("secoundValue").value;

	if(isNaN(firstValue) || isNaN(secoundValue)) {
		displayError.innerText = "Pls type only numbers!";
		displayError.style.display = "block";
		return;

	} else if(firstValue == "" || secoundValue == ""){
		displayError.innerText = "Pls fill all inputs!";
		displayError.style.display = "block";
		return;

	} else {
		displayError.style.display = "none";
		//parse
		firstValue = parseFloat(document.getElementById("firstValue").value) || 0;
		secoundValue = parseFloat(document.getElementById("secoundValue").value) || 0;
	}

	let currentOperand = document.getElementById("operand").innerText;
	let result;
	switch(currentOperand) {
		case "+":
			result = firstValue + secoundValue;
			break;
		case "-":
			result = firstValue - secoundValue;
			break;
		case "/":
			result = firstValue / secoundValue;
			break;
		case "*":
			result = firstValue * secoundValue;
			break;
		default:
			 
	}

	document.getElementById("display2").innerText = result;
}


function reset() {
	document.getElementById("display2").innerText = 0;
}