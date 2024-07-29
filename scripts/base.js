
function getTheElementValue(element){
    const getElement = document.getElementById(element);
    getElementValue = getElement.value;
    const value = parseFloat(getElementValue);
    return value;
}
function totalArea(elementArea, area ){
    // this is the span id that will show the total value 
    const totalArea = document.getElementById(elementArea)
    totalArea.innerText = area;
}