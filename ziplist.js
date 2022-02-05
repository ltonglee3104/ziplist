const letter = ['a', 'b', 'c'];
const number = [1, 2, 3];
function zipList(array1, array2,){
  let result = [];
  if (array1.length != array2.length) {
    console.log('Please pass in two arrays of the same length.');
    return -1;
  } else {
    for (let i = 0; i < array1.length; i++) {
      result.push(array1[i]);
      result.push(array2[i]);
    }
  }
  return result;
}

console.log(zipList(letter, number));

function zipListTheSimpleWay (array1, array2) {
  return _.flatten(_.zip(array1, array2));
}

console.log(zipListTheSimpleWay(letter, number));

