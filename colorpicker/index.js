// accessing index 0 because the get elements by tag name returns an array
// because there can be multiple elements with the same tag name (like buttons)
// but there is only one body tag, and it is at index 0

const body = document.getElementsByTagName("body")[0];

function setColor(inputName) {
    body.style.backgroundColor = inputName;
}

function setRandom() {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);

    const color = `rgb(${red}, ${green}, ${blue})`;
    body.style.backgroundColor = color;
    document.getElementById("random").style.backgroundColor = color;
}
