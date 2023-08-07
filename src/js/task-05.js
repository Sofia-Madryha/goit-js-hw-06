const textInput = document.querySelector('input#name-input');
const output = document.querySelector('#name-output');

textInput.addEventListener("input", (event) => {
    if (textInput.value.length == 0) {
        output.textContent = "Anonymous";
    } else{
    output.textContent = event.currentTarget.value;}
  });