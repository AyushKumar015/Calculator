
// calculator

let a = document.getElementById("display");

function call(value) 
{
    if(value=='ac')
    {
        a.value ='';
    }
    
    else if(value=='=')
    {
        a.value=eval(display.value)
    }
    else
    a.value += value;
}




