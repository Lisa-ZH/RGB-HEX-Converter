$(document).ready(function(){  
    function checkInput(inputText){
        if (isNaN(inputText)){
            alert("Please input numbers");
            return false;
        } else if(inputText < 0 || inputText > 255){
            alert("Please input numbers between 0 - 255");
            return false;
        } else if(inputText == null || inputText =="") {
            return inputText = 0;
        } else {
            return inputText;
        }
    }

    $("form").submit(function(e){
        e.preventDefault(e);
    });

    const hexArr = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

    // rgb(220, 20, 60)
    // First Value
    // Take the first number, 220, and divide by 16. 220 / 16 = 13.75, which means that the first digit of the 6-digit hex color code is 13, or D.
    // Take the remainder of the first digit, 0.75, and multiply by 16. 0.75 (16) = 12, which means that the second digit of the 6-digit hex color code is 12, or C.
    // So far, we have #DC____.

    // Second Value
    // Take the second number, 20, and divide by 16. 20 / 16 = 1.25, which means that the third digit of the 6-digit hex color code is 1.
    // Take the remainder of the first digit, 0.25, and multiply by 16. 0.25 (16) = 4, which means that the fourth digit of the 6-digit hex color code is 4.
    // Adding to what we had already, we now have #DC14__.

    // Third Value
    // Take the third number, 60, and divide by 16. 60 / 16 = 3.75, which means that the fifth digit of the 6-digit hex color code is 3.
    // Take the remainder of the first digit, 0.75, and multiply by 16. 0.75 (16) = 12, which means that the sixth digit of the 6-digit hex color code is 12, or C.
    // Finally, we have our total value of #DC143C.

    function RGBFormular(anyNumber){
        anyNumber = Number(anyNumber);
        var text = hexArr[Math.floor(anyNumber/16)] + hexArr[(anyNumber/16 - Math.floor(anyNumber/16)) * 16];
        if(text >=0 && text <= 9) {
            return text = "0" + text;
        }
        return text;
    }

    function RGBtoHEXconversion(){
        
      var r = document.getElementById("r").value;
      var g = document.getElementById("g").value;
      var b = document.getElementById("b").value;

        r = checkInput(r);
        g = checkInput(g);
        b = checkInput(b);

      var hexText = RGBFormular(r) + RGBFormular(g) + RGBFormular(b);
      
      document.getElementById("hex-display").innerHTML = "HEX#: " + hexText;
      document.getElementById("hex-display").style.visibility = "visible";

    

    }

// #DA70D6
// First Value
// Take the first digit, D, and convert it into decimal. The result is 13.
// Multiply 13 by 16. 13 (16) = 208. This is the partial value.
// Take the second digit, A, and convert it into decimal. The result is 10.
// Add the partial value to the second digit. 208 + 10 = 218.
// This means that 218 is the red value.

// Second Value
// Take the third digit, 7, and convert it into decimal. The result is 7.
// Multiply 7 by 16. 7 (16) = 112. This is the partial value.
// Take the fourth digit, 0, and convert it into decimal. The result is 0.
// Add the partial value to the second digit. 112 + 0 = 112.
// This means that 112 is the green value.

// Third Value
// Take the fifth digit, D, and convert it into decimal. The result is 13.
// Multiply 13 by 16. 13 (16) = 208. This is the partial value.
// Take the sixth digit, 6, and convert it into decimal. The result is 6.
// Add the partial value to the second digit. 208 + 6 = 214.
// This means that 214 is the blue value, giving us our final result of rgb(218, 112, 214).
    function hexFormular(anyNumber){
        var temp = 0;
        if (anyNumber.match(/[^a-f0-9]/gi) == null || anyNumber.match(/[^a-f0-9]/gi) == ""){
            if (anyNumber.match(/[a-g]/gi)) {
                anyNumber = anyNumber.toUpperCase();
            }
            for (let i = 0 ; i < hexArr.length; i++) {
                if (hexArr[i] == anyNumber.charAt(0)){
                    temp = i * 16;
                }
            }
            
            for ( i = 0 ; i < hexArr.length; i++) {
                if (hexArr[i] == anyNumber.charAt(1)){
                    temp = temp + i;
                }
            }
            return temp ;
        } else {
            alert("Please input letters between a to f or numbers between 0-9");
            return false;
        }
    }    
    function HEXtoRGBconversion(){
      var hex = document.getElementById("hex").value;
      //console.log(hex.slice(2,4));

      var r = hexFormular(hex.slice(0,2));
      var g = hexFormular(hex.slice(2,4));
      var b = hexFormular(hex.slice(4,6));
  
      
    
      var rgbText = r + "," + g + "," + b;
      document.getElementById("rgb-display").innerHTML = "RGB: " + rgbText;
      document.getElementById("rgb-display").style.visibility = "visible";
    }
  
    $("#btn-rgb-hex").click(function(){
        RGBtoHEXconversion();
    });
  
    $("#btn-hex-rgb").click(function(){
        HEXtoRGBconversion();
    });
    
  });