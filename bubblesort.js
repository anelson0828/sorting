function bubbleSort(array, count = 0) {
  let swap = false;
  if (count === array.length - 1 || array.length === 0) {
    return array;
  }
  for (let i = 0; i < array.length - 1; i++) {
    let pointer1 = array[i];
    let pointer2 = array[i + 1];

    //swap
    if (pointer1 > pointer2) {
      const temp = pointer1;
      array[i] = pointer2;
      array[i + 1] = temp;
      swap = true;
    }
  }
  if (!swap) return array;
  return bubbleSort(array, ++count);
}
