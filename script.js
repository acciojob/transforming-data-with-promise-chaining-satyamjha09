
document.getElementById("btn").addEventListener("click" , function() {
	const inputValue = parseFloat(document.getElementById("ip").value);
	const outputDiv = document.getElementById("output");

	if(isNaN(inputValue)) {
		outputDiv.innerHTML  = "Please enter a valid number.";
		return;
	}

	outputDiv.innerHTML = "";

	function delayedPromise(value, operation, delay){
		return new Promise((resolve) => {
			setTimeout(() => {
				const result = operation(value);
				outputDiv.innerHTML += `<p>Result: ${result}</p>`;
                resolve(result);
			}, delay)
		})
	}

	new Promise((resolve) => {
        setTimeout(() => {
            outputDiv.innerHTML += `<p>Result: ${inputValue}</p>`;
            resolve(inputValue);
        }, 2000);
    })
        .then((value) => delayedPromise(value, (num) => num * 2, 2000))
        .then((value) => delayedPromise(value, (num) => num - 3, 1000))
        .then((value) => delayedPromise(value, (num) => num / 2, 1000))
        .then((value) => delayedPromise(value, (num) => num + 10, 1000))
        .then((finalValue) => {
            outputDiv.innerHTML += `<p>Final Result: ${finalValue}</p>`;
    });
})
