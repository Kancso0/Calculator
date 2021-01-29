var input = document.getElementById("inputField");
var displayError = document.getElementById("displayError");

function clickedChar(elem) {
	
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