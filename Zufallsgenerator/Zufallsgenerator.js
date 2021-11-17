function buttonClicked() {
    let min = parseFloat(document.getElementById("number1").value);
    let max = parseFloat(document.getElementById("number2").value);

    let rand = Math.floor((Math.random() * (max + 1 - min) + min));

    console.log(rand);
    document.getElementById("Ergebnis").innerHTML = rand;
}