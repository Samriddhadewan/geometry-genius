function calculateTheAreaOfTriangle(){
    const perimeter = getTheElementValue('perimeter');
    const base = getTheElementValue('base');
    area = 0.5 * perimeter * base;
    totalArea("pentagon-area", base);
}