
function calculateAreaOfTriangle(){
    const base = getTheElementValue("triangle-base");
    const height = getTheElementValue('triangle-height')
    const area = 0.5 * base * height;
    totalArea("triangle-area", area);
}