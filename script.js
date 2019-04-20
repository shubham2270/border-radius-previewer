const box = document.getElementById('box');
const outputValue = document.getElementById('value');
const message = document.getElementById('message');

const topLeft = document.getElementById('topLeft');
const topRight = document.getElementById('topRight');
const bottomRight = document.getElementById('bottomRight');
const bottomLeft = document.getElementById('bottomLeft');

//Gets all the styles of box
const boxStyles = getComputedStyle(box);

//Gets border-radius style
const currentRadius = boxStyles.getPropertyValue('border-radius');

//Gets the value of all four corners
const TLR = boxStyles.getPropertyValue('border-top-left-radius');
const TRR = boxStyles.getPropertyValue('border-top-right-radius');
const BRR = boxStyles.getPropertyValue('border-bottom-right-radius');
const BLR = boxStyles.getPropertyValue('border-bottom-left-radius');

//Sets the value of respective corder to input text boxes
topLeft.value = TLR;
topRight.value = TRR;
bottomRight.value = BRR;
bottomLeft.value = BLR;

//Displays the current radius to output area
outputValue.value = `border-radius:  ${currentRadius}`;


//Modifies the radius on typing on input boxes and also displays result same time
const modifyRadius = () => {
    let a = topLeft.value;
    let b = topRight.value;
    let c = bottomRight.value;
    let d = bottomLeft.value;
    
    box.style.borderRadius = `${a} ${b} ${c} ${d}`; //change style
    
    const currentRadius = boxStyles.getPropertyValue('border-radius');
    outputValue.value = `border-radius:  ${currentRadius}`;
    message.innerHTML = 'Click & Copy this style to clipboard'; //displays this message on hovering the result area
}

//Copy's the output radius value on clicking the result box area
const copyValue = () => {
    outputValue.select();
    document.execCommand('copy');
    message.innerHTML = 'Copied!!'
}



outputValue.addEventListener('click', copyValue)

topLeft.addEventListener('input', modifyRadius)
topRight.addEventListener('input', modifyRadius)
bottomRight.addEventListener('input', modifyRadius)
bottomLeft.addEventListener('input', modifyRadius)



