let output = document.getElementById('output');
buttons = document.querySelectorAll('button');
let outputValue = '';
function validate(evt) {
    var vl = output.value;
    vl = vl.split("").filter((v) => ((v >= 0 && v <= 9) || (v == '+') || (v == '-') || (v == '*') || (v == "/") || (v == "%") || (v == "(") || (v == ")") || (v == "^"))).join("");
    output.value = vl;
    outputValue = vl;   
}
for (item of buttons) {
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        console.log("Button Text is", buttonText)
        if (buttonText == 'x') {
            buttonText = '*';
            outputValue += buttonText;
            output.value = outputValue;
        }
        else if (buttonText == '÷') {
            buttonText = '/';
            outputValue += buttonText;
            output.value = outputValue;
        }
        else if (buttonText == '=')
        {
            output.value = eval(outputValue); 
        }
        else if (buttonText == 'C')
        {
            outputValue = '';
            output.value = outputValue;
        }
        else if (buttonText == 'del')
        {
            outputValue = outputValue.substr(0, outputValue.length - 1);
            output.value = outputValue;
        }
        else {
            outputValue += buttonText;
            output.value = outputValue;
        }
    })
}