
var signs = ['!', '"', '§', '$', '%', '&', '/', '(', ')', '=', '', '+', '-'];
var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var anzahlzeichen = 8;


function lenght() {
    let lenght1 = document.getElementById("lenght").value;
}


function generate(length1,) {
    console.log("clicked")

    var result = '';
    for (var i = 0; i < length1; i++) {
        let random = Math.random() * 1
        if (random > 0.5) {
            result += letters[Math.floor(Math.random() * letters.length)];

        } else {
            result += signs[Math.floor(Math.random() * signs.length)];

        }
    }
}

console.log(signs, letters);