
function calculateTheAreaOfRombhus(){
    const diagonalOne = getTheElementValue('diagonal-one');
    const diagonalTwo = getTheElementValue("diagonal-two");
    area = diagonalOne * diagonalTwo;
    totalArea("rombus-area", area);
}