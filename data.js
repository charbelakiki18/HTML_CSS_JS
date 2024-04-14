var s = "";
n = 0;
result = 0;
counter = 10;
button1 = document.querySelector("#btn1")
button2 = document.querySelector("#btn2")
button3 = document.querySelector("#btn3")
button4 = document.querySelector("#btn4")
button5 = document.querySelector("#btn5")
button6 = document.querySelector("#btn6")
button7 = document.querySelector("#btn7")
button8 = document.querySelector("#btn8")
button9 = document.querySelector("#btn9")
clc = document.querySelector("#clc")
p = document.querySelector("#p")
e = document.querySelector("#e")
output = document.querySelector("#display")

button1.addEventListener("click",function(){display(1)})
button2.addEventListener("click",function(){display(2)})
button3.addEventListener("click",function(){display(3)})
button4.addEventListener("click",function(){display(4)})
button5.addEventListener("click",function(){display(5)})
button6.addEventListener("click",function(){display(6)})
button7.addEventListener("click",function(){display(7)})
button8.addEventListener("click",function(){display(8)})
button9.addEventListener("click",function(){display(9)})
clc.addEventListener("click",function(){display("c")})
p.addEventListener("click",function(){display("+")})
e.addEventListener("click",function(){display("=")})


function display(i){
    if(i == "c"){
        s = "";
        n = 0;
        result = 0;
        output.innerText = s;
    }
    else if(i=="+"){
        result = result + n;
        s = s + " " + i + " ";
        n = 0;
        output.innerText = s;

    }
    else if(i=="="){
        result = result + n;
        s = s + " = " + result;
        output.innerText = s;
        s = "";
        result = 0;
        n = 0;
    }
    else{
        s = s + i;
        n = n*counter + i;
        output.innerText = s;
    }

}