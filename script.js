/* The code is setting up an event listener for each button on the page. When a button is clicked, the
code checks the innerHTML of the button to determine what action to take. */
// first make a blank string for the output screen input 
let string = "";
let buttons = document.querySelectorAll("button");

buttons.forEach(function(elem) {
    elem.addEventListener("click", function(dets){
        
        if(dets.target.innerHTML ==  '='){
            string =  eval(string);
            document.querySelector('input').value = string;
        }
    
        else if(dets.target.innerHTML  == 'C'){
            string = "";
            document.querySelector('input').value =  string;
        }

        else{
            string = string + dets.target.innerHTML;
        document.querySelector("input").value = string;
        }
    })
})
