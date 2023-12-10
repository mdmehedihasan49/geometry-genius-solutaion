// get value by id from input field
function getValueById (id){
    const elementValueText = document.getElementById(id);
    const elementValue = elementValueText.value;
    const element = parseFloat(elementValue);
    return element;
}
// set value by id text field
function setValueById (elementId, value){
    const elementValue = document.getElementById(elementId); 
    elementValue.innerText = value;
}
// Triangle btn click
document.getElementById('calculate-triangle-btn').addEventListener('click', function (){
    const triangleBase = getValueById('triangle-base');
    const triangleHeight = getValueById ('triangle-height');

    const totalValue = 0.5 * triangleBase * triangleHeight;
    console.log(totalValue);

    setValueById ('triangle-area', totalValue);

    addCalculationEntry ("Triangle", totalValue);
})
// Rectangle btn click
document.getElementById('calculate-rectangle-btn').addEventListener('click', function (){
    const rectangleWidth = getValueById('rectangle-width');
    const rectangleLength = getValueById ('rectangle-length');

    const totalValue =  rectangleWidth * rectangleLength ;
    console.log(totalValue);

    setValueById ('rectangle-area', totalValue);

    addCalculationEntry ("Rectangle", totalValue);
})
// Parallelogram btn click
document.getElementById('calculate-parallelogram-btn').addEventListener('click', function (){
    const parallelogramBase = getValueById('parallelogram-base');
    const parallelogramHeight = getValueById ('parallelogram-height');

    const totalValue = parallelogramBase * parallelogramHeight;
    console.log(totalValue);

    setValueById ('parallelogram-area', totalValue);

    addCalculationEntry ("Parallelogram", totalValue);
})
// Ellipse btn click
document.getElementById('calculate-ellipse-btn').addEventListener('click', function (){
    const ellipseMajorRadius = getValueById('ellipse-major-radius');
    const ellipseMinorRadius = getValueById ('ellipse-minor-radius');

    const totalValue = 3.1416* ellipseMajorRadius * ellipseMinorRadius ;
    const ellipseTotalValue = totalValue.toFixed (2)
    
    console.log(ellipseTotalValue);


    setValueById ('ellipse-area', ellipseTotalValue);

    addCalculationEntry ("Ellipse", ellipseTotalValue);
})


// Add to calculation entry

function addCalculationEntry (areaType, area){
    const calculateEntry = areaType + ' ' + area ;
    console.log (calculateEntry);
    const calculationEntry = document.getElementById('calculation-entry');

    const p = document.createElement('p');
    p.innerText = calculateEntry;
    calculationEntry.appendChild(p);

}