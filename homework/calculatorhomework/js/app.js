// console.log('hay');
//UI
const calinput = document.querySelector('.calinput'),
        result = document.querySelector('.result');

const numbtns = document.querySelectorAll('.numbtn'),
        armbtns = document.querySelectorAll('.armbtn'),
        clearbtn = document.querySelector('.clearbtn'),
        equalbtn = document.querySelector('.equalbtn'),
        backspacebtn = document.querySelector('.backspacebtn');



//check input is null or empty
function isInputNull(){
    if(calinput.value == ''){
        return true;
    }
    return false;
}
//check user enter double operator
function doubleoperator(){
    var length = calinput.value.length;
    if(calinput.value.charAt(length-1) == '+' || 
    calinput.value.charAt(length-1) == '-' ||
    calinput.value.charAt(length-1) == 'x' ||
    calinput.value.charAt(length-1) == '\u00F7' ||
    calinput.value.charAt(length-1) == '%' ||
    calinput.value.charAt(length-1) == '.'){
        return true;
    }
    return false;
}

//for calculating the input string
function calculate(){
    var input = calinput.value;
    var expression = input.replaceAll('x','*').replaceAll('\u00F7','/');
    // console.log(expression);

    // The eval() function evaluates or executes an argument.
    // If the argument is an expression, eval() evaluates the expression. If the argument is one or more JavaScript statements, eval() executes the statements.
    
    var exresult = eval(expression);
    console.log(exresult);
    result.textContent = exresult;
    return exresult;
}


//Event Listener

//for each number button
numbtns.forEach(function(numbtn){
    numbtn.addEventListener('click',function(e){
        // console.log('hay');
        // console.log(e.target.textContent);
        if(this.textContent == '.'){
            if(isInputNull()){
                calinput.value = '0'+e.target.textContent;
                calculate();
            }
            if(!doubleoperator()){
               calinput.value += e.target.textContent;
               calculate();
            }
        }else{
            calinput.value += e.target.textContent;
            calculate();
        }
    });
});

//for arithmetic operator
armbtns.forEach(function(armbtn){
        armbtn.addEventListener('click',function(e){
            // console.log('hay');
            // console.log(e.target.textContent);
            if(this.classList.contains('divide')){
                if(!isInputNull() && !doubleoperator()){
    
                    calinput.value += '\u00F7';
                }                   
             }else if(this.textContent == '+' || this.textContent == '-' || this.textContent == 'x' || this.textContent == '%'){
                if(!isInputNull() && !doubleoperator()){

                    calinput.value += e.target.textContent;
                }
             }else{
                calinput.value += e.target.textContent;
             }        
        });
});

//for clear btn
clearbtn.addEventListener('click',function(){
    calinput.value = '';
    result.textContent = '';
})

//for backspace btn
backspacebtn.addEventListener('click',function(){
    calinput.value = calinput.value.substring(0,calinput.value.length-1);
    result.textContent = '';
})

// calinput.addEventListener('change',function(){
    //  calculate();
    // console.log('hay');
// });

equalbtn.addEventListener('click',function(){
        
        calinput.value = calculate();
});