
var signs = ['!', '"', '§', '$', '%', '&', '/', '(', ')', '=', '', '+', '-'];
var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];




function Click()
{
    var lenght1 = document.getElementById("lenght").value;
    generate(lenght1);
}

function generate(length1){
   
    var result = '';
    for (var i = 0; i < length1; i++) {
        let random = Math.random() * 1;
        if (random > 0.5) {
            result += ""+letters[Math.floor(Math.random() * letters.length)];
        } else {
            result += ""+signs[Math.floor(Math.random() * signs.length)];
        }
       
    }
    console.log(result);
   document.getElementById("result1").innerHTML = result;
}
    console.log("clicked")

