
// You should implement your task here.

module.exports = function towelSort (matrix) {
  var returnArr =[];
  if(matrix){
    matrix.forEach((element,ID) => {
      if(ID==0 || ID%2==0){
        for(let i=0;i<element.length;i++){
            returnArr.push(element[i]);
        }
      }else{
        for(let i=element.length-1;i>=0;i--){
            returnArr.push(element[i]);
        }
      }
    });
 }
  return returnArr;
}
