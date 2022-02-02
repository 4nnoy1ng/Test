document.getElementById("btn1").addEventListener("click", buttonClicked);


function buttonClicked() {

     let a = document.getElementById("input1").value;
     let b = document.getElementById("input2").value;
     let result = ((a * 1.43) / b) - 3.4;

     let resultRounded = Math.round(result);
     
     if (resultRounded > 0) {
          let output = "Positiv ";
          for (let i = 0; i <= result; i++) {
               output = output + i;
          }
          console.log("positiv")
          document.getElementById("output").innerHTML = output;

     } else if (resultRounded < 0) {
          let output = "Negativ";
          for (let i = 0; i >= result; i--) {
               output = output + i;
          }
          console.log("negativ")
          document.getElementById("output").innerHTML = output;
     }
};
