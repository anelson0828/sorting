function bubbleSort(array, count = 0) {
  /* your code here */
  let swapCount = false;
  if (count === array.length - 1 || array.length === 0) {
    return array;
  }
  for (let i = 0; i < array.length - 1; i++) {
    let pointer1 = array[i];
    let pointer2 = array[i + 1];
    if (pointer1 > pointer2) {
      const temp = pointer1;
      array[i] = pointer2;
      array[i + 1] = temp;
      swapCount = true;
    }
  }
  if (!swapCount) return array;
  console.log(array);
  return bubbleSort(array, ++count);
}

function swap(one, two) {
  const temp = one;
  one = two;
  two = temp;
}
