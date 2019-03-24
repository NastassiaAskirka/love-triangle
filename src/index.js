
module.exports = function getLoveTrianglesCount ( array ) {
  let count = -1;
    for ( i = 0; i < array.length; i++ ) {
        i === array[array[array[i]]];
        if ( count < i ) {
            count = i;
        }
    } return ( count + 1 )/3;
};
