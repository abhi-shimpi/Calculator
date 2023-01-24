

let string = "";
let  buttons = document.querySelectorAll('.btn');
let arrayOfButtons = Array.from(buttons);

arrayOfButtons.forEach(calculate);

function calculate(button) {
    console.log("YEs");
    button.addEventListener('click',(eve)=>{

        if(eve.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(eve.target.innerHTML == 'AC'){
            string = ""
            document.querySelector('input').value = string;
        }
        else { 
            console.log(eve.target.innerHTML);
            string = string + eve.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
}























// var n = "";
// var op = "";
// var eval1 = "";
// var showbox = document.getElementById('dispalay-box');
// //showbox.innerHTML.style.marginTop ="2rem"

// function myFunction(str) {
//     n = "";
//     n += showbox.innerHTML;
// }

// function onclickFunction(ele) {
//     n += ele.value;
//     // console.log(n);
//     showbox.innerHTML = n;
// }

// function operator(sign) {
//     op = sign.value;
//     n = n + op;
//     // console.log(n);
//     //n = eval1
//     showbox.innerHTML = n;
// }
// function operatorPerc() {
//     var perc = n + "/" + "100";
//     // console.log(eval(perc));
//     n = eval(perc);
//     showbox.innerHTML = n;
// }
// function changeValue() {

//     if (!n) {
//         showbox.innerHTML = "NaN";
//     }
//     else if (n > 0) {
//         //console.log("-" + n);
//         n = "-" + n;
//         showbox.innerHTML = n;
//     }
//     else {
//         var r = "";
//         //console.log(eval(r));
//         r += eval("-n");
//         console.log(r);
//         n = r;
//         showbox.innerHTML = n;
//     }

// }

// function result() {
//     //console.log("hey");
//     console.log("result :" + eval(n));
//     n = eval(n);
//     showbox.innerHTML = n;

// }


// showbox.addEventListener('keypress', function (event) {
//     if (event.key == "Enter") {
//         //console.log("huhh");
//         showbox.innerHTML = eval(showbox.innerHTML);
//     }
// })


// function onClr() {
//     n = "";
//     showbox.innerHTML = "";
// }