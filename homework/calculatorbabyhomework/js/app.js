// console.log('hay');
//UI
const calinput = document.querySelector('.calinput'),
        result = document.querySelector('.result');

const numbtns = document.querySelectorAll('.numbtn'),
        armbtns = document.querySelectorAll('.armbtn'),
        clearbtn = document.querySelector('.clearbtn'),
        equalbtn = document.querySelector('.equalbtn');
var num1,num2,sign,exresult;


//Event Listener


//for each number button
numbtns.forEach(function(numbtn){
    numbtn.addEventListener('click',function(e){
        // console.log('hay');
        // console.log(e.target.textContent);
        calinput.value += e.target.textContent;
    });
});

//for arithmetic operator
armbtns.forEach(function(armbtn){
        armbtn.addEventListener('click',function(e){
            // console.log('hay');
            // console.log(e.target.textContent);
            if(this.classList.contains('divide')){
                if(!isInputNull()){
                    num1 = parseFloat(calinput.value);
                    sign = '\u00F7';
                    calinput.value += '\u00F7';
                }                
             }else if(this.classList.contains('sqroot')){
                    sign = 'sqroot';
                    calinput.value += '\u221A'; 
                 
             }else if(this.textContent == '+' || this.textContent == '-' || this.textContent == 'x' || this.textContent == '%'){
                if(!isInputNull()){
                    num1 = parseFloat(calinput.value);
                    // console.log(num1);
                    sign = this.textContent;
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

// calinput.addEventListener('change',function(){
//     var expression = calinput.value;
// });

equalbtn.addEventListener('click',function(){
    var index = calinput.value.indexOf(sign)
    num2 = parseFloat(calinput.value.substring(index+1));
    // console.log(num2);
    switch(sign){
        case '+':
            exresult = num1+num2;
            break;
        case '-':
            exresult = num1-num2;
                break;
        case 'x':
           exresult = num1*num2;
                break;
        case '\u00F7':
            exresult = num1/num2;
                break;
        case '%':
            exresult = num1 % num2;
            break;
        case 'sqroot':
            var num = parseFloat(calinput.value.substring(1));
            exresult = Math.sqrt(num);
    }
    result.textContent = exresult;
});

//check input is null or empty
function isInputNull(){
    if(calinput.value == ''){
        return true;
    }
    return false;
}