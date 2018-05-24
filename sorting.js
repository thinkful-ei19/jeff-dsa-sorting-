const data =[89,30,25,32,72,70,51,42,25,24,53,55,78,50,13,40,48,32,26,2,14,33,45,72,56,44,21,88,27,68,15 ,62 ,93 ,98 ,73 ,28 ,16 ,46 ,87 ,28 ,65 ,38 ,67 ,16 ,85 ,63 ,23 ,69 ,64 ,91 ,9 ,70 ,81 ,27 ,97 ,82 ,6 ,88 ,3 ,7 ,46 ,13 ,11 ,64 ,76 ,31 ,26 ,38 ,28 ,13 ,17 ,69 ,90 ,1 ,6 ,7 ,64 ,43 ,9 ,73 ,80 ,98 ,46 ,27 ,22 ,87 ,49 ,83 ,6 ,39 ,42 ,51 ,54 ,84 ,34 ,53 ,78 ,40 ,14 ,5]
//swaps the values of the array 
let sCounter = 0;
let pCounter = 0;
let sortCounter = 0;
function swap(array, i, j) {
  sCounter++
  const tmp = array[i];

  array[i] = array[j];

  array[j] = tmp;

  console.log(counter)
};
//  we need to compare and swapped 
function partition(array, start, end) {
  let pCounter = 0;
  const pivot = array[end - 1];
  let j = start;
  for (let i=start; i<end - 1; i++) {
      if (array[i] <= pivot) {
          swap(array, i, j);
          j++;
      }
  }
  swap(array, end-1, j);
  return j;
};

function quickSort(array, start=0, end=array.length) {
  sortCounter++
  start = start;
  end = end;
  if (start >= end) {
      return array;
  }
  const middle = partition(array, start, end);
  array = quickSort(array, start, middle);
  array = quickSort(array, middle + 1, end);
  return array;
};

  // console.log(quickSort(data))
  // console.log(sortCounter)
  // console.log(sCounter)
  // console.log(pCounter)
  // console.log('this is sortCounter:', sortCounter);
  // console.log('this is pCounter:', pCounter);
  // console.log('this is sCounter:', sCounter);
  // const totalCounter = sortCounter + pCounter + sCounter;
  // console.log('this is totalCounter:', totalCounter);

  function mergeSort(array) {
    if (array.length <= 1) {
      
      // return arrayfunction shuffle(array){
  console.log('array is', array.length);


  let temp;
  for(let i = 0 ; i < array.length ; i++){
    let randIndex1 = Math.floor( Math.random() * array.length );
    let randIndex2 = Math.floor( Math.random() * array.length );
    swap(array,randIndex1, randIndex2);
  }
  return array;
}

function swap(array,i,j){
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}
    }

    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    left = mergeSort(left);
    right = mergeSort(right);
    return merge(left, right, array);
};

function merge(left, right, array) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
          array[outputIndex++] = left[leftIndex++];
      }
      else {
          array[outputIndex++] = right[rightIndex++];
      }
  }

  for (let i=leftIndex; i<left.length; i++) {
      array[outputIndex++] = left[i];
  }

  for (let i=rightIndex; i<right.length; i++) {
      array[outputIndex++] = right[i];
  }
  console.log("thsi is my ounter",counter)
  return array;
};

// console.log(mergeSort(data))

/////

const data =[89,30,25,32,72,70,51,42,25,24,53,55,78,50,13,40,48,32,26,2,14,33,45,72,56,44,21,88,27,68,15 ,62 ,93 ,98 ,73 ,28 ,16 ,46 ,87 ,28 ,65 ,38 ,67 ,16 ,85 ,63 ,23 ,69 ,64 ,91 ,9 ,70 ,81 ,27 ,97 ,82 ,6 ,88 ,3 ,7 ,46 ,13 ,11 ,64 ,76 ,31 ,26 ,38 ,28 ,13 ,17 ,69 ,90 ,1 ,6 ,7 ,64 ,43 ,9 ,73 ,80 ,98 ,46 ,27 ,22 ,87 ,49 ,83 ,6 ,39 ,42 ,51 ,54 ,84 ,34 ,53 ,78 ,40 ,14 ,5]
function bSort(array){
    let i;
     let min = array[0];
    let  max = array[0];
      
  //
  // Setting min and max values
  array.forEach(function (currentVal) {
  	if (currentVal < min) {
  		min = currentVal;
  	} else if (currentVal > max) {
  		max = currentVal;
  	}
  })
  let bucketCount = max - min + 1;
  let buckets = new Array(bucketCount);
  let result = [];
  for (let i = 0; i <array.length; i++){
    buckets[array[i] - min] = array[i];
  }
  for(let j = 0; j <buckets.length; j++){
    if(typeof buckets[j] ==='number'){
      result.push(buckets[j]);
    }
  }
  return result;
}

// console.log(bSort(data));

function shuffle(array){
  console.log('array is', array.length);


  let temp;
  for(let i = 0 ; i < array.length ; i++){
    let randIndex1 = Math.floor( Math.random() * array.length );
    let randIndex2 = Math.floor( Math.random() * array.length );
    swap(array,randIndex1, randIndex2);
  }
  return array;
}

function swap(array,i,j){
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}
/* First I would the book into an array then 
get the first letter of the book title. Once I 
have that, I would loop through to see if
I have any duplicates, and if there is
any duplicates, I would shift to the right
and going into a recusive loop again.
I think I would use the dSort*/