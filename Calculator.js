// targeting display of the calculator
let input = document.getElementById("dis-box");
// targetting all buttons
let buttons = document.querySelectorAll('button');
let string = "";
// adding eventlistener on clicking buttons
let btn = Array.from(buttons);
btn.forEach(button =>{
    button.addEventListener('click', (e)=>{
        if (e.target.innerHTML == "=") {
            string = eval(string); 
            input.value = string;
        } 
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0,string.length-1);
            input.value = string;
        }
        else{
            string +=e.target.innerHTML;
            input.value = string;
        }
       
    })
})