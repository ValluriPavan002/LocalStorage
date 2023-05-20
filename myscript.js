//let textElement = document.getElementById("text");
let buttonElement = document.getElementById("button");
let element = document.getElementById("inputElement");


let enteredValue = localStorage.getItem("textContentElement");


if (enteredValue === null) {
    element.value = "";
} else {
    element.value = enteredValue;
}

buttonElement.onclick = function() {

    let textContentElement = element.value;
    localStorage.setItem("textContentElement", textContentElement);
};