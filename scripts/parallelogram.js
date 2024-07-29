
function calculateTheAreaOfParallelogram(){
    const base = getTheElementValue('parallelogram-base');
    const height = getTheElementValue("parallelogram-height");
    const area = base * height;
    totalArea("parallelogram-area", area);
}