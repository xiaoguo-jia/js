const input = document.getElementById("userinput");

function reverseString(str) {
    // one way in js is to reverse the string and compare it to the original
    // splitting on empty string to get an array of characters
    // reverse
    // joining on empty string to get a string
    return str.split("").reverse().join("");
}

function check() {
    const value = input.value;
    const reversed = reverseString(value);
    
    if (value === reversed) {
        alert(`"${value}" is a palindrome`);    
    }

    else {
        alert(`"${value}" is not a palindrome`);
    }

    // set value to empty string after checking
    input.value = "";
}