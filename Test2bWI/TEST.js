document.getElementById("btn1").addEventListener("click", buttonClicked);

output = ""

function buttonClicked() {
    let Value = document.getElementById("Value").value;
    for (let i = 0; i <= Value; i++) {
        output = output+ i;
   }
   document.getElementById("output").innerHTML = output;
}