function calculateTheAreaOfEllipse(){
    const Aaxis = getTheElementValue('Aaxis');
    const Baxis = getTheElementValue('Baxis');
    const area = 3.1416 * Aaxis * Baxis;
    totalArea('ellipse-area', area);   
}
